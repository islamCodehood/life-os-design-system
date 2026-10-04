# Life OS Atomic Design Architecture

Life OS uses a pragmatic extension of Atomic Design:

1. Foundations — tokens, typography, motion, accessibility and bidi/RTL rules.
2. Atoms — Button, Icon, IconButton, Checkbox, Chip, Avatar, ChildAvatar and primitive form controls.
3. Molecules — Card, ProgressBar, field compositions, EmptyState and small grouped controls.
4. Organisms — TaskCard, AttentionCard, GoalCard, MoneyBucket and navigation groups.
5. Domain Patterns — ResponsibilityCard, JobCard, MomentCard, GraduationMilestone, MoneyAllocation and WorldRegion.
6. Compound Patterns — TodayResponsibilityGroup, ParentAttentionFeed, JobWorkflow, WalletOverview, StoryTimeline, GraduationEvidencePanel, WorldOverview and WeeklyReviewFlow.
7. Templates — ChildScreenTemplate, ParentScreenTemplate and FlowScreenTemplate.
8. Screens — approved product compositions in Storybook.

## Why this adaptation

Classic Atomic Design gives compositional discipline, but Life OS also has domain semantics that must not disappear inside generic UI categories. Domain Patterns preserve one primary product meaning. Compound Patterns assemble those meanings into reusable workflows. Templates provide layout without product truth. Screens then become composition rather than one-off UI.

## Dependency rule

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
    Templates
       ↓
    Screens

Lower layers never import from higher layers.

## Domain-pattern rules

- ResponsibilityCard has no money or XP props.
- JobCard displays agreed work/payment state but never credits money itself.
- MomentCard never exposes score, XP or money props.
- GraduationMilestone presents evidence/celebration; it never decides eligibility.
- MoneyAllocation works in integer minor units and emits presentation intent only.
- WorldRegion renders semantic state supplied by the application.
- All patterns must work in Arabic/RTL and with reduced motion.

## Compound-pattern rules

- Compound patterns do not introduce new business truth.
- ParentAttentionFeed is a decision queue, not an alarm feed.
- JobWorkflow receives domain history rather than inferring transitions.
- WalletOverview displays ledger-derived values without mutating balances.
- StoryTimeline is narrative, not a score feed.
- GraduationEvidencePanel keeps evidence transparent and guardian-controlled.
- WeeklyReviewFlow is a family conversation; skipping is neutral.

## Template rules

Templates own layout and navigation placement only.

They must not:

- fetch data
- authorize actors
- infer domain state
- decide navigation permissions
- determine age/autonomy
- contain business calculations

## Current physical structure

Core components remain under src/components to preserve the public API. Domain patterns live under src/patterns, compound patterns under src/patterns/compound, templates under src/layouts, and approved screen compositions under src/screens.

Physical folders do not need to mimic Atomic Design names if the dependency direction and public API remain clear.
