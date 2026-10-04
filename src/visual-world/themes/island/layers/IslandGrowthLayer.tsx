import type { ResolvedWorldRegion } from '../../../domain/stage';
import type { WorldThemePalette } from '../../types';

export function IslandGrowthLayer({
  palette,
  regions,
}: {
  palette: WorldThemePalette;
  regions: ResolvedWorldRegion[];
}) {
  return (
    <g className="lo-island-layer lo-island-layer--growth" aria-hidden="true">
      {regions.flatMap((region) => {
        if (region.state.status === 'locked' || region.stage.detail < 2) return [];
        const { x, y } = region.manifest;
        return [
          <g key={`${region.id}-growth`} transform={`translate(${x} ${y})`}>
            <circle cx="-74" cy="52" r="5" fill={palette.flower} />
            <circle cx="-62" cy="61" r="4" fill={palette.gold} />
            {region.stage.detail >= 3 && <circle cx="73" cy="48" r="5" fill={palette.lavender} />}
            {region.stage.detail >= 3 && <circle cx="61" cy="61" r="4" fill={palette.flower} />}
          </g>,
        ];
      })}
    </g>
  );
}
