/**
 * HeroVideo — 30s cinematic brand video
 * 5 scenes: Broken Agency → Capture → Intelligence → Launch → Reveal
 * No tool brand names visible (consultant confidentiality)
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

/* ── helpers ──────────────────────────────────────────────────── */
const ease = Easing.bezier(0.22, 0.68, 0, 1.1);
const easeOut = Easing.out(Easing.cubic);

function fadeIn(frame: number, start: number, dur = 20): number {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    easing: easeOut,
  });
}
function slideUp(frame: number, start: number, dur = 24): number {
  return interpolate(frame, [start, start + dur], [30, 0], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    easing: ease,
  });
}
function scaleIn(frame: number, start: number, dur = 20): number {
  return interpolate(frame, [start, start + dur], [0.7, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    easing: ease,
  });
}

/* ── Neon glow helper ────────────────────────────────────────── */
function neonGlow(color: string, intensity = 1): string {
  return `0 0 ${12 * intensity}px ${color}, 0 0 ${30 * intensity}px ${color}40`;
}

/* ── Background grid ─────────────────────────────────────────── */
const GridBg: React.FC<{ opacity?: number }> = ({ opacity = 0.04 }) => (
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: `
      linear-gradient(rgba(34,211,238,${opacity}) 1px, transparent 1px),
      linear-gradient(90deg, rgba(34,211,238,${opacity}) 1px, transparent 1px)
    `,
    backgroundSize: '64px 64px',
    pointerEvents: 'none',
  }} />
);

/* ── Scan line ───────────────────────────────────────────────── */
const ScanLine: React.FC = () => {
  const frame = useCurrentFrame();
  const y = interpolate(frame % 90, [0, 90], [-2, 102], {
    extrapolateRight: 'clamp',
  });
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0,
      top: `${y}%`, height: 2,
      background: `linear-gradient(90deg, transparent, ${C.c2}80, ${C.mg}60, transparent)`,
      pointerEvents: 'none', zIndex: 10,
    }} />
  );
};

/* ── Kinetic text ────────────────────────────────────────────── */
interface KineticTextProps {
  text: string; startFrame: number; x?: number; y?: number;
  fontSize?: number; color?: string; gradient?: boolean; center?: boolean;
}
const KineticText: React.FC<KineticTextProps> = ({
  text, startFrame, x = 640, y = 540,
  fontSize = 72, color = C.fg0, gradient = false, center = true,
}) => {
  const frame = useCurrentFrame();
  const words = text.split(' ');
  return (
    <div style={{
      position: 'absolute',
      left: center ? '50%' : x,
      top: y,
      transform: center ? 'translateX(-50%)' : undefined,
      display: 'flex', flexWrap: 'wrap', gap: 16,
      justifyContent: center ? 'center' : 'flex-start',
      width: 1100, textAlign: center ? 'center' : 'left',
    }}>
      {words.map((word, i) => {
        const wFrame = startFrame + i * 6;
        const op = fadeIn(frame, wFrame);
        const ty = slideUp(frame, wFrame);
        return (
          <span key={i} style={{
            opacity: op,
            transform: `translateY(${ty}px)`,
            fontSize,
            fontFamily: FONT.display,
            fontWeight: 700,
            color: gradient ? 'transparent' : color,
            background: gradient ? `linear-gradient(135deg, ${C.c1}, ${C.c2})` : undefined,
            WebkitBackgroundClip: gradient ? 'text' : undefined,
            WebkitTextFillColor: gradient ? 'transparent' : undefined,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            textShadow: gradient ? undefined : `0 0 40px ${color}30`,
          }}>
            {word}
          </span>
        );
      })}
    </div>
  );
};

