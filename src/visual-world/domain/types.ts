export type VisualWorldThemeId = 'island';

export type VisualizationProfile = 'immersive' | 'balanced' | 'focused';

export type WorldRegionId =
  | 'home'
  | 'independence'
  | 'library'
  | 'goals'
  | 'giving'
  | 'money'
  | 'family';

export type WorldRegionStatus = 'locked' | 'available' | 'growing' | 'complete';

export interface WorldRegionState {
  id: WorldRegionId;
  /**
   * Semantic stage supplied by the application/read model.
   * The renderer maps it to theme visuals; it never calculates this value.
   */
  stage: number;
  status: WorldRegionStatus;
  progress?: number;
  label?: string;
}

export type WorldAccentType =
  | 'recovery'
  | 'milestone'
  | 'graduation'
  | 'kindness'
  | 'family-contribution';

export interface WorldAccent {
  id: string;
  type: WorldAccentType;
  regionId?: WorldRegionId;
  label?: string;
}

export interface WorldSceneState {
  themeId: VisualWorldThemeId;
  profile: VisualizationProfile;
  title?: string;
  regions: Partial<Record<WorldRegionId, WorldRegionState>>;
  accents?: WorldAccent[];
}
