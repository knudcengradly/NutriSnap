import type { LucideIcon } from "lucide-react";
import {
  ChevronRight,
  CupSoda,
  GlassWater,
  Milk,
  Package,
  Search,
  Soup,
  Wheat,
} from "lucide-react";
import { useMemo, useState } from "react";
import { HealthScanDetail } from "@/sections/HealthScreen/HealthScanDetail";
import { SAMPLE_SCANS } from "./data/sampleScans";

function detailFromOpenScanId(id: number | null): { name: string; score: number } | null {
  if (id == null) return null;
  const scan = SAMPLE_SCANS.find((s) => s.id === id);
  return scan ? { name: scan.name, score: scan.score } : null;
}

type HistoryScreenProps = {
  /** When set (e.g. from home Recent Scans), open this scan’s detail on mount. Cleared when leaving History in App. */
  openScanId: number | null;
};

const rows: { name: string; meta: string; score: number; Icon: LucideIcon }[] = [
  ...SAMPLE_SCANS.map((scan) => {
    const Icon =
      scan.name.includes("Noodles")
        ? Soup
        : scan.name.includes("Yogurt")
          ? Milk
          : CupSoda;
    return {
      name: scan.name,
      meta: `${scan.time} · ${scan.category}`,
      score: scan.score,
      Icon,
    };
  }),
  { name: "Whole Wheat Bread", meta: "Yesterday · Grain", score: 68, Icon: Wheat },
  { name: "Mixed Nuts", meta: "Apr 5 · Snack", score: 88, Icon: Package },
  { name: "Orange Juice", meta: "Apr 5 · Beverage", score: 55, Icon: GlassWater },
];

const scoreColor = (n: number) =>
  n >= 85 ? "text-teal-700" : n >= 70 ? "text-emerald-700" : "text-orange-500";

export const HistoryScreen = ({ openScanId }: HistoryScreenProps) => {
  const [query, setQuery] = useState("");
  const [detailFood, setDetailFood] = useState<{ name: string; score: number } | null>(() =>
    detailFromOpenScanId(openScanId),
  );

  const filteredRows = useMemo(
    () => rows.filter((r) => `${r.name} ${r.meta}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  if (detailFood) {
    return (
      <HealthScanDetail
        onBack={() => setDetailFood(null)}
        pageTitle={detailFood.name}
        pageSubtitle="Saved scan · History"
        foodName={detailFood.name}
        historyScore={detailFood.score}
      />
    );
  }

  return (
    <div className="px-3 pt-4 pb-0">
      <div className="flex items-center gap-2 mb-3 animate-[fade-up_0.4s_ease-out_both]">
        <span className="inline-flex h-9 w-9 rounded-full bg-slate-100 text-slate-600 items-center justify-center">
          <Search className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
        </span>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-blue-950">History</h1>
          <p className="text-xs text-blue-900">Past scans and scores</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_4px_10px_rgba(15,23,42,0.08)] border border-black/5 px-3 py-2.5 mb-4 flex items-center gap-2 animate-[fade-up_0.45s_ease-out_50ms_both]">
        <Search className="h-5 w-5 text-slate-400 shrink-0" aria-hidden />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search scans…"
          className="w-full text-sm leading-6 text-slate-700 placeholder:text-slate-400 bg-transparent outline-none"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-[0_4px_10px_rgba(15,23,42,0.08)] border border-black/5 overflow-hidden animate-[fade-up_0.4s_ease-out_80ms_both]">
        {filteredRows.map((row, i) => (
          <button
            key={`${row.name}-${row.meta}-${i}`}
            type="button"
            onClick={() => setDetailFood({ name: row.name, score: row.score })}
            className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-all duration-200 hover:bg-teal-50/50 active:scale-[0.995] ${
              i !== filteredRows.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
              <row.Icon className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-slate-800 truncate">{row.name}</p>
              <p className="text-xs text-slate-500 leading-snug truncate">{row.meta}</p>
            </div>
            <p className={`text-lg font-bold tabular-nums shrink-0 ${scoreColor(row.score)}`}>{row.score}</p>
            <ChevronRight className="h-5 w-5 text-slate-300 shrink-0" aria-hidden />
          </button>
        ))}
      </div>
    </div>
  );
};
