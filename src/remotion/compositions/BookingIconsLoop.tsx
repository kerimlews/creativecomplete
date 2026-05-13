/**
 * BookingIconsLoop — 4s seamless loop · 1200×180
 * Four animated trust icons for the BookingSection header.
 * Render: npm run video:booking-icons
 */
import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { C, FONT } from '../shared/tokens';

const LOOP_FRAMES = 120; // 4 s at 30 fps

const icons = [
  {
    emoji: '📅',
    label: 'Free audit',
    sub: '30 minutes',
    color: C.c1,
    bobPhase: 0,
  },
  {
    emoji: '⚡',
    label: 'Fast response',
    sub: 'Within 4 hours',
    color: C.c2,
    bobPhase: 1,
  },
  {
    emoji: '🛡️',
    label: 'No obligation',
    sub: 'Cancel anytime',
    color: C.c3,
    bobPhase: 2,
  },
  {
    emoji: '🏢',
    label: 'Agencies only',
    sub: 'Qualified calls',
    color: C.mg,
    bobPhase: 3,
  },
] as const;

function bob(frame: number, phase: number, amplitude = 5, period = 90): number {
  return Math.sin(((frame + phase * 22) / period) * Math.PI * 2) * amplitude;
}

function pulseScale(frame: number, phase: number): number {
  return 1 + 0.08 * Math.sin(((frame + phase * 30) / 70) * Math.PI * 2);
}

function pulseGlowOpacity(frame: number, phase: number): number {
  return 0.35 + 0.25 * Math.abs(Math.sin(((frame + phase * 30) / 55) * Math.PI * 2));
}

interface IconPillProps {
  emoji: string;
  label: string;
  sub: string;
  color: string;
  bobPhase: number;
  revealFrame: number;
  frame: number;
  fps: number;
}

const IconPill: React.FC<IconPillProps> = ({
  emoji, label, sub, color, bobPhase, revealFrame, frame, fps,
}) => {
  const sc = spring({
    frame: frame - revealFrame,
    fps,
    config: { damping: 12, stiffness: 120 },
  });
  const op = interpolate(frame, [revealFrame, revealFrame + 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const entryY = interpolate(sc, [0, 1], [28, 0]);
  const floatY = frame > revealFrame + 30 ? bob(frame, bobPhase) : 0;
  const iconScale = frame > revealFrame + 30 ? pulseScale(frame, bobPhase) : 1;
  const glowOp = frame > revealFrame + 20 ? pulseGlowOpacity(frame, bobPhase) : 0;
  const ringScale = 1 + 0.18 * Math.abs(Math.sin(((frame + bobPhase * 30) / 55) * Math.PI * 2));

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      opacity: op,
      transform: `translateY(${entryY + floatY}px)`,
    }}>
      {/* Icon circle */}
      <div style={{ position: 'relative', width: 72, height: 72 }}>
        {/* Outer pulse ring */}
        <div style={{
          position: 'absolute',
          inset: -8,
          borderRadius: '50%',
          border: `1.5px solid ${color}`,
          opacity: glowOp * 0.5,
          transform: `scale(${ringScale})`,
        }} />
        {/* Inner glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: color,
          opacity: glowOp * 0.12,
          filter: 'blur(8px)',
          transform: `scale(${iconScale})`,
        }} />
        {/* Circle */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: `${color}14`,
          border: `1.5px solid ${color}45`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          transform: `scale(${iconScale})`,
          boxShadow: `0 0 20px ${color}${Math.round(glowOp * 60).toString(16).padStart(2, '0')}`,
        }}>
          {emoji}
        </div>
      </div>

      {/* Text */}
      <div style={{ textAlign: 'center', lineHeight: 1 }}>
        <div style={{
          fontSize: 14,
          fontFamily: FONT.sans,
          fontWeight: 600,
          color: C.fg0,
          letterSpacing: '-0.01em',
          marginBottom: 5,
        }}>
          {label}
        </div>
        <div style={{
          fontSize: 10,
          fontFamily: FONT.mono,
          color,
          letterSpacing: '0.1em',
          textTransform: 'uppercase' as const,
          opacity: 0.85,
        }}>
          {sub}
        </div>
      </div>
    </div>
  );
};

/* Subtle animated grid lines */
const GridLines: React.FC = () => (
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: [
      'linear-gradient(rgba(99,102,241,0.025) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(99,102,241,0.025) 1px, transparent 1px)',
    ].join(','),
    backgroundSize: '40px 40px',
  }} />
);

export const BookingIconsLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const dividerOp = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(180deg, #0d1117 0%, #030712 100%)',
      overflow: 'hidden',
    }}>
      <GridLines />

      {/* Ambient glow top-center */}
      <div style={{
        position: 'absolute',
        top: -60,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 600,
        height: 160,
        background: `radial-gradient(ellipse, ${C.c1}18, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Icon row */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
        gap: 0,
      }}>
        {icons.map((item, i) => (
          <React.Fragment key={i}>
            <IconPill
              emoji={item.emoji}
              label={item.label}
              sub={item.sub}
              color={item.color}
              bobPhase={item.bobPhase}
              revealFrame={i * 14}
              frame={frame}
              fps={fps}
            />

            {/* Vertical divider between icons */}
            {i < icons.length - 1 && (
              <div style={{
                width: 1,
                height: 48,
                background: `linear-gradient(180deg, transparent, ${C.line} 40%, ${C.line} 60%, transparent)`,
                flexShrink: 0,
                opacity: dividerOp,
              }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </AbsoluteFill>
  );
};
