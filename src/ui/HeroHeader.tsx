export const HeroHeader = () => {
  return (
    <header className="relative z-20 pt-10 pb-5 px-5">
      <p className="text-slate-800 dark:!text-blue-950 text-sm font-semibold mb-2 animate-[fade-up_0.5s_ease-out_both]">
        Welcome back
      </p>
      <h1 className="text-[#34d399] dark:text-emerald-800 text-[34px] leading-9 font-bold italic tracking-tight animate-[fade-up_0.5s_ease-out_80ms_both]">
        NutriSnap
      </h1>
      <p className="text-[#1f2937] text-sm mt-1.5 leading-snug animate-[fade-up_0.5s_ease-out_140ms_both]">
        Scan. Know. Eat Smart.
      </p>
    </header>
  );
};
