import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/images/og');
mkdirSync(OUT, { recursive: true });

const LP1 = "M336.43 0C331.565 13.7255 325.71 26.9815 320.325 40.5105L291 114.126C271.59 162.354 252.72 212.039 232.685 259.822C208.98 257.893 177.76 265.064 157.315 276.896C141.012 286.331 137.408 292.086 125.311 303.849C103.831 324.733 89.9641 340.976 81.9786 371.132C72.6896 406.287 76.3066 446.387 94.9946 477.952C105.738 496.097 124.617 512.337 139.637 527.302C149.738 537.367 171.96 548.472 186.275 552.157L186.34 554.112C147.872 547.787 129.936 533.292 102.992 507.482L68.1636 473.847C56.7396 462.857 38.6242 446.937 28.5157 435.702C8.51015 413.162 -1.67286 383.57 0.224638 353.491C1.45614 330.686 9.39964 308.753 23.0566 290.448C31.8246 278.772 49.4141 263.961 60.7766 253.63L115.831 203.133L232.335 95.9955C266.34 64.463 301.825 30.633 336.43 0Z";
const LP2 = "M286.424 322.545C290.604 322.309 293.349 322.365 297.479 323.347C306.039 325.411 313.399 330.848 317.884 338.421C322.489 346.111 323.869 355.312 321.714 364.013C319.514 372.496 314.069 379.773 306.549 384.277C289.584 394.367 270.204 388.272 260.419 371.477C246.079 372.505 224.584 371.848 209.884 371.781C198.969 383.877 183.994 398.612 172.284 410.332C184.339 422.207 196.254 434.227 208.019 446.392C226.039 446.307 244.059 446.317 262.079 446.427C264.374 440.542 267.244 436.017 272.199 432.032C279.349 426.277 288.524 423.662 297.629 424.782C307.954 426.037 314.924 431.002 321.109 439.017C326.034 446.577 327.819 455.757 326.084 464.607C324.489 473.272 319.419 480.912 312.059 485.752C304.414 490.782 295.084 492.567 286.124 490.712C276.634 488.732 269.989 483.457 264.734 475.522C247.039 475.822 229.224 475.367 211.539 475.542C197.554 475.682 195.629 475.037 186.029 464.882C178.744 457.177 170.464 449.692 162.92 442.157C150.603 431.182 153.295 399.117 157.59 385.266C158.983 380.771 194.344 345.129 198.864 344.278C217.259 340.815 240.469 341.954 259.224 342.385C265.294 330.215 272.959 324.624 286.424 322.545Z";
const LP3 = "M286.764 342.734C294.024 341.13 301.204 345.753 302.749 353.03C304.294 360.307 299.614 367.449 292.324 368.935C285.119 370.403 278.079 365.787 276.549 358.593C275.024 351.4 279.579 344.321 286.764 342.734Z";
const LP4 = "M289.724 445.282C296.804 443.217 304.219 447.272 306.309 454.342C308.399 461.417 304.379 468.847 297.314 470.967C290.209 473.097 282.729 469.047 280.624 461.932C278.524 454.822 282.604 447.357 289.724 445.282Z";

const LOGO = `<g transform="translate(64,64) scale(0.356)">
  <path d="${LP1}" fill="url(#logoGrad)"/>
  <path d="${LP2}" fill="url(#logoGrad)"/>
  <path d="${LP3}" fill="white"/>
  <path d="${LP4}" fill="white"/>
</g>`;

function rgb(hex) {
  return `${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)}`;
}

function row(label, value, y, vc = 'rgba(255,255,255,0.65)') {
  return `  <text x="810" y="${y}" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.38)">${label}</text>
  <text x="1120" y="${y}" font-family="monospace" font-size="12" fill="${vc}" text-anchor="end">${value}</text>
  <line x1="810" y1="${y+10}" x2="1120" y2="${y+10}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>`;
}

