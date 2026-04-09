import { Camera, ChevronRight, Flame, Droplets } from "lucide-react";
import { useCallback, useState } from "react";
import { DAILY_TIPS } from "./data/dailyTips";
import { SAMPLE_SCANS } from "./data/sampleScans";
import { WeeklyHealthScoreCard } from "./WeeklyHealthScoreCard";
import type { TabId } from "@/App";

const scoreColor = (n: number) => (n >= 85 ? "text-teal-700" : n >= 70 ? "text-emerald-700" : "text-orange-500");

type Props = {
  onNavigate: (tab: TabId) => void;
  /** Opens History on the detail view for this sample scan id. */
  onOpenScanInHistory: (scanId: number) => void;
};

export const MainContent = ({ onNavigate, onOpenScanInHistory }: Props) => {
  const [tipIndex, setTipIndex] = useState(0);
  const [tipAnim, setTipAnim] = useState<"in" | "out">("in");
  const [tipBusy, setTipBusy] = useState(false);

  const goNextTip = useCallback(() => {
    if (tipBusy || DAILY_TIPS.length < 2) return;
    setTipBusy(true);
    setTipAnim("out");
    window.setTimeout(() => {
      setTipIndex((i) => (i + 1) % DAILY_TIPS.length);
      setTipAnim("in");
      window.setTimeout(() => setTipBusy(false), 440);
    }, 220);
  }, [tipBusy]);

  const tip = DAILY_TIPS[tipIndex];

  return (
    <div className="relative z-10 px-3 pt-2 pb-4">
      <div className="bg-white rounded-2xl shadow-[0_4px_10px_rgba(15,23,42,0.08)] border border-black/5 p-4 mb-4 animate-[slide-up_0.5s_ease-out_0.1s_both]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-slate-800">Today&apos;s Summary</h3>
          <button onClick={() => onNavigate("history")} className="text-xs font-semibold text-slate-600 hover:text-teal-700 transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-yellow-400/15 border border-yellow-300/45 p-3 text-center transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(250,204,21,0.22)] hover:border-yellow-300/70 active:scale-[0.98]">
            <Flame size={14} className="mx-auto text-orange-500 mb-1" />
            <p className="text-2xl font-extrabold text-slate-700">1,240</p>
            <p className="text-[11px] text-slate-500">Calories</p>
          </div>
          <div className="rounded-xl bg-blue-500/15 border border-blue-300/45 p-3 text-center transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(59,130,246,0.22)] hover:border-blue-300/70 active:scale-[0.98]">
            <Droplets size={14} className="mx-auto text-blue-500 mb-1" />
            <p className="text-2xl font-extrabold text-slate-700">6</p>
            <p className="text-[11px] text-slate-500">Glasses</p>
          </div>
          <div className="rounded-xl bg-teal-700/10 border border-teal-700/20 p-3 text-center transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(45,125,111,0.2)] hover:border-teal-700/35 hover:bg-teal-700/[0.14] dark:bg-green-500/15 dark:border-green-400/40 dark:hover:bg-green-500/22 dark:hover:border-green-300/60 active:scale-[0.98]">
            <Camera size={14} className="mx-auto text-teal-700 mb-1" />
            <p className="text-2xl font-extrabold text-slate-700">3</p>
            <p className="text-[11px] text-slate-500">Scans</p>
          </div>
        </div>
      </div>

      <WeeklyHealthScoreCard className="mb-4" />

      <div className="bg-white rounded-2xl shadow-[0_4px_10px_rgba(15,23,42,0.08)] border border-black/5 p-4 mb-4 animate-[slide-up_0.5s_ease-out_0.3s_both]">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-slate-800">Recent Scans</h3>
          <button onClick={() => onNavigate("history")} className="text-xs font-semibold text-slate-600 hover:text-teal-700 transition-colors">See All</button>
        </div>
        <div className="divide-y divide-slate-100">
          {SAMPLE_SCANS.map((scan) => (
            <button
              key={scan.id}
              type="button"
              onClick={() => onOpenScanInHistory(scan.id)}
              className="w-full py-3 flex items-center hover:bg-teal-50/50 rounded-xl px-2 -mx-2 transition-all duration-200 text-left"
            >
              <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center mr-3">{scan.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-700 truncate">{scan.name}</p>
                <p className="text-xs text-slate-400">{scan.time}</p>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold leading-5 ${scoreColor(scan.score)}`}>{scan.score}</p>
                <p className="text-[10px] text-slate-400">Score</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-teal-300/55 bg-teal-500/15 p-4 animate-[slide-up_0.5s_ease-out_0.4s_both] transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(45,125,111,0.16)] dark:border-teal-500/65 dark:bg-teal-800/85">
        <div className="flex items-start justify-between gap-3 mb-2">
          <p className="text-sm font-bold text-slate-700 shrink-0">💡 Daily Tip</p>
          <button
            type="button"
            onClick={goNextTip}
            disabled={tipBusy}
            className="inline-flex shrink-0 items-center gap-0.5 rounded-lg px-1 py-0.5 text-[13px] font-semibold text-teal-700 transition-all hover:text-teal-800 dark:text-white dark:hover:text-white active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-600"
          >
            Next tip
            <ChevronRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
          </button>
        </div>
        <div className="relative min-h-[7.5rem] overflow-hidden">
          <div
            key={`${tipIndex}-${tipAnim}`}
            className={
              tipAnim === "out"
                ? "animate-tip-content-out"
                : "animate-tip-content-in"
            }
          >
            <p className="text-sm font-semibold text-slate-800 mb-1.5 leading-snug">{tip.title}</p>
            <p className="text-sm leading-relaxed text-slate-600">{tip.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
