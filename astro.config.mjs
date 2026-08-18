import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  build: {
    format: 'file', // So HTML files are emitted as index.html, about.html instead of about/index.html (easier migration)
  },
  site: 'https://www.iseuri.org',
  integrations: [sitemap()],
});
