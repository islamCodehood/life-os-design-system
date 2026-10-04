import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const src = path.join(root, 'src');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const p = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(p) : [p];
});

const files = walk(src).filter((p) => /\.(css|ts|tsx)$/.test(p));
const source = files.map((p) => fs.readFileSync(p, 'utf8')).join('\n');
const tokenCss = read('src/styles/tokens.css');
const defined = new Set([...tokenCss.matchAll(/--(lo-[\w-]+)\s*:/g)].map((m) => m[1]));
const used = new Set([...source.matchAll(/var\(--(lo-[\w-]+)/g)].map((m) => m[1]));
const runtimeVars = new Set([
  'lo-nav-count',
  'lo-progress-value',
  'lo-world-accent-x',
  'lo-world-accent-y',
  'lo-world-label-x-desktop',
  'lo-world-label-y-desktop',
  'lo-world-label-x-tablet',
  'lo-world-label-y-tablet',
  'lo-world-label-x-mobile',
  'lo-world-label-y-mobile',
]);
const undefinedVars = [...used].filter((x) =>
  !defined.has(x) &&
  !runtimeVars.has(x) &&
  !x.startsWith('lo-shadow-') &&
  !x.startsWith('lo-avatar-')
);

const requiredComponents = [
  'Button', 'Icon', 'IconButton', 'TextField', 'TextArea', 'SelectField', 'Toggle', 'Checkbox', 'Chip',
  'BottomNavigation', 'SideNavigation', 'Card', 'TaskCard', 'AttentionCard', 'GoalCard', 'ProgressBar',
  'MoneyBucket', 'Avatar', 'ChildAvatar', 'EmptyState',
];
const missingComponents = requiredComponents.filter((name) =>
  !fs.existsSync(path.join(src, 'components', `${name}.tsx`))
);

const requiredLayouts = [
  'ChildScreenTemplate',
  'ParentScreenTemplate',
  'FlowScreenTemplate',
];
const missingLayouts = requiredLayouts.filter((name) =>
  !fs.existsSync(path.join(src, 'layouts', `${name}.tsx`))
);

const requiredPatterns = [
  'ResponsibilityCard', 'JobCard', 'MomentCard', 'GraduationMilestone', 'MoneyAllocation', 'WorldRegion',
];
const missingPatterns = requiredPatterns.filter((name) =>
  !fs.existsSync(path.join(src, 'patterns', `${name}.tsx`))
);

const requiredCompoundPatterns = [
  'TodayResponsibilityGroup', 'ParentAttentionFeed', 'JobWorkflow', 'WalletOverview',
  'StoryTimeline', 'GraduationEvidencePanel', 'WorldOverview', 'WeeklyReviewFlow',
];
const missingCompoundPatterns = requiredCompoundPatterns.filter((name) =>
  !fs.existsSync(path.join(src, 'patterns', 'compound', `${name}.tsx`))
);

const requiredStories = [
  'src/screens/CoreScreens.stories.tsx',
  'src/screens/MoneyScreens.stories.tsx',
  'src/screens/JobScreens.stories.tsx',
  'src/screens/GoalScreens.stories.tsx',
  'src/screens/FamilyStoryReviewScreens.stories.tsx',
  'src/screens/ParentScreens.stories.tsx',
  'src/screens/OnboardingScreens.stories.tsx',
  'src/contracts/ResponsiveScreens.stories.tsx',
  'src/states/InteractionStateMatrix.stories.tsx',
  'src/components/Icon.stories.tsx',
  'src/components/ChildAvatar.stories.tsx',
  'src/visual-world/themes/island/IslandRenderer.stories.tsx',
  'src/visual-world/themes/island/IslandArtDirection.stories.tsx',
  'src/visual-world/themes/island/IslandMotion.stories.tsx',
];
const missingStories = requiredStories.filter((file) => !fs.existsSync(path.join(root, file)));

const requiredDocs = [
  'docs/ATOMIC_DESIGN.md',
  'docs/DESIGN_SYSTEM_FREEZE_V3.3.md',
  'docs/SCREEN_INVENTORY_V3.3.md',
  'docs/IMPLEMENTATION_HANDOFF.md',
  'docs/VISUAL_WORLD.md',
  'docs/ICONOGRAPHY.md',
];
const missingDocs = requiredDocs.filter((file) => !fs.existsSync(path.join(root, file)));

const requiredVisualRegression = [
  'playwright.visual.config.ts',
  'tests/visual/design-system.spec.ts',
  '.github/workflows/visual-regression.yml',
];
const missingVisualRegression = requiredVisualRegression.filter((file) =>
  !fs.existsSync(path.join(root, file))
);

const requiredVisualWorld = [
  'src/visual-world/domain/types.ts',
  'src/visual-world/domain/stage.ts',
  'src/visual-world/themes/types.ts',
  'src/visual-world/themes/island/manifest.ts',
  'src/visual-world/themes/island/IslandRenderer.tsx',
  'src/visual-world/themes/island/layers/IslandBackgroundLayer.tsx',
  'src/visual-world/themes/island/layers/IslandTerrainLayer.tsx',
  'src/visual-world/themes/island/layers/IslandPathLayer.tsx',
  'src/visual-world/themes/island/layers/IslandStructuresLayer.tsx',
  'src/visual-world/themes/island/layers/IslandGrowthLayer.tsx',
  'src/visual-world/themes/island/layers/IslandEffectsLayer.tsx',
  'src/visual-world/themes/island/assets/HomeAsset.tsx',
  'src/visual-world/themes/island/assets/IndependenceAsset.tsx',
  'src/visual-world/themes/island/assets/LibraryAsset.tsx',
  'src/visual-world/themes/island/assets/GoalsAsset.tsx',
  'src/visual-world/themes/island/assets/GivingAsset.tsx',
  'src/visual-world/themes/island/assets/MoneyAsset.tsx',
  'src/visual-world/themes/island/assets/FamilyAsset.tsx',
  'src/visual-world/themes/island/assets/IslandRegionAsset.tsx',
];
const missingVisualWorld = requiredVisualWorld.filter((file) => !fs.existsSync(path.join(root, file)));

const visualWorldSource = requiredVisualWorld
  .filter((file) => fs.existsSync(path.join(root, file)))
  .map((file) => read(file))
  .join('\n');

const visualWorldRuleLeaks = [
  ['XP calculation', /\bxp\b\s*[+\-*/=]/i],
  ['money balance calculation', /walletBalance|moneyBalance/i],
  ['graduation eligibility', /graduationEligible|isEligibleForGraduation/i],
  ['independence scoring', /independenceRate|completionRate/i],
].flatMap(([label, regex]) => regex.test(visualWorldSource) ? [label] : []);

const labelCss = read('src/styles/visual-world.css');
const manifestSource = read('src/visual-world/themes/island/manifest.ts');
const labelMinimumMissing = !/\.lo-island-label__title[\s\S]*font-size:\s*clamp\(13px/.test(labelCss);
const containerLabelsMissing =
  !/container-name:\s*island-scene/.test(labelCss) ||
  !/@container island-scene \(max-width:\s*480px\)/.test(labelCss);
const responsivePlacementMissing =
  !/labelPlacement/.test(manifestSource) ||
  !/desktop:/.test(manifestSource) ||
  !/tablet:/.test(manifestSource) ||
  !/mobile:/.test(manifestSource);
const compactLabelsMissing =
  !/compactLabel/.test(manifestSource) ||
  !/compactLabel/.test(read('src/visual-world/domain/types.ts'));

const preview = read('.storybook/preview.tsx');
const viewportContractsMissing = ['390px', '768px', '1024px', '1440px']
  .filter((size) => !preview.includes(size));

const forbidden = [
  ['legacy los- prefix', /los-/],
  ['undefined danger alias', /--lo-danger-fg/],
  ['generic kindness level', /kindness\s+level/i],
  ['sibling leaderboard', /sibling\s+leaderboard/i],
  ['avatar shop in source', /avatar\s+shop/i],
  ['avatar currency in source', /avatar\s+currency/i],
];
const violations = forbidden.flatMap(([label, regex]) => regex.test(source) ? [label] : []);

if (
  undefinedVars.length ||
  missingComponents.length ||
  missingLayouts.length ||
  missingPatterns.length ||
  missingCompoundPatterns.length ||
  missingStories.length ||
  missingDocs.length ||
  missingVisualRegression.length ||
  missingVisualWorld.length ||
  visualWorldRuleLeaks.length ||
  labelMinimumMissing ||
  containerLabelsMissing ||
  responsivePlacementMissing ||
  compactLabelsMissing ||
  viewportContractsMissing.length ||
  violations.length
) {
  if (undefinedVars.length) console.error('Undefined CSS variables:', undefinedVars);
  if (missingComponents.length) console.error('Missing components:', missingComponents);
  if (missingLayouts.length) console.error('Missing templates:', missingLayouts);
  if (missingPatterns.length) console.error('Missing domain patterns:', missingPatterns);
  if (missingCompoundPatterns.length) console.error('Missing compound patterns:', missingCompoundPatterns);
  if (missingStories.length) console.error('Missing required stories:', missingStories);
  if (missingDocs.length) console.error('Missing freeze docs:', missingDocs);
  if (missingVisualRegression.length) console.error('Missing visual regression files:', missingVisualRegression);
  if (missingVisualWorld.length) console.error('Missing Visual World files:', missingVisualWorld);
  if (visualWorldRuleLeaks.length) console.error('Visual World contains domain-rule leakage:', visualWorldRuleLeaks);
  if (labelMinimumMissing) console.error('Visual World label title must keep a 13px minimum.');
  if (containerLabelsMissing) console.error('Visual World labels must use Island container queries.');
  if (responsivePlacementMissing) console.error('Island regions must define desktop/tablet/mobile label placements.');
  if (compactLabelsMissing) console.error('Visual World must support compact labels on narrow containers.');
  if (viewportContractsMissing.length) console.error('Missing Storybook viewport contracts:', viewportContractsMissing);
  if (violations.length) console.error('Forbidden patterns:', violations);
  process.exit(1);
}

console.log(
  `Static design-system checks passed (${files.length} source files, ${requiredComponents.length} core components, ${requiredLayouts.length} templates, ${requiredPatterns.length} domain patterns, ${requiredCompoundPatterns.length} compound patterns, V3.3 screen catalog, authored Visual World and visual-regression infrastructure present).`,
);
