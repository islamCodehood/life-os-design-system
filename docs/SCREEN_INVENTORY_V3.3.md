# Life OS UI/UX V3.3 — Screen Inventory

This inventory is the visual contract for application implementation. Screen existence does not imply permanent navigation placement.

## Child core

- Today — Explorer
- Today — Builder
- Journey
- Money Home
- Allocate Income
- Jobs List
- Job Offer / Details
- Job Submitted / Awaiting Review
- Job Needs Revision
- Job Awaiting Credit
- Goals Home
- Goal Creation
- Goal Details / Journey
- Goal Complete
- Goal Target Date Passed
- Goal Revised
- Family World
- Story / Moments
- Graduation Celebration
- Weekly Review
- Profile Switcher

## Parent

- Parent Home
- Child Overview
- Child Insights — sufficient data
- Child Insights — insufficient recent information
- Graduation Suggestion / Evidence
- Family World
- Weekly Review

## Onboarding

1. Family
2. Add child
3. Recommended experience
4. Starter activities
5. Money basics
6. Weekly Review
7. Finish

## Required state contracts

### Responsibility

- pending
- completed
- saved offline
- unresolved / awaiting resolution
- recovery
- graduated monitoring

### Money

- no money yet
- normal wallet
- saving goal
- allocate income
- invalid / over-allocation
- saved offline pending sync

### Jobs

- offered
- accepted / in progress
- submitted / waiting
- needs revision
- approved
- awaiting credit
- credited
- no jobs

### Goals

- empty
- active
- completed
- target date passed — neutral decision state
- revised
- closed / reflected may be represented in Story

### Analytics / insights

- sufficient recent evidence
- insufficient recent information
- unknown is never rendered as 0%
- no global child score

## Responsive contract

The Storybook viewport set is:

- 390 × 844 — mobile
- 768 × 1024 — tablet
- 1024 × 900 — compact desktop
- 1440 × 1000 — wide desktop

The Contracts / Responsive Screens stories are the reference matrix.

## Language and motion

Every shipped screen must remain valid with:

- English LTR
- Arabic RTL
- Full motion
- Reduced motion
- Motion off
- Explorer / Builder / Navigator / Launch / Parent density

Visual World geometry is not mirrored for RTL.
