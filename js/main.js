/* ============================================================
   Florian Sumi — Portfolio logic
   Data-driven: edit the arrays below to update the site.
   ============================================================ */

/* ---------- DATA: edit me ---------- */

const TECH_SKILLS = [
  "JavaScript", "Python", "HTML & CSS", "SQL", "Node / Express",
  "Progressive Web Apps", "Git & GitHub", "Vercel deploy",
  "AI-assisted development", "Ableton Live", "Audio production", "Video editing",
  "UI / layout design",
];

const SOFT_SKILLS = [
  "Customer service", "Cash handling", "Retail sales", "Teaching (TEFL)",
  "Bilingual FR / EN", "Fast learner", "Reliable & trustworthy",
  "Adaptable", "Self-directed", "Problem solving",
];

const EXPERIENCE = [
  {
    role: "Salesman & Cashier",
    org: "Cash n Go",
    meta: "Second-hand retail",
    desc: "Front-of-house sales and till operation in a second-hand store: advising customers, valuing and handling stock, and managing cash accurately.",
  },
  {
    role: "Technical Documentation Intern",
    org: "LNS, Orvin",
    meta: "Machine-tools industry",
    desc: "Produced and structured technical documentation in the machine-tool domain.",
  },
  {
    role: "Logistics Intern",
    org: "Rolex SA, Geneva",
    meta: "Inventory & dispatch",
    desc: "Supported logistics operations — inventory management and parcel preparation and shipping.",
  },
  {
    role: "Landscaping Intern",
    org: "Marco Cellerini",
    meta: "Outdoor / grounds",
    desc: "Hands-on landscaping and grounds work.",
  },
];

const EDUCATION = [
  {
    role: "MA, Social Sciences — Media & Communication",
    org: "University of Lausanne (UNIL)",
    meta: "In progress",
    desc: "Master's in social sciences, specialising in media and communication.",
  },
  {
    role: "BA, Social Sciences",
    org: "University of Lausanne (UNIL)",
    meta: "Completed",
    desc: "Bachelor's degree in social sciences.",
  },
  {
    role: "Federal Maturity — Economics & Law",
    org: "Lycée Jean-Piaget, Neuchâtel",
    meta: "Diplôme de maturité gymnasiale",
    desc: "Swiss academic baccalaureate with a focus on economics and law.",
  },
  {
    role: "Qualifi Level 5 Certificate (TEFL)",
    org: "The TEFL Academy",
    meta: "Teaching English as a Foreign Language",
    desc: "Professional qualification to teach English as a foreign language.",
  },
];

