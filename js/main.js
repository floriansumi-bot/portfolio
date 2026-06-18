/* ============================================================
   Florian Sumi — Portfolio logic
   Content + translations live in js/content.js (PROJECTS_BASE, CONTENT).
   This file renders the page and handles language switching.
   ============================================================ */

const LANGS = ["en", "fr", "de", "zh", "ja"];
let LANG = "en";
let _initialized = false;

/* ---------- i18n helpers (always fall back to English) ---------- */
function uiDict(lang) {
  return (window.CONTENT && CONTENT[lang] && CONTENT[lang].ui) || {};
}
function t(key) {
  const d = uiDict(LANG);
  const en = (window.CONTENT && CONTENT.en && CONTENT.en.ui) || {};
  return d[key] != null ? d[key] : en[key] != null ? en[key] : key;
}
function block(lang, field) {
  const c = window.CONTENT || {};
  return (c[lang] && c[lang][field]) || (c.en && c.en[field]) || [];
}

/* ---------- RENDER ---------- */
function chipList(el, items) {
  if (!el) return;
  el.innerHTML = items.map((s) => `<li>${s}</li>`).join("");
}

function timelineItems(el, items) {
  if (!el) return;
  el.innerHTML = items
    .map(
      (it) => `
      <article class="tl-item reveal">
        <div class="tl-role">${it.role}</div>
        <div class="tl-org">${it.org}</div>
        <div class="tl-meta">${it.meta}</div>
        <p class="tl-desc">${it.desc}</p>
      </article>`
    )
    .join("");
}

function badgeFor(status) {
  const cls = { live: "live", dev: "dev", research: "research" }[status] || "dev";
  const label = t("badge." + (cls));
  return `<span class="badge ${cls}">${label}</span>`;
}

function projectLinks(p) {
  const links = [];
  if (p.live)
    links.push(`<a class="plink-live" href="${p.live}" target="_blank" rel="noopener noreferrer">${t("link.live")}</a>`);
  if (p.repo)
    links.push(`<a class="plink-repo" href="${p.repo}" target="_blank" rel="noopener noreferrer">${t("link.code")}</a>`);
  if (!links.length)
    links.push(`<span class="plink-repo" aria-disabled="true">${t("link.private")}</span>`);
  return links.join("");
}

function renderProjects(el, base, loc) {
  if (!el) return;
  el.innerHTML = base
    .map((b, i) => {
      const p = { ...b, ...(loc[i] || {}) }; // merge shared meta + translated tag/desc
      return `
      <article class="project-card reveal">
        <div class="project-thumb">
          <img src="${p.img}" alt="${p.name} — ${t("a11y.preview")}" loading="lazy" decoding="async" />
        </div>
        <div class="project-body">
          <div class="project-top">
            <h3 class="project-name">${p.name}</h3>
            ${badgeFor(p.status)}
          </div>
          <div class="project-tag">${p.tag || ""}</div>
          <p class="project-desc">${p.desc || ""}</p>
          <div class="project-tech">${p.tech.map((x) => `<span>${x}</span>`).join("")}</div>
          <div class="project-links">${projectLinks(p)}</div>
        </div>
      </article>`;
    })
    .join("");
}

function renderData(lang) {
  chipList(document.getElementById("techSkills"), block(lang, "techSkills"));
  chipList(document.getElementById("softSkills"), block(lang, "softSkills"));
  timelineItems(document.getElementById("experienceItems"), block(lang, "experience"));
  timelineItems(document.getElementById("educationItems"), block(lang, "education"));
  renderProjects(document.getElementById("projectsGrid"), window.PROJECTS_BASE || [], block(lang, "projects"));
  // After the first load (when scroll-reveal is already set up), freshly injected
  // cards must be made visible immediately rather than waiting on an observer that
  // never saw them.
  if (_initialized) {
    ["#techSkills", "#softSkills", "#experienceItems", "#educationItems", "#projectsGrid"].forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) el.querySelectorAll(".reveal").forEach((n) => n.classList.add("in"));
    });
  }
}

/* ---------- LANGUAGE ---------- */
function applyStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.getAttribute("data-i18n"));
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = t(el.getAttribute("data-i18n-html"));
    if (v != null) el.innerHTML = v;
  });
  // attribute-level strings (aria)
  const set = (sel, attr, key) => {
    const el = document.querySelector(sel);
    if (el) el.setAttribute(attr, t(key));
  };
  set("#navToggle", "aria-label", "a11y.menu");
  set("#langSwitch", "aria-label", "a11y.lang");
  set(".scroll-cue", "aria-label", "a11y.scroll");
  set(".brand", "aria-label", "a11y.home");
  set(".nav", "aria-label", "a11y.nav");
  set(".hero-stats", "aria-label", "a11y.glance");
  set("#experienceList", "aria-label", "a11y.workExp");
  set("#educationList", "aria-label", "a11y.education");
  // hero stat aria-labels = number + translated label
  document.querySelectorAll(".hero-stats li[data-stat]").forEach((li) => {
    const n = li.querySelector("strong")?.dataset.count || "";
    li.setAttribute("aria-label", `${n} ${t("hero.stat." + li.dataset.stat)}`);
  });
}

