/**
 * ResultsVideo — 8s · Key stats counting up with neon glow
 * Holographic presentation of proven results
 */
import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { C, FONT } from '../shared/tokens';

function fadeIn(f: number, s: number, d = 18): number {
  return interpolate(f, [s, s + d], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
}

const stats = [
  {
    n: 81,       suffix: '%',  label: 'Lead Conversion Rate',       sub: 'AI-qualified leads',        color: C.c1,  revealAt: 20  },
  {
    n: 60,       suffix: '%',  label: 'Faster Sales Cycles',        sub: 'vs. manual teams',          color: C.mg,  revealAt: 50  },
  {
    n: 42.5,     suffix: '×',  label: 'Broadcast Campaign ROI',     sub: 'From existing database',    color: C.c2,  revealAt: 80  },
  {
    n: 14,       suffix: '×',  label: 'More Ad Conversions',        sub: 'AI creatives vs. manual',   color: C.c3,  revealAt: 110 },
];

interface CounterProps {
  target: number;
  suffix: string;
  startFrame: number;
  color: string;
  frame: number;
}
const Counter: React.FC<CounterProps> = ({ target, suffix, startFrame, color, frame }) => {
  const dur = 60;
  const t = Math.max(0, Math.min((frame - startFrame) / dur, 1));
  const eased = 1 - Math.pow(1 - t, 3);
  const val = eased * target;
  const display = target % 1 !== 0 ? val.toFixed(1) : Math.round(val).toString();
  const glowIntensity = interpolate(t, [0, 0.5, 1], [0, 1, 0.6]);

  return (
    <span style={{
      fontSize: 92, fontFamily: FONT.display, fontWeight: 700,
      color, letterSpacing: '-0.03em', lineHeight: 1,
      textShadow: `0 0 ${20 + glowIntensity * 40}px ${color}${Math.round(glowIntensity * 80).toString(16).padStart(2, '0')}`,
    }}>
      {display}{suffix}
    </span>
  );
};

export const ResultsVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scan line
  const scanY = interpolate(frame % 80, [0, 80], [-2, 102]);

  return (
    <AbsoluteFill style={{ background: C.bg, overflow: 'hidden' }}>

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '56px 56px',
      }} />

      {/* Scan line */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: `${scanY}%`, height: 1,
        background: `linear-gradient(90deg, transparent, ${C.c2}80, transparent)`,
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${C.c1}10, transparent)`,
      }} />

      {/* Title */}
      <div style={{
        position: 'absolute', top: 36, left: 0, right: 0,
        textAlign: 'center',
        opacity: fadeIn(frame, 0, 15),
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 11, fontFamily: FONT.mono, letterSpacing: 4,
          color: C.c2, textTransform: 'uppercase' as const, marginBottom: 8,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.c2, boxShadow: `0 0 12px ${C.c2}` }} />
          Proven results across 50+ agencies
        </div>
        <div style={{ fontSize: 48, fontFamily: FONT.display, fontWeight: 700, color: C.fg0, letterSpacing: '-0.02em' }}>
          Numbers that{' '}
          <span style={{ background: `linear-gradient(135deg, ${C.c1}, ${C.c2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            speak for themselves.
          </span>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{
        position: 'absolute', top: 190, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', gap: 24,
        padding: '0 40px',
      }}>
        {stats.map((s, i) => {
          const sc = spring({
            frame: frame - s.revealAt, fps,
            config: { damping: 16, stiffness: 90 },
          });
          const op = fadeIn(frame, s.revealAt);

          return (
            <div key={i} style={{
              flex: 1, maxWidth: 280,
              padding: '28px 24px',
              background: `linear-gradient(135deg, ${C.bgCard}, rgba(13,17,23,0.9))`,
              border: `1px solid ${s.color}30`,
              borderRadius: 16,
              opacity: op,
              transform: `scale(${0.85 + sc * 0.15}) translateY(${Math.max(0, 1 - sc) * 24}px)`,
              boxShadow: `0 0 0 1px ${s.color}15, 0 20px 40px rgba(0,0,0,0.5)`,
              position: 'relative' as const, overflow: 'hidden',
            }}>
              {/* Top glow line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                opacity: op,
              }} />

              {/* Inner grid */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: 16,
                backgroundImage: `
                  linear-gradient(${s.color}04 1px, transparent 1px),
                  linear-gradient(90deg, ${s.color}04 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }} />

              <div style={{ position: 'relative' }}>
                <Counter
                  target={s.n} suffix={s.suffix}
                  startFrame={s.revealAt} color={s.color} frame={frame}
                />
                <div style={{
                  fontSize: 16, fontFamily: FONT.sans, fontWeight: 600,
                  color: C.fg0, marginTop: 10, lineHeight: 1.3,
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontSize: 12, fontFamily: FONT.mono, color: C.fg2,
                  marginTop: 4, letterSpacing: '0.03em',
                }}>
                  {s.sub}
                </div>

                {/* Animated bar */}
                <div style={{
                  height: 3, borderRadius: 2, marginTop: 16,
                  background: 'rgba(255,255,255,0.06)', overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%', borderRadius: 2,
                    background: `linear-gradient(90deg, ${s.color}, ${s.color}60)`,
                    width: `${Math.min(100, (1 - Math.pow(1 - Math.max(0, Math.min((frame - s.revealAt) / 50, 1)), 3)) * 100)}%`,
                    boxShadow: `0 0 8px ${s.color}`,
                  }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom call-out */}
      <div style={{
        position: 'absolute', bottom: 48, left: 0, right: 0,
        textAlign: 'center',
        opacity: fadeIn(frame, 150, 20),
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 16,
          padding: '14px 28px', borderRadius: 40,
          background: `${C.c1}10`, border: `1px solid ${C.c1}25`,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.c2, boxShadow: `0 0 10px ${C.c2}` }} />
          <span style={{ fontSize: 15, fontFamily: FONT.sans, color: C.fg1 }}>
            Medians across all client engagements — not cherry-picked outliers
          </span>
        </div>
      </div>

      {/* Logo */}
      <div style={{
        position: 'absolute', bottom: 16, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        opacity: fadeIn(frame, 180, 15),
      }}>
        <div style={{ width: 22, height: 22, borderRadius: 5, background: `linear-gradient(135deg, ${C.c1}, ${C.c3})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontFamily: FONT.mono, fontWeight: 700, color: 'white' }}>CC</div>
        <span style={{ fontSize: 12, fontFamily: FONT.display, color: C.fg2 }}>
          CreativeComplete
        </span>
      </div>
    </AbsoluteFill>
  );
};
