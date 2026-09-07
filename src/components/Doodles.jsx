/* eslint-disable react/prop-types */
// A small, reusable library of hand-drawn-feeling SVG marks.
// Everything is stroke-black + flat fill so it belongs to one system.

const base = {
  fill: "none",
  stroke: "#0B0B0B",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Star = ({ size = 34, fill = "#FFD400", className = "", style }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className} style={style} aria-hidden="true">
    <path
      d="M20 3.5c1.2 7.4 4 11.2 11.6 12.9C24.6 18.6 21.6 22 20 36.5 18.6 22 15.2 18.8 8 16.4 15.9 14.7 18.7 11.1 20 3.5Z"
      {...base}
      fill={fill}
    />
  </svg>
);

export const Sparkle = ({ size = 22, fill = "#FFFFFF", className = "", style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
    <path d="M12 1.5 14 9l7.5 3-7.5 3-2 7.5L10 15l-7.5-3L10 9Z" {...base} strokeWidth={2.4} fill={fill} />
  </svg>
);

export const Bolt = ({ size = 34, fill = "#FFD400", className = "", style }) => (
  <svg width={size} height={size} viewBox="0 0 32 40" className={className} style={style} aria-hidden="true">
    <path d="M19 2 4 22h9L11 38l17-21h-10l2-15Z" {...base} fill={fill} />
  </svg>
);

export const Heart = ({ size = 30, fill = "#FF2E88", className = "", style }) => (
  <svg width={size} height={size} viewBox="0 0 36 34" className={className} style={style} aria-hidden="true">
    <path
      d="M18 31C7 23.5 2.5 18.4 2.5 12.2 2.5 6.9 6.6 3 11.4 3c2.9 0 5.3 1.5 6.6 3.8C19.3 4.5 21.7 3 24.6 3 29.4 3 33.5 6.9 33.5 12.2 33.5 18.4 29 23.5 18 31Z"
      {...base}
      fill={fill}
    />
  </svg>
);

export const Arrow = ({ size = 60, className = "", style, flip = false, rotate = 0 }) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 60 42"
    className={className}
    style={{
      ...style,
      // rotate then flip, in that order — the arrowhead ends up where you expect
      transform: `${style?.transform || ""} rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
    }}
    aria-hidden="true"
  >
    <path d="M3 6c14 22 30 30 52 30" {...base} />
    <path d="M42 30c6 3 10 5 13 6-3 2-6 5-9 10" {...base} />
  </svg>
);

export const Swirl = ({ size = 46, className = "", style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} aria-hidden="true">
    <path d="M6 40c0-16 8-26 18-26 7 0 11 5 11 10 0 5-4 8-8 8s-6-3-6-6 2-5 5-5" {...base} />
  </svg>
);

export const Scribble = ({ width = 130, className = "", stroke = "#0B0B0B", style }) => (
  <svg width={width} height={16} viewBox="0 0 130 16" className={className} style={style} aria-hidden="true" preserveAspectRatio="none">
    <path d="M2 11c22-7 44 6 66-1 20-6 40 3 60-2" {...base} stroke={stroke} strokeWidth={4} />
  </svg>
);

export const Burst = ({ size = 120, fill = "#FF2E88", className = "", style, children }) => (
  <div className={`relative inline-grid place-items-center ${className}`} style={{ width: size, height: size, ...style }}>
    <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <path
        d="M60 2l9 14 15-9 3 17 17-3-9 15 15 9-15 9 9 15-17-3-3 17-15-9-9 14-9-14-15 9-3-17-17 3 9-15L2 60l14-9-9-15 17 3 3-17 15 9Z"
        fill={fill}
        stroke="#0B0B0B"
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
    </svg>
    <span className="relative z-10 px-3 text-center font-slab leading-none">{children}</span>
  </div>
);

export const SpeechBubble = ({ children, className = "", bg = "#FFFFFF", style }) => (
  <div className={`relative ${className}`} style={style}>
    <div
      className="sticker px-4 py-2 font-hand text-lg leading-tight"
      style={{ background: bg }}
    >
      {children}
    </div>
    <svg width="26" height="22" viewBox="0 0 26 22" className="absolute -bottom-[19px] left-6" aria-hidden="true">
      <path d="M2 1v18l14-15Z" fill={bg} stroke="#0B0B0B" strokeWidth={3} strokeLinejoin="round" />
      <path d="M4 1h13" stroke={bg} strokeWidth={4} />
    </svg>
  </div>
);

export const SpeedLines = ({ className = "", color = "#0B0B0B", style }) => (
  <div className={`speedlines pointer-events-none ${className}`} style={{ color, ...style }} aria-hidden="true" />
);

export const Emphasis = ({ size = 30, className = "", style, color = "#0B0B0B" }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" className={className} style={style} aria-hidden="true">
    <path d="M15 2v9M5 6l4 7M25 6l-4 7" stroke={color} strokeWidth={3.5} strokeLinecap="round" />
  </svg>
);

export const Tape = ({ children, className = "", style }) => (
  <span className={`tape ${className}`} style={style}>
    {children}
  </span>
);

/* ---------------------------------------------------------------
   PuffText — bubbly graffiti lettering: black outer border,
   thick white sticker cut, flat fill, with an optional gloss dot.
   Stacked layers instead of paint-order so it renders everywhere.
---------------------------------------------------------------- */
export const PuffText = ({
  children,
  className = "",
  fill = "#FF2E88",
  outer = 22,
  inner = 12,
  gloss = true,
  style,
}) => (
  <span className={`puff relative inline-grid ${className}`} style={style}>
    <span className="puff-layer" style={{ WebkitTextStroke: `${outer}px #0B0B0B` }} aria-hidden="true">
      {children}
    </span>
    <span className="puff-layer" style={{ WebkitTextStroke: `${inner}px #FFFFFF` }} aria-hidden="true">
      {children}
    </span>
    <span style={{ gridArea: "1 / 1", color: fill }}>{children}</span>
    {gloss && (
      <span
        className="pointer-events-none absolute left-[5.5%] top-[16%] h-[16%] w-[4.5%] -rotate-[22deg] rounded-full bg-white/90"
        aria-hidden="true"
      />
    )}
  </span>
);

/* Halftone corner block — flat dots, used to fill dead space */
export const HalftoneBlock = ({ className = "", color = "#0B0B0B", style }) => (
  <div className={`halftone pointer-events-none ${className}`} style={{ color, ...style }} aria-hidden="true" />
);
