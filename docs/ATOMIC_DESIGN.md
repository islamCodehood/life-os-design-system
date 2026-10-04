# Life OS Atomic Design Architecture

Life OS uses a pragmatic extension of Atomic Design:

1. **Foundations** — tokens, typography, motion, accessibility and bidi/RTL rules.
2. **Atoms** — Button, IconButton, Checkbox, Chip, Avatar and primitive form controls.
3. **Molecules** — Card, ProgressBar, field compositions and small grouped controls.
4. **Organisms** — TaskCard, AttentionCard, GoalCard, MoneyBucket and navigation groups.
5. **Domain Patterns** — ResponsibilityCard, JobCard, MomentCard, GraduationMilestone, MoneyAllocation and WorldRegion.
6. **Compound Patterns** — reusable Life OS workflow/composition patterns such as TodayResponsibilityGroup, ParentAttentionFeed, JobWorkflow, WalletOverview, StoryTimeline, GraduationEvidencePanel, WorldOverview and WeeklyReviewFlow.
7. **Screens** — product views assembled primarily from compound/domain patterns rather than one-off UI.

## Why this adaptation

Classic Atomic Design is useful for compositional discipline, but Life OS also has domain semantics that must not disappear inside generic UI categories. Domain Patterns preserve one primary product meaning. Compound Patterns then assemble those meanings into reusable workflows before Screens compose the final experience.

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
Compound Patterns
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

## Compound-pattern rules

- Compound patterns compose lower layers; they do not introduce new business truth.
- `TodayResponsibilityGroup` renders explicit status and never treats missing data as missed.
- `ParentAttentionFeed` is a decision queue, not an alarm feed.
- `JobWorkflow` receives timeline/history from the domain rather than inferring transitions.
- `WalletOverview` displays ledger-derived values without mutating balances.
- `StoryTimeline` is narrative, not a score feed.
- `GraduationEvidencePanel` keeps evidence transparent and parent-controlled.
- `WorldOverview` stays downstream of semantic world state.
- `WeeklyReviewFlow` is a controlled family conversation; skipping is neutral.

## Current physical structure

The existing core components remain under `src/components` to preserve the public API. Domain patterns live under `src/patterns`, and compound patterns under `src/patterns/compound`.

A later non-breaking refactor may physically move core files into `atoms/`, `molecules/`, and `organisms/` while maintaining compatibility exports. The taxonomy is enforced conceptually now; avoiding an unnecessary breaking refactor keeps work focused on product value.
