# Life OS Design System V3.2 — Foundations

## Design principle

> The application UI stays quiet so meaningful real-life moments can feel special.

The library is derived from the approved Life OS visual references and constrained by the frozen System Design and Architecture. The reference images define mood and composition; they do not override domain semantics.

## Foundation layers

1. Primitive colors: neutral, sage, sky, clay, gold, rose, lavender.
2. Semantic colors: page/surface/text/border/action/state, Give/Save/Spend, and progress domains.
3. Typography: Inter for English; Noto Sans Arabic for Arabic; 400/500/600 weights.
4. Spacing: 4px base scale from 0 to 80px.
5. Radius: 6, 8, 12, 16, 20, 24 and full.
6. Elevation: border-first UI with only three shadow levels above flat.
7. Motion: 100/180/280/450ms functional durations and 1.2–3s milestone range.
8. Layout references: 390, 768, 1024 and 1440px.
9. Experience density: Explorer, Builder, Parent/Navigator use the same system with different control sizing and information density.
10. Visual World: SVG-first, soft storybook/editorial, slightly isometric / 2.5D, natural daylight.

## Semantic guarantees

- Ordinary responsibilities never imply money.
- Paid work belongs to the Job domain.
- Values and faith do not produce XP or money.
- Missing data is not failure.
- Missed responsibilities use neutral/muted presentation, not moral-danger red.
- Recovery is recognized without bonus XP.
- Graduation is a major milestone because active tracking is no longer needed.
- Family progress never becomes sibling ranking.
- Give → Save → Spend is the canonical money order.
- Visual themes and components never alter business rules.

## Core component layer

The initial Storybook implements Button, IconButton, TextField, TextArea, SelectField, Toggle, Checkbox / Completion control base, Chip, BottomNavigation, SideNavigation, Card, TaskCard, AttentionCard, GoalCard, ProgressBar, MoneyBucket and Avatar.

Domain patterns such as Job Card, Moment Card, Graduation, Money Allocation and World Region belong to the next layer and compose these core components.

## Domain pattern layer

The next layer composes core components into domain-aware presentation patterns: ResponsibilityCard, JobCard, MomentCard, GraduationMilestone, MoneyAllocation and WorldRegion. These patterns preserve Life OS semantics without reimplementing business rules. See `ATOMIC_DESIGN.md`.

