import type {
  VisualWorldThemeId,
  WorldAccentType,
  WorldRegionId,
} from '../domain/types';

export interface WorldStageDefinition {
  stage: number;
  label: string;
  scale: number;
  detail: 0 | 1 | 2 | 3;
}

export interface WorldRegionManifest {
  id: WorldRegionId;
  label: string;
  x: number;
  y: number;
  stages: WorldStageDefinition[];
}

export interface WorldAccentManifest {
  emoji: string;
  label: string;
}

export interface WorldThemePalette {
  sky: string;
  water: string;
  waterDeep: string;
  grass: string;
  grassDark: string;
  sand: string;
  stone: string;
  wood: string;
  clay: string;
  cream: string;
  leaf: string;
  flower: string;
  lavender: string;
  gold: string;
}

export interface WorldThemeManifest {
  id: VisualWorldThemeId;
  name: string;
  viewBox: {
    width: number;
    height: number;
  };
  palette: WorldThemePalette;
  regions: Record<WorldRegionId, WorldRegionManifest>;
  accents: Record<WorldAccentType, WorldAccentManifest>;
}
