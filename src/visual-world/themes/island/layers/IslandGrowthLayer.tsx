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
      <g className="lo-island-environment-trees">
        <g transform="translate(235 356)">
          <rect x="-4" y="4" width="8" height="27" rx="4" fill={palette.wood} />
          <circle className="lo-island-foliage" cx="0" cy="-7" r="19" fill={palette.leaf} />
          <circle cx="-12" cy="-1" r="12" fill={palette.leafLight} />
        </g>
        <g transform="translate(914 287)">
          <rect x="-4" y="4" width="8" height="26" rx="4" fill={palette.wood} />
          <circle className="lo-island-foliage" cx="0" cy="-8" r="20" fill={palette.leaf} />
          <circle cx="13" cy="-2" r="11" fill={palette.leafLight} />
        </g>
        <g transform="translate(715 610)">
          <rect x="-4" y="4" width="8" height="25" rx="4" fill={palette.wood} />
          <circle className="lo-island-foliage" cx="0" cy="-8" r="18" fill={palette.leafLight} />
        </g>
      </g>

      {regions.flatMap((region) => {
        if (region.state.status === 'locked' || region.stage.detail < 2) return [];
        const { x, y } = region.manifest;
        return [
          <g key={`${region.id}-growth`} className="lo-island-region-growth" transform={`translate(${x} ${y})`}>
            <circle cx="-78" cy="57" r="5" fill={palette.flower} />
            <circle cx="-64" cy="65" r="4" fill={palette.gold} />
            <path d="M-78 55 q-3 -12 -11 -16 M-76 54 q6 -10 13 -12" fill="none" stroke={palette.leaf} strokeWidth="3" />
            {region.stage.detail >= 3 && <circle cx="78" cy="53" r="5" fill={palette.lavender} />}
            {region.stage.detail >= 3 && <circle cx="64" cy="66" r="4" fill={palette.flower} />}
          </g>,
        ];
      })}
    </g>
  );
}
