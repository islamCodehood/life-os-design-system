import type { ResolvedWorldRegion } from '../../../domain/stage';
import type { WorldThemePalette } from '../../types';

export function IslandEffectsLayer({
  palette,
  regions,
}: {
  palette: WorldThemePalette;
  regions: ResolvedWorldRegion[];
}) {
  return (
    <g className="lo-island-layer lo-island-layer--effects" aria-hidden="true">
      {regions.map((region) => {
        if (region.state.status !== 'complete') return null;
        return (
          <g key={`${region.id}-effect`} transform={`translate(${region.manifest.x} ${region.manifest.y})`}>
            <circle className="lo-island-pulse" cx="0" cy="5" r="78" fill="none" stroke={palette.gold} strokeWidth="4" opacity=".5" />
          </g>
        );
      })}
    </g>
  );
}
