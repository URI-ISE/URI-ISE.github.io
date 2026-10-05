import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  build: {
    format: 'file', // Emit people.html etc.; GitHub Pages serves them at extensionless URLs (/people)
  },
  site: 'https://www.iseuri.org',
  // Old URLs kept alive. Targets must not end in "/" (GitHub Pages would 404 on /people/).
  redirects: {
    '/projects': '/research',
    '/roster': '/people',
  },
  integrations: [sitemap()],
});