function badge(text, x, y, w, bg, stroke, tc) {
  return `  <rect x="${x}" y="${y}" width="${w}" height="22" rx="11" fill="${bg}" stroke="${stroke}" stroke-width="1"/>
  <text x="${x + w/2}" y="${y+15}" font-family="monospace" font-size="10" fill="${tc}" text-anchor="middle">${text}</text>`;
}

function panelHeader(label, accentColor, accentRgb) {
  return `  <rect x="790" y="56" width="350" height="52" rx="20" fill="rgba(${accentRgb},0.07)"/>
  <rect x="790" y="84" width="350" height="24" fill="rgba(${accentRgb},0.07)"/>
  <circle cx="814" cy="82" r="5" fill="${accentColor}" opacity="0.9"/>
  <text x="828" y="87" font-family="monospace" font-size="11" fill="rgba(255,255,255,0.55)">${label}</text>`;
}

function makeSVG({ slug, ac, al, cat, lines, desc, stat, statLabel, panel }) {
  const r = rgb(ac);
  const fs = lines.length === 2 ? 62 : 50;
  const yBase = lines.length === 2 ? 248 : 208;
  const lh = lines.length === 2 ? 76 : 64;
  const afterTitle = yBase + (lines.length - 1) * lh;
  const titleSvg = lines.map((l, i) =>
    `<text x="64" y="${yBase + i * lh}" font-family="Georgia,serif" font-size="${fs}" fill="url(#titleGrad)" letter-spacing="-1.5">${l}</text>`
  ).join('\n');

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#030712"/><stop offset="100%" stop-color="#0a0e1c"/>
  </linearGradient>
  <linearGradient id="glow1" x1="0" y1="0" x2="600" y2="630" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="${ac}" stop-opacity="0.2"/><stop offset="100%" stop-color="${ac}" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="glow2" x1="1200" y1="0" x2="700" y2="630" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="${ac}" stop-opacity="0.12"/><stop offset="100%" stop-color="${ac}" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="logoGrad" x1="0" y1="0" x2="120" y2="200" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#6366f1"/><stop offset="48%" stop-color="#22d3ee"/><stop offset="100%" stop-color="#a855f7"/>
  </linearGradient>
  <linearGradient id="titleGrad" x1="0" y1="0" x2="680" y2="0" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#ffffff"/><stop offset="55%" stop-color="#e0e7ff"/><stop offset="100%" stop-color="${al}"/>
  </linearGradient>
  <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.04)"/>
  </pattern>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<ellipse cx="200" cy="220" rx="520" ry="380" fill="url(#glow1)"/>
<ellipse cx="1060" cy="420" rx="440" ry="340" fill="url(#glow2)"/>
<rect width="1200" height="630" fill="url(#dots)"/>
<rect x="1" y="1" width="1198" height="628" stroke="rgba(255,255,255,0.06)" stroke-width="2" fill="none"/>
${LOGO}
<text x="184" y="116" font-family="Georgia,serif" font-size="27" fill="rgba(255,255,255,0.88)" letter-spacing="-0.3">Creative<tspan fill="${al}">Complete</tspan></text>
<rect x="64" y="148" width="${cat.length * 7.8 + 46}" height="27" rx="13" fill="rgba(${r},0.1)" stroke="rgba(${r},0.35)" stroke-width="1"/>
<circle cx="81" cy="162" r="4" fill="${ac}"/>
<text x="95" y="166" font-family="monospace" font-size="10" fill="${al}" letter-spacing="1.8">${cat.toUpperCase()}</text>
${titleSvg}
<text x="64" y="${afterTitle + 50}" font-family="-apple-system,sans-serif" font-size="16" fill="rgba(255,255,255,0.42)">${desc}</text>
<rect x="64" y="${afterTitle + 76}" width="160" height="72" rx="12" fill="rgba(${r},0.1)" stroke="rgba(${r},0.25)" stroke-width="1"/>
<text x="144" y="${afterTitle + 113}" font-family="Georgia,serif" font-size="26" fill="${al}" text-anchor="middle">${stat}</text>
<text x="144" y="${afterTitle + 134}" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.3)" text-anchor="middle" letter-spacing="1">${statLabel}</text>
<rect x="790" y="56" width="350" height="518" rx="20" fill="rgba(255,255,255,0.022)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
${panel(ac, r)}
<text x="64" y="607" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.18)" letter-spacing="0.3">creativecomplete.com/blog/${slug}/</text>
<rect x="0" y="618" width="1200" height="12" fill="url(#logoGrad)" opacity="0.5"/>
</svg>`;
}

const posts = [
  {
    slug: 'speed-to-lead',
    ac: '#6366f1', al: '#a5b4fc',
    cat: 'Lead Management',
    lines: ['Speed to Lead:', 'The First 5 Minutes'],
    desc: 'Why slow response is the only reason you lose hot leads to competitors.',
    stat: '391%', statLabel: 'MORE CONVERSIONS',
    panel: (ac, r) => `
