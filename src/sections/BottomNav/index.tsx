import { ScanButton } from "@/sections/BottomNav/components/ScanButton";
import type { TabId } from "@/App";

type Props = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

type NavItem = {
  id: TabId;
  iconSrc: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-8.svg", label: "Home" },
  { id: "health", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-9.svg", label: "Health" },
  { id: "history", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-11.svg", label: "History" },
  { id: "settings", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-12.svg", label: "Settings" },
];

export const BottomNav = ({ activeTab, onTabChange }: Props) => {
  return (
    <div className="bg-white z-50 px-2 border-t border-solid border-[oklch(0.928_0.006_264.531)] bottom-0 inset-x-0 animate-[fade-up_0.5s_ease-out_0.6s_both]">
      <div className="items-end flex justify-around pt-1">
        {NAV_ITEMS.slice(0, 2).map((item) => (
          <button key={item.id} onClick={() => onTabChange(item.id)} className={`font-medium items-center bg-transparent flex flex-col min-w-14 text-center px-3 py-2 transition-all duration-200 active:scale-90 ${activeTab === item.id ? "opacity-100" : "opacity-60 hover:opacity-80"}`}>
            <img src={item.iconSrc} alt={item.label} className="h-5 w-5" />
            <span className={`text-[10px] block leading-[15px] mt-1 transition-all duration-200 ${activeTab === item.id ? "font-bold" : "font-normal text-[oklch(0.707_0.022_261.325)]"}`}>{item.label}</span>
            <div className={`h-1 w-1 mt-0.5 rounded-full transition-all duration-200 ${activeTab === item.id ? "bg-teal-700 opacity-100 scale-100" : "opacity-0 scale-0"}`} />
          </button>
        ))}
        <ScanButton onTap={() => onTabChange("scan")} active={activeTab === "scan"} />
        {NAV_ITEMS.slice(2).map((item) => (
          <button key={item.id} onClick={() => onTabChange(item.id)} className={`font-medium items-center bg-transparent flex flex-col min-w-14 text-center px-3 py-2 transition-all duration-200 active:scale-90 ${activeTab === item.id ? "opacity-100" : "opacity-60 hover:opacity-80"}`}>
            <img src={item.iconSrc} alt={item.label} className="h-5 w-5" />
            <span className={`text-[10px] block leading-[15px] mt-1 transition-all duration-200 ${activeTab === item.id ? "font-bold" : "font-normal text-[oklch(0.707_0.022_261.325)]"}`}>{item.label}</span>
            <div className={`h-1 w-1 mt-0.5 rounded-full transition-all duration-200 ${activeTab === item.id ? "bg-teal-700 opacity-100 scale-100" : "opacity-0 scale-0"}`} />
          </button>
        ))}
      </div>
    </div>
  );
};
import { ScanButton } from "@/sections/BottomNav/components/ScanButton";
import type { TabId } from "@/App";

type Props = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

type NavItem = {
  id: TabId;
  iconSrc: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-8.svg", label: "Home" },
  { id: "health", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-9.svg", label: "Health" },
  { id: "history", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-11.svg", label: "History" },
  { id: "settings", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-12.svg", label: "Settings" },
];

export const BottomNav = ({ activeTab, onTabChange }: Props) => {
  return (
    <div className="bg-white z-50 px-2 border-t border-solid border-[oklch(0.928_0.006_264.531)] bottom-0 inset-x-0 animate-[fade-up_0.5s_ease-out_0.6s_both]">
      <div className="items-end flex justify-around pt-1">
        {NAV_ITEMS.slice(0, 2).map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`font-medium items-center bg-transparent flex flex-col min-w-14 text-center px-3 py-2 transition-all duration-200 active:scale-90 ${activeTab === item.id ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
          >
            <img src={item.iconSrc} alt={item.label} className="h-5 w-5" />
            <span className={`text-[10px] block leading-[15px] mt-1 transition-all duration-200 ${activeTab === item.id ? "font-bold" : "font-normal text-[oklch(0.707_0.022_261.325)]"}`}>
              {item.label}
            </span>
            <div className={`h-1 w-1 mt-0.5 rounded-full transition-all duration-200 ${activeTab === item.id ? "bg-teal-700 opacity-100 scale-100" : "opacity-0 scale-0"}`} />
          </button>
        ))}
        <ScanButton onTap={() => onTabChange("scan")} active={activeTab === "scan"} />
        {NAV_ITEMS.slice(2).map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`font-medium items-center bg-transparent flex flex-col min-w-14 text-center px-3 py-2 transition-all duration-200 active:scale-90 ${activeTab === item.id ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
          >
            <img src={item.iconSrc} alt={item.label} className="h-5 w-5" />
            <span className={`text-[10px] block leading-[15px] mt-1 transition-all duration-200 ${activeTab === item.id ? "font-bold" : "font-normal text-[oklch(0.707_0.022_261.325)]"}`}>
              {item.label}
            </span>
            <div className={`h-1 w-1 mt-0.5 rounded-full transition-all duration-200 ${activeTab === item.id ? "bg-teal-700 opacity-100 scale-100" : "opacity-0 scale-0"}`} />
          </button>
        ))}
      </div>
    </div>
  );
};
import { ScanButton } from "@/sections/BottomNav/components/ScanButton";
import type { TabId } from "@/App";

type Props = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

type NavItem = {
  id: TabId;
  iconSrc: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-8.svg", label: "Home" },
  { id: "health", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-9.svg", label: "Health" },
  { id: "history", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-11.svg", label: "History" },
  { id: "settings", iconSrc: "https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-12.svg", label: "Settings" },
];

export const BottomNav = ({ activeTab, onTabChange }: Props) => {
  return (
    <div className="bg-white z-50 px-2 border-t border-solid border-[oklch(0.928_0.006_264.531)] bottom-0 inset-x-0 animate-[fade-up_0.5s_ease-out_0.6s_both]">
      <div className="items-end flex justify-around pt-1">
        {NAV_ITEMS.slice(0, 2).map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`font-medium items-center bg-transparent flex flex-col min-w-14 text-center px-3 py-2 transition-all duration-200 active:scale-90 ${activeTab === item.id ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
          >
            <img src={item.iconSrc} alt={item.label} className="h-5 w-5" />
            <span className={`text-[10px] block leading-[15px] mt-1 transition-all duration-200 ${activeTab === item.id ? "font-bold" : "font-normal text-[oklch(0.707_0.022_261.325)]"}`}>
              {item.label}
            </span>
            <div className={`h-1 w-1 mt-0.5 rounded-full transition-all duration-200 ${activeTab === item.id ? "bg-teal-700 opacity-100 scale-100" : "opacity-0 scale-0"}`} />
          </button>
        ))}
        <ScanButton onTap={() => onTabChange("scan")} active={activeTab === "scan"} />
        {NAV_ITEMS.slice(2).map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`font-medium items-center bg-transparent flex flex-col min-w-14 text-center px-3 py-2 transition-all duration-200 active:scale-90 ${activeTab === item.id ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
          >
            <img src={item.iconSrc} alt={item.label} className="h-5 w-5" />
            <span className={`text-[10px] block leading-[15px] mt-1 transition-all duration-200 ${activeTab === item.id ? "font-bold" : "font-normal text-[oklch(0.707_0.022_261.325)]"}`}>
              {item.label}
            </span>
            <div className={`h-1 w-1 mt-0.5 rounded-full transition-all duration-200 ${activeTab === item.id ? "bg-teal-700 opacity-100 scale-100" : "opacity-0 scale-0"}`} />
          </button>
        ))}
      </div>
    </div>
  );
};
import type { TabId } from "../../App";

type Props = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

const tabs: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "health", label: "Health" },
  { id: "scan", label: "Scan" },
  { id: "history", label: "History" },
  { id: "settings", label: "Settings" },
];

export const BottomNav = ({ activeTab, onTabChange }: Props) => {
  return (
    <div className="bg-white border-t border-gray-200 px-1">
      <div className="flex items-end justify-around pt-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center min-w-14 px-3 py-2 text-center ${
              activeTab === tab.id ? "opacity-100" : "opacity-60"
            }`}
          >
            <span className="text-[10px] mt-1">{tab.label}</span>
            <div
              className={`h-1 w-1 mt-0.5 rounded-full ${
                activeTab === tab.id ? "bg-teal-700" : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};