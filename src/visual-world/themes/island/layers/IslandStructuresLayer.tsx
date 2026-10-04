import type { WorldTransition } from '../../../domain/types';
import type { ResolvedWorldRegion } from '../../../domain/stage';
import type { WorldThemePalette } from '../../types';
import { IslandRegionAsset } from '../assets/IslandRegionAsset';

export interface IslandStructuresLayerProps {
  palette: WorldThemePalette;
  regions: ResolvedWorldRegion[];
  transition?: WorldTransition;
}

export function IslandStructuresLayer({
  palette,
  regions,
  transition,
}: IslandStructuresLayerProps) {
  return (
    <g className="lo-island-layer lo-island-layer--structures" aria-hidden="true">
      {regions.map((region) => {
        const activeTransition = transition?.regionId === region.id ? transition : undefined;
        const detail = region.state.status === 'locked' ? 0 : region.stage.detail;

        return (
          <g
            key={activeTransition ? `${region.id}-${activeTransition.id}` : region.id}
            className="lo-island-region"
            data-region={region.id}
            data-status={region.state.status}
            data-stage={region.stage.stage}
            data-transition={activeTransition?.type}
            transform={`translate(${region.manifest.x} ${region.manifest.y}) scale(${region.stage.scale})`}
          >
            <g className="lo-island-region__asset">
              <IslandRegionAsset
                regionId={region.id}
                detail={detail}
                status={region.state.status}
                palette={palette}
              />
            </g>
          </g>
        );
      })}
    </g>
  );
}
