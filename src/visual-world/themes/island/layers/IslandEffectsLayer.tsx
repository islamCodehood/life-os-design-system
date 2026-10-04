import type { WorldTransition } from '../../../domain/types';
import type { ResolvedWorldRegion } from '../../../domain/stage';
import type { WorldThemeManifest, WorldThemePalette } from '../../types';

export function IslandEffectsLayer({
  palette,
  regions,
  manifest,
  transition,
}: {
  palette: WorldThemePalette;
  regions: ResolvedWorldRegion[];
  manifest: WorldThemeManifest;
  transition?: WorldTransition;
}) {
  const transitionRegion = transition ? manifest.regions[transition.regionId] : undefined;

  return (
    <g className="lo-island-layer lo-island-layer--effects" aria-hidden="true">
      {regions.map((region) => {
        if (region.state.status !== 'complete') return null;
        return (
          <g key={`${region.id}-complete-effect`} transform={`translate(${region.manifest.x} ${region.manifest.y})`}>
            <circle className="lo-island-pulse" cx="0" cy="6" r="82" fill="none" stroke={palette.gold} strokeWidth="3" opacity=".42" />
          </g>
        );
      })}

      {transition && transitionRegion && (
        <g
          key={transition.id}
          className="lo-world-transition-effect"
          data-transition={transition.type}
          transform={`translate(${transitionRegion.x} ${transitionRegion.y})`}
        >
          {transition.type === 'recovery' && (
            <g className="lo-recovery-sequence">
              <circle className="lo-recovery-sequence__ring" cx="0" cy="18" r="46" fill="none" stroke={palette.leafLight} strokeWidth="5" />
              <g className="lo-recovery-sequence__sprout">
                <path d="M0 41 C-2 23 0 8 4 -8" fill="none" stroke={palette.leaf} strokeWidth="5" strokeLinecap="round" />
                <path d="M3 15 C-14 5 -22 -6 -16 -15 C-3 -14 8 -4 3 15 Z" fill={palette.leafLight} />
                <path d="M4 2 C15 -12 28 -15 33 -5 C26 8 16 14 4 2 Z" fill={palette.leaf} />
              </g>
            </g>
          )}

          {transition.type === 'milestone' && (
            <g className="lo-milestone-sequence">
              <circle className="lo-milestone-sequence__halo" cx="0" cy="0" r="63" fill={palette.gold} opacity=".16" />
              <g fill={palette.gold}>
                <path className="lo-milestone-ray" d="M0 -82 l5 16 16 5 -16 5 -5 16 -5 -16 -16 -5 16 -5 Z" />
                <path className="lo-milestone-ray" d="M70 -25 l3 10 10 3 -10 3 -3 10 -3 -10 -10 -3 10 -3 Z" />
                <path className="lo-milestone-ray" d="M-67 -19 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 Z" />
              </g>
            </g>
          )}

          {transition.type === 'graduation' && (
            <g className="lo-graduation-sequence">
              <path className="lo-graduation-sequence__path" d="M-92 65 C-51 14 46 8 92 62" fill="none" stroke={palette.gold} strokeWidth="6" strokeLinecap="round" opacity=".66" />
              <circle className="lo-graduation-sequence__light lo-graduation-sequence__light--1" cx="-72" cy="47" r="7" fill={palette.gold} />
              <circle className="lo-graduation-sequence__light lo-graduation-sequence__light--2" cx="0" cy="13" r="7" fill={palette.gold} />
              <circle className="lo-graduation-sequence__light lo-graduation-sequence__light--3" cx="72" cy="45" r="7" fill={palette.gold} />
            </g>
          )}

          {transition.type === 'stage-change' && (
            <circle className="lo-stage-transition-ring" cx="0" cy="5" r="74" fill="none" stroke={palette.cream} strokeWidth="8" opacity=".7" />
          )}
        </g>
      )}
    </g>
  );
}