${panelHeader('Response Time · Conversion Impact', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">RESPONSE TIME</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="end">CONV. RATE</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="810" y="157" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.72)">Under 5 minutes</text>
${badge('80% conversion', 980, 143, 140, 'rgba(34,197,94,0.12)', 'rgba(34,197,94,0.3)', '#4ade80')}
  <line x1="810" y1="172" x2="1120" y2="172" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="196" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.5)">30 minutes</text>
${badge('36% conversion', 980, 182, 140, 'rgba(249,115,22,0.1)', 'rgba(249,115,22,0.25)', '#fb923c')}
  <line x1="810" y1="211" x2="1120" y2="211" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="235" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.35)">1 hour</text>
${badge('11% conversion', 980, 221, 140, 'rgba(239,68,68,0.1)', 'rgba(239,68,68,0.22)', '#f87171')}
  <line x1="810" y1="250" x2="1120" y2="250" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="274" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.2)">24 hours</text>
${badge('2% conversion', 980, 260, 140, 'rgba(239,68,68,0.06)', 'rgba(239,68,68,0.14)', '#ef4444')}
  <line x1="810" y1="290" x2="1120" y2="290" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="322" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.2)" letter-spacing="0.8">CREATIVECOMPLETE AI SYSTEM</text>
${row('AI responds in', '47 seconds', 348, '#a5b4fc')}
${row('Available', '24 / 7 / 365', 388, '#4ade80')}
${row('Hot leads routed instantly', 'Yes', 428, '#a5b4fc')}
${row('Cold leads → nurture', 'Automated', 468, '#a5b4fc')}`,
  },
  {
    slug: 'ai-lead-qualification',
    ac: '#6366f1', al: '#a5b4fc',
    cat: 'Lead Management',
    lines: ['AI Lead Qualification:', 'Score Every Lead'],
    desc: 'BANT scoring via WhatsApp before your team sees a single lead.',
    stat: '92/100', statLabel: 'AI LEAD SCORE',
    panel: (ac, r) => `
${panelHeader('BANT Score · Live Qualification', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">SIGNAL</text>
  <text x="965" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="middle">SCORE</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="end">MAX</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
${row('Budget confirmed', '28', 157, '#a5b4fc')}
  <text x="1120" y="157" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.25)" text-anchor="end">/ 30</text>
  <rect x="810" y="163" width="220" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="163" width="205" height="4" rx="2" fill="rgba(99,102,241,0.7)"/>
${row('Authority identified', '22', 197, '#a5b4fc')}
  <text x="1120" y="197" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.25)" text-anchor="end">/ 25</text>
  <rect x="810" y="203" width="220" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="203" width="194" height="4" rx="2" fill="rgba(99,102,241,0.65)"/>
${row('Need validated', '24', 237, '#a5b4fc')}
  <text x="1120" y="237" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.25)" text-anchor="end">/ 25</text>
  <rect x="810" y="243" width="220" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="243" width="212" height="4" rx="2" fill="rgba(99,102,241,0.75)"/>
