import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Candy,
  Droplet,
  FileText,
  Flame,
  Leaf,
  Sparkles,
  Utensils,
} from "lucide-react";
import { NutritionLabelSample } from "./NutritionLabelSample";

const riceIconSrc = `${import.meta.env.BASE_URL}img/rice_icon.png`;
const sugarIconSrc = `${import.meta.env.BASE_URL}img/sugar_icon.png`;
const oilIconSrc = `${import.meta.env.BASE_URL}img/oil_icon.png`;

function RiceBowlEquivalents() {
  const bowlPx = 52;
  const halfW = bowlPx / 2;

  return (
    <div
      className="mt-0 flex w-full items-end justify-center gap-2"
      aria-label="About one and a half cups of cooked rice, shown as one full bowl and half of the same picture"
    >
      <img
        src={riceIconSrc}
        alt=""
        className="shrink-0 object-contain object-center object-bottom"
        width={bowlPx}
        height={bowlPx}
        style={{ width: bowlPx, height: bowlPx }}
        decoding="async"
      />
      <div
        className="flex shrink-0 justify-start overflow-hidden"
        style={{ width: halfW, height: bowlPx }}
        aria-hidden
      >
        <img
          src={riceIconSrc}
          alt=""
          className="max-w-none shrink-0 object-contain object-left object-bottom animate-rice-shimmer"
          width={bowlPx}
          height={bowlPx}
          style={{ width: bowlPx, height: bowlPx }}
          decoding="async"
        />
      </div>
    </div>
  );
}

const ratingScoreColor = (n: number) =>
  n >= 85 ? "text-teal-700" : n >= 70 ? "text-emerald-700" : "text-orange-500";

export type HealthScanDetailProps = {
  onBack?: () => void;
  pageTitle: string;
  pageSubtitle: string;
  foodName?: string;
  /** When set (e.g. from History), show numeric score beside the health rating. */
  historyScore?: number;
};

