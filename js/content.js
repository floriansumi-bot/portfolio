/* ============================================================
   Florian Sumi — Portfolio content & translations
   ------------------------------------------------------------
   ONE source of truth for every word on the page, in 5 languages.
   - PROJECTS_BASE: shared, non-translated project metadata
     (name, emoji, colours, tech, links) — order matters.
   - CONTENT[lang]: { ui:{...}, techSkills:[], softSkills:[],
     experience:[], education:[], projects:[{tag,desc}] }
   Missing keys/languages fall back to English (see main.js).
   ============================================================ */

/* Shared project metadata — same in every language.
   CONTENT[lang].projects[i] supplies the translated {tag, desc}. */
const PROJECTS_BASE = [
  { name: "THE CONSTRUCT", emoji: "🧩", img: "assets/projects/construct.jpg", grad: "linear-gradient(135deg, #06b6d4, #7c3aed)", status: "live",
    tech: ["JavaScript", "WASM", "Pyodide", "SQLite", "GitHub Pages"],
    live: "https://floriansumi-bot.github.io/the-construct/", repo: "https://github.com/floriansumi-bot/the-construct" },
  { name: "The Loop Academy", emoji: "🔁", img: "assets/projects/loop.jpg", grad: "linear-gradient(135deg, #22d3ee, #6d28d9)", status: "live",
    tech: ["JavaScript", "AI agents", "PWA", "Vercel"],
    live: "https://loop-academy.vercel.app/", repo: "" },
  { name: "SheetGenie", emoji: "📊", img: "assets/projects/sheetgenie.jpg", grad: "linear-gradient(135deg, #16a34a, #22d3ee)", status: "dev",
    tech: ["Vanilla JS", "Python", "openpyxl", "Vercel", "Multimodal AI"],
    live: "", repo: "https://github.com/floriansumi-bot/sheetgenie" },
  { name: "Flaily", emoji: "📬", img: "assets/projects/flaily.jpg", grad: "linear-gradient(135deg, #6d28d9, #0891b2)", status: "live",
    tech: ["AI agent", "Gmail", "PWA", "GitHub Pages"],
    live: "https://floriansumi-bot.github.io/flaily/", repo: "" },
  { name: "AdForge", emoji: "🎨", img: "assets/projects/adforge.jpg", grad: "linear-gradient(135deg, #f59e0b, #8b5cf6)", status: "dev",
    tech: ["Multi-agent AI", "JavaScript", "Image generation"],
    live: "", repo: "" },
  { name: "SAPE", emoji: "🛍️", img: "assets/projects/sape.jpg", grad: "linear-gradient(135deg, #f472b6, #8b5cf6)", status: "dev",
    tech: ["Node", "Express", "JWT auth", "PWA", "JSON DB"],
    live: "", repo: "" },
  { name: "HyperFractal", emoji: "🌀", img: "assets/projects/hyperfractal.jpg", grad: "linear-gradient(135deg, #8b5cf6, #ec4899)", status: "dev",
    tech: ["WebGL", "Canvas", "Web Audio", "JavaScript"],
    live: "", repo: "" },
  { name: "Barathon", emoji: "🍻", img: "assets/projects/barathon.svg", grad: "linear-gradient(135deg, #f59e0b, #f472b6)", status: "dev",
    tech: ["React Native", "Expo", "Supabase"],
    live: "", repo: "" },
  { name: "Trading Assistant", emoji: "📈", img: "assets/projects/trading.svg", grad: "linear-gradient(135deg, #22d3ee, #16a34a)", status: "research",
    tech: ["Python", "Backtesting", "ccxt / IBKR", "Pandas"],
    live: "", repo: "" },
];

