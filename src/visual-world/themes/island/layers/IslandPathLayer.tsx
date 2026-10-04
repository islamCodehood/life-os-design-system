import type { WorldThemePalette } from '../../types';

export function IslandPathLayer({ palette }: { palette: WorldThemePalette }) {
  return (
    <g className="lo-island-layer lo-island-layer--paths" aria-hidden="true">
      <path d="M350 345 C410 365 477 390 610 430 C688 452 758 465 825 500" fill="none" stroke={palette.sand} strokeWidth="28" strokeLinecap="round" />
      <path d="M350 345 C370 410 348 462 305 515" fill="none" stroke={palette.sand} strokeWidth="24" strokeLinecap="round" />
      <path d="M610 430 C635 350 696 293 775 245" fill="none" stroke={palette.sand} strokeWidth="24" strokeLinecap="round" />
      <path d="M535 205 C510 255 445 305 350 345" fill="none" stroke={palette.sand} strokeWidth="22" strokeLinecap="round" />
      <path d="M825 500 C888 468 928 430 980 395" fill="none" stroke={palette.sand} strokeWidth="22" strokeLinecap="round" />
      <g fill={palette.stone} opacity=".55">
        <circle cx="455" cy="382" r="5" /><circle cx="493" cy="394" r="4" />
        <circle cx="690" cy="450" r="5" /><circle cx="743" cy="470" r="4" />
        <circle cx="347" cy="430" r="4" /><circle cx="329" cy="469" r="5" />
      </g>
    </g>
  );
}