${row('Timeline stated', '18', 277, '#a5b4fc')}
  <text x="1120" y="277" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.25)" text-anchor="end">/ 20</text>
  <rect x="810" y="283" width="220" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="283" width="198" height="4" rx="2" fill="rgba(99,102,241,0.7)"/>
  <line x1="810" y1="298" x2="1120" y2="298" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="810" y="326" font-family="-apple-system,sans-serif" font-size="14" fill="rgba(255,255,255,0.6)">Total Score</text>
  <text x="1120" y="326" font-family="Georgia,serif" font-size="22" fill="#a5b4fc" text-anchor="end">92 / 100</text>
${badge('HOT LEAD · Route to Sales', 810, 338, 310, 'rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)', '#4ade80')}
  <line x1="810" y1="372" x2="1120" y2="372" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
${row('Qualified in', '60 seconds', 402, '#a5b4fc')}
${row('No rep time wasted', '100%', 442, '#4ade80')}
${row('Avg. close rate (scored leads)', '3.1×', 482, '#a5b4fc')}`,
  },
  {
    slug: 'automated-lead-distribution',
    ac: '#6366f1', al: '#a5b4fc',
    cat: 'Lead Management',
    lines: ['Automated Lead', 'Distribution'],
    desc: 'The right lead to the right rep in seconds — not hours.',
    stat: '2×', statLabel: 'MORE DEALS CLOSED',
    panel: (ac, r) => `
${panelHeader('Lead Routing · Live Distribution', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">LEAD TYPE</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="end">ROUTED TO</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="810" y="158" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.72)">Score 80–100</text>
${badge('HOT → Closer', 980, 144, 140, 'rgba(34,197,94,0.12)', 'rgba(34,197,94,0.3)', '#4ade80')}
  <line x1="810" y1="172" x2="1120" y2="172" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="197" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.55)">Score 50–79</text>
${badge('WARM → SDR', 980, 183, 140, 'rgba(249,115,22,0.1)', 'rgba(249,115,22,0.25)', '#fb923c')}
  <line x1="810" y1="211" x2="1120" y2="211" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="236" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.4)">Score 20–49</text>
${badge('COLD → Nurture', 980, 222, 140, 'rgba(99,102,241,0.1)', 'rgba(99,102,241,0.25)', '#a5b4fc')}
  <line x1="810" y1="250" x2="1120" y2="250" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="275" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.22)">Score 0–19</text>
${badge('COLD → Archive', 980, 261, 140, 'rgba(255,255,255,0.04)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.3)')}
  <line x1="810" y1="290" x2="1120" y2="290" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="322" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.2)" letter-spacing="0.8">SYSTEM PERFORMANCE</text>
${row('Avg. routing time', '< 3 seconds', 348, '#a5b4fc')}
${row('Reps contacted per lead', '1 (correct rep)', 388, '#4ade80')}
${row('Lead leakage', '0%', 428, '#4ade80')}
${row('Follow-up missed', '0%', 468, '#4ade80')}
${row('Channels covered', '40+', 508, '#a5b4fc')}`,
  },
  {
    slug: 'whatsapp-broadcast-campaigns',
    ac: '#25d166', al: '#4ade80',
    cat: 'WhatsApp',
    lines: ['WhatsApp Broadcast:', 'Database to Revenue'],
    desc: 'How to generate 42.5× ROI from contacts you already own.',
    stat: '42.5×', statLabel: 'CAMPAIGN ROI',
    panel: (ac, r) => `
