import { useState } from "react";

type Props = {
  onTap?: () => void;
  active?: boolean;
};

export const ScanButton = ({ onTap, active }: Props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      className="font-medium items-center bg-transparent flex flex-col min-w-[auto] text-center -mt-5 p-0 focus:outline-none"
      onClick={onTap}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-teal-600/30 animate-[pulse-ring_1.8s_ease-out_infinite]" />
        <div
          className={`items-center bg-[linear-gradient(135deg,rgb(45,125,111),rgb(31,94,83))] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] flex h-16 justify-center w-16 rounded-full transition-transform duration-150 ${pressed ? "scale-90" : "scale-100 hover:scale-105"}`}
        >
          <img
            src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-10.svg"
            alt="Scan"
            className="text-white h-8 w-8"
          />
        </div>
      </div>
      <span className={`text-[10px] font-semibold block leading-[15px] mt-1 transition-all duration-200 ${active ? "text-teal-700" : ""}`}>
        Scan
      </span>
      <div className={`h-1 w-1 mt-0.5 rounded-full transition-all duration-200 ${active ? "bg-teal-700 opacity-100 scale-100" : "opacity-0 scale-0"}`} />
    </button>
  );
};
import { useState } from "react";

type Props = {
  onTap?: () => void;
  active?: boolean;
};

export const ScanButton = ({ onTap, active }: Props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      className="font-medium items-center bg-transparent flex flex-col min-w-[auto] text-center -mt-5 p-0 focus:outline-none"
      onClick={onTap}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
    >
      <div className="relative flex items-center justify-center">
        {/* Pulse ring */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-teal-600/30 animate-[pulse-ring_1.8s_ease-out_infinite]" />
        <div
          className={`items-center bg-[linear-gradient(135deg,rgb(45,125,111),rgb(31,94,83))] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] flex h-16 justify-center w-16 rounded-full transition-transform duration-150 ${pressed ? "scale-90" : "scale-100 hover:scale-105"}`}
        >
          <img
            src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-10.svg"
            alt="Scan"
            className="text-white h-8 w-8"
          />
        </div>
      </div>
      <span className={`text-[10px] font-semibold block leading-[15px] mt-1 transition-all duration-200 ${active ? "text-teal-700" : ""}`}>
        Scan
      </span>
      <div className={`h-1 w-1 mt-0.5 rounded-full transition-all duration-200 ${active ? "bg-teal-700 opacity-100 scale-100" : "opacity-0 scale-0"}`} />
    </button>
  );
};