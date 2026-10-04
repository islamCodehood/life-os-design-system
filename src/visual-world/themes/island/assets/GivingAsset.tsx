import type { IslandRegionAssetProps } from './types';

export function GivingAsset({ detail, palette }: IslandRegionAssetProps) {
  return (
    <g className="lo-island-asset lo-island-asset--giving">
      <ellipse cx="0" cy="46" rx="78" ry="29" fill={palette.grassLight} opacity=".85" />
      <path d="M-58 34 Q0 8 58 34" fill="none" stroke={palette.sand} strokeWidth="12" strokeLinecap="round" />
      <g className="lo-island-foliage">
        <circle cx="-23" cy="-2" r={detail >= 2 ? 24 : 17} fill={palette.leafLight} />
        <circle cx="24" cy="-8" r={detail >= 2 ? 27 : 19} fill={palette.leaf} />
        <circle cx="0" cy="-27" r={detail >= 2 ? 31 : 21} fill={palette.leaf} />
      </g>
      <rect x="-4" y="-8" width="8" height="47" rx="4" fill={palette.wood} />

      {detail >= 1 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--1">
          <circle cx="-47" cy="31" r="7" fill={palette.flower} />
          <circle cx="-30" cy="41" r="6" fill={palette.gold} />
          <circle cx="44" cy="33" r="7" fill={palette.lavender} />
        </g>
      )}

      {detail >= 2 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--2">
          <path d="M-66 18 Q-52 -15 -35 -28" fill="none" stroke={palette.wood} strokeWidth="5" strokeLinecap="round" />
          <path d="M66 18 Q52 -15 35 -28" fill="none" stroke={palette.wood} strokeWidth="5" strokeLinecap="round" />
          <path d="M-36 -29 Q0 -55 36 -29" fill="none" stroke={palette.wood} strokeWidth="5" strokeLinecap="round" />
          <circle cx="-62" cy="17" r="5" fill={palette.flower} />
          <circle cx="61" cy="17" r="5" fill={palette.gold} />
        </g>
      )}

      {detail >= 3 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--3">
          <path d="M-54 55 h34 M20 55 h34" stroke={palette.woodDark} strokeWidth="6" strokeLinecap="round" />
          <path d="M-48 50 v15 M48 50 v15" stroke={palette.woodDark} strokeWidth="4" />
          <circle cx="-15" cy="-38" r="5" fill={palette.flower} />
          <circle cx="16" cy="-40" r="5" fill={palette.gold} />
        </g>
      )}
    </g>
  );
}
