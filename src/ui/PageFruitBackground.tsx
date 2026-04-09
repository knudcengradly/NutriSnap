import { useEffect, useState } from "react";

/** 0–1 pseudo-random from index + salt (stable across renders). */
function rnd(i: number, salt: number): number {
  const x = Math.sin((i + 1) * 12.9898 + salt * 78.233 + 19.917) * 43758.5453123;
  return x - Math.floor(x);
}

const GLOW_COUNT = 26;
const GLOW_COLORS = [
  "rgba(167, 243, 208, 0.12)",
  "rgba(153, 246, 228, 0.11)",
  "rgba(217, 249, 157, 0.1)",
  "rgba(190, 242, 100, 0.09)",
  "rgba(134, 239, 172, 0.12)",
  "rgba(110, 231, 183, 0.1)",
  "rgba(167, 243, 208, 0.08)",
];

/** Glows as % of the wash layer (fills scroll column above nav). */
const glows = Array.from({ length: GLOW_COUNT }, (_, i) => {
  const topPct = rnd(i, 20) * 98 + 1;
  const leftPct = rnd(i, 21) * 108 - 12;
  const sizeVmin = 28 + rnd(i, 22) * 32;
  const blurPx = 28 + rnd(i, 23) * 36;
  return {
    top: `${topPct.toFixed(2)}%`,
    left: `${leftPct.toFixed(2)}%`,
    width: `${sizeVmin.toFixed(1)}vmin`,
    height: `${sizeVmin.toFixed(1)}vmin`,
    blur: blurPx,
    background: GLOW_COLORS[i % GLOW_COLORS.length],
  };
});

/**
 * Gradient + blobs pinned to the content column (area above bottom nav only).
 * Kept out of the scrollable subtree so it never inflates scroll height or leaves a “fake” green tail.
 */
export const ScrollColumnWash = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,rgb(255,255,255)_0%,rgba(45,125,111,0.025)_42%,rgba(31,110,95,0.055)_100%)]">
      {glows.map((g, i) => (
        <div
          key={i}
          className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height,
            background: g.background,
            filter: `blur(${g.blur}px)`,
          }}
        />
      ))}
    </div>
  </div>
);

const FRUIT_EMOJIS = [
  "🍎",
  "🍌",
  "🍒",
  "🍇",
  "🥕",
  "🥑",
  "🍓",
  "🥝",
  "🍊",
  "🥦",
  "🍋",
  "🫐",
  "🍅",
  "🥬",
  "🍑",
  "🌽",
  "🍐",
  "🥭",
  "🍉",
  "🫑",
];

const FRUIT_COUNT = 22;

type FruitItem = {
  emoji: string;
  left: string;
  top: string;
  fontSize: string;
  rotateDeg: number;
  delayMs: number;
};

/** Base layout: % of the visible column (above nav) — biased toward upper area. */
const baseFruits: Omit<FruitItem, "left" | "top"> & { left: number; top: number }[] = Array.from(
  { length: FRUIT_COUNT },
  (_, i) => {
    const leftPct = 2 + rnd(i, 1) * 93;
    const topPct = rnd(i, 2) < 0.55 ? rnd(i, 6) * 30 : 30 + rnd(i, 7) * 70;
    const sizeRem = 0.82 + rnd(i, 3) * 1.14;
    const rotateDeg = -26 + rnd(i, 4) * 52;
    const delayMs = Math.round(rnd(i, 5) * 280);
    return {
      emoji: FRUIT_EMOJIS[i % FRUIT_EMOJIS.length],
      left: leftPct,
      top: topPct,
      fontSize: `${sizeRem.toFixed(2)}rem`,
      rotateDeg,
      delayMs,
    };
  },
);

/** Apple (index 0): nudge a bit lower. Grapes (index 3): nudge down from prior top. */
baseFruits[0] = { ...baseFruits[0], top: Math.min(96, baseFruits[0].top + 8) };
baseFruits[3] = { ...baseFruits[3], top: Math.min(96, baseFruits[3].top + 6) };

/** Blueberries 🫐 (index 11 in base list = FRUIT_EMOJIS[11]): move from top-left band to top-right. */
baseFruits[11] = { ...baseFruits[11], left: 82 + rnd(11, 8) * 12 };

/** Four extra fruits — upper area, toward the right, spaced (not clustered). */
const topRightExtras: Omit<FruitItem, "left" | "top"> & { left: number; top: number }[] = [
  {
    emoji: "🍊",
    left: 74,
    top: 4,
    fontSize: `${(0.9 + rnd(22, 3) * 0.5).toFixed(2)}rem`,
    rotateDeg: -18 + rnd(22, 4) * 28,
    delayMs: Math.round(rnd(22, 5) * 280),
  },
  {
    emoji: "🍋",
    left: 88,
    top: 9,
    fontSize: `${(0.88 + rnd(23, 3) * 0.55).toFixed(2)}rem`,
    rotateDeg: -14 + rnd(23, 4) * 32,
    delayMs: Math.round(rnd(23, 5) * 280),
  },
  {
    emoji: "🥝",
    left: 80,
    top: 16,
    fontSize: `${(0.85 + rnd(24, 3) * 0.6).toFixed(2)}rem`,
    rotateDeg: -22 + rnd(24, 4) * 40,
    delayMs: Math.round(rnd(24, 5) * 280),
  },
  {
    emoji: "🍑",
    left: 92,
    top: 22,
    fontSize: `${(0.92 + rnd(25, 3) * 0.52).toFixed(2)}rem`,
    rotateDeg: -20 + rnd(25, 4) * 36,
    delayMs: Math.round(rnd(25, 5) * 280),
  },
];

const fruits: FruitItem[] = [...baseFruits, ...topRightExtras].map((f) => ({
  ...f,
  left: `${f.left.toFixed(2)}%`,
  top: `${f.top.toFixed(2)}%`,
}));

/**
 * Pinned to the content column (same box as the green wash): does not scroll with page content.
 * Sits above wash (z-1) and below main UI (z-10).
 */
export const FixedFruitDeco = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] w-full overflow-hidden"
      aria-hidden
    >
      {fruits.map((f, i) => (
        <span
          key={i}
          className="absolute select-none leading-none drop-shadow-sm"
          style={{
            left: f.left,
            top: f.top,
            fontSize: f.fontSize,
            opacity: visible ? 0.3 : 0,
            transform: visible
              ? `translate3d(0,0,0) rotate(${f.rotateDeg}deg)`
              : `translate3d(0,-18px,0) rotate(${f.rotateDeg}deg)`,
            transitionProperty: "opacity, transform",
            transitionDuration: "0.75s",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: `${f.delayMs}ms`,
          }}
          role="presentation"
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
};