${panelHeader('Broadcast Campaign · Live Stats', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">METRIC</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="end">VALUE</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
${row('Contacts reached', '8,000', 157, '#4ade80')}
${row('WhatsApp open rate', '98%', 197, '#4ade80')}
${row('Email open rate (same list)', '18%', 237, 'rgba(255,255,255,0.4)')}
${row('Replies in first 2h', '1,847', 277, '#4ade80')}
${row('HOT leads identified', '312', 317, '#4ade80')}
  <line x1="810" y1="328" x2="1120" y2="328" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="810" y="356" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.45)">Revenue generated</text>
  <text x="1120" y="356" font-family="Georgia,serif" font-size="20" fill="#4ade80" text-anchor="end">€75,260</text>
  <line x1="810" y1="366" x2="1120" y2="366" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="392" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.45)">Time to generate</text>
  <text x="1120" y="392" font-family="monospace" font-size="13" fill="#22d3ee" text-anchor="end">48 hours</text>
  <line x1="810" y1="406" x2="1120" y2="406" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
${row('Campaign cost', '€1,769', 432, 'rgba(255,255,255,0.5)')}
  <rect x="810" y="448" width="310" height="60" rx="10" fill="rgba(37,209,102,0.08)" stroke="rgba(37,209,102,0.25)" stroke-width="1"/>
  <text x="965" y="474" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.35)" text-anchor="middle" letter-spacing="1">CAMPAIGN ROI</text>
  <text x="965" y="498" font-family="Georgia,serif" font-size="24" fill="#4ade80" text-anchor="middle">42.5× return</text>`,
  },
  {
    slug: 'whatsapp-lead-generation',
    ac: '#25d166', al: '#4ade80',
    cat: 'WhatsApp',
    lines: ['WhatsApp Lead', 'Generation'],
    desc: 'Turn every DM into a qualified lead with conversational AI.',
    stat: '12.2%', statLabel: 'CONVERSION RATE',
    panel: (ac, r) => `
${panelHeader('Funnel Comparison · WA vs Traditional', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">CHANNEL</text>
  <text x="965" y="126" font-family="monospace" font-size="9" fill="rgba(37,209,102,0.7)" letter-spacing="0.8" text-anchor="middle">WHATSAPP</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="end">TRADITIONAL</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="810" y="158" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Open rate</text>
  <text x="965" y="158" font-family="monospace" font-size="12" fill="#4ade80" text-anchor="middle">98%</text>
  <text x="1120" y="158" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.35)" text-anchor="end">18%</text>
  <line x1="810" y1="168" x2="1120" y2="168" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="193" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Response rate</text>
  <text x="965" y="193" font-family="monospace" font-size="12" fill="#4ade80" text-anchor="middle">45%</text>
  <text x="1120" y="193" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.35)" text-anchor="end">6%</text>
  <line x1="810" y1="203" x2="1120" y2="203" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="228" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Lead conversion</text>
  <text x="965" y="228" font-family="monospace" font-size="12" fill="#4ade80" text-anchor="middle">12.2%</text>
  <text x="1120" y="228" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.35)" text-anchor="end">1.6%</text>
  <line x1="810" y1="238" x2="1120" y2="238" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="263" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Speed to qualify</text>
  <text x="965" y="263" font-family="monospace" font-size="12" fill="#4ade80" text-anchor="middle">60s</text>
  <text x="1120" y="263" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.35)" text-anchor="end">4–6 hours</text>
  <line x1="810" y1="273" x2="1120" y2="273" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="298" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Cost per lead</text>
  <text x="965" y="298" font-family="monospace" font-size="12" fill="#4ade80" text-anchor="middle">60% lower</text>
  <text x="1120" y="298" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.35)" text-anchor="end">baseline</text>
  <line x1="810" y1="308" x2="1120" y2="308" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <text x="810" y="340" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.2)" letter-spacing="0.8">ENTRY POINTS</text>
${row('Meta Click-to-WhatsApp Ads', 'Active', 366, '#4ade80')}
${row('Website WhatsApp Widget', 'Active', 406, '#4ade80')}
${row('Instagram DM Automation', 'Active', 446, '#4ade80')}
${row('QR Code (offline)', 'Active', 486, '#4ade80')}`,
  },
  {
    slug: 'ai-ad-creatives',
    ac: '#22d3ee', al: '#67e8f9',
    cat: 'Ad Creatives',
    lines: ['AI Ad Creatives:', 'Convert 14× Better'],
    desc: 'Generate, test, and scale winning ad variants with AI.',
    stat: '14×', statLabel: 'CONVERSION LIFT',
    panel: (ac, r) => `
