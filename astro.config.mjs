import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://lixiaming01027592891-crypto.github.io',
  base: '/jst-scalp-care',
  outDir: './dist',
  output: 'static',
});
