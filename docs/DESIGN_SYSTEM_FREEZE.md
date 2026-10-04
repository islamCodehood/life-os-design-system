# Life OS Design System — V3.3 Freeze

## Status

V3.3 is the implementation-facing design-system freeze for the first family pilot.

After this freeze, the design system is a **visual contract** for the application repository. Product implementation should consume these foundations/components/patterns/screens rather than inventing new interaction semantics ad hoc.

## Completed layers

```text
Foundations
  ↓
Atoms
  ↓
Molecules
  ↓
Organisms
  ↓
Domain Patterns
  ↓
Compound Patterns
  ↓
Interaction / State Matrix
  ↓
Visual World
  ↓
Product Screens & Flows
  ↓
Responsive Matrix
  ↓
Visual Regression Contract
```

## Frozen anchor experiences

Child:
- Explorer Today
- Builder Today
- Journey / Story
- Money Home
- Allocate Income
- Jobs List / Offer / Submitted
- Goals Home / Create / Details
- Family World
- Weekly Review
- Graduation Celebration
- Profile Switcher

Parent:
- Parent Home
- Child Overview
- Insights
- Graduation Suggestion
- Family World
- Weekly Review
- Onboarding

## State coverage

The Storybook contract includes:
- normal completion
- offline completion
- unresolved data
- recovery
- job awaiting review
- money allocation validation
- low data coverage
- reduced / off motion
- RTL / Arabic
- age-density variants
- responsive Island labels
- mobile/tablet/desktop screen matrices

## Avatar V1

ChildAvatar is intentionally lightweight:
- skin tone
- hair shape
- top color
- optional glasses/cap

It is **not** a reward system. There is no avatar shop, inventory, rarity, XP, unlock economy or purchase path.

## Responsive targets

Reference widths:
- 390px child mobile
- 768px tablet
- 1024px desktop/tablet landscape
- 1440px desktop

Components remain fluid between those references.

## Visual regression

Critical Storybook stories are covered by Playwright screenshot baselines. Motion is forced off and fonts/layout are stabilized before capture.

A change that intentionally modifies a protected screen must update the corresponding baseline as part of the same reviewed PR.

## Change policy after freeze

Allowed without product re-design:
- accessibility fixes
- bug fixes
- responsive corrections
- localization corrections
- token consistency fixes
- new state stories for already-frozen semantics

Requires explicit design review:
- new navigation model
- new reward mechanism
- new scoring concept
- new domain interaction pattern
- new Visual World semantic region
- changes that blur Responsibility / Job / Growth / Values / Faith boundaries
