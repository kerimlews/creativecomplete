// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
// const CDN = 'https://d3f6cp76ydkw50.cloudfront.net';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.creativecomplete.com',
  output: 'static',
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  compressHTML: true,
  trailingSlash: 'always',

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
              return 'assets/css/[name]-[hash][extname]'; // Added hash for cache busting
            }
            if (assetInfo.names[0]?.match(/\.(png|jpe?g|gif|svg|webp|avif)$/)) {
              return 'assets/images/[name]-[hash][extname]'; // Added hash
            }
            return 'assets/js/[name]-[hash][extname]';
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js'
        }
      }
      },
  },

  integrations: [
	partytown({ config: { forward: ['dataLayer.push', '_uxa', '_uxa.push'] } }),
	sitemap({
      filter: (page) => {
        if (page.includes('/hr/')) return false;
        if (page.includes('/v1/')) return false;
        // Exclude old (non-AI) service slugs from de and sl
        const oldDeSlugs = ['/de/dienstleistungen/automation/', '/de/dienstleistungen/ecommerce/', '/de/dienstleistungen/local-seo/', '/de/dienstleistungen/mobile-development/', '/de/dienstleistungen/saas-development/', '/de/dienstleistungen/seo/', '/de/dienstleistungen/web-design/'];
        const oldSlSlugs = ['/sl/storitve/automation/', '/sl/storitve/ecommerce/', '/sl/storitve/local-seo/', '/sl/storitve/mobile-development/', '/sl/storitve/saas-development/', '/sl/storitve/seo/', '/sl/storitve/web-design/'];
        if (oldDeSlugs.some(s => page.includes(s))) return false;
        if (oldSlSlugs.some(s => page.includes(s))) return false;
        return true;
      },
      serialize(item) {
        // Homepage
        if (item.url === 'https://www.creativecomplete.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        // Blog posts
        if (item.url.includes('/blog/') && item.url !== 'https://www.creativecomplete.com/blog/') {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        // Blog index
        if (item.url === 'https://www.creativecomplete.com/blog/') {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        // Service pages
        if (item.url.includes('/services/')) {
          return { ...item, priority: 0.85, changefreq: 'monthly' };
        }
        // Author page
        if (item.url.includes('/kerim-alihodza')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        return { ...item, priority: 0.6, changefreq: 'monthly' };
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          sl: 'sl-SI',
          de: 'de-DE',
        },
      },
  }),
    playformCompress({
      SVG: true,
      Action: true,
      Cache: true,
      CSS: true,
      File: true,
      HTML: true,
      Image: true,
      JSON: true,
      JavaScript: true,
      Path: true,
      Map: true,
      Logger: true,
    })]
});