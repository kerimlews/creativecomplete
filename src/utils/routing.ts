import { translationConfig, Language } from './translations';
import { getServicesRouteName, getProjectsRouteName } from './translations';

/**
 * Parse route segments to extract language and page name
 * Handles patterns like: /, /sl/, /about/, /sl/about/
 */
export function parseRouteSegments(segments: string[]): { lang: Language; pageName: string | null } {
  if (segments.length === 0) {
    return { lang: 'en', pageName: null }; // Homepage, English
  }
  
  // Check if first segment is a language code
  const firstSegment = segments[0];
  if (translationConfig.supportedLanguages.includes(firstSegment as Language)) {
    const lang = firstSegment as Language;
    // If only language code, it's the homepage for that language
    if (segments.length === 1) {
      return { lang, pageName: null };
    }
    // Language code + page name
    return { lang, pageName: segments[1] };
  }
  
  // No language prefix, default to English
  return { lang: 'en', pageName: firstSegment };
}

/**
 * Generate static paths for all pages with all language variants
 */
export function generateAllPagePaths(): Array<{ params: { segments: string[] }; props: { lang: Language; pageName: string | null } }> {
  const pages = ['about', 'contact', 'privacy-policy', 'terms-of-use', 'kerim-alihodza'];
  const paths: Array<{ params: { segments: string[] }; props: { lang: Language; pageName: string | null } }> = [];
  
  // Generate homepage paths for all languages
  translationConfig.supportedLanguages.forEach((lang) => {
    if (lang === 'en') {
      paths.push({
        params: { segments: [] },
        props: { lang, pageName: null }
      });
    } else {
      paths.push({
        params: { segments: [lang] },
        props: { lang, pageName: null }
      });
    }
  });
  
  // Generate page paths for all languages
  pages.forEach((pageName) => {
    translationConfig.supportedLanguages.forEach((lang) => {
      if (lang === 'en') {
        paths.push({
          params: { segments: [pageName] },
          props: { lang, pageName }
        });
      } else {
        paths.push({
          params: { segments: [lang, pageName] },
          props: { lang, pageName }
        });
      }
    });
  });
  
  return paths;
}

/**
 * Get base path for language-aware URLs
 */
export function getBasePath(lang: Language): string {
  return lang === 'en' ? '' : `/${lang}`;
}

/**
 * Get translated route name for services
 */
export function getServicesRoute(lang: Language): string {
  return getServicesRouteName(lang);
}

/**
 * Get translated route name for projects
 */
export function getProjectsRoute(lang: Language): string {
  return getProjectsRouteName(lang);
}

/**
 * Get full URL path for services page with language prefix
 */
export function getServicesPath(lang: Language): string {
  const route = getServicesRoute(lang);
  return lang === 'en' ? `/${route}/` : `/${lang}/${route}/`;
}

/**
 * Get full URL path for projects page with language prefix
 */
export function getProjectsPath(lang: Language): string {
  const route = getProjectsRoute(lang);
  return lang === 'en' ? `/${route}/` : `/${lang}/${route}/`;
}

/**
 * Get service detail URL with proper language prefix
 */
export function getServiceUrl(lang: Language, serviceId: string): string {
  const servicesPath = getServicesPath(lang);
  return `${servicesPath}${serviceId}/`;
}

/**
 * Get project detail URL with proper language prefix
 */
export function getProjectUrl(lang: Language, projectId: string): string {
  const projectsPath = getProjectsPath(lang);
  return `${projectsPath}${projectId}/`;
}
