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
    "name": "Pilot",
    "emoji": "🍓",
    "img": "assets/projects/pilot.png",
    "grad": "linear-gradient(135deg, #C7152A, #0E8C7E)",
    "status": "live",
    "free": true,
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
    "tech": [
      "JavaScript",
      "WASM",
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
    "tech": [
      "AI agent",
      "Gmail",
      "PWA",
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
    "tech": [
      "Node",
      "Express",
      "JWT auth",
      "PWA",
      "JSON DB"
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
    "tech": [
      "WebGL",
      "Canvas",
      "Web Audio",
      "JavaScript"
    ],
    "live": "https://floriansumi-bot.github.io/hyperfractal/",
    "repo": "https://github.com/floriansumi-bot/hyperfractal"
  },
  {
    "name": "VoiceLab",
    "emoji": "🎙️",
    "img": "assets/projects/voicelab.svg",
    "grad": "linear-gradient(135deg, #818cf8, #22d3ee)",
    "status": "live",
    "free": true,
    "tech": [
      "Web Audio API",
      "Vanilla JS",
      "PWA",
      "Capacitor",
      "GitHub Pages"
    ],
    "live": "https://floriansumi-bot.github.io/sing-coach/",
    "repo": "https://github.com/floriansumi-bot/sing-coach"
  },
  {
    "name": "Barathon",
    "emoji": "🍻",
    "img": "assets/projects/barathon.svg",
    "grad": "linear-gradient(135deg, #f59e0b, #f472b6)",
    "status": "dev",
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
      "hero.eyebrow": "Neuchâtel · Switzerland — open to opportunities",
      "hero.role": "I build real web apps — 8 live online",
      "hero.pitch": "I turn ideas into software people actually use, and 8 of them are live right now: an in-browser school that teaches six programming languages, a generator that builds an Excel file from a single sentence, a companion app with a real memory, and more. Coming from media research, I build for real people — not just for other engineers. Native French and English speaker; Swiss and American.",
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
      "about.p1": "I'm <strong>Florian Sumi</strong> — Swiss and American, based near Neuchâtel. By day I'm doing a <strong>Master's in Social Sciences (Media &amp; Communication) at the University of Lausanne</strong>; the rest of the time I build software.",
      "about.p2": "I'm largely <strong>self-taught</strong> and I work the modern way — building software by <strong>directing AI</strong>: I design, prototype and ship real applications with AI as a pair-programmer. The result isn't slideware — it's <strong>working products people can open and use</strong>, from a code-learning platform running real language engines in the browser to a tool that turns one sentence into a finished Excel workbook.",
      "about.p3": "My background is <strong>media and communication research</strong> — which is exactly why my software is built for real people, not just other engineers. The same instinct shows in hands-on <strong>retail, cash-handling and customer-service</strong> roles and a TEFL teaching qualification. I learn fast, I ship reliably, and I turn vague ideas into things people can use.",
      "about.fact.based.label": "Based in",
      "about.fact.based.value": "Marin-Epagnier, Neuchâtel",
      "about.fact.langs.label": "Languages",
      "about.fact.langs.value": "French (native) · English (native) · German (school)",
      "about.fact.study.label": "Studying",
      "about.fact.study.value": "MA Social Sciences (Media & Communication) — UNIL",
      "about.fact.also.label": "Also does",
      "about.fact.also.value": "Music production (Ableton) · live shows",
      "skills.tech.heading": "🛠️ Building & AI",
      "skills.people.heading": "🤝 People & professional",
      "timeline.experience": "Experience",
      "timeline.education": "Education",
      "projects.lead": "Real, working applications — not mockups. Nine are live, all built solo; badges show what's publicly live versus still in development.",
      "projects.mission": "One thread ties them together: putting open-source technology into everyday hands — taking tools people normally pay for and making them free.",
      "section.music": "Music & live sets",
      "nav.music": "Music",
      "music.lead": "Self-taught on Ableton, I produce and DJ. I've grown two projects — Garage Act and Atomatek — from scratch to paid venues and festivals across Switzerland and France, including EPFL's Sysmic festival.",
      "music.more": "Full profile ↗",
      "music.play": "Play",
      "music.pause": "Pause",
      "contact.lead": "Open to developer roles, internships and collaborations. The fastest way to reach me:",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.github": "GitHub",
      "contact.location": "Location",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",
      "footer.tagline": "Built from scratch, deployed on GitHub Pages.",
      "footer.top": "Back to top ↑",
      "badge.live": "Live",
      "badge.dev": "In development",
      "badge.research": "Research",
      "free.note": "Free to use, built on an open-source stack — no subscription, no paywall.",
      "link.live": "Live demo ↗",
      "link.code": "Code ↗",
      "link.private": "Private / local",
      "a11y.skip": "Skip to content",
      "a11y.menu": "Open menu",
      "a11y.lang": "Choose language",
      "a11y.scroll": "Scroll to the About section",
      "a11y.home": "Florian Sumi — home",
      "a11y.nav": "Main navigation",
      "a11y.glance": "At a glance",
      "a11y.workExp": "Work experience",
      "a11y.education": "Education",
      "a11y.preview": "preview",
      "projects.stackNote": "Built with (AI-assisted):"
    },
    "techSkills": [
      "JavaScript & Python",
      "React Native, Next.js & Node",
      "Agentic coding — directing AI",
      "Prompt engineering",
      "Rapid prototyping & shipping",
      "Progressive Web Apps (PWAs)",
      "Git & GitHub",
      "Vercel / GitHub Pages deploy",
      "Product & UX design",
      "Ableton Live — music production",
      "Audio & video editing"
    ],
    "softSkills": [
      "Customer service",
      "Cash handling",
      "Retail sales",
      "Teaching (TEFL)",
      "FR / EN native · DE (school)",
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
        "desc": "Supported logistics operations — inventory management and parcel preparation and shipping."
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
        "role": "MA, Social Sciences — Media & Communication",
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
        "desc": "Harvard's flagship computer-science course — currently working through the Python track."
      },
      {
        "role": "Federal Maturity — Economics & Law",
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
        "tag": "Interactive Pi 5 course · PWA",
        "desc": "A 447-page Raspberry Pi 5 handbook reborn as a friendly, finishable course — with a real hand-written Linux terminal and a wireable GPIO breadboard you can try right in the browser. Adds ⌘K search, a living glossary, quizzes and badges, and light/dark themes. Installable and fully offline."
      },
      {
        "tag": "AI companion · Next.js + pgvector",
        "desc": "A full-stack AI companion (Next.js, Postgres + pgvector) that forms durable, searchable memories of you and keeps running background jobs — journaling private reflections and shifting mood even after you close the tab. Real accounts, real persistence: an experiment in giving an AI an inner life."
      },
      {
        "tag": "Learn-to-code platform · WASM/Pyodide",
        "desc": "A hacker-terminal-themed school that teaches six languages — Python, JavaScript, TypeScript, SQL, Lua and Ruby — each running a real engine inside the browser via WebAssembly. Theory first, then live-graded exercises. Modeled on Harvard's CS50 and Dataquest."
      },
      {
        "tag": "Learn to build with AI · PWA",
        "desc": "A learning platform that teaches you to build real software by directing AI and mastering the agentic loop. Includes structured tracks, a live AI mentor you can chat with, progress tracking, and a guide that keeps improving itself."
      },
      {
        "tag": "AI Excel generator · JS + Python serverless",
        "desc": "Say or type what you need and get a real, downloadable Excel workbook — live formulas, totals, conditional formatting, dropdowns and charts. Reads data from photos and PDFs, and installs as an app on any device."
      },
      {
        "tag": "AI email triage · Gmail agent",
        "desc": "An AI agent that triages a Gmail inbox twice a day: it stars and labels the mail that matters (invoices, payroll, tax, deadlines, security), drafts replies that need one without ever sending, and blocks noisy senders on request."
      },
      {
        "tag": "AI ad generator · Multi-agent",
        "desc": "A multi-agent pipeline that turns a product brief into ready-to-use ad creatives — specialised agents write the copy, design the scenes and generate the imagery, with every scene editable before export."
      },
      {
        "tag": "Resale marketplace · Node/Express full-stack",
        "desc": "A peer-to-peer marketplace for buying and selling second-hand fashion in Switzerland — real user accounts, JWT auth, listings and messaging. Trilingual (FR / DE / IT), built as a Node/Express full-stack app with a PWA front end. In development."
      },
      {
        "tag": "Visual / projection tool · WebGL",
        "desc": "An infinite-zoom psychedelic fractal visualizer for live shows, driven by WebGL and Web Audio. Pairs a built-in psytrance generator with corner-pin projection mapping, and runs as a desktop web app."
      },
      {
        "tag": "AI singing coach · Web Audio + PWA",
        "desc": "A full singing coach in the browser — real-time pitch tuner, scored vocal warm-ups, pitch practice game, 13 theory cards, a 12-week training programme, smart daily plans, Ableton studio guide, progress radar chart and achievement badges. Runs offline, installs as an app, and ships as an Android APK."
      },
      {
        "tag": "Bar-crawl app · React Native / Expo",
        "desc": "A bar-crawl companion covering every bar in Switzerland — 3,500+, organised by canton and commune. Built with Expo and React Native, moving to a Supabase backend. In development."
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
      "hero.eyebrow": "Neuchâtel · Suisse — ouvert aux opportunités",
      "hero.role": "Je crée de vraies applications web — 8 en ligne",
      "hero.pitch": "Je transforme des idées en logiciels que les gens utilisent vraiment, et 8 d’entre eux sont en ligne dès maintenant : une école dans le navigateur qui enseigne six langages de programmation, un générateur qui crée un fichier Excel à partir d’une simple phrase, une application compagnon dotée d’une vraie mémoire, et bien d’autres. Issu de la recherche dans les médias, je conçois pour de vraies personnes — pas seulement pour d’autres ingénieurs. Francophone et anglophone de naissance ; Suisse et Américain.",
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
      "about.p1": "Je suis <strong>Florian Sumi</strong> — Suisse et Américain, basé près de Neuchâtel. Le jour, je prépare un <strong>Master en sciences sociales (Médias &amp; Communication) à l’Université de Lausanne</strong> ; le reste du temps, je développe des logiciels.",
      "about.p2": "Je suis en grande partie <strong>autodidacte</strong> et je travaille à la manière d’aujourd’hui — je crée des logiciels en <strong>pilotant l’IA</strong> : je conçois, prototype et livre de vraies applications avec l’IA comme partenaire de programmation. Le résultat n’a rien d’une présentation léchée — ce sont des <strong>produits qui fonctionnent, que l’on peut ouvrir et utiliser</strong>, d’une plateforme d’apprentissage du code faisant tourner de vrais moteurs de langage dans le navigateur à un outil qui transforme une simple phrase en un classeur Excel terminé.",
      "about.p3": "Je viens de la <strong>recherche en médias et communication</strong> — et c’est précisément pour cela que mes logiciels sont pensés pour de vraies personnes, pas seulement pour d’autres ingénieurs. Le même réflexe se retrouve dans des postes de terrain en <strong>vente, gestion de la caisse et service client</strong>, ainsi que dans une qualification d’enseignement TEFL. J’apprends vite, je livre de façon fiable et je transforme des idées floues en outils que les gens peuvent utiliser.",
      "about.fact.based.label": "Basé à",
      "about.fact.based.value": "Marin-Epagnier, Neuchâtel",
      "about.fact.langs.label": "Langues",
      "about.fact.langs.value": "Français (langue maternelle) · Anglais (langue maternelle) · Allemand (scolaire)",
      "about.fact.study.label": "Études",
      "about.fact.study.value": "MA Sciences sociales (Médias & Communication) — UNIL",
      "about.fact.also.label": "Aussi",
      "about.fact.also.value": "Production musicale (Ableton) · concerts live",
      "skills.tech.heading": "🛠️ Développement & IA",
      "skills.people.heading": "🤝 Relationnel & professionnel",
      "timeline.experience": "Expérience",
      "timeline.education": "Formation",
      "projects.lead": "De vraies applications qui fonctionnent — pas des maquettes. Neuf sont en ligne, toutes développées en solo ; les badges distinguent ce qui est publiquement en ligne de ce qui est encore en développement.",
      "projects.mission": "Un fil rouge les relie : mettre la technologie open source entre les mains de tous — prendre des outils habituellement payants et les rendre gratuits.",
      "section.music": "Musique & sets live",
      "nav.music": "Musique",
      "music.lead": "Autodidacte sur Ableton, je produis et je mixe. J’ai porté deux projets — Garage Act et Atomatek — de zéro jusqu’à des salles et festivals rémunérés en Suisse et en France, dont le festival Sysmic de l’EPFL.",
      "music.more": "Profil complet ↗",
      "music.play": "Lecture",
      "music.pause": "Pause",
      "contact.lead": "Ouvert aux postes de développeur, aux stages et aux collaborations. Le moyen le plus rapide de me joindre :",
      "contact.email": "E-mail",
      "contact.phone": "Téléphone",
      "contact.github": "GitHub",
      "contact.location": "Localisation",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",
      "footer.tagline": "Conçu de A à Z, déployé sur GitHub Pages.",
      "footer.top": "Retour en haut ↑",
      "badge.live": "En ligne",
      "badge.dev": "En développement",
      "badge.research": "Recherche",
      "free.note": "Gratuit, sur une base open source — sans abonnement ni péage.",
      "link.live": "Démo en ligne ↗",
      "link.code": "Code ↗",
      "link.private": "Privé / local",
      "a11y.skip": "Aller au contenu",
      "a11y.menu": "Ouvrir le menu",
      "a11y.lang": "Choisir la langue",
      "a11y.scroll": "Défiler jusqu’à la section À propos",
      "a11y.home": "Florian Sumi — accueil",
      "a11y.nav": "Navigation principale",
      "a11y.glance": "En un coup d’œil",
      "a11y.workExp": "Expérience professionnelle",
      "a11y.education": "Formation",
      "a11y.preview": "aperçu",
      "projects.stackNote": "Réalisé avec (assisté par IA) :"
    },
    "techSkills": [
      "JavaScript & Python",
      "React Native, Next.js & Node",
      "Développement agentique — piloter l’IA",
      "Prompt engineering",
      "Prototypage rapide & mise en production",
      "Progressive Web Apps (PWA)",
      "Git & GitHub",
      "Déploiement Vercel / GitHub Pages",
      "Conception produit & UX",
      "Ableton Live — production musicale",
      "Montage audio & vidéo"
    ],
    "softSkills": [
      "Service client",
      "Gestion de la caisse",
      "Vente en magasin",
      "Enseignement (TEFL)",
      "FR / EN langue maternelle · DE (scolaire)",
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
        "desc": "Soutien aux opérations logistiques — gestion des stocks, préparation et expédition des colis."
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
        "role": "MA, Sciences sociales — Médias & Communication",
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
        "desc": "Le cours d’informatique phare de Harvard — actuellement en train de suivre le parcours Python."
      },
      {
        "role": "Maturité gymnasiale — Économie & Droit",
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
        "tag": "Cours interactif Pi 5 · PWA",
        "desc": "Un manuel de 447 pages sur le Raspberry Pi 5 réinventé en un cours convivial que l’on peut vraiment terminer — avec un véritable terminal Linux écrit à la main et une platine GPIO que l’on câble directement dans le navigateur. S’y ajoutent une recherche ⌘K, un glossaire vivant, des quiz et des badges, ainsi que des thèmes clair et sombre. Installable et entièrement hors ligne."
      },
      {
        "tag": "Compagnon IA · Next.js + pgvector",
        "desc": "Un compagnon IA full-stack (Next.js, Postgres + pgvector) qui se forge de vrais souvenirs de vous, durables et consultables, et poursuit des tâches en arrière-plan — consignant des réflexions intimes et faisant évoluer son humeur même après la fermeture de l’onglet. De vrais comptes, une vraie persistance : une expérience pour donner une vie intérieure à une IA."
      },
      {
        "tag": "Plateforme d’apprentissage du code · WASM/Pyodide",
        "desc": "Une école à l’esthétique terminal de hacker qui enseigne six langages — Python, JavaScript, TypeScript, SQL, Lua et Ruby — chacun exécutant un vrai moteur dans le navigateur via WebAssembly. D’abord la théorie, puis des exercices corrigés en direct. Inspirée du CS50 de Harvard et de Dataquest."
      },
      {
        "tag": "Apprendre à créer avec l’IA · PWA",
        "desc": "Une plateforme qui vous apprend à créer de vrais logiciels en pilotant l’IA et en maîtrisant la boucle agentique. Elle propose des parcours structurés, un mentor IA en direct avec qui dialoguer, un suivi de progression et un guide qui ne cesse de s’améliorer lui-même."
      },
      {
        "tag": "Générateur Excel par IA · JS + Python serverless",
        "desc": "Dictez ou tapez ce dont vous avez besoin et obtenez un vrai classeur Excel téléchargeable — formules en direct, totaux, mise en forme conditionnelle, listes déroulantes et graphiques. Il lit les données depuis des photos et des PDF, et s’installe comme une application sur n’importe quel appareil."
      },
      {
        "tag": "Triage des e-mails par IA · Agent Gmail",
        "desc": "Un agent IA qui trie une boîte Gmail deux fois par jour : il met en favori et étiquette les messages qui comptent (factures, salaires, impôts, échéances, sécurité), rédige les réponses nécessaires sans jamais les envoyer, et bloque les expéditeurs indésirables à la demande."
      },
      {
        "tag": "Générateur de publicités par IA · Multi-agents",
        "desc": "Un pipeline multi-agents qui transforme un brief produit en créations publicitaires prêtes à l’emploi — des agents spécialisés rédigent les textes, conçoivent les scènes et génèrent les visuels, chaque scène restant modifiable avant l’export."
      },
      {
        "tag": "Marketplace de seconde main · Full-stack Node/Express",
        "desc": "Une marketplace entre particuliers pour acheter et vendre de la mode de seconde main en Suisse — vrais comptes utilisateurs, authentification JWT, annonces et messagerie. Trilingue (FR / DE / IT), conçue comme une application full-stack Node/Express avec un front-end PWA. En développement."
      },
      {
        "tag": "Outil visuel / de projection · WebGL",
        "desc": "Un visualiseur de fractales psychédéliques à zoom infini pour les concerts, propulsé par WebGL et Web Audio. Il associe un générateur de psytrance intégré à un mapping de projection par corner-pin, et tourne comme une application web de bureau."
      },
      {
        "tag": "Coach chant IA · Web Audio + PWA",
        "desc": "Un coach vocal complet dans le navigateur — accordeur de justesse en temps réel, échauffements notés, jeu de pratique mélodique, 13 fiches théoriques, programme de 12 semaines, plan journalier adaptatif, guide studio Ableton, radar de progression et badges. Fonctionne hors ligne, s'installe comme appli et sort en APK Android."
      },
      {
        "tag": "Appli de tournée des bars · React Native / Expo",
        "desc": "Un compagnon de tournée des bars qui recense tous les bars de Suisse — plus de 3 500, organisés par canton et par commune. Développé avec Expo et React Native, en migration vers un backend Supabase. En développement."
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
      "hero.eyebrow": "Neuenburg · Schweiz — offen für neue Chancen",
      "hero.role": "Ich baue echte Web-Apps – 8 davon sind live online",
      "hero.pitch": "Ich verwandle Ideen in Software, die Menschen wirklich nutzen – und 8 davon sind genau jetzt live: eine Schule im Browser, die sechs Programmiersprachen vermittelt, ein Generator, der aus einem einzigen Satz eine Excel-Datei erstellt, eine Begleit-App mit einem echten Gedächtnis und mehr. Ich komme aus der Medienforschung und entwickle für echte Menschen – nicht nur für andere Entwickler. Französisch und Englisch als Muttersprachen; Schweizer und US-Amerikaner.",
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
      "about.p1": "Ich bin <strong>Florian Sumi</strong> — Schweizer und Amerikaner, wohnhaft in der Nähe von Neuenburg. Tagsüber mache ich einen <strong>Master in Sozialwissenschaften (Medien &amp; Kommunikation) an der Universität Lausanne</strong>; in der übrigen Zeit entwickle ich Software.",
      "about.p2": "Ich bin grösstenteils <strong>Autodidakt</strong> und arbeite auf moderne Weise — ich entwickle Software, indem ich <strong>KI steuere</strong>: Ich entwerfe, prototypisiere und liefere echte Anwendungen aus, mit KI als Pair-Programmer. Das Ergebnis sind keine Präsentationsfolien, sondern <strong>fertige Produkte, die man öffnen und nutzen kann</strong> — von einer Plattform zum Programmierenlernen, die echte Sprach-Engines im Browser ausführt, bis zu einem Tool, das aus einem einzigen Satz eine fertige Excel-Arbeitsmappe macht.",
      "about.p3": "Ich komme aus der <strong>Medien- und Kommunikationsforschung</strong> — genau deshalb entsteht meine Software für echte Menschen und nicht nur für andere Entwickler. Dasselbe Gespür zeigt sich in praktischen Rollen in <strong>Einzelhandel, Kassenführung und Kundenservice</strong> sowie in einer Lehrqualifikation (TEFL). Ich lerne schnell, liefere zuverlässig und mache aus vagen Ideen etwas, das Menschen nutzen können.",
      "about.fact.based.label": "Wohnort",
      "about.fact.based.value": "Marin-Epagnier, Neuenburg",
      "about.fact.langs.label": "Sprachen",
      "about.fact.langs.value": "Französisch (Muttersprache) · Englisch (Muttersprache) · Deutsch (Schule)",
      "about.fact.study.label": "Studium",
      "about.fact.study.value": "MA Sozialwissenschaften (Medien & Kommunikation) — UNIL",
      "about.fact.also.label": "Ausserdem",
      "about.fact.also.value": "Musikproduktion (Ableton) · Live-Auftritte",
      "skills.tech.heading": "🛠️ Entwicklung & KI",
      "skills.people.heading": "🤝 Menschen & Berufliches",
      "timeline.experience": "Erfahrung",
      "timeline.education": "Ausbildung",
      "projects.lead": "Echte, funktionierende Anwendungen — keine Mockups. Neun sind live, alle im Alleingang gebaut; die Badges zeigen, was öffentlich live ist und was sich noch in Entwicklung befindet.",
      "projects.mission": "Ein roter Faden verbindet sie alle: quelloffene Technologie in den Alltag aller bringen — Werkzeuge, für die man sonst zahlt, kostenlos machen.",
      "section.music": "Musik & Live-Sets",
      "nav.music": "Musik",
      "music.lead": "Autodidakt an Ableton, produziere ich und lege auf. Zwei Projekte — Garage Act und Atomatek — habe ich von Grund auf aufgebaut und auf bezahlte Bühnen und Festivals in der Schweiz und in Frankreich gebracht, darunter das Sysmic-Festival der EPFL.",
      "music.more": "Vollständiges Profil ↗",
      "music.play": "Abspielen",
      "music.pause": "Pause",
      "contact.lead": "Offen für Entwicklerstellen, Praktika und Kooperationen. Am schnellsten erreichen Sie mich so:",
      "contact.email": "E-Mail",
      "contact.phone": "Telefon",
      "contact.github": "GitHub",
      "contact.location": "Standort",
      "contact.location.value": "Marin-Epagnier, Neuenburg",
      "footer.tagline": "Von Grund auf selbst gebaut, bereitgestellt auf GitHub Pages.",
      "footer.top": "Nach oben ↑",
      "badge.live": "Live",
      "badge.dev": "In Entwicklung",
      "badge.research": "Forschung",
      "free.note": "Kostenlos nutzbar, auf einem Open-Source-Stack gebaut — kein Abo, keine Paywall.",
      "link.live": "Live-Demo ↗",
      "link.code": "Code ↗",
      "link.private": "Privat / lokal",
      "a11y.skip": "Zum Inhalt springen",
      "a11y.menu": "Menü öffnen",
      "a11y.lang": "Sprache wählen",
      "a11y.scroll": "Zum Abschnitt «Über mich» scrollen",
      "a11y.home": "Florian Sumi — Startseite",
      "a11y.nav": "Hauptnavigation",
      "a11y.glance": "Auf einen Blick",
      "a11y.workExp": "Berufserfahrung",
      "a11y.education": "Ausbildung",
      "a11y.preview": "Vorschau",
      "projects.stackNote": "Erstellt mit (KI-gestützt):"
    },
    "techSkills": [
      "JavaScript & Python",
      "React Native, Next.js & Node",
      "Agentische Entwicklung — KI steuern",
      "Prompt Engineering",
      "Schnelles Prototyping & Ausliefern",
      "Progressive Web Apps (PWAs)",
      "Git & GitHub",
      "Deployment auf Vercel / GitHub Pages",
      "Produkt- & UX-Design",
      "Ableton Live — Musikproduktion",
      "Audio- & Videobearbeitung"
    ],
    "softSkills": [
      "Kundenservice",
      "Kassenführung",
      "Verkauf im Einzelhandel",
      "Unterrichten (TEFL)",
      "FR / EN Muttersprache · DE (Schule)",
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
        "desc": "Unterstützung im Logistikbetrieb — Bestandsverwaltung sowie Vorbereitung und Versand von Paketen."
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
        "role": "MA Sozialwissenschaften — Medien & Kommunikation",
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
        "desc": "Der renommierte Informatikkurs der Harvard University — aktuell arbeite ich mich durch den Python-Track."
      },
      {
        "role": "Gymnasiale Maturität — Wirtschaft & Recht",
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
        "tag": "Interaktiver Pi-5-Kurs · PWA",
        "desc": "Ein 447-seitiges Raspberry-Pi-5-Handbuch, neu geboren als freundlicher, abschliessbarer Kurs — mit einem echten, handgeschriebenen Linux-Terminal und einem verdrahtbaren GPIO-Steckbrett, das man direkt im Browser ausprobieren kann. Dazu ⌘K-Suche, ein lebendiges Glossar, Quizze und Abzeichen sowie ein helles und ein dunkles Theme. Installierbar und vollständig offline."
      },
      {
        "tag": "KI-Begleiter · Next.js + pgvector",
        "desc": "Ein Full-Stack-KI-Begleiter (Next.js, Postgres + pgvector), der dauerhafte, durchsuchbare Erinnerungen an Sie aufbaut und im Hintergrund weiterläuft — er hält private Reflexionen in einem Tagebuch fest und verändert seine Stimmung, selbst wenn Sie den Tab längst geschlossen haben. Echte Konten, echte Persistenz: ein Experiment, einer KI ein Innenleben zu geben."
      },
      {
        "tag": "Plattform zum Programmierenlernen · WASM/Pyodide",
        "desc": "Eine Schule im Hacker-Terminal-Look, die sechs Sprachen unterrichtet — Python, JavaScript, TypeScript, SQL, Lua und Ruby — jede mit einer echten Engine direkt im Browser, ausgeführt über WebAssembly. Erst Theorie, dann live bewertete Übungen. Nach dem Vorbild von Harvards CS50 und Dataquest."
      },
      {
        "tag": "Mit KI bauen lernen · PWA",
        "desc": "Eine Lernplattform, die Ihnen beibringt, echte Software zu entwickeln, indem Sie KI steuern und den Agentic Loop meistern. Mit strukturierten Lernpfaden, einem interaktiven KI-Mentor zum Chatten, Fortschrittsverfolgung und einem Leitfaden, der sich selbst laufend verbessert."
      },
      {
        "tag": "KI-Excel-Generator · JS + Python serverless",
        "desc": "Sagen oder tippen Sie, was Sie brauchen, und erhalten Sie eine echte, herunterladbare Excel-Arbeitsmappe — mit aktiven Formeln, Summen, bedingter Formatierung, Dropdowns und Diagrammen. Liest Daten aus Fotos und PDFs und lässt sich als App auf jedem Gerät installieren."
      },
      {
        "tag": "KI-E-Mail-Triage · Gmail-Agent",
        "desc": "Ein KI-Agent, der ein Gmail-Postfach zweimal täglich sortiert: Er markiert und beschriftet die Post, die zählt (Rechnungen, Lohnabrechnungen, Steuern, Fristen, Sicherheit), entwirft die nötigen Antworten, ohne sie je zu senden, und blockiert auf Wunsch lästige Absender."
      },
      {
        "tag": "KI-Werbegenerator · Multi-Agent",
        "desc": "Eine Multi-Agent-Pipeline, die aus einem Produkt-Briefing einsatzbereite Werbe-Creatives macht — spezialisierte Agenten schreiben die Texte, gestalten die Szenen und generieren die Bilder, wobei sich jede Szene vor dem Export bearbeiten lässt."
      },
      {
        "tag": "Second-Hand-Marktplatz · Node/Express Full-Stack",
        "desc": "Ein Peer-to-Peer-Marktplatz zum Kaufen und Verkaufen von Second-Hand-Mode in der Schweiz — echte Benutzerkonten, JWT-Authentifizierung, Inserate und Nachrichten. Dreisprachig (FR / DE / IT), gebaut als Full-Stack-App mit Node/Express und PWA-Frontend. In Entwicklung."
      },
      {
        "tag": "Visualisierungs- / Projektions-Tool · WebGL",
        "desc": "Ein psychedelischer Fraktal-Visualizer mit unendlichem Zoom für Live-Shows, angetrieben von WebGL und Web Audio. Kombiniert einen integrierten Psytrance-Generator mit Corner-Pin-Projection-Mapping und läuft als Desktop-Webanwendung."
      },
      {
        "tag": "KI-Gesangscoach · Web Audio + PWA",
        "desc": "Ein vollständiger Gesangscoach im Browser – Echtzeit-Stimmungs-Tuner, bewertete Stimmübungen, Melodie-Übungsspiel, 13 Theorie-Karten, ein 12-Wochen-Trainingsprogramm, adaptiver Tagesplan, Ableton-Studio-Guide, Fortschrittsradar und Achievements. Offline nutzbar, als App installierbar und als Android-APK verfügbar."
      },
      {
        "tag": "Bar-Crawl-App · React Native / Expo",
        "desc": "Eine Begleit-App für Bar-Crawls, die jede Bar der Schweiz abdeckt — über 3'500, geordnet nach Kanton und Gemeinde. Gebaut mit Expo und React Native, in Umstellung auf ein Supabase-Backend. In Entwicklung."
      },
      {
        "tag": "Algo-Trading-Forschung · Python",
        "desc": "Ein algorithmischer Paper-Trading-Bot mit Backtesting-Gerüst in Python. Ehrlich evaluiert als Studie zu Strategietests und Risiko — strikt auf Paper-Trading beschränkt, nachdem die Daten keinen verlässlichen Vorteil im Echtbetrieb zeigten."
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
      "hero.role": "我开发真实可用的 Web 应用——已有 8 款上线运行",
      "hero.pitch": "我把想法变成人们真正在用的软件，其中 8 款此刻正在线上运行：一所在浏览器里教你六种编程语言的学校、一个只凭一句话就生成 Excel 文件的工具、一款拥有真实记忆的陪伴应用，还有更多。我出身于媒体研究，所以我为真实的普通人而做——而不只是为其他工程师。法语和英语母语者；瑞士与美国双重身份。",
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
      "about.p2": "我基本上是<strong>自学成才</strong>，并以现代的方式工作——我通过<strong>驾驭 AI</strong> 来开发软件：以 AI 作为结对编程搭档，亲手设计、做原型并交付真实的应用。成果不是徒有其表的演示稿，而是<strong>人们打开即用的可用产品</strong>，从一个在浏览器里运行真实语言引擎的编程学习平台，到一个把一句话变成完整 Excel 工作簿的工具。",
      "about.p3": "我的背景是<strong>媒体与传播研究</strong>——这恰恰解释了为什么我的软件是为真实用户而造，而不只是写给其他工程师看。同样的本能也体现在<strong>零售、现金管理与客户服务</strong>等一线岗位的实战经验，以及一份对外英语教学资格（TEFL）上。我学得快、交付稳，能把模糊的想法变成人们真正用得上的东西。",
      "about.fact.based.label": "所在地",
      "about.fact.based.value": "Marin-Epagnier，纳沙泰尔",
      "about.fact.langs.label": "语言",
      "about.fact.langs.value": "法语（母语）· 英语（母语）· 德语（学校所学）",
      "about.fact.study.label": "在读",
      "about.fact.study.value": "社会科学硕士（媒体与传播）— UNIL",
      "about.fact.also.label": "另外",
      "about.fact.also.value": "音乐制作（Ableton）· 现场演出",
      "skills.tech.heading": "🛠️ 开发与 AI",
      "skills.people.heading": "🤝 人际与职业",
      "timeline.experience": "工作经历",
      "timeline.education": "教育背景",
      "projects.lead": "真实可用的应用，而非设计稿。9 款已上线，全部由我独立完成；徽章标明哪些已公开上线、哪些仍在开发中。",
      "projects.mission": "它们有一条共同的主线：把开源技术带到日常人手中——把人们通常要付费的工具变成免费的。",
      "section.music": "音乐与现场",
      "nav.music": "音乐",
      "music.lead": "我自学 Ableton，做音乐制作与 DJ。我从零起步打造了两个项目——Garage Act 和 Atomatek——一路带上瑞士和法国的付费场馆与音乐节，包括 EPFL 的 Sysmic 音乐节。",
      "music.more": "完整主页 ↗",
      "music.play": "播放",
      "music.pause": "暂停",
      "contact.lead": "欢迎开发岗位、实习与各类合作。联系我最快的方式：",
      "contact.email": "邮箱",
      "contact.phone": "电话",
      "contact.github": "GitHub",
      "contact.location": "所在地",
      "contact.location.value": "Marin-Epagnier，纳沙泰尔",
      "footer.tagline": "从零搭建，部署于 GitHub Pages。",
      "footer.top": "回到顶部 ↑",
      "badge.live": "已上线",
      "badge.dev": "开发中",
      "badge.research": "研究中",
      "free.note": "免费使用，基于开源技术栈构建——无订阅、无付费墙。",
      "link.live": "在线演示 ↗",
      "link.code": "代码 ↗",
      "link.private": "私有 / 本地",
      "a11y.skip": "跳转到正文",
      "a11y.menu": "打开菜单",
      "a11y.lang": "选择语言",
      "a11y.scroll": "滚动到“关于”部分",
      "a11y.home": "Florian Sumi — 主页",
      "a11y.nav": "主导航",
      "a11y.glance": "速览",
      "a11y.workExp": "工作经历",
      "a11y.education": "教育背景",
      "a11y.preview": "预览",
      "projects.stackNote": "构建技术（AI 辅助）："
    },
    "techSkills": [
      "JavaScript 与 Python",
      "React Native、Next.js 与 Node",
      "智能体编程 — 驾驭 AI",
      "提示词工程",
      "快速原型与交付",
      "渐进式 Web 应用（PWA）",
      "Git 与 GitHub",
      "Vercel / GitHub Pages 部署",
      "产品与 UX 设计",
      "Ableton Live — 音乐制作",
      "音视频剪辑"
    ],
    "softSkills": [
      "客户服务",
      "现金管理",
      "零售销售",
      "教学（TEFL）",
      "法语/英语母语 · 德语（学校所学）",
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
        "desc": "支持物流运营——库存管理以及包裹的准备与发货。"
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
        "role": "社会科学硕士 — 媒体与传播",
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
        "desc": "哈佛大学的王牌计算机科学课程——目前正在学习 Python 部分。"
      },
      {
        "role": "瑞士联邦高中毕业文凭 — 经济与法律",
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
        "tag": "树莓派 5 互动课程 · PWA",
        "desc": "一本 447 页的树莓派 5 手册重生为友好、可真正学完的课程——内置可直接在浏览器里上手的真实手写 Linux 终端，以及可接线的 GPIO 面包板。配有 ⌘K 搜索、随查随用的词汇表、测验与徽章，以及明暗双主题。可安装、完全离线。"
      },
      {
        "tag": "AI 伙伴 · Next.js + pgvector",
        "desc": "一个全栈 AI 伙伴（Next.js、Postgres + pgvector），会形成关于你的持久、可检索的记忆，并在后台持续运转——记录私密的日记、转换心情，哪怕你已经关掉了页面。真实账户、真实持久化：一次为 AI 赋予内在世界的实验。"
      },
      {
        "tag": "编程学习平台 · WASM/Pyodide",
        "desc": "一所黑客终端风格的学校，教你六种语言——Python、JavaScript、TypeScript、SQL、Lua 和 Ruby——每一种都通过 WebAssembly 在浏览器里运行真实的引擎。先讲理论，再做实时评分的练习。借鉴哈佛 CS50 与 Dataquest。"
      },
      {
        "tag": "用 AI 学开发 · PWA",
        "desc": "一个学习平台，教你通过驾驭 AI、掌握「智能体循环」来构建真实软件。内含结构化的学习路线、一位可对话的实时 AI 导师、进度追踪，以及一份会不断自我完善的指南。"
      },
      {
        "tag": "AI Excel 生成器 · JS + Python 无服务器",
        "desc": "说出或输入你的需求，即可得到一份真实、可下载的 Excel 工作簿——含实时公式、汇总、条件格式、下拉菜单和图表。能从照片和 PDF 中读取数据，并可作为应用安装到任意设备上。"
      },
      {
        "tag": "AI 邮件分拣 · Gmail 智能体",
        "desc": "一个 AI 智能体，每天两次为 Gmail 收件箱分拣邮件：给真正重要的邮件加星标和标签（发票、工资、税务、截止日期、安全），为需要回复的邮件起草回信但绝不发送，并能按需屏蔽吵闹的发件人。"
      },
      {
        "tag": "AI 广告生成器 · 多智能体",
        "desc": "一条多智能体流水线，把产品简报变成可直接使用的广告素材——各司其职的智能体分别撰写文案、设计场景、生成图像，每个场景在导出前都可编辑。"
      },
      {
        "tag": "二手交易市场 · Node/Express 全栈",
        "desc": "一个面向瑞士的二手时尚个人交易市场（C2C）——带有真实用户账户、JWT 鉴权、商品发布与消息功能。三语界面（法/德/意），以 Node/Express 全栈应用构建，前端为 PWA。开发中。"
      },
      {
        "tag": "视觉 / 投影工具 · WebGL",
        "desc": "一款面向现场演出的无限缩放迷幻分形可视化工具，由 WebGL 与 Web Audio 驱动。内置 psytrance 生成器，搭配四角定位投影映射，以桌面 Web 应用运行。"
      },
      {
        "tag": "AI声乐教练 · Web Audio + PWA",
        "desc": "浏览器内完整的声乐教练——实时音准调音器、评分发声练习、音高练习游戏、13张理论卡片、12周训练计划、自适应每日计划、Ableton录音棚指南、进度雷达图与成就徽章。支持离线使用，可安装为应用，并提供Android APK。"
      },
      {
        "tag": "酒吧巡游应用 · React Native / Expo",
        "desc": "一款酒吧巡游伴侣应用，覆盖瑞士的每一家酒吧——3500 多家，按州与市镇组织。用 Expo 与 React Native 构建，正迁移至 Supabase 后端。开发中。"
      },
      {
        "tag": "算法交易研究 · Python",
        "desc": "一个用 Python 写的算法纸面交易机器人与回测框架。经过诚实评估，它是一项关于策略测试与风险的研究——在数据表明没有可靠的实盘优势后，严格保持仅纸面交易。"
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
      "hero.eyebrow": "Neuchâtel · スイス — 新たな機会を歓迎",
      "hero.role": "実際に動く Web アプリを作っています — 8本を公開中",
      "hero.pitch": "アイデアを、人が実際に使えるソフトウェアへと形にします。現在その8本を公開中です。たとえば、6つのプログラミング言語をブラウザ上で学べるスクール、たった一文から Excel ファイルを生成するツール、本物の記憶を持つコンパニオンアプリなど。メディア研究の出身だからこそ、エンジニアだけでなく、実際に使う人のために作ります。フランス語と英語のネイティブ、スイスとアメリカの国籍を持っています。",
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
      "about.p1": "<strong>Florian Sumi</strong> と申します — スイスとアメリカの国籍を持ち、Neuchâtel 近郊を拠点にしています。日中は<strong>ローザンヌ大学で社会科学（メディア &amp; コミュニケーション）の修士課程</strong>に取り組み、それ以外の時間はソフトウェアを開発しています。",
      "about.p2": "ほぼ<strong>独学</strong>で、現代的なやり方で開発しています — つまり<strong>AI を指揮して</strong>ソフトウェアを作るということです。AI をペアプログラマーに、本物のアプリケーションを設計・プロトタイピングし、リリースまで届けます。出来上がるのはスライド資料ではなく、<strong>人が実際に開いて使える動く製品</strong>です — ブラウザ内で本物の言語エンジンを動かすコード学習プラットフォームから、一文を完成した Excel ブックに変えるツールまで。",
      "about.p3": "私のバックグラウンドは<strong>メディア・コミュニケーション研究</strong>です — だからこそ、私のソフトウェアはエンジニアだけでなく実際のユーザーのために作られています。その同じ感覚は、現場で培った<strong>小売販売・現金管理・カスタマーサービス</strong>の経験や、英語教授資格 (TEFL) にも表れています。習得が早く、確実にリリースし、漠然としたアイデアを人が使える形に変えます。",
      "about.fact.based.label": "拠点",
      "about.fact.based.value": "Marin-Epagnier, Neuchâtel",
      "about.fact.langs.label": "言語",
      "about.fact.langs.value": "フランス語（ネイティブ）· 英語（ネイティブ）· ドイツ語（学校教育）",
      "about.fact.study.label": "専攻",
      "about.fact.study.value": "社会科学修士（メディア＆コミュニケーション）— UNIL",
      "about.fact.also.label": "その他の活動",
      "about.fact.also.value": "音楽制作 (Ableton) · ライブパフォーマンス",
      "skills.tech.heading": "🛠️ 開発 & AI",
      "skills.people.heading": "🤝 対人 & プロフェッショナル",
      "timeline.experience": "経歴",
      "timeline.education": "学歴",
      "projects.lead": "モックアップではなく、実際に動くアプリケーション。9本が公開中で、すべて単独で開発しました。バッジは一般公開中か開発中かを示しています。",
      "projects.mission": "すべてに共通する一本の軸があります。オープンソース技術を誰もの手に届けること — 本来は有料のツールを、無料で使えるようにすることです。",
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
      "contact.location": "所在地",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",
      "footer.tagline": "ゼロから構築し、GitHub Pages でデプロイ。",
      "footer.top": "トップへ戻る ↑",
      "badge.live": "公開中",
      "badge.dev": "開発中",
      "badge.research": "リサーチ",
      "free.note": "無料で使え、オープンソースのスタックで構築 — サブスクや課金の壁はありません。",
      "link.live": "デモを見る ↗",
      "link.code": "コード ↗",
      "link.private": "非公開 / ローカル",
      "a11y.skip": "本文へスキップ",
      "a11y.menu": "メニューを開く",
      "a11y.lang": "言語を選択",
      "a11y.scroll": "概要セクションへスクロール",
      "a11y.home": "Florian Sumi — ホーム",
      "a11y.nav": "メインナビゲーション",
      "a11y.glance": "ひと目で見る",
      "a11y.workExp": "職務経歴",
      "a11y.education": "学歴",
      "a11y.preview": "プレビュー",
      "projects.stackNote": "使用技術（AI 支援）："
    },
    "techSkills": [
      "JavaScript と Python",
      "React Native・Next.js・Node",
      "エージェント型コーディング — AI を指揮",
      "プロンプトエンジニアリング",
      "高速プロトタイピング＆リリース",
      "プログレッシブウェブアプリ (PWA)",
      "Git と GitHub",
      "Vercel / GitHub Pages へのデプロイ",
      "プロダクト＆UX デザイン",
      "Ableton Live — 音楽制作",
      "音声・動画編集"
    ],
    "softSkills": [
      "カスタマーサービス",
      "現金管理",
      "小売販売",
      "英語教授 (TEFL)",
      "FR / EN ネイティブ · DE（学校）",
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
        "desc": "物流業務をサポート — 在庫管理、荷物の梱包と発送を担当しました。"
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
        "role": "社会科学修士 — メディア＆コミュニケーション",
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
        "desc": "ハーバード大学を代表するコンピューターサイエンス入門講座 — 現在 Python トラックを学習中です。"
      },
      {
        "role": "スイス連邦大学入学資格 — 経済＆法律",
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
        "tag": "インタラクティブ Pi 5 講座 · PWA",
        "desc": "447 ページの Raspberry Pi 5 ハンドブックを、最後までやり切れる親しみやすい講座に再構築。ブラウザ内で実際に動く手作りの Linux ターミナルと、配線できる GPIO ブレッドボードをその場で試せます。⌘K 検索、生きた用語集、クイズとバッジ、ライト／ダークの2テーマを搭載。インストール可能で完全オフライン対応。"
      },
      {
        "tag": "AI コンパニオン · Next.js + pgvector",
        "desc": "あなたについての確かで検索可能な記憶を築き、バックグラウンドのジョブを動かし続けるフルスタックの AI コンパニオン（Next.js、Postgres + pgvector）。タブを閉じた後も、内省を日記に綴り、気分を移ろわせます。実際のアカウントと本物の永続性を備えた、AI に内面を与える実験です。"
      },
      {
        "tag": "コード学習プラットフォーム · WASM/Pyodide",
        "desc": "ハッカー端末風のデザインで、6つの言語 — Python、JavaScript、TypeScript、SQL、Lua、Ruby — を教えるスクール。各言語が WebAssembly でブラウザ内に本物のエンジンを動かします。まず理論、続いてライブ採点される演習へ。ハーバードの CS50 と Dataquest をモデルにしています。"
      },
      {
        "tag": "AI で開発を学ぶ · PWA",
        "desc": "AI を指揮し、エージェント型ループを使いこなすことで、本物のソフトウェアを作る方法を教える学習プラットフォーム。体系化されたトラック、チャットできるライブ AI メンター、進捗トラッキング、そして自ら改善し続けるガイドを備えています。"
      },
      {
        "tag": "AI Excel ジェネレーター · JS + Python サーバーレス",
        "desc": "必要な内容を話すか入力するだけで、ダウンロード可能な本物の Excel ブックが手に入ります — 動く数式、合計、条件付き書式、ドロップダウン、グラフ付き。写真や PDF からデータを読み取り、どんなデバイスにもアプリとしてインストールできます。"
      },
      {
        "tag": "AI メールトリアージ · Gmail エージェント",
        "desc": "Gmail の受信トレイを1日2回トリアージする AI エージェント — 重要なメール（請求書、給与、税金、締め切り、セキュリティ）にスターとラベルを付け、返信が必要なものは下書きを作成し（送信は一切しません）、要望に応じて迷惑な送信者をブロックします。"
      },
      {
        "tag": "AI 広告ジェネレーター · マルチエージェント",
        "desc": "製品ブリーフを、すぐ使える広告クリエイティブに変えるマルチエージェントのパイプライン — 専門のエージェントがコピーを書き、シーンをデザインし、画像を生成します。各シーンは書き出し前に編集できます。"
      },
      {
        "tag": "リセールマーケットプレイス · Node/Express フルスタック",
        "desc": "スイス向けの個人間（C2C）中古ファッション・マーケットプレイス — 実際のユーザーアカウント、JWT 認証、出品、メッセージング機能を備えています。3か国語対応 (FR / DE / IT) で、PWA フロントエンドを持つ Node/Express のフルスタックアプリとして構築。現在開発中。"
      },
      {
        "tag": "ビジュアル／プロジェクションツール · WebGL",
        "desc": "WebGL と Web Audio で動く、ライブショー向けの無限ズームするサイケデリックなフラクタルビジュアライザー。内蔵のサイケトランスジェネレーターとコーナーピン式プロジェクションマッピングを組み合わせ、デスクトップのウェブアプリとして動作します。"
      },
      {
        "tag": "AI歌声コーチ · Web Audio + PWA",
        "desc": "ブラウザ完結の歌声コーチ——リアルタイムピッチチューナー、採点付き発声練習、音程練習ゲーム、13枚の理論カード、12週間トレーニングプログラム、アダプティブ日次プラン、Abletonスタジオガイド、進捗レーダーチャート、アチーブメントバッジ。オフライン対応、アプリとしてインストール可能、Android APKも提供。"
      },
      {
        "tag": "バー巡りアプリ · React Native / Expo",
        "desc": "スイス全土のすべてのバー — 3,500軒以上を州とコミューン別に整理 — を網羅したバー巡りのお供アプリ。Expo と React Native で構築し、現在 Supabase バックエンドへ移行中。開発中です。"
      },
      {
        "tag": "アルゴリズム取引リサーチ · Python",
        "desc": "Python によるアルゴリズム・ペーパートレーディングのボットとバックテスト基盤。戦略検証とリスクの研究として誠実に評価し、データが確かなライブでの優位性を示さなかったため、厳密にペーパー取引のみに留めています。"
      }
    ]
  }
};

if (typeof window !== "undefined") { window.PROJECTS_BASE = PROJECTS_BASE; window.CONTENT = CONTENT; }
