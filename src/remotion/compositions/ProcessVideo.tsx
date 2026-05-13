/**
 * ProcessVideo — 12s · 4-step AI Customer System workflow
 * Each step builds on the previous with holographic flow lines
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
function slideUp(f: number, s: number, d = 20): number {
  return interpolate(f, [s, s + d], [24, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
}

const steps = [
  {
    num: '01',
    kicker: 'Any channel · Real-time',
    title: 'Lead Captured',
    body: 'Every lead from WhatsApp, Instagram, TikTok, Facebook, email or web chat enters your AI Customer System instantly — unified in one inbox with full source attribution.',
    channels: [
      { label: 'WA',  color: C.wa  },
      { label: 'IG',  color: C.ig  },
      { label: 'TT',  color: C.tt  },
      { label: 'FB',  color: C.fb  },
      { label: 'EM',  color: C.c1  },
      { label: 'SMS', color: C.c2  },
    ],
    color: C.c1,
    revealAt: 0,
  },
  {
    num: '02',
    kicker: 'Under 60 seconds · 24/7',
    title: 'AI Scores & Routes',
    body: 'AI Agents run full BANT qualification: intent, budget, timeline, authority. Hot leads get booked with full context. Cold leads enter a 90-day AI nurture sequence automatically.',
    scores: [
      { name: 'Sarah K.', score: 91, hot: true  },
      { name: 'Marc B.',  score: 74, hot: false },
      { name: 'Emma R.',  score: 62, hot: false },
    ],
    color: C.c3,
    revealAt: 80,
  },
  {
    num: '03',
    kicker: 'Weekly production · AI-trained',
    title: 'AI Creatives Generated',
    body: 'AI Creative Engine generates 8–12 ad variants weekly, trained on $35B+ in spend data. Creative Scoring AI ranks them before launch. Winners scale automatically.',
    creatives: [97, 91, 89, 72, 68, 65],
    color: C.mg,
    revealAt: 160,
  },
  {
    num: '04',
    kicker: 'Ongoing revenue · Avg. 42.5×',
    title: 'Database Monetized',
    body: 'Your CRM holds leads you already paid for. AI Customer System runs segmented broadcast campaigns and re-engagement flows that average 42.5× ROI from dormant contacts.',
    roi: '42.5×',
    color: C.c2,
    revealAt: 240,
  },
];

export const ProcessVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: C.bg, overflow: 'hidden' }}>

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(${C.c2}04 1px, transparent 1px),
          linear-gradient(90deg, ${C.c2}04 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />

      {/* Title */}
      <div style={{
        position: 'absolute', top: 28, left: 0, right: 0,
        textAlign: 'center', opacity: fadeIn(frame, 0, 15),
        transform: `translateY(${slideUp(frame, 0, 15)}px)`,
      }}>
        <div style={{ fontSize: 11, fontFamily: FONT.mono, letterSpacing: 4, color: C.c2, textTransform: 'uppercase' as const, marginBottom: 6 }}>
          How it works
        </div>
        <div style={{ fontSize: 44, fontFamily: FONT.display, fontWeight: 700, color: C.fg0, letterSpacing: '-0.02em' }}>
          AI Customer System,{' '}
          <span style={{ background: `linear-gradient(90deg, ${C.c1}, ${C.c2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            end to end.
          </span>
        </div>
      </div>

      {/* Flow connector lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {[0, 1, 2].map(i => {
          const lineOp = fadeIn(frame, steps[i + 1].revealAt - 5);
          const lineW = interpolate(frame, [steps[i + 1].revealAt - 5, steps[i + 1].revealAt + 30], [0, 1], { extrapolateRight: 'clamp' });
          const sx = 160 + i * 285 + 200;
          const ex = 160 + (i + 1) * 285;
          return (
            <g key={i} opacity={lineOp}>
              <line x1={sx} y1={360} x2={sx + (ex - sx) * lineW} y2={360}
                stroke={`url(#flowGrad${i})`} strokeWidth={2}
                strokeDasharray="6 4" />
              <circle cx={sx + (ex - sx) * lineW} cy={360} r={4}
                fill={steps[i + 1].color} opacity={lineOp * lineW}
                style={{ filter: `drop-shadow(0 0 6px ${steps[i + 1].color})` }} />
            </g>
          );
        })}
        <defs>
          {[0, 1, 2].map(i => (
            <linearGradient key={i} id={`flowGrad${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={steps[i].color} />
              <stop offset="100%" stopColor={steps[i + 1].color} />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {/* Step cards */}
      {steps.map((s, idx) => {
        const op = fadeIn(frame, s.revealAt);
        const sc = spring({ frame: frame - s.revealAt, fps, config: { damping: 14, stiffness: 90 } });
        const cx = 80 + idx * 285;

        return (
          <div key={idx} style={{
            position: 'absolute',
            left: cx, top: 140,
            width: 265,
            opacity: op,
            transform: `scale(${0.9 + sc * 0.1}) translateY(${Math.max(0, 1 - sc) * 20}px)`,
          }}>
            {/* Step number */}
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: `${s.color}15`, border: `1px solid ${s.color}35`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontFamily: FONT.mono, fontWeight: 700, color: s.color,
              marginBottom: 14,
              boxShadow: `0 0 20px ${s.color}30`,
            }}>
              {s.num}
            </div>

            {/* Kicker */}
            <div style={{
              fontSize: 10, fontFamily: FONT.mono, letterSpacing: 2,
              color: s.color, textTransform: 'uppercase' as const, marginBottom: 8,
            }}>
              {s.kicker}
            </div>

            {/* Title */}
            <div style={{
              fontSize: 26, fontFamily: FONT.display, fontWeight: 700,
              color: C.fg0, letterSpacing: '-0.015em', lineHeight: 1.2, marginBottom: 12,
            }}>
              {s.title}
            </div>

            {/* Body */}
            <div style={{
              fontSize: 12, color: C.fg1, fontFamily: FONT.sans,
              lineHeight: 1.6, marginBottom: 16,
            }}>
              {s.body}
            </div>

            {/* Visual indicator */}
            {'channels' in s && s.channels && (
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 5 }}>
                {(s.channels as Array<{label:string;color:string}>).map((ch, ci) => (
                  <div key={ci} style={{
                    padding: '3px 8px', borderRadius: 20,
                    background: `${ch.color}15`, border: `1px solid ${ch.color}30`,
                    fontSize: 9, fontFamily: FONT.mono, fontWeight: 700,
                    color: ch.color, letterSpacing: 1,
                    opacity: fadeIn(frame, s.revealAt + 12 + ci * 5),
                    boxShadow: `0 0 8px ${ch.color}30`,
                  }}>
                    {ch.label}
                  </div>
                ))}
              </div>
            )}

            {'scores' in s && s.scores && (
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
                {(s.scores as Array<{name:string;score:number;hot:boolean}>).map((sc, si) => (
                  <div key={si} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    opacity: fadeIn(frame, s.revealAt + 14 + si * 8),
                  }}>
                    <span style={{ fontSize: 11, color: C.fg0, fontFamily: FONT.sans, flex: 1 }}>{sc.name}</span>
                    <div style={{
                      flex: 2, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.06)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${sc.score}%`, height: '100%', borderRadius: 2,
                        background: sc.hot ? s.color : C.c2,
                        transition: 'width 1s',
                      }} />
                    </div>
                    <span style={{
                      fontSize: 11, fontFamily: FONT.mono, fontWeight: 700,
                      color: sc.hot ? s.color : C.fg1,
                    }}>
                      {sc.score}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {'creatives' in s && s.creatives && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
                {(s.creatives as number[]).map((score, ci) => (
                  <div key={ci} style={{
                    background: score > 80 ? `${s.color}15` : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${score > 80 ? s.color + '40' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 6, padding: '6px 4px', textAlign: 'center' as const,
                    opacity: fadeIn(frame, s.revealAt + 10 + ci * 6),
                  }}>
                    <div style={{
                      fontSize: 11, fontFamily: FONT.mono, fontWeight: 700,
                      color: score > 80 ? s.color : C.fg2,
                    }}>
                      {score > 80 ? `▲ ${score}` : `▼ ${score}`}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {'roi' in s && (
              <div style={{
                padding: '14px 18px',
                background: `${s.color}08`, border: `1px solid ${s.color}25`,
                borderRadius: 10,
                opacity: fadeIn(frame, s.revealAt + 20),
              }}>
                <div style={{
                  fontSize: 40, fontFamily: FONT.display, letterSpacing: '-0.02em',
                  color: s.color, lineHeight: 1,
                  textShadow: `0 0 24px ${s.color}60`,
                }}>
                  {s.roi}
                </div>
                <div style={{ fontSize: 11, color: C.fg1, marginTop: 4, fontFamily: FONT.sans }}>
                  Average ROI · first campaign
                </div>
              </div>
            )}

            {/* Neon left border */}
            <div style={{
              position: 'absolute', left: -12, top: 0, bottom: 0, width: 2,
              background: `linear-gradient(to bottom, transparent, ${s.color}, transparent)`,
              opacity: op * 0.8,
            }} />
          </div>
        );
      })}

      {/* Bottom logo */}
      <div style={{
        position: 'absolute', bottom: 20, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        opacity: fadeIn(frame, 270, 20),
      }}>
        <div style={{ width: 24, height: 24, borderRadius: 5, background: `linear-gradient(135deg, ${C.c1}, ${C.c3})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontFamily: FONT.mono, fontWeight: 700, color: 'white' }}>CC</div>
        <span style={{ fontSize: 13, fontFamily: FONT.display, color: C.fg1 }}>
          CreativeComplete · AI Customer System
        </span>
      </div>
    </AbsoluteFill>
  );
};
