# URI Industrial & Systems Engineering

Public-facing website for the **University of Rhode Island Industrial & Systems Engineering (ISE)** research group, led by Dr. Manbir Sodhi. Hosted on [GitHub Pages](https://uri-ise.github.io).

## Description

The URI ISE lab focuses on optimization, machine learning, digital-twin simulation, data pipelines, and smart manufacturing. This repository contains the static site that showcases research areas, lab members, the Graduate Certificate in Industry 4.0, interactive project demos, and contact information.

## Key Features

| Feature | Detail |
|---------|--------|
| **Light / Dark Theme** | Follows `prefers-color-scheme` by default; manual toggle (Auto → Light → Dark) in the footer, persisted via `localStorage`. |
| **Progressive Web App** | Service-worker caching for offline access on the main site and the RSVP Reader demo. |
| **Adjustable Text Size** | Five-step range slider in the footer scales the base font via CSS custom properties. |
| **Interactive Demos** | Tower of Hanoi algorithmic solver; RSVP Speed Reader (PDF/EPUB). |
| **Responsive Layout** | CSS Grid / Flexbox adapts from mobile to wide desktop. |

## Tech Stack

| Layer | Detail |
|-------|--------|
| Markup | Semantic HTML5 |
| Styling | CSS3 with custom properties (`:root` variables), Grid, Flexbox |
| Scripting | Vanilla JavaScript (ES6+) |
| Hosting | GitHub Pages — no build step for the root site |
| PWA | `manifest.json` + `sw.js` (cache-first strategy) |
| RSVP Reader | Pre-built Vite/React app served from `rsvp-reading/` |

## Site Map

| Path | Description |
|------|-------------|
| `/` | Lab overview, mission, research areas |
| `/roster.html` | Team members and roles |
| `/projects.html` | Research project summaries and demo links |
| `/industry4-0.html` | Industry 4.0 overview, research connections, Graduate Certificate |
| `/contact.html` | Contact form and lab-space information |
| `/hanoi/` | Interactive Tower of Hanoi solver |
| `/rsvp-reading/` | RSVP Speed Reader PWA |

## Setup & Local Development

No build step is required for the root site. Any static file server works:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Open `http://localhost:8000`. Refresh once after first load to allow the service worker to install.

### RSVP Reader

The reader is a separate project whose build output is copied into `rsvp-reading/`. To update it, run `scripts/build-deploy.ps1` (edit `$basePath` for your machine first).

## Theme Switcher

The site defaults to the user's OS preference via two mechanisms:

1. **CSS fallback (no JS):** An `@media (prefers-color-scheme: dark)` block inside `:root:not([data-theme])` applies dark variables when JavaScript is unavailable.
2. **Inline `<script>` in `<head>`:** Reads `localStorage("uri-ise-theme")` and sets `data-theme` on `<html>` before first paint — preventing a flash of the wrong theme.

A footer toggle button cycles through **Auto** (system) → **Light** → **Dark**. The selection is stored in `localStorage` under `uri-ise-theme`.

All surface, text, and border colors are driven by CSS custom properties in `:root` (light defaults) and `[data-theme="dark"]` (overrides). The header, footer, and hero sections keep fixed dark backgrounds regardless of theme.

## PWA Caching

### Root Site (`sw.js`)

Cache-first strategy. Core pages and assets are pre-cached on install:

- `index.html`, `roster.html`, `projects.html`, `contact.html`, `industry4-0.html`
- `assets/css/style.css`, `assets/js/main.js`

Bump `CACHE_NAME` (currently `uri-ise-static-v2`) after changing any pre-cached file.

### RSVP Reader (`rsvp-reading/sw.js`)

Network-first with cache fallback. Cache name: `rsvp-reader-v2`.

## Repo Structure

```
├── index.html             Home page
├── roster.html            Team members and roles
├── projects.html          Research project summaries
├── contact.html           Contact form and lab info
├── industry4-0.html       Industry 4.0 & Graduate Certificate
├── assets/
│   ├── css/style.css      Site-wide styles (CSS custom properties)
│   ├── js/main.js         Theme switcher, text-size control, hero canvas
│   └── photos/            Roster and project imagery
├── hanoi/                 Tower of Hanoi demo
├── rsvp-reading/          Pre-built RSVP Reader PWA
├── scripts/
│   └── build-deploy.ps1   RSVP Reader build/copy script
├── manifest.json          Root-site PWA manifest
├── sw.js                  Root-site service worker
├── favicon.svg            Site favicon
└── CNAME                  GitHub Pages custom domain
```

## Maintainers

- **Dr. Manbir Sodhi** — Lab Director, Professor of Industrial & Systems Engineering
- **Luke Pepin** — Site development and maintenance

---

No license file is currently included in this repository.
