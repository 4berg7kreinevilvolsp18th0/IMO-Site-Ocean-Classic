/* Декоративные элементы — Океан классика: волны, пузыри, рыбки, компас */

/**
 * AngularDivider → WaveDivider — плавная океаническая волна
 */
export function AngularDivider({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Основная волна */}
        <path
          d="M0,60 C180,20 360,80 540,50 C720,20 900,70 1080,40 C1200,20 1350,60 1440,30 L1440,100 L0,100 Z"
          fill="currentColor"
        />
        {/* Вторая волна (прозрачная) */}
        <path
          d="M0,70 C200,40 400,90 600,55 C800,25 1000,75 1200,45 C1350,30 1440,50 1440,50"
          stroke="rgba(77, 208, 225, 0.15)"
          strokeWidth="1"
          fill="none"
        />
        {/* Третья волна (ещё прозрачнее) */}
        <path
          d="M0,80 C240,55 480,95 720,65 C960,35 1200,80 1440,55"
          stroke="rgba(77, 208, 225, 0.08)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

/**
 * NeonGrid → FloatingBubbles — всплывающие пузыри
 */
export function NeonGrid() {
  const bubbles = [
    { cx: '10%', size: 6, delay: 0, duration: 12 },
    { cx: '25%', size: 4, delay: 2, duration: 15 },
    { cx: '40%', size: 8, delay: 5, duration: 10 },
    { cx: '55%', size: 3, delay: 1, duration: 18 },
    { cx: '70%', size: 5, delay: 4, duration: 14 },
    { cx: '85%', size: 7, delay: 7, duration: 11 },
    { cx: '15%', size: 3, delay: 9, duration: 16 },
    { cx: '60%', size: 5, delay: 3, duration: 13 },
    { cx: '90%', size: 4, delay: 6, duration: 17 },
    { cx: '35%', size: 6, delay: 8, duration: 12 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.cx,
            bottom: '-20px',
            width: `${b.size}px`,
            height: `${b.size}px`,
            background: `radial-gradient(circle, rgba(77, 208, 225, 0.4), rgba(77, 208, 225, 0.05))`,
            border: '1px solid rgba(77, 208, 225, 0.15)',
            animation: `bubbleRise ${b.duration}s ease-in infinite`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
      {/* Мягкие водные блики */}
      <div className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4DD0E1]/8 to-transparent" />
      <div className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#42A5F5]/5 to-transparent" />
      <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4DD0E1]/4 to-transparent" />
    </div>
  );
}

/**
 * GlitchLine → SwimmingFish — плавающая рыбка
 */
export function GlitchLine({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none"
        className="opacity-[0.12]"
        style={{ animation: 'fishSwim 30s linear infinite' }}
      >
        <path d="M0,10 C5,4 15,0 25,10 C15,20 5,16 0,10 Z" fill="#4DD0E1" />
        <path d="M25,10 L35,3 L35,17 Z" fill="#4DD0E1" />
        <circle cx="8" cy="9" r="1.5" fill="#0A1628" />
      </svg>
    </div>
  );
}

/**
 * DotMatrix → WavePattern — водный паттерн
 */
export function DotMatrix({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.04] ${className}`} aria-hidden="true"
      style={{ animation: 'waveShimmer 12s ease-in-out infinite' }}
    >
      <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M0,${25 + i * 20} C50,${15 + i * 20} 100,${35 + i * 20} 150,${20 + i * 20} C175,${15 + i * 20} 200,${30 + i * 20} 200,${30 + i * 20}`}
            stroke="#4DD0E1"
            strokeWidth="0.5"
            fill="none"
            opacity={0.8 - i * 0.15}
          />
        ))}
      </svg>
    </div>
  );
}

/**
 * HexagonDecor → Compass — морской компас
 */
export function HexagonDecor({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.06] ${className}`} aria-hidden="true"
      style={{ animation: 'slowSpin 60s linear infinite' }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        {/* Внешнее кольцо */}
        <circle cx="100" cy="100" r="90" stroke="#4DD0E1" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="80" stroke="#4DD0E1" strokeWidth="0.3" fill="none" />
        {/* Крест сторон света */}
        <line x1="100" y1="15" x2="100" y2="185" stroke="#4DD0E1" strokeWidth="0.3" />
        <line x1="15" y1="100" x2="185" y2="100" stroke="#4DD0E1" strokeWidth="0.3" />
        {/* Диагонали */}
        <line x1="30" y1="30" x2="170" y2="170" stroke="#4DD0E1" strokeWidth="0.2" />
        <line x1="170" y1="30" x2="30" y2="170" stroke="#4DD0E1" strokeWidth="0.2" />
        {/* Стрелка (N) */}
        <polygon points="100,15 95,50 105,50" fill="#FF7043" opacity="0.5" />
        <polygon points="100,185 95,150 105,150" fill="#4DD0E1" opacity="0.3" />
        {/* Центр */}
        <circle cx="100" cy="100" r="4" fill="#4DD0E1" opacity="0.3" />
        <circle cx="100" cy="100" r="2" fill="#FF7043" opacity="0.4" />
        {/* Буквы */}
        <text x="100" y="12" textAnchor="middle" fill="#4DD0E1" fontSize="8" fontFamily="sans-serif">N</text>
        <text x="100" y="198" textAnchor="middle" fill="#4DD0E1" fontSize="8" fontFamily="sans-serif">S</text>
        <text x="8" y="103" textAnchor="middle" fill="#4DD0E1" fontSize="8" fontFamily="sans-serif">W</text>
        <text x="192" y="103" textAnchor="middle" fill="#4DD0E1" fontSize="8" fontFamily="sans-serif">E</text>
      </svg>
    </div>
  );
}

/**
 * ScanlineOverlay → водная рябь (лёгкая)
 */
export function ScanlineOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
      <div className="absolute inset-0 scanlines" />
      {/* Верхний и нижний затенение */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0A1628]/30 to-transparent" />
    </div>
  );
}

/* Обратная совместимость */
export const WaveDivider = AngularDivider;
export const WaveDividerSoft = AngularDivider;
export const FloatingBubbles = NeonGrid;
export function FloatingFish({ className = '' }: { className?: string }) {
  return <GlitchLine className={className} />;
}
export function SeaweedDecor({ className: _className = '' }: { className?: string }) {
  return null;
}
export const WavePattern = DotMatrix;
export const Compass = HexagonDecor;
