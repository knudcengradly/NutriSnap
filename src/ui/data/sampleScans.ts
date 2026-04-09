export type SampleScan = {
  id: number;
  emoji: string;
  name: string;
  time: string;
  category: string;
  score: number;
};

export const SAMPLE_SCANS: SampleScan[] = [
  { id: 1, emoji: "🍜", name: "Instant Noodles", time: "2h ago", category: "Meal", score: 72 },
  { id: 2, emoji: "🥛", name: "Greek Yogurt", time: "5h ago", category: "Dairy", score: 91 },
  { id: 3, emoji: "🥤", name: "Protein Shake", time: "Yesterday", category: "Beverage", score: 74 },
];
