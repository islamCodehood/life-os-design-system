import type { IslandRegionAssetProps } from './types';

export function MoneyAsset({ detail, palette }: IslandRegionAssetProps) {
  return (
    <g className="lo-island-asset lo-island-asset--money">
      <ellipse cx="-4" cy="50" rx="82" ry="20" fill={palette.waterDeep} opacity=".18" />
      <g className="lo-harbor__dock">
        <path d="M-72 27 H35" stroke={palette.woodDark} strokeWidth="16" strokeLinecap="round" />
        <path d="M-70 23 H35" stroke={palette.wood} strokeWidth="10" strokeLinecap="round" />
        <path d="M-54 29 V60 M-12 29 V62 M27 29 V59" stroke={palette.woodDark} strokeWidth="6" />
      </g>

      {detail >= 1 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--1">
          <path d="M9 8 Q38 -3 64 14 L55 30 H12 Z" fill={palette.clay} />
          <path d="M18 10 Q38 1 55 12" fill="none" stroke={palette.cream} strokeWidth="4" />
          <circle cx="21" cy="29" r="4" fill={palette.stoneLight} />
          <circle cx="48" cy="29" r="4" fill={palette.stoneLight} />
        </g>
      )}

      {detail >= 2 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--2">
          <path d="M38 7 V-38" stroke={palette.woodDark} strokeWidth="5" />
          <path d="M42 -35 L73 -3 H42 Z" fill={palette.cream} />
          <path d="M-65 6 L-46 -19 H-16 L1 6 V28 H-65 Z" fill={palette.cream} />
          <path d="M-70 5 L-42 -28 L7 5 Z" fill={palette.clay} />
        </g>
      )}

      {detail >= 3 && (
        <g className="lo-island-stage-detail lo-island-stage-detail--3">
          <path d="M-77 -8 V-51 H-55 V-8" fill={palette.cream} stroke={palette.stone} strokeWidth="3" />
          <path d="M-80 -51 H-52 L-58 -64 H-74 Z" fill={palette.clay} />
          <circle className="lo-harbor__beacon" cx="-66" cy="-43" r="6" fill={palette.gold} />
          <path d="M-87 63 Q-20 74 75 58" fill="none" stroke={palette.foam} strokeWidth="5" strokeLinecap="round" opacity=".7" />
        </g>
      )}
    </g>
  );
}
