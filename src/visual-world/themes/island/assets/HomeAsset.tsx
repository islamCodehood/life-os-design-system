import type { IslandRegionAssetProps } from './types';

export function HomeAsset({ detail, palette }: IslandRegionAssetProps) {
  return (
    <g className="lo-island-asset lo-island-asset--home">
      <ellipse cx="0" cy="57" rx="74" ry="24" fill={palette.grassDark} opacity=".16" />
      <path d="M-64 18 L-34 -13 L38 -13 L67 14 L51 50 L-42 52 Z" fill={palette.stoneLight} opacity=".65" />
      <path d="M-49 7 L-14 -30 H39 L57 7 V53 H-49 Z" fill={palette.cream} />
      <path d="M-58 7 L-8 -48 L48 -11 L57 7 H-49 Z" fill={palette.clay} />
      <path d="M-8 -48 L48 -11 L41 -4 L-8 -37 L-49 8 L-58 7 Z" fill={palette.woodDark} opacity=".26" />
      <rect x="-13" y="21" width="26" height="32" rx="5" fill={palette.wood} />
      <circle cx="7" cy="37" r="2" fill={palette.gold} />
      <rect x="-38" y="14" width="18" height="18" rx="4" fill={palette.skySoft} stroke={palette.stoneLight} strokeWidth="3" />
      <rect x="22" y="14" width="18" height="18" rx="4" fill={palette.skySoft} stroke={palette.stoneLight} strokeWidth="3" />

      {detail >= 1 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--1">
          <path d="M-44 55 Q0 70 44 55" fill="none" stroke={palette.sand} strokeWidth="10" strokeLinecap="round" />
          <rect x="22" y="-39" width="11" height="24" rx="3" fill={palette.stone} />
          <path d="M-72 34 v25 M-58 36 v25 M-74 48 h20" stroke={palette.wood} strokeWidth="4" strokeLinecap="round" />
        </g>
      )}

      {detail >= 2 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--2">
          <rect x="56" y="5" width="8" height="42" rx="4" fill={palette.wood} />
          <circle className="lo-island-foliage" cx="61" cy="-8" r="27" fill={palette.leaf} />
          <circle cx="45" cy="-2" r="16" fill={palette.leafLight} />
          <circle cx="77" cy="2" r="15" fill={palette.leafLight} />
          <circle cx="-65" cy="52" r="7" fill={palette.flower} />
          <circle cx="-79" cy="48" r="5" fill={palette.gold} />
        </g>
      )}

      {detail >= 3 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--3">
          <path d="M-33 -12 Q-5 -30 23 -13" fill="none" stroke={palette.gold} strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="-29" cy="-14" r="3.5" fill={palette.gold} />
          <circle cx="-7" cy="-24" r="3.5" fill={palette.gold} />
          <circle cx="18" cy="-15" r="3.5" fill={palette.gold} />
          <path d="M-83 61 Q0 80 83 59" fill="none" stroke={palette.wood} strokeWidth="4" opacity=".55" />
        </g>
      )}
    </g>
  );
}
