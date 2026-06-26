/* ============================================================
   Florian Sumi — Portfolio content & translations
   ------------------------------------------------------------
   ONE source of truth for every word on the page, in 5 languages.
   - PROJECTS_BASE: shared, non-translated project metadata
     (name, emoji, colours, tech, links) — order matters.
   - CONTENT[lang]: { ui:{...}, techSkills:[], softSkills:[],
     experience:[], education:[], projects:[{tag,desc}] }
   Missing keys/languages fall back to English (see main.js).
   Copy professionally audited (5 languages) 2026-06-20.
   ============================================================ */

const PROJECTS_BASE = [
  {
    "name": "RED MATRIX",
    "emoji": "🎬",
    "img": "assets/projects/redmatrix.jpg",
    "grad": "linear-gradient(135deg, #ff0033, #1a0210)",
    "status": "live",
    "private": true,
    "free": false,
    "year": 2025,
    "tech": [
      "Electron",
      "Node.js",
      "Express",
      "Capacitor",
      "Server-Sent Events",
      "HTTP range streaming"
    ],
    "live": "",
    "repo": ""
  },
  {
    "name": "Pilot",
    "emoji": "🍓",
    "img": "assets/projects/pilot.png",
    "grad": "linear-gradient(135deg, #C7152A, #0E8C7E)",
    "status": "live",
    "free": true,
    "year": 2026,
    "tech": [
      "Vanilla JS",
      "ES modules",
      "SVG",
      "PWA",
      "GitHub Pages"
    ],
    "live": "https://floriansumi-bot.github.io/raspberry-pi-academy/",
    "repo": "https://github.com/floriansumi-bot/raspberry-pi-academy"
  },
  {
    "name": "Guillermo",
    "emoji": "🪞",
    "img": "assets/projects/guillermo.jpg",
    "grad": "linear-gradient(135deg, #a78bfa, #fb923c)",
    "status": "live",
    "free": true,
    "year": 2025,
    "tech": [
      "Next.js",
      "Drizzle ORM",
      "pgvector",
      "Postgres",
      "Vercel"
    ],
    "live": "https://guillermo-opal.vercel.app/",
    "repo": ""
  },
  {
    "name": "THE CONSTRUCT",
    "emoji": "🧩",
    "img": "assets/projects/construct.jpg",
    "grad": "linear-gradient(135deg, #06b6d4, #7c3aed)",
    "status": "live",
    "free": true,
    "year": 2025,
    "tech": [
      "JavaScript",
      "WebAssembly",
      "Pyodide",
      "SQLite",
      "GitHub Pages"
    ],
    "live": "https://floriansumi-bot.github.io/the-construct/",
    "repo": "https://github.com/floriansumi-bot/the-construct"
  },
  {
    "name": "The Loop Academy",
    "emoji": "🔁",
    "img": "assets/projects/loop.jpg",
    "grad": "linear-gradient(135deg, #22d3ee, #6d28d9)",
    "status": "live",
    "free": true,
    "year": 2026,
    "tech": [
      "JavaScript",
      "AI agents",
      "PWA",
      "Vercel"
    ],
    "live": "https://loop-academy.vercel.app/",
    "repo": ""
  },
  {
    "name": "SheetGenie",
    "emoji": "📊",
    "img": "assets/projects/sheetgenie.jpg",
    "grad": "linear-gradient(135deg, #16a34a, #22d3ee)",
    "status": "live",
    "free": true,
    "year": 2025,
    "featured": true,
    "tech": [
      "Vanilla JS",
      "Python",
      "openpyxl",
      "Vercel",
      "Multimodal AI"
    ],
    "live": "https://sheetgenie.vercel.app",
    "repo": "https://github.com/floriansumi-bot/sheetgenie"
  },
  {
    "name": "Flaily",
    "emoji": "📬",
    "img": "assets/projects/flaily.jpg",
    "grad": "linear-gradient(135deg, #6d28d9, #0891b2)",
    "status": "live",
    "free": true,
    "year": 2026,
    "tech": [
      "AI agent",
      "Claude Code",
      "Gmail",
      "GitHub Pages"
    ],
    "live": "https://floriansumi-bot.github.io/flaily/",
    "repo": ""
  },
  {
    "name": "AdForge",
    "emoji": "🎨",
    "img": "assets/projects/adforge.jpg",
    "grad": "linear-gradient(135deg, #f59e0b, #8b5cf6)",
    "status": "live",
    "free": true,
    "year": 2026,
    "tech": [
      "Multi-agent AI",
      "JavaScript",
      "Image generation",
      "Vercel"
    ],
    "live": "https://adforge-gamma.vercel.app",
    "repo": "https://github.com/floriansumi-bot/adforge"
  },
  {
    "name": "SAPE",
    "emoji": "🛍️",
    "img": "assets/projects/sape.jpg",
    "grad": "linear-gradient(135deg, #f472b6, #8b5cf6)",
    "status": "dev",
    "year": 2026,
    "tech": [
      "Node",
      "Express",
      "JWT auth",
      "PWA",
      "Supabase"
    ],
    "live": "",
    "repo": ""
  },
  {
    "name": "HyperFractal",
    "emoji": "🌀",
    "img": "assets/projects/hyperfractal.jpg",
    "grad": "linear-gradient(135deg, #8b5cf6, #ec4899)",
    "status": "live",
    "free": true,
    "year": 2025,
    "tech": [
      "WebGL",
      "Canvas",
      "Web Audio API",
      "JavaScript"
    ],
    "live": "https://floriansumi-bot.github.io/hyperfractal/app.html",
    "repo": "https://github.com/floriansumi-bot/hyperfractal"
  },
  {
    "name": "VoiceLab",
    "emoji": "🎙️",
    "img": "assets/projects/voicelab.svg",
    "grad": "linear-gradient(135deg, #818cf8, #22d3ee)",
    "status": "dev",
    "free": true,
    "year": 2025,
    "tech": [
      "Web Audio API",
      "Vanilla JS",
      "PWA",
      "Capacitor",
      "GitHub Pages"
    ],
    "live": "",
    "repo": "https://github.com/floriansumi-bot/sing-coach"
  },
  {
    "name": "Barathon",
    "emoji": "🍻",
    "img": "assets/projects/barathon.svg",
    "grad": "linear-gradient(135deg, #f59e0b, #f472b6)",
    "status": "dev",
    "year": 2026,
    "tech": [
      "React Native",
      "Expo",
      "Supabase"
    ],
    "live": "",
    "repo": ""
  },
  {
    "name": "Trading Assistant",
    "emoji": "📈",
    "img": "assets/projects/trading.svg",
    "grad": "linear-gradient(135deg, #22d3ee, #16a34a)",
    "status": "research",
    "year": 2024,
    "tech": [
      "Python",
      "Backtesting",
      "ccxt / IBKR",
      "Pandas"
    ],
    "live": "",
    "repo": ""
  }
];

