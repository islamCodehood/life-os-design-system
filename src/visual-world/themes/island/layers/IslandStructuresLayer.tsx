import type { KeyboardEvent } from 'react';
import type { WorldRegionId } from '../../../domain/types';
import type { ResolvedWorldRegion } from '../../../domain/stage';
import type { WorldThemePalette } from '../../types';

export interface IslandStructuresLayerProps {
  palette: WorldThemePalette;
  regions: ResolvedWorldRegion[];
  showLabels: boolean;
  onRegionSelect?: (regionId: WorldRegionId) => void;
}

function House({ detail, palette }: { detail: number; palette: WorldThemePalette }) {
  return (
    <g>
      <rect x="-45" y="-8" width="90" height="62" rx="8" fill={palette.cream} />
      <path d="M-57 -8 L0 -51 L57 -8 Z" fill={palette.clay} />
      <rect x="-12" y="22" width="24" height="32" rx="5" fill={palette.wood} />
      {detail >= 1 && <><rect x="-34" y="10" width="16" height="17" rx="3" fill="#BFDCE7" /><rect x="18" y="10" width="16" height="17" rx="3" fill="#BFDCE7" /></>}
      {detail >= 2 && <circle cx="48" cy="-25" r="17" fill={palette.leaf} />}
      {detail >= 3 && <path d="M-42 54 C-29 36 29 36 42 54" fill="none" stroke={palette.gold} strokeWidth="5" />}
    </g>
  );
}

function Bridge({ detail, palette }: { detail: number; palette: WorldThemePalette }) {
  return (
    <g>
      <path d="M-62 26 C-25 -15 25 -15 62 26" fill="none" stroke={palette.wood} strokeWidth={detail === 0 ? 10 : 16} strokeLinecap="round" />
      {detail >= 1 && <path d="M-55 13 L-55 39 M-27 -3 L-27 27 M0 -9 L0 21 M27 -3 L27 27 M55 13 L55 39" stroke={palette.cream} strokeWidth="5" />}
      {detail >= 2 && <path d="M-61 18 C-20 -25 20 -25 61 18" fill="none" stroke={palette.gold} strokeWidth="3" />}
      {detail >= 3 && <><circle cx="-62" cy="25" r="8" fill={palette.flower} /><circle cx="62" cy="25" r="8" fill={palette.flower} /></>}
    </g>
  );
}

function Library({ detail, palette }: { detail: number; palette: WorldThemePalette }) {
  return (
    <g>
      <rect x="-48" y="-20" width="96" height="72" rx="7" fill={palette.cream} />
      <path d="M-58 -20 L0 -53 L58 -20 Z" fill={palette.wood} />
      <rect x="-11" y="18" width="22" height="34" rx="4" fill={palette.clay} />
      {detail >= 1 && <><rect x="-38" y="-3" width="20" height="22" rx="3" fill="#BFDCE7" /><rect x="18" y="-3" width="20" height="22" rx="3" fill="#BFDCE7" /></>}
      {detail >= 2 && <path d="M-39 29 H-18 M18 29 H39" stroke={palette.gold} strokeWidth="5" />}
      {detail >= 3 && <><circle cx="-55" cy="37" r="13" fill={palette.leaf} /><circle cx="55" cy="37" r="13" fill={palette.leaf} /></>}
    </g>
  );
}

function Observatory({ detail, palette }: { detail: number; palette: WorldThemePalette }) {
  return (
    <g>
      <rect x="-38" y="4" width="76" height="48" rx="9" fill={palette.stone} />
      <path d="M-42 5 A42 35 0 0 1 42 5 Z" fill={palette.lavender} />
      <rect x="-7" y="-12" width="56" height="12" rx="6" fill={palette.cream} transform="rotate(-28)" />
      {detail >= 1 && <circle cx="38" cy="-29" r="10" fill={palette.gold} />}
      {detail >= 2 && <path d="M-23 51 L-34 69 M23 51 L34 69" stroke={palette.stone} strokeWidth="7" strokeLinecap="round" />}
      {detail >= 3 && <><circle cx="-51" cy="-45" r="4" fill={palette.gold} /><circle cx="-26" cy="-58" r="3" fill={palette.gold} /><circle cx="60" cy="-49" r="4" fill={palette.gold} /></>}
    </g>
  );
}

