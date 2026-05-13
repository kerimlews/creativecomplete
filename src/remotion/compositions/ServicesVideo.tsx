/**
 * ServicesVideo — 12s · Four AI engines showcase
 * Each engine materialises with holographic card effect
 * No tool brand names visible
 */
import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { C, FONT } from '../shared/tokens';

const ease = Easing.bezier(0.22, 0.68, 0, 1.1);

function fadeIn(frame: number, start: number, dur = 18): number {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
}

const GridBg: React.FC = () => (
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: `
      linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
  }} />
);

/* ── Individual engine card ──────────────────────────────────── */
interface ServiceCardProps {
  icon: React.ReactNode;
  tag: string;
  title: string;
  bullets: string[];
  color: string;
  x: number;
  y: number;
  revealFrame: number;
  frame: number;
  fps: number;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon, tag, title, bullets, color, x, y, revealFrame, frame, fps,
}) => {
  const sc = spring({ frame: frame - revealFrame, fps, config: { damping: 14, stiffness: 100 } });
  const op = fadeIn(frame, revealFrame, 20);

  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: 540, padding: '28px 32px',
      background: `linear-gradient(135deg, ${C.bgCard}, rgba(13,17,23,0.9))`,
      border: `1px solid ${color}35`,
      borderRadius: 16,
      opacity: op,
      transform: `scale(${0.88 + sc * 0.12})`,
      boxShadow: `0 0 0 1px ${color}15, 0 20px 50px rgba(0,0,0,0.6)`,
      overflow: 'hidden',
    }}>
      {/* Top neon accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        opacity: op,
      }} />

      {/* Tag + icon row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: `${color}15`, border: `1px solid ${color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24,
        }}>
          {icon}
        </div>
        <span style={{
          fontSize: 11, fontFamily: FONT.mono, fontWeight: 700,
          color, letterSpacing: 3, textTransform: 'uppercase' as const,
        }}>
          {tag}
        </span>
      </div>

      {/* Title */}
      <div style={{
        fontSize: 28, fontFamily: FONT.display, fontWeight: 700,
        color: C.fg0, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16,
      }}>
        {title}
      </div>

      {/* Bullets */}
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
        {bullets.map((b, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            opacity: fadeIn(frame, revealFrame + 12 + i * 8),
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
              background: color, boxShadow: `0 0 8px ${color}`,
            }} />
            <span style={{ fontSize: 14, color: C.fg1, fontFamily: FONT.sans }}>
              {b}
            </span>
          </div>
        ))}
      </div>

      {/* Holographic grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 16,
        backgroundImage: `
          linear-gradient(${color}04 1px, transparent 1px),
          linear-gradient(90deg, ${color}04 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />
    </div>
  );
};

const services = [
  {
    icon: '🤖',
    tag: '01 · Qualify',
    title: 'AI Lead Qualification',
    color: C.c1,
    bullets: [
      'AI Agents handle first touch 24/7 across 40+ channels',
      'BANT qualification in under 60 seconds, any language',
      'Hot leads routed directly to your sales calendar',
      '80% of routine inquiries fully automated',
    ],
  },
  {
    icon: '🎨',
    tag: '02 · Create',
    title: 'AI Creative Engine',
    color: C.mg,
    bullets: [
      'High-converting ad creatives in minutes, not days',
      'Creative Scoring AI predicts winners before spend',
      'Trained on $35B+ in real ad performance data',
      'Multi-platform: all major ad networks supported',
    ],
  },
  {
    icon: '📡',
    tag: '03 · Capture',
    title: 'Omnichannel Lead Capture',
    color: C.c2,
    bullets: [
      'Unified inbox: WhatsApp, Instagram, TikTok, Facebook + 8 more',
      'Conversation-Led Growth™ framework applied to every channel',
      'Real-time routing with full conversation context',
      'Zero leads fall through the cracks',
    ],
  },
  {
    icon: '💰',
    tag: '04 · Monetize',
    title: 'Existing Lead Monetization',
    color: C.c3,
    bullets: [
      'AI broadcast campaigns averaging 42.5× ROI',
      'Dormant CRM re-engagement flows — auto-personalized',
      'Behavior-triggered sequences based on intent signals',
      'Your existing database becomes recurring revenue',
    ],
  },
];

export const ServicesVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 12s = 360 frames. Reveal each card pair at staggered times.
  // Pair 1 (cards 0+1): frame 20
  // Pair 2 (cards 2+3): frame 100

  const titleOp = fadeIn(frame, 0, 20);
  const titleY = interpolate(frame, [0, 20], [20, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: C.bg, overflow: 'hidden' }}>
      <GridBg />

      {/* Ambient gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${C.c1}12, transparent)`,
      }} />

      {/* Title */}
      <div style={{
        position: 'absolute', top: 32, left: 0, right: 0,
        textAlign: 'center',
        opacity: titleOp, transform: `translateY(${titleY}px)`,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 11, fontFamily: FONT.mono, letterSpacing: 4,
          color: C.c2, textTransform: 'uppercase' as const, marginBottom: 8,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.c2, boxShadow: `0 0 10px ${C.c2}` }} />
          AI Customer System
        </div>
        <div style={{
          fontSize: 48, fontFamily: FONT.display, fontWeight: 700,
          color: C.fg0, letterSpacing: '-0.02em',
        }}>
          Four engines.{' '}
          <span style={{
            background: `linear-gradient(135deg, ${C.c1}, ${C.c2})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Full lifecycle.
          </span>
        </div>
      </div>

      {/* Service cards — 2x2 grid */}
      <ServiceCard {...services[0]} x={40}  y={155} revealFrame={20} frame={frame} fps={fps} />
      <ServiceCard {...services[1]} x={700} y={155} revealFrame={35} frame={frame} fps={fps} />
      <ServiceCard {...services[2]} x={40}  y={430} revealFrame={100} frame={frame} fps={fps} />
      <ServiceCard {...services[3]} x={700} y={430} revealFrame={115} frame={frame} fps={fps} />

      {/* Bottom bar */}
      <div style={{
        position: 'absolute', bottom: 20, left: 0, right: 0,
        textAlign: 'center',
        opacity: fadeIn(frame, 160),
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
      }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: `linear-gradient(135deg, ${C.c1}, ${C.c3})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontFamily: FONT.mono, fontWeight: 700, color: 'white' }}>CC</div>
        <span style={{ fontSize: 15, fontFamily: FONT.display, color: C.fg1 }}>
          CreativeComplete · AI Customer System Agency
        </span>
      </div>
    </AbsoluteFill>
  );
};
