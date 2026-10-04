# Application Repository Bootstrap Plan

Target repository: `islamCodehood/life-os`

## Current implementation handoff

Design system is public and can be consumed directly from GitHub.

Pinned design-system handoff commit:

`b69e66f589b80faf9968a2ace0e08737bfc2b8f0`

MagicPath project:

https://www.magicpath.ai/files/457438444340269056

## Bootstrap sequence

1. Create the empty `life-os` repository.
2. Copy `docs/APP_AGENTS_TEMPLATE.md` to application root as `AGENTS.md`.
3. Copy `docs/MASTER_IMPLEMENTATION_PROMPT.md` and `docs/EPIC_0_PROMPT.md` into application `docs/implementation/`.
4. Copy/finalize the frozen System Design, System Architecture, and Implementation Specification documents into application `docs/spec/`.
5. Bootstrap Next.js 16.3 security-patched line on Node 24 LTS using pnpm.
6. Add the pinned public GitHub design-system dependency.
7. Implement E0 only.
8. Open the first application PR as `feat/e0-engineering-foundation`.
9. Do not begin E1 until E0 acceptance gates and CI are green.

## Dependency pinning policy

At bootstrap, resolve current approved stable versions, write exact lockfile resolution, and commit `pnpm-lock.yaml`.

Do not commit `latest` ranges for critical runtime dependencies.

The approved baseline currently targets:

- Node.js 24 LTS
- Next.js 16 Active LTS, patched 16.3 line
- React supported by selected Next.js release
- pnpm
- TypeScript strict
- Supabase PostgreSQL
- Drizzle + node-postgres
- Zod
- TanStack Query v5
- Dexie
- React Hook Form
- Vitest
- Playwright

## Initial branch

Use:

`feat/e0-engineering-foundation`

The first PR should contain foundation only, not Make Bed behavior.
