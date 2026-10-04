# Design System → Life OS Application Handoff

## Rule for implementation agents

Storybook is the visual contract. System Design / Architecture / Implementation Specification are the behavioral contract.

When these disagree:

1. frozen System Design wins on behavior
2. Implementation Specification wins on architecture / data flow
3. Storybook wins on approved visual composition and UI states

Do not infer new business rules from a screenshot.

## Application consumption

Example imports:

    import {
      Button,
      ChildAvatar,
      ResponsibilityCard,
      JobCard,
      MoneyAllocation,
      ChildScreenTemplate,
      IslandRenderer,
    } from '@life-os/design-system';
    import '@life-os/design-system/styles.css';

The app supplies data, commands and semantic state. The design system supplies presentation.

## What application code must not duplicate

- component CSS
- money bucket ordering
- responsibility visual states
- graduation presentation
- job visual state language
- Island theme art
- region stage artwork
- motion sequences
- child/parent screen shell behavior
- RTL presentation rules

## What application code must own

- authorization
- family ownership checks
- commands and idempotency
- offline outbox
- canonical server state
- job state transitions
- money ledger
- activity opportunity resolution
- XP ledger
- goal revisions
- graduation readiness evidence
- autonomy decisions
- semantic WorldSceneState projection

## First implementation vertical slice

The first app slice remains:

Make Bed responsibility.

Use the approved Today screen + ResponsibilityCard + offline completion states. Do not begin by rebuilding the whole screen catalog.
