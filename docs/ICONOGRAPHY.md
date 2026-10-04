# Life OS Iconography

Life OS deliberately separates **functional icons** from **expressive imagery**.

## Functional UI icons

Use **Lucide** through the `Icon` atom for navigation, controls, actions and status affordances.

Default sizes:

| Token | Size | Typical use |
| --- | ---: | --- |
| `sm` | 20px | inline/action affordance |
| `md` | 24px | standard functional icon |
| `lg` | 28px | child navigation / prominent control |
| `xl` | 32px | rare large functional affordance |

Stroke defaults to 2px with Lucide's rounded geometry.

Child-facing navigation should generally use `lg` (28px). Parent navigation generally uses `md` (24px).

## Emojis

Emojis are intentionally retained for **expressive/storytelling contexts** where warmth matters:

- Visual World placeholders and semantic regions
- Story/Memory moments
- Recovery moments
- Milestone/Graduation placeholder art
- playful editorial accents

Do **not** use emoji or arbitrary Unicode glyphs as the primary icon for:

- navigation
- settings/actions
- completion controls
- money buckets
- directional affordances

This keeps Life OS fun without making functional UI visually inconsistent.

## RTL

Directional icons use the `mirrorInRtl` option on `Icon` when their meaning should follow reading direction. Non-directional symbols are not mirrored.

## Accessibility

Decorative icons are hidden from assistive technology. Standalone semantic icons receive a text label. Icon-only interactive controls must always expose an accessible label through their owning control.
