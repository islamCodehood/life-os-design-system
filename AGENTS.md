# Life OS Design System — Agent Rules

1. Components consume semantic tokens, not ad-hoc inline product colors.
2. Use logical CSS properties for bidi-safe layouts.
3. All interactive controls keep visible focus treatment.
4. Do not encode child moral value through color, score, or rank.
5. Do not award money or XP from presentation components.
6. Component APIs describe UI state; they do not reimplement domain business rules.
7. Missing data is not failure.
8. New motion must have a reduced-motion and motion-off equivalent.
9. Give → Save → Spend is the canonical presentation order.
10. Concept images establish visual direction only; frozen System Design wins on behavior.
11. Storybook screens are the V3.3 visual contract. Do not invent alternate application UI without an approved design-system change.
12. Prefer composition of existing atoms → patterns → templates before adding a new component.
13. Visual World receives semantic state; never calculate XP, money, autonomy, graduation readiness, morality, or responsibility truth inside the renderer.
14. Child Avatar is personalization only. Do not add shop, rarity, unlock, inventory, or currency mechanics.
15. Unknown / low coverage analytics must be described as insufficient information, never as zero performance.
16. Any new screen state must include responsive, RTL, focus and reduced-motion review.
17. Visual-regression failures require intentional review; do not update snapshots merely to make CI green.
