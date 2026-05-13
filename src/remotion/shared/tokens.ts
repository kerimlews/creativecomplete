// Design tokens shared across all video compositions
export const C = {
  bg:     '#030712',
  bgCard: '#0d1117',
  bgElev: '#111827',
  c1:     '#6366f1',  // indigo
  c2:     '#22d3ee',  // cyan
  c3:     '#a855f7',  // violet
  mg:     '#e879f9',  // magenta
  fg0:    '#f9fafb',
  fg1:    '#9ca3af',
  fg2:    '#4b5563',
  line:   'rgba(255,255,255,0.07)',
  red:    '#ef4444',
  green:  '#22c55e',
  orange: '#f97316',
  wa:     '#25d366',
  ig:     '#e879f9',
  tt:     '#ff0050',
  fb:     '#1877f2',
  yt:     '#ff0000',
  li:     '#0a66c2',
} as const;

export const FONT = {
  display: '"Georgia", "Times New Roman", serif',
  sans:    '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
  mono:    '"Courier New", monospace',
} as const;

export const grad = {
  primary: `linear-gradient(135deg, ${C.c1}, ${C.c3}, ${C.c2})`,
  text:    `linear-gradient(135deg, ${C.c1}, ${C.c2})`,
  neon:    `linear-gradient(135deg, ${C.mg}, ${C.c3}, ${C.c2})`,
  dark:    `linear-gradient(180deg, ${C.bgCard}, ${C.bg})`,
} as const;
