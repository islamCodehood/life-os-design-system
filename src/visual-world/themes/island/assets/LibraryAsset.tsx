import type { IslandRegionAssetProps } from './types';

export function LibraryAsset({ detail, palette }: IslandRegionAssetProps) {
  return (
    <g className="lo-island-asset lo-island-asset--library">
      <ellipse cx="0" cy="58" rx="78" ry="23" fill={palette.grassDark} opacity=".15" />
      <path d="M-61 10 L-36 -25 H41 L62 9 V54 H-61 Z" fill={palette.cream} />
      <path d="M-69 9 L-16 -50 L53 -12 L62 9 H-61 Z" fill={palette.wood} />
      <path d="M-16 -50 L53 -12 L46 -5 L-15 -39 L-61 10 L-69 9 Z" fill={palette.woodDark} opacity=".3" />
      <rect x="-11" y="18" width="24" height="36" rx="5" fill={palette.clay} />
      <path d="M-42 4 h24 v26 h-24 z M20 4 h24 v26 h-24 z" fill={palette.skySoft} stroke={palette.stoneLight} strokeWidth="3" />

      {detail >= 1 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--1">
          <path d="M-38 17 H-22 M24 17 H40" stroke={palette.gold} strokeWidth="4" strokeLinecap="round" />
          <path d="M-78 51 h22 v9 h-22 z" fill={palette.clay} />
          <path d="M-75 48 v-14 M-68 48 v-19 M-61 48 v-12" stroke={palette.lavender} strokeWidth="4" />
        </g>
      )}

      {detail >= 2 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--2">
          <path d="M-46 -14 Q0 -37 46 -13" fill="none" stroke={palette.gold} strokeWidth="3" opacity=".8" />
          <circle cx="-70" cy="33" r="18" fill={palette.leaf} />
          <circle cx="68" cy="35" r="18" fill={palette.leafLight} />
          <rect x="-73" y="39" width="6" height="20" rx="3" fill={palette.wood} />
          <rect x="65" y="41" width="6" height="18" rx="3" fill={palette.wood} />
        </g>
      )}

      {detail >= 3 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--3">
          <path d="M-30 -27 L-30 -59 H-16 V-42 H-4 V-59 H10 V-42 H22 V-59 H36 V-23" fill={palette.cream} stroke={palette.woodDark} strokeWidth="3" strokeLinejoin="round" />
          <circle cx="3" cy="-49" r="5" fill={palette.gold} />
          <circle cx="-84" cy="58" r="5" fill={palette.flower} />
          <circle cx="84" cy="57" r="5" fill={palette.lavender} />
        </g>
      )}
    </g>
  );
}