${panelHeader('Creative Test · Variant Performance', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">VARIANT</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="end">CTR / CPL</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="810" y="157" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.45)">Variant A — Generic copy</text>
  <text x="1120" y="157" font-family="monospace" font-size="13" fill="rgba(255,255,255,0.4)" text-anchor="end">1.8% / €42</text>
  <rect x="810" y="163" width="180" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="163" width="40" height="4" rx="2" fill="rgba(34,211,238,0.4)"/>
  <line x1="810" y1="178" x2="1120" y2="178" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="202" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.45)">Variant B — Pain-point hook</text>
  <text x="1120" y="202" font-family="monospace" font-size="13" fill="rgba(255,255,255,0.4)" text-anchor="end">3.4% / €22</text>
  <rect x="810" y="208" width="180" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="208" width="88" height="4" rx="2" fill="rgba(34,211,238,0.55)"/>
  <line x1="810" y1="223" x2="1120" y2="223" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <rect x="808" y="230" width="314" height="50" rx="8" fill="rgba(34,211,238,0.07)" stroke="rgba(34,211,238,0.25)" stroke-width="1"/>
  <text x="810" y="252" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.75)">Variant C — Social proof</text>
${badge('WINNER', 1030, 238, 90, 'rgba(34,211,238,0.15)', 'rgba(34,211,238,0.35)', '#22d3ee')}
  <text x="1120" y="271" font-family="monospace" font-size="13" fill="#67e8f9" text-anchor="end">5.7% / €14</text>
  <rect x="810" y="277" width="180" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="277" width="155" height="4" rx="2" fill="rgba(34,211,238,0.8)"/>
  <line x1="810" y1="292" x2="1120" y2="292" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="316" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.45)">Variant D — Video hook</text>
  <text x="1120" y="316" font-family="monospace" font-size="13" fill="rgba(255,255,255,0.35)" text-anchor="end">2.9% / €28</text>
  <rect x="810" y="322" width="180" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="322" width="72" height="4" rx="2" fill="rgba(34,211,238,0.45)"/>
  <line x1="810" y1="336" x2="1120" y2="336" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <text x="810" y="365" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.2)" letter-spacing="0.8">OUTCOME</text>
${row('Winner identified in', '72 hours', 391, '#67e8f9')}
${row('Budget saved vs. manual', '63%', 431, '#4ade80')}
${row('Scale decision confidence', '97%', 471, '#67e8f9')}`,
  },
  {
    slug: 'ad-creative-testing',
    ac: '#22d3ee', al: '#67e8f9',
    cat: 'Ad Creatives',
    lines: ['Ad Creative Testing:', 'Find Winners Fast'],
    desc: 'A systematic framework to find winning ads without burning budget.',
    stat: '95%', statLabel: 'CONFIDENCE THRESHOLD',
    panel: (ac, r) => `
