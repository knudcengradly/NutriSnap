import { QuickActions } from "@/sections/MainContent/components/QuickActions";
import { DailySummary } from "@/sections/MainContent/components/DailySummary";
import { HealthScore } from "@/sections/MainContent/components/HealthScore";
import { RecentScans } from "@/sections/MainContent/components/RecentScans";
import { DailyTip } from "@/sections/MainContent/components/DailyTip";

export const MainContent = () => {
  return (
    <div className="relative z-10 -mt-8 px-5">
      <div className="animate-[slide-up_0.5s_ease-out_0.1s_both]"><QuickActions /></div>
      <div className="animate-[slide-up_0.5s_ease-out_0.2s_both]"><DailySummary /></div>
      <div className="animate-[slide-up_0.5s_ease-out_0.3s_both]"><HealthScore /></div>
      <div className="animate-[slide-up_0.5s_ease-out_0.4s_both]"><RecentScans /></div>
      <div className="animate-[slide-up_0.5s_ease-out_0.5s_both]"><DailyTip /></div>
    </div>
  );
};
import { QuickActions } from "@/sections/MainContent/components/QuickActions";
import { DailySummary } from "@/sections/MainContent/components/DailySummary";
import { HealthScore } from "@/sections/MainContent/components/HealthScore";
import { RecentScans } from "@/sections/MainContent/components/RecentScans";
import { DailyTip } from "@/sections/MainContent/components/DailyTip";

export const MainContent = () => {
  return (
    <div className="relative z-10 -mt-8 px-5">
      <div className="animate-[slide-up_0.5s_ease-out_0.1s_both]"><QuickActions /></div>
      <div className="animate-[slide-up_0.5s_ease-out_0.2s_both]"><DailySummary /></div>
      <div className="animate-[slide-up_0.5s_ease-out_0.3s_both]"><HealthScore /></div>
      <div className="animate-[slide-up_0.5s_ease-out_0.4s_both]"><RecentScans /></div>
      <div className="animate-[slide-up_0.5s_ease-out_0.5s_both]"><DailyTip /></div>
    </div>
  );
};
export const MainContent = () => {
  return (
    <div className="px-5 pb-6">
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-4">
        <h3 className="text-lg font-bold mb-2">Quick Actions</h3>
        <p className="text-sm text-gray-600">Scan labels and track your nutrition progress.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-4">
        <h3 className="text-lg font-bold mb-2">Today&apos;s Summary</h3>
        <p className="text-sm text-gray-600">Calories 1240 • Water 6 glasses • Scans 3</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h3 className="text-lg font-bold mb-2">Recent Scans</h3>
        <p className="text-sm text-gray-600">Organic Granola Bar, Greek Yogurt, Protein Shake</p>
      </div>
    </div>
  );
};