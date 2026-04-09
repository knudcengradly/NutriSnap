import { useState } from "react";

export type QuickActionButtonProps = {
  iconSrc: string;
  label: string;
};

export const QuickActionButton = (props: QuickActionButtonProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      className={`font-medium items-center bg-teal-700/20 shadow-[rgba(45,125,111,0.1)_0px_4px_12px_0px] gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2 text-center border p-4 rounded-[14px] border-black/10 w-full transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-500/50 hover:bg-teal-700/30 hover:shadow-[rgba(45,125,111,0.2)_0px_6px_16px_0px] ${pressed ? "scale-95 bg-teal-700/40" : "scale-100"}`}
    >
      <div className="items-center bg-teal-700 flex h-12 justify-center min-h-[auto] min-w-[auto] w-12 rounded-full transition-transform duration-150">
        <img
          src={props.iconSrc}
          alt="Icon"
          className="text-white h-6 w-6"
        />
      </div>
      <span className="text-black text-sm font-bold block leading-5 min-h-[auto] min-w-[auto]">
        {props.label}
      </span>
    </button>
  );
};
import { useState } from "react";

export type QuickActionButtonProps = {
  iconSrc: string;
  label: string;
};

export const QuickActionButton = (props: QuickActionButtonProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      className={`font-medium items-center bg-teal-700/20 shadow-[rgba(45,125,111,0.1)_0px_4px_12px_0px] gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2 text-center border p-4 rounded-[14px] border-black/10 w-full transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-500/50 hover:bg-teal-700/30 hover:shadow-[rgba(45,125,111,0.2)_0px_6px_16px_0px] ${pressed ? "scale-95 bg-teal-700/40" : "scale-100"}`}
    >
      <div className="items-center bg-teal-700 flex h-12 justify-center min-h-[auto] min-w-[auto] w-12 rounded-full transition-transform duration-150">
        <img
          src={props.iconSrc}
          alt="Icon"
          className="text-white h-6 w-6"
        />
      </div>
      <span className="text-black text-sm font-bold block leading-5 min-h-[auto] min-w-[auto]">
        {props.label}
      </span>
    </button>
  );
};