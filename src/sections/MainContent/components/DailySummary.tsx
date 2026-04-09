import { SummaryItem } from "@/sections/MainContent/components/SummaryItem";

export const DailySummary = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] mb-5 p-5 rounded-2xl border-l-4 border-solid border-black/10">
      <div className="items-center flex justify-between mb-4">
        <h3 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-[27px]">
          Today&#39;s Summary
        </h3>
        <button className="text-black text-xs font-semibold block leading-4 hover:text-teal-700 transition-colors duration-200 focus:outline-none focus:underline">
          View All
        </button>
      </div>
      <div className="gap-x-3 grid grid-cols-3 gap-y-3">
        <SummaryItem
          containerClassName="bg-[oklch(0.98_0.016_73.684)] border-[oklch(0.954_0.038_75.164)]"
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-3.svg"
          iconClassName="text-[oklch(0.705_0.213_47.604)]"
          value="1,240"
          label="Calories"
        />
        <SummaryItem
          containerClassName="bg-[oklch(0.97_0.014_254.604)] border-[oklch(0.932_0.032_255.585)]"
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-4.svg"
          iconClassName="text-[oklch(0.623_0.214_259.815)]"
          value="6"
          label="Glasses"
        />
        <SummaryItem
          containerClassName="relative bg-teal-700/10 shadow-[rgba(45,125,111,0.05)_0px_0px_10px_0px_inset] border-teal-700/30 overflow-hidden"
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-5.svg"
          iconClassName="relative text-teal-700 z-10"
          value="3"
          label="Scans"
          showOverlay={true}
          valueClassName="relative z-10"
          labelClassName="relative z-10"
        />
      </div>
    </div>
  );
};
import { SummaryItem } from "@/sections/MainContent/components/SummaryItem";

export const DailySummary = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] mb-5 p-5 rounded-2xl border-l-4 border-solid border-black/10">
      <div className="items-center flex justify-between mb-4">
        <h3 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-[27px]">
          Today&#39;s Summary
        </h3>
        <button className="text-black text-xs font-semibold block leading-4 hover:text-teal-700 transition-colors duration-200 focus:outline-none focus:underline">
          View All
        </button>
      </div>
      <div className="gap-x-3 grid grid-cols-3 gap-y-3">
        <SummaryItem
          containerClassName="bg-[oklch(0.98_0.016_73.684)] border-[oklch(0.954_0.038_75.164)]"
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-3.svg"
          iconClassName="text-[oklch(0.705_0.213_47.604)]"
          value="1,240"
          label="Calories"
        />
        <SummaryItem
          containerClassName="bg-[oklch(0.97_0.014_254.604)] border-[oklch(0.932_0.032_255.585)]"
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-4.svg"
          iconClassName="text-[oklch(0.623_0.214_259.815)]"
          value="6"
          label="Glasses"
        />
        <SummaryItem
          containerClassName="relative bg-teal-700/10 shadow-[rgba(45,125,111,0.05)_0px_0px_10px_0px_inset] border-teal-700/30 overflow-hidden"
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-5.svg"
          iconClassName="relative text-teal-700 z-10"
          value="3"
          label="Scans"
          showOverlay={true}
          valueClassName="relative z-10"
          labelClassName="relative z-10"
        />
      </div>
    </div>
  );
};
