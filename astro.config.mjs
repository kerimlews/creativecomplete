// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
// const CDN = 'https://d3f6cp76ydkw50.cloudfront.net';

// https://astro.build/config
export default defineConfig({
  site: 'https://creativecomplete.com',
  output: 'static',
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  compressHTML: true,

  build: {
    concurrency: 9999,
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  vite: {
        css: {
            devSourcemap: true,
            transformer: "postcss",
        },
    build: {
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              if (assetInfo.names[0]?.endsWith('.css')) {
                return 'assets/css/[name][extname]';
              }
              if (assetInfo.names[0]?.match(/\.(png|jpe?g|gif|svg|webp|avif)$/)) {
                return 'assets/images/[name][extname]';
              }
              return 'assets/js/[name][extname]';
            },
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js'
          }
        }
      },
  },

  integrations: [
	partytown({ config: { forward: ['dataLayer.push'] } }),
	sitemap(),
    playformCompress({
      SVG: true,
      Action: true,
      Cache: true,
      CSS: true,
      File: true,
      HTML: true,
      Image: false,
      JSON: true,
      JavaScript: true,
      Path: true,
      Map: true,
      Logger: true,
    })]
});