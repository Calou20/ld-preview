import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const isPreview = process.env.PREVIEW === 'true';

export default defineConfig({
  site: isPreview ? 'https://calou20.github.io' : 'https://lucadauphin.ch',
  base: isPreview ? '/ld-preview' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
