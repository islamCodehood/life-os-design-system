# Life OS Visual World — Growing Island V2

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
Authored SVG Region Assets
   ↓
Scene Layers + Motion Sequences
   ↓
Island Renderer
```

The application supplies semantic stage/status and optional presentation transition intent. The renderer does not calculate independence, completion, money, generosity, graduation readiness, XP, or any other behavioral truth.

## Art direction

The Growing Island is now defined as:

- soft editorial / modern storybook illustration
- slightly elevated 2.5D composition rather than flat diagram or full 3D
- warm natural materials with no hard black outlines
- muted sage, sand, clay, water-blue, lavender and restrained gold
- readable silhouettes at mobile scale
- additive richness: later stages become richer without making early stages feel empty or broken
- calm application chrome around the scene so the world remains the emotional layer
- no loot-box, coin shower, casino or mobile-game visual language

The structural region artwork is authored SVG. Emojis remain small expressive accents only.

## Semantic regions

The Island theme supports:

- Home
- Independence Path
- Learning Library
- Goal Observatory
- Giving Garden
- Money Harbor
- Family Garden

These names belong to the Island theme. Another future theme can map the same semantic regions differently without changing domain behavior.

## Authored assets

Each region has its own SVG component under `themes/island/assets` and owns its visual language:

- Home: warm house, porch/path, tree, fence
- Independence: stepping stones → bridge → rail → lanterns
- Library: reading house → larger library → tower/details
- Goals: observatory and telescope
- Giving: planted garden → arch → seating/bloom
- Money: shore → dock → boat/boathouse → lighthouse
- Family: shared tree → seating → garden arch/gathering space

The assets use the shared theme palette and receive only `detail`, `status` and palette. They do not know why a stage was reached.

## Stage progression

Every region has four visual stages: 0–3.

Stage values are supplied by a read model / semantic world projection. The theme manifest maps each supplied stage to:

- theme-specific label
- scale
- visual detail level
- responsive label placements
- render order

The design system intentionally does **not** define rules such as “10 tasks = stage 2”. Those rules belong upstream.

## Scene layers

Island rendering remains SVG-first and layered:

1. Background — sky, sun, clouds, water
2. Terrain — island land mass, shore, rocks
3. Paths — visual relationships between regions
4. Growth — environmental trees, flowers, richness
5. Structures — authored semantic region assets
6. Effects — milestone/recovery/graduation/stage transitions
7. HTML label layer — scale-independent readable region text
8. Emoji accent layer — small emotional accents

## Responsive label system

Region labels are intentionally **HTML overlays, not SVG text**. This prevents text shrinking when the 1200px scene scales down.

The label system uses the **Island container width**, not the browser viewport. Each theme region defines three independent placements:

- desktop
- tablet
- mobile

Container queries switch between those coordinates. On a narrow Island, the labels move to collision-safe positions around the scene instead of remaining attached to desktop coordinates.

Mobile behavior:

- 13px minimum title size; text is never reduced below the readability floor
- stage subtitles are hidden
- compact labels are used where needed: e.g. “Independence” instead of “Independence Path”
- compact labels can be localized by the semantic read model through `compactLabel`
- labels use a warm high-contrast backing surface
- the Island geometry is not mirrored in RTL; localized labels flow correctly inside their responsive positions

Storybook includes 320px, 390px, 480px and 768px container checks plus an Arabic compact-label example.

## Ambient motion

Ambient motion is intentionally slow and non-goal-seeking:

- clouds drift over ~20–30 seconds
- water lines breathe over ~8 seconds
- foliage sways subtly
- observatory stars twinkle gently
- harbor beacon breathes

Ambient animation never implies that the child should interact with the app.

## Meaningful motion sequences

### Stage transition

The updated region rises gently into its new authored stage while a soft ring dissipates. It communicates “the world changed” without reward explosion.

### Recovery

A soft ring expands, the region settles, and a small sprout unfolds. The semantic message is “you came back,” not “you earned bonus points.”

### Milestone reveal

A restrained warm halo and three small rays reveal around the region. No confetti or currency.

### Graduation bridge

The Independence bridge is the strongest Visual World sequence:

1. bridge deck completes
2. railing appears
3. path light traces the bridge
4. three warm lights illuminate
5. optional 🌉 semantic accent appears

This is a transition out of active tracking, not a level-up.

## Transition contract

`WorldSceneState.transition` is optional and presentation-oriented:

- `stage-change`
- `recovery`
- `milestone`
- `graduation`

It contains a presentation identity, target region and optional stage metadata. The application decides when that semantic transition is appropriate. Changing the transition ID replays the sequence.

## Expressive emoji accents

Emojis remain intentionally useful as small overlays:

- 🌱 recovery
- ✨ milestone
- 🌉 graduation
- 💛 meaningful/kindness moment
- 🌿 family contribution

They are theme mappings, not business state and not functional UI icons.

## Visualization profiles

### Immersive

Full labels, stage labels, environmental richness and semantic accents.

### Balanced

Region labels remain clear; stage subtitles and decorative intensity are reduced.

### Focused

Structural progress remains visible; label/emoji/environmental storytelling is minimized.

Age supplies recommended defaults only. Preference controls actual presentation.

## Accessibility and motion

- The complete island has an accessible scene label.
- Interactive region labels are native HTML buttons.
- Region text stays readable at mobile scale.
- Visual status is not communicated by color alone.
- Reduced Motion and Motion Off suppress ambient and sequence animations while preserving final state.
- System `prefers-reduced-motion` is also respected.
- Emoji accents expose semantic labels.
- Localized full and compact labels may be supplied by the world read model.

## Future asset upgrades

The semantic contracts now allow later enhancements without business-layer changes:

- illustration-team-authored SVG paths replacing individual asset internals
- Rive state machines for avatars or a small number of interactive structures
- dotLottie for isolated celebration sequences
- Forest / Space / Castle themes

The semantic `WorldSceneState`, theme manifest and region asset boundary should remain stable.
