import type { SemanticWorldRegionState, WorldRegionId } from './types';
import type {
  WorldRegionManifest,
  WorldStageDefinition,
  WorldThemeManifest,
} from '../themes/types';

export interface ResolvedWorldRegion {
  id: WorldRegionId;
  state: SemanticWorldRegionState;
  manifest: WorldRegionManifest;
  stage: WorldStageDefinition;
}

export function resolveStage(
  definition: WorldRegionManifest,
  requestedStage: number,
): WorldStageDefinition {
  const ordered = [...definition.stages].sort((a, b) => a.stage - b.stage);
  const safe = Number.isFinite(requestedStage) ? Math.max(0, requestedStage) : 0;

  return (
    [...ordered].reverse().find((candidate) => candidate.stage <= safe) ??
    ordered[0]
  );
}

export function resolveWorldRegions(
  manifest: WorldThemeManifest,
  regions: Partial<Record<WorldRegionId, SemanticWorldRegionState>>,
): ResolvedWorldRegion[] {
  return (Object.keys(manifest.regions) as WorldRegionId[])
    .map((id) => {
      const state = regions[id];
      if (!state) return null;
      const definition = manifest.regions[id];
      return {
        id,
        state,
        manifest: definition,
        stage: resolveStage(definition, state.stage),
      };
    })
    .filter((region): region is ResolvedWorldRegion => Boolean(region))
    .sort((a, b) => a.manifest.zIndex - b.manifest.zIndex);
}