const PROJECTS = [
  {
    name: "THE CONSTRUCT",
    emoji: "🧩",
    grad: "linear-gradient(135deg, #06b6d4, #7c3aed)",
    tag: "Learn-to-code platform · PWA",
    status: "live",
    desc: "A hacker-terminal-themed school that teaches you to code across SIX languages — Python, JavaScript, TypeScript, SQL, Lua and Ruby — each running a REAL engine inside your browser. Theory, then live-graded exercises. Modeled on Harvard's CS50 + Dataquest.",
    tech: ["JavaScript", "WASM", "Pyodide", "SQLite", "GitHub Pages"],
    live: "https://floriansumi-bot.github.io/the-construct/",
    repo: "https://github.com/floriansumi-bot/the-construct",
  },
  {
    name: "The Loop Academy",
    emoji: "🔁",
    grad: "linear-gradient(135deg, #22d3ee, #6d28d9)",
    tag: "Learn to build with AI · PWA",
    status: "live",
    desc: "A learning platform that teaches you to build real software by DIRECTING AI — mastering the \"agentic loop\". Structured tracks, a live AI mentor you can chat with, progress tracking, and a guide that keeps improving itself.",
    tech: ["JavaScript", "AI agents", "PWA", "Vercel"],
    live: "https://loop-academy.vercel.app/",
    repo: "",
  },
  {
    name: "SheetGenie",
    emoji: "📊",
    grad: "linear-gradient(135deg, #16a34a, #22d3ee)",
    tag: "AI Excel generator · PWA",
    status: "dev",
    desc: "Speak or type what you need and get a real, downloadable Excel workbook — live formulas, totals, conditional formatting, dropdowns and charts. Reads data from photos and PDFs. Installs as an app on any device.",
    tech: ["Vanilla JS", "Python", "openpyxl", "Vercel", "Multimodal AI"],
    live: "",
    repo: "https://github.com/floriansumi-bot/sheetgenie",
  },
  {
    name: "Flaily",
    emoji: "📬",
    grad: "linear-gradient(135deg, #6d28d9, #0891b2)",
    tag: "AI email triage · PWA",
    status: "live",
    desc: "An AI assistant that triages a Gmail inbox twice a day — it stars and labels the mail that matters (invoices, payroll, tax, deadlines, security), drafts the replies that need one (never sends), and can block noisy senders on request.",
    tech: ["AI agent", "Gmail", "PWA", "GitHub Pages"],
    live: "https://floriansumi-bot.github.io/flaily/",
    repo: "",
  },
  {
    name: "AdForge",
    emoji: "🎨",
    grad: "linear-gradient(135deg, #f59e0b, #8b5cf6)",
    tag: "AI ad generator · Multi-agent",
    status: "dev",
    desc: "A multi-agent AI tool that turns a product brief into ready-to-use ad creatives — a pipeline of specialised agents writes the copy, designs the scenes and generates the imagery, with every scene editable before export.",
    tech: ["Multi-agent AI", "JavaScript", "Image generation"],
    live: "",
    repo: "",
  },
  {
    name: "SAPE",
    emoji: "🛍️",
    grad: "linear-gradient(135deg, #f472b6, #8b5cf6)",
    tag: "Resale marketplace · Full-stack",
    status: "dev",
    desc: "A \"Swiss Vinted\" — a second-hand fashion marketplace with real user accounts, listings and messaging. Trilingual (FR / DE / IT). Built as a full-stack web app with a PWA front end.",
    tech: ["Node", "Express", "JWT auth", "PWA", "JSON DB"],
    live: "",
    repo: "",
  },
  {
    name: "HyperFractal",
    emoji: "🌀",
    grad: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    tag: "Visual / projection tool",
    status: "dev",
    desc: "An infinite-zoom psychedelic fractal visualizer for live shows and projection mapping — with a built-in psytrance generator and corner-pin projection mapping. Runs as a desktop web app.",
    tech: ["WebGL", "Canvas", "Web Audio", "JavaScript"],
    live: "",
    repo: "",
  },
  {
    name: "Barathon",
    emoji: "🍻",
    grad: "linear-gradient(135deg, #f59e0b, #f472b6)",
    tag: "Bar-crawl app · Mobile",
    status: "dev",
    desc: "A bar-crawl companion app covering every bar in Switzerland (3,500+, organised by canton and commune). Built with Expo / React Native, moving to a Supabase backend.",
    tech: ["React Native", "Expo", "Supabase"],
    live: "",
    repo: "",
  },
  {
    name: "Trading Assistant",
    emoji: "📈",
    grad: "linear-gradient(135deg, #22d3ee, #16a34a)",
    tag: "Algo trading research",
    status: "research",
    desc: "An algorithmic paper-trading bot and research harness (Python). Honestly evaluated: a study in strategy back-testing and risk — kept strictly paper-only after the data showed no reliable live edge.",
    tech: ["Python", "Backtesting", "ccxt / IBKR", "Pandas"],
    live: "",
    repo: "",
  },
];

/* ---------- RENDER ---------- */

function chipList(el, items) {
  if (!el) return;
  el.innerHTML = items.map((s) => `<li>${s}</li>`).join("");
}

function timeline(el, items) {
  if (!el) return;
  const html = items
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
  el.insertAdjacentHTML("beforeend", html);
}

function badgeFor(status) {
  const map = {
    live: ["live", "● Live"],
    dev: ["dev", "In development"],
    research: ["research", "Research"],
  };
  const [cls, label] = map[status] || map.dev;
  return `<span class="badge ${cls}">${label}</span>`;
}

function projectLinks(p) {
  const links = [];
  if (p.live)
    links.push(
      `<a class="plink-live" href="${p.live}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>`
    );
  if (p.repo)
    links.push(
      `<a class="plink-repo" href="${p.repo}" target="_blank" rel="noopener noreferrer">Code ↗</a>`
    );
  if (!links.length)
    links.push(`<span class="plink-repo" aria-disabled="true">Private / local</span>`);
  return links.join("");
}

function renderProjects(el, items) {
  if (!el) return;
  el.innerHTML = items
    .map(
      (p) => `
      <article class="project-card reveal">
        <div class="project-thumb" style="--card-grad:${p.grad}">
          <span class="emoji" role="img" aria-label="${p.name} icon">${p.emoji}</span>
        </div>
        <div class="project-body">
          <div class="project-top">
            <h3 class="project-name">${p.name}</h3>
            ${badgeFor(p.status)}
          </div>
          <div class="project-tag">${p.tag}</div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
          <div class="project-links">${projectLinks(p)}</div>
        </div>
      </article>`
    )
    .join("");
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
  // Safety net: if the observer is throttled (e.g. a backgrounded tab) or never
  // fires, make sure every element becomes visible after a short delay so content
  // is never stuck hidden at opacity:0.
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
  const close = () => {
    list.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  list.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
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
    // Guarantee the final value lands even if rAF is throttled (background tab).
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
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function init() {
    pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
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
  window.addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); init(); draw(); });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  chipList(document.getElementById("techSkills"), TECH_SKILLS);
  chipList(document.getElementById("softSkills"), SOFT_SKILLS);
  timeline(document.getElementById("experienceList"), EXPERIENCE);
  timeline(document.getElementById("educationList"), EDUCATION);
  renderProjects(document.getElementById("projectsGrid"), PROJECTS);

  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  setupReveal();
  setupHeader();
  setupNav();
  setupCounters();
  setupConstellation();
});
