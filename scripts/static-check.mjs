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
const runtimeVars = new Set(['lo-nav-count', 'lo-progress-value']);
const undefinedVars = [...used].filter((x) => !defined.has(x) && !runtimeVars.has(x) && !x.startsWith('lo-shadow-'));

const requiredComponents = [
  'Button', 'Icon', 'IconButton', 'TextField', 'TextArea', 'SelectField', 'Toggle', 'Checkbox', 'Chip',
  'BottomNavigation', 'SideNavigation', 'Card', 'TaskCard', 'AttentionCard', 'GoalCard', 'ProgressBar', 'MoneyBucket', 'Avatar',
];
const missingComponents = requiredComponents.filter((name) => !fs.existsSync(path.join(src, 'components', `${name}.tsx`)));

const requiredPatterns = [
  'ResponsibilityCard', 'JobCard', 'MomentCard', 'GraduationMilestone', 'MoneyAllocation', 'WorldRegion',
];
const missingPatterns = requiredPatterns.filter((name) => !fs.existsSync(path.join(src, 'patterns', `${name}.tsx`)));

const requiredCompoundPatterns = [
  'TodayResponsibilityGroup', 'ParentAttentionFeed', 'JobWorkflow', 'WalletOverview',
  'StoryTimeline', 'GraduationEvidencePanel', 'WorldOverview', 'WeeklyReviewFlow',
];
const missingCompoundPatterns = requiredCompoundPatterns.filter((name) => !fs.existsSync(path.join(src, 'patterns', 'compound', `${name}.tsx`)));

const requiredStories = [
  'src/screens/CoreScreens.stories.tsx',
  'src/states/InteractionStateMatrix.stories.tsx',
  'src/components/Icon.stories.tsx',
];
const missingStories = requiredStories.filter((file) => !fs.existsSync(path.join(root, file)));

const forbidden = [
  ['legacy los- prefix', /los-/],
  ['undefined danger alias', /--lo-danger-fg/],
  ['generic kindness level', /kindness\s+level/i],
  ['sibling leaderboard', /sibling\s+leaderboard/i],
];
const violations = forbidden.flatMap(([label, regex]) => regex.test(source) ? [label] : []);

if (undefinedVars.length || missingComponents.length || missingPatterns.length || missingCompoundPatterns.length || missingStories.length || violations.length) {
  if (undefinedVars.length) console.error('Undefined CSS variables:', undefinedVars);
  if (missingComponents.length) console.error('Missing components:', missingComponents);
  if (missingPatterns.length) console.error('Missing domain patterns:', missingPatterns);
  if (missingCompoundPatterns.length) console.error('Missing compound patterns:', missingCompoundPatterns);
  if (missingStories.length) console.error('Missing required stories:', missingStories);
  if (violations.length) console.error('Forbidden patterns:', violations);
  process.exit(1);
}

console.log(`Static design-system checks passed (${files.length} source files, ${requiredComponents.length} core components, ${requiredPatterns.length} domain patterns, ${requiredCompoundPatterns.length} compound patterns).`);