const CONTENT = {
  "en": {
    "label": "English",
    "ui": {
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.eyebrow": "Full-stack developer & UNIL Social Sciences student, open to junior dev roles",
      "hero.role": "I ship full-stack web apps and AI-powered tools, 8 live now",
      "hero.pitch": "I like turning an idea into something you can actually open and use, and eight of mine are online right now: a browser school that runs six real language engines through WebAssembly, a tool that turns a spoken sentence into a finished Excel file, a companion app that remembers you, an ad studio run by a small team of AI agents. Plenty of them don't just get built with AI, they use it as a feature. French and English are both native to me, and I'm Swiss and American.",
      "hero.cta.work": "View my work",
      "hero.cta.cv": "Download CV",
      "hero.cta.contact": "Contact",
      "hero.stat.apps": "projects",
      "hero.stat.live": "live online",
      "hero.stat.langs": "native languages",
      "section.about": "About",
      "section.skills": "What I bring",
      "section.experience": "Experience & education",
      "section.projects": "Things I've built",
      "section.contact": "Get in touch",
      "about.p1": "I'm <strong>Florian Sumi</strong>. Swiss and American, living just outside Neuchâtel. Most of my week goes to a <strong>Master's in Social Sciences (Media &amp; Communication) at the University of Lausanne</strong>, and the rest of it goes to building software.",
      "about.p2": "I'm mostly <strong>self-taught</strong>. These days AI is just part of how I work, the same way any developer leans on their tools, and it lets me ship a lot. I've built things with WebGL, WebAssembly, vector databases, multi-agent pipelines, real-time streaming. None of it is for show: you can open every project and use it. One runs real language engines right in the browser. Another keeps a memory of you in a pgvector store and picks up where you left off.",
      "about.p3": "My background is in <strong>media and communication research</strong>, which is probably why I build for the person actually using the thing, not just for other developers. The same instinct comes from years of <strong>retail, cash handling and customer service</strong>, plus a TEFL teaching qualification. I learn fast, and I finish what I start.",
      "about.fact.based.label": "Based in",
      "about.fact.based.value": "Marin-Epagnier, Neuchâtel",
      "about.fact.langs.label": "Languages",
      "about.fact.langs.value": "French (native) · English (native) · German (school)",
      "about.fact.study.label": "Studying",
      "about.fact.study.value": "MA Social Sciences (Media & Communication) · UNIL",
      "about.fact.also.label": "Also does",
      "about.fact.also.value": "Music production (Ableton) · live shows",
      "skills.tech.heading": "🛠️ Building & AI",
      "skills.people.heading": "🤝 People & professional",
      "timeline.experience": "Experience",
      "timeline.education": "Education",
      "projects.lead": "Real apps, not mockups. Eight are live, and I built every one of them myself. The badges tell you what's online versus still in progress.",
      "projects.mission": "There's one thread through all of it: taking the kind of tools people usually pay for and making them free, built on open source and within everyone's reach.",
      "section.music": "Music & live sets",
      "nav.music": "Music",
      "music.lead": "I taught myself Ableton, and I produce and DJ. Two projects, Garage Act and Atomatek, started from nothing and have made it onto paid stages and festivals around Switzerland and France, including EPFL's Sysmic festival.",
      "music.more": "Full profile ↗",
      "music.play": "Play",
      "music.pause": "Pause",
      "contact.lead": "Open to developer roles, internships and collaborations. The fastest way to reach me:",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "Location",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",
      "footer.tagline": "Built from scratch, deployed on GitHub Pages.",
      "footer.top": "Back to top ↑",
      "badge.live": "Live",
      "badge.dev": "In development",
      "badge.research": "Research",
      "badge.private": "Private",
      "free.note": "Free to use, built on an open-source stack. No subscription, no paywall.",
      "link.live": "Live demo ↗",
      "link.code": "Code ↗",
      "link.private": "Private / local",
      "a11y.skip": "Skip to content",
      "a11y.menu": "Open menu",
      "a11y.lang": "Choose language",
      "a11y.scroll": "Scroll to the About section",
      "a11y.home": "Florian Sumi, home",
      "a11y.nav": "Main navigation",
      "a11y.glance": "At a glance",
      "a11y.workExp": "Work experience",
      "a11y.education": "Education",
      "a11y.preview": "preview",
      "projects.stackNote": "Built with (AI-assisted):",
      "projects.caseStudy": "Case study",
      "projects.cta": "Like what you see? Let's build something together.",
      "projects.cta.email": "Get in touch",
      "projects.cta.cv": "Download CV"
    },
    "techSkills": [
      "JavaScript & Python",
      "React Native, Next.js & Node.js",
      "WebAssembly / Pyodide",
      "WebGL / Web Audio API",
      "pgvector / vector search",
      "Multi-agent AI pipelines",
      "Electron & Capacitor (Android)",
      "Server-Sent Events / real-time",
      "JWT auth & REST APIs",
      "Progressive Web Apps (PWAs)",
      "Automated testing",
      "WCAG accessibility",
      "Git, GitHub, Vercel, GitHub Pages",
      "Product & UX design"
    ],
    "softSkills": [
      "FR / EN native · DE (school)",
      "Customer service",
      "Teaching (TEFL)",
      "Fast learner",
      "Reliable & trustworthy",
      "Adaptable",
      "Self-directed",
      "Problem solving"
    ],
    "experience": [
      {
        "role": "Salesman & Cashier",
        "org": "Cash n Go",
        "meta": "Second-hand retail",
        "desc": "Front-of-house sales and till operation in a second-hand store: advising customers, valuing and handling stock, and managing cash accurately."
      },
      {
        "role": "Technical Documentation Intern",
        "org": "LNS, Orvin",
        "meta": "Machine-tools industry",
        "desc": "Produced and structured technical documentation in the machine-tool domain."
      },
      {
        "role": "Logistics Intern",
        "org": "Rolex SA, Geneva",
        "meta": "Inventory & dispatch",
        "desc": "Supported logistics operations: inventory management and parcel preparation and shipping."
      },
      {
        "role": "Landscaping Intern",
        "org": "Marco Cellerini",
        "meta": "Outdoor / grounds",
        "desc": "Hands-on landscaping and grounds work."
      }
    ],
    "education": [
      {
        "role": "MA, Social Sciences · Media & Communication",
        "org": "University of Lausanne (UNIL)",
        "meta": "In progress",
        "desc": "Master's in social sciences, specialising in media and communication."
      },
      {
        "role": "BA, Social Sciences",
        "org": "University of Lausanne (UNIL)",
        "meta": "Completed",
        "desc": "Bachelor's degree in social sciences."
      },
      {
        "role": "CS50: Introduction to Programming with Python",
        "org": "Harvard University (online)",
        "meta": "In progress",
        "desc": "Harvard's flagship computer-science course. Currently working through the Python track."
      },
      {
        "role": "Federal Maturity · Economics & Law",
        "org": "Lycée Jean-Piaget, Neuchâtel",
        "meta": "Diplôme de maturité gymnasiale",
        "desc": "Swiss academic baccalaureate with a focus on economics and law."
      },
      {
        "role": "Qualifi Level 5 Certificate (TEFL)",
        "org": "The TEFL Academy",
        "meta": "Teaching English as a Foreign Language",
        "desc": "Professional qualification to teach English as a foreign language."
      }
    ],
    "projects": [
      {
        "tag": "Self-hosted media centre · Electron + Node",
        "desc": "A self-hosted media centre I built top to bottom. A Node/Express server indexes a library and streams it over HTTP range requests (instant seeking), and three clients share one sync engine: an Electron desktop app, a Capacitor Android app, and a lightweight client for low-power devices. It includes a hand-built virtualised grid that stays smooth with thousands of items (no framework), real-time 'watch-together' rooms that mirror one viewer's play, pause and seek to a friend over Server-Sent Events, token auth with passkey-locked private folders, and remote access over a private mesh VPN."
      },
      {
        "tag": "Interactive Pi 5 course · PWA",
        "desc": "A 447-page Raspberry Pi 5 handbook turned into a friendly course you can actually finish. It has a real hand-written Linux terminal and a wireable GPIO breadboard you can try right in the browser, plus ⌘K search, a glossary, quizzes and badges, and light/dark themes. Installable and fully offline."
      },
      {
        "tag": "AI companion · Next.js + pgvector",
        "desc": "A full-stack AI companion (Next.js, Postgres + pgvector) that forms lasting, searchable memories of you and keeps running background jobs, writing private reflections and shifting mood even after you close the tab. Real accounts and real persistence: an experiment in giving an AI an inner life.",
        "caseStudy": {"stats": ["Next.js + pgvector", "Long-term memory", "Background jobs"], "body": "It stores memories as embeddings in pgvector and pulls them back by similarity, so the conversations that matter resurface instead of vanishing on a reload. Background jobs keep it going while you're away, writing little journal entries and drifting through moods even with the tab closed."}
      },
      {
        "tag": "Learn-to-code platform · WASM/Pyodide",
        "desc": "A hacker-terminal-themed school that teaches six languages (Python, JavaScript, TypeScript, SQL, Lua and Ruby), each running a real engine inside the browser via WebAssembly. Theory first, then live-graded exercises. Modeled on Harvard's CS50 and Dataquest.",
        "caseStudy": {"stats": ["6 languages, real engines", "96 exercises", "Runs in the browser"], "body": "Every language runs on a real engine compiled to WebAssembly. Python uses Pyodide, and there's ruby.wasm and sql.js alongside JS, TypeScript and Lua. Do an exercise and it grades the actual code you wrote by running it against tests, no multiple choice. Every solution gets checked in CI first, so nothing ships broken."}
      },
      {
        "tag": "Learn to build with AI · PWA",
        "desc": "A course platform built for people who came to coding through AI tools and want to go deeper. Structured tracks take you from prompt to deployed app, with a live AI mentor that answers questions inline, progress tracking, and a curriculum that keeps up as the tooling changes. Built because every existing learn-to-code resource assumes you want to become a traditional engineer."
      },
      {
        "tag": "AI Excel generator · JS + Python serverless",
        "desc": "Say or type what you need and get a real, downloadable Excel workbook with live formulas, totals, conditional formatting, dropdowns and charts. It reads data from photos and PDFs, and installs as an app on any device.",
        "caseStudy": {"stats": ["Voice or text in", "Real .xlsx out", "Reads photos and PDFs"], "body": "On the backend a Python function builds an actual workbook, formulas, conditional formatting, charts and all, then hands you back the .xlsx. Snap a photo of a receipt or drop in a PDF and a vision model turns it into rows."}
      },
      {
        "tag": "AI email triage · Gmail agent",
        "desc": "An AI agent that triages a Gmail inbox twice a day: it stars and labels the mail that matters (invoices, payroll, tax, deadlines, security), drafts replies that need one without ever sending, and blocks noisy senders on request."
      },
      {
        "tag": "AI ad generator · Multi-agent",
        "desc": "A multi-agent pipeline that turns a product brief into ready-to-use ad creatives. Specialised agents write the copy, design the scenes and generate the imagery, and every scene stays editable before export.",
        "caseStudy": {"stats": ["5 agents", "Brief in, campaign out", "Editable scenes"], "body": "Five agents split the work: strategy, copy, art direction, imagery, and a final review, each one handing off to the next. What comes out is a whole campaign, down to an animated video with voiceover, and it all happens in the browser."}
      },
      {
        "tag": "Resale marketplace · Node/Express full-stack",
        "desc": "A peer-to-peer marketplace for buying and selling second-hand fashion in Switzerland, with real user accounts, JWT auth, listings and messaging. Trilingual (FR / DE / IT), built as a Node/Express full-stack app with a PWA front end. In development."
      },
      {
        "tag": "Audio-reactive visuals & projection · WebGL",
        "desc": "A real-time WebGL / Web Audio VJ tool for live shows: ten visuals (five infinite-zoom 'liquid' fractals plus five audio visualizers) that react to any sound. It includes a built-in evolving psytrance generator and free-form multi-shape projection mapping, and runs as a desktop web app.",
        "caseStudy": {"stats": ["One HTML file", "No dependencies", "10 live visuals"], "body": "Ten fractals and audio visualisers, all GLSL shaders reacting to live frequency data from the Web Audio API. The whole thing is a single HTML file, no build step, no libraries. Projection mapping is baked in for real shows."}
      },
      {
        "tag": "AI singing coach · Web Audio + PWA",
        "desc": "A full singing coach in the browser: real-time pitch tuner, scored vocal warm-ups, pitch practice game, 13 theory cards, a 12-week training programme, daily plans, Ableton studio guide, progress radar chart and achievement badges. Runs offline, installs as an app, and ships as an Android APK."
      },
      {
        "tag": "Bar-crawl app · React Native / Expo",
        "desc": "Find bars by canton, browse by commune, filter by type, and mark your crawl progress: a pocket guide to the Swiss bar scene. 3,500+ venues across Switzerland, built with Expo and React Native on a Supabase backend. In development."
      },
      {
        "tag": "Algo trading research · Python",
        "desc": "An algorithmic paper-trading bot and back-testing harness in Python. Evaluated honestly as a study in strategy testing and risk, it was kept strictly paper-only after the data showed no reliable live edge."
      }
    ]
  },
  "fr": {
    "label": "Français",
    "ui": {
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.experience": "Parcours",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      "hero.eyebrow": "Développeur full-stack & étudiant UNIL en Sciences sociales, ouvert aux postes junior",
      "hero.role": "Je livre des apps web full-stack et des outils IA, 8 en ligne",
      "hero.pitch": "Je transforme des idées en logiciels que les gens utilisent, et 8 sont en ligne en ce moment : une école dans le navigateur qui fait tourner six moteurs de langages via WebAssembly, un générateur Excel à la voix, une application compagnon avec mémoire pgvector, un pipeline publicitaire multi-agents, et plus encore. Plusieurs utilisent l’IA comme vraie fonctionnalité, pas seulement pour les construire. Francophone et anglophone de naissance ; Suisse et Américain.",
      "hero.cta.work": "Voir mes réalisations",
      "hero.cta.cv": "Télécharger le CV",
      "hero.cta.contact": "Contact",
      "hero.stat.apps": "projets",
      "hero.stat.live": "en ligne",
      "hero.stat.langs": "langues maternelles",
      "section.about": "À propos",
      "section.skills": "Ce que j’apporte",
      "section.experience": "Parcours & formation",
      "section.projects": "Ce que j’ai créé",
      "section.contact": "Me contacter",
      "about.p1": "Je suis <strong>Florian Sumi</strong>, Suisse et Américain, basé près de Neuchâtel. Le jour, je prépare un <strong>Master en sciences sociales (Médias &amp; Communication) à l’Université de Lausanne</strong> ; le reste du temps, je développe des logiciels.",
      "about.p2": "Je suis en grande partie <strong>autodidacte</strong>, et l’IA fait partie de ma façon de travailler, comme n’importe quel développeur s’appuie sur ses outils. J’ai livré des produits avec WebGL, WebAssembly, des bases de données vectorielles, des pipelines multi-agents et du streaming en temps réel. On peut tous les ouvrir et les utiliser : une plateforme qui fait tourner de vrais moteurs de langage dans le navigateur, une application compagnon avec mémoire pgvector, et d’autres.",
      "about.p3": "Je viens de la <strong>recherche en médias et communication</strong>, c’est pourquoi je conçois des logiciels pour les gens qui s’en servent, pas seulement pour d’autres développeurs. Le même réflexe vient de postes de terrain en <strong>vente, gestion de caisse et service client</strong>, et d’une qualification d’enseignement TEFL. J’apprends vite et je livre.",
      "about.fact.based.label": "Basé à",
      "about.fact.based.value": "Marin-Epagnier, Neuchâtel",
      "about.fact.langs.label": "Langues",
      "about.fact.langs.value": "Français (langue maternelle) · Anglais (langue maternelle) · Allemand (scolaire)",
      "about.fact.study.label": "Études",
      "about.fact.study.value": "MA Sciences sociales (Médias & Communication) · UNIL",
      "about.fact.also.label": "Aussi",
      "about.fact.also.value": "Production musicale (Ableton) · concerts live",
      "skills.tech.heading": "🛠️ Développement & IA",
      "skills.people.heading": "🤝 Relationnel & professionnel",
      "timeline.experience": "Expérience",
      "timeline.education": "Formation",
      "projects.lead": "De vraies applications qui fonctionnent, pas des maquettes. Huit sont en ligne, toutes développées en solo ; les badges distinguent ce qui est publiquement en ligne de ce qui est encore en développement.",
      "projects.mission": "Un fil rouge les relie : mettre la technologie open source entre les mains de tous, en prenant des outils habituellement payants pour les rendre gratuits.",
      "section.music": "Musique & sets live",
      "nav.music": "Musique",
      "music.lead": "Autodidacte sur Ableton, je produis et je mixe. J’ai porté deux projets, Garage Act et Atomatek, de zéro jusqu’à des salles et festivals rémunérés en Suisse et en France, dont le festival Sysmic de l’EPFL.",
      "music.more": "Profil complet ↗",
      "music.play": "Lecture",
      "music.pause": "Pause",
      "contact.lead": "Ouvert aux postes de développeur, aux stages et aux collaborations. Le moyen le plus rapide de me joindre :",
      "contact.email": "E-mail",
      "contact.phone": "Téléphone",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "Localisation",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",
      "footer.tagline": "Conçu de A à Z, déployé sur GitHub Pages.",
      "footer.top": "Retour en haut ↑",
      "badge.live": "En ligne",
      "badge.dev": "En développement",
      "badge.research": "Recherche",
      "badge.private": "Privé",
      "free.note": "Gratuit, sur une base open source. Sans abonnement ni péage.",
      "link.live": "Démo en ligne ↗",
      "link.code": "Code ↗",
      "link.private": "Privé / local",
      "a11y.skip": "Aller au contenu",
      "a11y.menu": "Ouvrir le menu",
      "a11y.lang": "Choisir la langue",
      "a11y.scroll": "Défiler jusqu’à la section À propos",
      "a11y.home": "Florian Sumi, accueil",
      "a11y.nav": "Navigation principale",
      "a11y.glance": "En un coup d’œil",
      "a11y.workExp": "Expérience professionnelle",
      "a11y.education": "Formation",
      "a11y.preview": "aperçu",
      "projects.caseStudy": "Étude de cas",
      "projects.cta": "Ça vous parle ? Construisons quelque chose ensemble.",
      "projects.cta.email": "Me contacter",
      "projects.cta.cv": "Télécharger le CV",
      "projects.stackNote": "Réalisé avec (assisté par IA) :"
    },
    "techSkills": [
      "JavaScript & Python",
      "React Native, Next.js & Node.js",
      "WebAssembly / Pyodide",
      "WebGL / Web Audio API",
      "pgvector / recherche vectorielle",
      "Pipelines multi-agents IA",
      "Electron & Capacitor (Android)",
      "Server-Sent Events / temps réel",
      "Auth JWT & APIs REST",
      "Progressive Web Apps (PWA)",
      "Tests automatisés",
      "Accessibilité WCAG",
      "Git, GitHub, Vercel, GitHub Pages",
      "Conception produit & UX"
    ],
    "softSkills": [
      "FR / EN langue maternelle · DE (scolaire)",
      "Service client",
      "Enseignement (TEFL)",
      "Apprentissage rapide",
      "Fiable & digne de confiance",
      "Adaptable",
      "Autonome",
      "Résolution de problèmes"
    ],
    "experience": [
      {
        "role": "Vendeur & caissier",
        "org": "Cash n Go",
        "meta": "Commerce de seconde main",
        "desc": "Vente en boutique et tenue de la caisse dans un magasin de seconde main : conseil à la clientèle, estimation et gestion du stock, et tenue rigoureuse de la caisse."
      },
      {
        "role": "Stagiaire en documentation technique",
        "org": "LNS, Orvin",
        "meta": "Industrie de la machine-outil",
        "desc": "Rédaction et structuration de documentation technique dans le domaine de la machine-outil."
      },
      {
        "role": "Stagiaire en logistique",
        "org": "Rolex SA, Genève",
        "meta": "Inventaire & expédition",
        "desc": "Soutien aux opérations logistiques : gestion des stocks, préparation et expédition des colis."
      },
      {
        "role": "Stagiaire paysagiste",
        "org": "Marco Cellerini",
        "meta": "Extérieur / espaces verts",
        "desc": "Travaux pratiques d’aménagement paysager et d’entretien des espaces verts."
      }
    ],
    "education": [
      {
        "role": "MA, Sciences sociales · Médias & Communication",
        "org": "Université de Lausanne (UNIL)",
        "meta": "En cours",
        "desc": "Master en sciences sociales, spécialisation médias et communication."
      },
      {
        "role": "BA, Sciences sociales",
        "org": "Université de Lausanne (UNIL)",
        "meta": "Obtenu",
        "desc": "Baccalauréat universitaire (Bachelor) en sciences sociales."
      },
      {
        "role": "CS50 : Introduction à la programmation avec Python",
        "org": "Harvard University (en ligne)",
        "meta": "En cours",
        "desc": "Le cours d’informatique phare de Harvard. Actuellement en train de suivre le parcours Python."
      },
      {
        "role": "Maturité gymnasiale · Économie & Droit",
        "org": "Lycée Jean-Piaget, Neuchâtel",
        "meta": "Diplôme de maturité gymnasiale",
        "desc": "Maturité gymnasiale suisse avec orientation économie et droit."
      },
      {
        "role": "Certificat Qualifi Niveau 5 (TEFL)",
        "org": "The TEFL Academy",
        "meta": "Enseignement de l’anglais langue étrangère",
        "desc": "Qualification professionnelle pour enseigner l’anglais en tant que langue étrangère."
      }
    ],
    "projects": [
      {
        "tag": "Médiacentre auto-hébergé · Electron + Node",
        "desc": "Un médiacentre auto-hébergé que j'ai construit de A à Z : un serveur Node/Express qui indexe une bibliothèque et la diffuse via des requêtes HTTP par plage (lecture instantanée), avec trois clients partageant un même moteur de synchronisation : une application de bureau Electron, une application Android Capacitor et un client léger pour appareils peu puissants. On y trouve une grille virtualisée faite main qui reste fluide avec des milliers d'éléments (sans framework), des sessions « regarder ensemble » en temps réel qui répliquent la lecture, la pause et l'avance d'un spectateur vers un ami via Server-Sent Events, une authentification par jeton avec dossiers privés verrouillés par clé d'accès, et un accès à distance via un réseau maillé privé (VPN)."
      },
      {
        "tag": "Cours interactif Pi 5 · PWA",
        "desc": "Un manuel de 447 pages sur le Raspberry Pi 5 réinventé en un cours convivial que l'on peut vraiment terminer. Il propose un véritable terminal Linux écrit à la main et une platine GPIO que l'on câble directement dans le navigateur, ainsi qu'une recherche ⌘K, un glossaire, des quiz et des badges, et des thèmes clair et sombre. Installable et entièrement hors ligne."
      },
      {
        "tag": "Compagnon IA · Next.js + pgvector",
        "desc": "Un compagnon IA full-stack (Next.js, Postgres + pgvector) qui se forge de vrais souvenirs de vous, consultables et persistants, et poursuit des tâches en arrière-plan, consignant des réflexions intimes et faisant évoluer son humeur même après la fermeture de l'onglet. De vrais comptes, une vraie persistance : une expérience pour donner une vie intérieure à une IA.",
        "caseStudy": {"stats": ["Next.js + pgvector", "Mémoire à long terme", "Tâches en arrière-plan"], "body": "Les souvenirs sont stockés comme embeddings dans pgvector et retrouvés par similarité, donc les conversations passées pertinentes reviennent au lieu d'être perdues au rechargement. Des tâches planifiées le font écrire son journal et changer d'humeur pendant que l'onglet est fermé."}
      },
      {
        "tag": "Plateforme d’apprentissage du code · WASM/Pyodide",
        "desc": "Une école à l'esthétique terminal de hacker qui enseigne six langages (Python, JavaScript, TypeScript, SQL, Lua et Ruby), chacun exécutant un vrai moteur dans le navigateur via WebAssembly. D'abord la théorie, puis des exercices corrigés en direct. Inspirée du CS50 de Harvard et de Dataquest.",
        "caseStudy": {"stats": ["6 langages, vrais moteurs", "96 exercices", "Tourne dans le navigateur"], "body": "Chaque langage tourne avec un vrai moteur compilé en WebAssembly : Pyodide pour Python, ruby.wasm, sql.js, ainsi que JS, TypeScript et Lua. Les exercices corrigent le code que vous écrivez en l'exécutant sur des tests, pas des QCM. Les solutions de référence sont vérifiées en CI avant publication."}
      },
      {
        "tag": "Apprendre à créer avec l’IA · PWA",
        "desc": "Une plateforme de cours pensée pour celles et ceux venus au code par les outils d'IA et qui veulent aller plus loin. Des parcours structurés vous mènent du prompt à l'application déployée, avec un mentor IA en direct qui répond à vos questions au fil de l'eau, un suivi de progression et un programme qui se met à jour à mesure que les outils changent. Né du constat que toutes les ressources existantes supposent que vous voulez devenir un ingénieur classique."
      },
      {
        "tag": "Générateur Excel par IA · JS + Python serverless",
        "desc": "Dictez ou tapez ce dont vous avez besoin et obtenez un vrai classeur Excel téléchargeable, avec formules en direct, totaux, mise en forme conditionnelle, listes déroulantes et graphiques. Il lit les données depuis des photos et des PDF, et s'installe comme une application sur n'importe quel appareil.",
        "caseStudy": {"stats": ["Voix ou texte en entrée", "Vrai .xlsx en sortie", "Lit photos et PDF"], "body": "Une fonction Python côté serveur écrit un vrai classeur avec formules, mise en forme conditionnelle et graphiques, puis renvoie le .xlsx. Les photos et PDF sont lus en lignes par un modèle de vision."}
      },
      {
        "tag": "Triage des e-mails par IA · Agent Gmail",
        "desc": "Un agent IA qui trie une boîte Gmail deux fois par jour : il met en favori et étiquette les messages qui comptent (factures, salaires, impôts, échéances, sécurité), rédige les réponses nécessaires sans jamais les envoyer, et bloque les expéditeurs indésirables à la demande."
      },
      {
        "tag": "Générateur de publicités par IA · Multi-agents",
        "desc": "Un pipeline multi-agents qui transforme un brief produit en créations publicitaires prêtes à l'emploi. Des agents spécialisés rédigent les textes, conçoivent les scènes et génèrent les visuels, et chaque scène reste modifiable avant l'export.",
        "caseStudy": {"stats": ["5 agents", "Brief en entrée, campagne en sortie", "Scènes éditables"], "body": "Cinq agents gèrent la stratégie, le texte, la direction artistique, les visuels et une relecture, chacun passant au suivant. Le résultat est une campagne complète, avec une vidéo animée et voix off, générée dans le navigateur."}
      },
      {
        "tag": "Marketplace de seconde main · Full-stack Node/Express",
        "desc": "Une marketplace entre particuliers pour acheter et vendre de la mode de seconde main en Suisse, avec de vrais comptes utilisateurs, authentification JWT, annonces et messagerie. Trilingue (FR / DE / IT), conçue comme une application full-stack Node/Express avec un front-end PWA. En développement."
      },
      {
        "tag": "Visuels audio-réactifs & projection · WebGL",
        "desc": "Un outil VJ temps réel en WebGL / Web Audio pour les concerts : dix visuels (cinq fractales « liquides » à zoom infini et cinq visualiseurs audio) qui réagissent à n'importe quel son. Avec un générateur de psytrance évolutif intégré et un mapping de projection multi-formes libre, le tout en application web de bureau.",
        "caseStudy": {"stats": ["Un fichier HTML", "Aucune dépendance", "10 visuels en direct"], "body": "Dix fractales et visualiseurs audio écrits en shaders GLSL qui réagissent aux fréquences en direct de la Web Audio API. C'est un seul fichier HTML, sans build et sans bibliothèque. Le mapping de projection est intégré pour la scène."}
      },
      {
        "tag": "Coach chant IA · Web Audio + PWA",
        "desc": "Un coach vocal complet dans le navigateur : accordeur de justesse en temps réel, échauffements notés, jeu de pratique mélodique, 13 fiches théoriques, programme de 12 semaines, plan journalier adaptatif, guide studio Ableton, radar de progression et badges. Fonctionne hors ligne, s'installe comme appli et sort en APK Android."
      },
      {
        "tag": "Appli de tournée des bars · React Native / Expo",
        "desc": "Un compagnon de tournée des bars qui recense tous les bars de Suisse, plus de 3 500, organisés par canton et par commune. Développé avec Expo et React Native, en migration vers un backend Supabase. En développement."
      },
      {
        "tag": "Recherche en trading algorithmique · Python",
        "desc": "Un bot de paper-trading algorithmique et un banc de backtesting en Python. Évalué en toute honnêteté comme une étude du test de stratégies et de la gestion du risque, il est resté strictement en paper-trading après que les données ont révélé l’absence d’avantage fiable en conditions réelles."
      }
    ]
  },
  "de": {
    "label": "Deutsch",
    "ui": {
      "nav.about": "Über mich",
      "nav.skills": "Kompetenzen",
      "nav.experience": "Erfahrung",
      "nav.projects": "Projekte",
      "nav.contact": "Kontakt",
      "hero.eyebrow": "Full-Stack-Entwickler & UNIL-Sozialwissenschaften, offen für Junior-Stellen",
      "hero.role": "Ich liefere Full-Stack-Web-Apps und KI-gestützte Tools – 8 davon sind live",
      "hero.pitch": "Ich verwandle Ideen in Software, die Menschen nutzen, und 8 davon sind gerade live: eine Schule im Browser, die sechs Sprach-Engines über WebAssembly ausführt, ein Excel-Generator per Sprache, eine Begleit-App mit pgvector-Gedächtnis, eine Multi-Agent-Werbepipeline und mehr. Mehrere nutzen KI als echte Funktion, nicht nur, um sie zu bauen. Französisch und Englisch als Muttersprachen; Schweizer und US-Amerikaner.",
      "hero.cta.work": "Meine Arbeiten ansehen",
      "hero.cta.cv": "Lebenslauf herunterladen",
      "hero.cta.contact": "Kontakt",
      "hero.stat.apps": "Projekte",
      "hero.stat.live": "online",
      "hero.stat.langs": "Muttersprachen",
      "section.about": "Über mich",
      "section.skills": "Was ich mitbringe",
      "section.experience": "Erfahrung & Ausbildung",
      "section.projects": "Was ich gebaut habe",
      "section.contact": "Kontakt aufnehmen",
      "about.p1": "Ich bin <strong>Florian Sumi</strong>, Schweizer und Amerikaner, wohnhaft in der Nähe von Neuenburg. Tagsüber mache ich einen <strong>Master in Sozialwissenschaften (Medien &amp; Kommunikation) an der Universität Lausanne</strong>; in der übrigen Zeit entwickle ich Software.",
      "about.p2": "Ich bin grösstenteils <strong>Autodidakt</strong>, und KI gehört zu meiner Arbeitsweise, so wie jeder Entwickler seine Werkzeuge nutzt. Ich habe Produkte mit WebGL, WebAssembly, Vektordatenbanken, Multi-Agent-Pipelines und Echtzeit-Streaming ausgeliefert. Man kann sie alle öffnen und nutzen: eine Plattform, die echte Sprach-Engines im Browser ausführt, eine Begleit-App mit pgvector-Gedächtnis und weitere.",
      "about.p3": "Ich komme aus der <strong>Medien- und Kommunikationsforschung</strong>, deshalb baue ich Software für die Menschen, die sie verwenden, nicht nur für andere Entwickler. Dasselbe Gespür kommt aus praktischer Arbeit in <strong>Einzelhandel, Kassenführung und Kundenservice</strong> und einer TEFL-Lehrqualifikation. Ich lerne schnell und ich liefere.",
      "about.fact.based.label": "Wohnort",
      "about.fact.based.value": "Marin-Epagnier, Neuenburg",
      "about.fact.langs.label": "Sprachen",
      "about.fact.langs.value": "Französisch (Muttersprache) · Englisch (Muttersprache) · Deutsch (Schule)",
      "about.fact.study.label": "Studium",
      "about.fact.study.value": "MA Sozialwissenschaften (Medien & Kommunikation) · UNIL",
      "about.fact.also.label": "Ausserdem",
      "about.fact.also.value": "Musikproduktion (Ableton) · Live-Auftritte",
      "skills.tech.heading": "🛠️ Entwicklung & KI",
      "skills.people.heading": "🤝 Menschen & Berufliches",
      "timeline.experience": "Erfahrung",
      "timeline.education": "Ausbildung",
      "projects.lead": "Echte, funktionierende Anwendungen, keine Mockups. Acht sind live, alle im Alleingang gebaut; die Badges zeigen, was öffentlich live ist und was sich noch in Entwicklung befindet.",
      "projects.mission": "Ein roter Faden verbindet sie alle: quelloffene Technologie in den Alltag aller bringen, also Werkzeuge, für die man sonst zahlt, kostenlos machen.",
      "section.music": "Musik & Live-Sets",
      "nav.music": "Musik",
      "music.lead": "Autodidakt an Ableton, produziere ich und lege auf. Zwei Projekte, Garage Act und Atomatek, habe ich von Grund auf aufgebaut und auf bezahlte Bühnen und Festivals in der Schweiz und in Frankreich gebracht, darunter das Sysmic-Festival der EPFL.",
      "music.more": "Vollständiges Profil ↗",
      "music.play": "Abspielen",
      "music.pause": "Pause",
      "contact.lead": "Offen für Entwicklerstellen, Praktika und Kooperationen. Am schnellsten erreichen Sie mich so:",
      "contact.email": "E-Mail",
      "contact.phone": "Telefon",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "Standort",
      "contact.location.value": "Marin-Epagnier, Neuenburg",
      "footer.tagline": "Von Grund auf selbst gebaut, bereitgestellt auf GitHub Pages.",
      "footer.top": "Nach oben ↑",
      "badge.live": "Live",
      "badge.dev": "In Entwicklung",
      "badge.research": "Forschung",
      "badge.private": "Privat",
      "free.note": "Kostenlos nutzbar, auf einem Open-Source-Stack gebaut. Kein Abo, keine Paywall.",
      "link.live": "Live-Demo ↗",
      "link.code": "Code ↗",
      "link.private": "Privat / lokal",
      "a11y.skip": "Zum Inhalt springen",
      "a11y.menu": "Menü öffnen",
      "a11y.lang": "Sprache wählen",
      "a11y.scroll": "Zum Abschnitt «Über mich» scrollen",
      "a11y.home": "Florian Sumi, Startseite",
      "a11y.nav": "Hauptnavigation",
      "a11y.glance": "Auf einen Blick",
      "a11y.workExp": "Berufserfahrung",
      "a11y.education": "Ausbildung",
      "a11y.preview": "Vorschau",
      "projects.caseStudy": "Fallstudie",
      "projects.cta": "Gefällt Ihnen, was Sie sehen? Lassen Sie uns gemeinsam etwas bauen.",
      "projects.cta.email": "Kontakt aufnehmen",
      "projects.cta.cv": "Lebenslauf herunterladen",
      "projects.stackNote": "Erstellt mit (KI-gestützt):"
    },
    "techSkills": [
      "JavaScript & Python",
      "React Native, Next.js & Node.js",
      "WebAssembly / Pyodide",
      "WebGL / Web Audio API",
      "pgvector / Vektorsuche",
      "Multi-Agent-KI-Pipelines",
      "Electron & Capacitor (Android)",
      "Server-Sent Events / Echtzeit",
      "JWT-Auth & REST-APIs",
      "Progressive Web Apps (PWAs)",
      "Automatisierte Tests",
      "WCAG-Barrierefreiheit",
      "Git, GitHub, Vercel, GitHub Pages",
      "Produkt- & UX-Design"
    ],
    "softSkills": [
      "FR / EN Muttersprache · DE (Schule)",
      "Kundenservice",
      "Unterrichten (TEFL)",
      "Schnelle Auffassungsgabe",
      "Zuverlässig & vertrauenswürdig",
      "Anpassungsfähig",
      "Eigenständig",
      "Problemlösung"
    ],
    "experience": [
      {
        "role": "Verkäufer & Kassierer",
        "org": "Cash n Go",
        "meta": "Second-Hand-Einzelhandel",
        "desc": "Verkauf im direkten Kundenkontakt und Kassenbetrieb in einem Second-Hand-Laden: Kundenberatung, Bewertung und Handling der Ware sowie zuverlässige Kassenführung."
      },
      {
        "role": "Praktikant Technische Dokumentation",
        "org": "LNS, Orvin",
        "meta": "Werkzeugmaschinenbranche",
        "desc": "Erstellung und Strukturierung technischer Dokumentation im Bereich der Werkzeugmaschinen."
      },
      {
        "role": "Praktikant Logistik",
        "org": "Rolex SA, Genf",
        "meta": "Lager & Versand",
        "desc": "Unterstützung im Logistikbetrieb: Bestandsverwaltung sowie Vorbereitung und Versand von Paketen."
      },
      {
        "role": "Praktikant Garten- & Landschaftsbau",
        "org": "Marco Cellerini",
        "meta": "Aussenbereich / Grünflächen",
        "desc": "Praktische Arbeiten im Garten- und Landschaftsbau sowie in der Grünflächenpflege."
      }
    ],
    "education": [
      {
        "role": "MA Sozialwissenschaften · Medien & Kommunikation",
        "org": "Universität Lausanne (UNIL)",
        "meta": "Laufend",
        "desc": "Master in Sozialwissenschaften mit Spezialisierung auf Medien und Kommunikation."
      },
      {
        "role": "BA Sozialwissenschaften",
        "org": "Universität Lausanne (UNIL)",
        "meta": "Abgeschlossen",
        "desc": "Bachelorabschluss in Sozialwissenschaften."
      },
      {
        "role": "CS50: Einführung in die Programmierung mit Python",
        "org": "Harvard University (online)",
        "meta": "Laufend",
        "desc": "Der renommierte Informatikkurs der Harvard University. Aktuell arbeite ich mich durch den Python-Track."
      },
      {
        "role": "Gymnasiale Maturität · Wirtschaft & Recht",
        "org": "Lycée Jean-Piaget, Neuenburg",
        "meta": "Eidgenössische gymnasiale Maturität",
        "desc": "Schweizer gymnasiale Maturität mit Schwerpunkt Wirtschaft und Recht."
      },
      {
        "role": "Qualifi Level 5 Certificate (TEFL)",
        "org": "The TEFL Academy",
        "meta": "Englisch als Fremdsprache unterrichten",
        "desc": "Berufsqualifikation zum Unterrichten von Englisch als Fremdsprache."
      }
    ],
    "projects": [
      {
        "tag": "Selbst gehostetes Mediacenter · Electron + Node",
        "desc": "Ein selbst gehostetes Mediacenter, das ich vollständig selbst gebaut habe: ein Node/Express-Server, der eine Bibliothek indexiert und per HTTP-Range-Requests streamt (sofortiges Spulen), mit drei Clients, die eine gemeinsame Sync-Engine teilen: eine Electron-Desktop-App, eine Capacitor-Android-App und ein schlanker Client für leistungsschwache Geräte. Dazu gehören ein handgebautes virtualisiertes Grid, das mit Tausenden Einträgen flüssig bleibt (ohne Framework), Echtzeit-Räume zum gemeinsamen Ansehen, die Wiedergabe, Pause und Spulen eines Zuschauers über Server-Sent Events an einen Freund spiegeln, Token-Authentifizierung mit per Passkey gesperrten privaten Ordnern und Fernzugriff über ein privates Mesh-VPN."
      },
      {
        "tag": "Interaktiver Pi-5-Kurs · PWA",
        "desc": "Ein 447-seitiges Raspberry-Pi-5-Handbuch, neu aufgelegt als freundlicher Kurs, den man wirklich abschliessen kann. Er bietet ein echtes, handgeschriebenes Linux-Terminal und ein verdrahtbares GPIO-Steckbrett, das man direkt im Browser ausprobieren kann, dazu ⌘K-Suche, ein Glossar, Quizze und Abzeichen sowie ein helles und ein dunkles Theme. Installierbar und vollständig offline."
      },
      {
        "tag": "KI-Begleiter · Next.js + pgvector",
        "desc": "Ein Full-Stack-KI-Begleiter (Next.js, Postgres + pgvector), der bleibende, durchsuchbare Erinnerungen an Sie aufbaut und im Hintergrund weiterläuft, private Reflexionen in einem Tagebuch festhält und seine Stimmung verändert, selbst wenn Sie den Tab längst geschlossen haben. Echte Konten, echte Persistenz: ein Experiment, einer KI ein Innenleben zu geben.",
        "caseStudy": {"stats": ["Next.js + pgvector", "Langzeitgedächtnis", "Hintergrund-Jobs"], "body": "Erinnerungen werden als Embeddings in pgvector gespeichert und per Ähnlichkeit abgerufen, sodass relevante frühere Gespräche zurückkommen, statt beim Neuladen verloren zu gehen. Geplante Jobs lassen ihn Tagebuch schreiben und die Stimmung ändern, während der Tab geschlossen ist."}
      },
      {
        "tag": "Plattform zum Programmierenlernen · WASM/Pyodide",
        "desc": "Eine Schule im Hacker-Terminal-Look, die sechs Sprachen unterrichtet (Python, JavaScript, TypeScript, SQL, Lua und Ruby), jede mit einer echten Engine direkt im Browser, ausgeführt über WebAssembly. Erst Theorie, dann live bewertete Übungen. Nach dem Vorbild von Harvards CS50 und Dataquest.",
        "caseStudy": {"stats": ["6 Sprachen, echte Engines", "96 Übungen", "Läuft im Browser"], "body": "Jede Sprache läuft mit einer echten Engine, kompiliert zu WebAssembly: Pyodide für Python, ruby.wasm, sql.js, dazu JS, TypeScript und Lua. Übungen bewerten deinen Code, indem sie ihn gegen Tests ausführen, kein Multiple-Choice. Musterlösungen werden vor der Veröffentlichung in CI geprüft."}
      },
      {
        "tag": "Mit KI bauen lernen · PWA",
        "desc": "Eine Kursplattform für alle, die übers KI-Werkzeug zum Programmieren kamen und tiefer einsteigen wollen. Strukturierte Lernpfade führen vom Prompt zur ausgelieferten App, mit einem Live-KI-Mentor, der Fragen direkt beantwortet, Fortschrittsverfolgung und einem Lehrplan, der sich an die ändernden Werkzeuge anpasst. Entstanden, weil alle bestehenden Lernangebote annehmen, man wolle klassischer Entwickler werden."
      },
      {
        "tag": "KI-Excel-Generator · JS + Python serverless",
        "desc": "Sagen oder tippen Sie, was Sie brauchen, und erhalten Sie eine echte, herunterladbare Excel-Arbeitsmappe mit aktiven Formeln, Summen, bedingter Formatierung, Dropdowns und Diagrammen. Liest Daten aus Fotos und PDFs und lässt sich als App auf jedem Gerät installieren.",
        "caseStudy": {"stats": ["Sprache oder Text rein", "Echtes .xlsx raus", "Liest Fotos und PDFs"], "body": "Eine Python-Funktion im Backend schreibt eine echte Arbeitsmappe mit Formeln, bedingter Formatierung und Diagrammen und gibt das .xlsx zurück. Fotos und PDFs werden von einem Vision-Modell in Zeilen umgewandelt."}
      },
      {
        "tag": "KI-E-Mail-Triage · Gmail-Agent",
        "desc": "Ein KI-Agent, der ein Gmail-Postfach zweimal täglich sortiert: Er markiert und beschriftet die Post, die zählt (Rechnungen, Lohnabrechnungen, Steuern, Fristen, Sicherheit), entwirft die nötigen Antworten, ohne sie je zu senden, und blockiert auf Wunsch lästige Absender."
      },
      {
        "tag": "KI-Werbegenerator · Multi-Agent",
        "desc": "Eine Multi-Agent-Pipeline, die aus einem Produkt-Briefing einsatzbereite Werbe-Creatives macht. Spezialisierte Agenten schreiben die Texte, gestalten die Szenen und generieren die Bilder, und jede Szene bleibt vor dem Export bearbeitbar.",
        "caseStudy": {"stats": ["5 Agenten", "Brief rein, Kampagne raus", "Editierbare Szenen"], "body": "Fünf Agenten übernehmen Strategie, Text, Art-Direction, Bilder und eine Prüfung, jeder gibt an den nächsten weiter. Das Ergebnis ist eine komplette Kampagne mit animiertem Video und Voiceover, erzeugt im Browser."}
      },
      {
        "tag": "Second-Hand-Marktplatz · Node/Express Full-Stack",
        "desc": "Ein Peer-to-Peer-Marktplatz zum Kaufen und Verkaufen von Second-Hand-Mode in der Schweiz, mit echten Benutzerkonten, JWT-Authentifizierung, Inseraten und Nachrichten. Dreisprachig (FR / DE / IT), gebaut als Full-Stack-App mit Node/Express und PWA-Frontend. In Entwicklung."
      },
      {
        "tag": "Audioreaktive Visuals & Projektion · WebGL",
        "desc": "Ein Echtzeit-VJ-Tool (WebGL / Web Audio) für Live-Shows: zehn Visuals (fünf 'flüssige' Fraktale mit unendlichem Zoom und fünf Audio-Visualizer), die auf jeden Sound reagieren. Mit eingebautem, sich entwickelndem Psytrance-Generator und freiem Multi-Form-Projection-Mapping, als Desktop-Webanwendung.",
        "caseStudy": {"stats": ["Eine HTML-Datei", "Keine Abhängigkeiten", "10 Live-Visuals"], "body": "Zehn Fraktale und Audio-Visualizer als GLSL-Shader, die auf Live-Frequenzdaten der Web Audio API reagieren. Es ist eine einzige HTML-Datei, ohne Build und ohne Bibliotheken. Projektion-Mapping ist für Live-Shows eingebaut."}
      },
      {
        "tag": "KI-Gesangscoach · Web Audio + PWA",
        "desc": "Ein vollständiger Gesangscoach im Browser: Echtzeit-Stimmungs-Tuner, bewertete Stimmübungen, Melodie-Übungsspiel, 13 Theorie-Karten, ein 12-Wochen-Trainingsprogramm, adaptiver Tagesplan, Ableton-Studio-Guide, Fortschrittsradar und Achievements. Offline nutzbar, als App installierbar und als Android-APK verfügbar."
      },
      {
        "tag": "Bar-Crawl-App · React Native / Expo",
        "desc": "Eine Begleit-App für Bar-Crawls, die jede Bar der Schweiz abdeckt, über 3'500, geordnet nach Kanton und Gemeinde. Gebaut mit Expo und React Native, in Umstellung auf ein Supabase-Backend. In Entwicklung."
      },
      {
        "tag": "Algo-Trading-Forschung · Python",
        "desc": "Ein algorithmischer Paper-Trading-Bot mit Backtesting-Gerüst in Python. Ehrlich evaluiert als Studie zu Strategietests und Risiko, strikt auf Paper-Trading beschränkt, nachdem die Daten keinen verlässlichen Vorteil im Echtbetrieb zeigten."
      }
    ]
  },
  "zh": {
    "label": "中文",
    "ui": {
      "nav.about": "关于",
      "nav.skills": "技能",
      "nav.experience": "经历",
      "nav.projects": "项目",
      "nav.contact": "联系",
      "hero.eyebrow": "瑞士纳沙泰尔 · 正在寻找机会",
      "hero.role": "我开发真实可用的 Web 应用，已有 8 款上线运行",
      "hero.pitch": "我把想法变成人们在用的软件，其中 8 款此刻在线：一所通过 WebAssembly 运行六种语言引擎的浏览器学校、一个用语音生成 Excel 的工具、一款带 pgvector 记忆的陪伴应用、一条多智能体广告流水线，等等。其中几款把 AI 用作真正的功能，而不只是用来开发它们。法语和英语母语者；瑞士与美国双重身份。",
      "hero.cta.work": "查看我的作品",
      "hero.cta.cv": "下载简历",
      "hero.cta.contact": "联系我",
      "hero.stat.apps": "个项目",
      "hero.stat.live": "个已上线项目",
      "hero.stat.langs": "种母语",
      "section.about": "关于我",
      "section.skills": "我能带来什么",
      "section.experience": "经历与教育",
      "section.projects": "我做过的东西",
      "section.contact": "取得联系",
      "about.p1": "我是<strong>Florian Sumi</strong>，拥有瑞士与美国双重国籍，定居在纳沙泰尔附近。白天我在<strong>洛桑大学攻读社会科学硕士（媒体与传播方向）</strong>；其余时间，我都在做软件。",
      "about.p2": "我基本上是<strong>自学</strong>的，AI 是我工作方式的一部分，就像任何开发者都会用自己的工具一样。我用 WebGL、WebAssembly、向量数据库、多智能体流水线和实时流交付过产品。它们都能打开即用：一个在浏览器里运行真实语言引擎的平台、一款带 pgvector 记忆的陪伴应用，还有更多。",
      "about.p3": "我的背景是<strong>媒体与传播研究</strong>，所以我为使用软件的人而做，而不只是为其他开发者。同样的习惯来自<strong>零售、收银和客户服务</strong>的一线工作，以及一份 TEFL 教学资格。我学得快，也能交付。",
      "about.fact.based.label": "所在地",
      "about.fact.based.value": "Marin-Epagnier，纳沙泰尔",
      "about.fact.langs.label": "语言",
      "about.fact.langs.value": "法语（母语）· 英语（母语）· 德语（学校所学）",
      "about.fact.study.label": "在读",
      "about.fact.study.value": "社会科学硕士（媒体与传播）· UNIL",
      "about.fact.also.label": "另外",
      "about.fact.also.value": "音乐制作（Ableton）· 现场演出",
      "skills.tech.heading": "🛠️ 开发与 AI",
      "skills.people.heading": "🤝 人际与职业",
      "timeline.experience": "工作经历",
      "timeline.education": "教育背景",
      "projects.lead": "真实可用的应用，而非设计稿。8 款已上线，全部由我独立完成；徽章标明哪些已公开上线、哪些仍在开发中。",
      "projects.mission": "它们有一条共同的主线：把开源技术带到日常人手中，把人们通常要付费的工具变成免费的。",
      "section.music": "音乐与现场",
      "nav.music": "音乐",
      "music.lead": "我自学 Ableton，做音乐制作与 DJ。我从零起步打造了两个项目（Garage Act 和 Atomatek），一路带上瑞士和法国的付费场馆与音乐节，包括 EPFL 的 Sysmic 音乐节。",
      "music.more": "完整主页 ↗",
      "music.play": "播放",
      "music.pause": "暂停",
      "contact.lead": "欢迎开发岗位、实习与各类合作。联系我最快的方式：",
      "contact.email": "邮箱",
      "contact.phone": "电话",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "所在地",
      "contact.location.value": "Marin-Epagnier，纳沙泰尔",
      "footer.tagline": "从零搭建，部署于 GitHub Pages。",
      "footer.top": "回到顶部 ↑",
      "badge.live": "已上线",
      "badge.dev": "开发中",
      "badge.research": "研究中",
      "badge.private": "私有",
      "free.note": "免费使用，基于开源技术栈构建，无订阅、无付费墙。",
      "link.live": "在线演示 ↗",
      "link.code": "代码 ↗",
      "link.private": "私有 / 本地",
      "a11y.skip": "跳转到正文",
      "a11y.menu": "打开菜单",
      "a11y.lang": "选择语言",
      "a11y.scroll": "滚动到“关于”部分",
      "a11y.home": "Florian Sumi 主页",
      "a11y.nav": "主导航",
      "a11y.glance": "速览",
      "a11y.workExp": "工作经历",
      "a11y.education": "教育背景",
      "a11y.preview": "预览",
      "projects.caseStudy": "案例分析",
      "projects.cta": "喜欢看到的内容吗？我们一起做点东西吧。",
      "projects.cta.email": "联系我",
      "projects.cta.cv": "下载简历",
      "projects.stackNote": "构建技术（AI 辅助）："
    },
    "techSkills": [
      "JavaScript 与 Python",
      "React Native、Next.js 与 Node.js",
      "WebAssembly / Pyodide",
      "WebGL / Web Audio API",
      "pgvector / 向量搜索",
      "多智能体 AI 流水线",
      "Electron 与 Capacitor（Android）",
      "Server-Sent Events / 实时通信",
      "JWT 鉴权与 REST API",
      "渐进式 Web 应用（PWA）",
      "自动化测试",
      "WCAG 无障碍",
      "Git、GitHub、Vercel、GitHub Pages",
      "产品与 UX 设计"
    ],
    "softSkills": [
      "法语/英语母语 · 德语（学校所学）",
      "客户服务",
      "教学（TEFL）",
      "学习能力强",
      "可靠可信",
      "适应力强",
      "自我驱动",
      "解决问题"
    ],
    "experience": [
      {
        "role": "销售员 & 收银员",
        "org": "Cash n Go",
        "meta": "二手零售",
        "desc": "在一家二手商店负责一线销售与收银：为顾客提供咨询、估价并处理货品，并精准管理现金。"
      },
      {
        "role": "技术文档实习生",
        "org": "LNS, Orvin",
        "meta": "机床行业",
        "desc": "在机床领域编写并整理技术文档。"
      },
      {
        "role": "物流实习生",
        "org": "Rolex SA, 日内瓦",
        "meta": "库存与发货",
        "desc": "支持物流运营：库存管理以及包裹的准备与发货。"
      },
      {
        "role": "园林绿化实习生",
        "org": "Marco Cellerini",
        "meta": "户外 / 庭院",
        "desc": "亲力亲为的园林绿化与庭院作业。"
      }
    ],
    "education": [
      {
        "role": "社会科学硕士 · 媒体与传播",
        "org": "洛桑大学 (UNIL)",
        "meta": "进行中",
        "desc": "社会科学硕士，主攻媒体与传播方向。"
      },
      {
        "role": "社会科学学士",
        "org": "洛桑大学 (UNIL)",
        "meta": "已完成",
        "desc": "社会科学学士学位。"
      },
      {
        "role": "CS50：Python 编程入门",
        "org": "哈佛大学（在线）",
        "meta": "进行中",
        "desc": "哈佛大学的王牌计算机科学课程，目前正在学习 Python 部分。"
      },
      {
        "role": "瑞士联邦高中毕业文凭 · 经济与法律",
        "org": "Lycée Jean-Piaget，纳沙泰尔",
        "meta": "Diplôme de maturité gymnasiale",
        "desc": "以经济与法律为重点的瑞士学术高中毕业文凭。"
      },
      {
        "role": "Qualifi 五级证书 (TEFL)",
        "org": "The TEFL Academy",
        "meta": "对外英语教学",
        "desc": "对外英语教学的专业资格认证。"
      }
    ],
    "projects": [
      {
        "tag": "自托管媒体中心 · Electron + Node",
        "desc": "一个我从零亲手搭建的自托管媒体中心：Node/Express 服务器索引媒体库并通过 HTTP 范围请求流式传输（即时跳转），三个客户端共用同一套同步引擎：Electron 桌面应用、Capacitor 安卓应用，以及面向低功耗设备的轻量客户端。它包含手写的虚拟化网格，在上千条目下依然流畅（无框架）；通过 Server-Sent Events 将一位观众的播放、暂停、跳转实时镜像给好友的「一起看」房间；基于令牌的鉴权与通行密钥锁定的私密文件夹；以及通过私有网状 VPN 的远程访问。"
      },
      {
        "tag": "树莓派 5 互动课程 · PWA",
        "desc": "一本 447 页的树莓派 5 手册，重做成友好、可真正学完的课程。它内置可直接在浏览器里上手的真实手写 Linux 终端，以及可接线的 GPIO 面包板，还配有 ⌘K 搜索、词汇表、测验与徽章，以及明暗双主题。可安装、完全离线。"
      },
      {
        "tag": "AI 伙伴 · Next.js + pgvector",
        "desc": "一个全栈 AI 伙伴（Next.js、Postgres + pgvector），会形成关于你的持久、可检索的记忆，并在后台持续运转，记录私密的日记、转换心情，哪怕你已经关掉了页面。真实账户、真实持久化：一次为 AI 赋予内在世界的实验。",
        "caseStudy": {"stats": ["Next.js + pgvector", "长期记忆", "后台任务"], "body": "记忆以向量嵌入的形式存入 pgvector，并按相似度检索，因此相关的过往对话会重新出现，而不是刷新后丢失。计划任务让它在标签页关闭时继续写日记、改变心情。"}
      },
      {
        "tag": "编程学习平台 · WASM/Pyodide",
        "desc": "一所黑客终端风格的学校，教你六种语言（Python、JavaScript、TypeScript、SQL、Lua 和 Ruby），每一种都通过 WebAssembly 在浏览器里运行真实的引擎。先讲理论，再做实时评分的练习。借鉴哈佛 CS50 与 Dataquest。",
        "caseStudy": {"stats": ["6 种语言，真实引擎", "96 道练习", "在浏览器中运行"], "body": "每种语言都用编译成 WebAssembly 的真实引擎运行：Python 用 Pyodide，还有 ruby.wasm、sql.js，以及 JS、TypeScript 和 Lua。练习通过运行你写的代码并跑测试来评分，而不是选择题。参考答案在发布前都会经过 CI 验证。"}
      },
      {
        "tag": "用 AI 学开发 · PWA",
        "desc": "一个面向「通过 AI 工具入门、想更深入」人群的课程平台。结构化的学习路线带你从提示词走到部署上线的应用，配有可实时答疑的 AI 导师、进度追踪，以及一套会随工具变化而更新的课程。做它，是因为现有的学编程资源都默认你想成为一名传统工程师。"
      },
      {
        "tag": "AI Excel 生成器 · JS + Python 无服务器",
        "desc": "说出或输入你的需求，即可得到一份真实、可下载的 Excel 工作簿，含实时公式、汇总、条件格式、下拉菜单和图表。它能从照片和 PDF 中读取数据，并可作为应用安装到任意设备上。",
        "caseStudy": {"stats": ["语音或文字输入", "输出真实 .xlsx", "识别照片和 PDF"], "body": "后端的一个 Python 函数会写出真正的工作簿，带公式、条件格式和图表，然后返回 .xlsx。照片和 PDF 由视觉模型读取为表格行。"}
      },
      {
        "tag": "AI 邮件分拣 · Gmail 智能体",
        "desc": "一个 AI 智能体，每天两次为 Gmail 收件箱分拣邮件：给真正重要的邮件加星标和标签（发票、工资、税务、截止日期、安全），为需要回复的邮件起草回信但绝不发送，并能按需屏蔽吵闹的发件人。"
      },
      {
        "tag": "AI 广告生成器 · 多智能体",
        "desc": "一条多智能体流水线，把产品简报变成可直接使用的广告素材。各司其职的智能体分别撰写文案、设计场景、生成图像，每个场景在导出前都可编辑。",
        "caseStudy": {"stats": ["5 个智能体", "输入简报，输出广告", "场景可编辑"], "body": "五个智能体分别负责策略、文案、艺术指导、图像和一次审校，一个接一个传递。结果是一支完整的广告，包含带配音的动画视频，全部在浏览器中生成。"}
      },
      {
        "tag": "二手交易市场 · Node/Express 全栈",
        "desc": "一个面向瑞士的二手时尚个人交易市场（C2C），带有真实用户账户、JWT 鉴权、商品发布与消息功能。三语界面（法/德/意），以 Node/Express 全栈应用构建，前端为 PWA。开发中。"
      },
      {
        "tag": "音频响应视觉与投影 · WebGL",
        "desc": "一款基于 WebGL / Web Audio 的实时 VJ 工具，面向现场演出：十种视觉效果（五种无限缩放的“液态”分形，外加五种音频可视化）都会随任意声音律动。内置不断演变的 psytrance 生成器与自由的多形状投影映射，以桌面 Web 应用运行。",
        "caseStudy": {"stats": ["一个 HTML 文件", "零依赖", "10 个实时视觉"], "body": "十个分形和音频可视化用 GLSL 着色器编写，根据 Web Audio API 的实时频率数据做出反应。它是单个 HTML 文件，无需构建，也没有任何库。投影映射已内置，可用于现场演出。"}
      },
      {
        "tag": "AI声乐教练 · Web Audio + PWA",
        "desc": "浏览器内完整的声乐教练：实时音准调音器、评分发声练习、音高练习游戏、13张理论卡片、12周训练计划、自适应每日计划、Ableton录音棚指南、进度雷达图与成就徽章。支持离线使用，可安装为应用，并提供Android APK。"
      },
      {
        "tag": "酒吧巡游应用 · React Native / Expo",
        "desc": "一款酒吧巡游伴侣应用，覆盖瑞士的每一家酒吧，3500 多家，按州与市镇组织。用 Expo 与 React Native 构建，正迁移至 Supabase 后端。开发中。"
      },
      {
        "tag": "算法交易研究 · Python",
        "desc": "一个用 Python 写的算法纸面交易机器人与回测框架。经过诚实评估，它是一项关于策略测试与风险的研究：在数据表明没有可靠的实盘优势后，严格保持仅纸面交易。"
      }
    ]
  },
  "ja": {
    "label": "日本語",
    "ui": {
      "nav.about": "概要",
      "nav.skills": "スキル",
      "nav.experience": "経歴",
      "nav.projects": "プロジェクト",
      "nav.contact": "お問い合わせ",
      "hero.eyebrow": "フルスタック開発者・UNIL 社会科学専攻、ジュニア開発職を希望（スイスまたはリモート）",
      "hero.role": "実際に動く Web アプリを作っています。8本を公開中",
      "hero.pitch": "アイデアを人が使うソフトウェアに変えています。現在 8 本が公開中です。WebAssembly で 6 つの言語エンジンを動かすブラウザ内スクール、音声から Excel を作るツール、pgvector 記憶を持つコンパニオンアプリ、マルチエージェントの広告パイプラインなどです。いくつかは AI を、作るためだけでなく機能として使っています。フランス語と英語のネイティブ、スイスとアメリカの国籍です。",
      "hero.cta.work": "実績を見る",
      "hero.cta.cv": "CV をダウンロード",
      "hero.cta.contact": "お問い合わせ",
      "hero.stat.apps": "プロジェクト",
      "hero.stat.live": "公開中",
      "hero.stat.langs": "母語",
      "section.about": "概要",
      "section.skills": "提供できる価値",
      "section.experience": "経歴・学歴",
      "section.projects": "これまでの制作物",
      "section.contact": "ご連絡はこちら",
      "about.p1": "<strong>Florian Sumi</strong> と申します。スイスとアメリカの国籍を持ち、Neuchâtel 近郊を拠点にしています。日中は<strong>ローザンヌ大学で社会科学（メディア &amp; コミュニケーション）の修士課程</strong>に取り組み、それ以外の時間はソフトウェアを開発しています。",
      "about.p2": "ほぼ<strong>独学</strong>で、どの開発者も自分のツールを使うのと同じように、AI を作業の一部にしています。WebGL、WebAssembly、ベクトルデータベース、マルチエージェントのパイプライン、リアルタイム配信を使って製品をリリースしてきました。どれも開いてすぐ使えます。ブラウザで本物の言語エンジンを動かすプラットフォーム、pgvector 記憶を持つコンパニオンアプリ、ほかにもあります。",
      "about.p3": "私のバックグラウンドは<strong>メディア・コミュニケーション研究</strong>なので、他の開発者だけでなく、実際に使う人のためにソフトウェアを作ります。同じ姿勢は、<strong>小売・レジ・接客</strong>の現場経験や TEFL 教授資格にも表れています。覚えるのが速く、きちんとリリースします。",
      "about.fact.based.label": "拠点",
      "about.fact.based.value": "Marin-Epagnier, Neuchâtel",
      "about.fact.langs.label": "言語",
      "about.fact.langs.value": "フランス語（ネイティブ）· 英語（ネイティブ）· ドイツ語（学校教育）",
      "about.fact.study.label": "専攻",
      "about.fact.study.value": "社会科学修士（メディア＆コミュニケーション）· UNIL",
      "about.fact.also.label": "その他の活動",
      "about.fact.also.value": "音楽制作 (Ableton) · ライブパフォーマンス",
      "skills.tech.heading": "🛠️ 開発 & AI",
      "skills.people.heading": "🤝 対人 & プロフェッショナル",
      "timeline.experience": "経歴",
      "timeline.education": "学歴",
      "projects.lead": "モックアップではなく、実際に動くアプリケーション。8本が公開中で、すべて単独で開発しました。バッジは一般公開中か開発中かを示しています。",
      "projects.mission": "すべてに共通する一本の軸があります。オープンソース技術を誰もの手に届けること。本来は有料のツールを、無料で使えるようにすることです。",
      "section.music": "音楽 & ライブ",
      "nav.music": "音楽",
      "music.lead": "Ableton は独学で、音楽制作と DJ をしています。Garage Act と Atomatek という2つのプロジェクトをゼロから育て、EPFL の Sysmic フェスティバルをはじめ、スイスとフランスの有料公演やフェスに出演してきました。",
      "music.more": "プロフィールを見る ↗",
      "music.play": "再生",
      "music.pause": "一時停止",
      "contact.lead": "開発職、インターンシップ、コラボレーションを歓迎します。最も早く連絡が取れる方法はこちら：",
      "contact.email": "メール",
      "contact.phone": "電話",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "所在地",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",
      "footer.tagline": "ゼロから構築し、GitHub Pages でデプロイ。",
      "footer.top": "トップへ戻る ↑",
      "badge.live": "公開中",
      "badge.dev": "開発中",
      "badge.research": "リサーチ",
      "badge.private": "非公開",
      "free.note": "無料で使え、オープンソースのスタックで構築。サブスクや課金の壁はありません。",
      "link.live": "デモを見る ↗",
      "link.code": "コード ↗",
      "link.private": "非公開 / ローカル",
      "a11y.skip": "本文へスキップ",
      "a11y.menu": "メニューを開く",
      "a11y.lang": "言語を選択",
      "a11y.scroll": "概要セクションへスクロール",
      "a11y.home": "Florian Sumi ホーム",
      "a11y.nav": "メインナビゲーション",
      "a11y.glance": "ひと目で見る",
      "a11y.workExp": "職務経歴",
      "a11y.education": "学歴",
      "a11y.preview": "プレビュー",
      "projects.caseStudy": "ケーススタディ",
      "projects.cta": "気に入っていただけましたか？ 一緒に何かつくりましょう。",
      "projects.cta.email": "お問い合わせ",
      "projects.cta.cv": "CV をダウンロード",
      "projects.stackNote": "使用技術（AI 支援）："
    },
    "techSkills": [
      "JavaScript と Python",
      "React Native・Next.js・Node.js",
      "WebAssembly / Pyodide",
      "WebGL / Web Audio API",
      "pgvector / ベクトル検索",
      "マルチエージェント AI パイプライン",
      "Electron と Capacitor（Android）",
      "Server-Sent Events / リアルタイム",
      "JWT 認証と REST API",
      "プログレッシブウェブアプリ (PWA)",
      "自動テスト",
      "WCAG アクセシビリティ",
      "Git・GitHub・Vercel・GitHub Pages",
      "プロダクト＆UX デザイン"
    ],
    "softSkills": [
      "FR / EN ネイティブ · DE（学校）",
      "カスタマーサービス",
      "英語教授 (TEFL)",
      "習得が早い",
      "誠実で信頼できる",
      "適応力がある",
      "自律的に動ける",
      "問題解決"
    ],
    "experience": [
      {
        "role": "販売員＆レジ係",
        "org": "Cash n Go",
        "meta": "中古品小売",
        "desc": "中古品店での接客販売とレジ業務：お客様への提案、在庫の査定と取り扱い、正確な現金管理を担当しました。"
      },
      {
        "role": "技術文書インターン",
        "org": "LNS, Orvin",
        "meta": "工作機械業界",
        "desc": "工作機械分野における技術文書の作成と体系化を行いました。"
      },
      {
        "role": "物流インターン",
        "org": "Rolex SA, Geneva",
        "meta": "在庫管理・出荷",
        "desc": "物流業務をサポートし、在庫管理、荷物の梱包と発送を担当しました。"
      },
      {
        "role": "造園インターン",
        "org": "Marco Cellerini",
        "meta": "屋外・敷地管理",
        "desc": "造園および敷地管理の実地作業に従事しました。"
      }
    ],
    "education": [
      {
        "role": "社会科学修士 · メディア＆コミュニケーション",
        "org": "ローザンヌ大学 (UNIL)",
        "meta": "在学中",
        "desc": "社会科学の修士課程で、メディアとコミュニケーションを専攻しています。"
      },
      {
        "role": "社会科学学士",
        "org": "ローザンヌ大学 (UNIL)",
        "meta": "修了",
        "desc": "社会科学の学士号を取得しました。"
      },
      {
        "role": "CS50: Python によるプログラミング入門",
        "org": "ハーバード大学 (オンライン)",
        "meta": "受講中",
        "desc": "ハーバード大学を代表するコンピューターサイエンス入門講座。現在 Python トラックを学習中です。"
      },
      {
        "role": "スイス連邦大学入学資格 · 経済＆法律",
        "org": "Lycée Jean-Piaget, Neuchâtel",
        "meta": "Diplôme de maturité gymnasiale",
        "desc": "経済と法律を重点としたスイスの大学入学資格（マチュリテ）を取得しました。"
      },
      {
        "role": "Qualifi Level 5 認定 (TEFL)",
        "org": "The TEFL Academy",
        "meta": "外国語としての英語教授資格",
        "desc": "外国語としての英語を教えるためのプロフェッショナル資格です。"
      }
    ],
    "projects": [
      {
        "tag": "セルフホスト型メディアセンター · Electron + Node",
        "desc": "ゼロから構築したセルフホスト型のメディアセンター：ライブラリを索引化し HTTP レンジリクエストでストリーミング（瞬時のシーク）する Node/Express サーバーと、同一の同期エンジンを共有する 3 つのクライアント（Electron デスクトップ、Capacitor の Android アプリ、低スペック機器向けの軽量クライアント）で構成。見どころ：数千件でも滑らかに動く自作の仮想化グリッド（フレームワーク不使用）、Server-Sent Events で視聴者の再生／一時停止／シークを友人にリアルタイムで反映する「一緒に観る」ルーム、トークン認証とパスキーで施錠した非公開フォルダ、プライベートなメッシュ VPN による遠隔アクセス。"
      },
      {
        "tag": "インタラクティブ Pi 5 講座 · PWA",
        "desc": "447 ページの Raspberry Pi 5 ハンドブックを、最後までやり切れる親しみやすい講座に再構築。ブラウザ内で実際に動く手作りの Linux ターミナルと、配線できる GPIO ブレッドボードをその場で試せます。⌘K 検索、生きた用語集、クイズとバッジ、ライト／ダークの2テーマを搭載。インストール可能で完全オフライン対応。"
      },
      {
        "tag": "AI コンパニオン · Next.js + pgvector",
        "desc": "あなたについての確かで検索可能な記憶を築き、バックグラウンドのジョブを動かし続けるフルスタックの AI コンパニオン（Next.js、Postgres + pgvector）。タブを閉じた後も、内省を日記に綴り、気分を移ろわせます。実際のアカウントと本物の永続性を備えた、AI に内面を与える実験です。",
        "caseStudy": {"stats": ["Next.js + pgvector", "長期記憶", "バックグラウンド処理"], "body": "記憶は埋め込みとして pgvector に保存し類似度で検索するため、関連する過去の会話が再読み込みで消えずに戻ってきます。スケジュールされた処理が、タブを閉じている間も日記を書き気分を変え続けます。"}
      },
      {
        "tag": "コード学習プラットフォーム · WASM/Pyodide",
        "desc": "ハッカー端末風のデザインで、6つの言語（Python、JavaScript、TypeScript、SQL、Lua、Ruby）を教えるスクール。各言語が WebAssembly でブラウザ内に本物のエンジンを動かします。まず理論、続いてライブ採点される演習へ。ハーバードの CS50 と Dataquest をモデルにしています。",
        "caseStudy": {"stats": ["6 言語、実エンジン", "96 の演習", "ブラウザで動作"], "body": "各言語は WebAssembly にコンパイルした実エンジンで動きます。Python は Pyodide、ほかに ruby.wasm、sql.js、JS、TypeScript、Lua。演習は書いたコードをテストで実行して採点し、選択式ではありません。模範解答は公開前に CI で検証されます。"}
      },
      {
        "tag": "AI で開発を学ぶ · PWA",
        "desc": "AI ツールでコーディングに入り、さらに深く学びたい人のための講座プラットフォーム。体系化されたトラックがプロンプトからデプロイ済みアプリまで導き、その場で質問に答えるライブ AI メンター、進捗トラッキング、そして変化するツールに合わせて更新され続けるカリキュラムを備えています。既存の学習教材がどれも「従来型のエンジニアになりたい」前提なので作りました。"
      },
      {
        "tag": "AI Excel ジェネレーター · JS + Python サーバーレス",
        "desc": "必要な内容を話すか入力するだけで、ダウンロード可能な本物の Excel ブックが手に入ります。動く数式、合計、条件付き書式、ドロップダウン、グラフ付き。写真や PDF からデータを読み取り、どんなデバイスにもアプリとしてインストールできます。",
        "caseStudy": {"stats": ["音声かテキストで入力", "本物の .xlsx を出力", "写真と PDF を読む"], "body": "バックエンドの Python 関数が数式・条件付き書式・グラフ付きの本物のワークブックを書き出し、.xlsx を返します。写真や PDF はビジョンモデルが行として読み取ります。"}
      },
      {
        "tag": "AI メールトリアージ · Gmail エージェント",
        "desc": "Gmail の受信トレイを1日2回トリアージする AI エージェント。重要なメール（請求書、給与、税金、締め切り、セキュリティ）にスターとラベルを付け、返信が必要なものは下書きを作成し（送信は一切しません）、要望に応じて迷惑な送信者をブロックします。"
      },
      {
        "tag": "AI 広告ジェネレーター · マルチエージェント",
        "desc": "製品ブリーフを、すぐ使える広告クリエイティブに変えるマルチエージェントのパイプライン。専門のエージェントがコピーを書き、シーンをデザインし、画像を生成します。各シーンは書き出し前に編集できます。",
        "caseStudy": {"stats": ["5 つのエージェント", "ブリーフを入れて広告を出力", "シーンを編集可能"], "body": "5 つのエージェントが戦略・コピー・アートディレクション・画像・レビューを担当し、順に受け渡します。出力はナレーション付きアニメ動画を含む完成版キャンペーンで、ブラウザ内で生成されます。"}
      },
      {
        "tag": "リセールマーケットプレイス · Node/Express フルスタック",
        "desc": "スイス向けの個人間（C2C）中古ファッション・マーケットプレイス。実際のユーザーアカウント、JWT 認証、出品、メッセージング機能を備えています。3か国語対応 (FR / DE / IT) で、PWA フロントエンドを持つ Node/Express のフルスタックアプリとして構築。現在開発中。"
      },
      {
        "tag": "オーディオ反応ビジュアル＆プロジェクション · WebGL",
        "desc": "WebGL／Web Audio によるライブ向けリアルタイム VJ ツール。10種類のビジュアル（無限ズームする5つの『液体』フラクタルと5つのオーディオビジュアライザー）があらゆる音に反応します。進化する内蔵サイケトランスジェネレーターと自由な複数シェイプのプロジェクションマッピングを備え、デスクトップのウェブアプリとして動作します。",
        "caseStudy": {"stats": ["HTML 1 ファイル", "依存なし", "10 個のライブビジュアル"], "body": "10 個のフラクタルと音声ビジュアライザーを GLSL シェーダーで書き、Web Audio API のリアルタイム周波数データに反応します。ビルド不要・ライブラリ不要の HTML 1 ファイルです。投影マッピングをライブ用に内蔵しています。"}
      },
      {
        "tag": "AI歌声コーチ · Web Audio + PWA",
        "desc": "ブラウザ完結の歌声コーチ：リアルタイムピッチチューナー、採点付き発声練習、音程練習ゲーム、13枚の理論カード、12週間トレーニングプログラム、アダプティブ日次プラン、Abletonスタジオガイド、進捗レーダーチャート、アチーブメントバッジ。オフライン対応、アプリとしてインストール可能、Android APKも提供。"
      },
      {
        "tag": "バー巡りアプリ · React Native / Expo",
        "desc": "スイス全土のすべてのバー、3,500軒以上を州とコミューン別に整理して網羅したバー巡りのお供アプリ。Expo と React Native で構築し、現在 Supabase バックエンドへ移行中。開発中です。"
      },
      {
        "tag": "アルゴリズム取引リサーチ · Python",
        "desc": "Python によるアルゴリズム・ペーパートレーディングのボットとバックテスト基盤。戦略検証とリスクの研究として誠実に評価し、データが確かなライブでの優位性を示さなかったため、厳密にペーパー取引のみに留めています。"
      }
    ]
  }
};

if (typeof window !== "undefined") { window.PROJECTS_BASE = PROJECTS_BASE; window.CONTENT = CONTENT; }
