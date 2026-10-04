# Life OS Design System

Storybook-driven design system for **Life OS**, a family and child-development product.

## Design principle

> The application UI stays quiet so meaningful life events can feel special.

This first repository pass contains the V3.2 foundations and the first core components.

## Run

```bash
pnpm install
pnpm storybook
```

Validate:

```bash
pnpm check
```

## Product semantics protected here

- Ordinary responsibilities do not imply money.
- Paid work belongs to Jobs.
- Values and faith do not produce XP or money.
- Missing data is not failure.
- Missed responsibilities are neutral/muted, not destructive.
- No sibling leaderboard or morality score.
- Recovery is recognized without reward currency.
- Graduation is a major milestone because active tracking is no longer needed.
- Give → Save → Spend is the canonical money order.
- Arabic/RTL and reduced-motion behavior are first-class requirements.

## Component architecture

Life OS uses a pragmatic Atomic Design hierarchy: **Foundations → Atoms → Molecules → Organisms → Domain Patterns → Screens**. See [`docs/ATOMIC_DESIGN.md`](docs/ATOMIC_DESIGN.md).