export const HealthScanDetail = ({
  onBack,
  pageTitle,
  pageSubtitle,
  foodName = "Instant Noodles",
  historyScore,
}: HealthScanDetailProps) => {
  return (
    <div className="px-3 pt-4 pb-4 animate-[fade-up_0.4s_ease-out_both]">
      <div className="mb-4 flex items-center gap-2">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 active:scale-[0.98]"
            aria-label="Back to history"
          >
            <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
          </button>
        )}
        {!onBack && (
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-slate-800 dark:text-slate-100">
            <Activity className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
          </span>
        )}
        <div className="min-w-0">
          <h1 className="text-lg font-bold tracking-tight text-blue-950">{pageTitle}</h1>
          <p className="text-xs text-blue-900">{pageSubtitle}</p>
        </div>
      </div>

      <div className="mb-4 animate-[fade-up_0.45s_ease-out_40ms_both]">
        <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
            Scanned label
          </p>
          <div className="flex justify-center">
            <div className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200/80">
              <NutritionLabelSample />
            </div>
          </div>
        </div>
      </div>

      <div className="animate-[fade-up_0.45s_ease-out_140ms_both]">
        <div className="rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
          <h3 className="mb-4 text-lg font-bold tracking-tight text-slate-800">Nutrition Summary</h3>

          <div className="flex flex-col gap-4">
            {/* Food + macros — neutral panel */}
            <section
              aria-labelledby="nutrition-food-heading"
              className="rounded-xl border border-slate-300/90 bg-gradient-to-b from-slate-50/90 to-slate-50/40 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-violet-400/55 dark:bg-violet-700/10 dark:from-transparent dark:to-transparent dark:shadow-none sm:p-3.5"
            >
              <h4
                id="nutrition-food-heading"
                className="mb-3 border-b border-slate-200/80 pb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:border-violet-300/45 dark:text-white"
              >
                Food &amp; nutrients
              </h4>
              <div className="mb-3 rounded-lg border border-violet-200/85 bg-white/95 px-3 py-3 shadow-[0_2px_8px_rgba(91,33,182,0.06)] ring-1 ring-violet-100/70 dark:border-violet-400/65 dark:bg-violet-800/10 dark:shadow-none dark:ring-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 shadow-sm">
                    <Utensils className="h-[19px] w-[19px]" strokeWidth={2.25} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700/90 dark:text-white/90">Food</p>
                    <p className="mt-0.5 truncate text-lg font-bold tracking-tight text-slate-900 dark:text-white">{foodName}</p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-200/70 border-t border-slate-300/40 pt-1 dark:divide-violet-300/35 dark:border-violet-300/40">
                <div className="py-3 first:pt-2">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Flame className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                        <p className="text-base font-semibold text-slate-800 dark:text-white">Calories</p>
                        <p className="text-base font-bold tabular-nums text-slate-800 dark:text-white">350 kcal</p>
                      </div>
                      <p className="mt-1.5 text-sm font-normal text-slate-600 dark:!text-white">Equivalent To:</p>
                    </div>
                  </div>
                  <div className="mt-2 w-full text-center">
                    <RiceBowlEquivalents />
                    <p className="mt-2 text-sm text-slate-500 dark:!text-white">1.5 cups of cooked white rice</p>
                  </div>
                </div>

                <div className="py-3">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      <Candy className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                        <p className="text-base font-semibold text-slate-800 dark:text-white">Sugar</p>
                        <p className="text-base font-bold tabular-nums text-slate-800 dark:text-white">5g</p>
                      </div>
                      <p className="mt-1.5 text-sm font-normal text-slate-600 dark:!text-white">Equivalent To:</p>
                    </div>
                  </div>
                  <div className="mt-2 w-full text-center">
                    <div className="mt-0 flex w-full justify-center px-1">
                      <img
                        src={sugarIconSrc}
                        alt=""
                        className="h-[4.5rem] w-auto max-w-full object-contain"
                        width={72}
                        height={72}
                        decoding="async"
                      />
                    </div>
                    <p className="mt-2 text-sm text-slate-500 dark:!text-white">1 teaspoon of sugar</p>
                  </div>
                </div>

                <div className="flex flex-col gap-0 pt-3">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                      <Droplet className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                        <p className="text-base font-semibold text-slate-800 dark:text-white">Fat</p>
                        <p className="text-base font-bold tabular-nums text-slate-800 dark:text-white">14g</p>
                      </div>
                      <p className="mt-1.5 text-sm font-normal text-slate-600 dark:!text-white">Equivalent To:</p>
                    </div>
                  </div>
                  <div className="mt-2 w-full text-center">
                    <div className="mt-0 flex w-full flex-wrap items-end justify-center gap-4 px-1">
                      {[0, 1, 2].map((i) => (
                        <img
                          key={i}
                          src={oilIconSrc}
                          alt=""
                          className="h-14 w-auto object-contain"
                          width={56}
                          height={56}
                          decoding="async"
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-slate-500 dark:!text-white">3 teaspoons of cooking oil</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Health rating — warm accent panel */}
            <section
              aria-labelledby="nutrition-rating-heading"
              className="rounded-xl border border-orange-300/60 bg-orange-500/15 p-3 shadow-sm dark:border-orange-400/65 dark:bg-orange-700/20 dark:shadow-none sm:p-3.5"
            >
              <h4
                id="nutrition-rating-heading"
                className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-amber-900/70 dark:text-white"
              >
                <span className="h-1 w-1 rounded-full bg-amber-500" aria-hidden />
                Health rating
              </h4>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-amber-600 shadow-sm ring-1 ring-amber-200/60">
                  <AlertTriangle className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                    <p className="text-base font-bold text-amber-900 dark:text-white">Moderate</p>
                    {historyScore != null && (
                      <p className={`text-lg font-bold tabular-nums ${ratingScoreColor(historyScore)}`}>{historyScore}</p>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-amber-900/65 dark:text-white/90">
                    Not the worst choice — balance with whole foods.
                  </p>
                </div>
              </div>
            </section>

            {/* Suggestion — teal accent panel */}
            <section
              aria-labelledby="nutrition-suggestion-heading"
              className="rounded-xl border border-teal-300/60 bg-teal-500/15 p-3 shadow-sm dark:border-teal-400/65 dark:bg-teal-700/40 dark:shadow-none sm:p-3.5"
            >
              <h4
                id="nutrition-suggestion-heading"
                className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-teal-800/75 dark:text-white"
              >
                <span className="h-1 w-1 rounded-full bg-teal-500" aria-hidden />
                Suggestion
              </h4>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-teal-700 shadow-sm ring-1 ring-teal-200/60">
                  <Sparkles className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-relaxed text-slate-800 dark:text-white">Consume occasionally</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-4 animate-[fade-up_0.45s_ease-out_165ms_both]">
        <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <FileText className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </span>
            <h2 className="text-base font-bold text-slate-800">Summary from photo</h2>
          </div>
          <ul className="space-y-2.5 text-sm leading-relaxed text-slate-600">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden />
              <span>
                <span className="font-semibold text-slate-800">{foodName}</span> — one serving lists{" "}
                <span className="font-semibold text-slate-800">350 kcal</span>, moderate sugar, and notable fat for a
                single meal.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden />
              <span>
                Carbohydrate-forward with <span className="font-medium text-slate-700">48g total carbs</span> per serving;
                protein is modest at 7g.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden />
              <span>
                Saturated fat is <span className="font-medium text-slate-700">6g</span> — worth balancing the rest of the
                day with vegetables and lean protein.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 animate-[fade-up_0.45s_ease-out_180ms_both]">
        <div className="rounded-2xl border border-teal-300/55 bg-teal-500/15 px-4 py-4 transition-colors hover:bg-teal-500/[0.22] dark:border-teal-500/75 dark:bg-teal-800/65 dark:hover:bg-teal-800/[0.78]">
          <p className="mb-1.5 flex items-center gap-2 text-base font-bold text-slate-800">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <Leaf className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </span>
            Recommendation
          </p>
          <p className="pl-10 text-sm leading-relaxed text-slate-600">
            Try pairing this meal with a side salad or steamed vegetables to add fiber and vitamins. On your next shop,
            scan a few labels and compare sodium and fiber to build habits that match your goals.
          </p>
        </div>
      </div>
    </div>
  );
};
