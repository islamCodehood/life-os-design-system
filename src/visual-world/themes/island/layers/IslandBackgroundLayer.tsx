import type { WorldThemePalette } from '../../types';

export function IslandBackgroundLayer({ palette }: { palette: WorldThemePalette }) {
  return (
    <g className="lo-island-layer lo-island-layer--background" aria-hidden="true">
      <rect width="1200" height="760" fill={palette.sky} />
      <path d="M0 0 H1200 V245 C960 204 790 237 600 202 C400 165 218 209 0 172 Z" fill={palette.skySoft} opacity=".46" />
      <circle cx="1037" cy="108" r="55" fill="#F3DDA3" opacity=".78" />
      <circle cx="1037" cy="108" r="78" fill="#F3DDA3" opacity=".12" />

      <g className="lo-island-cloud lo-island-cloud--far" fill="#FFFFFF" opacity=".5">
        <ellipse cx="178" cy="112" rx="58" ry="23" />
        <ellipse cx="225" cy="105" rx="46" ry="19" />
        <ellipse cx="137" cy="118" rx="35" ry="17" />
      </g>
      <g className="lo-island-cloud lo-island-cloud--near" fill="#FFFFFF" opacity=".64">
        <ellipse cx="847" cy="158" rx="65" ry="25" />
        <ellipse cx="902" cy="150" rx="49" ry="21" />
        <ellipse cx="806" cy="164" rx="36" ry="18" />
      </g>

      <path d="M0 411 C205 379 395 436 590 405 C787 373 977 399 1200 352 L1200 760 L0 760 Z" fill={palette.water} />
      <g className="lo-island-water-lines" fill="none" strokeLinecap="round">
        <path d="M-45 542 C195 512 421 572 650 538 C856 507 1022 535 1255 491" stroke={palette.waterDeep} strokeWidth="8" opacity=".2" />
        <path d="M-20 615 C208 584 428 641 666 607 C874 577 1031 599 1225 561" stroke={palette.foam} strokeWidth="5" opacity=".38" />
        <path d="M-95 690 C165 652 389 713 636 679 C846 650 1035 671 1290 628" stroke={palette.waterDeep} strokeWidth="6" opacity=".13" />
      </g>
      <g className="lo-island-birds" fill="none" stroke={palette.inkSoft} strokeWidth="3" strokeLinecap="round" opacity=".28">
        <path d="M706 102 q10 -9 20 0 q10 -9 20 0" />
        <path d="M755 130 q8 -7 16 0 q8 -7 16 0" />
      </g>
    </g>
  );
}
