export type Language = 'en' | 'hr' | 'de';

export interface TranslationConfig {
  defaultLanguage: Language;
  supportedLanguages: Language[];
  languageNames: Record<Language, string>;
}

export const translationConfig: TranslationConfig = {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'hr', 'de'],
  languageNames: {
    en: 'English',
    hr: 'Hrvatski',
    de: 'Deutsch'
  }
};

/**
 * Extract language from URL path
 * Example: /hr/services → 'hr'
 */
export function getLanguageFromUrl(url: URL): Language {
  const pathSegments = url.pathname.split('/').filter(Boolean);
  
  // Check if first segment is a supported language
  if (pathSegments.length > 0 && translationConfig.supportedLanguages.includes(pathSegments[0] as Language)) {
    return pathSegments[0] as Language;
  }
  
  return translationConfig.defaultLanguage;
}

/**
 * Get URL for a specific language
 */
export function getLocalizedUrl(path: string, targetLang: Language, currentLang?: Language): string {
  // Remove current language prefix if present
  let cleanPath = path;
  if (currentLang && path.startsWith(`/${currentLang}`)) {
    cleanPath = path.slice(currentLang.length + 1);
  }
  
  // Ensure path starts with slash
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  
  // For default language, don't prefix with language code
  if (targetLang === translationConfig.defaultLanguage) {
    return cleanPath === '/' ? '/' : cleanPath;
  }
  
  // For other languages, prefix with language code
  return `/${targetLang}${cleanPath}`;
}

/**
 * Get all language variants for a page
 */
export function getLanguageAlternates(url: URL, path: string): Array<{ lang: Language; href: string }> {
  const currentLang = getLanguageFromUrl(url);
  
  return translationConfig.supportedLanguages.map(lang => ({
    lang,
    href: getLocalizedUrl(path, lang, currentLang)
  }));
}

/**
 * Simple translation function (in a real app, you'd use i18n library)
 */
export function t(key: string, lang: Language, params: Record<string, string> = {}): string {
  // Simple translation dictionary - in a real app, this would be more comprehensive
  const translations: Record<string, Record<Language, string>> = {
    'nav.home': {
      en: 'Home',
      hr: 'Početna',
      de: 'Startseite'
    },
    'nav.services': {
      en: 'Services',
      hr: 'Usluge',
      de: 'Dienstleistungen'
    },
    'nav.projects': {
      en: 'Projects',
      hr: 'Projekti',
      de: 'Projekte'
    },
    'nav.blog': {
      en: 'Blog',
      hr: 'Blog',
      de: 'Blog'
    },
    'nav.contact': {
      en: 'Contact',
      hr: 'Kontakt',
      de: 'Kontakt'
    },
    'footer.rights': {
      en: 'All rights reserved',
      hr: 'Sva prava pridržana',
      de: 'Alle Rechte vorbehalten'
    },
    'cta.get_started': {
      en: 'Get Started',
      hr: 'Započnite',
      de: 'Loslegen'
    },
    'cta.learn_more': {
      en: 'Learn More',
      hr: 'Saznajte Više',
      de: 'Mehr Erfahren'
    },
    'cta.contact_us': {
      en: 'Contact Us',
      hr: 'Kontaktirajte Nas',
      de: 'Kontaktieren Sie Uns'
    }
  };

  let translation = translations[key]?.[lang] || translations[key]?.[translationConfig.defaultLanguage] || key;
  
  // Replace parameters in translation
  Object.entries(params).forEach(([param, value]) => {
    translation = translation.replace(`{{${param}}}`, value);
  });
  
  return translation;
}

/**
 * Check if a path is the current active page
 */
export function isActivePath(currentPath: string, targetPath: string): boolean {
  const normalizedCurrent = currentPath.replace(/\/$/, '');
  const normalizedTarget = targetPath.replace(/\/$/, '');
  
  if (normalizedTarget === '') {
    return normalizedCurrent === '';
  }
  
  return normalizedCurrent.startsWith(normalizedTarget);
}

/**
 * Get breadcrumb items for a page
 */
export function getBreadcrumbs(path: string, lang: Language): Array<{ name: string; url: string }> {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: Array<{ name: string; url: string }> = [];
  
  let currentPath = '';
  
  // Home breadcrumb
  breadcrumbs.push({
    name: t('nav.home', lang),
    url: getLocalizedUrl('/', lang)
  });
  
  // Add other segments
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    
    // Skip language segment for breadcrumb display
    if (translationConfig.supportedLanguages.includes(segment as Language)) {
      return;
    }
    
    let name = segment;
    
    // Translate common segments
    const translationKey = `nav.${segment}` as keyof typeof translations;
    if (translations[translationKey]) {
      name = t(translationKey, lang);
    } else {
      // Capitalize and replace hyphens
      name = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
    }
    
    breadcrumbs.push({
      name,
      url: getLocalizedUrl(currentPath, lang)
    });
  });
  
  return breadcrumbs;
}