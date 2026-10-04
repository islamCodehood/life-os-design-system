import type { WorldThemePalette } from '../../types';

export function IslandTerrainLayer({ palette }: { palette: WorldThemePalette }) {
  return (
    <g className="lo-island-layer lo-island-layer--terrain" aria-hidden="true">
      <ellipse cx="598" cy="474" rx="445" ry="238" fill={palette.waterDeep} opacity=".18" transform="translate(12 18)" />
      <path
        d="M176 454 C190 315 322 218 480 196 C645 172 825 205 957 302 C1075 389 1068 524 955 608 C830 701 626 710 430 665 C261 626 160 560 176 454 Z"
        fill={palette.sand}
      />
      <path
        d="M206 445 C225 326 342 248 488 226 C640 203 805 232 925 318 C1028 392 1021 508 919 581 C808 661 630 670 454 632 C300 599 190 542 206 445 Z"
        fill={palette.grass}
      />
      <path d="M230 492 C314 448 401 472 468 520 C539 571 626 585 713 555 C805 523 872 461 976 464" fill="none" stroke={palette.grassDark} strokeWidth="18" strokeLinecap="round" opacity=".15" />
      <g fill={palette.grassDark} opacity=".28">
        <ellipse cx="271" cy="386" rx="42" ry="22" />
        <ellipse cx="895" cy="345" rx="52" ry="25" />
        <ellipse cx="706" cy="615" rx="58" ry="22" />
        <ellipse cx="386" cy="604" rx="47" ry="19" />
      </g>
    </g>
  );
}
