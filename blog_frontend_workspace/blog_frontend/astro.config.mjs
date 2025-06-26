import { defineConfig } from 'astro/config';
import markdown from '@astrojs/markdown';

// https://astro.build/config
export default defineConfig({
  integrations: [markdown()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.kavia.ai'],
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }
});
