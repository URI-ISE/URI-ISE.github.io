# Completed Tasks

### April 15, 2026 - By Luke Pepin

- **Fixed Navigation Highlighting Logic**: Extracted navigation out of `BaseLayout.astro` into `src/components/Navigation.astro` and added logic using `Astro.url.pathname` so the `.nav-highlight` class applies dynamically to the current page URL.
- **Fixed Dark Mode Navigation Styling**: Updated `.dropdown-menu a:hover` in `src/styles/global.css` to use `var(--color-accent-1)` ensuring readable contrast in dark mode. 
- **Extracted Reusable Components**: Completed the tech debt task by abstracting `<header>`, `<nav>`, and `<footer>` components into `src/components/Header.astro`, `Navigation.astro`, and `Footer.astro`. Updated `BaseLayout.astro` to consume these imports, DRYing up the layout code.
- **Added Department Link to Footer**: Incorporated the department link `https://web.uri.edu/mcise/` into the new reusable `Footer.astro` component schema and ensured the global footer includes working links for all main site pages.
- **Contact Form Dark Mode Fix**: Added global CSS rule for `<option>` tags to inherit the correct background color variable instead of falling back to system defaults, fixing illegible dropdowns.
- **Roster Profile Integrations**: Added live GitHub, LinkedIn, and email associations across Steven Blum, Stephen Eacuello, Luke Pepin, Andrew Muszynski, Harishjitu Saseendran, Jay-Sun Rutledge, Andrew Oxley, Juan Lopez, and Jake Yacovacci.
- **Roster Link Polish**: Standardized behavior across all `roster.astro` cards, formatting placeholder links into un-clickable, dimmed configurations that clearly communicate pending integration.
- **Grid Layout Resizing**: Updated the global `.card-grid` minimum column width boundary in `global.css` from `220px` to `260px` to give members visually appealing width inside their grids, constraining large clusters (like Master students) to render in symmetric, roomier rows of 4.
- **Project Tracking Cleanup**: Migrated the legacy `ASSET_REQUESTS.txt` tracking content directly into the central `todo.md` tracker to unify planning operations, then cleanly removed the standalone text file.
- **SEO & Visibility Setup**: Drafted and recorded actionable SEO tasks (Google Search Console registration, XML Sitemap generator, Meta Tag optimizations) into the `todo.md` backlog.
- **Roster Polish & Conciseness**: Rewrote the Capstone Room testbed description inside `roster.astro` to be punchier and more direct.
- **Asset Visual Mapping**: Swapped the homepage hero banner to feature `industry40bed-clean.jpg`. Relocated the `cypherstatehouseaction.jpg` graphic into the Industry 4.0 certificate section. Mapped `uri-testbed.webp`, `kirk-uri.png`, and `fcae-uri.png` into the actual `roster.astro` lab room cards to complete visual parity.
