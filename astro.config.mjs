import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://caribhealthfoundation.org',
  integrations: [sitemap()],
  output: 'static',
  // Astro 7 defaults to JSX whitespace rules, which drop spaces between text
  // and inline elements written on separate lines (e.g. "a\n<strong>").
  // Keep Astro 6's lossless compression so rendered text is unchanged.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Emit every client <script> as an external /_astro/*.js file instead of
      // inlining small ones, so the Content-Security-Policy can use
      // script-src 'self' without 'unsafe-inline'.
      assetsInlineLimit: 0,
    },
  },
});
