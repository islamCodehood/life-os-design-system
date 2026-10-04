import type { WorldThemePalette } from '../../types';

export function IslandBackgroundLayer({ palette }: { palette: WorldThemePalette }) {
  return (
    <g className="lo-island-layer lo-island-layer--background" aria-hidden="true">
      <rect width="1200" height="760" fill={palette.sky} />
      <circle cx="1035" cy="112" r="54" fill="#F5DFA7" opacity=".78" />
      <g fill="#FFFFFF" opacity=".55">
        <ellipse cx="190" cy="120" rx="72" ry="28" />
        <ellipse cx="245" cy="112" rx="54" ry="23" />
        <ellipse cx="915" cy="165" rx="66" ry="25" />
        <ellipse cx="965" cy="158" rx="46" ry="20" />
      </g>
      <path d="M0 420 C210 385 390 445 590 410 C790 375 975 400 1200 355 L1200 760 L0 760 Z" fill={palette.water} />
      <path d="M0 560 C245 525 420 590 650 550 C855 515 1010 545 1200 505" fill="none" stroke={palette.waterDeep} strokeWidth="8" opacity=".22" />
      <path d="M20 650 C250 615 470 670 680 630 C875 595 1035 610 1180 590" fill="none" stroke="#FFFFFF" strokeWidth="5" opacity=".26" />
    </g>
  );
}
