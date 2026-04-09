/** Stylized sample “Nutrition Facts” panel for demo UI (not real product data). */
export const NutritionLabelSample = () => (
  <svg
    viewBox="0 0 280 360"
    className="h-auto w-full max-w-[220px] drop-shadow-md"
    aria-hidden
  >
    <rect width="280" height="360" rx="4" fill="#fff" stroke="#0f172a" strokeWidth="3" />
    <text x="16" y="36" fill="#0f172a" style={{ font: "800 22px system-ui, sans-serif" }}>
      Nutrition Facts
    </text>
    <line x1="16" y1="44" x2="264" y2="44" stroke="#0f172a" strokeWidth="8" />
    <text x="16" y="66" fill="#1e293b" style={{ font: "600 11px system-ui, sans-serif" }}>
      Serving size 1 cup (55g)
    </text>
    <text x="16" y="88" fill="#1e293b" style={{ font: "600 11px system-ui, sans-serif" }}>
      Servings per container 2
    </text>
    <line x1="16" y1="96" x2="264" y2="96" stroke="#0f172a" strokeWidth="2" />
    <text x="16" y="118" fill="#1e293b" style={{ font: "700 11px system-ui, sans-serif" }}>
      Amount per serving
    </text>
    <text x="16" y="138" fill="#0f172a" style={{ font: "800 21px system-ui, sans-serif" }}>
      Calories
    </text>
    <text x="228" y="138" fill="#0f172a" style={{ font: "800 19px system-ui, sans-serif" }}>
      350
    </text>
    <line x1="16" y1="144" x2="264" y2="144" stroke="#0f172a" strokeWidth="4" />
    <text x="200" y="182" fill="#334155" style={{ font: "600 11px system-ui, sans-serif" }}>
      % Daily Value*
    </text>
    <line x1="16" y1="190" x2="264" y2="190" stroke="#cbd5e1" strokeWidth="1" />
    <text x="16" y="210" fill="#0f172a" style={{ font: "600 12px system-ui, sans-serif" }}>
      Total Fat 14g
    </text>
    <text x="220" y="210" fill="#0f172a" style={{ font: "600 12px system-ui, sans-serif" }}>
      18%
    </text>
    <line x1="16" y1="218" x2="264" y2="218" stroke="#e2e8f0" strokeWidth="1" />
    <text x="28" y="236" fill="#475569" style={{ font: "500 11px system-ui, sans-serif" }}>
      Saturated Fat 6g
    </text>
    <text x="220" y="236" fill="#334155" style={{ font: "600 11px system-ui, sans-serif" }}>
      30%
    </text>
    <line x1="16" y1="244" x2="264" y2="244" stroke="#e2e8f0" strokeWidth="1" />
    <text x="16" y="262" fill="#0f172a" style={{ font: "600 12px system-ui, sans-serif" }}>
      Total Carbohydrate 48g
    </text>
    <text x="220" y="262" fill="#0f172a" style={{ font: "600 12px system-ui, sans-serif" }}>
      17%
    </text>
    <line x1="16" y1="270" x2="264" y2="270" stroke="#e2e8f0" strokeWidth="1" />
    <text x="28" y="288" fill="#475569" style={{ font: "500 11px system-ui, sans-serif" }}>
      Sugars 5g
    </text>
    <line x1="16" y1="296" x2="264" y2="296" stroke="#e2e8f0" strokeWidth="1" />
    <text x="16" y="314" fill="#0f172a" style={{ font: "600 12px system-ui, sans-serif" }}>
      Protein 7g
    </text>
    <line x1="16" y1="322" x2="264" y2="322" stroke="#e2e8f0" strokeWidth="1" />
    <text x="16" y="342" fill="#64748b" style={{ font: "500 9px system-ui, sans-serif" }}>
      *Percent Daily Values based on a 2,000 calorie diet.
    </text>
  </svg>
);
