# Life OS Atomic Design Architecture

Life OS uses a pragmatic extension of Atomic Design:

1. **Foundations** — tokens, typography, motion, accessibility and bidi/RTL rules.
2. **Atoms** — Button, IconButton, Checkbox, Chip, Avatar and primitive form controls.
3. **Molecules** — Card, ProgressBar, field compositions and small grouped controls.
4. **Organisms** — TaskCard, AttentionCard, GoalCard, MoneyBucket and navigation groups.
5. **Domain Patterns** — ResponsibilityCard, JobCard, MomentCard, GraduationMilestone, MoneyAllocation and WorldRegion.
6. **Screens** — product views assembled from patterns and organisms.

## Why this adaptation

Classic Atomic Design is useful for compositional discipline, but Life OS also has domain semantics that must not disappear inside generic UI categories. Domain Patterns are intentionally explicit: they compose lower layers while preserve the meaning of responsibilities, jobs, money, moments, graduation and the Visual World.

## Dependency rule

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
Screens
```

Lower layers never import from higher layers.

## Domain-pattern rules

- `ResponsibilityCard` has no money or XP props. Paid work belongs to the Job domain.
- `JobCard` displays agreed work/payment state but never credits money itself.
- `MomentCard` never exposes score, XP or money props.
- `GraduationMilestone` presents evidence/celebration; it never decides eligibility or changes autonomy.
- `MoneyAllocation` uses integer minor units, keeps Give → Save → Spend order, and emits UI intent only.
- `WorldRegion` renders semantic state supplied by the application; it does not derive progress from business data.
- All patterns must work in Arabic/RTL and with reduced motion.
- A pattern may have many visual effects, but one primary domain meaning.

## Current physical structure

The existing core components remain under `src/components` to preserve the public API during this iteration. New domain patterns live under `src/patterns`.

A later non-breaking refactor may physically move core files into `atoms/`, `molecules/`, and `organisms/` while maintaining compatibility exports. The taxonomy is enforced conceptually now; avoiding an unnecessary breaking refactor keeps this iteration focused on the new domain layer.
