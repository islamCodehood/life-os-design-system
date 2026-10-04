import type { WorldThemePalette } from '../../types';

export function IslandTerrainLayer({ palette }: { palette: WorldThemePalette }) {
  return (
    <g className="lo-island-layer lo-island-layer--terrain" aria-hidden="true">
      <ellipse cx="610" cy="495" rx="451" ry="231" fill={palette.waterDeep} opacity=".15" />
      <path
        d="M174 452 C188 315 319 217 478 194 C646 170 829 205 961 301 C1080 388 1071 526 956 611 C828 706 625 713 426 665 C258 624 158 559 174 452 Z"
        fill={palette.sand}
      />
      <path
        d="M205 442 C224 326 339 247 487 224 C642 201 806 231 928 317 C1032 391 1025 508 921 583 C807 664 628 672 451 633 C298 599 190 541 205 442 Z"
        fill={palette.grass}
      />
      <path d="M228 487 C311 444 400 468 469 516 C541 567 627 584 715 553 C806 521 875 458 980 461" fill="none" stroke={palette.grassDark} strokeWidth="18" strokeLinecap="round" opacity=".13" />
      <path d="M283 304 C363 257 445 243 520 249" fill="none" stroke={palette.grassLight} strokeWidth="21" strokeLinecap="round" opacity=".28" />
      <path d="M770 591 C829 572 880 540 916 497" fill="none" stroke={palette.grassLight} strokeWidth="16" strokeLinecap="round" opacity=".25" />

      <g className="lo-island-rocks" fill={palette.stone} opacity=".5">
        <ellipse cx="205" cy="500" rx="16" ry="8" />
        <ellipse cx="227" cy="521" rx="10" ry="6" />
        <ellipse cx="955" cy="553" rx="17" ry="8" />
        <ellipse cx="989" cy="520" rx="11" ry="6" />
        <ellipse cx="355" cy="650" rx="13" ry="6" />
      </g>

      <g className="lo-island-shore-foam" fill="none" stroke={palette.foam} strokeWidth="4" strokeLinecap="round" opacity=".55">
        <path d="M192 543 Q253 625 382 655" />
        <path d="M858 662 Q955 630 1015 558" />
      </g>
    </g>
  );
}
