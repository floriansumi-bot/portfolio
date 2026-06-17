/* ============================================================
   Hero easter egg — a small, playable falling-blocks game that
   lives in the empty space beside the hero. It slides in from
   below as you start scrolling, rests in the top-right while the
   hero is on screen, and slides up out of view before the About
   text can reach it. It only ever shows when there is genuinely
   room for it (wide enough beside the hero text AND tall enough),
   so phones in portrait never see it. A wink to the devs. :)
   Original implementation — no third-party game code.
   ============================================================ */
(function () {
  const root = document.getElementById("arcade");
  if (!root) return;
  const canvas = document.getElementById("arcadeCanvas");
  const nextCanvas = document.getElementById("arcadeNext");
  const scoreEl = document.getElementById("arcadeScore");
  const linesEl = document.getElementById("arcadeLines");
  const overlay = document.getElementById("arcadeOverlay");
  const overlayBtn = document.getElementById("arcadePlay");
  const overlayText = document.getElementById("arcadeOverlayText");
  const touch = document.getElementById("arcadeTouch");
  if (!canvas || !nextCanvas) return;
  const ctx = canvas.getContext("2d");
  const nctx = nextCanvas.getContext("2d");

  const COLS = 10, ROWS = 20;

  // Tetromino shapes (spawn orientation matrices) + palette colours.
  const PIECES = {
    I: { m: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], c: "#22d3ee" },
    O: { m: [[1,1],[1,1]], c: "#fbbf24" },
    T: { m: [[0,1,0],[1,1,1],[0,0,0]], c: "#a78bfa" },
    S: { m: [[0,1,1],[1,1,0],[0,0,0]], c: "#a3e635" },
    Z: { m: [[1,1,0],[0,1,1],[0,0,0]], c: "#f472b6" },
    J: { m: [[1,0,0],[1,1,1],[0,0,0]], c: "#60a5fa" },
    L: { m: [[0,0,1],[1,1,1],[0,0,0]], c: "#fb923c" },
  };
  const KEYS = Object.keys(PIECES);

  let cell = 16, board, cur, nextPiece, bag = [];
  let score = 0, lines = 0, level = 1;
  let dropMs = 800, acc = 0, last = 0, raf = null;
  let active = false, running = false, gameOver = false, wasPlaying = false;

  function newBoard() { return Array.from({ length: ROWS }, () => new Array(COLS).fill(null)); }
  function rotate(m) { const N = m.length; const r = Array.from({ length: N }, () => new Array(N).fill(0)); for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) r[x][N - 1 - y] = m[y][x]; return r; }
  function refillBag() { bag = KEYS.slice(); for (let i = bag.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [bag[i], bag[j]] = [bag[j], bag[i]]; } }
  function nextFromBag() { if (!bag.length) refillBag(); const k = bag.pop(); return { key: k, m: PIECES[k].m.map((r) => r.slice()), c: PIECES[k].c }; }
  function spawn(p) { const w = p.m.length; return { m: p.m, c: p.c, key: p.key, x: Math.floor((COLS - w) / 2), y: p.key === "I" ? -1 : 0 }; }

  function collides(piece, ox, oy, m) {
    m = m || piece.m;
    for (let y = 0; y < m.length; y++) for (let x = 0; x < m.length; x++) {
      if (!m[y][x]) continue;
      const nx = piece.x + x + ox, ny = piece.y + y + oy;
      if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
      if (ny >= 0 && board[ny][nx]) return true;
    }
    return false;
  }
  function merge() {
    for (let y = 0; y < cur.m.length; y++) for (let x = 0; x < cur.m.length; x++) {
      if (cur.m[y][x] && cur.y + y >= 0) board[cur.y + y][cur.x + x] = cur.c;
    }
  }
  function clearLines() {
    let cleared = 0;
    for (let y = ROWS - 1; y >= 0; y--) {
      if (board[y].every((v) => v)) { board.splice(y, 1); board.unshift(new Array(COLS).fill(null)); cleared++; y++; }
    }
    if (cleared) {
      score += [0, 100, 300, 500, 800][cleared] * level;
      lines += cleared; level = 1 + Math.floor(lines / 10);
      dropMs = Math.max(110, 800 - (level - 1) * 70);
      if (scoreEl) scoreEl.textContent = score;
      if (linesEl) linesEl.textContent = lines;
    }
  }
  function lockAndNext() {
    merge(); clearLines();
    cur = spawn(nextPiece); nextPiece = nextFromBag();
    drawNext();
    if (collides(cur, 0, 0)) endGame();
  }

  function move(dx) { if (!running) return; if (!collides(cur, dx, 0)) { cur.x += dx; draw(); } }
  function softDrop() { if (!running) return; if (!collides(cur, 0, 1)) { cur.y++; acc = 0; draw(); } else { lockAndNext(); draw(); } }
  function hardDrop() { if (!running) return; while (!collides(cur, 0, 1)) cur.y++; lockAndNext(); draw(); }
  function rotateCur() {
    if (!running) return;
    const r = rotate(cur.m);
    for (const k of [0, -1, 1, -2, 2]) { if (!collides(cur, k, 0, r)) { cur.m = r; cur.x += k; draw(); return; } }
  }

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

  function cellRect(c, x, y, s, g) {
    g = g == null ? 1 : g;
    c.fillStyle = "rgba(255,255,255,0.06)";
    c.fillRect(x * s, y * s, s - g, s - g);
  }
  function block(c, x, y, s, col, g) {
    g = g == null ? 1 : g;
    c.fillStyle = col; c.fillRect(x * s, y * s, s - g, s - g);
    c.fillStyle = "rgba(255,255,255,0.22)"; c.fillRect(x * s, y * s, s - g, Math.max(1, (s - g) * 0.28));
  }

  function draw() {
    if (!board) return;
    const w = COLS * cell, h = ROWS * cell;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(10,10,20,0.55)"; ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
      if (board[y][x]) block(ctx, x, y, cell, board[y][x]);
      else cellRect(ctx, x, y, cell);
    }
    if (cur && running) {
      // ghost
      let gy = 0; while (!collides(cur, 0, gy + 1)) gy++;
      for (let y = 0; y < cur.m.length; y++) for (let x = 0; x < cur.m.length; x++) {
        if (cur.m[y][x]) { const ry = cur.y + y + gy; if (ry >= 0) { ctx.fillStyle = "rgba(255,255,255,0.10)"; ctx.fillRect((cur.x + x) * cell, ry * cell, cell - 1, cell - 1); } }
      }
      for (let y = 0; y < cur.m.length; y++) for (let x = 0; x < cur.m.length; x++) {
        if (cur.m[y][x] && cur.y + y >= 0) block(ctx, cur.x + x, cur.y + y, cell, cur.c);
      }
    }
  }
  function drawNext() {
    const ns = nextCanvas._ns || 12;
    nctx.clearRect(0, 0, 4 * ns, 4 * ns);
    if (!nextPiece) return;
    const m = nextPiece.m, off = (4 - m.length) / 2;
    for (let y = 0; y < m.length; y++) for (let x = 0; x < m.length; x++) if (m[y][x]) block(nctx, x + off, y + off, ns, nextPiece.c);
  }

  function loop(t) {
    if (!running) { raf = null; return; }
    if (!last) last = t;
    acc += t - last; last = t;
    if (acc >= dropMs) { acc = 0; if (!collides(cur, 0, 1)) cur.y++; else lockAndNext(); draw(); }
    raf = requestAnimationFrame(loop);
  }
  function startLoop() { if (!raf) { last = 0; raf = requestAnimationFrame(loop); } }
  function stopLoop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  function reset() {
    board = newBoard(); score = 0; lines = 0; level = 1; dropMs = 800; acc = 0; gameOver = false;
    if (scoreEl) scoreEl.textContent = "0"; if (linesEl) linesEl.textContent = "0";
    nextPiece = nextFromBag(); cur = spawn(nextFromBag()); drawNext();
  }
  function play() {
    if (gameOver || !board) reset();
    running = true; active = true; wasPlaying = true; root.classList.add("is-active");
    overlay.classList.add("hide"); startLoop(); draw();
  }
  function pause() { running = false; stopLoop(); }
  function deactivate() { active = false; root.classList.remove("is-active"); }
  function endGame() {
    running = false; gameOver = true; stopLoop();
    if (overlayText) overlayText.textContent = "game over · " + score;
    if (overlayBtn) overlayBtn.textContent = "↻ play again";
    overlay.classList.remove("hide");
  }

  // ---- input ----
  overlayBtn && overlayBtn.addEventListener("click", (e) => { e.stopPropagation(); play(); });
  canvas.addEventListener("click", () => { if (!running && !gameOver) play(); else active = true; });
  document.addEventListener("keydown", (e) => {
    // Escape must work in every active state (incl. the game-over screen).
    if (e.key === "Escape" && active) { e.preventDefault(); deactivate(); return; }
    if (!active || !running) return;
    const k = e.key;
    if (["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", " ", "Spacebar"].includes(k)) e.preventDefault();
    if (k === "ArrowLeft") move(-1);
    else if (k === "ArrowRight") move(1);
    else if (k === "ArrowDown") softDrop();
    else if (k === "ArrowUp") rotateCur();
    else if (k === " " || k === "Spacebar") hardDrop();
  });
  document.addEventListener("click", (e) => { if (active && !root.contains(e.target)) deactivate(); });

  if (touch) {
    const act = (a) => { if (a === "left") move(-1); else if (a === "right") move(1); else if (a === "down") softDrop(); else if (a === "rotate") rotateCur(); else if (a === "drop") hardDrop(); };
    touch.querySelectorAll("button").forEach((b) => {
      const a = b.dataset.act;
      let rep = null;                                   // per-button, so multi-touch can't orphan it
      const stop = () => { if (rep) { clearInterval(rep); rep = null; } };
      b.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        try { b.setPointerCapture(e.pointerId); } catch (e2) {}   // a slight finger-slide won't drop the hold
        active = true; if (!running && !gameOver) play(); act(a);
        if (a === "left" || a === "right" || a === "down") rep = setInterval(() => act(a), 110);
      });
      b.addEventListener("pointerup", stop);
      b.addEventListener("pointercancel", stop);
    });
  }

  // ---- responsive sizing + space detection ----
  let TOP = 92, _cellH = 0, _cellW = 0; const GAP = 18, MINH = 250, SIDE = 78;
  function computeLayout() {
    const vh = window.innerHeight, vw = window.innerWidth;
    TOP = vh < 560 ? 46 : 92;
    const avail = vw - heroTextRight() - GAP;   // horizontal room beside the hero text
    _cellH = Math.floor((vh - TOP - 88) / ROWS); // largest cell the height allows
    _cellW = Math.floor((avail - SIDE) / COLS);  // largest cell the width allows
    cell = Math.max(10, Math.min(17, Math.min(_cellH, _cellW)));
    root.style.setProperty("--arcTop", TOP + "px");
    sizeCanvases();
  }
  function widgetSize() { return { w: COLS * cell + SIDE, h: ROWS * cell + 70 }; }
  function heroTextRight() {
    const hero = document.querySelector(".hero-inner");
    if (!hero) return Infinity;
    let r = 0;
    // Measure the ACTUAL glyph extent per text node (block line-boxes span the full
    // container width, so element-level rects would wrongly read as "no room").
    const els = hero.querySelectorAll(".hero-eyebrow,.hero-title,.hero-role,.hero-pitch,.hero-actions,.hero-stats");
    els.forEach((el) => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        if (!n.nodeValue || !n.nodeValue.trim()) continue;
        try { const rng = document.createRange(); rng.selectNodeContents(n); const b = rng.getBoundingClientRect(); if (b && b.width) r = Math.max(r, b.right); } catch (e) {}
      }
    });
    return r || (hero.getBoundingClientRect().left + 320);
  }
  let roomOK = false;
  function evaluateRoom() {
    computeLayout();
    const sz = widgetSize();
    const vh = window.innerHeight;
    roomOK = (_cellW >= 10) && (_cellH >= 10) && (vh >= MINH) && (vh >= sz.h + TOP + 10);
    root.style.setProperty("--arcW", sz.w + "px");
    root.classList.toggle("has-room", roomOK);
    draw();
    updateSlide();
  }

  // ---- scroll choreography ----
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
    if (s === "show") {
      // resume only a game that was genuinely started (never auto-start on scroll)
      if (wasPlaying && !gameOver) { running = true; startLoop(); }
      draw();
    } else {
      if (running) pause();   // keep wasPlaying so we resume on return
      deactivate();
    }
  }
  function updateSlide() {
    if (!roomOK) { root.classList.remove("st-show", "st-above"); root.classList.add("st-below"); state = "below"; if (running) pause(); return; }
    const y = window.scrollY || window.pageYOffset || 0;
    const sz = widgetSize();
    // Exit (slide up) before the About content can rise into the widget's band,
    // so it never covers text. Tie it to the About grid's top, not the section top.
    const content = document.querySelector("#about .about-grid") || aboutEl;
    const contentTop = content ? content.getBoundingClientRect().top : Infinity;
    const widgetBottom = TOP + sz.h;
    if (contentTop < widgetBottom + 140) setState("above");
    else if (y > 34) setState("show");
    else setState("below");
  }

  let ticking = false;
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(() => { updateSlide(); ticking = false; }); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  let rt = null;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(evaluateRoom, 120); });
  window.addEventListener("orientationchange", () => setTimeout(evaluateRoom, 250));
  // Hero copy width changes with language → re-measure room.
  window.addEventListener("pf:lang", () => setTimeout(evaluateRoom, 0));
  // Pause gravity in a backgrounded tab so it doesn't drop several rows on return.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopLoop();
    else if (running) { last = 0; acc = 0; startLoop(); }
  });

  function boot() { board = newBoard(); reset(); evaluateRoom(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
