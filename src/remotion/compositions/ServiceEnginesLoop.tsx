/**
 * ServiceEnginesLoop — 5s seamless loop · 1200×200
 * Four AI engine icons for the Services section header.
 * Render: npm run video:service-engines
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

const LOOP_FRAMES = 150; // 5s at 30fps

const engines = [
  {
    num: '01',
    icon: '🤖',
    title: 'AI Lead Qualification',
    metric: '60 sec',
    metricLabel: 'avg qualify time',
    color: C.c1,
    bobPhase: 0,
  },
  {
    num: '02',
    icon: '🎨',
    title: 'AI Creative Engine',
    metric: '90%+',
    metricLabel: 'prediction accuracy',
    color: C.c3,
    bobPhase: 1,
  },
  {
    num: '03',
    icon: '📡',
    title: 'Lead Capture',
    metric: '40+',
    metricLabel: 'channels unified',
    color: C.c2,
    bobPhase: 2,
  },
  {
    num: '04',
    icon: '💰',
    title: 'Lead Monetization',
    metric: '42.5×',
    metricLabel: 'avg ROI',
    color: C.mg,
    bobPhase: 3,
  },
] as const;

/* Smooth seamless bob */
function bob(frame: number, phase: number): number {
  return Math.sin(((frame + phase * 24) / 100) * Math.PI * 2) * 5;
}

/* Breathing glow */
function glow(frame: number, phase: number): number {
  return 0.3 + 0.35 * Math.abs(Math.sin(((frame + phase * 28) / 65) * Math.PI * 2));
}

/* Pulse ring scale */
function ring(frame: number, phase: number): number {
  return 1 + 0.2 * Math.abs(Math.sin(((frame + phase * 28) / 65) * Math.PI * 2));
}

/* Subtle number counter tick for the metric */
function metricPulse(frame: number, phase: number): number {
  return 0.75 + 0.25 * Math.abs(Math.sin(((frame + phase * 20) / 50) * Math.PI * 2));
}

interface EngineCardProps {
  num: string;
  icon: string;
  title: string;
  metric: string;
  metricLabel: string;
  color: string;
  bobPhase: number;
  revealFrame: number;
  frame: number;
  fps: number;
}

const EngineCard: React.FC<EngineCardProps> = ({
  num, icon, title, metric, metricLabel, color, bobPhase, revealFrame, frame, fps,
}) => {
  const sc = spring({
    frame: frame - revealFrame,
    fps,
    config: { damping: 11, stiffness: 130 },
  });
  const op = interpolate(frame, [revealFrame, revealFrame + 16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const entryY = interpolate(sc, [0, 1], [32, 0]);
  const floatY = frame > revealFrame + 25 ? bob(frame, bobPhase) : 0;
  const glowOp = frame > revealFrame + 20 ? glow(frame, bobPhase) : 0;
  const ringScale = frame > revealFrame + 20 ? ring(frame, bobPhase) : 1;
  const mPulse = frame > revealFrame + 20 ? metricPulse(frame, bobPhase) : 1;

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0,
      opacity: op,
      transform: `translateY(${entryY + floatY}px)`,
      padding: '0 8px',
    }}>
      {/* Card */}
      <div style={{
        width: '100%',
        background: `linear-gradient(160deg, ${C.bgCard}, #0a0e18)`,
        border: `1px solid ${color}30`,
        borderRadius: 16,
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: `0 0 ${20 + glowOp * 20}px ${color}${Math.round(glowOp * 40).toString(16).padStart(2, '0')}`,
      }}>
        {/* Top neon line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, height: 1.5,
          background: `linear-gradient(90deg, transparent, ${color}70, transparent)`,
          opacity: glowOp + 0.2,
        }} />

        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 16,
          backgroundImage: [
            `linear-gradient(${color}03 1px, transparent 1px)`,
            `linear-gradient(90deg, ${color}03 1px, transparent 1px)`,
          ].join(','),
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        }} />

        {/* Header row: num tag + icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: FONT.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.14em',
            color,
            background: `${color}12`,
            border: `1px solid ${color}28`,
            borderRadius: 4,
            padding: '2px 7px',
          }}>
            {num}
          </span>

          {/* Icon with pulse ring */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: -6,
              borderRadius: '50%',
              border: `1px solid ${color}50`,
              opacity: glowOp * 0.6,
              transform: `scale(${ringScale})`,
            }} />
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: `${color}15`,
              border: `1px solid ${color}35`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              boxShadow: `0 0 ${12 + glowOp * 10}px ${color}28`,
            }}>
              {icon}
            </div>
          </div>
        </div>

        {/* Title */}
        <div style={{
          fontFamily: FONT.sans,
          fontSize: 13,
          fontWeight: 600,
          color: C.fg0,
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
        }}>
          {title}
        </div>

        {/* Metric */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          paddingTop: 8,
          borderTop: `1px solid ${color}18`,
        }}>
          <div style={{
            fontFamily: FONT.display,
            fontSize: 24,
            letterSpacing: '-0.03em',
            background: `linear-gradient(135deg, ${color}, ${color}99)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            opacity: mPulse,
          }}>
            {metric}
          </div>
          <div style={{
            fontFamily: FONT.mono,
            fontSize: 9,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            color: C.fg2,
          }}>
            {metricLabel}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLines: React.FC = () => (
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: [
      'linear-gradient(rgba(99,102,241,0.025) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(99,102,241,0.025) 1px, transparent 1px)',
    ].join(','),
    backgroundSize: '40px 40px',
  }} />
);

export const ServiceEnginesLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(180deg, #0d1117 0%, #030712 100%)',
      overflow: 'hidden',
    }}>
      <GridLines />

      {/* Top ambient glow */}
      <div style={{
        position: 'absolute',
        top: -80, left: '50%',
        transform: 'translateX(-50%)',
        width: 700, height: 220,
        background: `radial-gradient(ellipse, ${C.c1}16, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Cards row */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '16px 40px',
        gap: 16,
      }}>
        {engines.map((e, i) => (
          <EngineCard
            key={i}
            num={e.num}
            icon={e.icon}
            title={e.title}
            metric={e.metric}
            metricLabel={e.metricLabel}
            color={e.color}
            bobPhase={e.bobPhase}
            revealFrame={i * 12}
            frame={frame}
            fps={fps}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
