import { Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const WEEKLY_SCORE = 78;

type Props = {
  className?: string;
};

export function WeeklyHealthScoreCard({ className = "" }: Props) {
  const [barWidth, setBarWidth] = useState(0);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let rafId = 0;

    const run = () => {
      const durationMs = 1100;
      let start: number | null = null;

      const tick = (now: number) => {
        if (cancelled) return;
        if (start === null) start = now;
        const t = Math.min((now - start) / durationMs, 1);
        const eased = 1 - (1 - t) ** 2.6;
        const value = WEEKLY_SCORE * eased;
        setBarWidth(value);
        setDisplayScore(Math.round(value));
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setBarWidth(WEEKLY_SCORE);
          setDisplayScore(WEEKLY_SCORE);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const timeoutId = window.setTimeout(run, 420);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={`bg-white rounded-2xl shadow-[0_4px_10px_rgba(15,23,42,0.08)] border border-black/5 p-4 animate-[slide-up_0.5s_ease-out_0.3s_both] ${className}`.trim()}
    >
      <h3 className="text-sm font-bold text-slate-700 mb-1">Weekly Health Score</h3>
      <div className="flex items-center gap-3">
        <p className="text-4xl font-extrabold text-black dark:!text-white tabular-nums">
          {displayScore}
          <span className="text-2xl text-black/50 dark:!text-white">/100</span>
        </p>
        <div className="h-20 w-20 rounded-full border-4 border-slate-100 ml-auto flex items-center justify-center text-green-500">
          <Sparkles size={18} />
        </div>
      </div>
      <div className="mt-2 h-2.5 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full max-w-full rounded-full bg-gradient-to-r from-teal-600 to-green-400"
          style={{ width: `${barWidth}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-700 flex items-center gap-1">
        <TrendingUp size={12} /> +5 from last week
      </p>
    </div>
  );
}
