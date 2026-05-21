import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jstscalpcare.com',
  integrations: [tailwind(), sitemap()],
  outDir: './dist',
  output: 'static',
});