function Garden({ detail, palette, family = false }: { detail: number; palette: WorldThemePalette; family?: boolean }) {
  return (
    <g>
      <ellipse cx="0" cy="36" rx="64" ry="28" fill={family ? palette.cream : '#AFC296'} opacity=".75" />
      <rect x="-5" y="-24" width="10" height="58" rx="5" fill={palette.wood} />
      <circle cx="0" cy="-33" r={detail >= 2 ? 38 : 29} fill={palette.leaf} />
      {detail >= 1 && <><circle cx="-30" cy="30" r="7" fill={palette.flower} /><circle cx="32" cy="35" r="7" fill={palette.gold} /></>}
      {detail >= 2 && <><circle cx="-18" cy="-40" r="5" fill={palette.flower} /><circle cx="18" cy="-25" r="5" fill={palette.gold} /></>}
      {detail >= 3 && <><circle cx="-48" cy="15" r="6" fill={palette.lavender} /><circle cx="47" cy="18" r="6" fill={palette.flower} /><path d="M-50 55 Q0 75 50 55" fill="none" stroke={palette.wood} strokeWidth="4" /></>}
    </g>
  );
}

function Harbor({ detail, palette }: { detail: number; palette: WorldThemePalette }) {
  return (
    <g>
      <path d="M-63 42 H38" stroke={palette.wood} strokeWidth="14" strokeLinecap="round" />
      <path d="M-42 40 V66 M-5 40 V66 M31 40 V64" stroke={palette.wood} strokeWidth="6" />
      {detail >= 1 && <path d="M10 20 Q36 6 56 25 L49 40 H13 Z" fill={palette.clay} />}
      {detail >= 2 && <><path d="M33 20 V-24" stroke={palette.wood} strokeWidth="5" /><path d="M36 -21 L64 8 H36 Z" fill={palette.cream} /></>}
      {detail >= 3 && <><circle cx="-55" cy="18" r="14" fill={palette.gold} opacity=".55" /><rect x="-66" y="-9" width="22" height="18" rx="4" fill={palette.cream} /></>}
    </g>
  );
}

function RegionStructure({ region, palette }: { region: ResolvedWorldRegion; palette: WorldThemePalette }) {
  const detail = region.state.status === 'locked' ? 0 : region.stage.detail;

  switch (region.id) {
    case 'home':
      return <House detail={detail} palette={palette} />;
    case 'independence':
      return <Bridge detail={detail} palette={palette} />;
    case 'library':
      return <Library detail={detail} palette={palette} />;
    case 'goals':
      return <Observatory detail={detail} palette={palette} />;
    case 'giving':
      return <Garden detail={detail} palette={palette} />;
    case 'money':
      return <Harbor detail={detail} palette={palette} />;
    case 'family':
      return <Garden detail={detail} palette={palette} family />;
  }
}

export function IslandStructuresLayer({
  palette,
  regions,
  showLabels,
  onRegionSelect,
}: IslandStructuresLayerProps) {
  const handleKey = (event: KeyboardEvent<SVGGElement>, id: WorldRegionId) => {
    if (!onRegionSelect) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onRegionSelect(id);
    }
  };

  return (
    <g className="lo-island-layer lo-island-layer--structures">
      {regions.map((region) => {
        const interactive = Boolean(onRegionSelect);
        const locked = region.state.status === 'locked';
        const label = region.state.label ?? region.manifest.label;

        return (
          <g
            key={region.id}
            className="lo-island-region"
            data-region={region.id}
            data-status={region.state.status}
            data-stage={region.stage.stage}
            transform={`translate(${region.manifest.x} ${region.manifest.y}) scale(${region.stage.scale})`}
            role={interactive ? 'button' : undefined}
            tabIndex={interactive ? 0 : undefined}
            aria-label={interactive ? `${label}: ${region.stage.label}` : undefined}
            onClick={interactive && !locked ? () => onRegionSelect?.(region.id) : undefined}
            onKeyDown={interactive && !locked ? (event) => handleKey(event, region.id) : undefined}
          >
            <ellipse cx="0" cy="57" rx="66" ry="17" fill="#44503F" opacity=".12" aria-hidden="true" />
            <g className="lo-island-region__structure" aria-hidden="true">
              <RegionStructure region={region} palette={palette} />
            </g>
            {showLabels && (
              <text
                className="lo-island-region__label"
                x="0"
                y="91"
                textAnchor="middle"
                aria-hidden="true"
              >
                {label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}
