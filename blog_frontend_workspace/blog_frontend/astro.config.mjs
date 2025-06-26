import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // No markdown integration - Astro processes .md files natively in v3+
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.kavia.ai'],
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }
});
