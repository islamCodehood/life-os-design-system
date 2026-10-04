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

export interface WorldLabelPlacement {
  x: number;
  y: number;
}

export interface ResponsiveWorldLabelPlacement {
  desktop: WorldLabelPlacement;
  tablet: WorldLabelPlacement;
  mobile: WorldLabelPlacement;
}

export interface WorldRegionManifest {
  id: WorldRegionId;
  label: string;
  compactLabel?: string;
  x: number;
  y: number;
  zIndex: number;
  /**
   * Label coordinates are intentionally independent from the SVG asset origin.
   * Different placements prevent collisions as the Island container gets narrower.
   */
  labelPlacement: ResponsiveWorldLabelPlacement;
  stages: WorldStageDefinition[];
}

export interface WorldAccentManifest {
  emoji: string;
  label: string;
}

export interface WorldThemePalette {
  sky: string;
  skySoft: string;
  water: string;
  waterDeep: string;
  foam: string;
  grass: string;
  grassLight: string;
  grassDark: string;
  sand: string;
  stone: string;
  stoneLight: string;
  wood: string;
  woodDark: string;
  clay: string;
  cream: string;
  leaf: string;
  leafLight: string;
  flower: string;
  lavender: string;
  gold: string;
  inkSoft: string;
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
