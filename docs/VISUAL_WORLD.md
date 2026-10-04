# Life OS Visual World — Island Theme V1

## Principle

The Visual World is a **presentation engine**, not a game economy and not a source of business truth.

```text
Domain Truth
   ↓
Semantic World State
   ↓
Theme Manifest
   ↓
Stage Mapping
   ↓
SVG Scene Layers
   ↓
Island Renderer
```

The application supplies semantic stage/status. The renderer does not calculate independence, completion, money, generosity, graduation readiness, XP, or any other behavioral truth.

## Semantic regions

The Island V1 theme supports:

- Home
- Independence Path
- Learning Library
- Goal Observatory
- Giving Garden
- Money Harbor
- Family Garden

These names belong to the Island theme. Another future theme can map the same semantic regions differently without changing domain behavior.

## Stage progression

Every region has four visual stages: 0–3.

Stage values are supplied by a read model / semantic world projection. The theme manifest maps each supplied stage to:

- theme-specific label
- scale
- visual detail level

The design system intentionally does **not** define rules such as “10 tasks = stage 2”. Those rules belong upstream.

## Scene layers

Island rendering is SVG-first and split into independent layers:

1. Background — sky, water, atmosphere
2. Terrain — island land mass
3. Paths — visual relationships between regions
4. Structures — semantic region representations
5. Growth — flowers and environmental richness unlocked by stage
6. Effects — restrained milestone/complete-state emphasis

Layer separation allows later theming, animation and art replacement without changing semantic contracts.

## Expressive emoji accents

Emojis remain intentionally useful, but only as small expressive accents:

- 🌱 recovery
- ✨ milestone
- 🌉 graduation
- 💛 meaningful/kindness moment
- 🌿 family contribution

They are overlays driven by semantic accent types in the theme manifest. They are not functional navigation icons and they are not structural world artwork.

## Profiles

### Immersive

For Explorer and users who enjoy the world. Full region labels, environmental detail and semantic accents.

### Balanced

For Builder or anyone who wants moderate visualization. Same semantic state with quieter environmental detail.

### Focused

For Navigator/Launch or preference-driven minimal visualization. Structural progress remains visible; decorative growth, labels and emoji accents are reduced or removed.

Age only supplies recommended defaults. Preference controls actual presentation.

## Accessibility

- The complete island has an accessible scene label.
- Interactive regions are keyboard selectable when `onRegionSelect` is supplied.
- Visual status is not communicated by color alone.
- Reduced-motion and motion-off states suppress pulse/arrival animation.
- Emoji accents have semantic labels.
- Region labels may be overridden by the localized read model.

## Future art upgrades

This implementation deliberately uses clean inline SVG geometry as the first real asset system. It can later be upgraded without changing the contract:

- richer authored SVG region assets
- Rive for avatar/region state machines
- dotLottie for isolated milestone clips
- alternate themes such as Forest / Space / Castle

The semantic WorldSceneState and manifest boundary should remain stable.
