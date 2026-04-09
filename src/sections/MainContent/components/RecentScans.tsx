import { ScanItem } from "@/sections/MainContent/components/ScanItem";

export const RecentScans = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] mb-5 p-5 rounded-2xl">
      <div className="items-center flex justify-between mb-4">
        <h3 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-[27px]">
          Recent Scans
        </h3>
        <button className="text-black text-xs font-semibold block leading-4 hover:text-teal-700 transition-colors duration-200 focus:outline-none focus:underline">
          See All
        </button>
      </div>
      <ScanItem
        emoji="🥜"
        name="Organic Granola Bar"
        time="2h ago"
        score={82}
        variant="border-b border-solid border-[oklch(0.967_0.003_264.542)]"
        delay={0}
      />
      <ScanItem
        emoji="🥛"
        name="Greek Yogurt"
        time="5h ago"
        score={91}
        variant="border-b border-solid border-[oklch(0.967_0.003_264.542)]"
        delay={80}
      />
      <ScanItem
        emoji="🥤"
        name="Protein Shake"
        time="Yesterday"
        score={74}
        delay={160}
      />
    </div>
  );
};
import { ScanItem } from "@/sections/MainContent/components/ScanItem";

export const RecentScans = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] mb-5 p-5 rounded-2xl">
      <div className="items-center flex justify-between mb-4">
        <h3 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-[27px]">
          Recent Scans
        </h3>
        <button className="text-black text-xs font-semibold block leading-4 hover:text-teal-700 transition-colors duration-200 focus:outline-none focus:underline">
          See All
        </button>
      </div>
      <ScanItem
        emoji="🥜"
        name="Organic Granola Bar"
        time="2h ago"
        score={82}
        variant="border-b border-solid border-[oklch(0.967_0.003_264.542)]"
        delay={0}
      />
      <ScanItem
        emoji="🥛"
        name="Greek Yogurt"
        time="5h ago"
        score={91}
        variant="border-b border-solid border-[oklch(0.967_0.003_264.542)]"
        delay={80}
      />
      <ScanItem
        emoji="🥤"
        name="Protein Shake"
        time="Yesterday"
        score={74}
        delay={160}
      />
    </div>
  );
};