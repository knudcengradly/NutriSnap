import { QuickActionButton } from "@/sections/MainContent/components/QuickActionButton";

export const QuickActions = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] mb-5 p-5 rounded-2xl border-l-4 border-solid border-black/10">
      <h3 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-[27px] mb-4">
        Quick Actions
      </h3>
      <div className="gap-x-3 grid grid-cols-2 gap-y-3">
        <QuickActionButton
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-1.svg"
          label="Scan Label"
        />
        <QuickActionButton
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-2.svg"
          label="Track Health"
        />
      </div>
    </div>
  );
};
import { QuickActionButton } from "@/sections/MainContent/components/QuickActionButton";

export const QuickActions = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] mb-5 p-5 rounded-2xl border-l-4 border-solid border-black/10">
      <h3 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-[27px] mb-4">
        Quick Actions
      </h3>
      <div className="gap-x-3 grid grid-cols-2 gap-y-3">
        <QuickActionButton
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-1.svg"
          label="Scan Label"
        />
        <QuickActionButton
          iconSrc="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-2.svg"
          label="Track Health"
        />
      </div>
    </div>
  );
};