import type { LucideIcon } from "lucide-react";
import type { TabId } from "@/App";
import { Activity, Camera, History, Home, Settings } from "lucide-react";

type Props = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  darkMode: boolean;
};

const leftTabs: { id: TabId; label: string; Icon: LucideIcon }[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "health", label: "Info", Icon: Activity },
];

const rightTabs: { id: TabId; label: string }[] = [
  { id: "history", label: "History" },
  { id: "settings", label: "Settings" },
];

/** No “card” on the button — glow lives on icon + label only when active. */
const sideTabButton = (active: boolean, darkMode: boolean) =>
  [
    "flex flex-col min-w-14 items-center text-center px-3 py-2 transition-opacity duration-200",
    active ? "" : darkMode ? "text-slate-400 opacity-80 hover:opacity-100" : "text-slate-500 opacity-75 hover:opacity-100",
  ].join(" ");

/** Light green halo on the glyph (SVG stroke) — stronger than Tailwind drop-shadow for small icons. */
const iconActiveGlow =
  "[filter:drop-shadow(0_0_3px_rgba(167,243,208,0.95))_drop-shadow(0_0_8px_rgba(134,239,172,0.85))_drop-shadow(0_0_14px_rgba(74,222,128,0.45))]";

/** text-shadow reads clearly on 10px labels; drop-shadow on text is easy to miss. */
const labelActiveGlow =
  "[text-shadow:0_0_8px_rgba(167,243,208,0.95),0_0_14px_rgba(134,239,172,0.65),0_0_22px_rgba(74,222,128,0.35)]";

const sideIconClass = (active: boolean, darkMode: boolean) =>
  [
    "mx-auto shrink-0 transition-[color,filter] duration-200",
    active ? (darkMode ? "text-slate-100" : `text-green-900 ${iconActiveGlow}`) : darkMode ? "text-slate-400" : "text-slate-500",
  ].join(" ");

const sideLabelClass = (active: boolean, darkMode: boolean) =>
  [
    "text-[10px] mt-1 transition-[color,text-shadow] duration-200",
    active
      ? darkMode
        ? "font-bold text-slate-100"
        : `font-bold text-green-900 ${labelActiveGlow}`
      : darkMode
        ? "text-slate-400"
        : "text-slate-500",
  ].join(" ");

export const BottomNav = ({ activeTab, onTabChange, darkMode }: Props) => {
  return (
    <div
      className={`z-50 px-2 pb-[env(safe-area-inset-bottom,0px)] ${
        darkMode ? "border-t border-slate-700 bg-slate-900" : "border-t border-[oklch(0.928_0.006_264.531)] bg-white"
      }`}
    >
      <div className="flex justify-around items-end pt-1">
        {leftTabs.map((tab) => {
          const active = activeTab === tab.id;
          const Icon = tab.Icon;
          return (
            <button key={tab.id} type="button" onClick={() => onTabChange(tab.id)} className={sideTabButton(active, darkMode)}>
              <Icon size={17} className={sideIconClass(active, darkMode)} strokeWidth={2.25} aria-hidden />
              <span className={sideLabelClass(active, darkMode)}>{tab.label}</span>
            </button>
          );
        })}

        <button type="button" onClick={() => onTabChange("scan")} className="flex flex-col items-center -mt-5">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-teal-600/30 animate-[pulse-ring_1.8s_ease-out_infinite]" />
            <div className="h-16 w-16 rounded-full bg-[linear-gradient(135deg,rgb(45,125,111),rgb(31,94,83))] flex items-center justify-center shadow-[0_10px_20px_rgba(45,125,111,0.35)]">
              <Camera
                size={28}
                className={
                  activeTab === "scan"
                    ? "text-white [filter:drop-shadow(0_0_4px_rgba(167,243,208,0.9))_drop-shadow(0_0_10px_rgba(134,239,172,0.5))]"
                    : "text-white"
                }
              />
            </div>
          </div>
          <span
            className={`text-[10px] font-semibold mt-1 transition-[color,text-shadow] duration-200 ${
              activeTab === "scan"
                ? darkMode
                  ? "font-bold text-slate-100"
                  : `font-bold text-green-900 ${labelActiveGlow}`
                : darkMode
                  ? "text-slate-400"
                  : "text-slate-500"
            }`}
          >
            Scan
          </span>
        </button>

        {rightTabs.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button key={tab.id} type="button" onClick={() => onTabChange(tab.id)} className={sideTabButton(active, darkMode)}>
              {tab.id === "history" ? <History size={17} className={sideIconClass(active, darkMode)} /> : <Settings size={17} className={sideIconClass(active, darkMode)} />}
              <span className={sideLabelClass(active, darkMode)}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
