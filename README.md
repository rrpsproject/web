# RRPS — Rising Researchers in Psychedelic Science

The website for **RRPS**, an academic initiative connecting students and
early-career researchers in psychedelic science across Israel.

This guide walks you through running the website on your own computer, step by
step. **No prior programming experience is needed** — just follow along in
order.

---

## What you'll do (overview)

1. Install one free tool called **Node.js** (a one-time setup).
2. Open a **Terminal** and go into this project's folder.
3. Run two commands: one to download the project's parts, one to start it.
4. Open the website in your web browser.

The whole thing takes about 10 minutes the first time.

---

## Step 1 — Install Node.js (one time only)

Node.js is the engine that runs this website on your computer. It also includes
a helper called **npm** that we'll use below.

1. Go to **https://nodejs.org**
2. Download the version labeled **"LTS"** (Long Term Support — the recommended,
   stable one). You need version **20.9 or newer**; the LTS download will be fine.
3. Open the downloaded file and click through the installer (keep all the
   default options).

**To check it worked:** open a Terminal (see Step 2) and type:

```bash
node --version
```

Press Enter. If you see a number like `v20.9.0` or higher, you're set. If you
instead see "command not found", the installation didn't finish — restart your
computer and try the installer again.

---

## Step 2 — Open a Terminal

The Terminal is a text window where you type commands.

- **Mac:** Press `Cmd` + `Space`, type `Terminal`, and press Enter.
- **Windows:** Press the Start button, type `PowerShell`, and press Enter.

A window with a blinking cursor will appear. This is where you'll type the
commands in the next steps.

---

## Step 3 — Go into the project folder

In the Terminal, you need to move into the folder that contains this project
(the folder with this README file in it).

Type `cd ` (the letters c, d, then a space), then drag the project folder from
your file browser (Finder / File Explorer) directly onto the Terminal window and
release. The folder's location will fill in automatically. Then press Enter.

It will look something like this:

```bash
cd /Users/yourname/Downloads/psychedelic-conference-site
```

> **Tip:** You can confirm you're in the right place by typing `ls` (Mac) or
> `dir` (Windows) and pressing Enter — you should see `README.md` and a `src`
> folder listed.

---

## Step 4 — Download the project's parts (one time, and after updates)

This command downloads all the pieces the website needs to run. Type it and
press Enter:

```bash
npm install
```

Wait for it to finish — it may take a minute or two and print a lot of text.
That's normal. You only need to do this the first time (and again if the project
is updated later).

---

## Step 5 — Start the website

Now start it up:

```bash
npm run dev
```

After a few seconds you'll see a message like:

```
▲ Next.js 16
- Local:  http://localhost:3000
✓ Ready
```

The website is now running. **Leave this Terminal window open** — closing it
stops the website.

---

## Step 6 — Open it in your browser

Look at the message from Step 5 and find the line that starts with **`Local:`**.
It shows a web address like `http://localhost:3000`.

Open your web browser (Chrome, Safari, Edge…) and type that exact address into
the address bar, then press Enter.

> **Important:** The number at the end might not be `3000`. If something else is
> already using that number, Next.js picks another one (like `3001`) and shows
> it on that `Local:` line. Always use the address shown in **your** Terminal.

You should now see the RRPS website. 🎉

As you or a developer edit the files, the page updates by itself — no need to
restart.

---

## Stopping and restarting

- **To stop the website:** click the Terminal window and press `Ctrl` + `C`
  (this is the same on Mac and Windows).
- **To start it again later:** open a Terminal, do Step 3 (go into the folder)
  again, then run `npm run dev`. You do **not** need to repeat `npm install`
  unless the project files changed.

---

## If something goes wrong

| What you see | What to do |
| --- | --- |
| `command not found: node` or `npm` | Node.js isn't installed (or needs a restart). Redo **Step 1**, then restart your computer. |
| `npm error ... EACCES` / permission denied | Make sure you copied the whole project folder somewhere you own, like your Desktop or Downloads, and try again. |
| The browser says "This site can't be reached" | The website probably isn't running. Make sure the Step 5 Terminal is still open and shows `Ready`, and that you used the exact address from the `Local:` line. |
| "Port 3000 is in use" | This is fine — Next.js just uses a different number. Use the address shown on the `Local:` line. |
| Nothing happens after `npm install` for a long time | A slow connection can make it take several minutes. Give it time; only worry if it prints an error in red. |

---

## For developers

<details>
<summary>Technical details (click to expand)</summary>

Built with [Next.js 16](https://nextjs.org) (App Router, Turbopack), React,
TypeScript, and [Tailwind CSS v4](https://tailwindcss.com). Requires Node.js
20.9+.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Project structure

```
src/
  app/          Routes (App Router) — one folder per page
  components/   Shared components; ui/ holds low-level primitives
  data/         Typed content: team, community, events, conference
  lib/          Site config (nav, contact, links)
```

- **Content lives in `src/data/`** — team roster, community directory, events,
  and conference details are typed data files; edit these to update the site.
- **Site-wide settings** (navigation, contact email, join-form URL) live in
  `src/lib/site.ts`.
- **Styling** uses Tailwind CSS v4; the brand palette and fonts (Inter for body,
  Fraunces for headings) are defined in `src/app/globals.css`.

### Production build

```bash
npm run build
npm run start
```

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
for hosting options.

</details>
