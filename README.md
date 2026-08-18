# URI Industrial & Systems Engineering

**Live site: [https://www.iseuri.org/](https://www.iseuri.org/)**

Public website for the **University of Rhode Island Industrial & Systems Engineering (ISE)** research group, led by Dr. Manbir Sodhi. Built with [Astro](https://astro.build/) and deployed to GitHub Pages (`uri-ise.github.io` redirects to the custom domain above).

## Description

The URI ISE lab focuses on optimization, machine learning, digital-twin simulation, data pipelines, and smart manufacturing. This repository contains the static site that showcases the lab's research topics, projects, lab spaces, team members, the Graduate Certificate in Industry 4.0, and contact information.

## Tech Stack

| Layer | Detail |
|-------|--------|
| Framework | Astro (static output, GitHub Actions build) |
| Styling | Vanilla CSS design tokens — palette, type scale, spacing — in `src/styles/global.css`; light/dark themes, WCAG AA contrast throughout |
| Typography | Self-hosted via Fontsource: Source Serif 4 (headings) + Inter (text) |
| Scripting | Small inline scripts only (theme toggle, contact `mailto:` flow) |
| SEO | `@astrojs/sitemap` + `public/robots.txt` |
| Hosting | GitHub Pages via `.github/workflows/deploy.yml` |

## Site Map

| Path | Description |
|------|-------------|
| `/` | Lab overview, mission, research areas |
| `/projects` | Lab projects with figures and demo videos |
| `/research` | Research topics and methods |
| `/labs` | Lab spaces and locations |
| `/people` | Team members and roles |
| `/industry4-0` | Industry 4.0 overview and Graduate Certificate |
| `/contact` | Contact form and lab-space information |

## Setup & Local Development

```bash
npm install
npm run dev      # dev server at http://localhost:4321/
npm run build    # static build to dist/
npm run preview  # serve the production build locally
```

Pushing to `main` triggers the GitHub Actions workflow, which builds `dist/` and deploys it to GitHub Pages.

## Common Maintenance Tasks

### Updating the roster

Members live in a data array at the top of `src/pages/people.astro` — edit the `sections` list (name, email, bio, photo path, optional links). Add member photos to `public/assets/photos/` as `.webp` or `.jpg`, ideally square-cropped.

### Adding or updating media

Raw originals (HEIC, MOV, full-resolution exports) go in `media-originals/`, which is **gitignored — only web-ready derivatives are committed**. Convert on macOS with the built-in tools:

```bash
# Photo: HEIC → JPEG, max 1600px, ~75% quality
sips -s format jpeg -s formatOptions 75 -Z 1600 media-originals/photo.heic --out public/assets/photos/photo-name.jpg
```

```bash
# Video: compress for web (target well under 10 MB per clip)
avconvert -s media-originals/clip.mov -p PresetMediumQuality -o public/assets/photos/clip-name.mp4 --replace
```

Name files in kebab-case, give every placed image meaningful `alt` text and a caption, and keep videos `preload="none"` with a poster image so pages load light.

### Adding a project

Projects are `<article class="project-entry">` blocks in `src/pages/projects.astro`: a kicker (category), heading, description, and a `project-media` grid of captioned figures/videos.

## Theme

The site defaults to the visitor's OS color-scheme preference:

1. **CSS fallback (no JS):** an `@media (prefers-color-scheme: dark)` block applies dark tokens when JavaScript is unavailable.
2. **Inline `<script>` in `<head>`:** reads `localStorage("uri-ise-theme")` and sets `data-theme` on `<html>` before first paint, preventing a flash of the wrong theme.

A footer toggle switches light/dark, persisted under `uri-ise-theme`. All colors are driven by the custom-property tokens at the top of `src/styles/global.css`; text/background pairs are kept at ≥ 4.5:1 contrast — check any new pairs before shipping.

## Contact Routing

- The site is hosted on GitHub Pages and does not run a backend mail handler.
- Contact inquiries are routed from the contact page to `sodhi@uri.edu` using a `mailto:` flow with the subject format `ISEURI Forward: <topic>`.
- Domain-level forwarding for `iseuri.org` addresses must be configured in the external email/domain provider admin panel.

## Repo Structure

```
├── astro.config.mjs        Site URL, sitemap integration, build format
├── src/
│   ├── layouts/            BaseLayout (head, fonts, header/footer, theme init)
│   ├── components/         Header, Navigation (desktop + mobile menu), Footer
│   ├── pages/              One .astro file per route
│   └── styles/global.css   Design tokens + site-wide styles
├── public/
│   ├── assets/photos/      Web-ready roster, lab, and project media
│   ├── favicon.svg         Site favicon
│   ├── robots.txt          Crawl policy + sitemap pointer
│   └── CNAME               GitHub Pages custom domain
├── media-originals/        Raw media (gitignored — see Media workflow)
└── .github/workflows/      GitHub Pages deploy workflow
```

## Maintainers

- **Dr. Manbir Sodhi** — Lab Director, Professor of Industrial & Systems Engineering
- **Luke Pepin** — Site development and maintenance

---

No license file is currently included in this repository.
