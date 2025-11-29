const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), 'public', 'images');
const blogDir = path.join(imagesDir, 'blog');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });

// Create placeholder SVG content
const createPlaceholderSVG = (width, height, text = '') => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em">${text}</text>
</svg>
`;

// Generate all required placeholder images
const placeholders = [
  { file: 'marketing-growth.webp', text: 'Marketing', width: 800, height: 600 },
  { file: 'local-seo.webp', text: 'Local SEO', width: 800, height: 600 },
  { file: 'branding.webp', text: 'Branding', width: 800, height: 600 },
  { file: 'saas-development.webp', text: 'SaaS Dev', width: 800, height: 600 },
  { file: 'og-default.svg', text: 'CreativeComplete', width: 1200, height: 630 },
  { file: 'blog/social-media-2025.webp', text: 'Social Media 2025', width: 1200, height: 600 }
];

placeholders.forEach(({ file, text, width, height }) => {
  const filePath = path.join(imagesDir, file);
  const svgContent = createPlaceholderSVG(width, height, text);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created: ${filePath}`);
});

console.log('All placeholder images generated!');