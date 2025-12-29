// Animated SVG Icons for Services - Reusable across components
export const getServiceIcon = (serviceSlug: string, serviceCategory: string = '', index: number = 0): string => {
  // Generate unique gradient IDs to avoid conflicts
  const uniqueId = `grad${index}${Date.now()}`;
  
  // Determine icon type based on slug or category
  let iconType = 'web';
  if (serviceSlug.includes('automation') || serviceCategory.toLowerCase().includes('automation')) {
    iconType = 'automation';
  } else if (serviceSlug.includes('seo') || serviceCategory.toLowerCase().includes('seo')) {
    iconType = 'seo';
  } else if (serviceSlug.includes('saas') || serviceCategory.toLowerCase().includes('saas')) {
    iconType = 'saas';
  } else if (serviceSlug.includes('mobile') || serviceCategory.toLowerCase().includes('mobile')) {
    iconType = 'mobile';
  } else if (serviceSlug.includes('ecommerce') || serviceCategory.toLowerCase().includes('ecommerce')) {
    iconType = 'ecommerce';
  }
  
  const icons: Record<string, string> = {
    automation: `<svg viewBox="0 0 24 24" fill="none" class="service-icon service-icon-automation">
      <defs>
        <linearGradient id="automationGrad${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
          <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="100%;0%;100%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87V4a1 1 0 00-1.6-.8L4.727 6.8a1 1 0 00-.001 1.6l3.2 2.133a1 1 0 01.4.8v5.133a1 1 0 01-1.6.8L2.4 11.2a1 1 0 00-1.6.8v6a1 1 0 001.6.8l4.072-3.067a1 1 0 011.6.8v5.133a1 1 0 001.6.8l4.072-3.067a1 1 0 01.928-.133l6.856 2.285a1 1 0 001.264-1.265l-2.285-6.856a1 1 0 00-.133-.928l-3.067-4.072a1 1 0 00-.8-.4h-5.133a1 1 0 01-.8-.4z" 
            stroke="url(#automationGrad${uniqueId})" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" values="0 50;50 0;0 50" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>`,
    saas: `<svg viewBox="0 0 24 24" fill="none" class="service-icon service-icon-saas">
      <defs>
        <linearGradient id="saasGrad${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="100%;0%;100%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" 
            stroke="url(#saasGrad${uniqueId})" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="8s" repeatCount="indefinite" />
      </path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="url(#saasGrad${uniqueId})" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="12" y1="22.08" x2="12" y2="12" stroke="url(#saasGrad${uniqueId})" stroke-width="2.5" stroke-linecap="round" />
    </svg>`,
    ecommerce: `<svg viewBox="0 0 24 24" fill="none" class="service-icon service-icon-ecommerce">
      <defs>
        <linearGradient id="ecommerceGrad${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f093fb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f5576c;stop-opacity:1" />
          <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="100%;0%;100%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <circle cx="9" cy="21" r="2" fill="url(#ecommerceGrad${uniqueId})">
        <animate attributeName="r" values="2;2.5;2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="21" r="2" fill="url(#ecommerceGrad${uniqueId})">
        <animate attributeName="r" values="2;2.5;2" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
      </circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" 
            stroke="url(#ecommerceGrad${uniqueId})" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" values="0 30;30 0" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>`,
    mobile: `<svg viewBox="0 0 24 24" fill="none" class="service-icon service-icon-mobile">
      <defs>
        <linearGradient id="mobileGrad${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4facfe;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:1" />
          <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="100%;0%;100%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" 
            stroke="url(#mobileGrad${uniqueId})" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <animate attributeName="rx" values="2;3;2" dur="2s" repeatCount="indefinite" />
      </rect>
      <circle cx="12" cy="18" r="1.5" fill="url(#mobileGrad${uniqueId})">
        <animate attributeName="r" values="1.5;2;1.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>`,
    seo: `<svg viewBox="0 0 24 24" fill="none" class="service-icon service-icon-seo">
      <defs>
        <linearGradient id="seoGrad${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fa709a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#fee140;stop-opacity:1" />
          <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="100%;0%;100%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <path d="M12 19l7-7 3 3-7 7-3-3z" 
            stroke="url(#seoGrad${uniqueId})" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" 
            stroke="url(#seoGrad${uniqueId})" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 2l7.586 7.586" stroke="url(#seoGrad${uniqueId})" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="11" cy="11" r="2.5" fill="url(#seoGrad${uniqueId})">
        <animate attributeName="r" values="2.5;3;2.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>`,
    web: `<svg viewBox="0 0 24 24" fill="none" class="service-icon service-icon-web">
      <defs>
        <linearGradient id="webGrad${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#30cfd0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#330867;stop-opacity:1" />
          <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="100%;0%;100%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" 
            stroke="url(#webGrad${uniqueId})" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <animate attributeName="rx" values="2;4;2" dur="2s" repeatCount="indefinite" />
      </rect>
      <path d="M2 8h20" stroke="url(#webGrad${uniqueId})" stroke-width="2.5" stroke-linecap="round">
        <animate attributeName="stroke-dasharray" values="0 24;24 0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M8 21V8" stroke="url(#webGrad${uniqueId})" stroke-width="2.5" stroke-linecap="round">
        <animate attributeName="stroke-dasharray" values="0 13;13 0" dur="2s" begin="1s" repeatCount="indefinite" />
      </path>
    </svg>`
  };
  
  return icons[iconType] || icons.web;
};




