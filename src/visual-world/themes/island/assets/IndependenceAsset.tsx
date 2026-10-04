import type { IslandRegionAssetProps } from './types';

export function IndependenceAsset({ detail, palette }: IslandRegionAssetProps) {
  if (detail === 0) {
    return (
      <g className="lo-island-asset lo-island-asset--independence">
        <ellipse cx="0" cy="46" rx="68" ry="18" fill={palette.waterDeep} opacity=".16" />
        <g fill={palette.stoneLight}>
          <ellipse cx="-43" cy="28" rx="18" ry="9" />
          <ellipse cx="-10" cy="13" rx="16" ry="8" />
          <ellipse cx="22" cy="20" rx="15" ry="8" />
          <ellipse cx="49" cy="7" rx="12" ry="7" />
        </g>
      </g>
    );
  }

  return (
    <g className="lo-island-asset lo-island-asset--independence">
      <ellipse cx="0" cy="49" rx="84" ry="21" fill={palette.waterDeep} opacity=".16" />
      <g className="lo-bridge__deck">
        <path d="M-74 35 C-36 -13 35 -14 74 35" fill="none" stroke={palette.woodDark} strokeWidth="23" strokeLinecap="round" />
        <path d="M-72 30 C-35 -14 35 -15 72 30" fill="none" stroke={palette.wood} strokeWidth="17" strokeLinecap="round" />
        <path d="M-61 24 L-47 14 M-34 3 L-20 -2 M0 -7 L15 -4 M34 3 L48 13 M61 24 L71 31" stroke={palette.cream} strokeWidth="5" strokeLinecap="round" opacity=".75" />
      </g>

      {detail >= 2 && (
        <g className="lo-bridge__rail">
          <path d="M-69 12 C-35 -31 35 -31 69 12" fill="none" stroke={palette.gold} strokeWidth="4" strokeLinecap="round" />
          <path d="M-65 13 V35 M-34 -15 V8 M0 -24 V-5 M34 -15 V8 M65 13 V35" stroke={palette.woodDark} strokeWidth="4" strokeLinecap="round" />
        </g>
      )}

      {detail >= 3 && (
        <g className="lo-bridge__lanterns">
          <circle cx="-66" cy="7" r="8" fill={palette.gold} opacity=".9" />
          <circle cx="66" cy="7" r="8" fill={palette.gold} opacity=".9" />
          <circle cx="-66" cy="7" r="14" fill={palette.gold} opacity=".14" />
          <circle cx="66" cy="7" r="14" fill={palette.gold} opacity=".14" />
          <circle cx="-82" cy="45" r="6" fill={palette.flower} />
          <circle cx="82" cy="45" r="6" fill={palette.lavender} />
        </g>
      )}
    </g>
  );
}
