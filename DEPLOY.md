# Putting your portfolio online (so anyone can visit it)

You chose **Vercel** — it's free, fast, and the same host you already use for SheetGenie.
Pick **Option A** (no terminal) unless you're comfortable with the command line.

---

## Option A — Drag & drop / GitHub (easiest, no terminal)

### A1. Fastest: drag-and-drop
1. Go to **https://vercel.com** and sign in (you can use your GitHub account).
2. Click **Add New… → Project**.
3. Choose **"Deploy a folder"** / drag the whole **`portfolio`** folder onto the page.
4. Click **Deploy**. In ~30 seconds you get a public link like
   `https://portfolio-xxxx.vercel.app` — that's your live site. Share it with anyone.

### A2. Recommended: connect it to GitHub (so updates auto-publish)
1. Create a new GitHub repo (e.g. `portfolio`) under your account **floriansumi-bot**.
2. Upload the contents of the `portfolio` folder to it
   (GitHub's website has an **"uploading an existing file"** drag-and-drop too).
3. On Vercel: **Add New… → Project → Import** that repo → **Deploy**.
4. From now on, every time you change a file on GitHub, Vercel republishes automatically.

---

## Option B — Terminal (for when you're ready)

```bash
cd portfolio
npm i -g vercel      # one-time install
vercel               # follow the prompts, accept the defaults
vercel --prod        # publish to your public URL
```

---

## Give it a nicer address (optional)

Vercel lets you rename the project so the URL becomes something like
`https://florian-sumi.vercel.app`:

1. Open the project on Vercel → **Settings → Domains** (or **Project Name**).
2. Rename the project, or add a custom domain you own (e.g. `floriansumi.com`) and follow
   the DNS steps Vercel shows you.

> Tip: after you pick the final URL, update the two `https://floriansumi.vercel.app` lines
> near the top of `index.html` (the `og:url` and `canonical` tags) so link previews are correct.

---

## After it's live — quick checklist
- [ ] Open the link on your **phone** — check it looks good and the menu works.
- [ ] Click **Download CV** — confirm the PDF opens.
- [ ] Try the **THE CONSTRUCT → Live demo** button.
- [ ] Paste the link into WhatsApp/LinkedIn to see the share preview card.
- [ ] When SheetGenie / SAPE go live, paste their URLs into `js/main.js` (`live:` lines).
