import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'file', // So HTML files are emitted as index.html, about.html instead of about/index.html (easier migration)
  },
  site: 'https://URI-ISE.github.io',
});