${panelHeader('Statistical Confidence · Decision Rules', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">CONFIDENCE</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="end">ACTION</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="810" y="158" font-family="monospace" font-size="18" fill="rgba(255,255,255,0.35)">80%</text>
${badge('Keep testing', 980, 144, 140, 'rgba(255,255,255,0.04)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.4)')}
  <rect x="810" y="164" width="180" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="164" width="144" height="4" rx="2" fill="rgba(34,211,238,0.35)"/>
  <line x1="810" y1="176" x2="1120" y2="176" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="201" font-family="monospace" font-size="18" fill="rgba(255,255,255,0.55)">90%</text>
${badge('Scale winner', 980, 187, 140, 'rgba(249,115,22,0.1)', 'rgba(249,115,22,0.25)', '#fb923c')}
  <rect x="810" y="207" width="180" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="207" width="162" height="4" rx="2" fill="rgba(34,211,238,0.55)"/>
  <line x1="810" y1="219" x2="1120" y2="219" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="244" font-family="monospace" font-size="18" fill="#67e8f9">95%</text>
${badge('Kill loser · Scale', 980, 230, 140, 'rgba(34,211,238,0.1)', 'rgba(34,211,238,0.3)', '#22d3ee')}
  <rect x="810" y="250" width="180" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
  <rect x="810" y="250" width="180" height="4" rx="2" fill="rgba(34,211,238,0.75)"/>
  <line x1="810" y1="262" x2="1120" y2="262" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <text x="810" y="292" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.2)" letter-spacing="0.8">TESTING FRAMEWORK</text>
${row('Phase 1 — Generate variants', 'AI-assisted', 318, '#67e8f9')}
${row('Phase 2 — Structure test', 'A/B isolated', 358, '#67e8f9')}
${row('Phase 3 — Monitor', 'Real-time', 398, '#67e8f9')}
${row('Phase 4 — Scale', 'Auto-budget', 438, '#67e8f9')}
  <line x1="810" y1="450" x2="1120" y2="450" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
${row('Avg. CPL reduction', '40–60%', 476, '#4ade80')}
${row('Time to winner', '72 hours', 516, '#67e8f9')}`,
  },
  {
    slug: 'ai-sales-agents',
    ac: '#a855f7', al: '#d8b4fe',
    cat: 'AI Agents',
    lines: ['AI Sales Agents:', 'Qualify While You Sleep'],
    desc: 'Close 24/7 with AI agents that never miss a follow-up.',
    stat: '24/7', statLabel: 'ALWAYS ON',
    panel: (ac, r) => `
${panelHeader('Coverage Gap · Human vs AI Agent', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">METRIC</text>
  <text x="965" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="middle">HUMAN</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(168,85,247,0.8)" letter-spacing="0.8" text-anchor="end">AI AGENT</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="810" y="158" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Active hours / day</text>
  <text x="965" y="158" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.4)" text-anchor="middle">8h</text>
  <text x="1120" y="158" font-family="monospace" font-size="12" fill="#d8b4fe" text-anchor="end">24h</text>
  <line x1="810" y1="168" x2="1120" y2="168" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="193" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Weekend coverage</text>
  <text x="965" y="193" font-family="monospace" font-size="12" fill="rgba(239,68,68,0.8)" text-anchor="middle">No</text>
  <text x="1120" y="193" font-family="monospace" font-size="12" fill="#4ade80" text-anchor="end">Yes</text>
  <line x1="810" y1="203" x2="1120" y2="203" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="228" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Simultaneous conversations</text>
  <text x="965" y="228" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.35)" text-anchor="middle">1</text>
  <text x="1120" y="228" font-family="monospace" font-size="12" fill="#d8b4fe" text-anchor="end">Unlimited</text>
  <line x1="810" y1="238" x2="1120" y2="238" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="263" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">Response time</text>
  <text x="965" y="263" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.35)" text-anchor="middle">15–60 min</text>
  <text x="1120" y="263" font-family="monospace" font-size="12" fill="#d8b4fe" text-anchor="end">&lt; 60 seconds</text>
  <line x1="810" y1="273" x2="1120" y2="273" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="298" font-family="-apple-system,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">After-hours leads captured</text>
  <text x="965" y="298" font-family="monospace" font-size="12" fill="rgba(239,68,68,0.7)" text-anchor="middle">Lost</text>
  <text x="1120" y="298" font-family="monospace" font-size="12" fill="#4ade80" text-anchor="end">100%</text>
  <line x1="810" y1="308" x2="1120" y2="308" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <text x="810" y="340" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.2)" letter-spacing="0.8">AGENT CAPABILITIES</text>
