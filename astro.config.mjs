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

  // Static HTML redirect pages — fallback for hosts that don't support _redirects.
  // Netlify/Cloudflare handle wildcards via public/_redirects; these cover specific paths.
  redirects: {
    // EN-only pages with wrong locale variants
    '/de/kerim-alihodza/': '/kerim-alihodza/',
    '/sl/kerim-alihodza/': '/kerim-alihodza/',
    '/de/terms-of-use/': '/terms-of-use/',
    '/sl/terms-of-use/': '/terms-of-use/',
    '/de/privacy-policy/': '/privacy-policy/',
    '/sl/privacy-policy/': '/privacy-policy/',
    '/de/kontakt/': '/de/contact/',
    '/sl/kontakt/': '/sl/contact/',

    // Cross-locale blog: EN path + DE slug → DE blog
    '/blog/ki-verkaufsagenten/': '/de/blog/ki-verkaufsagenten/',
    '/blog/ki-werbemittel/': '/de/blog/ki-werbemittel/',
    '/blog/whatsapp-lead-generierung/': '/de/blog/whatsapp-lead-generierung/',
    '/blog/reaktionszeit/': '/de/blog/reaktionszeit/',
    '/blog/automatisierte-lead-verteilung/': '/de/blog/automatisierte-lead-verteilung/',
    '/blog/crm-automatisierung/': '/de/blog/crm-automatisierung/',
    '/blog/ki-lead-qualifizierung/': '/de/blog/ki-lead-qualifizierung/',
    '/blog/whatsapp-broadcast-kampagnen/': '/de/blog/whatsapp-broadcast-kampagnen/',
    '/blog/werbemittel-testing/': '/de/blog/werbemittel-testing/',

    // Cross-locale blog: EN path + SL slug → SL blog
    '/blog/ai-prodajni-agenti/': '/sl/blog/ai-prodajni-agenti/',
    '/blog/ai-oglasne-kreative/': '/sl/blog/ai-oglasne-kreative/',
    '/blog/whatsapp-pridobivanje-leadov/': '/sl/blog/whatsapp-pridobivanje-leadov/',
    '/blog/hitrost-do-leada/': '/sl/blog/hitrost-do-leada/',
    '/blog/avtomatizirana-distribucija-leadov/': '/sl/blog/avtomatizirana-distribucija-leadov/',
    '/blog/crm-avtomatizacija/': '/sl/blog/crm-avtomatizacija/',
    '/blog/ai-kvalifikacija-leadov/': '/sl/blog/ai-kvalifikacija-leadov/',
    '/blog/whatsapp-broadcast-kampanje/': '/sl/blog/whatsapp-broadcast-kampanje/',
    '/blog/testiranje-oglasnih-kreativ/': '/sl/blog/testiranje-oglasnih-kreativ/',

    // Cross-locale blog: DE path + EN slug → EN blog
    '/de/blog/ai-sales-agents/': '/blog/ai-sales-agents/',
    '/de/blog/ai-ad-creatives/': '/blog/ai-ad-creatives/',
    '/de/blog/whatsapp-lead-generation/': '/blog/whatsapp-lead-generation/',
    '/de/blog/speed-to-lead/': '/blog/speed-to-lead/',
    '/de/blog/automated-lead-distribution/': '/blog/automated-lead-distribution/',
    '/de/blog/crm-automation/': '/blog/crm-automation/',
    '/de/blog/ai-lead-qualification/': '/blog/ai-lead-qualification/',
    '/de/blog/whatsapp-broadcast-campaigns/': '/blog/whatsapp-broadcast-campaigns/',
    '/de/blog/ad-creative-testing/': '/blog/ad-creative-testing/',

    // Cross-locale blog: DE path + SL slug → SL blog
    '/de/blog/ai-prodajni-agenti/': '/sl/blog/ai-prodajni-agenti/',
    '/de/blog/ai-oglasne-kreative/': '/sl/blog/ai-oglasne-kreative/',
    '/de/blog/whatsapp-pridobivanje-leadov/': '/sl/blog/whatsapp-pridobivanje-leadov/',
    '/de/blog/hitrost-do-leada/': '/sl/blog/hitrost-do-leada/',
    '/de/blog/avtomatizirana-distribucija-leadov/': '/sl/blog/avtomatizirana-distribucija-leadov/',
    '/de/blog/crm-avtomatizacija/': '/sl/blog/crm-avtomatizacija/',
    '/de/blog/ai-kvalifikacija-leadov/': '/sl/blog/ai-kvalifikacija-leadov/',
    '/de/blog/whatsapp-broadcast-kampanje/': '/sl/blog/whatsapp-broadcast-kampanje/',
    '/de/blog/testiranje-oglasnih-kreativ/': '/sl/blog/testiranje-oglasnih-kreativ/',

    // Cross-locale blog: SL path + EN slug → EN blog
    '/sl/blog/ai-sales-agents/': '/blog/ai-sales-agents/',
    '/sl/blog/ai-ad-creatives/': '/blog/ai-ad-creatives/',
    '/sl/blog/whatsapp-lead-generation/': '/blog/whatsapp-lead-generation/',
    '/sl/blog/speed-to-lead/': '/blog/speed-to-lead/',
    '/sl/blog/automated-lead-distribution/': '/blog/automated-lead-distribution/',
    '/sl/blog/crm-automation/': '/blog/crm-automation/',
    '/sl/blog/ai-lead-qualification/': '/blog/ai-lead-qualification/',
    '/sl/blog/whatsapp-broadcast-campaigns/': '/blog/whatsapp-broadcast-campaigns/',
    '/sl/blog/ad-creative-testing/': '/blog/ad-creative-testing/',

    // Cross-locale blog: SL path + DE slug → DE blog
    '/sl/blog/ki-verkaufsagenten/': '/de/blog/ki-verkaufsagenten/',
    '/sl/blog/ki-werbemittel/': '/de/blog/ki-werbemittel/',
    '/sl/blog/whatsapp-lead-generierung/': '/de/blog/whatsapp-lead-generierung/',
    '/sl/blog/reaktionszeit/': '/de/blog/reaktionszeit/',
    '/sl/blog/automatisierte-lead-verteilung/': '/de/blog/automatisierte-lead-verteilung/',
    '/sl/blog/crm-automatisierung/': '/de/blog/crm-automatisierung/',
    '/sl/blog/ki-lead-qualifizierung/': '/de/blog/ki-lead-qualifizierung/',
    '/sl/blog/whatsapp-broadcast-kampagnen/': '/de/blog/whatsapp-broadcast-kampagnen/',
    '/sl/blog/werbemittel-testing/': '/de/blog/werbemittel-testing/',

    // Cross-locale AI services: DE path + wrong slug → correct DE slug
    '/de/dienstleistungen/ai-ad-creative-engine/': '/de/dienstleistungen/ki-werbemittel-system/',
    '/de/dienstleistungen/ai-lead-qualification/': '/de/dienstleistungen/ki-lead-qualifizierung/',
    '/de/dienstleistungen/speed-to-lead-system/': '/de/dienstleistungen/reaktionszeit-system/',
    '/de/dienstleistungen/whatsapp-database-monetization/': '/de/dienstleistungen/whatsapp-datenbank-monetarisierung/',
    '/de/dienstleistungen/ai-oglasevalski-kreativni-sistem/': '/de/dienstleistungen/ki-werbemittel-system/',
    '/de/dienstleistungen/ai-kvalifikacija-leadov/': '/de/dienstleistungen/ki-lead-qualifizierung/',
    '/de/dienstleistungen/hitrost-do-leada/': '/de/dienstleistungen/reaktionszeit-system/',
    '/de/dienstleistungen/whatsapp-monetizacija-baze/': '/de/dienstleistungen/whatsapp-datenbank-monetarisierung/',

    // Cross-locale AI services: SL path + wrong slug → correct SL slug
    '/sl/storitve/ai-ad-creative-engine/': '/sl/storitve/ai-oglasevalski-kreativni-sistem/',
    '/sl/storitve/ai-lead-qualification/': '/sl/storitve/ai-kvalifikacija-leadov/',
    '/sl/storitve/speed-to-lead-system/': '/sl/storitve/hitrost-do-leada/',
    '/sl/storitve/whatsapp-database-monetization/': '/sl/storitve/whatsapp-monetizacija-baze/',
    '/sl/storitve/ki-werbemittel-system/': '/sl/storitve/ai-oglasevalski-kreativni-sistem/',
    '/sl/storitve/ki-lead-qualifizierung/': '/sl/storitve/ai-kvalifikacija-leadov/',
    '/sl/storitve/reaktionszeit-system/': '/sl/storitve/hitrost-do-leada/',
    '/sl/storitve/whatsapp-datenbank-monetarisierung/': '/sl/storitve/whatsapp-monetizacija-baze/',

    // Cross-locale AI services: EN path + wrong slug → correct EN slug
    '/services/ki-werbemittel-system/': '/services/ai-ad-creative-engine/',
    '/services/ki-lead-qualifizierung/': '/services/ai-lead-qualification/',
    '/services/reaktionszeit-system/': '/services/speed-to-lead-system/',
    '/services/whatsapp-datenbank-monetarisierung/': '/services/whatsapp-database-monetization/',
    '/services/ai-oglasevalski-kreativni-sistem/': '/services/ai-ad-creative-engine/',
    '/services/ai-kvalifikacija-leadov/': '/services/ai-lead-qualification/',
    '/services/hitrost-do-leada/': '/services/speed-to-lead-system/',
    '/services/whatsapp-monetizacija-baze/': '/services/whatsapp-database-monetization/',

    // HR is a full locale. Only EN-only pages redirect (same as de/sl).
    '/hr/kerim-alihodza/': '/kerim-alihodza/',
    '/hr/terms-of-use/': '/terms-of-use/',
    '/hr/privacy-policy/': '/privacy-policy/',

    // Old ghost URLs
    '/search': '/',
    '/booking': '/contact/',
    '/services/ai-automation-saved-20-hours-weekly/': '/services/',
    '/services/why-your-online-store-isnt-converting/': '/services/',
  },

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
        if (page.includes('/v1/')) return false;
        // Exclude old (non-AI) service slugs from de and sl
        const oldDeSlugs = ['/de/dienstleistungen/automation/', '/de/dienstleistungen/ecommerce/', '/de/dienstleistungen/local-seo/', '/de/dienstleistungen/mobile-development/', '/de/dienstleistungen/saas-development/', '/de/dienstleistungen/seo/', '/de/dienstleistungen/web-design/'];
        const oldSlSlugs = ['/sl/storitve/automation/', '/sl/storitve/ecommerce/', '/sl/storitve/local-seo/', '/sl/storitve/mobile-development/', '/sl/storitve/saas-development/', '/sl/storitve/seo/', '/sl/storitve/web-design/'];
        if (oldDeSlugs.some(s => page.includes(s))) return false;
        if (oldSlSlugs.some(s => page.includes(s))) return false;
        return true;
      },
      serialize(item) {
        // Google ignores priority and changefreq per official sitemap docs.
        // lastmod is the only meaningful signal — Astro sets it from file mtime by default.
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          sl: 'sl-SI',
          de: 'de-DE',
          hr: 'hr-HR',
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