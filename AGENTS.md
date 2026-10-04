# Life OS Design System — Agent Rules

This repository is the frozen UI/design-system contract for the Life OS application. Application implementation belongs in a separate `life-os` repository.

## Source-of-truth order

1. Frozen System Design — product/domain behavior.
2. Frozen System Architecture — technical boundaries.
3. Final Implementation Specification V2.0–V2.3 — implementation contract.
4. Storybook V3.3 in this repository — exact production component/state visual contract.
5. MagicPath V3.3 — composition and flow reference only.
6. A narrowly scoped task's explicit acceptance criteria.

If instructions conflict, preserve the higher-precedence source and record the conflict. Never silently invent behavior.

## Design-system rules

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

## Application handoff rules

18. The application must import production UI from `@life-os/design-system`; do not copy component CSS or reimplement Storybook components inside the app.
19. MagicPath is a product-composition reference. Do not copy its local color constants, simplified Island geometry, prototype task rows, or prototype sliders into production.
20. Application domain mutations must remain outside this repository.
21. If application implementation appears to require a design-system change, first prove that composition of the frozen API is insufficient.
22. Do not add app-specific data fetching, Supabase clients, Drizzle schemas, auth logic, Dexie logic, or command handlers to this repository.
23. Use the public design-system repository as a pinned dependency in the application until a package registry release process is intentionally introduced.
24. Application agents should begin with `docs/APP_AGENTS_TEMPLATE.md`, `docs/MASTER_IMPLEMENTATION_PROMPT.md`, and `docs/EPIC_0_PROMPT.md`.
25. After V3.3 freeze, acceptable design-system changes are bug fixes, accessibility corrections, localization/RTL corrections, responsive corrections, or explicitly approved product changes.