${row('Qualify via WhatsApp', 'BANT scoring', 366, '#d8b4fe')}
${row('Schedule demos', 'Calendar sync', 406, '#d8b4fe')}
${row('Send proposals', 'Automated', 446, '#d8b4fe')}
${row('Follow-up sequences', 'Multi-step', 486, '#d8b4fe')}
${row('CRM update', 'Real-time', 526, '#4ade80')}`,
  },
  {
    slug: 'crm-automation',
    ac: '#f97316', al: '#fb923c',
    cat: 'CRM',
    lines: ['CRM Automation:', 'Stop Admin, Start Closing'],
    desc: 'Pipeline that updates itself — no manual data entry, ever.',
    stat: '80%', statLabel: 'ADMIN ELIMINATED',
    panel: (ac, r) => `
${panelHeader('Pipeline View · This Month', ac, r)}
  <text x="810" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8">STAGE</text>
  <text x="965" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="middle">LEADS</text>
  <text x="1120" y="126" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.25)" letter-spacing="0.8" text-anchor="end">STATUS</text>
  <line x1="810" y1="133" x2="1120" y2="133" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="810" y="158" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.5)">New</text>
  <text x="965" y="158" font-family="monospace" font-size="13" fill="rgba(255,255,255,0.5)" text-anchor="middle">14</text>
${badge('Auto-captured', 980, 144, 140, 'rgba(255,255,255,0.04)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.4)')}
  <line x1="810" y1="172" x2="1120" y2="172" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="197" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.6)">Qualified</text>
  <text x="965" y="197" font-family="monospace" font-size="13" fill="#a5b4fc" text-anchor="middle">8</text>
${badge('AI scored', 980, 183, 140, 'rgba(99,102,241,0.1)', 'rgba(99,102,241,0.25)', '#a5b4fc')}
  <line x1="810" y1="211" x2="1120" y2="211" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="236" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.6)">Demo Scheduled</text>
  <text x="965" y="236" font-family="monospace" font-size="13" fill="#c084fc" text-anchor="middle">5</text>
${badge('Brief auto-sent', 980, 222, 140, 'rgba(168,85,247,0.1)', 'rgba(168,85,247,0.25)', '#c084fc')}
  <line x1="810" y1="250" x2="1120" y2="250" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="275" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.6)">Proposal</text>
  <text x="965" y="275" font-family="monospace" font-size="13" fill="#fb923c" text-anchor="middle">3</text>
${badge('Follow-up active', 980, 261, 140, 'rgba(249,115,22,0.1)', 'rgba(249,115,22,0.25)', '#fb923c')}
  <line x1="810" y1="290" x2="1120" y2="290" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
  <text x="810" y="315" font-family="-apple-system,sans-serif" font-size="13" fill="rgba(255,255,255,0.75)">Closed Won</text>
  <text x="965" y="315" font-family="monospace" font-size="13" fill="#4ade80" text-anchor="middle">11</text>
${badge('This month', 980, 301, 140, 'rgba(34,197,94,0.1)', 'rgba(34,197,94,0.28)', '#4ade80')}
  <line x1="810" y1="330" x2="1120" y2="330" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <rect x="810" y="344" width="310" height="62" rx="10" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.25)" stroke-width="1"/>
  <text x="965" y="370" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.3)" text-anchor="middle" letter-spacing="1">MTD REVENUE</text>
  <text x="965" y="396" font-family="Georgia,serif" font-size="24" fill="#fb923c" text-anchor="middle">€247,400</text>
  <line x1="810" y1="418" x2="1120" y2="418" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
${row('Pipeline updated by', 'System events', 444, '#fb923c')}
${row('Manual data entry required', '0%', 484, '#4ade80')}
${row('Rep time saved / week', '8+ hours', 524, '#fb923c')}`,
  },
];

for (const post of posts) {
  const svg = makeSVG(post);
  writeFileSync(join(OUT, `${post.slug}.svg`), svg, 'utf8');
  console.log(`✓ ${post.slug}.svg`);
}
console.log(`\nGenerated ${posts.length} OG images → public/images/og/`);
