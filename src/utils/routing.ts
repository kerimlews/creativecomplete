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

/**
 * Detect language from URL pathname
 * Examples:
 * - /projects/... -> 'en'
 * - /de/projekte/... -> 'de'
 * - /sl/projekti/... -> 'sl'
 */
export function detectLanguageFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  
  // Check if first segment is a language code
  if (segments.length > 0 && translationConfig.supportedLanguages.includes(segments[0] as Language)) {
    return segments[0] as Language;
  }
  
  return 'en'; // Default to English
}

/**
 * Filter content collection items by language based on file path
 * Content files are in format: content/[type]/[lang]/filename.md
 * Project IDs are in format: [lang]/filename (e.g., "en/careconnect-recruitment-automation")
 */
export function filterByLanguage<T extends { id: string; filePath?: string }>(
  items: T[],
  lang: Language
): T[] {
  return items.filter(item => {
    const id = item.id || '';
    const filePath = item.filePath || '';
    
    // Check if ID starts with [lang]/ (e.g., "en/careconnect" or "sl/careconnect")
    if (id.startsWith(`${lang}/`)) {
      return true;
    }
    
    // Check if filePath includes /[lang]/ (e.g., "src/content/projects/en/file.md")
    if (filePath.includes(`/${lang}/`)) {
      return true;
    }
    
    // Check if filePath includes projects/[lang]/ or services/[lang]/
    if (filePath.includes(`projects/${lang}/`) || filePath.includes(`services/${lang}/`)) {
      return true;
    }
    
    return false;
  });
}
