<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>

## Project: NutriSnap — Mobile Health/Nutrition App UI

### Stack
- React + TypeScript, Vite, Tailwind CSS
- No routing library (single-page app, bottom nav uses `useState` for active tab)
- Font: Inter (loaded via @font-face from gstatic CDN in `tailwind.css`)
- Assets hosted at: `https://c.animaapp.com/mnonxa6z2eGB3g/assets/`

### Key Conventions
- All sections live in `src/sections/<SectionName>/index.tsx`; sub-components in `.../components/`
- Tailwind keyframes & animations defined in `tailwind.config.js` under `theme.extend.keyframes/animation`
- Animation delay utilities added as `@layer utilities` in `tailwind.css`
- App shell: `src/App.tsx` — mobile-first `max-w-sm` centered card, `h-screen` flex column, `pb-20` scroll area for bottom nav
- BottomNav is NOT `fixed` (it sits at bottom of flex column); the scroll region uses `overflow-auto pb-20`
- `IntersectionObserver` pattern used in `HealthScore` for scroll-triggered count-up animation
- Scan score color coding: ≥85 green, ≥70 teal, <70 yellow

### Tailwind Animation Classes Available
`animate-fade-up`, `animate-fade-in`, `animate-slide-up`, `animate-scale-in`,
`animate-pulse-ring`, `animate-float`, `animate-count-up`, `animate-bar-fill`, `animate-spin-slow`

</coder>