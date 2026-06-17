# Florian Sumi — Portfolio

A public online portfolio that doubles as an interactive CV and a gallery of the apps I've built.

**Stack:** plain HTML + CSS + vanilla JavaScript. No build step, no framework, no dependencies.
That means it loads fast and deploys anywhere static files are served.

## Structure

```
portfolio/
├─ index.html          ← the page (structure + content)
├─ css/styles.css      ← all styling (dark, animated, responsive)
├─ js/main.js          ← project data + animations  ← EDIT DATA HERE
├─ assets/
│  ├─ profile.jpg          ← your photo (swap to update)
│  ├─ favicon.svg          ← browser tab icon
│  ├─ og-image.svg         ← preview image when the link is shared
│  └─ Florian-Sumi-CV.pdf  ← the downloadable CV
├─ vercel.json         ← hosting config (caching, clean URLs)
└─ DEPLOY.md           ← step-by-step: how to put it online
```

## How to change things (no coding needed for content)

Almost everything you'd want to update lives in **`js/main.js`** at the top, in plain lists:

- **Skills** — `TECH_SKILLS` and `SOFT_SKILLS`
- **Work history** — `EXPERIENCE`
- **Education** — `EDUCATION`
- **Projects** — `PROJECTS` (name, description, tech, status badge, and the live/code links)

To mark a project as live, just paste its URL into that project's `live: "…"` line and the
**Live demo** button appears automatically.

To change your photo: replace `assets/profile.jpg` with any square image of the same name.

## Run it locally

Double-click `index.html`, or serve it:

```bash
cd portfolio
python -m http.server 8000   # then open http://localhost:8000
```

## Put it online

See **[DEPLOY.md](DEPLOY.md)** — the easiest path is Vercel (free), in about 5 minutes.
