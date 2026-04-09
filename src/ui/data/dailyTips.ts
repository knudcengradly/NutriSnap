export type DailyTip = {
  title: string;
  body: string;
};

/** Rotating tips aligned with NutriSnap: label scanning, nutrition literacy, and healthy habits. */
export const DAILY_TIPS: DailyTip[] = [
  {
    title: "Start with the serving size",
    body: "When you scan a label, compare the listed serving to what you actually eat—packages often hold two or three servings, which doubles the calories and sugar you see on first glance.",
  },
  {
    title: "Watch % Daily Value for sodium",
    body: "A quick scan can flag high-sodium foods. As a rule of thumb, 5% DV or less per serving is low; 20% DV or more is high—useful for blood pressure and heart health.",
  },
  {
    title: "Spot added sugars under other names",
    body: "Labels list added sugars in grams, but ingredients may say syrups, concentrate, or “-ose.” NutriSnap-style checks help you notice sweeteners even when the front of the package looks “healthy.”",
  },
  {
    title: "Pair scans with your Health view",
    body: "Logging what you eat is easier when you know the numbers from the label. Tie scans to your weekly score and macros so small choices add up over the week.",
  },
  {
    title: "Fiber and whole grains",
    body: "Aim for foods with meaningful fiber per serving (often from whole grains, beans, or vegetables). Fiber supports digestion and helps you stay full between meals.",
  },
  {
    title: "Compare two products with two scans",
    body: "Same aisle, different brand? Scan both labels and compare sugar, protein, and saturated fat per serving—not just calories—to pick the better fit for your goals.",
  },
  {
    title: "Hydration counts toward how you feel",
    body: "Nutrition isn’t only food. Pairing solid meals with enough water supports energy and focus; your daily summary is a good nudge to keep glasses on track.",
  },
  {
    title: "Protein at breakfast, steady energy",
    body: "A breakfast with enough protein (yogurt, eggs, or fortified cereals with good protein per serving) can reduce mid-morning crashes—check the label’s grams per serving when you shop.",
  },
];