const CONTENT = {
  en: {
    label: "English",
    ui: {
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      "hero.eyebrow": "Neuchâtel · Switzerland — open to opportunities",
      "hero.role": "Self-taught builder & social-sciences student",
      "hero.pitch": "A humanities student who ships real software. I turn ideas into working apps — an in-browser school that teaches six programming languages, a prompt-to-Excel generator, a resale marketplace and more. A native French and English speaker — Swiss and American.",
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
      "about.p2": "I'm largely <strong>self-taught</strong>, and I work the modern way — I build software by <strong>directing AI</strong>: designing, prototyping and shipping real applications with AI as a pair-programmer. The result isn't slideware — it's <strong>working products</strong> people can open and use, from a cyberpunk code-learning platform running real language engines in the browser, to a tool that turns a sentence into a finished Excel workbook.",
      "about.p3": "Alongside the code I bring hands-on, people-facing experience — <strong>retail sales, cash handling and customer service</strong> — plus a teaching qualification (TEFL). I learn fast, I'm reliable, and I like turning a vague idea into something that ships.",
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

      "projects.lead": "Real, working applications — not mockups. Badges show what's publicly live versus still in development.",
      "projects.mission": "One thread ties them together: putting open-source technology into everyday hands — taking tools people normally have to pay for and making them free.",
      "section.music": "Music & live sets",
      "nav.music": "Music",
      "music.lead": "Self-taught on Ableton, I produce and DJ. I've grown two projects — Garage Act and Atomatek — from scratch to paid venues and festivals across Switzerland and France, including EPFL's Sysmic festival.",
      "music.more": "Full profile ↗",
      "music.play": "Play",
      "music.pause": "Pause",
      "contact.lead": "Open to internships, collaborations and interesting problems. The fastest way to reach me:",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.github": "GitHub",
      "contact.location": "Location",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",

      "footer.tagline": "Built from scratch, deployed on GitHub Pages.",
      "footer.top": "Back to top ↑",

      "badge.live": "● Live",
      "badge.dev": "In development",
      "badge.research": "Research",
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
      "projects.stackNote": "Built with (AI-assisted):",
    },
    techSkills: [
      "Agentic coding — directing AI",
      "AI pair-programming",
      "Builds with JavaScript & Python (AI-assisted)",
      "Prompt engineering",
      "Rapid prototyping & shipping",
      "Progressive Web Apps (PWAs)",
      "Git & GitHub",
      "Vercel / GitHub Pages deploy",
      "Product & UX design",
      "Ableton Live — music production",
      "Audio & video editing",
    ],
    softSkills: [
      "Customer service", "Cash handling", "Retail sales", "Teaching (TEFL)",
      "FR / EN native · DE (school)", "Fast learner", "Reliable & trustworthy",
      "Adaptable", "Self-directed", "Problem solving",
    ],
    experience: [
      { role: "Salesman & Cashier", org: "Cash n Go", meta: "Second-hand retail",
        desc: "Front-of-house sales and till operation in a second-hand store: advising customers, valuing and handling stock, and managing cash accurately." },
      { role: "Technical Documentation Intern", org: "LNS, Orvin", meta: "Machine-tools industry",
        desc: "Produced and structured technical documentation in the machine-tool domain." },
      { role: "Logistics Intern", org: "Rolex SA, Geneva", meta: "Inventory & dispatch",
        desc: "Supported logistics operations — inventory management and parcel preparation and shipping." },
      { role: "Landscaping Intern", org: "Marco Cellerini", meta: "Outdoor / grounds",
        desc: "Hands-on landscaping and grounds work." },
    ],
    education: [
      { role: "MA, Social Sciences — Media & Communication", org: "University of Lausanne (UNIL)", meta: "In progress",
        desc: "Master's in social sciences, specialising in media and communication." },
      { role: "BA, Social Sciences", org: "University of Lausanne (UNIL)", meta: "Completed",
        desc: "Bachelor's degree in social sciences." },
      { role: "CS50: Introduction to Programming with Python", org: "Harvard University (online)", meta: "In progress",
        desc: "Harvard's flagship computer-science course — currently working through the Python track." },
      { role: "Federal Maturity — Economics & Law", org: "Lycée Jean-Piaget, Neuchâtel", meta: "Diplôme de maturité gymnasiale",
        desc: "Swiss academic baccalaureate with a focus on economics and law." },
      { role: "Qualifi Level 5 Certificate (TEFL)", org: "The TEFL Academy", meta: "Teaching English as a Foreign Language",
        desc: "Professional qualification to teach English as a foreign language." },
    ],
    projects: [
      { tag: "Learn-to-code platform · PWA",
        desc: "A hacker-terminal-themed school that teaches you to code across SIX languages — Python, JavaScript, TypeScript, SQL, Lua and Ruby — each running a REAL engine inside your browser. Theory, then live-graded exercises. Modeled on Harvard's CS50 + Dataquest." },
      { tag: "Learn to build with AI · PWA",
        desc: "A learning platform that teaches you to build real software by DIRECTING AI — mastering the \"agentic loop\". Structured tracks, a live AI mentor you can chat with, progress tracking, and a guide that keeps improving itself." },
      { tag: "AI Excel generator · PWA",
        desc: "Speak or type what you need and get a real, downloadable Excel workbook — live formulas, totals, conditional formatting, dropdowns and charts. Reads data from photos and PDFs. Installs as an app on any device." },
      { tag: "AI email triage · PWA",
        desc: "An AI assistant that triages a Gmail inbox twice a day — it stars and labels the mail that matters (invoices, payroll, tax, deadlines, security), drafts the replies that need one (never sends), and can block noisy senders on request." },
      { tag: "AI ad generator · Multi-agent",
        desc: "A multi-agent AI tool that turns a product brief into ready-to-use ad creatives — a pipeline of specialised agents writes the copy, designs the scenes and generates the imagery, with every scene editable before export." },
      { tag: "Resale marketplace · Full-stack",
        desc: "A \"Swiss Vinted\" — a second-hand fashion marketplace with real user accounts, listings and messaging. Trilingual (FR / DE / IT). Built as a full-stack web app with a PWA front end." },
      { tag: "Visual / projection tool",
        desc: "An infinite-zoom psychedelic fractal visualizer for live shows and projection mapping — with a built-in psytrance generator and corner-pin projection mapping. Runs as a desktop web app." },
      { tag: "Bar-crawl app · Mobile",
        desc: "A bar-crawl companion app covering every bar in Switzerland (3,500+, organised by canton and commune). Built with Expo / React Native, moving to a Supabase backend." },
      { tag: "Algo trading research",
        desc: "An algorithmic paper-trading bot and research harness (Python). Honestly evaluated: a study in strategy back-testing and risk — kept strictly paper-only after the data showed no reliable live edge." },
    ],
  },

  fr: {
    "label": "Français",
    "ui": {
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.experience": "Parcours",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      "hero.eyebrow": "Neuchâtel · Suisse — ouvert aux opportunités",
      "hero.role": "Créateur autodidacte & étudiant en sciences sociales",
      "hero.pitch": "Un étudiant en sciences humaines qui livre de vraies applications. Je transforme des idées en applications qui fonctionnent — une école dans le navigateur qui enseigne six langages de programmation, un générateur Excel à partir d'une simple phrase, une marketplace de seconde main et bien d'autres. Francophone et anglophone de langue maternelle, de nationalité suisse et américaine.",
      "hero.cta.work": "Voir mes réalisations",
      "hero.cta.cv": "Télécharger le CV",
      "hero.cta.contact": "Contact",
      "hero.stat.apps": "projets",
      "hero.stat.live": "en ligne",
      "hero.stat.langs": "langues maternelles",
      "section.about": "À propos",
      "section.skills": "Ce que j'apporte",
      "section.experience": "Parcours & formation",
      "section.projects": "Ce que j'ai créé",
      "section.contact": "Me contacter",
      "about.p1": "Je suis <strong>Florian Sumi</strong> — Suisse et Américain, basé près de Neuchâtel. Le jour, je prépare un <strong>Master en sciences sociales (Médias &amp; Communication) à l'Université de Lausanne (UNIL)</strong> ; le reste du temps, je développe des logiciels.",
      "about.p2": "Je suis en grande partie <strong>autodidacte</strong>, et je travaille à la manière d'aujourd'hui — je crée des logiciels en <strong>pilotant l'IA</strong> : je conçois, prototype et livre de vraies applications avec l'IA comme partenaire de programmation. Le résultat, ce ne sont pas des maquettes — ce sont des <strong>produits qui fonctionnent</strong>, que l'on peut ouvrir et utiliser : d'une plateforme cyberpunk d'apprentissage du code qui fait tourner de vrais moteurs de langage dans le navigateur, à un outil qui transforme une phrase en un classeur Excel terminé.",
      "about.p3": "À côté du code, j'apporte une expérience concrète et tournée vers les autres — <strong>vente en magasin, gestion de la caisse et service client</strong> — ainsi qu'une qualification d'enseignement (TEFL). J'apprends vite, je suis fiable, et j'aime transformer une idée floue en quelque chose qui se concrétise.",
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
      "projects.lead": "De vraies applications qui fonctionnent — pas des maquettes. Les badges indiquent ce qui est en ligne publiquement par rapport à ce qui est encore en développement.",
      "projects.mission": "Un fil rouge les relie : mettre la technologie open source entre les mains de tous — prendre des outils habituellement payants et les rendre gratuits.",
      "section.music": "Musique & lives",
      "nav.music": "Musique",
      "music.lead": "Autodidacte sur Ableton, je produis et je mixe. J'ai développé deux projets — Garage Act et Atomatek — depuis zéro jusqu'à des salles et festivals rémunérés en Suisse et en France, dont le festival Sysmic de l'EPFL.",
      "music.more": "Profil complet ↗",
      "music.play": "Lecture",
      "music.pause": "Pause",
      "contact.lead": "Ouvert aux stages, aux collaborations et aux problèmes intéressants. Le moyen le plus rapide de me joindre :",
      "contact.email": "E-mail",
      "contact.phone": "Téléphone",
      "contact.github": "GitHub",
      "contact.location": "Localisation",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",
      "footer.tagline": "Conçu de A à Z, déployé sur GitHub Pages.",
      "footer.top": "Retour en haut ↑",
      "badge.live": "● En ligne",
      "badge.dev": "En développement",
      "badge.research": "Recherche",
      "link.live": "Démo en ligne ↗",
      "link.code": "Code ↗",
      "link.private": "Privé / local",
      "a11y.skip": "Aller au contenu",
      "a11y.menu": "Ouvrir le menu",
      "a11y.lang": "Choisir la langue",
      "a11y.scroll": "Défiler jusqu'à la section À propos",
      "a11y.home": "Florian Sumi — accueil",
      "a11y.nav": "Navigation principale",
      "a11y.glance": "En un coup d'œil",
      "a11y.workExp": "Expérience professionnelle",
      "a11y.education": "Formation",
      "projects.stackNote": "Réalisé avec (assisté par IA) :"
    },
    "techSkills": [
      "Développement agentique — piloter l'IA",
      "Programmation en binôme avec l'IA",
      "Développe en JavaScript & Python (assisté par IA)",
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
        "desc": "Vente en boutique et tenue de la caisse dans un magasin de seconde main : conseil à la clientèle, estimation et gestion du stock, et tenue rigoureuse de la caisse."
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
        "desc": "Travaux pratiques d'aménagement paysager et d'entretien des espaces verts."
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
        "role": "CS50 : Introduction à la programmation avec Python",
        "org": "Harvard University (en ligne)",
        "meta": "En cours",
        "desc": "Le cours d'informatique phare de Harvard — actuellement en train de suivre le parcours Python."
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
        "meta": "Enseignement de l'anglais langue étrangère",
        "desc": "Qualification professionnelle pour enseigner l'anglais en tant que langue étrangère."
      }
    ],
    "projects": [
      {
        "tag": "Plateforme d'apprentissage du code · PWA",
        "desc": "Une école à l'esthétique terminal de hacker qui vous apprend à coder dans SIX langages — Python, JavaScript, TypeScript, SQL, Lua et Ruby — chacun exécutant un VRAI moteur directement dans votre navigateur. La théorie, puis des exercices corrigés en direct. Inspirée du CS50 de Harvard + Dataquest."
      },
      {
        "tag": "Apprendre à créer avec l'IA · PWA",
        "desc": "Une plateforme d'apprentissage qui vous apprend à créer de vrais logiciels en PILOTANT l'IA — en maîtrisant la « boucle agentique ». Des parcours structurés, un mentor IA en direct avec qui dialoguer, un suivi de progression, et un guide qui ne cesse de s'améliorer lui-même."
      },
      {
        "tag": "Générateur Excel par IA · PWA",
        "desc": "Dictez ou tapez ce dont vous avez besoin et obtenez un vrai classeur Excel téléchargeable — formules en direct, totaux, mise en forme conditionnelle, listes déroulantes et graphiques. Lit les données depuis des photos et des PDF. S'installe comme une application sur n'importe quel appareil."
      },
      {
        "tag": "Triage des e-mails par IA · PWA",
        "desc": "Un assistant IA qui trie une boîte Gmail deux fois par jour — il met en favori et étiquette les messages qui comptent (factures, paie, impôts, échéances, sécurité), rédige les réponses nécessaires (sans jamais les envoyer) et peut bloquer les expéditeurs indésirables à la demande."
      },
      {
        "tag": "Générateur de publicités par IA · Multi-agents",
        "desc": "Un outil d'IA multi-agents qui transforme un brief produit en créations publicitaires prêtes à l'emploi — un pipeline d'agents spécialisés rédige les textes, conçoit les scènes et génère les visuels, chaque scène restant modifiable avant l'export."
      },
      {
        "tag": "Marketplace de seconde main · Full-stack",
        "desc": "Un « Vinted suisse » — une marketplace de mode d'occasion avec de vrais comptes utilisateurs, des annonces et une messagerie. Trilingue (FR / DE / IT). Conçue comme une application web full-stack avec un front-end PWA."
      },
      {
        "tag": "Outil visuel / de projection",
        "desc": "Un visualiseur de fractales psychédéliques à zoom infini pour les concerts live et le mapping vidéo — avec un générateur de psytrance intégré et un mapping de projection par corner-pin. Fonctionne comme une application web de bureau."
      },
      {
        "tag": "Appli de tournée des bars · Mobile",
        "desc": "Une appli compagnon de tournée des bars couvrant tous les bars de Suisse (plus de 3 500, organisés par canton et commune). Développée avec Expo / React Native, en migration vers un backend Supabase."
      },
      {
        "tag": "Recherche en trading algorithmique",
        "desc": "Un bot de paper-trading algorithmique et un banc d'essai de recherche (Python). Évalué en toute honnêteté : une étude de backtesting de stratégies et de gestion du risque — maintenu strictement en paper-trading après que les données ont montré l'absence d'avantage fiable en conditions réelles."
      }
    ]
  },
  de: {
    "label": "Deutsch",
    "ui": {
      "nav.about": "Über mich",
      "nav.skills": "Kompetenzen",
      "nav.experience": "Erfahrung",
      "nav.projects": "Projekte",
      "nav.contact": "Kontakt",
      "hero.eyebrow": "Neuenburg · Schweiz — offen für neue Chancen",
      "hero.role": "Autodidaktischer Entwickler & Student der Sozialwissenschaften",
      "hero.pitch": "Ein Student der Geisteswissenschaften, der echte Software ausliefert. Ich verwandle Ideen in funktionierende Apps — eine Schule im Browser, die sechs Programmiersprachen unterrichtet, einen Generator, der aus Text Excel-Dateien macht, einen Second-Hand-Marktplatz und mehr. Französisch und Englisch als Muttersprache, Schweizer und US-amerikanischer Staatsbürger.",
      "hero.cta.work": "Meine Arbeiten ansehen",
      "hero.cta.cv": "Lebenslauf herunterladen",
      "hero.cta.contact": "Kontakt",
      "hero.stat.apps": "Projekte",
      "hero.stat.live": "live online",
      "hero.stat.langs": "Muttersprachen",
      "section.about": "Über mich",
      "section.skills": "Was ich mitbringe",
      "section.experience": "Erfahrung & Ausbildung",
      "section.projects": "Was ich gebaut habe",
      "section.contact": "Kontakt aufnehmen",
      "about.p1": "Ich bin <strong>Florian Sumi</strong> — Schweizer und Amerikaner, wohnhaft in der Nähe von Neuenburg. Tagsüber absolviere ich einen <strong>Master in Sozialwissenschaften (Medien &amp; Kommunikation) an der Universität Lausanne (UNIL)</strong>; in der übrigen Zeit entwickle ich Software.",
      "about.p2": "Ich bin grösstenteils <strong>Autodidakt</strong> und arbeite auf moderne Weise — ich entwickle Software, indem ich <strong>KI steuere</strong>: Ich entwerfe, prototypisiere und liefere echte Anwendungen aus, mit KI als Pair-Programmer. Das Ergebnis sind keine Präsentationsfolien, sondern <strong>funktionierende Produkte</strong>, die man öffnen und nutzen kann — von einer Cyberpunk-Plattform zum Programmierenlernen, die echte Sprach-Engines im Browser ausführt, bis zu einem Tool, das aus einem Satz eine fertige Excel-Arbeitsmappe macht.",
      "about.p3": "Neben dem Code bringe ich praktische Erfahrung im direkten Umgang mit Menschen mit — <strong>Verkauf im Einzelhandel, Kassenführung und Kundenservice</strong> — sowie eine Lehrqualifikation (TEFL). Ich lerne schnell, bin zuverlässig und mag es, aus einer vagen Idee etwas zu machen, das tatsächlich ausgeliefert wird.",
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
      "projects.lead": "Echte, funktionierende Anwendungen — keine Mockups. Die Badges zeigen, was öffentlich live ist und was sich noch in Entwicklung befindet.",
      "projects.mission": "Ein roter Faden verbindet sie alle: quelloffene Technologie in die Hände aller zu legen — Werkzeuge, für die man normalerweise zahlt, kostenlos zu machen.",
      "section.music": "Musik & Live-Sets",
      "nav.music": "Musik",
      "music.lead": "Autodidakt an Ableton, produziere ich und lege auf. Zwei Projekte — Garage Act und Atomatek — habe ich von Grund auf aufgebaut und auf bezahlte Bühnen und Festivals in der Schweiz und in Frankreich gebracht, darunter das Sysmic-Festival der EPFL.",
      "music.more": "Vollständiges Profil ↗",
      "music.play": "Abspielen",
      "music.pause": "Pause",
      "contact.lead": "Offen für Praktika, Kooperationen und spannende Aufgaben. Am schnellsten erreichen Sie mich so:",
      "contact.email": "E-Mail",
      "contact.phone": "Telefon",
      "contact.github": "GitHub",
      "contact.location": "Standort",
      "contact.location.value": "Marin-Epagnier, Neuenburg",
      "footer.tagline": "Von Grund auf selbst gebaut, bereitgestellt auf GitHub Pages.",
      "footer.top": "Nach oben ↑",
      "badge.live": "● Live",
      "badge.dev": "In Entwicklung",
      "badge.research": "Forschung",
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
      "projects.stackNote": "Erstellt mit (KI-gestützt):"
    },
    "techSkills": [
      "KI-gestützte Entwicklung — KI steuern",
      "Pair-Programming mit KI",
      "Entwicklung mit JavaScript & Python (KI-gestützt)",
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
        "tag": "Plattform zum Programmierenlernen · PWA",
        "desc": "Eine Schule im Hacker-Terminal-Look, die Ihnen das Programmieren in SECHS Sprachen beibringt — Python, JavaScript, TypeScript, SQL, Lua und Ruby — jede mit einer ECHTEN Engine direkt in Ihrem Browser. Erst Theorie, dann live bewertete Übungen. Inspiriert von Harvards CS50 + Dataquest."
      },
      {
        "tag": "Mit KI bauen lernen · PWA",
        "desc": "Eine Lernplattform, die Ihnen beibringt, echte Software durch das STEUERN VON KI zu entwickeln — und den «Agentic Loop» zu meistern. Strukturierte Lernpfade, ein interaktiver KI-Mentor zum Chatten, Fortschrittsverfolgung und ein Leitfaden, der sich selbst laufend verbessert."
      },
      {
        "tag": "KI-Excel-Generator · PWA",
        "desc": "Sagen oder tippen Sie, was Sie brauchen, und erhalten Sie eine echte, herunterladbare Excel-Arbeitsmappe — mit aktiven Formeln, Summen, bedingter Formatierung, Dropdowns und Diagrammen. Liest Daten aus Fotos und PDFs. Lässt sich als App auf jedem Gerät installieren."
      },
      {
        "tag": "KI-E-Mail-Triage · PWA",
        "desc": "Ein KI-Assistent, der ein Gmail-Postfach zweimal täglich sortiert — er markiert und beschriftet die wichtige Post (Rechnungen, Lohnabrechnungen, Steuern, Fristen, Sicherheit), entwirft die Antworten, die eine erfordern (sendet aber nie), und kann auf Wunsch lästige Absender blockieren."
      },
      {
        "tag": "KI-Werbegenerator · Multi-Agent",
        "desc": "Ein Multi-Agent-KI-Tool, das aus einem Produkt-Briefing einsatzbereite Werbe-Creatives macht — eine Pipeline spezialisierter Agenten schreibt die Texte, gestaltet die Szenen und generiert die Bilder, wobei sich jede Szene vor dem Export bearbeiten lässt."
      },
      {
        "tag": "Second-Hand-Marktplatz · Full-Stack",
        "desc": "Ein «Schweizer Vinted» — ein Second-Hand-Modemarktplatz mit echten Benutzerkonten, Inseraten und Nachrichten. Dreisprachig (FR / DE / IT). Als Full-Stack-Webanwendung mit PWA-Frontend gebaut."
      },
      {
        "tag": "Visualisierungs- / Projektions-Tool",
        "desc": "Ein psychedelischer Fraktal-Visualizer mit unendlichem Zoom für Live-Shows und Projection-Mapping — mit integriertem Psytrance-Generator und Corner-Pin-Projection-Mapping. Läuft als Desktop-Webanwendung."
      },
      {
        "tag": "Bar-Crawl-App · Mobile",
        "desc": "Eine Begleit-App für Bar-Crawls, die jede Bar der Schweiz abdeckt (über 3'500, geordnet nach Kanton und Gemeinde). Gebaut mit Expo / React Native, in Umstellung auf ein Supabase-Backend."
      },
      {
        "tag": "Forschung zu algorithmischem Trading",
        "desc": "Ein algorithmischer Paper-Trading-Bot und Forschungsgerüst (Python). Ehrlich evaluiert: eine Studie zu Strategie-Backtesting und Risiko — strikt auf Paper-Trading beschränkt, nachdem die Daten keinen verlässlichen Vorteil im Echtbetrieb zeigten."
      }
    ]
  },
  zh: {
    "label": "中文",
    "ui": {
      "nav.about": "关于",
      "nav.skills": "技能",
      "nav.experience": "经历",
      "nav.projects": "项目",
      "nav.contact": "联系",
      "hero.eyebrow": "纳沙泰尔 · 瑞士 — 欢迎合作机会",
      "hero.role": "自学成才的开发者 & 社会科学专业学生",
      "hero.pitch": "一名能交付真实软件的人文学科学生。我把想法变成可用的应用——一所在浏览器里教你六种编程语言的学校、一个把文字生成 Excel 的工具、一个二手交易市场，以及更多。法语和英语母语者，拥有瑞士和美国双重国籍。",
      "hero.cta.work": "查看我的作品",
      "hero.cta.cv": "下载简历",
      "hero.cta.contact": "联系我",
      "hero.stat.apps": "个项目",
      "hero.stat.live": "个已上线",
      "hero.stat.langs": "种母语",
      "section.about": "关于我",
      "section.skills": "我能带来什么",
      "section.experience": "经历与教育",
      "section.projects": "我做过的东西",
      "section.contact": "取得联系",
      "about.p1": "我是<strong>Florian Sumi</strong>——瑞士与美国双重国籍，定居在纳沙泰尔附近。白天我在<strong>洛桑大学攻读社会科学硕士（媒体与传播方向）</strong>；其余时间我都在做软件开发。",
      "about.p2": "我基本上是<strong>自学成才</strong>，并以现代的方式工作——我通过<strong>驾驭 AI</strong> 来构建软件：以 AI 作为结对编程伙伴，设计、做原型并交付真实的应用。成果不是徒有其表的演示稿，而是<strong>能用的产品</strong>，人们打开即用——从一个在浏览器中运行真实语言引擎的赛博朋克编程学习平台，到一个把一句话变成完整 Excel 工作簿的工具。",
      "about.p3": "除了写代码，我还拥有亲力亲为、直面客户的实战经验——<strong>零售销售、现金管理与客户服务</strong>——外加一份教学资格证（TEFL）。我学得快、靠得住，喜欢把模糊的想法做成真正能落地的东西。",
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
      "projects.lead": "真实可用的应用——而非设计稿。徽章标明哪些已公开上线、哪些仍在开发中。",
      "projects.mission": "它们有一条共同的主线：把开源技术带到每个人手中——把通常需要付费的工具变成免费的。",
      "section.music": "音乐与现场",
      "nav.music": "音乐",
      "music.lead": "我自学 Ableton，做音乐制作与 DJ。我从零打造了两个项目——Garage Act 和 Atomatek——并把它们带上瑞士和法国的付费演出与音乐节，包括 EPFL 的 Sysmic 音乐节。",
      "music.more": "完整主页 ↗",
      "music.play": "播放",
      "music.pause": "暂停",
      "contact.lead": "欢迎实习、合作以及有意思的难题。联系我最快的方式：",
      "contact.email": "邮箱",
      "contact.phone": "电话",
      "contact.github": "GitHub",
      "contact.location": "所在地",
      "contact.location.value": "Marin-Epagnier，纳沙泰尔",
      "footer.tagline": "从零搭建，部署于 GitHub Pages。",
      "footer.top": "回到顶部 ↑",
      "badge.live": "● 已上线",
      "badge.dev": "开发中",
      "badge.research": "研究中",
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
      "projects.stackNote": "构建技术（AI 辅助）："
    },
    "techSkills": [
      "智能体编程 — 驾驭 AI",
      "AI 结对编程",
      "用 JavaScript 与 Python 构建（AI 辅助）",
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
        "tag": "编程学习平台 · PWA",
        "desc": "一所黑客终端风格的学校，教你跨六种语言写代码——Python、JavaScript、TypeScript、SQL、Lua 和 Ruby——每一种都在你的浏览器里运行真实的引擎。先讲理论，再做实时评分的练习。借鉴了哈佛 CS50 + Dataquest 的模式。"
      },
      {
        "tag": "用 AI 构建软件 · PWA",
        "desc": "一个学习平台，教你通过驾驭 AI 来构建真实软件——掌握“智能体循环”。结构化的学习路线、一位可对话的实时 AI 导师、进度追踪，以及一份会不断自我完善的指南。"
      },
      {
        "tag": "AI Excel 生成器 · PWA",
        "desc": "说出或输入你的需求，即可得到一份真实、可下载的 Excel 工作簿——含实时公式、汇总、条件格式、下拉菜单和图表。可从照片和 PDF 中读取数据。可作为应用安装到任意设备上。"
      },
      {
        "tag": "AI 邮件分拣 · PWA",
        "desc": "一位 AI 助手，每天两次为 Gmail 收件箱分拣邮件——给重要邮件加星标和标签（发票、工资、税务、截止日期、安全），为需要回复的邮件起草回信（绝不发送），还能在你需要时屏蔽吵闹的发件人。"
      },
      {
        "tag": "AI 广告生成器 · 多智能体",
        "desc": "一款多智能体 AI 工具，把产品简报变成可直接使用的广告创意——由一条专职智能体流水线撰写文案、设计场景并生成图像，每个场景在导出前都可编辑。"
      },
      {
        "tag": "二手交易市场 · 全栈",
        "desc": "一个“瑞士版 Vinted”——带有真实用户账户、商品发布和消息功能的二手时尚交易市场。三语界面（法/德/意）。以全栈 Web 应用构建，前端为 PWA。"
      },
      {
        "tag": "视觉 / 投影工具",
        "desc": "一款用于现场演出和投影映射的无限缩放迷幻分形可视化工具——内置 psytrance 生成器与四角定位投影映射。以桌面 Web 应用运行。"
      },
      {
        "tag": "酒吧巡游应用 · 移动端",
        "desc": "一款酒吧巡游伴侣应用，覆盖瑞士的每一家酒吧（3500+，按州和市镇组织）。用 Expo / React Native 构建，正迁移至 Supabase 后端。"
      },
      {
        "tag": "算法交易研究",
        "desc": "一个算法纸面交易机器人与研究框架（Python）。诚实评估：一项关于策略回测与风险的研究——在数据表明没有可靠的实盘优势后，严格保持仅纸面交易。"
      }
    ]
  },
  ja: {
    "label": "日本語",
    "ui": {
      "nav.about": "概要",
      "nav.skills": "スキル",
      "nav.experience": "経歴",
      "nav.projects": "プロジェクト",
      "nav.contact": "お問い合わせ",
      "hero.eyebrow": "Neuchâtel · スイス — 新たな機会を歓迎",
      "hero.role": "独学のビルダー／社会科学専攻の学生",
      "hero.pitch": "実際に動くソフトウェアを世に出す人文系の学生です。アイデアを動くアプリへと形にします — 6つのプログラミング言語を学べるブラウザ内スクール、プロンプトから Excel を生成するツール、リセールマーケットプレイスなど。フランス語と英語のネイティブスピーカーで、スイスとアメリカの国籍を持っています。",
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
      "about.p1": "<strong>Florian Sumi</strong> と申します — スイスとアメリカの国籍を持ち、Neuchâtel 近郊を拠点にしています。日中は<strong>ローザンヌ大学 (UNIL) で社会科学（メディア＆コミュニケーション）の修士課程</strong>に取り組み、それ以外の時間はソフトウェアを開発しています。",
      "about.p2": "ほぼ<strong>独学</strong>で、現代的なやり方で仕事をしています — 私は<strong>AI を指揮する</strong>ことでソフトウェアを開発します。AI をペアプログラマーとして、設計・プロトタイピング・リリースまで本物のアプリケーションを形にします。出来上がるのはスライド資料ではなく、人が実際に開いて使える<strong>動く製品</strong>です — ブラウザ内で本物の言語エンジンを動かすサイバーパンク風のコード学習プラットフォームから、一文を完成した Excel ブックに変えるツールまで。",
      "about.p3": "コードに加えて、人と接する現場の経験もあります — <strong>小売販売、現金管理、カスタマーサービス</strong> — さらに英語教授資格 (TEFL) も保有しています。私は習得が早く、信頼でき、漠然としたアイデアを実際に出荷できる形にするのが得意です。",
      "about.fact.based.label": "拠点",
      "about.fact.based.value": "Marin-Epagnier, Neuchâtel",
      "about.fact.langs.label": "言語",
      "about.fact.langs.value": "フランス語（ネイティブ）· 英語（ネイティブ）· ドイツ語（学校教育）",
      "about.fact.study.label": "専攻",
      "about.fact.study.value": "社会科学修士（メディア＆コミュニケーション）— UNIL",
      "about.fact.also.label": "その他の活動",
      "about.fact.also.value": "音楽制作 (Ableton) · ライブパフォーマンス",
      "skills.tech.heading": "🛠️ 開発＆AI",
      "skills.people.heading": "🤝 対人＆プロフェッショナル",
      "timeline.experience": "経歴",
      "timeline.education": "学歴",
      "projects.lead": "モックアップではなく、実際に動くアプリケーション。バッジは一般公開中か開発中かを示しています。",
      "projects.mission": "すべてに共通する想いがあります。オープンソース技術を誰もの手に届け、本来は有料のツールを無料で使えるようにすることです。",
      "section.music": "音楽 & ライブ",
      "nav.music": "音楽",
      "music.lead": "Ableton は独学で、音楽制作と DJ をしています。Garage Act と Atomatek という2つのプロジェクトをゼロから育て、スイスとフランスの有料公演やフェス（EPFL の Sysmic フェスティバルなど）に出演してきました。",
      "music.more": "プロフィールを見る ↗",
      "music.play": "再生",
      "music.pause": "一時停止",
      "contact.lead": "インターンシップ、コラボレーション、面白い課題を歓迎します。最も早く連絡が取れる方法はこちら：",
      "contact.email": "メール",
      "contact.phone": "電話",
      "contact.github": "GitHub",
      "contact.location": "所在地",
      "contact.location.value": "Marin-Epagnier, Neuchâtel",
      "footer.tagline": "ゼロから構築し、GitHub Pages でデプロイ。",
      "footer.top": "トップへ戻る ↑",
      "badge.live": "● 公開中",
      "badge.dev": "開発中",
      "badge.research": "リサーチ",
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
      "projects.stackNote": "使用技術（AI 支援）："
    },
    "techSkills": [
      "エージェント型コーディング — AI を指揮する開発",
      "AI ペアプログラミング",
      "JavaScript と Python で開発（AI 支援）",
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
        "tag": "コード学習プラットフォーム · PWA",
        "desc": "ハッカー端末風のデザインで、6つの言語 — Python、JavaScript、TypeScript、SQL、Lua、Ruby — でコーディングを学べるスクール。それぞれがブラウザ内で本物のエンジンを動かします。理論を学び、その後ライブ採点される演習へ。ハーバードの CS50 と Dataquest をモデルにしています。"
      },
      {
        "tag": "AI で開発を学ぶ · PWA",
        "desc": "AI を指揮することで本物のソフトウェアを開発する方法を教える学習プラットフォーム — 「エージェント型ループ」を習得します。体系化されたトラック、チャットできるライブ AI メンター、進捗トラッキング、そして自ら改善し続けるガイドを備えています。"
      },
      {
        "tag": "AI Excel ジェネレーター · PWA",
        "desc": "必要な内容を話すか入力すると、ダウンロード可能な本物の Excel ブックが手に入ります — 動く数式、合計、条件付き書式、ドロップダウン、グラフ付き。写真や PDF からデータを読み取り、どんなデバイスにもアプリとしてインストールできます。"
      },
      {
        "tag": "AI メールトリアージ · PWA",
        "desc": "Gmail の受信トレイを1日2回トリアージする AI アシスタント — 重要なメール（請求書、給与、税金、締め切り、セキュリティ）にスターとラベルを付け、返信が必要なものは下書きを作成し（送信はしません）、要望に応じて迷惑な送信者をブロックできます。"
      },
      {
        "tag": "AI 広告ジェネレーター · マルチエージェント",
        "desc": "製品ブリーフをすぐ使える広告クリエイティブに変えるマルチエージェント AI ツール — 専門エージェントのパイプラインがコピーを書き、シーンをデザインし、画像を生成します。各シーンは書き出し前に編集可能です。"
      },
      {
        "tag": "リセールマーケットプレイス · フルスタック",
        "desc": "「スイス版 Vinted」— 実際のユーザーアカウント、出品、メッセージング機能を備えた中古ファッションのマーケットプレイス。3か国語対応 (FR / DE / IT)。PWA フロントエンドを持つフルスタックのウェブアプリとして構築しました。"
      },
      {
        "tag": "ビジュアル／プロジェクションツール",
        "desc": "ライブショーやプロジェクションマッピング向けの、無限ズームするサイケデリックなフラクタルビジュアライザー — 内蔵のサイケトランスジェネレーターとコーナーピン式プロジェクションマッピングを搭載。デスクトップのウェブアプリとして動作します。"
      },
      {
        "tag": "バー巡りアプリ · モバイル",
        "desc": "スイス全土のすべてのバー（3,500軒以上、州とコミューン別に整理）を網羅したバー巡りのお供アプリ。Expo / React Native で構築し、現在 Supabase バックエンドへ移行中です。"
      },
      {
        "tag": "アルゴリズム取引リサーチ",
        "desc": "アルゴリズムによるペーパートレーディングのボットとリサーチ基盤 (Python)。誠実に評価しました — 戦略のバックテストとリスクに関する研究であり、データが確かなライブでの優位性を示さなかったため、厳密にペーパー取引のみに留めています。"
      }
    ]
  },
};

if (typeof window !== "undefined") { window.PROJECTS_BASE = PROJECTS_BASE; window.CONTENT = CONTENT; }
