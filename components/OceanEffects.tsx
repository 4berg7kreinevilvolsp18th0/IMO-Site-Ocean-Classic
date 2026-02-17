'use client';

import { useEffect, useState } from 'react';

/* ═══════════════════════════════════════════════════════════════
   ВИДЕО ФОН — атмосферное видео океана с fallback-градиентом
   ═══════════════════════════════════════════════════════════════ */

export function VideoBackground({
  src,
  fallbackGradient = 'from-imo-deep via-imo-navy to-imo-ocean',
  overlay = 'bg-black/40',
  className = '',
}: {
  src: string;
  fallbackGradient?: string;
  overlay?: string;
  className?: string;
}) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Gradient fallback */}
      <div className={`absolute inset-0 bg-gradient-to-b ${fallbackGradient}`} />

      {/* Video */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            videoLoaded ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Dark overlay for readability */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,22,40,0.6) 100%)',
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   СОЛНЦЕ — с лучами и god-rays, пронизывающими воду
   ═══════════════════════════════════════════════════════════════ */

export function SunEffect({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      {/* Солнечный диск */}
      <div className="relative">
        <div
          className="w-32 h-32 rounded-full sun-glow"
          style={{
            background: 'radial-gradient(circle, rgba(255,220,100,0.9) 0%, rgba(255,180,50,0.4) 40%, transparent 70%)',
          }}
        />

        {/* Вращающиеся лучи */}
        <div className="absolute inset-0 sun-rays-rotate">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 origin-left"
              style={{
                width: '200px',
                height: '2px',
                transform: `rotate(${i * 30}deg)`,
                background: `linear-gradient(to right, rgba(255,220,100,0.3), transparent)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* God-rays в воду */}
      <div className="absolute top-16 -left-20 w-[300px] h-[80vh]">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute god-ray"
            style={{
              left: `${i * 60 + 10}px`,
              width: `${30 + i * 8}px`,
              height: '100%',
              background: `linear-gradient(180deg, rgba(255,220,100,0.08) 0%, rgba(77,208,225,0.02) 50%, transparent 100%)`,
              transform: `skewX(${-15 + i * 8}deg)`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ДОЖДЬ — капли разной скорости и размера
   ═══════════════════════════════════════════════════════════════ */

export function RainEffect({
  intensity = 40,
  className = '',
}: {
  intensity?: number;
  className?: string;
}) {
  const drops = Array.from({ length: intensity }).map((_, i) => ({
    left: `${(i / intensity) * 100 + Math.random() * 3}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${0.6 + Math.random() * 0.8}s`,
    height: `${12 + Math.random() * 20}px`,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute rain-drop"
          style={{
            left: drop.left,
            top: '-30px',
            width: '1px',
            height: drop.height,
            background: `linear-gradient(180deg, transparent, rgba(174,213,255,${drop.opacity}))`,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        />
      ))}
      {/* Рябь на воде */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rain-ripple rounded-full border border-white/5"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 15}px`,
              width: '0px',
              height: '0px',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ПОДВОДНЫЙ СВЕТ (КАУСТИКИ) — мерцающие узоры света на дне
   ═══════════════════════════════════════════════════════════════ */

export function UnderwaterCaustics({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <div className="caustic-overlay" />
      <div className="caustic-overlay-2" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SVG РЫБЫ — разные виды
   ═══════════════════════════════════════════════════════════════ */

function TropicalFishSVG({ color = '#4DD0E1', accentColor = '#80DEEA', size = 1 }: {
  color?: string; accentColor?: string; size?: number;
}) {
  return (
    <svg width={30 * size} height={16 * size} viewBox="0 0 30 16" fill="none">
      <path d="M2,8 C5,3 12,0 20,8 C12,16 5,13 2,8 Z" fill={color} opacity="0.85" />
      <path d="M20,8 L28,2 L28,14 Z" fill={accentColor} opacity="0.7" />
      <path d="M8,4 C10,6 10,10 8,12" stroke={accentColor} strokeWidth="0.5" fill="none" opacity="0.4" />
      <circle cx="7" cy="7" r="1.2" fill="#0A1628" opacity="0.8" />
      <circle cx="6.8" cy="6.8" r="0.4" fill="white" opacity="0.9" />
    </svg>
  );
}

function ClownfishSVG({ size = 1 }: { size?: number }) {
  return (
    <svg width={32 * size} height={18 * size} viewBox="0 0 32 18" fill="none">
      <path d="M2,9 C5,3 13,0 22,9 C13,18 5,15 2,9 Z" fill="#FF7043" opacity="0.85" />
      <path d="M22,9 L30,3 L30,15 Z" fill="#FF8A65" opacity="0.7" />
      <rect x="9" y="2" width="2.5" height="14" rx="1.2" fill="white" opacity="0.8" />
      <rect x="15" y="3.5" width="2" height="11" rx="1" fill="white" opacity="0.7" />
      <circle cx="6" cy="8" r="1.3" fill="#1A1A2E" opacity="0.85" />
      <circle cx="5.8" cy="7.8" r="0.4" fill="white" opacity="0.9" />
    </svg>
  );
}

function BlueTangSVG({ size = 1 }: { size?: number }) {
  return (
    <svg width={28 * size} height={16 * size} viewBox="0 0 28 16" fill="none">
      <path d="M2,8 C4,2 10,0 18,8 C10,16 4,14 2,8 Z" fill="#1565C0" opacity="0.85" />
      <path d="M18,8 L26,3 L26,13 Z" fill="#FFC107" opacity="0.7" />
      <path d="M10,3 C14,5 16,8 14,13" stroke="#0D47A1" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="6" cy="7.5" r="1.2" fill="#0A1628" opacity="0.85" />
      <circle cx="5.8" cy="7.3" r="0.4" fill="white" opacity="0.9" />
    </svg>
  );
}

function AngelfishSVG({ color = '#E040FB', size = 1 }: { color?: string; size?: number }) {
  return (
    <svg width={26 * size} height={32 * size} viewBox="0 0 26 32" fill="none">
      <path d="M13,2 C18,6 22,12 22,16 C22,20 18,26 13,30 C8,26 4,20 4,16 C4,12 8,6 13,2 Z" fill={color} opacity="0.7" />
      <path d="M22,16 L26,14 L26,18 Z" fill={color} opacity="0.5" />
      <path d="M8,8 L2,4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M8,24 L2,28" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M10,10 C12,14 12,18 10,22" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
      <circle cx="10" cy="14" r="1.3" fill="#1A1A2E" opacity="0.8" />
      <circle cx="9.8" cy="13.8" r="0.4" fill="white" opacity="0.9" />
    </svg>
  );
}

function MantaRaySVG({ size = 1 }: { size?: number }) {
  return (
    <svg width={100 * size} height={50 * size} viewBox="0 0 100 50" fill="none">
      <path d="M50,25 C40,12 25,3 5,18 C15,22 30,24 50,25 Z" fill="#1A237E" opacity="0.6" />
      <path d="M50,25 C60,12 75,3 95,18 C85,22 70,24 50,25 Z" fill="#1A237E" opacity="0.6" />
      <path d="M50,25 C48,30 47,38 49,48" stroke="#1A237E" strokeWidth="1.5" fill="none" opacity="0.5" />
      <ellipse cx="50" cy="22" rx="8" ry="4" fill="#283593" opacity="0.4" />
      <circle cx="38" cy="20" r="1" fill="white" opacity="0.4" />
      <circle cx="62" cy="20" r="1" fill="white" opacity="0.4" />
    </svg>
  );
}

function JellyfishSVG({ color = '#E040FB', size = 1 }: { color?: string; size?: number }) {
  return (
    <svg width={30 * size} height={50 * size} viewBox="0 0 30 50" fill="none">
      <path d="M3,18 C3,6 27,6 27,18 C27,22 20,20 15,22 C10,20 3,22 3,18 Z" fill={color} opacity="0.25" />
      <path d="M3,18 C3,6 27,6 27,18" stroke={color} strokeWidth="0.5" fill="none" opacity="0.4" />
      <ellipse cx="15" cy="14" rx="8" ry="3" fill={color} opacity="0.15" />
      {[6, 11, 15, 19, 24].map((x, i) => (
        <path
          key={i}
          d={`M${x},20 C${x + (i % 2 ? 3 : -3)},28 ${x + (i % 2 ? -2 : 2)},36 ${x + (i % 2 ? 4 : -4)},45`}
          stroke={color}
          strokeWidth="0.8"
          fill="none"
          opacity={0.2 + i * 0.05}
          className="jellyfish-tentacle"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}

function SeaTurtleSVG({ size = 1 }: { size?: number }) {
  return (
    <svg width={50 * size} height={35 * size} viewBox="0 0 50 35" fill="none">
      <ellipse cx="22" cy="17" rx="13" ry="10" fill="#2E7D32" opacity="0.6" />
      <path d="M20,10 L24,10 L26,14 L22,16 L18,14 Z" fill="#1B5E20" opacity="0.4" />
      <path d="M18,14 L14,16 L16,20 L20,18 Z" fill="#1B5E20" opacity="0.35" />
      <path d="M26,14 L30,16 L28,20 L24,18 Z" fill="#1B5E20" opacity="0.35" />
      <ellipse cx="38" cy="17" rx="6" ry="4" fill="#388E3C" opacity="0.5" />
      <circle cx="41" cy="16" r="1" fill="#1A1A2E" opacity="0.7" />
      <circle cx="40.8" cy="15.8" r="0.3" fill="white" opacity="0.8" />
      <path d="M12,10 L6,5" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <path d="M12,24 L6,29" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <path d="M30,10 L35,6" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M30,24 L35,28" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M9,17 Q6,17 4,18" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
    </svg>
  );
}

function WhaleSilhouetteSVG({ size = 1 }: { size?: number }) {
  return (
    <svg width={200 * size} height={60 * size} viewBox="0 0 200 60" fill="none">
      <path
        d="M10,35 C20,20 50,10 90,15 C120,18 150,12 170,20 C180,24 185,30 180,35 C175,40 160,42 140,40 C120,38 100,42 80,40 C60,38 30,45 10,35 Z"
        fill="#0A1628"
        opacity="0.15"
      />
      <path d="M170,20 L195,5 C190,12 185,18 180,22" fill="#0A1628" opacity="0.12" />
      <path d="M170,20 L195,35 C190,30 185,26 180,24" fill="#0A1628" opacity="0.12" />
      <circle cx="40" cy="28" r="1.5" fill="#4DD0E1" opacity="0.15" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   СИСТЕМА ТРАЕКТОРИЙ — изогнутые пути обтекания текста
   ═══════════════════════════════════════════════════════════════ */

type Trajectory = 'arcUp' | 'arcDown' | 'sCurve' | 'invS' | 'wideArc';

function getSwimAnimation(trajectory: Trajectory, direction: 'left' | 'right'): string {
  const map: Record<Trajectory, Record<'left' | 'right', string>> = {
    arcUp:   { left: 'swimArcUpRL',   right: 'swimArcUpLR' },
    arcDown: { left: 'swimArcDownRL', right: 'swimArcDownLR' },
    sCurve:  { left: 'swimSCurveRL',  right: 'swimSCurveLR' },
    invS:    { left: 'swimInvSRL',    right: 'swimInvSLR' },
    wideArc: { left: 'swimWideArcRL', right: 'swimWideArcLR' },
  };
  return map[trajectory][direction];
}

/* ═══════════════════════════════════════════════════════════════
   КОСЯК РЫБ — группа мелких рыб, плывущих вместе
   ═══════════════════════════════════════════════════════════════ */

export function FishSchool({
  count = 12,
  direction = 'left',
  speed = 35,
  yPosition = '30%',
  fishType = 'tropical',
  colorScheme = 'cyan',
  trajectory = 'arcUp',
  className = '',
}: {
  count?: number;
  direction?: 'left' | 'right';
  speed?: number;
  yPosition?: string;
  fishType?: 'tropical' | 'bluetang';
  colorScheme?: 'cyan' | 'blue' | 'warm' | 'green';
  trajectory?: Trajectory;
  className?: string;
}) {
  const colors = {
    cyan: { main: '#4DD0E1', accent: '#80DEEA' },
    blue: { main: '#42A5F5', accent: '#90CAF9' },
    warm: { main: '#FF8A65', accent: '#FFAB91' },
    green: { main: '#66BB6A', accent: '#A5D6A7' },
  };

  const c = colors[colorScheme];

  const fishPositions = Array.from({ length: count }).map((_, i) => ({
    x: (i % 4) * 25 + Math.random() * 15,
    y: Math.floor(i / 4) * 18 + Math.random() * 10,
    delay: Math.random() * 0.8,
    scale: 0.7 + Math.random() * 0.5,
  }));

  const animName = getSwimAnimation(trajectory, direction);

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ top: yPosition }}
      aria-hidden="true"
    >
      <div
        style={{
          animation: `${animName} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        <div className="relative" style={{ width: '120px', height: '80px' }}>
          {fishPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute fish-wiggle"
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: `scale(${pos.scale}) ${direction === 'right' ? 'scaleX(-1)' : ''}`,
                animationDelay: `${pos.delay}s`,
              }}
            >
              {fishType === 'bluetang' ? (
                <BlueTangSVG size={pos.scale * 0.8} />
              ) : (
                <TropicalFishSVG color={c.main} accentColor={c.accent} size={pos.scale * 0.8} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ПАРА РЫБ — две рыбки плывут рядом
   ═══════════════════════════════════════════════════════════════ */

export function FishPair({
  fishType = 'clownfish',
  direction = 'left',
  speed = 45,
  yPosition = '50%',
  trajectory = 'arcUp',
  className = '',
}: {
  fishType?: 'clownfish' | 'angelfish' | 'tropical';
  direction?: 'left' | 'right';
  speed?: number;
  yPosition?: string;
  trajectory?: Trajectory;
  className?: string;
}) {
  const FishComponent = {
    clownfish: () => <ClownfishSVG size={1.2} />,
    angelfish: () => <AngelfishSVG color="#E040FB" size={0.9} />,
    tropical: () => <TropicalFishSVG color="#FF7043" accentColor="#FFAB91" size={1.1} />,
  }[fishType];

  const animName = getSwimAnimation(trajectory, direction);

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ top: yPosition }}
      aria-hidden="true"
    >
      <div
        style={{
          animation: `${animName} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        <div className="relative" style={{ width: '80px', height: '40px' }}>
          <div
            className="absolute fish-wiggle"
            style={{
              left: 0,
              top: 0,
              transform: direction === 'right' ? 'scaleX(-1)' : undefined,
            }}
          >
            <FishComponent />
          </div>
          <div
            className="absolute fish-wiggle"
            style={{
              left: '35px',
              top: '15px',
              transform: `scale(0.85) ${direction === 'right' ? 'scaleX(-1)' : ''}`,
              animationDelay: '0.5s',
            }}
          >
            <FishComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ОДИНОКАЯ РЫБА — крупная, величественная
   ═══════════════════════════════════════════════════════════════ */

export function SoloFish({
  type = 'manta',
  direction = 'left',
  speed = 60,
  yPosition = '40%',
  trajectory = 'wideArc',
  className = '',
}: {
  type?: 'manta' | 'turtle' | 'angelfish' | 'whale';
  direction?: 'left' | 'right';
  speed?: number;
  yPosition?: string;
  trajectory?: Trajectory;
  className?: string;
}) {
  const FishComponent = {
    manta: () => <MantaRaySVG size={1.5} />,
    turtle: () => <SeaTurtleSVG size={1.5} />,
    angelfish: () => <AngelfishSVG color="#7C4DFF" size={1.5} />,
    whale: () => <WhaleSilhouetteSVG size={1.8} />,
  }[type];

  const animName = getSwimAnimation(trajectory, direction);

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ top: yPosition }}
      aria-hidden="true"
    >
      <div
        style={{
          animation: `${animName} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        <div style={{ transform: direction === 'right' ? 'scaleX(-1)' : undefined }}>
          <FishComponent />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   МЕДУЗЫ — плавающие, пульсирующие
   ═══════════════════════════════════════════════════════════════ */

export function JellyfishFloat({
  count = 3,
  colorScheme = 'purple',
  className = '',
}: {
  count?: number;
  colorScheme?: 'purple' | 'cyan' | 'pink';
  className?: string;
}) {
  const colors = {
    purple: '#B388FF',
    cyan: '#4DD0E1',
    pink: '#F48FB1',
  };

  const jellies = Array.from({ length: count }).map((_, i) => ({
    left: `${15 + i * 30 + Math.random() * 15}%`,
    top: `${20 + Math.random() * 40}%`,
    size: 0.6 + Math.random() * 0.8,
    delay: i * 3,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {jellies.map((j, i) => (
        <div
          key={i}
          className="absolute jellyfish-drift"
          style={{
            left: j.left,
            top: j.top,
            animationDelay: `${j.delay}s`,
            animationDuration: `${j.duration}s`,
          }}
        >
          <div className="jellyfish-pulse" style={{ animationDelay: `${j.delay * 0.5}s` }}>
            <JellyfishSVG color={colors[colorScheme]} size={j.size} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   АНИМИРОВАННАЯ ВОЛНА — на границах секций
   ═══════════════════════════════════════════════════════════════ */

export function AnimatedWaveDivider({
  colorFrom = '#0A1628',
  colorTo = '#0C2340',
  position = 'bottom',
  className = '',
}: {
  colorFrom?: string;
  colorTo?: string;
  position?: 'top' | 'bottom';
  className?: string;
}) {
  return (
    <div
      className={`absolute ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'} left-0 right-0 leading-[0] z-20 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Основная волна — анимированная */}
        <path
          className="wave-path-1"
          d="M0,60 C180,20 360,80 540,50 C720,20 900,70 1080,40 C1200,20 1350,60 1440,30 L1440,120 L0,120 Z"
          fill={colorFrom}
        />
        {/* Вторая волна */}
        <path
          className="wave-path-2"
          d="M0,70 C200,40 400,90 600,55 C800,25 1000,75 1200,45 C1350,30 1440,60 1440,45 L1440,120 L0,120 Z"
          fill={colorTo}
          opacity="0.5"
        />
        {/* Пенный гребень */}
        <path
          className="wave-path-3"
          d="M0,65 C160,35 320,85 480,50 C640,20 800,75 960,42 C1120,15 1280,55 1440,35"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ЗОННАЯ ПОДСВЕТКА — переход цвета по глубинам океана
   ═══════════════════════════════════════════════════════════════ */

export function OceanZoneGlow({
  zone,
  className = '',
}: {
  zone: 'surface' | 'shallow' | 'midocean' | 'deep' | 'abyss';
  className?: string;
}) {
  const zoneStyles = {
    surface: {
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(255,220,100,0.08) 0%, transparent 60%)',
      accent: 'rgba(255,220,100,0.04)',
    },
    shallow: {
      gradient: 'radial-gradient(ellipse at 30% 50%, rgba(77,208,225,0.06) 0%, transparent 60%)',
      accent: 'rgba(0,150,136,0.04)',
    },
    midocean: {
      gradient: 'radial-gradient(ellipse at 70% 50%, rgba(21,101,192,0.08) 0%, transparent 60%)',
      accent: 'rgba(30,136,229,0.04)',
    },
    deep: {
      gradient: 'radial-gradient(ellipse at 50% 80%, rgba(26,35,126,0.1) 0%, transparent 60%)',
      accent: 'rgba(13,71,161,0.06)',
    },
    abyss: {
      gradient: 'radial-gradient(ellipse at 50% 50%, rgba(179,136,255,0.04) 0%, transparent 50%)',
      accent: 'rgba(10,22,40,0.1)',
    },
  };

  const style = zoneStyles[zone];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute inset-0" style={{ background: style.gradient }} />
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: `linear-gradient(180deg, transparent, ${style.accent})` }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ПУЗЫРЬКИ (УЛУЧШЕННЫЕ) — разных размеров, более живые
   ═══════════════════════════════════════════════════════════════ */

export function EnhancedBubbles({ count = 15, className = '' }: { count?: number; className?: string }) {
  const bubbles = Array.from({ length: count }).map((_, i) => ({
    left: `${(i / count) * 100}%`,
    size: 3 + Math.random() * 8,
    delay: Math.random() * 12,
    duration: 8 + Math.random() * 12,
    wobble: Math.random() > 0.5,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full bubble-rise ${b.wobble ? 'bubble-wobble' : ''}`}
          style={{
            left: b.left,
            bottom: '-20px',
            width: `${b.size}px`,
            height: `${b.size}px`,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(77,208,225,0.1), transparent)`,
            border: '1px solid rgba(255,255,255,0.1)',
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ПЛАНКТОН / ЧАСТИЦЫ — мелкие светящиеся точки
   ═══════════════════════════════════════════════════════════════ */

export function Plankton({ count = 30, className = '' }: { count?: number; className?: string }) {
  const particles = Array.from({ length: count }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 1 + Math.random() * 2,
    delay: Math.random() * 8,
    duration: 4 + Math.random() * 6,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full plankton-glow"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(77,208,225,0.4)`,
            boxShadow: `0 0 ${p.size * 2}px rgba(77,208,225,0.3)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ВОДОРОСЛИ — мягко покачивающиеся у дна секции
   ═══════════════════════════════════════════════════════════════ */

export function SeaweedAnimation({ count = 5, className = '' }: { count?: number; className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 pointer-events-none ${className}`} aria-hidden="true">
      <svg className="w-full h-32" viewBox="0 0 1440 128" fill="none" preserveAspectRatio="none">
        {Array.from({ length: count }).map((_, i) => {
          const x = (i / count) * 1440 + 100;
          const height = 50 + Math.random() * 60;
          const delay = Math.random() * 3;
          const color = i % 2 === 0 ? 'rgba(46,125,50,0.15)' : 'rgba(0,137,123,0.12)';
          return (
            <g key={i}>
              <path
                d={`M${x},128 C${x + 5},${128 - height * 0.3} ${x - 8},${128 - height * 0.6} ${x + 3},${128 - height}`}
                stroke={color}
                strokeWidth="3"
                fill="none"
                className="seaweed-sway"
                style={{ animationDelay: `${delay}s`, transformOrigin: `${x}px 128px` }}
              />
              <path
                d={`M${x + 15},128 C${x + 20},${128 - height * 0.25} ${x + 7},${128 - height * 0.5} ${x + 18},${128 - height * 0.8}`}
                stroke={color}
                strokeWidth="2.5"
                fill="none"
                className="seaweed-sway"
                style={{ animationDelay: `${delay + 1}s`, transformOrigin: `${x + 15}px 128px` }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
