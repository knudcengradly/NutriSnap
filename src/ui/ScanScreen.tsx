import { Camera, Images } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export const ScanScreen = () => {
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const previewObjectUrlRef = useRef<string | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [proceedError, setProceedError] = useState(false);
  /** Bumps when showing the toast again so the 2s auto-dismiss timer restarts. */
  const [proceedErrorTick, setProceedErrorTick] = useState(0);
  const [pickMenuOpen, setPickMenuOpen] = useState(false);

  const openPickMenu = () => {
    if (scanning) return;
    setPickMenuOpen(true);
  };

  const closePickMenu = () => setPickMenuOpen(false);

  const triggerCamera = () => {
    closePickMenu();
    requestAnimationFrame(() => cameraInputRef.current?.click());
  };

  const triggerGallery = () => {
    closePickMenu();
    requestAnimationFrame(() => galleryInputRef.current?.click());
  };

  const revokePreview = useCallback(() => {
    if (previewObjectUrlRef.current) {
      URL.revokeObjectURL(previewObjectUrlRef.current);
      previewObjectUrlRef.current = null;
    }
    setPreviewUrl(null);
  }, []);

  const setPreviewFromFile = useCallback((file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    if (previewObjectUrlRef.current) {
      URL.revokeObjectURL(previewObjectUrlRef.current);
    }
    const url = URL.createObjectURL(file);
    previewObjectUrlRef.current = url;
    setPreviewUrl(url);
  }, []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPreviewFromFile(file);
    e.target.value = "";
  };

  useEffect(() => {
    return () => {
      if (previewObjectUrlRef.current) {
        URL.revokeObjectURL(previewObjectUrlRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!proceedError) return;
    const id = window.setTimeout(() => setProceedError(false), 2000);
    return () => clearTimeout(id);
  }, [proceedError, proceedErrorTick]);

  useEffect(() => {
    if (!pickMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPickMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pickMenuOpen]);

  const handleProceed = () => {
    if (scanning) return;
    if (!previewUrl) {
      setProceedErrorTick((t) => t + 1);
      setProceedError(true);
      return;
    }
    setProceedError(false);
    setScanning(true);
    window.setTimeout(() => setScanning(false), 1600);
  };

  const hasPhoto = Boolean(previewUrl);

  return (
    <div className="relative px-3 pt-4 pb-0">
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="sr-only"
        aria-hidden
        tabIndex={-1}
        onChange={onFileChange}
      />
      <input
        ref={galleryInputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        aria-hidden
        tabIndex={-1}
        onChange={onFileChange}
      />

      {pickMenuOpen && (
        <div
          className="fixed inset-0 z-[70] flex flex-col justify-end sm:items-center sm:justify-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="scan-photo-picker-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            aria-label="Close photo options"
            onClick={closePickMenu}
          />
          <div className="relative z-10 w-full max-w-sm rounded-t-3xl border border-black/5 bg-white p-4 shadow-[0_-8px_40px_rgba(15,23,42,0.15)] sm:rounded-3xl sm:shadow-xl animate-[fade-up_0.25s_ease-out_both]">
            <p id="scan-photo-picker-title" className="mb-1 text-center text-base font-bold text-slate-800">
              Add label photo
            </p>
            <p className="mb-4 text-center text-xs text-slate-500">Use your camera or pick an existing image</p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={triggerCamera}
                className="flex w-full items-center gap-3 rounded-2xl border border-teal-200/80 bg-teal-50/80 px-4 py-3.5 text-left transition-colors hover:bg-teal-100/90 active:scale-[0.99]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <Camera className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-800">Take photo</span>
                  <span className="block text-xs text-slate-500">Opens the camera on your device</span>
                </span>
              </button>
              <button
                type="button"
                onClick={triggerGallery}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3.5 text-left transition-colors hover:bg-slate-100 active:scale-[0.99]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-200/80 text-slate-700">
                  <Images className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-800">Upload from gallery</span>
                  <span className="block text-xs text-slate-500">Choose a saved photo or file</span>
                </span>
              </button>
            </div>
            <button
              type="button"
              onClick={closePickMenu}
              className="mt-3 w-full rounded-xl py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {proceedError && (
        <div className="pointer-events-none absolute inset-x-0 top-2 z-[60] flex justify-center px-3 sm:top-3">
          <div
            role="alert"
            aria-live="assertive"
            className="box-border w-full max-w-[17rem] rounded-lg border border-red-200/90 bg-[#ffe4e4] px-2 py-1.5 text-center shadow-md sm:max-w-[18rem] animate-[fade-up_0.2s_ease-out_both]"
          >
            <p className="text-[10px] font-semibold leading-tight text-black sm:text-[11px] sm:leading-snug">
              Take a photo or upload a Nutrition Facts label first to proceed.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 mb-3 animate-[fade-up_0.4s_ease-out_both]">
        <span className="inline-flex h-9 w-9 rounded-full bg-teal-100 text-teal-700 items-center justify-center dark:bg-slate-800 dark:text-slate-100">
          <Camera className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
        </span>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-slate-800 dark:!text-blue-950">Scan label</h1>
          <p className="text-xs text-slate-500 dark:!text-blue-900">Capture nutrition facts from packaging</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_4px_10px_rgba(15,23,42,0.08)] border border-black/5 p-3 mb-4 animate-[fade-up_0.4s_ease-out_80ms_both]">
        <div className="relative w-full rounded-2xl border-2 border-dashed border-teal-200 min-h-[380px] overflow-hidden bg-slate-50/40">
          {scanning && previewUrl && (
            <div className="absolute left-0 right-0 top-0 z-20 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-[scan-line_1.1s_ease-in-out_infinite]" />
          )}

          {previewUrl ? (
            <>
              <img
                src={previewUrl}
                alt="Nutrition label preview"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <button
                type="button"
                onClick={() => {
                  if (scanning) return;
                  openPickMenu();
                }}
                disabled={scanning}
                className="absolute top-3 right-3 z-10 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md backdrop-blur-sm hover:bg-white disabled:opacity-50 transition-colors"
              >
                Change
              </button>
              <p className="absolute bottom-3 left-3 right-3 z-10 text-center text-xs font-medium text-white drop-shadow-sm">
                Review your photo — tap Proceed when ready
              </p>
            </>
          ) : (
            <button
              type="button"
              onClick={openPickMenu}
              className="flex min-h-[380px] w-full cursor-pointer flex-col items-center justify-center gap-4 px-5 py-10 text-center transition-colors hover:bg-teal-50/50 active:bg-teal-50/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              aria-label="Choose camera or gallery to add a nutrition label photo"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-100">
                <Camera className="h-7 w-7 text-teal-700" strokeWidth={2} aria-hidden />
              </div>
              <p className="max-w-[300px] text-sm font-medium leading-relaxed text-slate-600">
                Take a photo or upload a picture of the nutrition label, keep text clear and readable.
              </p>
            </button>
          )}
        </div>
      </div>

      <div className="animate-[fade-up_0.35s_ease-out_both]">
        <button
          type="button"
          onClick={handleProceed}
          disabled={scanning}
          className={`w-full rounded-2xl py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(45,125,111,0.3)] transition-all duration-200 active:scale-[0.99] disabled:cursor-wait ${
            scanning
              ? "cursor-wait bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-900 dark:to-emerald-900 opacity-75"
              : hasPhoto
                ? "bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-900 dark:to-emerald-900 hover:from-teal-700 hover:to-emerald-700 dark:hover:from-teal-800 dark:hover:to-emerald-800 hover:shadow-[0_10px_26px_rgba(45,125,111,0.42)] hover:brightness-[1.03]"
                : "bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-900 dark:to-emerald-900 hover:from-teal-600 hover:to-emerald-700 dark:hover:from-teal-800 dark:hover:to-emerald-800 hover:shadow-[0_10px_26px_rgba(45,125,111,0.38)]"
          }`}
        >
          {scanning ? "Processing…" : "Proceed"}
        </button>
      </div>
    </div>
  );
};
