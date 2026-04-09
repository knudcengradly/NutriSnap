module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
          "inter": ["Inter", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "fade-up": {
            from: { opacity: "0", transform: "translateY(20px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          "fade-in": {
            from: { opacity: "0" },
            to: { opacity: "1" },
          },
          "slide-up": {
            from: { opacity: "0", transform: "translateY(32px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          "scale-in": {
            from: { opacity: "0", transform: "scale(0.85)" },
            to: { opacity: "1", transform: "scale(1)" },
          },
          "pulse-ring": {
            "0%": { transform: "scale(1)", opacity: "0.6" },
            "100%": { transform: "scale(1.7)", opacity: "0" },
          },
          "float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-6px)" },
          },
          "count-up": {
            from: { opacity: "0", transform: "translateY(8px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          "bar-fill": {
            from: { width: "0%" },
            to: { width: "78%" },
          },
          "spin-slow": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
          "scan-line": {
            "0%":   { top: "8%" },
            "50%":  { top: "88%" },
            "100%": { top: "8%" },
          },
          "tip-content-in": {
            from: { opacity: "0", transform: "translateY(14px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          "tip-content-out": {
            from: { opacity: "1", transform: "translateY(0)" },
            to: { opacity: "0", transform: "translateY(-10px)" },
          },
          "rice-shimmer": {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0.45" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "fade-up": "fade-up 0.5s ease-out both",
          "fade-in": "fade-in 0.4s ease-out both",
          "slide-up": "slide-up 0.6s ease-out both",
          "scale-in": "scale-in 0.4s cubic-bezier(0.34,1.56,0.64,1) both",
          "pulse-ring": "pulse-ring 1.5s ease-out infinite",
          "float": "float 3s ease-in-out infinite",
          "count-up": "count-up 0.5s ease-out both",
          "bar-fill": "bar-fill 1.2s cubic-bezier(0.4,0,0.2,1) both",
          "spin-slow": "spin-slow 8s linear infinite",
          "scan-line": "scan-line 1.1s ease-in-out infinite",
          "tip-content-in": "tip-content-in 0.42s cubic-bezier(0.22, 1, 0.36, 1) both",
          "tip-content-out": "tip-content-out 0.22s ease-in both",
          "rice-shimmer": "rice-shimmer 2.2s ease-in-out infinite",
        },
      },
      container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    },
    plugins: [],
    darkMode: ["class"],
  };