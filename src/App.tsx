import { useEffect, useState } from "react";
import { HeroHeader } from "./ui/HeroHeader";
import { MainContent } from "./ui/MainContent";
import { BottomNav } from "./ui/BottomNav";
import { FixedFruitDeco, ScrollColumnWash } from "./ui/PageFruitBackground";
import { ScanScreen } from "./ui/ScanScreen";
import { HistoryScreen } from "./ui/HistoryScreen";
import { SettingsScreen } from "./ui/SettingsScreen";
import { HealthScreen } from "./sections/HealthScreen";

export type TabId = "home" | "health" | "scan" | "history" | "settings";

export const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [historyOpenScanId, setHistoryOpenScanId] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("nutrisnap-dark-mode") === "1";
  });

  useEffect(() => {
    if (activeTab !== "history") setHistoryOpenScanId(null);
  }, [activeTab]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("nutrisnap-dark-mode", darkMode ? "1" : "0");
  }, [darkMode]);

  return (
    <div
      className={`text-[oklch(0.145_0_0)] text-base not-italic normal-nums font-normal accent-auto box-border tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter fixed inset-0 z-0 flex min-h-0 flex-col overflow-hidden overscroll-none ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className={`flex min-h-0 flex-1 justify-center ${darkMode ? "bg-slate-900" : "bg-gray-100"}`}>
        <div
          className={`relative flex h-full min-h-0 w-full max-w-sm flex-col overflow-hidden overscroll-none shadow-2xl ${
            darkMode ? "bg-slate-900" : "bg-white"
          }`}
        >
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden font-inter">
            <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
              <ScrollColumnWash />
              <FixedFruitDeco />
              <div className="relative z-10 flex h-full min-h-0 w-full flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain">
                <div className="relative z-10 w-full min-h-0 pb-14">
                  <div className="relative z-10 w-full">
                    {activeTab === "home" && (
                      <>
                        <HeroHeader />
                        <MainContent
                          onNavigate={setActiveTab}
                          onOpenScanInHistory={(id) => {
                            setHistoryOpenScanId(id);
                            setActiveTab("history");
                          }}
                        />
                      </>
                    )}
                    {activeTab === "health" && <HealthScreen />}
                    {activeTab === "scan" && <ScanScreen />}
                    {activeTab === "history" && <HistoryScreen openScanId={historyOpenScanId} />}
                    {activeTab === "settings" && (
                      <SettingsScreen darkMode={darkMode} onDarkModeChange={setDarkMode} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <BottomNav activeTab={activeTab} onTabChange={setActiveTab} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};
