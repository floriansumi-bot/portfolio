/* ============================================================
   Custom SoundCloud players — fully self-skinned.
   Streams via SoundCloud's official Widget API (hidden iframe),
   but renders our own UI: album art + play button + moving
   waveform. No SoundCloud chrome, logo, like or follower counts.
   ============================================================ */
(function () {
  const PLAY_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';
  const PAUSE_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor"/></svg>';

  const players = [];
  const relabelers = []; // re-apply play/pause aria-labels when the language changes
  const tr = (k, fb) => (typeof window.t === "function" ? window.t(k) : fb) || fb;

  function fmt(s) {
    s = Math.max(0, Math.floor(s || 0));
    const m = Math.floor(s / 60), sec = s % 60;
    return m + ":" + (sec < 10 ? "0" : "") + sec;
  }

  // Deterministic, organic-looking fallback waveform (0..1) seeded per track.
  function genWave(seed, n) {
    let s = (seed >>> 0) || 12345;
    const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xffffffff; };
    const out = [];
    for (let i = 0; i < n; i++) {
      const env = 0.35 + 0.65 * Math.pow(Math.sin((i / n) * Math.PI), 0.55);
      const detail = 0.5 + 0.5 * Math.sin(i * 0.9) * Math.sin(i * 0.21);
      out.push(Math.max(0.07, Math.min(1, env * (0.35 + 0.65 * (0.4 * detail + 0.6 * rnd())))));
    }
    return out;
  }

  function setupCard(card) {
    const iframe = card.querySelector("iframe");
    const playBtn = card.querySelector(".music-play");
    const canvas = card.querySelector(".music-wave");
    const timeEl = card.querySelector(".music-time");
    if (!iframe || !playBtn || !canvas || typeof SC === "undefined") return;

    const ctx = canvas.getContext("2d");
    const seed = parseInt(card.dataset.seed || "7", 10);
    const N = 96;
    let wave = genWave(seed, N);
    let progress = 0, playing = false, duration = 0, raf = null;
    const reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    function sizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth || 240, h = canvas.clientHeight || 48;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(t) {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const bw = w / N, gap = Math.min(2, bw * 0.35);
      for (let i = 0; i < N; i++) {
        let amp = wave[i];
        if (playing && !reduced) { const d = Math.abs(i / N - progress); if (d < 0.07) amp *= 1 + 0.22 * Math.sin((t || 0) / 100 + i); }
        const bh = Math.max(2, Math.min(1, amp) * h * 0.92);
        const x = i * bw, y = (h - bh) / 2;
        ctx.fillStyle = (i / N) <= progress ? "rgba(34,211,238,0.96)" : "rgba(236,235,255,0.16)";
        ctx.fillRect(x, y, Math.max(1.5, bw - gap), bh);
      }
    }

    function loop(t) { draw(t); if (playing) raf = requestAnimationFrame(loop); }
    function startLoop() { if (reduced) { draw(); return; } if (!raf) raf = requestAnimationFrame(loop); }
    function stopLoop() { if (raf) { cancelAnimationFrame(raf); raf = null; } draw(); }

    function setPlaying(p) {
      playing = p;
      card.classList.toggle("is-playing", p);
      playBtn.innerHTML = p ? PAUSE_ICON : PLAY_ICON;
      playBtn.setAttribute("aria-label", p ? tr("music.pause", "Pause") : tr("music.play", "Play"));
      if (p) startLoop(); else stopLoop();
    }

    sizeCanvas(); draw();
    window.addEventListener("resize", () => { sizeCanvas(); draw(); });

    const widget = SC.Widget(iframe);
    players.push(widget);

    widget.bind(SC.Widget.Events.READY, function () {
      widget.getDuration(function (d) { duration = (d || 0) / 1000; });
      widget.getCurrentSound(function (sound) {
        if (sound && sound.waveform_url) {
          const u = sound.waveform_url.replace(/\.png(\?|$)/, ".json$1");
          fetch(u).then((r) => r.json()).then((j) => {
            if (j && j.samples && j.samples.length) {
              const max = Math.max.apply(null, j.samples) || 1;
              const step = j.samples.length / N, arr = [];
              for (let i = 0; i < N; i++) arr.push(Math.max(0.07, (j.samples[Math.floor(i * step)] || 0) / max));
              wave = arr; draw();
            }
          }).catch(() => {});
        }
      });
    });
    widget.bind(SC.Widget.Events.PLAY, () => setPlaying(true));
    widget.bind(SC.Widget.Events.PAUSE, () => setPlaying(false));
    widget.bind(SC.Widget.Events.FINISH, () => { setPlaying(false); progress = 0; if (timeEl) timeEl.textContent = fmt(0); draw(); });
    widget.bind(SC.Widget.Events.PLAY_PROGRESS, (e) => {
      progress = (e && e.relativePosition) || 0;
      if (timeEl && duration) timeEl.textContent = fmt(progress * duration);
      if (reduced) draw();
    });

    playBtn.addEventListener("click", () => {
      if (playing) { widget.pause(); }
      else { players.forEach((w) => { if (w !== widget) w.pause(); }); widget.play(); }
    });

    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const rel = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      progress = rel; draw();
      if (duration) widget.seekTo(rel * duration * 1000);
    });

    setPlaying(false);
    // Keep this button's label in sync with the active language.
    relabelers.push(() => playBtn.setAttribute("aria-label", playing ? tr("music.pause", "Pause") : tr("music.play", "Play")));
  }

  function init() {
    if (typeof SC === "undefined" || !SC.Widget) return;
    document.querySelectorAll(".music-card").forEach(setupCard);
  }

  window.addEventListener("pf:lang", () => relabelers.forEach((fn) => { try { fn(); } catch (e) {} }));

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