function revealAll() {
  document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in"));
}

function applyLanguage(lang, opts) {
  if (!window.CONTENT || !CONTENT[lang]) lang = "en";
  LANG = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
  try { localStorage.setItem("pf-lang", lang); } catch (e) {}
  applyStaticText();
  renderData(lang);
  const sel = document.getElementById("langSwitch");
  if (sel) sel.value = lang;
  if (!opts || opts.reveal !== false) revealAll();
  // Announce the change to screen readers (only after the first paint).
  if (_initialized) {
    const st = document.getElementById("langStatus");
    if (st) st.textContent = (window.CONTENT && CONTENT[lang] && CONTENT[lang].label) || lang;
  }
  // Hero copy width changes with language — let the arcade re-measure its room.
  try { window.dispatchEvent(new Event("pf:lang")); } catch (e) {}
}

function detectInitialLang() {
  try {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && LANGS.includes(fromUrl)) return fromUrl;
  } catch (e) {}
  try {
    const saved = localStorage.getItem("pf-lang");
    if (saved && LANGS.includes(saved)) return saved;
  } catch (e) {}
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGS.includes(nav) ? nav : "en";
}

function setupLangSwitch() {
  const sel = document.getElementById("langSwitch");
  if (!sel) return;
  sel.addEventListener("change", () => applyLanguage(sel.value, { reveal: true }));
}

/* ---------- INTERACTIONS ---------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((e) => io.observe(e));
  // Safety net: never leave content stuck hidden if the observer is throttled.
  setTimeout(() => els.forEach((e) => e.classList.add("in")), 2600);
}

function setupHeader() {
  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const list = document.getElementById("navList");
  if (!toggle || !list) return;

  const backdrop = document.createElement("div");
  backdrop.className = "nav-backdrop";
  backdrop.setAttribute("aria-hidden", "true");
  backdrop.tabIndex = -1;
  document.body.appendChild(backdrop);

  const isOpen = () => list.classList.contains("open");
  const open = () => {
    list.classList.add("open");
    backdrop.classList.add("show");
    toggle.setAttribute("aria-expanded", "true");
    const first = list.querySelector("a");
    if (first) first.focus();
  };
  const close = (restoreFocus) => {
    list.classList.remove("open");
    backdrop.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => (isOpen() ? close(true) : open()));
  backdrop.addEventListener("click", () => close(true));
  list.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => close(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) close(true);
  });
  // Keep Tab focus inside the open drawer.
  list.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || !isOpen()) return;
    const links = [...list.querySelectorAll("a")];
    if (!links.length) return;
    const firstEl = links[0], lastEl = links[links.length - 1];
    if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
    else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
  });
}

function setupCounters() {
  const nums = document.querySelectorAll(".hero-stats strong[data-count]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  nums.forEach((el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    let cur = 0;
    const step = Math.max(1, Math.round(target / 24));
    const tick = () => {
      cur = Math.min(target, cur + step);
      el.textContent = cur;
      if (cur < target) requestAnimationFrame(tick);
    };
    setTimeout(tick, 400);
    setTimeout(() => { el.textContent = String(target); }, 1600);
  });
}

/* Lightweight constellation background */
function setupConstellation() {
  const canvas = document.getElementById("constellation");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w, h, pts, raf;
  const COUNT = Math.min(70, Math.floor(window.innerWidth / 22));
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  function init() {
    pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 130) * 0.18})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = "rgba(34,211,238,0.55)";
      ctx.beginPath();
      ctx.arc(pts[i].x, pts[i].y, 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }
  resize(); init(); draw();
  let _rt;
  window.addEventListener("resize", () => {
    clearTimeout(_rt);
    _rt = setTimeout(() => { cancelAnimationFrame(raf); resize(); init(); draw(); }, 150);
  });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // ?still=1 — a static capture mode: no background animation, everything revealed.
  let still = false;
  try { still = new URLSearchParams(location.search).has("still"); } catch (e) {}

  LANG = detectInitialLang();
  applyLanguage(LANG, { reveal: false }); // render text + data; let the observer animate on first load

  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  setupLangSwitch();
  setupReveal();
  setupHeader();
  setupNav();
  setupCounters();
  if (!still) setupConstellation();
  _initialized = true;
  if (still) {
    revealAll();
    const h = document.querySelector(".hero");
    if (h) { h.style.minHeight = "auto"; h.style.paddingTop = "7rem"; h.style.paddingBottom = "2.5rem"; }
  }
});
