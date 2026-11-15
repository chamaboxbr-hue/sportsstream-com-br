import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sportsstream.com.br',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [tailwind()]
});
