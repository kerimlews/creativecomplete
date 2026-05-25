# Google Search SEO Audit — CreativeComplete

Branch: `bdm` | Last updated: 2026-05-25

---

## Google Documentation Reviewed

| Doc | URL | Status |
|-----|-----|--------|
| Creating Helpful Content | developers.google.com/search/docs/fundamentals/creating-helpful-content | ✅ Applied |
| Search Essentials | developers.google.com/search/docs/essentials | ✅ Applied |
| Page Experience / Core Web Vitals | developers.google.com/search/docs/appearance/page-experience | ✅ Reviewed |
| Google Images | developers.google.com/search/docs/appearance/google-images | ✅ Applied |
| Multi-regional & multilingual | developers.google.com/search/docs/specialty/international/managing-multi-regional-sites | ✅ Applied |
| URL structure | developers.google.com/search/docs/crawling-indexing/url-structure | ✅ Applied |
| Structured data intro | developers.google.com/search/docs/appearance/structured-data/intro-structured-data | ✅ Applied |
| JavaScript SEO | developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics | ✅ Applied |
| Ranking systems guide | developers.google.com/search/docs/appearance/ranking-systems-guide | ✅ Reviewed |
| Image license metadata | developers.google.com/search/docs/appearance/structured-data/image-license-metadata | ✅ Reviewed |
| Crawl budget management | developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget | ✅ Applied |
| Mobile-first indexing | developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing | ✅ Reviewed |
| Article/BlogPosting schema | developers.google.com/search/docs/appearance/structured-data/article | ✅ Applied |
| BreadcrumbList schema | developers.google.com/search/docs/appearance/structured-data/breadcrumb | ✅ Applied |
| Organization schema | developers.google.com/search/docs/appearance/structured-data/organization | ✅ Applied |
| ProfilePage schema | developers.google.com/search/docs/appearance/structured-data/profile-page | ✅ Applied |
| VideoObject schema | developers.google.com/search/docs/appearance/structured-data/video | ✅ Applied |
| Review snippet schema | developers.google.com/search/docs/appearance/structured-data/review-snippet | ✅ Reviewed |
| Title link guidelines | developers.google.com/search/docs/appearance/title-link | ✅ Reviewed |

---

## What Each Doc Found & What Was Done

### 1. Creating Helpful Content (E-E-A-T)
**Found:**
- Pages must demonstrate Experience, Expertise, Authoritativeness, Trustworthiness
- Claims must be substantiated — no unverifiable "#1" rankings
- Content should show who wrote it and their credentials
- Stats and metrics need sourcing

**Done:**
- Removed `#1 AI Agency` from Nav badge, all meta titles/descriptions, LayoutV2 default title
- Changed badge to `50+ Agencies Served` (verifiable)
- Added stats sourcing footnote: "Client median results across 50+ agency deployments"
- Added visible author byline on blog index page with photo + title
- Added LinkedIn verification link on kerim-alihodza page
- Replaced unverifiable "300% revenue growth" bio claim with metrics-based language
- Added `hasCredential` and `alumniOf` to ProfilePage Person schema

---

### 2. Structured Data — FAQPage Deprecated
**Found:**
- FAQPage rich results removed from Google Search as of **May 7, 2026**
- Keeping the schema causes no harm but provides no benefit

**Done:**
- Removed FAQPage from `@graph` in all 7 templates:
  - `src/pages/blog/[...slug].astro`
  - `src/pages/de/blog/[...slug].astro`
  - `src/pages/sl/blog/[...slug].astro`
  - `src/pages/services/ai-ad-creative-engine.astro`
  - `src/pages/services/ai-lead-qualification.astro`
  - `src/pages/services/speed-to-lead-system.astro`
  - `src/pages/services/whatsapp-database-monetization.astro`
- Left visible FAQ sections on pages (content still helps users)

---

### 3. Structured Data — SearchAction / Sitelinks Searchbox Deprecated
**Found:**
- Sitelinks Searchbox (`potentialAction` / `SearchAction`) removed from Google Search in **November 2024**
- Our WebSite schema included it pointing to a non-existent `/search` URL

**Done:**
- Removed `potentialAction` from `generateWebSiteJsonLd()` in `src/utils/jsonld.ts`

---

### 4. Article / BlogPosting Schema
**Found:**
- No required properties, but recommended: `author`, `author.name`, `author.url`, `dateModified`, `datePublished`, `headline`, `image`
- `author.sameAs` boosts E-E-A-T (links to verified external profiles)
- `publisher.logo` must fit within 600×60 pixels
- Image should represent the article content; multiple aspect ratios recommended (16:9, 4:3, 1:1)

