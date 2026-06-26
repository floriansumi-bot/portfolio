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
        "desc": "A self-hosted media centre I built top to bottom. A Node/Express server indexes the library and streams it with HTTP range requests, so seeking is instant, and three clients run off a single sync engine: Electron on the desktop, a Capacitor app on Android, and a lighter one for low-power devices. The grid is hand-built and virtualised, so thousands of items still scroll smoothly with no framework behind them. It also does watch-together rooms that mirror one person's play, pause and seek to a friend over Server-Sent Events, token auth with passkey-locked private folders, and remote access over a private mesh VPN."
      },
      {
        "tag": "Interactive Pi 5 course · PWA",
        "desc": "A 447-page Raspberry Pi 5 handbook turned into a course you can actually get through. There's a real hand-written Linux terminal and a wireable GPIO breadboard you can poke at right in the browser, plus ⌘K search, a glossary, quizzes and badges, and light and dark themes. It installs like an app and works fully offline."
      },
      {
        "tag": "AI companion · Next.js + pgvector",
        "desc": "A full-stack AI companion (Next.js, Postgres and pgvector) that builds up lasting, searchable memories of you and keeps working in the background, writing private reflections and shifting its mood even after you've closed the tab. Real accounts, real persistence. Mostly it's an experiment in giving an AI something like an inner life.",
        "caseStudy": {"stats": ["Next.js + pgvector", "Long-term memory", "Background jobs"], "body": "It stores memories as embeddings in pgvector and pulls them back by similarity, so the conversations that matter resurface instead of vanishing on a reload. Background jobs keep it going while you're away, writing little journal entries and drifting through moods even with the tab closed."}
      },
      {
        "tag": "Learn-to-code platform · WASM/Pyodide",
        "desc": "A hacker-terminal code school that teaches six languages, Python, JavaScript, TypeScript, SQL, Lua and Ruby, each one running a real engine in the browser through WebAssembly. Theory first, then exercises that grade your code as you go. It's modelled on Harvard's CS50 and Dataquest.",
        "caseStudy": {"stats": ["6 languages, real engines", "96 exercises", "Runs in the browser"], "body": "Every language runs on a real engine compiled to WebAssembly. Python uses Pyodide, and there's ruby.wasm and sql.js alongside JS, TypeScript and Lua. Do an exercise and it grades the actual code you wrote by running it against tests, no multiple choice. Every solution gets checked in CI first, so nothing ships broken."}
      },
      {
        "tag": "Learn to build with AI · PWA",
        "desc": "A course platform for people who got into coding through AI tools and want to go deeper. The tracks walk you from a prompt all the way to a deployed app, with a live AI mentor answering questions as you go, progress tracking, and a curriculum that keeps up as the tools change. I built it because every other learn-to-code resource assumes you want to be a traditional engineer."
      },
      {
        "tag": "AI Excel generator · JS + Python serverless",
        "desc": "Say or type what you need and it hands back a real, downloadable Excel workbook, live formulas, totals, conditional formatting, dropdowns, charts. It'll even read the data straight off a photo or a PDF, and it installs as an app on any device.",
        "caseStudy": {"stats": ["Voice or text in", "Real .xlsx out", "Reads photos and PDFs"], "body": "On the backend a Python function builds an actual workbook, formulas, conditional formatting, charts and all, then hands you back the .xlsx. Snap a photo of a receipt or drop in a PDF and a vision model turns it into rows."}
      },
      {
        "tag": "AI email triage · Gmail agent",
        "desc": "An AI agent that goes through a Gmail inbox twice a day. It stars and labels the mail that actually matters (invoices, payroll, tax, deadlines, security), drafts the replies that need one without ever hitting send, and blocks noisy senders when you ask."
      },
      {
        "tag": "AI ad generator · Multi-agent",
        "desc": "A multi-agent pipeline that turns a product brief into ad creatives you can use. Specialised agents handle the copy, the scenes and the imagery, and every scene stays editable right up to export.",
        "caseStudy": {"stats": ["5 agents", "Brief in, campaign out", "Editable scenes"], "body": "Five agents split the work: strategy, copy, art direction, imagery, and a final review, each one handing off to the next. What comes out is a whole campaign, down to an animated video with voiceover, and it all happens in the browser."}
      },
      {
        "tag": "Resale marketplace · Node/Express full-stack",
        "desc": "A peer-to-peer marketplace for buying and selling second-hand fashion in Switzerland, with real accounts, JWT auth, listings and messaging. It's trilingual (FR, DE, IT), built as a Node/Express full-stack app with a PWA front end. Still in development."
      },
      {
        "tag": "Audio-reactive visuals & projection · WebGL",
        "desc": "A real-time WebGL and Web Audio VJ tool for live shows. Ten visuals, five infinite-zoom 'liquid' fractals and five audio visualizers, all reacting to whatever's playing. There's a built-in psytrance generator that keeps evolving and free-form projection mapping, and it runs as a desktop web app.",
        "caseStudy": {"stats": ["One HTML file", "No dependencies", "10 live visuals"], "body": "Ten fractals and audio visualisers, all GLSL shaders reacting to live frequency data from the Web Audio API. The whole thing is a single HTML file, no build step, no libraries. Projection mapping is baked in for real shows."}
      },
      {
        "tag": "AI singing coach · Web Audio + PWA",
        "desc": "A full singing coach that lives in the browser: real-time pitch tuner, scored warm-ups, a pitch practice game, 13 theory cards, a 12-week programme, daily plans, an Ableton studio guide, a progress radar and achievement badges. It runs offline, installs as an app, and ships as an Android APK."
      },
      {
        "tag": "Bar-crawl app · React Native / Expo",
        "desc": "Find bars by canton, browse by commune, filter by type, and tick off your crawl as you go. It's a pocket guide to the Swiss bar scene, 3,500-plus venues, built with Expo and React Native on a Supabase backend. Still in development."
      },
      {
        "tag": "Algo trading research · Python",
        "desc": "An algorithmic paper-trading bot and back-testing harness in Python. I treated it as an honest study in strategy testing and risk, and kept it strictly paper-only once the data showed there was no reliable edge live."
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
      "hero.pitch": "J'aime prendre une idée et en faire quelque chose qu'on peut vraiment ouvrir et utiliser. J'en ai huit en ligne en ce moment : une école dans le navigateur qui fait tourner six vrais moteurs de langages via WebAssembly, un outil qui transforme une phrase dictée en fichier Excel fini, une appli compagnon qui se souvient de vous, un studio de pub géré par une petite équipe d'agents IA. Beaucoup ne sont pas juste construits avec l'IA : ils s'en servent comme d'une fonctionnalité. Le français et l'anglais sont mes deux langues maternelles, et je suis suisse et américain.",
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
      "about.p1": "Je suis <strong>Florian Sumi</strong>. Suisse et américain, j'habite juste à côté de Neuchâtel. La plus grande partie de ma semaine passe dans un <strong>Master en sciences sociales (Médias &amp; Communication) à l'Université de Lausanne</strong>, et le reste passe à développer.",
      "about.p2": "Je suis surtout <strong>autodidacte</strong>. Aujourd'hui l'IA fait simplement partie de ma façon de travailler, comme n'importe quel développeur s'appuie sur ses outils, et ça me permet de beaucoup livrer. J'ai construit des choses avec WebGL, WebAssembly, des bases de données vectorielles, des pipelines multi-agents, du streaming en temps réel. Rien de tout ça n'est de la déco : chaque projet s'ouvre et s'utilise. L'un fait tourner de vrais moteurs de langages directement dans le navigateur. Un autre garde une mémoire de vous dans un store pgvector et reprend là où vous en étiez.",
      "about.p3": "Je viens de la <strong>recherche en médias et communication</strong>, et c'est sans doute pour ça que je construis pour la personne qui va se servir de l'outil, pas juste pour d'autres développeurs. Le même réflexe vient d'années de <strong>vente, gestion de caisse et service client</strong>, plus un diplôme d'enseignement TEFL. J'apprends vite, et je finis ce que je commence.",
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
      "projects.lead": "De vraies applis, pas des maquettes. Huit sont en ligne, et je les ai toutes construites moi-même. Les badges vous disent ce qui est en ligne et ce qui est encore en chantier.",
      "projects.mission": "Il y a un fil rouge dans tout ça : prendre le genre d'outils pour lesquels les gens paient d'habitude et les rendre gratuits, bâtis sur de l'open source et à la portée de tous.",
      "section.music": "Musique & sets live",
      "nav.music": "Musique",
      "music.lead": "J'ai appris Ableton tout seul, je produis et je mixe. Deux projets, Garage Act et Atomatek, sont partis de rien et ont atteint des scènes et des festivals payants en Suisse et en France, dont le festival Sysmic de l'EPFL.",
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
        "desc": "Un media center auto-hébergé que j'ai construit de A à Z. Un serveur Node/Express indexe la bibliothèque et la diffuse avec des requêtes HTTP par plage, donc le défilement dans la vidéo est instantané, et trois clients tournent sur un seul moteur de synchro : Electron sur le bureau, une appli Capacitor sur Android, et une version plus légère pour les appareils peu puissants. La grille est faite main et virtualisée, donc des milliers d'éléments défilent sans accroc, sans aucun framework derrière. Il fait aussi des salles de visionnage commun qui répliquent la lecture, la pause et le défilement d'une personne vers un ami via Server-Sent Events, de l'authentification par token avec des dossiers privés verrouillés par passkey, et de l'accès à distance via un VPN mesh privé."
      },
      {
        "tag": "Cours interactif Pi 5 · PWA",
        "desc": "Un manuel de 447 pages sur le Raspberry Pi 5 transformé en un cours qu'on peut vraiment finir. Il y a un vrai terminal Linux écrit à la main et une breadboard GPIO câblable qu'on peut bidouiller directement dans le navigateur, plus une recherche ⌘K, un glossaire, des quiz et des badges, et des thèmes clair et sombre. Il s'installe comme une appli et fonctionne entièrement hors ligne."
      },
      {
        "tag": "Compagnon IA · Next.js + pgvector",
        "desc": "Un compagnon IA full-stack (Next.js, Postgres et pgvector) qui se construit des souvenirs durables et consultables sur vous et continue de tourner en arrière-plan, écrivant des réflexions privées et changeant d'humeur même une fois l'onglet fermé. De vrais comptes, une vraie persistance. C'est avant tout une expérience : donner à une IA quelque chose qui ressemble à une vie intérieure.",
        "caseStudy": {"stats": ["Next.js + pgvector", "Mémoire à long terme", "Tâches en arrière-plan"], "body": "Il stocke les souvenirs sous forme d'embeddings dans pgvector et les rappelle par similarité, donc les conversations qui comptent ressurgissent au lieu de disparaître à chaque rechargement. Des tâches de fond le font vivre pendant votre absence : il écrit de petites pages de journal et traverse des humeurs, même l'onglet fermé."}
      },
      {
        "tag": "Plateforme d’apprentissage du code · WASM/Pyodide",
        "desc": "Une école de code en mode terminal de hacker qui enseigne six langages, Python, JavaScript, TypeScript, SQL, Lua et Ruby, chacun faisant tourner un vrai moteur dans le navigateur via WebAssembly. La théorie d'abord, puis des exercices qui corrigent votre code au fur et à mesure. Il s'inspire du CS50 de Harvard et de Dataquest.",
        "caseStudy": {"stats": ["6 langages, vrais moteurs", "96 exercices", "Tourne dans le navigateur"], "body": "Chaque langage tourne sur un vrai moteur compilé en WebAssembly. Python utilise Pyodide, et il y a ruby.wasm et sql.js aux côtés de JS, TypeScript et Lua. Faites un exercice et il corrige le vrai code que vous avez écrit en le confrontant à des tests, aucun QCM. Chaque solution est d'abord vérifiée en CI, donc rien ne part cassé."}
      },
      {
        "tag": "Apprendre à créer avec l’IA · PWA",
        "desc": "Une plateforme de cours pour ceux qui sont venus au code par les outils d'IA et veulent aller plus loin. Les parcours vous mènent du prompt jusqu'à une appli déployée, avec un mentor IA en direct qui répond à vos questions au passage, un suivi de progression, et un programme qui évolue à mesure que les outils changent. Je l'ai construit parce que toutes les autres ressources pour apprendre à coder partent du principe que vous voulez devenir un ingénieur classique."
      },
      {
        "tag": "Générateur Excel par IA · JS + Python serverless",
        "desc": "Dites ou tapez ce dont vous avez besoin et il vous rend un vrai classeur Excel téléchargeable, formules en direct, totaux, mise en forme conditionnelle, listes déroulantes, graphiques. Il lit même les données directement depuis une photo ou un PDF, et il s'installe comme une appli sur n'importe quel appareil.",
        "caseStudy": {"stats": ["Voix ou texte en entrée", "Vrai .xlsx en sortie", "Lit photos et PDF"], "body": "Côté backend, une fonction Python construit un vrai classeur, formules, mise en forme conditionnelle, graphiques et tout le reste, puis vous rend le fichier .xlsx. Prenez en photo un reçu ou déposez un PDF, et un modèle de vision le transforme en lignes."}
      },
      {
        "tag": "Triage des e-mails par IA · Agent Gmail",
        "desc": "Un agent IA qui parcourt une boîte Gmail deux fois par jour. Il met une étoile et un libellé sur les mails qui comptent vraiment (factures, salaires, impôts, échéances, sécurité), rédige les réponses qui en valent la peine sans jamais cliquer sur envoyer, et bloque les expéditeurs envahissants quand vous le demandez."
      },
      {
        "tag": "Générateur de publicités par IA · Multi-agents",
        "desc": "Un pipeline multi-agents qui transforme un brief produit en visuels publicitaires utilisables. Des agents spécialisés gèrent la rédaction, les scènes et les images, et chaque scène reste modifiable jusqu'à l'export.",
        "caseStudy": {"stats": ["5 agents", "Brief en entrée, campagne en sortie", "Scènes éditables"], "body": "Cinq agents se partagent le travail : stratégie, rédaction, direction artistique, images et une relecture finale, chacun passant la main au suivant. Ce qui en sort, c'est une campagne complète, jusqu'à une vidéo animée avec voix off, et tout se passe dans le navigateur."}
      },
      {
        "tag": "Marketplace de seconde main · Full-stack Node/Express",
        "desc": "Une place de marché entre particuliers pour acheter et vendre de la mode d'occasion en Suisse, avec de vrais comptes, de l'authentification JWT, des annonces et de la messagerie. Elle est trilingue (FR, DE, IT), bâtie comme une appli full-stack Node/Express avec un front PWA. Encore en développement."
      },
      {
        "tag": "Visuels audio-réactifs & projection · WebGL",
        "desc": "Un outil VJ WebGL et Web Audio en temps réel pour les shows en live. Dix visuels, cinq fractales « liquides » à zoom infini et cinq visualiseurs audio, tous réagissant à ce qui passe. Il y a un générateur de psytrance intégré qui évolue sans cesse et du mapping vidéo en roue libre, et il tourne comme une appli web de bureau.",
        "caseStudy": {"stats": ["Un fichier HTML", "Aucune dépendance", "10 visuels en direct"], "body": "Dix fractales et visualiseurs audio, tous des shaders GLSL qui réagissent aux données de fréquence en direct de la Web Audio API. Le tout tient dans un seul fichier HTML, sans étape de build, sans librairies. Le mapping vidéo est intégré pour les vrais shows."}
      },
      {
        "tag": "Coach chant IA · Web Audio + PWA",
        "desc": "Un vrai coach de chant qui vit dans le navigateur : accordeur de hauteur en temps réel, échauffements notés, un jeu d'entraînement à la justesse, 13 fiches de théorie, un programme de 12 semaines, des plans quotidiens, un guide studio Ableton, un radar de progression et des badges de réussite. Il tourne hors ligne, s'installe comme une appli, et se livre en APK Android."
      },
      {
        "tag": "Appli de tournée des bars · React Native / Expo",
        "desc": "Trouvez des bars par canton, parcourez par commune, filtrez par type, et cochez votre tournée au fur et à mesure. C'est un guide de poche de la scène des bars suisses, plus de 3 500 adresses, construit avec Expo et React Native sur un backend Supabase. Encore en développement."
      },
      {
        "tag": "Recherche en trading algorithmique · Python",
        "desc": "Un bot de paper trading algorithmique et un banc de back-testing en Python. Je l'ai traité comme une étude honnête du test de stratégies et du risque, et je l'ai gardé strictement en paper une fois que les données ont montré qu'il n'y avait pas d'avantage fiable en réel."
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
      "hero.pitch": "Ich nehme am liebsten eine Idee und mache etwas daraus, das man wirklich öffnen und benutzen kann. Acht davon sind gerade online: eine Schule im Browser, in der sechs echte Sprach-Engines über WebAssembly laufen, ein Tool, das aus einem gesprochenen Satz eine fertige Excel-Datei macht, eine Begleit-App, die sich an Sie erinnert, ein Werbestudio, das ein kleines Team aus KI-Agenten betreibt. Bei vielen ist KI nicht nur beim Bauen dabei, sondern selbst Teil der Funktion. Französisch und Englisch sind beide meine Muttersprache, und ich bin Schweizer und Amerikaner.",
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
      "about.p1": "Ich bin <strong>Florian Sumi</strong>. Schweizer und Amerikaner, wohnhaft gleich ausserhalb von Neuenburg. Der grösste Teil meiner Woche geht für einen <strong>Master in Sozialwissenschaften (Medien &amp; Kommunikation) an der Universität Lausanne</strong> drauf, der Rest fürs Entwickeln von Software.",
      "about.p2": "Ich bin grösstenteils <strong>Autodidakt</strong>. KI gehört heute einfach zu meiner Arbeitsweise, genauso wie jeder Entwickler sich auf seine Werkzeuge stützt, und damit bringe ich eine Menge auf die Strasse. Ich habe Dinge mit WebGL, WebAssembly, Vektordatenbanken, Multi-Agent-Pipelines und Echtzeit-Streaming gebaut. Nichts davon ist nur Schaufenster: Sie können jedes Projekt öffnen und benutzen. Eines lässt echte Sprach-Engines direkt im Browser laufen. Ein anderes behält Sie in einem pgvector-Speicher im Gedächtnis und macht da weiter, wo Sie aufgehört haben.",
      "about.p3": "Mein Hintergrund liegt in der <strong>Medien- und Kommunikationsforschung</strong>, und vermutlich baue ich genau deshalb für die Person, die das Ding am Ende wirklich benutzt, und nicht bloss für andere Entwickler. Dasselbe Gespür kommt aus Jahren in <strong>Einzelhandel, Kassenführung und Kundenservice</strong> sowie einer TEFL-Lehrqualifikation. Ich lerne schnell, und was ich anfange, bringe ich auch zu Ende.",
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
      "projects.lead": "Echte Apps, keine Mockups. Acht sind live, und jede einzelne habe ich selbst gebaut. Die Badges zeigen Ihnen, was online ist und was noch in Arbeit steckt.",
      "projects.mission": "Ein Gedanke zieht sich durch alles: die Art von Werkzeugen, für die man normalerweise zahlt, kostenlos zu machen, auf Open Source aufgebaut und für jeden erreichbar.",
      "section.music": "Musik & Live-Sets",
      "nav.music": "Musik",
      "music.lead": "Ableton habe ich mir selbst beigebracht, ich produziere und lege auf. Zwei Projekte, Garage Act und Atomatek, sind aus dem Nichts entstanden und haben es auf bezahlte Bühnen und Festivals in der ganzen Schweiz und in Frankreich geschafft, darunter das Sysmic-Festival der EPFL.",
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
        "desc": "Ein selbst gehostetes Medienzentrum, das ich von oben bis unten gebaut habe. Ein Node/Express-Server indexiert die Bibliothek und streamt sie über HTTP-Range-Requests, sodass das Spulen sofort sitzt, und drei Clients laufen über eine einzige Sync-Engine: Electron auf dem Desktop, eine Capacitor-App auf Android und eine leichtere Variante für schwächere Geräte. Das Raster ist handgebaut und virtualisiert, sodass Tausende von Einträgen ohne Framework im Hintergrund flüssig scrollen. Dazu kommen Watch-together-Räume, die Play, Pause und Spulen einer Person über Server-Sent Events an einen Freund spiegeln, Token-Auth mit per Passkey gesperrten privaten Ordnern und Fernzugriff über ein privates Mesh-VPN."
      },
      {
        "tag": "Interaktiver Pi-5-Kurs · PWA",
        "desc": "Ein 447-seitiges Handbuch zum Raspberry Pi 5, verwandelt in einen Kurs, den man tatsächlich durchziehen kann. Es gibt ein echtes, von Hand geschriebenes Linux-Terminal und ein verdrahtbares GPIO-Steckbrett, an dem Sie direkt im Browser herumprobieren können, dazu ⌘K-Suche, ein Glossar, Quizze und Badges sowie helle und dunkle Themes. Es installiert sich wie eine App und funktioniert vollständig offline."
      },
      {
        "tag": "KI-Begleiter · Next.js + pgvector",
        "desc": "Eine Full-Stack-KI-Begleitung (Next.js, Postgres und pgvector), die sich bleibende, durchsuchbare Erinnerungen an Sie aufbaut und im Hintergrund weiterarbeitet, private Gedanken notiert und ihre Stimmung verschiebt, auch nachdem Sie den Tab geschlossen haben. Echte Konten, echte Persistenz. In erster Linie ist es ein Experiment, einer KI so etwas wie ein Innenleben zu geben.",
        "caseStudy": {"stats": ["Next.js + pgvector", "Langzeitgedächtnis", "Hintergrund-Jobs"], "body": "Erinnerungen werden als Embeddings in pgvector abgelegt und über Ähnlichkeit wieder hervorgeholt, sodass die Gespräche, auf die es ankommt, wieder auftauchen, statt beim Neuladen zu verschwinden. Hintergrundjobs halten alles am Laufen, während Sie weg sind, schreiben kleine Tagebucheinträge und lassen die Stimmung wandern, selbst bei geschlossenem Tab."}
      },
      {
        "tag": "Plattform zum Programmierenlernen · WASM/Pyodide",
        "desc": "Eine Code-Schule im Hacker-Terminal-Look, die sechs Sprachen vermittelt, Python, JavaScript, TypeScript, SQL, Lua und Ruby, jede mit einer echten Engine im Browser über WebAssembly. Erst die Theorie, dann Aufgaben, die Ihren Code unterwegs bewerten. Vorbild sind Harvards CS50 und Dataquest.",
        "caseStudy": {"stats": ["6 Sprachen, echte Engines", "96 Übungen", "Läuft im Browser"], "body": "Jede Sprache läuft auf einer echten Engine, die nach WebAssembly kompiliert ist. Python nutzt Pyodide, dazu kommen ruby.wasm und sql.js neben JS, TypeScript und Lua. Lösen Sie eine Aufgabe, wird der Code, den Sie tatsächlich geschrieben haben, gegen Tests ausgeführt und bewertet, kein Multiple Choice. Jede Lösung wird zuerst in CI geprüft, damit nichts kaputt ausgeliefert wird."}
      },
      {
        "tag": "Mit KI bauen lernen · PWA",
        "desc": "Eine Kursplattform für Leute, die über KI-Tools zum Programmieren gekommen sind und tiefer einsteigen wollen. Die Tracks begleiten Sie vom Prompt bis zur fertig deployten App, mit einem KI-Mentor, der unterwegs in Echtzeit Fragen beantwortet, einem Fortschritts-Tracking und einem Lehrplan, der mithält, wenn sich die Tools verändern. Ich habe sie gebaut, weil jede andere Lern-Ressource fürs Programmieren davon ausgeht, dass man klassischer Ingenieur werden möchte."
      },
      {
        "tag": "KI-Excel-Generator · JS + Python serverless",
        "desc": "Sagen oder tippen Sie, was Sie brauchen, und Sie bekommen eine echte, herunterladbare Excel-Arbeitsmappe zurück, mit lebenden Formeln, Summen, bedingter Formatierung, Dropdowns und Diagrammen. Sie liest die Daten sogar direkt von einem Foto oder einem PDF ab und installiert sich als App auf jedem Gerät.",
        "caseStudy": {"stats": ["Sprache oder Text rein", "Echtes .xlsx raus", "Liest Fotos und PDFs"], "body": "Im Backend baut eine Python-Funktion eine echte Arbeitsmappe, mit Formeln, bedingter Formatierung, Diagrammen und allem Drum und Dran, und gibt Ihnen die .xlsx zurück. Knipsen Sie einen Beleg ab oder werfen Sie ein PDF hinein, und ein Vision-Modell macht Zeilen daraus."}
      },
      {
        "tag": "KI-E-Mail-Triage · Gmail-Agent",
        "desc": "Ein KI-Agent, der zweimal am Tag einen Gmail-Posteingang durchgeht. Er markiert und beschriftet die Mails, auf die es wirklich ankommt (Rechnungen, Lohn, Steuern, Fristen, Sicherheit), entwirft die Antworten, die eine brauchen, ohne je auf Senden zu drücken, und blockiert nervige Absender, wenn Sie es möchten."
      },
      {
        "tag": "KI-Werbegenerator · Multi-Agent",
        "desc": "Eine Multi-Agent-Pipeline, die aus einem Produkt-Briefing brauchbare Werbe-Creatives macht. Spezialisierte Agenten kümmern sich um Text, Szenen und Bildwelt, und jede Szene bleibt bis zum Export bearbeitbar.",
        "caseStudy": {"stats": ["5 Agenten", "Brief rein, Kampagne raus", "Editierbare Szenen"], "body": "Fünf Agenten teilen sich die Arbeit: Strategie, Text, Art Direction, Bildwelt und zum Schluss eine Abnahme, jeder übergibt an den nächsten. Heraus kommt eine ganze Kampagne, bis hin zu einem animierten Video mit Voiceover, und das alles passiert im Browser."}
      },
      {
        "tag": "Second-Hand-Marktplatz · Node/Express Full-Stack",
        "desc": "Ein Peer-to-Peer-Marktplatz zum Kaufen und Verkaufen von Secondhand-Mode in der Schweiz, mit echten Konten, JWT-Auth, Inseraten und Nachrichten. Er ist dreisprachig (FR, DE, IT) und als Node/Express-Full-Stack-App mit einem PWA-Frontend gebaut. Noch in Entwicklung."
      },
      {
        "tag": "Audioreaktive Visuals & Projektion · WebGL",
        "desc": "Ein Echtzeit-VJ-Tool mit WebGL und Web Audio für Live-Shows. Zehn Visuals, fünf unendlich zoomende «flüssige» Fraktale und fünf Audiovisualizer, die alle auf das reagieren, was gerade läuft. Eingebaut sind ein Psytrance-Generator, der sich ständig weiterentwickelt, und freies Projection Mapping, und es läuft als Desktop-Web-App.",
        "caseStudy": {"stats": ["Eine HTML-Datei", "Keine Abhängigkeiten", "10 Live-Visuals"], "body": "Zehn Fraktale und Audiovisualizer, allesamt GLSL-Shader, die auf Live-Frequenzdaten aus der Web Audio API reagieren. Das Ganze ist eine einzige HTML-Datei, kein Build-Schritt, keine Bibliotheken. Projection Mapping ist für echte Shows gleich mit eingebaut."}
      },
      {
        "tag": "KI-Gesangscoach · Web Audio + PWA",
        "desc": "Ein vollwertiger Gesangscoach, der im Browser lebt: Echtzeit-Stimmgerät, bewertete Warm-ups, ein Spiel zum Treffen der Töne, 13 Theoriekarten, ein 12-Wochen-Programm, Tagespläne, ein Ableton-Studioleitfaden, ein Fortschritts-Radar und Achievement-Badges. Er läuft offline, installiert sich als App und kommt als Android-APK."
      },
      {
        "tag": "Bar-Crawl-App · React Native / Expo",
        "desc": "Finden Sie Bars nach Kanton, stöbern Sie nach Gemeinde, filtern Sie nach Typ und haken Sie Ihre Tour unterwegs ab. Es ist ein Taschenführer durch die Schweizer Barszene, über 3500 Lokale, gebaut mit Expo und React Native auf einem Supabase-Backend. Noch in Entwicklung."
      },
      {
        "tag": "Algo-Trading-Forschung · Python",
        "desc": "Ein algorithmischer Paper-Trading-Bot samt Backtesting-Gerüst in Python. Ich habe es als ehrliche Studie zu Strategietests und Risiko angelegt und strikt beim Papierhandel belassen, sobald die Daten zeigten, dass es live keinen verlässlichen Vorteil gab."
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
      "hero.pitch": "我喜欢把一个想法变成你真的能打开、能用起来的东西，目前我做的有八个已经上线了：一所跑在浏览器里的学校，通过 WebAssembly 跑着六个真实的语言引擎；一个把你说的一句话变成成品 Excel 文件的工具；一个会记住你的陪伴应用；还有一间由一小队 AI agent 撑起来的广告工作室。它们里面有不少不只是靠 AI 做出来，而是把 AI 直接当成功能在用。法语和英语都是我的母语，我有瑞士和美国双重身份。",
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
      "about.p1": "我是 <strong>Florian Sumi</strong>。瑞士和美国双重身份，住在纳沙泰尔郊外。我一周大半时间花在<strong>在洛桑大学攻读社会科学（媒体与传播）硕士</strong>上，剩下的时间都拿来写软件了。",
      "about.p2": "我基本是<strong>自学</strong>出来的。如今 AI 就是我工作方式里的一部分，就跟任何开发者依赖自己的工具一样，它让我能做出很多东西。我做过用 WebGL、WebAssembly、向量数据库、多 agent 流水线、实时流的项目。这些都不是摆样子的：每一个项目你都能打开、能用。其中一个直接在浏览器里跑真实的语言引擎；另一个把关于你的记忆存进 pgvector，下次接着上回的地方继续聊。",
      "about.p3": "我的背景是<strong>媒体与传播研究</strong>，大概正因如此，我做东西是为了那个真正在用它的人，而不是只为了别的开发者。这股劲儿也来自我多年的<strong>零售、收银和客户服务</strong>经历，再加上一张 TEFL 教学资格证。我学东西快，而且开了头就会做完。",
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
      "projects.lead": "都是能真用的应用，不是样板演示。八个已经上线，每一个都是我自己亲手做的。徽章会告诉你哪些已经在线、哪些还在做。",
      "projects.mission": "这些项目里有一条共同的线：把那些大家通常得花钱买的工具，做成免费的，基于开源，让每个人都用得上。",
      "section.music": "音乐与现场",
      "nav.music": "音乐",
      "music.lead": "我自学了 Ableton，自己做音乐也打碟。有两个项目，Garage Act 和 Atomatek，都是从零起步，后来登上了瑞士和法国各地的付费舞台和音乐节，包括 EPFL 的 Sysmic 音乐节。",
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
        "desc": "一个我从头到尾自己搭的自托管媒体中心。一个 Node/Express 服务器为媒体库建立索引，用 HTTP range 请求来推流，所以拖动进度条是瞬间响应的；三个客户端跑在同一个同步引擎上：桌面端是 Electron，安卓上是一个 Capacitor 应用，还有一个给低功耗设备的轻量版。网格是手写的，还做了虚拟化，所以背后没有任何框架，几千个条目照样滑得很顺。它还能做一起看的房间，通过 Server-Sent Events 把一个人的播放、暂停、拖动同步给朋友，有 token 鉴权和用 passkey 锁住的私密文件夹，还能通过一个私有 mesh VPN 远程访问。"
      },
      {
        "tag": "树莓派 5 互动课程 · PWA",
        "desc": "一本 447 页的 Raspberry Pi 5 手册，被我做成了一门你真能上完的课程。里面有一个真正的手写 Linux 终端，还有一块能接线的 GPIO 面包板，都能直接在浏览器里上手摆弄，另外还有 ⌘K 搜索、术语表、测验和徽章，以及明暗两套主题。它能像应用一样安装，还能完全离线使用。"
      },
      {
        "tag": "AI 伙伴 · Next.js + pgvector",
        "desc": "一个全栈的 AI 陪伴应用（Next.js、Postgres 和 pgvector），它会慢慢攒下关于你的、持久且可检索的记忆，并在后台一直运转，写一些私密的随想，就算你已经关了标签页，它的情绪也还在变。真实的账号，真实的持久化。说到底，它更像是一场实验：试着给 AI 一点类似内心世界的东西。",
        "caseStudy": {"stats": ["Next.js + pgvector", "长期记忆", "后台任务"], "body": "它把记忆作为 embedding 存进 pgvector，再按相似度把它们调出来，所以那些重要的对话会重新浮现，而不是一刷新就没了。后台任务在你离开的时候也一直运转，就算标签页关着，它也会写一些小日记，情绪也会慢慢起伏变化。"}
      },
      {
        "tag": "编程学习平台 · WASM/Pyodide",
        "desc": "一所黑客终端风格的代码学校，教六门语言，Python、JavaScript、TypeScript、SQL、Lua 和 Ruby，每一门都通过 WebAssembly 在浏览器里跑一个真实的引擎。先讲理论，再做练习，练习会在你写的过程中给代码判分。它的设计参考了哈佛的 CS50 和 Dataquest。",
        "caseStudy": {"stats": ["6 种语言，真实引擎", "96 道练习", "在浏览器中运行"], "body": "每种语言都跑在一个编译成 WebAssembly 的真实引擎上。Python 用 Pyodide，旁边还有 ruby.wasm 和 sql.js，再加上 JS、TypeScript 和 Lua。做一道练习，它会真的把你写的代码跑一遍、用测试来判分，没有选择题这回事。每个解答都先在 CI 里过一遍，所以不会有坏掉的东西上线。"}
      },
      {
        "tag": "用 AI 学开发 · PWA",
        "desc": "一个面向那些从 AI 工具入门写代码、又想往深里钻的人的课程平台。课程会带你从一句 prompt 一路走到一个部署好的应用，途中有一位实时的 AI 导师随时答疑，还有进度追踪，以及一套会跟着工具一起更新的课程内容。我做它，是因为别的所有学编程的资料都默认你想当一名传统工程师。"
      },
      {
        "tag": "AI Excel 生成器 · JS + Python 无服务器",
        "desc": "把你想要的说出来或打出来，它就会还给你一个真正能下载的 Excel 工作簿，带实时公式、合计、条件格式、下拉菜单、图表。它甚至能直接从一张照片或一个 PDF 里读出数据，而且能作为应用装在任何设备上。",
        "caseStudy": {"stats": ["语音或文字输入", "输出真实 .xlsx", "识别照片和 PDF"], "body": "后端有个 Python 函数会构建一个真正的工作簿，公式、条件格式、图表全都有，然后把 .xlsx 文件交还给你。拍一张收据照片，或者丢进一个 PDF，一个视觉模型就会把它变成一行行数据。"}
      },
      {
        "tag": "AI 邮件分拣 · Gmail 智能体",
        "desc": "一个 AI agent，每天两次帮你过一遍 Gmail 收件箱。它会给那些真正重要的邮件加星标和标签（发票、工资、税务、截止日期、安全），给需要回复的邮件起草回信、但从不替你按下发送，还能在你需要时拦掉那些吵闹的发件人。"
      },
      {
        "tag": "AI 广告生成器 · 多智能体",
        "desc": "一条多 agent 流水线，把一份产品简介变成你能直接用的广告创意。专门的 agent 各自负责文案、场景和图像，每个场景一直到导出之前都还能编辑。",
        "caseStudy": {"stats": ["5 个智能体", "输入简报，输出广告", "场景可编辑"], "body": "五个 agent 分工合作：策略、文案、艺术指导、图像，还有最后的审核，一个接一个往下传。出来的是一整套完整的广告战役，细到一段配了画外音的动画视频，而且这一切都在浏览器里完成。"}
      },
      {
        "tag": "二手交易市场 · Node/Express 全栈",
        "desc": "一个点对点的二手时尚买卖市场，面向瑞士，有真实账号、JWT 鉴权、商品列表和私信。它支持三种语言（法语、德语、意大利语），用 Node/Express 搭成全栈应用，前端是 PWA。还在开发中。"
      },
      {
        "tag": "音频响应视觉与投影 · WebGL",
        "desc": "一个面向现场演出的实时 WebGL 加 Web Audio 的 VJ 工具。十种视觉效果，五个无限放大的「液态」分形，五个音频可视化器，全都跟着当下放的音乐一起动。它内置了一个会不断演变的 psytrance 生成器，还有自由的投影映射，并且作为桌面网页应用运行。",
        "caseStudy": {"stats": ["一个 HTML 文件", "零依赖", "10 个实时视觉"], "body": "十个分形和音频可视化效果，全是 GLSL 着色器，对来自 Web Audio API 的实时频率数据做出反应。整个东西就是一个 HTML 文件，没有构建步骤，也没有任何库。投影映射也内置好了，能直接用在现场演出上。"}
      },
      {
        "tag": "AI声乐教练 · Web Audio + PWA",
        "desc": "一位完整的、住在浏览器里的歌唱教练：实时音准校准、带评分的开嗓练习、一个音准练习小游戏、13 张乐理卡片、一套 12 周的训练计划、每日方案、一份 Ableton 录音棚指南、一张进度雷达图，还有成就徽章。它能离线运行，能像应用一样安装，还做成了安卓 APK。"
      },
      {
        "tag": "酒吧巡游应用 · React Native / Expo",
        "desc": "按州查酒吧，按市镇浏览，按类型筛选，边逛边把你的酒吧路线一个个打勾。它是一本随身的瑞士酒吧指南，收录了 3500 多家场所，用 Expo 和 React Native 搭成，后端是 Supabase。还在开发中。"
      },
      {
        "tag": "算法交易研究 · Python",
        "desc": "一个用 Python 写的算法模拟交易机器人加回测框架。我把它当成一次老老实实的研究，去琢磨策略测试和风险，等数据表明实盘上并没有稳定的优势，我就把它严格限定在只做模拟、不碰真钱。"
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
      "hero.pitch": "アイデアを、実際に開いて使える形にするのが好きです。いまそうやって作ったものが8つオンラインで動いています。WebAssembly で6つの本物の言語エンジンを走らせるブラウザ上の学校、話した一文をそのまま完成した Excel ファイルにするツール、あなたのことを覚えてくれるコンパニオンアプリ、小さな AI エージェントのチームが回す広告スタジオ。どれも AI でただ作ったというだけでなく、AI そのものを機能として使っています。フランス語と英語はどちらもネイティブで、スイスとアメリカの二重国籍です。",
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
      "about.p1": "<strong>Florian Sumi</strong>と申します。スイスとアメリカの二重国籍で、Neuchâtel のすぐ近くに住んでいます。平日のほとんどは<strong>ローザンヌ大学で社会科学（メディア＆コミュニケーション）の修士課程</strong>に通っていて、残りの時間でソフトウェアを作っています。",
      "about.p2": "基本的には<strong>独学</strong>です。いまの自分にとって AI は仕事の一部になっていて、どんな開発者も自分の道具に頼るのと同じ感覚で使っています。おかげでたくさんのものを世に出せています。これまでに WebGL、WebAssembly、ベクトルデータベース、マルチエージェントのパイプライン、リアルタイム配信などを使って作ってきました。見せかけのものは一つもありません。どのプロジェクトも実際に開いて使えます。あるものはブラウザの中で本物の言語エンジンをそのまま動かしますし、別のものは pgvector のストアにあなたの記憶を保ち、前回の続きから話を始めます。",
      "about.p3": "もともとの専門は<strong>メディア・コミュニケーション研究</strong>で、たぶんそのせいで、ほかの開発者向けではなく、実際にそれを使う人のために作るようになりました。同じ感覚は、長年の<strong>小売・レジ・接客</strong>の経験や、TEFL の英語教授資格からも来ているのだと思います。覚えるのは早いほうですし、始めたことは最後までやり切ります。",
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
      "projects.lead": "モックアップではなく、本物のアプリです。8つが公開中で、どれも自分一人で作りました。バッジを見れば、どれが公開済みで、どれがまだ制作中かが分かります。",
      "projects.mission": "全部に共通している軸が一つあります。普段ならお金を払って使うような道具を、オープンソースの上に作って無料にし、誰の手にも届くようにすることです。",
      "section.music": "音楽 & ライブ",
      "nav.music": "音楽",
      "music.lead": "Ableton は独学で身につけ、制作と DJ をやっています。Garage Act と Atomatek という2つのプロジェクトはゼロから始めて、スイスやフランス各地の有料のステージやフェスに出るところまで来ました。EPFL の Sysmic フェスティバルもそのひとつです。",
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
        "desc": "自分でゼロから作った、自前ホスティングのメディアセンターです。Node/Express のサーバーがライブラリをインデックス化し、HTTP の range リクエストで配信するので、シークが一瞬で決まります。3つのクライアントが一つの同期エンジンで動いていて、デスクトップは Electron、Android は Capacitor アプリ、低スペック機向けには軽量版があります。グリッドは手作りで仮想化してあるので、フレームワークなしでも数千件がなめらかにスクロールします。さらに、誰か一人の再生・一時停止・シークを Server-Sent Events で友達の画面にそのまま映す一緒に見る部屋、パスキーでロックした非公開フォルダ付きのトークン認証、プライベートなメッシュ VPN 越しのリモートアクセスにも対応しています。"
      },
      {
        "tag": "インタラクティブ Pi 5 講座 · PWA",
        "desc": "447ページある Raspberry Pi 5 のハンドブックを、最後までちゃんとやり通せるコースに作り変えました。手書き入力に対応した本物の Linux ターミナルと、ブラウザの中でいじれる配線可能な GPIO ブレッドボードがあり、ほかにも ⌘K 検索、用語集、クイズとバッジ、ライトとダークのテーマがそろっています。アプリのようにインストールでき、完全にオフラインで動きます。"
      },
      {
        "tag": "AI コンパニオン · Next.js + pgvector",
        "desc": "フルスタックの AI コンパニオンです（Next.js、Postgres、pgvector）。あなたについての、消えずに検索できる記憶を少しずつ積み上げ、バックグラウンドでも動き続けて、タブを閉じたあとも内緒の振り返りを書いたり気分を変えたりします。本物のアカウント、本物の永続化です。これは何より、AI に内面のようなものを持たせてみる実験です。",
        "caseStudy": {"stats": ["Next.js + pgvector", "長期記憶", "バックグラウンド処理"], "body": "記憶を pgvector の中に埋め込みとして保存し、似ているものをたどって引き出します。だから大事な会話は、リロードで消えてしまうのではなく、また自然と浮かび上がってきます。あなたが離れている間もバックグラウンドのジョブが動き続けていて、タブを閉じていても、小さな日記を書いたり気分が移り変わったりしています。"}
      },
      {
        "tag": "コード学習プラットフォーム · WASM/Pyodide",
        "desc": "ハッカー風ターミナルのコードスクールで、Python、JavaScript、TypeScript、SQL、Lua、Ruby の6言語を教えます。どれも WebAssembly を通してブラウザの中で本物のエンジンを動かしています。まず理論、それから書いたコードをその場で採点してくれる演習へと進みます。Harvard の CS50 と Dataquest を手本にしています。",
        "caseStudy": {"stats": ["6 言語、実エンジン", "96 の演習", "ブラウザで動作"], "body": "どの言語も、WebAssembly にコンパイルされた本物のエンジンの上で動いています。Python は Pyodide を使い、JS、TypeScript、Lua に加えて ruby.wasm や sql.js もそろっています。演習をやると、選択式ではなく、あなたが実際に書いたコードをテストにかけて採点します。どの解答も先に CI でチェックしているので、壊れたまま世に出ることはありません。"}
      },
      {
        "tag": "AI で開発を学ぶ · PWA",
        "desc": "AI ツールをきっかけにコーディングを始めて、もっと深く知りたいという人向けのコースプラットフォームです。プロンプトから、デプロイ済みのアプリにたどり着くところまでトラックが連れていってくれます。進めながら質問に答えてくれるライブの AI メンター、進捗トラッキング、そしてツールの変化に合わせて更新され続けるカリキュラム付きです。これを作ったのは、ほかのどの学習用教材も、あなたが従来型のエンジニアになりたいと決めてかかっていたからです。"
      },
      {
        "tag": "AI Excel ジェネレーター · JS + Python サーバーレス",
        "desc": "必要なものを話すか打ち込むだけで、本物の、そのままダウンロードできる Excel ワークブックを返してくれます。動く数式、合計、条件付き書式、ドロップダウン、グラフ付きです。写真や PDF からデータをそのまま読み取ることもできますし、どんなデバイスにもアプリとしてインストールできます。",
        "caseStudy": {"stats": ["音声かテキストで入力", "本物の .xlsx を出力", "写真と PDF を読む"], "body": "バックエンドでは Python の関数が本物のワークブックを組み立てます。数式も、条件付き書式も、グラフも全部入りで、それを .xlsx として返してくれます。レシートの写真を撮るか PDF を放り込めば、ビジョンモデルがそれを行データに変えてくれます。"}
      },
      {
        "tag": "AI メールトリアージ · Gmail エージェント",
        "desc": "Gmail の受信トレイを1日2回さらってくれる AI エージェントです。本当に大事なメール（請求書、給与、税金、締め切り、セキュリティ）にはスターとラベルを付け、返信が要るものは下書きまで作って（送信は絶対しません）、頼めばうるさい送信者をブロックします。"
      },
      {
        "tag": "AI 広告ジェネレーター · マルチエージェント",
        "desc": "製品ブリーフを、そのまま使える広告クリエイティブに変えるマルチエージェントのパイプラインです。専門のエージェントがコピー、シーン、ビジュアルをそれぞれ担当し、どのシーンも書き出しの直前まで編集できます。",
        "caseStudy": {"stats": ["5 つのエージェント", "ブリーフを入れて広告を出力", "シーンを編集可能"], "body": "5つのエージェントが分担します。戦略、コピー、アートディレクション、ビジュアル、そして最後のレビュー。それぞれが次へとバトンを渡していきます。出てくるのはキャンペーン一式で、ナレーション付きのアニメーション動画まで含まれます。しかもそれが全部ブラウザの中で起きます。"}
      },
      {
        "tag": "リセールマーケットプレイス · Node/Express フルスタック",
        "desc": "スイスで中古ファッションを売り買いするための、個人どうしのマーケットプレイスです。本物のアカウント、JWT 認証、出品、メッセージ機能付き。3言語対応（FR、DE、IT）で、Node/Express のフルスタックアプリに PWA のフロントエンドという構成です。まだ開発中です。"
      },
      {
        "tag": "オーディオ反応ビジュアル＆プロジェクション · WebGL",
        "desc": "ライブのショー向けの、リアルタイムな WebGL ＆ Web Audio の VJ ツールです。10種類のビジュアルがあり、無限ズームの液体のようなフラクタルが5つ、オーディオビジュアライザーが5つ、どれも流れている音に反応します。進化し続ける psytrance ジェネレーターと自由なプロジェクションマッピングが組み込まれていて、デスクトップ向けのウェブアプリとして動きます。",
        "caseStudy": {"stats": ["HTML 1 ファイル", "依存なし", "10 個のライブビジュアル"], "body": "10種類のフラクタルとオーディオビジュアライザーがあり、すべて GLSL シェーダーで、Web Audio API から来るリアルタイムの周波数データに反応します。全体がたった一つの HTML ファイルで、ビルド手順もライブラリもありません。実際のショー向けに、プロジェクションマッピングも最初から組み込んであります。"}
      },
      {
        "tag": "AI歌声コーチ · Web Audio + PWA",
        "desc": "ブラウザの中で完結する本格的なボイスコーチです。リアルタイムのピッチチューナー、採点付きのウォームアップ、ピッチ練習ゲーム、13枚の理論カード、12週間のプログラム、毎日のプラン、Ableton のスタジオガイド、進捗のレーダー、達成バッジまでそろっています。オフラインで動き、アプリとしてインストールでき、Android の APK としても配布できます。"
      },
      {
        "tag": "バー巡りアプリ · React Native / Expo",
        "desc": "州ごとにバーを探し、コミューン単位で見て回り、種類で絞り込み、はしご酒をしながらチェックを付けていけます。スイスのバー事情を手のひらに収めたガイドで、3,500軒を超える店を収録しています。Expo と React Native で作り、バックエンドは Supabase です。まだ開発中です。"
      },
      {
        "tag": "アルゴリズム取引リサーチ · Python",
        "desc": "Python で書いた、アルゴリズム的なペーパートレードのボットとバックテストの仕組みです。戦略の検証とリスクをまじめに見つめる研究として取り組み、データを見て実際には信頼できる優位性がないと分かってからは、あくまでペーパー専用に徹しました。"
      }
    ]
  }
};

if (typeof window !== "undefined") { window.PROJECTS_BASE = PROJECTS_BASE; window.CONTENT = CONTENT; }
