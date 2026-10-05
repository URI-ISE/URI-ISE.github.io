# URI Industrial & Systems Engineering

**Live site: [https://www.iseuri.org/](https://www.iseuri.org/)**

Public website for the **University of Rhode Island Industrial & Systems Engineering (ISE)** research group, led by Dr. Manbir Sodhi. Built with [Astro](https://astro.build/) and deployed to GitHub Pages (`uri-ise.github.io` redirects to the custom domain above).

## Description

The URI ISE lab focuses on optimization, machine learning, digital-twin simulation, data pipelines, and smart manufacturing. This repository contains the static site that showcases the lab's research and projects, lab spaces, team members, the Graduate Certificate in Industry 4.0, and contact information.

**Lab members:** to update your profile, headshot, or projects, follow **[CONTRIBUTING.md](CONTRIBUTING.md)** — everything can be done in the browser.

## Tech Stack

| Layer | Detail |
|-------|--------|
| Framework | Astro 6 (static output, GitHub Actions build) |
| Content | Astro content collections — one Markdown file per person / project, validated by a schema in `src/content.config.ts` |
| Images | `astro:assets` (sharp) — resized, cropped, and converted to WebP at build time |
| Styling | Vanilla CSS design tokens — palette, type scale, spacing — in `src/styles/global.css`; light/dark themes, WCAG AA contrast throughout |
| Typography | Self-hosted via Fontsource: Source Serif 4 (headings) + Inter (text) |
| Scripting | Small scripts only (theme toggle, Research tag filter, People card shuffle, contact `mailto:` flow) |
| SEO | `@astrojs/sitemap`, `public/robots.txt`, canonical URLs, Open Graph image, JSON-LD organization data |
| Hosting | GitHub Pages via `.github/workflows/deploy.yml` (PRs build only; `main` builds and deploys) |
| DNS | Namecheap (Dr. Sodhi's account) → GitHub Pages; custom domain in `public/CNAME` |

## Site Map

| Path | Description |
|------|-------------|
| `/` | Lab overview, mission, research areas |
| `/research` | The six research threads, then projects (random order on each visit; filterable by thread / hashtag) |
| `/labs` | Lab spaces and locations |
| `/people` | Team members by section (random order on each visit) |
| `/industry4-0` | Industry 4.0 overview and Graduate Certificate |
| `/contact` | Contact form and direct contact details |
| `/projects`, `/roster` | Redirects to `/research` and `/people` (set in `astro.config.mjs`) |
| `/404` | Not-found page (served by GitHub Pages for unknown URLs; `noindex`) |

## Setup & Local Development

```bash
npm install
npm run dev      # dev server at http://localhost:4321/
npm run build    # static build to dist/
npm run preview  # serve the production build locally
```

Pushing to `main` triggers the GitHub Actions workflow, which builds `dist/` and deploys it to GitHub Pages.

## Common Maintenance Tasks

| To change… | Edit |
|---|---|
| A person's card | `src/content/people/<first-last>.md` (template: `docs/templates/person.md`) |
| A project | `src/content/projects/<name>.md` + images in `src/content/projects/<name>/` (template: `docs/templates/project.md`) |
| Research threads (names, one-line summaries, icons) or the approved hashtag list | `src/data/tags.ts` |
| People-page section headings | `SECTION_HEADINGS` in `src/data/tags.ts` |
| Home / Labs / Industry 4.0 / Contact text | The page file in `src/pages/` (each starts with a note on what lives where) |
| Nav and footer links | `src/components/Navigation.astro`, `src/components/Footer.astro` |
| Redirects for old URLs | `redirects` in `astro.config.mjs` (targets never end in `/`) |
| Colors, type, spacing | Tokens at the top of `src/styles/global.css` |

### Reviewing a member's pull request locally

```bash
gh pr checkout <number>
npm run dev      # drafts are visible in dev, hidden in the production build
```

Every PR also gets an automatic **build** check — it fails on any schema problem (unknown tag, missing
image, overlong bio, unknown researcher), so a green check means the content is valid.

### Adding a research thread or hashtag

Edit `src/data/tags.ts`: add a thread to `THREAD_SLUGS` *and* `THREADS` (label, summary, icon), or a hashtag
to `SECONDARY_TAGS`. Locally, run `npx astro build --force` afterwards — the content cache doesn't notice
changes to `tags.ts` on its own (CI always builds fresh).

### Adding or updating media

Images that the site displays live next to the content that uses them (`src/content/**`) or in
`src/assets/photos/` for page-level photos; Astro resizes and converts them at build time, so upload the
best-quality JPG/PNG you have (no manual resizing needed). Only videos and the social-share image
live in `public/`.

Raw originals (HEIC, MOV, full-resolution exports) go in `media-originals/`, which is **gitignored**. Convert on macOS with the built-in tools:

```bash
# Photo: HEIC → JPEG (max 2400px keeps the repo small; the build makes web sizes)
sips -s format jpeg -s formatOptions 85 -Z 2400 media-originals/photo.heic --out src/assets/photos/photo-name.jpg
```

```bash
# Video: compress for web (target well under 10 MB per clip)
avconvert -s media-originals/clip.mov -p PresetMediumQuality -o public/assets/videos/clip-name.mp4 --replace
```

Name files in kebab-case, give every image meaningful `alt` text and a caption, and give every video a
`poster` still so pages load light.

### Search engines

Register the site in Google Search Console as a **Domain** property for `iseuri.org` (verified with a
TXT record at Namecheap — scheduled for launch day, see `docs/TIMELINE.md`) and import it into Bing
Webmaster Tools. After big changes, resubmit
`https://www.iseuri.org/sitemap-index.xml` in Search Console. Canonical URLs are extensionless
(`/people`, not `/people.html`) to match the sitemap — `src/utils/paths.ts` handles this.

## Theme

The site defaults to the visitor's OS color-scheme preference:

1. **CSS fallback (no JS):** an `@media (prefers-color-scheme: dark)` block applies dark tokens when JavaScript is unavailable.
2. **Inline `<script>` in `<head>`:** reads `localStorage("uri-ise-theme")` and sets `data-theme` on `<html>` before first paint, preventing a flash of the wrong theme.

A header toggle switches light/dark, persisted under `uri-ise-theme`. All colors are driven by the custom-property tokens at the top of `src/styles/global.css`; text/background pairs are kept at ≥ 4.5:1 contrast — check any new pairs before shipping.

## Contact Routing

- The site is hosted on GitHub Pages and does not run a backend mail handler.
- Contact inquiries are routed from the contact page to `sodhi@uri.edu` using a `mailto:` flow with the subject format `ISEURI Forward: <topic>`.
- Domain-level forwarding for `iseuri.org` addresses must be configured in the external email/domain provider admin panel.

## Repo Structure

```
├── astro.config.mjs        Site URL, redirects, sitemap integration, build format
├── CONTRIBUTING.md         How lab members update profiles and projects
├── docs/
│   ├── templates/          person.md and project.md starting points
│   ├── TIMELINE.md         Fall 2026 update → launch schedule
│   └── PHOTO-SHOTLIST.md   Photos needed / recommended
├── src/
│   ├── content.config.ts   Schema for people + projects (the build check)
│   ├── content/
│   │   ├── people/         One .md per member; headshots in people/photos/
│   │   └── projects/       One .md per project; images in projects/<name>/
│   ├── data/tags.ts        Research threads, approved hashtags, people sections
│   ├── assets/photos/      Page-level photos (home, labs, Industry 4.0)
│   ├── layouts/            BaseLayout (head, SEO tags, JSON-LD, header/footer, theme init)
│   ├── components/         Header, Navigation, Footer, ThreadCards
│   ├── pages/              One .astro file per route
│   ├── utils/paths.ts      Canonical-URL helper
│   └── styles/global.css   Design tokens + site-wide styles
├── public/
│   ├── assets/videos/      Project videos (MP4, < 10 MB each)
│   ├── assets/og-default.jpg  1200×630 link-preview image
│   ├── favicon.svg         Site favicon
│   ├── robots.txt          Crawl policy + sitemap pointer
│   └── CNAME               GitHub Pages custom domain
├── media-originals/        Raw media (gitignored — see Media workflow)
└── .github/
    ├── workflows/deploy.yml       Build on PRs; build + deploy on main
    └── pull_request_template.md   Checklist shown on every PR
```

## Maintainers

- **Dr. Manbir Sodhi** — Lab Director, Professor of Industrial & Systems Engineering
- **Luke Pepin** — Site development and maintenance

---

No license file is currently included in this repository.
