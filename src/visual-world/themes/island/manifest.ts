import type { WorldThemeManifest } from '../types';

const stages = (labels: [string, string, string, string]) => [
  { stage: 0, label: labels[0], scale: 0.78, detail: 0 as const },
  { stage: 1, label: labels[1], scale: 0.9, detail: 1 as const },
  { stage: 2, label: labels[2], scale: 1, detail: 2 as const },
  { stage: 3, label: labels[3], scale: 1.08, detail: 3 as const },
];

export const islandThemeManifest: WorldThemeManifest = {
  id: 'island',
  name: 'Growing Island',
  viewBox: { width: 1200, height: 760 },
  palette: {
    sky: '#DCECF0',
    water: '#8FC0C1',
    waterDeep: '#6FA7AF',
    grass: '#9EB68A',
    grassDark: '#6F8765',
    sand: '#E7D3A7',
    stone: '#B9AF9A',
    wood: '#9B7154',
    clay: '#BB765D',
    cream: '#F4EEDC',
    leaf: '#78936C',
    flower: '#C9857B',
    lavender: '#A291B8',
    gold: '#D4B365',
  },
  regions: {
    home: {
      id: 'home',
      label: 'Home',
      x: 350,
      y: 330,
      stages: stages(['Foundation', 'Cozy Home', 'Growing Home', 'Strong Home']),
    },
    independence: {
      id: 'independence',
      label: 'Independence Path',
      x: 610,
      y: 430,
      stages: stages(['First Step', 'Path Begins', 'Bridge Growing', 'Bridge Complete']),
    },
    library: {
      id: 'library',
      label: 'Learning Library',
      x: 305,
      y: 515,
      stages: stages(['Reading Nook', 'Small Library', 'Learning House', 'Grand Library']),
    },
    goals: {
      id: 'goals',
      label: 'Goal Observatory',
      x: 775,
      y: 245,
      stages: stages(['Lookout', 'Small Scope', 'Observatory', 'Star Observatory']),
    },
    giving: {
      id: 'giving',
      label: 'Giving Garden',
      x: 825,
      y: 500,
      stages: stages(['Seed Bed', 'Young Garden', 'Giving Garden', 'Blooming Garden']),
    },
    money: {
      id: 'money',
      label: 'Money Harbor',
      x: 980,
      y: 395,
      stages: stages(['Quiet Shore', 'Small Dock', 'Harbor', 'Harbor Village']),
    },
    family: {
      id: 'family',
      label: 'Family Garden',
      x: 535,
      y: 205,
      stages: stages(['Shared Ground', 'Young Tree', 'Family Garden', 'Gathering Garden']),
    },
  },
  accents: {
    recovery: { emoji: '🌱', label: 'Recovery moment' },
    milestone: { emoji: '✨', label: 'Milestone' },
    graduation: { emoji: '🌉', label: 'Graduation' },
    kindness: { emoji: '💛', label: 'Meaningful moment' },
    'family-contribution': { emoji: '🌿', label: 'Family contribution' },
  },
};
