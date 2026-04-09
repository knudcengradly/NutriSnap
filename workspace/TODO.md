<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in a "<todo id="todo-id">" and "</todo>" tag pair.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- The id must be a short stable identifier for the task and must not change when you rewrite the title or description.
- You should proactively review this file after each response, even if the user did not explicitly ask, maintain it if there were meaningful changes (new requirement, task completion, reprioritization, or stale task cleanup).
- Think BIG: suggest ambitious features, UX improvements, technical enhancements, and creative possibilities.
- Balance quick wins with transformative ideas — include both incremental improvements and bold new features.
- Aim for 3-5 high-impact tasks that would genuinely excite the user.
- Tasks should be specific enough to act on, but visionary enough to inspire.
- Remove or rewrite stale tasks when completed, obsolete, or clearly lower-priority than current work.
- Re-rank by impact and user value, not just urgency.
- Draw inspiration from the project's existing features — what would make them 10x better?
- Don't be afraid to suggest features the user hasn't explicitly mentioned.
</instructions>


<todo id="health-screen">
Build dedicated Health tab screen
The Health nav item currently re-shows the home view — give it its own screen with macro breakdown charts, weekly trends, and water intake tracker.
</todo>

<todo id="onboarding">
Add onboarding flow
3-step welcome screens (goal setting, dietary preferences, notification opt-in) shown on first launch using localStorage flag.
</todo>

<todo id="health-score-chart">
Weekly health score chart
Replace the static score number with a sparkline or mini bar chart showing score trend across the last 7 days.
</todo>

<todo id="dark-mode">
Dark mode support
Wire up a dark mode toggle (sun/moon icon in header), add `dark:` tailwind variants throughout, persist preference to localStorage.
</todo>

<todo id="haptics-a11y">
Accessibility & touch feedback
Add `aria-label` to all icon-only buttons, ensure 44px min touch targets on mobile, add keyboard navigation for bottom nav tabs.
</todo>