/* ── Phone device component ──────────────────────────────────── */
interface PhoneProps {
  x: number; y: number; color: string; label: string;
  hasError: boolean; rotation: number; delay: number;
  frame: number; fps: number;
}
const Phone: React.FC<PhoneProps> = ({
  x, y, color, label, hasError, rotation, delay, frame, fps,
}) => {
  const shake = interpolate(
    Math.sin(frame * 0.3 + delay) * 100,
    [-100, 100], [-3, 3]
  );
  const op = fadeIn(frame, delay, 15);
  const sc = scaleIn(frame, delay, 15);
  const batteryFlash = Math.sin(frame * 0.25 + delay) > 0.6 ? 1 : 0.3;
  const errorFlash = Math.sin(frame * 0.4 + delay) > 0.5 ? 1 : 0;

  return (
    <g transform={`translate(${x},${y}) rotate(${rotation + shake})`} opacity={op}>
      <g transform={`scale(${sc})`}>
        {/* Phone body */}
        <rect x={-40} y={-70} width={80} height={140} rx={10}
          fill={C.bgCard} stroke="rgba(255,255,255,0.15)" strokeWidth={1.5} />
        {/* Screen */}
        <rect x={-32} y={-60} width={64} height={108} rx={4}
          fill={color} opacity={0.25} />
        {/* App icon */}
        <text x={0} y={4} textAnchor="middle" dominantBaseline="middle"
          fontSize={22} fontFamily={FONT.mono} fontWeight={700}
          fill={color} style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
          {label}
        </text>
        {/* Battery low indicator */}
        <rect x={-14} y={56} width={28} height={10} rx={2}
          fill="transparent" stroke={C.red} strokeWidth={1} opacity={batteryFlash} />
        <rect x={-12} y={58} width={4} height={6} rx={1}
          fill={C.red} opacity={batteryFlash} />
        {/* Error badge */}
        {hasError && (
          <g opacity={errorFlash}>
            <circle cx={28} cy={-52} r={14}
              fill={C.red} style={{ filter: `drop-shadow(0 0 8px ${C.red})` }} />
            <text x={28} y={-48} textAnchor="middle" dominantBaseline="middle"
              fontSize={16} fontFamily={FONT.sans} fontWeight={900} fill="white">
              !
            </text>
          </g>
        )}
        {/* Notification dots */}
        <circle cx={-22} cy={-55} r={5}
          fill={color} opacity={0.9}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
      </g>
    </g>
  );
};

