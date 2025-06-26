import { defineConfig } from 'astro/config';
import mdx from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.kavia.ai'],
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  }
});
