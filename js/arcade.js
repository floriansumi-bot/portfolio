/* ============================================================
   Hero mini falling-blocks game — 100% built into the page
   (vanilla JS + <canvas>, no iframe, no external service).
   It sits in the empty space beside the hero, slides in from
   below as you start scrolling, rests in the top-right, and
   slides up out of view before the About text can reach it.
   It only shows when there is genuine room, so phones in
   portrait never see it. It AUTO-PLAYS itself (a small built-in
   AI) the moment it appears; click / tap to take over.
   Original implementation — no third-party game code.
   ============================================================ */
(function () {
  const root = document.getElementById("arcade");
  if (!root) return;
  const canvas = document.getElementById("arcadeCanvas");
  const nextCanvas = document.getElementById("arcadeNext");
  const scoreEl = document.getElementById("arcadeScore");
  const linesEl = document.getElementById("arcadeLines");
  const touch = document.getElementById("arcadeTouch");
  if (!canvas || !nextCanvas) return;
  const ctx = canvas.getContext("2d");
  const nctx = nextCanvas.getContext("2d");

  const COLS = 10, ROWS = 20;

  /* Synthwave neon tetromino palette. */
  const PIECES = {
    I: { m: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], c: "#22e0ff" },
    O: { m: [[1,1],[1,1]], c: "#ffd23f" },
    T: { m: [[0,1,0],[1,1,1],[0,0,0]], c: "#c04bff" },
    S: { m: [[0,1,1],[1,1,0],[0,0,0]], c: "#3dff9e" },
    Z: { m: [[1,1,0],[0,1,1],[0,0,0]], c: "#ff2d95" },
    J: { m: [[1,0,0],[1,1,1],[0,0,0]], c: "#4d8bff" },
    L: { m: [[0,0,1],[1,1,1],[0,0,0]], c: "#ff8a3d" },
  };
  const KEYS = Object.keys(PIECES);

  let cell = 16, board, cur, nextPiece, bag = [];
  let score = 0, lines = 0, level = 1, dropMs = 650, acc = 0, last = 0, raf = null;
  let running = false, gameOver = false, userControl = false;
  let aiTarget = null, aiAcc = 0, overAcc = 0;

  function newBoard() { return Array.from({ length: ROWS }, () => new Array(COLS).fill(null)); }
  function rotate(m) { const N = m.length, r = Array.from({ length: N }, () => new Array(N).fill(0)); for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) r[x][N - 1 - y] = m[y][x]; return r; }
  function refillBag() { bag = KEYS.slice(); for (let i = bag.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [bag[i], bag[j]] = [bag[j], bag[i]]; } }
  function nextFromBag() { if (!bag.length) refillBag(); const k = bag.pop(); return { key: k, m: PIECES[k].m.map((r) => r.slice()), c: PIECES[k].c }; }
  function spawn(p) { const w = p.m.length; return { m: p.m, c: p.c, key: p.key, x: Math.floor((COLS - w) / 2), y: p.key === "I" ? -1 : 0, rot: 0 }; }

  function collidesAbs(m, px, py) {
    for (let y = 0; y < m.length; y++) for (let x = 0; x < m.length; x++) {
      if (!m[y][x]) continue;
      const nx = px + x, ny = py + y;
      if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
      if (ny >= 0 && board[ny][nx]) return true;
    }
    return false;
  }
  function collides(ox, oy, m) { return collidesAbs(m || cur.m, cur.x + ox, cur.y + oy); }
  function merge() { for (let y = 0; y < cur.m.length; y++) for (let x = 0; x < cur.m.length; x++) if (cur.m[y][x] && cur.y + y >= 0) board[cur.y + y][cur.x + x] = cur.c; }
  function clearLines() {
    let cleared = 0;
    for (let y = ROWS - 1; y >= 0; y--) if (board[y].every((v) => v)) { board.splice(y, 1); board.unshift(new Array(COLS).fill(null)); cleared++; y++; }
    if (cleared) {
      score += [0, 100, 300, 500, 800][cleared] * level;
      lines += cleared; level = 1 + Math.floor(lines / 10);
      dropMs = Math.max(110, 650 - (level - 1) * 60);
      if (scoreEl) scoreEl.textContent = score;
      if (linesEl) linesEl.textContent = lines;
    }
  }
  function lockAndNext() {
    merge(); clearLines();
    cur = spawn(nextPiece); nextPiece = nextFromBag(); drawNext();
    aiTarget = null;
    if (collidesAbs(cur.m, cur.x, cur.y)) { gameOver = true; overAcc = 0; return; }
    if (!userControl) planAI();
  }

  function move(dx) { if (!collides(dx, 0)) { cur.x += dx; return true; } return false; }
  function softDrop() { if (!collides(0, 1)) { cur.y++; acc = 0; } else lockAndNext(); }
  function hardDrop() { while (!collides(0, 1)) cur.y++; lockAndNext(); }
  function rotateCur() {
    const r = rotate(cur.m);
    for (const k of [0, -1, 1, -2, 2]) { if (!collidesAbs(r, cur.x + k, cur.y)) { cur.m = r; cur.x += k; cur.rot = (cur.rot + 1) % 4; return true; } }
    return false;
  }

  /* ---- tiny built-in AI (attract mode) ---- */
  function evalPlace(m, px, py) {
    const g = board.map((r) => r.slice());
    for (let y = 0; y < m.length; y++) for (let x = 0; x < m.length; x++) if (m[y][x] && py + y >= 0) g[py + y][px + x] = 1;
    let cleared = 0; for (let y = 0; y < ROWS; y++) if (g[y].every((v) => v)) cleared++;
    const h = new Array(COLS).fill(0); let agg = 0, holes = 0, bump = 0;
    for (let x = 0; x < COLS; x++) { let seen = false; for (let y = 0; y < ROWS; y++) { if (g[y][x]) { if (!seen) { h[x] = ROWS - y; seen = true; } } else if (seen) holes++; } agg += h[x]; }
    for (let x = 0; x < COLS - 1; x++) bump += Math.abs(h[x] - h[x + 1]);
    return cleared * 6 - agg * 0.5 - holes * 4 - bump * 0.4;
  }
  function planAI() {
    try {
      let best = null, bestScore = -1e9;
      for (let rot = 0; rot < 4; rot++) {
        let m = cur.m; for (let i = 0; i < rot; i++) m = rotate(m);
        for (let x = -2; x < COLS; x++) {
          if (collidesAbs(m, x, cur.y < 0 ? 0 : cur.y)) continue;
          let y = cur.y; while (!collidesAbs(m, x, y + 1)) y++;
          const s = evalPlace(m, x, y);
          if (s > bestScore) { bestScore = s; best = { rot, x }; }
        }
      }
      aiTarget = best;
    } catch (e) { aiTarget = null; }
  }
  function aiStep() {
    if (!aiTarget) { planAI(); if (!aiTarget) { softDrop(); return; } }
    if (cur.rot !== aiTarget.rot) { if (!rotateCur()) cur.rot = aiTarget.rot; }
    else if (cur.x < aiTarget.x) move(1);
    else if (cur.x > aiTarget.x) move(-1);
    else softDrop();
  }

  /* ---- rendering ---- */
  function sizeCanvases() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = COLS * cell * dpr; canvas.height = ROWS * cell * dpr;
    canvas.style.width = COLS * cell + "px"; canvas.style.height = ROWS * cell + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const ns = Math.round(cell * 0.78);
    nextCanvas.width = 4 * ns * dpr; nextCanvas.height = 4 * ns * dpr;
    nextCanvas.style.width = 4 * ns + "px"; nextCanvas.style.height = 4 * ns + "px";
    nctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nextCanvas._ns = ns;
  }
  function roundRect(c, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }
  /* Neon block with outer glow, glossy top and a bright inner edge. */
  function block(c, x, y, s, col) {
    const g = Math.max(1, s * 0.07), r = Math.max(2, s * 0.2);
    const bx = x * s + g, by = y * s + g, bw = s - 2 * g, bh = s - 2 * g;
    c.save();
    c.shadowColor = col; c.shadowBlur = s * 0.5;
    c.fillStyle = col; roundRect(c, bx, by, bw, bh, r); c.fill();
    c.shadowBlur = 0;
    c.fillStyle = "rgba(255,255,255,0.42)";
    roundRect(c, bx + bw * 0.16, by + bh * 0.12, bw * 0.68, bh * 0.22, r * 0.6); c.fill();
    c.strokeStyle = "rgba(255,255,255,0.30)"; c.lineWidth = Math.max(1, s * 0.05);
    roundRect(c, bx, by, bw, bh, r); c.stroke();
    c.restore();
  }
  function draw() {
    if (!board) return;
    const w = COLS * cell, h = ROWS * cell;
    // synthwave sky
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#1b0b33"); sky.addColorStop(0.55, "#140a26"); sky.addColorStop(1, "#0b0420");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    // horizon glow rising from the bottom
    const hz = ctx.createLinearGradient(0, h * 0.64, 0, h);
    hz.addColorStop(0, "rgba(255,45,149,0)"); hz.addColorStop(0.7, "rgba(255,45,149,0.10)"); hz.addColorStop(1, "rgba(34,224,255,0.18)");
    ctx.fillStyle = hz; ctx.fillRect(0, h * 0.64, w, h * 0.36);
    // neon grid
    ctx.strokeStyle = "rgba(124,77,255,0.16)"; ctx.lineWidth = 1; ctx.beginPath();
    for (let x = 0; x <= COLS; x++) { ctx.moveTo(x * cell + 0.5, 0); ctx.lineTo(x * cell + 0.5, h); }
    for (let y = 0; y <= ROWS; y++) { ctx.moveTo(0, y * cell + 0.5); ctx.lineTo(w, y * cell + 0.5); }
    ctx.stroke();
    // settled blocks
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) if (board[y][x]) block(ctx, x, y, cell, board[y][x]);
    if (cur && !gameOver) {
      // ghost (where the piece will land) as a dashed neon outline
      let gy = 0; while (!collides(0, gy + 1)) gy++;
      ctx.save();
      ctx.strokeStyle = cur.c; ctx.globalAlpha = 0.55; ctx.lineWidth = Math.max(1, cell * 0.08);
      ctx.setLineDash([Math.max(2, cell * 0.22), Math.max(2, cell * 0.18)]);
      const gr = Math.max(2, cell * 0.2);
      for (let y = 0; y < cur.m.length; y++) for (let x = 0; x < cur.m.length; x++) if (cur.m[y][x]) { const ry = cur.y + y + gy; if (ry >= 0) { roundRect(ctx, (cur.x + x) * cell + 1.5, ry * cell + 1.5, cell - 3, cell - 3, gr); ctx.stroke(); } }
      ctx.restore();
      // active piece
      for (let y = 0; y < cur.m.length; y++) for (let x = 0; x < cur.m.length; x++) if (cur.m[y][x] && cur.y + y >= 0) block(ctx, cur.x + x, cur.y + y, cell, cur.c);
    }
    // CRT scanlines
    ctx.fillStyle = "rgba(0,0,0,0.16)";
    for (let yy = 0; yy < h; yy += 3) ctx.fillRect(0, yy, w, 1);
    if (gameOver) {
      ctx.fillStyle = "rgba(8,6,20,0.62)"; ctx.fillRect(0, 0, w, h);
      ctx.save();
      ctx.fillStyle = "#ff2d95"; ctx.shadowColor = "#ff2d95"; ctx.shadowBlur = 14;
      ctx.font = "700 " + Math.max(10, Math.round(cell * 0.82)) + "px 'Space Grotesk', system-ui, monospace";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("GAME OVER", w / 2, h / 2);
      ctx.restore();
    }
  }
  function drawNext() {
    const ns = nextCanvas._ns || 12, W = 4 * ns;
    const bg = nctx.createLinearGradient(0, 0, 0, W);
    bg.addColorStop(0, "#180a2e"); bg.addColorStop(1, "#0b0420");
    nctx.fillStyle = bg; nctx.fillRect(0, 0, W, W);
    if (!nextPiece) return;
    const m = nextPiece.m, off = (4 - m.length) / 2;
    for (let y = 0; y < m.length; y++) for (let x = 0; x < m.length; x++) if (m[y][x]) block(nctx, x + off, y + off, ns, nextPiece.c);
  }

  /* ---- loop ---- */
  function loop(t) {
    if (!running) { raf = null; return; }
    if (!last) last = t;
    const dt = Math.min(t - last, 120); last = t;
    if (gameOver) {
      overAcc += dt;
      if (overAcc > 1400) { reset(); }   // auto-restart so it stays alive
      draw(); raf = requestAnimationFrame(loop); return;
    }
    acc += dt; aiAcc += dt;
    if (!userControl) { if (aiAcc > 70) { aiAcc = 0; aiStep(); } }
    if (acc >= dropMs) { acc = 0; if (!collides(0, 1)) cur.y++; else lockAndNext(); }
    draw();
    raf = requestAnimationFrame(loop);
  }
  function startLoop() { if (!raf) { last = 0; raf = requestAnimationFrame(loop); } }
  function stopLoop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  function reset() {
    board = newBoard(); score = 0; lines = 0; level = 1; dropMs = 650; acc = 0; aiAcc = 0; overAcc = 0; gameOver = false;
    if (scoreEl) scoreEl.textContent = "0"; if (linesEl) linesEl.textContent = "0";
    nextPiece = nextFromBag(); cur = spawn(nextFromBag()); drawNext();
    if (!userControl) planAI();
  }
  function ensureRunning() { if (!board) reset(); if (gameOver) reset(); running = true; startLoop(); draw(); }
  function pause() { running = false; stopLoop(); }
  function takeOver() { userControl = true; aiTarget = null; root.classList.add("is-active"); }

  /* ---- input: user can take over by click / key / touch ---- */
  canvas.addEventListener("click", takeOver);
  document.addEventListener("keydown", (e) => {
    if (state !== "show") return;
    const ctl = ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", " ", "Spacebar"].includes(e.key);
    if (e.key === "Escape") { if (userControl) { userControl = false; root.classList.remove("is-active"); if (!gameOver) planAI(); } return; }
    if (!ctl) return;
    if (!userControl) takeOver();
    e.preventDefault();
    if (e.key === "ArrowLeft") move(-1);
    else if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowDown") softDrop();
    else if (e.key === "ArrowUp") rotateCur();
    else hardDrop();
    draw();
  });
  if (touch) {
    const act = (a) => { if (a === "left") move(-1); else if (a === "right") move(1); else if (a === "down") softDrop(); else if (a === "rotate") rotateCur(); else if (a === "drop") hardDrop(); draw(); };
    touch.querySelectorAll("button").forEach((b) => {
      const a = b.dataset.act;
      let rep = null;
      const stop = () => { if (rep) { clearInterval(rep); rep = null; } };
      b.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        try { b.setPointerCapture(e.pointerId); } catch (e2) {}
        takeOver(); act(a);
        if (a === "left" || a === "right" || a === "down") rep = setInterval(() => act(a), 110);
      });
      b.addEventListener("pointerup", stop);
      b.addEventListener("pointercancel", stop);
    });
  }

  /* ---- responsive room detection ---- */
  let TOP = 92, _mode = "none"; const GAP = 18, MINH = 250, SIDE = 78;
  function heroTextRight() {
    const hero = document.querySelector(".hero-inner");
    if (!hero) return Infinity;
    let r = 0;
    hero.querySelectorAll(".hero-eyebrow,.hero-title,.hero-role,.hero-pitch,.hero-actions,.hero-stats").forEach((el) => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let n; while ((n = walker.nextNode())) { if (!n.nodeValue || !n.nodeValue.trim()) continue; try { const rng = document.createRange(); rng.selectNodeContents(n); const b = rng.getBoundingClientRect(); if (b && b.width) r = Math.max(r, b.right); } catch (e) {} }
    });
    return r || (hero.getBoundingClientRect().left + 320);
  }
  let _cellH = 0, _cellW = 0;
  function computeLayout() {
    const vh = window.innerHeight, vw = window.innerWidth;
    // Always clear the fixed header so the window's title bar is never clipped.
    const hdr = document.querySelector(".site-header");
    const headerH = hdr ? Math.round(hdr.getBoundingClientRect().height) : 70;
    TOP = headerH + (vh < 560 ? 12 : 22);
    const avail = vw - heroTextRight() - GAP;
    _cellH = Math.floor((vh - TOP - 88) / ROWS);
    _cellW = Math.floor((avail - SIDE) / COLS);
    cell = Math.max(10, Math.min(17, Math.min(_cellH, _cellW)));
    root.style.setProperty("--arcTop", TOP + "px");
    sizeCanvases();
  }
  function widgetSize() { return { w: COLS * cell + SIDE, h: ROWS * cell + 70 }; }
  let roomOK = false;
  function evaluateRoom() {
    computeLayout();
    const sz = widgetSize();
    const vh = window.innerHeight;
    const wide = _cellW >= 10;                                   // horizontal room beside the hero text (portrait phones fail this)
    const gainRoom = wide && _cellH >= 10 && vh >= MINH && vh >= sz.h + TOP + 10;
    // Hysteresis: once shown, tolerate the ~60–100px viewport shrink that happens when
    // a mobile browser's URL bar slides in on scroll, so `display` never flips on/off
    // mid-scroll. A display toggle can't be transitioned — that was making the window
    // blink in/out instead of gliding on Android (landscape especially).
    const keepRoom = wide && _cellH >= 6 && vh >= MINH - 60 && vh >= sz.h + TOP - 90;
    const was = roomOK;
    roomOK = was ? keepRoom : gainRoom;
    root.style.setProperty("--arcW", sz.w + "px");
    root.classList.toggle("has-room", roomOK);
    draw();
    if (roomOK && !was) {
      // Just gained room: park off-screen below (now displayed), force a reflow, then
      // resolve the real state next frame so the entrance actually glides in.
      root.classList.remove("st-show", "st-above"); root.classList.add("st-below");
      state = "below"; root.inert = true; root.setAttribute("aria-hidden", "true");
      void root.offsetHeight;
      requestAnimationFrame(updateSlide);
    } else {
      updateSlide();
    }
  }

  /* ---- scroll choreography: slide in / rest / slide out ---- */
  const aboutEl = document.getElementById("about");
  let state = "below";
  function setState(s) {
    if (s === state) return;
    state = s;
    root.classList.remove("st-below", "st-show", "st-above");
    root.classList.add("st-" + s);
    const hidden = s !== "show";
    root.inert = hidden;
    root.setAttribute("aria-hidden", hidden ? "true" : "false");
    if (s === "show") ensureRunning();      // auto-play the moment it appears
    else pause();
  }
  function updateSlide() {
    if (!roomOK) { root.classList.remove("st-show", "st-above"); root.classList.add("st-below"); state = "below"; if (running) pause(); return; }
    const y = window.scrollY || window.pageYOffset || 0;
    const sz = widgetSize();
    const content = document.querySelector("#about .about-grid") || aboutEl;
    const contentTop = content ? content.getBoundingClientRect().top : Infinity;
    const widgetBottom = TOP + sz.h;
    if (contentTop < widgetBottom + 200) setState("above");   // slide up & out before About text arrives
    else if (y > 34) setState("show");                        // slide in / rest
    else setState("below");
  }

  let ticking = false;
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { updateSlide(); ticking = false; }); } }, { passive: true });
  let rt = null;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(evaluateRoom, 120); });
  window.addEventListener("orientationchange", () => setTimeout(evaluateRoom, 250));
  window.addEventListener("pf:lang", () => setTimeout(evaluateRoom, 0));
  document.addEventListener("visibilitychange", () => { if (document.hidden) stopLoop(); else if (running) { last = 0; acc = 0; startLoop(); } });
  document.addEventListener("click", (e) => { if (userControl && !root.contains(e.target)) { userControl = false; root.classList.remove("is-active"); if (!gameOver) planAI(); } });

  function boot() { board = newBoard(); reset(); evaluateRoom(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
