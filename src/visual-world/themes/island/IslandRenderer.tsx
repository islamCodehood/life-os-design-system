import type { CSSProperties } from 'react';
import { resolveWorldRegions } from '../../domain/stage';
import type {
  WorldRegionId,
  WorldSceneState,
} from '../../domain/types';
import { IslandBackgroundLayer } from './layers/IslandBackgroundLayer';
import { IslandEffectsLayer } from './layers/IslandEffectsLayer';
import { IslandGrowthLayer } from './layers/IslandGrowthLayer';
import { IslandPathLayer } from './layers/IslandPathLayer';
import { IslandStructuresLayer } from './layers/IslandStructuresLayer';
import { IslandTerrainLayer } from './layers/IslandTerrainLayer';
import { islandThemeManifest } from './manifest';

export interface IslandRendererProps {
  state: WorldSceneState;
  ariaLabel?: string;
  onRegionSelect?: (regionId: WorldRegionId) => void;
}

export function IslandRenderer({
  state,
  ariaLabel = 'Life OS growing island',
  onRegionSelect,
}: IslandRendererProps) {
  const manifest = islandThemeManifest;
  const regions = resolveWorldRegions(manifest, state.regions);
  const showLabels = state.profile !== 'focused';

  return (
    <section
      className="lo-island-renderer"
      data-profile={state.profile}
      data-theme={state.themeId}
      data-transition={state.transition?.type}
    >
      <div className="lo-island-canvas">
        <svg
          className="lo-island-svg"
          viewBox={`0 0 ${manifest.viewBox.width} ${manifest.viewBox.height}`}
          role="img"
          aria-label={ariaLabel}
          preserveAspectRatio="xMidYMid meet"
        >
          <IslandBackgroundLayer palette={manifest.palette} />
          <IslandTerrainLayer palette={manifest.palette} />
          <IslandPathLayer palette={manifest.palette} />
          <IslandGrowthLayer palette={manifest.palette} regions={regions} />
          <IslandStructuresLayer
            palette={manifest.palette}
            regions={regions}
            transition={state.transition}
          />
          <IslandEffectsLayer
            palette={manifest.palette}
            regions={regions}
            manifest={manifest}
            transition={state.transition}
          />
        </svg>

        {showLabels && (
          <div className="lo-island-label-layer" aria-label="Island regions">
            {regions.map((region) => {
              const label = region.state.label ?? region.manifest.label;
              const x = region.manifest.x + region.manifest.labelOffset.x;
              const y = region.manifest.y + region.manifest.labelOffset.y;
              const style = {
                '--lo-world-label-x': `${(x / manifest.viewBox.width) * 100}%`,
                '--lo-world-label-y': `${(y / manifest.viewBox.height) * 100}%`,
              } as CSSProperties;
              const content = (
                <>
                  <span className="lo-island-label__title">{label}</span>
                  <span className="lo-island-label__stage">
                    {region.state.status === 'locked' ? 'Not active yet' : region.stage.label}
                  </span>
                </>
              );

              return onRegionSelect && region.state.status !== 'locked' ? (
                <button
                  key={region.id}
                  type="button"
                  className="lo-island-label"
                  style={style}
                  data-status={region.state.status}
                  onClick={() => onRegionSelect(region.id)}
                  aria-label={`${label}, ${region.stage.label}`}
                >
                  {content}
                </button>
              ) : (
                <div
                  key={region.id}
                  className="lo-island-label"
                  style={style}
                  data-status={region.state.status}
                >
                  {content}
                </div>
              );
            })}
          </div>
        )}

        {state.profile !== 'focused' && state.accents?.map((accent) => {
          const definition = manifest.accents[accent.type];
          const region = accent.regionId ? manifest.regions[accent.regionId] : undefined;
          const x = region?.x ?? 600;
          const y = region?.y ?? 380;
          const style = {
            '--lo-world-accent-x': `${(x / manifest.viewBox.width) * 100}%`,
            '--lo-world-accent-y': `${(y / manifest.viewBox.height) * 100}%`,
          } as CSSProperties;

          return (
            <span
              key={accent.id}
              className="lo-world-accent"
              data-accent={accent.type}
              style={style}
              role="img"
              aria-label={accent.label ?? definition.label}
              title={accent.label ?? definition.label}
            >
              {definition.emoji}
            </span>
          );
        })}
      </div>

      {state.title && <div className="lo-island-renderer__title">{state.title}</div>}
    </section>
  );
}