/* ══════════════════════════════════════════════════════════════
   SCENE 1: The Broken Agency (0-150, 5s)
══════════════════════════════════════════════════════════════ */
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const phones = [
    { x: 180, y: 260, color: C.wa,  label: 'WA',  err: true,  rot: -8,  delay: 5  },
    { x: 380, y: 200, color: C.ig,  label: 'IG',  err: false, rot: 5,   delay: 12 },
    { x: 580, y: 240, color: C.tt,  label: 'TT',  err: true,  rot: -4,  delay: 8  },
    { x: 780, y: 210, color: C.fb,  label: 'FB',  err: true,  rot: 7,   delay: 15 },
    { x: 990, y: 250, color: C.li,  label: 'LI',  err: false, rot: -6,  delay: 10 },
    { x: 250, y: 480, color: C.c2,  label: 'SMS', err: true,  rot: 6,   delay: 18 },
    { x: 500, y: 470, color: C.c1,  label: 'EM',  err: false, rot: -5,  delay: 20 },
    { x: 750, y: 460, color: C.mg,  label: 'WEB', err: true,  rot: 4,   delay: 22 },
    { x: 1000,y: 480, color: C.yt,  label: 'YT',  err: false, rot: -7,  delay: 16 },
  ];

  // Wire-tangle paths between phones
  const wires = [
    `M 180 260 Q 380 350 580 240`,
    `M 380 200 Q 550 300 750 460`,
    `M 580 240 Q 700 180 990 250`,
    `M 780 210 Q 880 350 750 460`,
    `M 250 480 Q 450 420 500 470`,
    `M 500 470 Q 650 300 1000 480`,
  ];

  const wireOp = interpolate(frame, [20, 50], [0, 0.5], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: C.bg, overflow: 'hidden' }}>
      <GridBg opacity={0.03} />

      {/* Ambient red glow — chaos indicator */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(239,68,68,0.08), transparent)`,
        animation: 'none',
        opacity: interpolate(frame, [0, 30, 120, 150], [0, 0.8, 0.8, 0], { extrapolateRight: 'clamp' }),
      }} />

      {/* Tangled wires */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {wires.map((d, i) => (
          <path key={i} d={d} stroke={C.red} strokeWidth={1.5}
            fill="none" opacity={wireOp * (0.4 + i * 0.08)}
            strokeDasharray="8 6" />
        ))}
        {/* Phones */}
        {phones.map((p, i) => (
          <Phone key={i} x={p.x} y={p.y} color={p.color} label={p.label}
            hasError={p.err} rotation={p.rot} delay={p.delay}
            frame={frame} fps={fps} />
        ))}
      </svg>

      {/* Kinetic text */}
      <KineticText
        text="Every channel screaming at once?"
        startFrame={70} y={580} fontSize={68} color={C.fg0}
      />

      {/* Fade-out overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: C.bg,
        opacity: interpolate(frame, [130, 150], [0, 1], { extrapolateRight: 'clamp' }),
      }} />
    </AbsoluteFill>
  );
};

/* ══════════════════════════════════════════════════════════════
   SCENE 2: The Capture (150-360, 7s)
══════════════════════════════════════════════════════════════ */
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  const channels = [
    { label: 'WA', color: C.wa, angle: 0,    r: 320 },
    { label: 'IG', color: C.ig, angle: 40,   r: 300 },
    { label: 'TT', color: C.tt, angle: 80,   r: 310 },
    { label: 'FB', color: C.fb, angle: 120,  r: 290 },
    { label: 'EM', color: C.c1, angle: 160,  r: 305 },
    { label: 'SM', color: C.c2, angle: 200,  r: 315 },
    { label: 'YT', color: C.yt, angle: 240,  r: 295 },
    { label: 'LI', color: C.li, angle: 280,  r: 308 },
    { label: 'WB', color: C.mg, angle: 320,  r: 298 },
  ];

  const cx = 640, cy = 360;

  // Orbit → collapse timing: frame 0-80 orbit, 80-150 collapse, 150-210 sphere
  const collapseProgress = interpolate(frame, [60, 160], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const sphereProgress = interpolate(frame, [150, 200], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    easing: ease,
  });
  const sphereGlow = interpolate(frame, [190, 210], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const flashOp = interpolate(frame, [155, 165, 175], [0, 1, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: C.bg, overflow: 'hidden' }}>
      <GridBg opacity={0.04} />
      <ScanLine />

      {/* Ambient cyan glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${C.c2}20, transparent)`,
        opacity: sphereProgress,
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* Vortex ring */}
        {[1, 0.7, 0.4].map((s, i) => {
          const vortexR = interpolate(collapseProgress, [0, 1], [40 + i * 20, 120 - i * 20]);
          const vOp = collapseProgress * (0.6 - i * 0.15) * (1 - sphereProgress * 0.8);
          const rot = frame * (2 + i * 1.5);
          return (
            <circle key={i} cx={cx} cy={cy} r={vortexR}
              fill="none"
              stroke={`url(#vortexGrad${i})`}
              strokeWidth={2 - i * 0.5}
              opacity={vOp}
              transform={`rotate(${rot}, ${cx}, ${cy})`}
              strokeDasharray={`${20 + i * 10} ${10 + i * 5}`} />
          );
        })}

        <defs>
          <radialGradient id="sphereGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="white" stopOpacity={0.9} />
            <stop offset="40%" stopColor={C.c2} stopOpacity={0.7} />
            <stop offset="70%" stopColor={C.c1} stopOpacity={0.5} />
            <stop offset="100%" stopColor={C.c3} stopOpacity={0.8} />
          </radialGradient>
          {[0, 1, 2].map(i => (
            <linearGradient key={i} id={`vortexGrad${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={C.c2} />
              <stop offset="50%" stopColor={C.mg} />
              <stop offset="100%" stopColor={C.c1} />
            </linearGradient>
          ))}
        </defs>

        {/* Channel orbs orbiting → collapsing */}
        {channels.map((ch, i) => {
          const baseAngle = ch.angle + frame * 1.2;
          const angleRad = (baseAngle * Math.PI) / 180;
          const currentR = ch.r * (1 - collapseProgress) + 2;
          const ox = cx + Math.cos(angleRad) * currentR;
          const oy = cy + Math.sin(angleRad) * currentR;
          const orbOp = (1 - collapseProgress * 0.9) * (1 - sphereProgress);

          return (
            <g key={i} opacity={orbOp}>
              <circle cx={ox} cy={oy} r={28}
                fill={ch.color} fillOpacity={0.15}
                stroke={ch.color} strokeWidth={1.5}
                style={{ filter: `drop-shadow(0 0 10px ${ch.color})` }} />
              <text x={ox} y={oy + 1} textAnchor="middle" dominantBaseline="middle"
                fontSize={13} fontFamily={FONT.mono} fontWeight={700} fill={ch.color}>
                {ch.label}
              </text>
              {/* Trail */}
              <line
                x1={cx + Math.cos(angleRad + 0.3) * (currentR - 15)}
                y1={cy + Math.sin(angleRad + 0.3) * (currentR - 15)}
                x2={ox} y2={oy}
                stroke={ch.color} strokeWidth={1} opacity={0.3} />
            </g>
          );
        })}

        {/* The sphere */}
        <circle cx={cx} cy={cy}
          r={interpolate(sphereProgress, [0, 1], [0, 130])}
          fill="url(#sphereGrad)"
          opacity={sphereProgress * 0.9}
          style={{ filter: `drop-shadow(0 0 ${40 * sphereProgress}px ${C.c2})` }} />

        {/* Sphere inner rings */}
        {[0.55, 0.75, 0.95].map((ratio, i) => (
          <ellipse key={i} cx={cx} cy={cy}
            rx={130 * ratio} ry={130 * ratio * 0.35}
            fill="none" stroke={C.c2} strokeWidth={0.8}
            opacity={sphereProgress * (0.5 - i * 0.1)}
            transform={`rotate(${i * 60 + frame * 0.5}, ${cx}, ${cy})`} />
        ))}

        {/* Sphere center glow */}
        <circle cx={cx} cy={cy} r={30}
          fill="white" opacity={sphereProgress * 0.4}
          style={{ filter: `drop-shadow(0 0 20px white)` }} />

        {/* Flash */}
        <rect x={0} y={0} width={1280} height={720} fill="white" opacity={flashOp} />
      </svg>

      <KineticText
        text="Capture every conversation."
        startFrame={170} y={545} fontSize={60} gradient
      />
      <KineticText
        text="Unify the chaos."
        startFrame={200} y={620} fontSize={52} color={C.fg1}
      />

      {/* Fade out */}
      <div style={{
        position: 'absolute', inset: 0, background: C.bg,
        opacity: interpolate(frame, [190, 210], [0, 1], { extrapolateRight: 'clamp' }),
      }} />
    </AbsoluteFill>
  );
};

/* ══════════════════════════════════════════════════════════════
   SCENE 3: The Intelligence (360-540, 6s)
══════════════════════════════════════════════════════════════ */
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const cx = 500, cy = 360;

  const noiseBubbles = [
    { x: 180, y: 180, label: 'NOISE' }, { x: 820, y: 200, label: 'SPAM'  },
    { x: 100, y: 360, label: 'BOT'   }, { x: 920, y: 350, label: 'COLD'  },
    { x: 200, y: 530, label: 'JUNK'  }, { x: 830, y: 520, label: 'UNQUAL'},
    { x: 350, y: 140, label: 'FAKE'  }, { x: 680, y: 140, label: 'DEAD'  },
  ];

  const filterProgress = interpolate(frame, [30, 90], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut,
  });
  const goldenProgress = interpolate(frame, [95, 130], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease,
  });
  const duplicateProgress = interpolate(frame, [130, 170], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease,
  });

  // Creative cards grid: 5 columns × 2 rows
  const creativeCols = 5;
  const creativeRows = 2;
  const creatives = Array.from({ length: creativeCols * creativeRows }, (_, i) => ({
    col: i % creativeCols, row: Math.floor(i / creativeCols),
  }));

  return (
    <AbsoluteFill style={{
      background: `radial-gradient(ellipse 100% 100% at 50% 50%, ${C.c1}15, ${C.bg})`,
      overflow: 'hidden',
    }}>
      <GridBg opacity={0.05} />

      {/* Ambient sphere glow */}
      <div style={{
        position: 'absolute', left: cx - 200, top: cy - 200,
        width: 400, height: 400, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.c2}25, transparent)`,
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>

        {/* Noise bubbles — fade out when filtered */}
        {noiseBubbles.map((b, i) => {
          const bOp = interpolate(filterProgress, [0, 0.4 + i * 0.06, 0.7 + i * 0.04], [1, 1, 0], {
            extrapolateRight: 'clamp',
          });
          return (
            <g key={i} opacity={bOp}>
              <circle cx={b.x} cy={b.y} r={38}
                fill="rgba(156,163,175,0.1)" stroke="rgba(156,163,175,0.3)" strokeWidth={1} />
              <text x={b.x} y={b.y + 1} textAnchor="middle" dominantBaseline="middle"
                fontSize={10} fontFamily={FONT.mono} fontWeight={700} fill={C.fg2}>
                {b.label}
              </text>
              {filterProgress > 0.2 && (
                <line x1={b.x - 16} y1={b.y - 16} x2={b.x + 16} y2={b.y + 16}
                  stroke={C.red} strokeWidth={2}
                  opacity={Math.min((filterProgress - 0.2) * 3, 1)} />
              )}
            </g>
          );
        })}

        {/* AI Shield hexagon */}
        {(() => {
          const shieldOp = interpolate(filterProgress, [0, 0.3], [0, 1], { extrapolateRight: 'clamp' });
          const shieldPoints = Array.from({ length: 6 }, (_, i) => {
            const a = (i * 60 - 90) * Math.PI / 180;
            return `${cx + Math.cos(a) * 120},${cy + Math.sin(a) * 120}`;
          }).join(' ');
          return (
            <g opacity={shieldOp}>
              <polygon points={shieldPoints}
                fill={`${C.c1}18`} stroke={C.c1} strokeWidth={1.5}
                style={{ filter: `drop-shadow(0 0 20px ${C.c1})` }} />
              <text x={cx} y={cy - 8} textAnchor="middle" fontSize={16} fontFamily={FONT.mono}
                fontWeight={700} fill={C.c2} letterSpacing="4">
                AI FILTER
              </text>
              <text x={cx} y={cy + 14} textAnchor="middle" fontSize={11} fontFamily={FONT.mono}
                fill={C.fg1}>
                QUALIFYING LEADS
              </text>
            </g>
          );
        })()}

        {/* Golden hot lead bubble */}
        <g opacity={goldenProgress}>
          <circle cx={cx} cy={cy} r={interpolate(goldenProgress, [0, 1], [0, 48])}
            fill="rgba(234,179,8,0.2)" stroke="#eab308" strokeWidth={2}
            style={{ filter: `drop-shadow(0 0 20px #eab308)` }} />
          <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
            fontSize={24} fontFamily={FONT.sans} fontWeight={900} fill="#eab308">
            HOT
          </text>
          <text x={cx} y={cy + 22} textAnchor="middle"
            fontSize={11} fontFamily={FONT.mono} fill="#eab308" opacity={0.8}>
            LEAD
          </text>
        </g>

        {/* Duplicate golden bubbles → creatives */}
        {creatives.map((c, i) => {
          const delay = i * 0.06;
          const dupOp = interpolate(duplicateProgress, [delay, delay + 0.2], [0, 1], {
            extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
          });
          const startX = 640, startY = 220;
          const targetX = 200 + c.col * 200;
          const targetY = 200 + c.row * 200;
          const px = interpolate(duplicateProgress, [delay, delay + 0.3], [startX, targetX], {
            extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease,
          });
          const py = interpolate(duplicateProgress, [delay, delay + 0.3], [startY, targetY], {
            extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease,
          });
          const cardProgress = Math.max(0, duplicateProgress - delay - 0.2);

          return (
            <g key={i} opacity={dupOp}>
              {/* Creative card */}
              <rect x={px - 72} y={py - 48} width={144} height={96} rx={6}
                fill={C.bgCard} stroke={`${C.c1}60`} strokeWidth={1}
                style={{ filter: cardProgress > 0 ? `drop-shadow(0 0 8px ${C.c1})` : 'none' }} />
              {/* Card gradient bg */}
              <rect x={px - 68} y={py - 44} width={136} height={60} rx={3}
                fill={`url(#cardGrad${i % 3})`} opacity={cardProgress * 0.6} />
              {/* Score */}
              <text x={px - 58} y={py + 32} fontSize={12} fontFamily={FONT.mono}
                fontWeight={700} fill={i < 6 ? C.c2 : C.fg2}
                opacity={cardProgress}>
                {i < 6 ? `▲ ${95 - i * 2}` : `▼ ${76 - (i - 6) * 3}`}
              </text>
              {i < 6 && (
                <text x={px + 30} y={py + 32} fontSize={9} fontFamily={FONT.mono}
                  fontWeight={700} fill={C.c1} opacity={cardProgress} textAnchor="middle">
                  WIN
                </text>
              )}
            </g>
          );
        })}

        <defs>
          {[0, 1, 2].map(i => (
            <linearGradient key={i} id={`cardGrad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={[C.c1, C.c3, C.c2][i]} stopOpacity={0.4} />
              <stop offset="100%" stopColor={[C.c3, C.c2, C.c1][i]} stopOpacity={0.15} />
            </linearGradient>
          ))}
        </defs>
      </svg>

      <KineticText text="AI Agents filter noise." startFrame={100} y={560} fontSize={58} gradient />
      <KineticText text="AI Creatives scale the signal." startFrame={125} y={630} fontSize={48} color={C.fg1} />

      <div style={{
        position: 'absolute', inset: 0, background: C.bg,
        opacity: interpolate(frame, [160, 180], [0, 1], { extrapolateRight: 'clamp' }),
      }} />
    </AbsoluteFill>
  );
};

/* ══════════════════════════════════════════════════════════════
   SCENE 4: The Launch (540-750, 7s)
══════════════════════════════════════════════════════════════ */
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  const rockets = [
    { x: 280, color: C.c1, scoreLabel: '97', platform: 'SOCIAL', pColor: C.fb   },
    { x: 500, color: C.c3, scoreLabel: '91', platform: 'SEARCH', pColor: C.green },
    { x: 720, color: C.mg, scoreLabel: '89', platform: 'VIDEO',  pColor: C.yt   },
    { x: 940, color: C.c2, scoreLabel: '94', platform: 'SOCIAL', pColor: C.ig   },
  ];

  const launchProgress = interpolate(frame, [0, 100], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut,
  });
  const graphProgress = interpolate(frame, [80, 160], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease,
  });

  return (
    <AbsoluteFill style={{ background: C.bg, overflow: 'hidden' }}>
      <GridBg opacity={0.04} />
      <ScanLine />

      {/* Background neon gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${C.c1}12, transparent)`,
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="roiBar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={C.c2} stopOpacity={0.9} />
            <stop offset="100%" stopColor={C.c1} stopOpacity={0.4} />
          </linearGradient>
        </defs>

        {rockets.map((r, i) => {
          const delay = i * 0.12;
          const rProgress = Math.max(0, launchProgress - delay);
          const ry = interpolate(rProgress, [0, 1], [580, 60]);
          const trailLength = rProgress * 200;
          const trailOp = rProgress * 0.8;
          const platformOp = interpolate(rProgress, [0.7, 0.9], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

          return (
            <g key={i}>
              {/* Rocket trail */}
              <line x1={r.x} y1={ry + 50} x2={r.x} y2={ry + 50 + trailLength}
                stroke={r.color} strokeWidth={3} opacity={trailOp}
                style={{ filter: `drop-shadow(0 0 8px ${r.color})` }} />

              {/* Score numbers in trail */}
              {[0.3, 0.55, 0.8].map((t, si) => (
                <text key={si} x={r.x + 12} y={ry + 50 + trailLength * t}
                  fontSize={11} fontFamily={FONT.mono} fontWeight={700}
                  fill={r.color} opacity={trailOp * (0.6 + si * 0.13)}>
                  {r.scoreLabel}
                </text>
              ))}

              {/* Rocket body */}
              <g transform={`translate(${r.x}, ${ry})`}
                style={{ filter: `drop-shadow(0 0 16px ${r.color})` }}>
                {/* Nose */}
                <polygon points={`0,-30 -12,0 12,0`} fill={r.color} />
                {/* Body */}
                <rect x={-12} y={0} width={24} height={30} rx={3} fill={r.color} fillOpacity={0.7} />
                {/* Flame */}
                <polygon points={`-8,30 0,${30 + rProgress * 20} 8,30`}
                  fill={C.orange} opacity={0.9}
                  style={{ filter: `drop-shadow(0 0 12px ${C.orange})` }} />
                {/* Window */}
                <circle cx={0} cy={12} r={6} fill="rgba(255,255,255,0.8)" />
              </g>

              {/* Platform badge */}
              <g opacity={platformOp}>
                <rect x={r.x - 40} y={30} width={80} height={28} rx={14}
                  fill={r.pColor} fillOpacity={0.15}
                  stroke={r.pColor} strokeWidth={1.2} />
                <text x={r.x} y={47} textAnchor="middle"
                  fontSize={11} fontFamily={FONT.mono} fontWeight={700} fill={r.pColor}
                  letterSpacing="2">
                  {r.platform}
                </text>
              </g>
            </g>
          );
        })}

        {/* ROI Bar chart */}
        {[0.4, 0.65, 0.85, 1.0].map((h, i) => {
          const barH = h * 280 * graphProgress;
          const barX = 1050 + i * 52;
          const barLabel = ['10×', '20×', '35×', '42.5×'][i];
          return (
            <g key={i}>
              <rect x={barX} y={420 - barH} width={40} height={barH}
                fill="url(#roiBar)" rx={4}
                opacity={graphProgress * 0.9} />
              <text x={barX + 20} y={440} textAnchor="middle"
                fontSize={10} fontFamily={FONT.mono} fill={C.fg1}>
                {barLabel}
              </text>
            </g>
          );
        })}
        {/* Graph label */}
        <text x={1110} y={150} textAnchor="middle"
          fontSize={20} fontFamily={FONT.mono} fontWeight={700}
          fill={C.c2} opacity={graphProgress}
          style={{ filter: `drop-shadow(0 0 12px ${C.c2})` }}>
          42.5× ROI
        </text>
      </svg>

      <KineticText text="Launch hyper-personalized ads" startFrame={120} y={558} fontSize={58} gradient />
      <KineticText text="at lightspeed." startFrame={150} y={630} fontSize={52} color={C.c2} />

      <div style={{
        position: 'absolute', inset: 0, background: C.bg,
        opacity: interpolate(frame, [185, 210], [0, 1], { extrapolateRight: 'clamp' }),
      }} />
    </AbsoluteFill>
  );
};

/* ══════════════════════════════════════════════════════════════
   SCENE 5: The Reveal (750-900, 5s)
══════════════════════════════════════════════════════════════ */
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardOp = fadeIn(frame, 10);
  const metrics = [
    { val: '< 60s', label: 'First AI Response',     color: C.c2  },
    { val: '81%',   label: 'Lead Conversion Rate',   color: C.c1  },
    { val: '14×',   label: 'Ad Performance Lift',    color: C.mg  },
    { val: '42.5×', label: 'Broadcast ROI',          color: C.c2  },
  ];

  const chairProgress = spring({ frame: frame - 5, fps, config: { damping: 18, stiffness: 80 } });

  return (
    <AbsoluteFill style={{ background: C.bg, overflow: 'hidden' }}>
      <GridBg opacity={0.05} />
      <ScanLine />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse 70% 60% at 50% 30%, ${C.c1}18, transparent)`,
      }} />

      {/* Person silhouette */}
      <svg style={{ position: 'absolute', left: 80, top: 140, width: 300, height: 440 }}>
        <g opacity={chairProgress * 0.5}>
          {/* Chair back */}
          <rect x={60} y={140} width={120} height={200} rx={12}
            fill={C.bgCard} stroke={C.line} strokeWidth={2} />
          {/* Seat */}
          <rect x={40} y={320} width={160} height={24} rx={4}
            fill={C.bgCard} stroke={C.line} strokeWidth={1.5} />
          {/* Legs */}
          <line x1={50} y1={344} x2={40} y2={420} stroke={C.fg2} strokeWidth={3} />
          <line x1={190} y1={344} x2={200} y2={420} stroke={C.fg2} strokeWidth={3} />
          {/* Body */}
          <rect x={80} y={170} width={80} height={130} rx={20}
            fill={C.c1} fillOpacity={0.2} stroke={`${C.c1}50`} strokeWidth={1} />
          {/* Head */}
          <circle cx={120} cy={148} r={38}
            fill={C.c1} fillOpacity={0.25} stroke={`${C.c1}60`} strokeWidth={1.5} />
          {/* Relaxed arm */}
          <path d="M 160 240 Q 200 260 210 300" stroke={`${C.c1}60`}
            strokeWidth={3} fill="none" strokeLinecap="round" />
        </g>
      </svg>

      {/* Holographic dashboard */}
      <div style={{
        position: 'absolute', left: 360, top: 80,
        width: 840, height: 500,
        opacity: cardOp,
        transform: `scale(${spring({ frame, fps, config: { damping: 20, stiffness: 70 } }) * 0.15 + 0.85})`,
      }}>
        {/* Card */}
        <div style={{
          background: `linear-gradient(135deg, ${C.bgCard}, rgba(13,17,23,0.95))`,
          border: `1px solid ${C.c1}40`,
          borderRadius: 20,
          padding: 36,
          height: '100%',
          boxShadow: `0 0 0 1px ${C.c1}20, 0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)`,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Grid bg inside card */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 20,
            backgroundImage: `
              linear-gradient(${C.c2}08 1px, transparent 1px),
              linear-gradient(90deg, ${C.c2}08 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }} />

          {/* Top bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: C.c2, boxShadow: `0 0 12px ${C.c2}`,
              }} />
              <span style={{
                fontSize: 14, fontFamily: FONT.mono, color: C.fg0, fontWeight: 600, letterSpacing: 2,
              }}>
                AI CUSTOMER SYSTEM
              </span>
            </div>
            {/* Status badges */}
            <div style={{ display: 'flex', gap: 10 }}>
              {/* Lock badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '4px 12px', borderRadius: 20,
                background: `rgba(34,211,238,0.08)`, border: `1px solid ${C.c2}30`,
              }}>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <rect x="1" y="6" width="10" height="7" rx="2" stroke={C.c2} strokeWidth="1.2"/>
                  <path d="M3 6V4a3 3 0 0 1 6 0v2" stroke={C.c2} strokeWidth="1.2"/>
                </svg>
                <span style={{ fontSize: 10, fontFamily: FONT.mono, color: C.c2, fontWeight: 700, letterSpacing: 1 }}>
                  VERIFIED
                </span>
              </div>
              {/* Battery badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '4px 12px', borderRadius: 20,
                background: `rgba(34,197,94,0.08)`, border: `1px solid ${C.green}30`,
              }}>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <rect x="0.5" y="0.5" width="13" height="9" rx="2" stroke={C.green} strokeWidth="1"/>
                  <rect x="2" y="2" width="9" height="6" rx="1" fill={C.green}/>
                  <path d="M14 3.5v3" stroke={C.green} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: 10, fontFamily: FONT.mono, color: C.green, fontWeight: 700, letterSpacing: 1 }}>
                  100%
                </span>
              </div>
            </div>
          </div>

          {/* Metrics grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 16, position: 'relative',
          }}>
            {metrics.map((m, i) => {
              const mOp = fadeIn(frame, 25 + i * 12);
              const mY = slideUp(frame, 25 + i * 12, 18);
              return (
                <div key={i} style={{
                  padding: '20px 24px',
                  background: `${m.color}08`,
                  border: `1px solid ${m.color}25`,
                  borderRadius: 12,
                  opacity: mOp,
                  transform: `translateY(${mY}px)`,
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Top accent line */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                    background: `linear-gradient(90deg, transparent, ${m.color}, transparent)`,
                    opacity: mOp,
                  }} />
                  <div style={{
                    fontSize: 52, fontFamily: FONT.display, letterSpacing: '-0.02em',
                    color: m.color, lineHeight: 1,
                    textShadow: `0 0 30px ${m.color}60`,
                  }}>
                    {m.val}
                  </div>
                  <div style={{ fontSize: 13, color: C.fg1, marginTop: 6, fontFamily: FONT.sans }}>
                    {m.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final headline */}
      <KineticText text="Conversation-Led Growth." startFrame={65} y={588} fontSize={64} gradient />
      <KineticText text="Automated." startFrame={95} y={660} fontSize={56} color={C.c2} />

      {/* Logo bottom center */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: 12,
        opacity: fadeIn(frame, 80),
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: `linear-gradient(135deg, ${C.c1}, ${C.c3})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontFamily: FONT.mono, fontWeight: 700, color: 'white',
          boxShadow: `0 4px 16px ${C.c1}50`,
        }}>CC</div>
        <span style={{ fontSize: 20, fontFamily: FONT.display, color: C.fg0, letterSpacing: '-0.02em' }}>
          Creative<span style={{ color: C.c2 }}>Complete</span>
        </span>
      </div>
    </AbsoluteFill>
  );
};

/* ══════════════════════════════════════════════════════════════
   Main composition
══════════════════════════════════════════════════════════════ */
export const HeroVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0}   durationInFrames={155}><Scene1 /></Sequence>
      <Sequence from={150} durationInFrames={215}><Scene2 /></Sequence>
      <Sequence from={360} durationInFrames={185}><Scene3 /></Sequence>
      <Sequence from={540} durationInFrames={215}><Scene4 /></Sequence>
      <Sequence from={750} durationInFrames={150}><Scene5 /></Sequence>
    </AbsoluteFill>
  );
};
