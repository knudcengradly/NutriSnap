import { useState } from "react";

export const ScanScreen = () => {
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);

  const handleScan = () => {
    if (scanning || done) return;
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setDone(true);
    }, 2200);
  };

  const handleReset = () => {
    setDone(false);
    setScanning(false);
  };

  return (
    <div className="flex flex-col h-full px-4 pt-6 pb-4 animate-[fade-up_0.4s_ease-out_both]">
      <h1 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-7 mb-1">Scan Label</h1>
      <p className="text-[oklch(0.707_0.022_261.325)] text-xs mb-5">Point your camera at a nutrition label</p>
      <div className="relative flex-1 rounded-2xl border-2 border-dashed border-teal-200 bg-white flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none transition-all duration-300" onClick={handleScan} style={{ minHeight: 280 }}>
        {scanning && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-[scan-line_1.1s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-teal-50/30" />
          </div>
        )}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-teal-600 rounded-tl-lg transition-all duration-300" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-teal-600 rounded-tr-lg transition-all duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal-600 rounded-bl-lg transition-all duration-300" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-teal-600 rounded-br-lg transition-all duration-300" />
        {done ? (
          <div className="flex flex-col items-center gap-3 animate-[scale-in_0.3s_ease-out_both]">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
            </div>
            <p className="text-green-700 font-semibold text-sm">Label scanned!</p>
            <p className="text-[oklch(0.707_0.022_261.325)] text-xs">Health score: <span className="text-green-600 font-bold">82</span></p>
          </div>
        ) : scanning ? (
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-teal-50 flex items-center justify-center">
              <img src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-10.svg" alt="Scan" className="h-8 w-8 opacity-60 animate-pulse" />
            </div>
            <p className="text-teal-700 font-medium text-sm animate-pulse">Analyzing label…</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-teal-50 flex items-center justify-center">
              <img src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-10.svg" alt="Scan" className="h-8 w-8 opacity-70" />
            </div>
            <p className="text-[oklch(0.278_0.033_256.848)] font-semibold text-sm">Position nutrition label</p>
            <p className="text-[oklch(0.707_0.022_261.325)] text-xs">Make sure the text is clear and readable</p>
          </div>
        )}
      </div>
      <div className="mt-5 flex flex-col items-center gap-3">
        {done ? (
          <button onClick={handleReset} className="w-full py-3 rounded-2xl bg-teal-700 text-white text-sm font-semibold transition-all duration-200 active:scale-95 hover:bg-teal-800 animate-[fade-up_0.3s_ease-out_both]">Scan another</button>
        ) : (
          <button onClick={handleScan} disabled={scanning} className={`w-full py-3 rounded-2xl text-sm font-semibold transition-all duration-200 active:scale-95 ${scanning ? "bg-teal-100 text-teal-400 cursor-not-allowed" : "bg-teal-700 text-white hover:bg-teal-800"}`}>
            {scanning ? "Scanning…" : "Tap to scan"}
          </button>
        )}
        <p className="text-[oklch(0.707_0.022_261.325)] text-[10px]">Works with all standard nutrition labels</p>
      </div>
    </div>
  );
};
import { useState } from "react";

export const ScanScreen = () => {
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);

  const handleScan = () => {
    if (scanning || done) return;
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setDone(true);
    }, 2200);
  };

  const handleReset = () => {
    setDone(false);
    setScanning(false);
  };

  return (
    <div className="flex flex-col h-full px-4 pt-6 pb-4 animate-[fade-up_0.4s_ease-out_both]">
      <h1 className="text-[oklch(0.278_0.033_256.848)] text-lg font-bold leading-7 mb-1">
        Scan Label
      </h1>
      <p className="text-[oklch(0.707_0.022_261.325)] text-xs mb-5">
        Point your camera at a nutrition label
      </p>
      <div
        className="relative flex-1 rounded-2xl border-2 border-dashed border-teal-200 bg-white flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none transition-all duration-300"
        onClick={handleScan}
        style={{ minHeight: 280 }}
      >
        {scanning && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-[scan-line_1.1s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-teal-50/30" />
          </div>
        )}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-teal-600 rounded-tl-lg transition-all duration-300" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-teal-600 rounded-tr-lg transition-all duration-300" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal-600 rounded-bl-lg transition-all duration-300" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-teal-600 rounded-br-lg transition-all duration-300" />
        {done ? (
          <div className="flex flex-col items-center gap-3 animate-[scale-in_0.3s_ease-out_both]">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="text-green-700 font-semibold text-sm">Label scanned!</p>
            <p className="text-[oklch(0.707_0.022_261.325)] text-xs">Health score: <span className="text-green-600 font-bold">82</span></p>
          </div>
        ) : scanning ? (
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-teal-50 flex items-center justify-center">
              <img src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-10.svg" alt="Scan" className="h-8 w-8 opacity-60 animate-pulse" />
            </div>
            <p className="text-teal-700 font-medium text-sm animate-pulse">Analyzing label…</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-teal-50 flex items-center justify-center">
              <img src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-10.svg" alt="Scan" className="h-8 w-8 opacity-70" />
            </div>
            <p className="text-[oklch(0.278_0.033_256.848)] font-semibold text-sm">Position nutrition label</p>
            <p className="text-[oklch(0.707_0.022_261.325)] text-xs">Make sure the text is clear and readable</p>
          </div>
        )}
      </div>
      <div className="mt-5 flex flex-col items-center gap-3">
        {done ? (
          <button onClick={handleReset} className="w-full py-3 rounded-2xl bg-teal-700 text-white text-sm font-semibold transition-all duration-200 active:scale-95 hover:bg-teal-800 animate-[fade-up_0.3s_ease-out_both]">
            Scan another
          </button>
        ) : (
          <button onClick={handleScan} disabled={scanning} className={`w-full py-3 rounded-2xl text-sm font-semibold transition-all duration-200 active:scale-95 ${scanning ? "bg-teal-100 text-teal-400 cursor-not-allowed" : "bg-teal-700 text-white hover:bg-teal-800"}`}>
            {scanning ? "Scanning…" : "Tap to scan"}
          </button>
        )}
        <p className="text-[oklch(0.707_0.022_261.325)] text-[10px]">Works with all standard nutrition labels</p>
      </div>
    </div>
  );
};
export const ScanScreen = () => {
  return (
    <div className="px-4 pt-6 pb-4">
      <h1 className="text-lg font-bold mb-1">Scan Label</h1>
      <p className="text-xs text-gray-500 mb-4">Point your camera at a nutrition label.</p>
      <div className="bg-white rounded-2xl border border-dashed border-teal-300 min-h-72 flex items-center justify-center">
        <p className="text-sm text-gray-500">Camera preview placeholder</p>
      </div>
    </div>
  );
};