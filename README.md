# Life OS Design System

Storybook-driven design system for Life OS, a family and child-development product.

## Status

V3.3 completion / freeze candidate.

The repository contains the full design-system hierarchy, the Growing Island Visual World, core product screens, edge-state contracts, responsive Storybook viewports and automated visual-regression coverage.

## Design principle

> The application UI stays quiet so meaningful life events can feel special.

## Run

    pnpm install
    pnpm storybook

Validate the library:

    pnpm check

Run visual regression locally after installing Chromium:

    pnpm exec playwright install chromium
    pnpm visual:test

## Product semantics protected here

- Ordinary responsibilities do not imply money.
- Paid work belongs to Jobs.
- Values and faith do not produce XP or money.
- Missing data is not failure.
- Missed responsibilities are neutral/muted, not destructive.
- No sibling leaderboard or morality score.
- Recovery is recognized without reward currency.
- Graduation is a major milestone because active tracking is no longer needed.
- Give → Save → Spend is the canonical money presentation order.
- Arabic/RTL and reduced-motion behavior are first-class requirements.
- Visual World renders semantic truth; it does not calculate it.
- Avatar customization is personalization, never an economy.

## Component architecture

Life OS uses a pragmatic Atomic Design hierarchy:

Foundations → Atoms → Molecules → Organisms → Domain Patterns → Compound Patterns → Templates → Screens

See:

- docs/ATOMIC_DESIGN.md
- docs/SCREEN_INVENTORY_V3.3.md
- docs/DESIGN_SYSTEM_FREEZE_V3.3.md
- docs/IMPLEMENTATION_HANDOFF.md
- docs/VISUAL_WORLD.md
- docs/ICONOGRAPHY.md