**Done:**
- Added `image: ogImage` to BlogPosting in all three locale slug pages
- Added `author.sameAs: "https://www.linkedin.com/in/kerim-alihodza/"` to all BlogPosting schemas
- Added `publisher.logo` as ImageObject (`/logo-gradient.svg`) to all BlogPosting schemas
- Set `og:type="article"` on all blog post pages (EN/DE/SL)

**Still missing (nice to have):**
- Multiple image aspect ratios (16:9, 4:3, 1:1) — requires generating additional image variants
- `duration` for VideoObject (need actual Vimeo video length in ISO 8601 format e.g. `PT3M42S`)

---

### 5. BreadcrumbList Schema
**Found:**
- Final breadcrumb item does NOT require `item` property — Google uses the page URL automatically

**Done:**
- Removed `item` from the last ListItem in all BreadcrumbList schemas

---

### 6. ProfilePage Schema (kerim-alihodza)
**Found:**
- Required: `mainEntity.name`
- Recommended: `dateCreated`, `dateModified`, `description`, `image`, `sameAs`

**Done:**
- Fixed image URL: `.jpg` → `.png` (file is actually PNG)
- Added `dateCreated: "2023-01-01"`, `dateModified: "2026-05-01"`
- Added `hasCredential` array with certifications
- Added `alumniOf` to Person schema
- LinkedIn already in `sameAs`

---

### 7. Organization Schema
**Found:**
- No required properties
- Recommended: `name`, `url`, `logo`, `address`, `email`, `sameAs`, `foundingDate`
- Logo must fit within 600×60 pixels for Article publisher context

**Done:**
- Removed empty string fields (`telephone: ""`, `streetAddress: ""`, `postalCode: ""`) from `src/utils/organization.ts`
- Added `width: 600, height: 60` to Organization logo ImageObject
- Reordered `sameAs` to put company LinkedIn first
- All fields conditional — empty values omit the property entirely

---

### 8. Review Snippets — NOT applicable
**Found:**
- Service businesses CANNOT show star ratings for reviews they host themselves
- Only third-party review platforms qualify

**Done:**
- No `aggregateRating` added — correct to leave it out

---

### 9. VideoObject Schema (homepage)
**Found:**
- Required: `name`, `thumbnailUrl`, `uploadDate`
- Recommended: `contentUrl` or `embedUrl`, `description`, `duration`

**Done:**
- Added VideoObject schema to homepage for Vimeo embed (ID: 1191978034)
- Has `name`, `thumbnailUrl`, `uploadDate`, `embedUrl`, `description` ✓

**Still missing:**
- `duration` in ISO 8601 format (e.g. `PT3M42S`) — check Vimeo video length and add to homepage VideoObject
- `thumbnailUrl` currently uses `/og-default.svg`; ideally the actual Vimeo thumbnail: `https://i.vimeocdn.com/video/1191978034_1280x720.jpg`

---

### 10. Multi-regional / Hreflang
**Found:**
- All pages must self-reference in hreflang
- All alternate URLs must return 200 (not 404)
- Auto-computed hreflang broke whenever URL segments differ across locales

**Done:**
- Added `hreflangAlternates` prop to `LayoutV2` and `ServiceLayout`
- Fixed all pages where URL segments differ across locales:

| Page group | Problem | Fix |
|------------|---------|-----|
| EN service pages | Generated `/de/services/` (wrong) | Explicit map to `/de/dienstleistungen/` and `/sl/storitve/` |
| DE/SL service slug pages | Generated `/dienstleistungen/` for EN (wrong) | Explicit reverse map to `/services/` |
| EN/DE/SL blog slug pages | Slugs are different in each language | Full cross-locale slug mapping table in each `[...slug].astro` |
| Services index | `/services/` vs `/dienstleistungen/` vs `/storitve/` | Explicit 3-way map on all 3 index pages |
| Projects index | `/projects/` vs `/projekte/` vs `/projekti/` | Explicit 3-way map on all 3 index pages |
| Project slug pages | Same slug, different directory segment | Compute EN/DE/SL from slug + correct segment |
| EN-only pages | Generated non-existent `/de/kerim-alihodza/` etc. | `hreflangAlternates={{ en: canonicalUrl }}` only |

**Blog slug cross-locale mapping:**
| EN | DE | SL |
|----|----|----|
| ai-sales-agents | ki-verkaufsagenten | ai-prodajni-agenti |
| ai-ad-creatives | ki-werbemittel | ai-oglasne-kreative |
| whatsapp-lead-generation | whatsapp-lead-generierung | whatsapp-pridobivanje-leadov |
| speed-to-lead | reaktionszeit | hitrost-do-leada |
| automated-lead-distribution | automatisierte-lead-verteilung | avtomatizirana-distribucija-leadov |
| crm-automation | crm-automatisierung | crm-avtomatizacija |
| ai-lead-qualification | ki-lead-qualifizierung | ai-kvalifikacija-leadov |
| whatsapp-broadcast-campaigns | whatsapp-broadcast-kampagnen | whatsapp-broadcast-kampanje |
| ad-creative-testing | werbemittel-testing | testiranje-oglasnih-kreativ |

