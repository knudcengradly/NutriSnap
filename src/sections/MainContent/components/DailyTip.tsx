import { useState } from "react";

const TIPS = [
  "Foods high in fiber help maintain digestive health and keep you feeling full longer.",
  "Staying hydrated improves metabolism and helps your body absorb nutrients more effectively.",
  "Eating colorful fruits & vegetables ensures a wide range of antioxidants and vitamins.",
  "Protein-rich breakfasts reduce hunger hormones and help maintain muscle mass throughout the day.",
];

export const DailyTip = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const nextTip = () => {
    setFading(true);
    setTimeout(() => {
      setTipIndex((i) => (i + 1) % TIPS.length);
      setFading(false);
    }, 250);
  };

  return (
    <div className="bg-teal-700/10 border border-teal-700/30 mb-6 p-5 rounded-2xl border-solid transition-all duration-200 hover:bg-teal-700/15">
      <div className="flex items-center justify-between mb-1">
        <p className="text-black text-sm font-bold leading-5">💡 Daily Tip</p>
        <button
          onClick={nextTip}
          className="text-[10px] text-teal-700 font-semibold hover:underline focus:outline-none transition-colors duration-200 flex items-center gap-1"
          aria-label="Next tip"
        >
          Next tip →
        </button>
      </div>
      <p
        className={`text-[oklch(0.446_0.03_256.802)] text-sm leading-5 mt-1 transition-all duration-250 ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
        style={{ transition: "opacity 0.25s ease, transform 0.25s ease" }}
      >
        {TIPS[tipIndex]}
      </p>
    </div>
  );
};
import { useState } from "react";

const TIPS = [
  "Foods high in fiber help maintain digestive health and keep you feeling full longer.",
  "Staying hydrated improves metabolism and helps your body absorb nutrients more effectively.",
  "Eating colorful fruits & vegetables ensures a wide range of antioxidants and vitamins.",
  "Protein-rich breakfasts reduce hunger hormones and help maintain muscle mass throughout the day.",
];

export const DailyTip = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const nextTip = () => {
    setFading(true);
    setTimeout(() => {
      setTipIndex((i) => (i + 1) % TIPS.length);
      setFading(false);
    }, 250);
  };

  return (
    <div className="bg-teal-700/10 border border-teal-700/30 mb-6 p-5 rounded-2xl border-solid transition-all duration-200 hover:bg-teal-700/15">
      <div className="flex items-center justify-between mb-1">
        <p className="text-black text-sm font-bold leading-5">💡 Daily Tip</p>
        <button
          onClick={nextTip}
          className="text-[10px] text-teal-700 font-semibold hover:underline focus:outline-none transition-colors duration-200 flex items-center gap-1"
          aria-label="Next tip"
        >
          Next tip →
        </button>
      </div>
      <p
        className={`text-[oklch(0.446_0.03_256.802)] text-sm leading-5 mt-1 transition-all duration-250 ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
        style={{ transition: "opacity 0.25s ease, transform 0.25s ease" }}
      >
        {TIPS[tipIndex]}
      </p>
    </div>
  );
};