import type { IslandRegionAssetProps } from './types';

export function GoalsAsset({ detail, palette }: IslandRegionAssetProps) {
  return (
    <g className="lo-island-asset lo-island-asset--goals">
      <ellipse cx="0" cy="56" rx="72" ry="21" fill={palette.grassDark} opacity=".13" />
      <path d="M-50 8 Q0 -31 50 8 V51 H-50 Z" fill={palette.stoneLight} />
      <path d="M-56 7 A56 46 0 0 1 56 7 Z" fill={palette.lavender} />
      <rect x="-15" y="17" width="30" height="34" rx="7" fill={palette.cream} />

      <g className="lo-observatory__scope" transform="rotate(-25)">
        <rect x="-4" y="-26" width="74" height="14" rx="7" fill={palette.cream} stroke={palette.stone} strokeWidth="3" />
        <circle cx="69" cy="-19" r="10" fill={palette.gold} />
      </g>

      {detail >= 1 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--1">
          <path d="M-25 51 L-39 69 M25 51 L39 69" stroke={palette.stone} strokeWidth="7" strokeLinecap="round" />
          <circle cx="-52" cy="-37" r="4" fill={palette.gold} />
        </g>
      )}

      {detail >= 2 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--2">
          <path d="M-62 31 Q-78 6 -62 -19" fill="none" stroke={palette.wood} strokeWidth="5" strokeLinecap="round" />
          <path d="M-70 -17 l8 -8 8 8" fill="none" stroke={palette.gold} strokeWidth="4" strokeLinecap="round" />
          <circle cx="56" cy="-46" r="4" fill={palette.gold} />
          <circle cx="79" cy="-23" r="3" fill={palette.gold} />
        </g>
      )}

      {detail >= 3 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--3">
          <circle className="lo-island-star" cx="-82" cy="-49" r="4" fill={palette.gold} />
          <circle className="lo-island-star" cx="-30" cy="-69" r="3" fill={palette.gold} />
          <circle className="lo-island-star" cx="35" cy="-72" r="3" fill={palette.gold} />
          <path d="M-83 55 Q0 76 83 54" fill="none" stroke={palette.sand} strokeWidth="8" strokeLinecap="round" />
        </g>
      )}
    </g>
  );
}