**AI Service slug cross-locale mapping:**
| EN | DE | SL |
|----|----|----|
| ai-ad-creative-engine | ki-werbemittel-system | ai-oglasevalski-kreativni-sistem |
| ai-lead-qualification | ki-lead-qualifizierung | ai-kvalifikacija-leadov |
| speed-to-lead-system | reaktionszeit-system | hitrost-do-leada |
| whatsapp-database-monetization | whatsapp-datenbank-monetarisierung | whatsapp-monetizacija-baze |

---

### 11. Sitemap
**Found:**
- Google officially ignores `priority` and `changefreq`
- Only `lastmod` is meaningful

**Done:**
- Removed `priority` and `changefreq` from `astro.config.mjs` sitemap serialize function

---

### 12. JavaScript SEO
**Found:**
- Links must be `<a href="">` for Google to follow them
- `href="javascript:void(0)"` is not followed by Google (booking CTA buttons — OK, not navigation)
- CSS background images are NOT indexed by Google

**Done:**
- Audited all `javascript:void(0)` links — all are Cal.com booking CTAs, not navigation ✓
- Audited CSS `background-image` uses — all are decorative SVG dropdowns or gradients, no content images ✓
- Audited all `<img>` tags — all have descriptive alt text ✓

---

### 13. Contact Page
**Found:**
- No ContactPage structured data existed

**Done:**
- Added `ContactPage` + `Organization` structured data to `src/pages/contact.astro`
- Added privacy policy link above form submit button (trust signal)

---

### 14. About Page
**Found:**
- `generateAboutPageJsonLd()` utility existed in `jsonld.ts` but was never called

**Done:**
- Wired up `generateAboutPageJsonLd` on EN, DE, SL about pages

---

### 15. Minor Head Cleanup
**Done:**
- Removed `<meta name="priority">` (non-standard, ignored by all engines)
- Fixed LayoutV2 default title from `AI Customer System — #1 Agency | CreativeComplete` to `AI Customer System for Agencies | CreativeComplete`
- Added `'blog'` to `navActive` union type (was causing a TypeScript error)

---

## Outstanding Items (Not Yet Done)

| Item | Priority | Notes |
|------|----------|-------|
| VideoObject `duration` | Medium | Add ISO 8601 duration (e.g. `PT3M42S`) to homepage VideoObject after checking Vimeo video length |
| VideoObject `thumbnailUrl` | Medium | Replace `/og-default.svg` with actual Vimeo thumbnail: `https://i.vimeocdn.com/video/1191978034_1280x720.jpg` |
| Article image aspect ratios | Low | Google recommends 16:9, 4:3, 1:1 variants per article. Current: single SVG OG image. Needs image generation pipeline. |
| Image license metadata | Low | Add `license` + `acquireLicensePage` to ImageObject for blog images to get Licensable badge |
| `whatsapp-lead-generation` blog post | Low | EN has it, but DE/SL have it too — ensure it's in hreflang mapping (it is: `whatsapp-lead-generierung` / `whatsapp-pridobivanje-leadov`) |
| Soft 404 audit | Medium | Verify no removed pages return 200 with "not found" content — use Google Search Console Coverage report |
| Core Web Vitals | High (ongoing) | LCP < 2.5s, CLS < 0.1, INP < 200ms — monitor via Search Console |

---

## Key Rules for Future Pages

1. **New blog post** — add slug to `enToDeBlog`/`deToEnBlog` mapping tables in all three `blog/[...slug].astro` files
2. **New service (EN only)** — add `hreflangAlternates` with correct DE/SL paths; add DE/SL content files in the same commit
3. **New DE/SL service** — add slug to `deToEnSlug`/`slToEnSlug` mapping tables in respective `[...slug].astro` files
4. **New project** — add to `src/content/projects/en/`, `de/`, `sl/` with same slug; hreflang auto-computes from slug + directory constant
5. **No FAQPage schema** — deprecated May 2026; visible FAQ HTML is fine
6. **No SearchAction** — deprecated November 2024
7. **No `aggregateRating`** — self-hosted reviews don't qualify for rich results
8. **og:type="article"** on blog posts, `"website"` on all other pages
9. **EN-only pages** — always pass `hreflangAlternates={{ en: canonicalUrl }}`
