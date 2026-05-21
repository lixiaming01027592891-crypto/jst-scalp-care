import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jstscalpcare.com',
  integrations: [tailwind()],
  outDir: './dist',
  output: 'static',
});
