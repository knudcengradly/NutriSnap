import { useState } from "react";

type HistoryItem = {
  id: number;
  emoji: string;
  name: string;
  time: string;
  category: string;
  score: number;
};

const HISTORY: HistoryItem[] = [
  { id: 1, emoji: "🥣", name: "Organic Granola Bar", time: "Today, 2:30 PM", category: "Snack", score: 82 },
  { id: 2, emoji: "🥛", name: "Greek Yogurt", time: "Today, 9:00 AM", category: "Dairy", score: 91 },
  { id: 3, emoji: "🥤", name: "Protein Shake", time: "Yesterday", category: "Beverage", score: 74 },
  { id: 4, emoji: "🍞", name: "Whole Wheat Bread", time: "Yesterday", category: "Grain", score: 68 },
  { id: 5, emoji: "🥜", name: "Mixed Nuts", time: "Apr 5", category: "Snack", score: 88 },
  { id: 6, emoji: "🍊", name: "Orange Juice", time: "Apr 5", category: "Beverage", score: 55 },
];

const scoreColor = (s: number) => (s >= 85 ? "text-green-600" : s >= 70 ? "text-teal-700" : "text-yellow-600");

export const HistoryScreen = () => {
  const [query, setQuery] = useState("");
  const filtered = HISTORY.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col h-full px-4 pt-6 pb-4 animate-[fade-up_0.4s_ease-out_both]">
      <h1 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-7 mb-4">Scan History</h1>
      <div className="relative mb-4">
        <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.707_0.022_261.325)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
        <input type="text" placeholder="Search scans…" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white border border-[oklch(0.928_0.006_264.531)] text-sm text-[oklch(0.278_0.033_256.848)] placeholder-[oklch(0.707_0.022_261.325)] focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200" />
      </div>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-[oklch(0.928_0.006_264.531)]">
        {filtered.length === 0 ? (
          <div className="py-10 text-center text-[oklch(0.707_0.022_261.325)] text-sm">No results for &quot;{query}&quot;</div>
        ) : (
          filtered.map((item, i) => (
            <div key={item.id} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-teal-50/50 transition-all duration-200 active:bg-teal-50 animate-[fade-up_0.35s_ease-out_both]" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="h-10 w-10 rounded-full bg-teal-700/10 flex items-center justify-center text-lg flex-shrink-0">{item.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[oklch(0.278_0.033_256.848)] text-sm font-semibold leading-5 truncate">{item.name}</p>
                <p className="text-[oklch(0.707_0.022_261.325)] text-xs leading-4">{item.time} · {item.category}</p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className={`text-sm font-bold ${scoreColor(item.score)}`}>{item.score}</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[oklch(0.707_0.022_261.325)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
import { useState } from "react";

type HistoryItem = {
  id: number;
  emoji: string;
  name: string;
  time: string;
  category: string;
  score: number;
};

const HISTORY: HistoryItem[] = [
  { id: 1, emoji: "🥣", name: "Organic Granola Bar", time: "Today, 2:30 PM", category: "Snack", score: 82 },
  { id: 2, emoji: "🥛", name: "Greek Yogurt", time: "Today, 9:00 AM", category: "Dairy", score: 91 },
  { id: 3, emoji: "🥤", name: "Protein Shake", time: "Yesterday", category: "Beverage", score: 74 },
  { id: 4, emoji: "🍞", name: "Whole Wheat Bread", time: "Yesterday", category: "Grain", score: 68 },
  { id: 5, emoji: "🥜", name: "Mixed Nuts", time: "Apr 5", category: "Snack", score: 88 },
  { id: 6, emoji: "🍊", name: "Orange Juice", time: "Apr 5", category: "Beverage", score: 55 },
];

const scoreColor = (s: number) => (s >= 85 ? "text-green-600" : s >= 70 ? "text-teal-700" : "text-yellow-600");

export const HistoryScreen = () => {
  const [query, setQuery] = useState("");
  const filtered = HISTORY.filter(
    (item) => item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col h-full px-4 pt-6 pb-4 animate-[fade-up_0.4s_ease-out_both]">
      <h1 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-7 mb-4">Scan History</h1>
      <div className="relative mb-4">
        <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.707_0.022_261.325)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input type="text" placeholder="Search scans…" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white border border-[oklch(0.928_0.006_264.531)] text-sm text-[oklch(0.278_0.033_256.848)] placeholder-[oklch(0.707_0.022_261.325)] focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200" />
      </div>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-[oklch(0.928_0.006_264.531)]">
        {filtered.length === 0 ? (
          <div className="py-10 text-center text-[oklch(0.707_0.022_261.325)] text-sm">No results for &quot;{query}&quot;</div>
        ) : (
          filtered.map((item, i) => (
            <div key={item.id} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-teal-50/50 transition-all duration-200 active:bg-teal-50 animate-[fade-up_0.35s_ease-out_both]" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="h-10 w-10 rounded-full bg-teal-700/10 flex items-center justify-center text-lg flex-shrink-0">{item.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[oklch(0.278_0.033_256.848)] text-sm font-semibold leading-5 truncate">{item.name}</p>
                <p className="text-[oklch(0.707_0.022_261.325)] text-xs leading-4">{item.time} · {item.category}</p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className={`text-sm font-bold ${scoreColor(item.score)}`}>{item.score}</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[oklch(0.707_0.022_261.325)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export const HistoryScreen = () => {
  return (
    <div className="px-4 pt-6 pb-4">
      <h1 className="text-lg font-bold mb-4">Scan History</h1>
      <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
        <p className="text-sm">🥣 Organic Granola Bar — 82</p>
        <p className="text-sm">🥛 Greek Yogurt — 91</p>
        <p className="text-sm">🥤 Protein Shake — 74</p>
      </div>
    </div>
  );
};