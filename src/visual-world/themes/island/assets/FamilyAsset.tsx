import type { IslandRegionAssetProps } from './types';

export function FamilyAsset({ detail, palette }: IslandRegionAssetProps) {
  return (
    <g className="lo-island-asset lo-island-asset--family">
      <ellipse cx="0" cy="49" rx="82" ry="31" fill={palette.cream} opacity=".72" />
      <rect x="-6" y="-21" width="12" height="66" rx="6" fill={palette.woodDark} />
      <g className="lo-island-foliage">
        <circle cx="-25" cy="-35" r={detail >= 2 ? 31 : 24} fill={palette.leaf} />
        <circle cx="24" cy="-36" r={detail >= 2 ? 32 : 24} fill={palette.leafLight} />
        <circle cx="0" cy="-57" r={detail >= 2 ? 37 : 28} fill={palette.leaf} />
      </g>

      {detail >= 1 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--1">
          <path d="M-55 37 h31 M24 37 h31" stroke={palette.wood} strokeWidth="7" strokeLinecap="round" />
          <path d="M-49 31 v17 M49 31 v17" stroke={palette.woodDark} strokeWidth="4" />
          <circle cx="-57" cy="56" r="6" fill={palette.flower} />
          <circle cx="57" cy="56" r="6" fill={palette.gold} />
        </g>
      )}

      {detail >= 2 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--2">
          <path d="M-68 12 Q-54 -21 -40 -30 M68 12 Q54 -21 40 -30 M-40 -31 Q0 -72 40 -31" fill="none" stroke={palette.wood} strokeWidth="5" strokeLinecap="round" />
          <path d="M-55 -40 Q0 -64 55 -40" fill="none" stroke={palette.gold} strokeWidth="3" opacity=".7" />
        </g>
      )}

      {detail >= 3 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--3">
          <circle cx="-17" cy="-61" r="5" fill={palette.flower} />
          <circle cx="17" cy="-65" r="5" fill={palette.gold} />
          <circle cx="-37" cy="-42" r="4" fill={palette.lavender} />
          <circle cx="39" cy="-44" r="4" fill={palette.flower} />
          <path d="M-74 65 Q0 84 74 64" fill="none" stroke={palette.sand} strokeWidth="8" strokeLinecap="round" />
        </g>
      )}
    </g>
  );
}
