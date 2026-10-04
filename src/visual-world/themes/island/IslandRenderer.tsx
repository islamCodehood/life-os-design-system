import type { CSSProperties } from 'react';
import { resolveWorldRegions } from '../../domain/stage';
import type {
  WorldRegionId,
  WorldSceneState,
} from '../../domain/types';
import type { WorldLabelPlacement } from '../types';
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

function placementToPercent(
  placement: WorldLabelPlacement,
  width: number,
  height: number,
) {
  return {
    x: `${(placement.x / width) * 100}%`,
    y: `${(placement.y / height) * 100}%`,
  };
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
              const fullLabel = region.state.label ?? region.manifest.label;
              const compactLabel =
                region.state.compactLabel ??
                region.manifest.compactLabel ??
                fullLabel;
              const { desktop, tablet, mobile } = region.manifest.labelPlacement;
              const desktopPosition = placementToPercent(
                desktop,
                manifest.viewBox.width,
                manifest.viewBox.height,
              );
              const tabletPosition = placementToPercent(
                tablet,
                manifest.viewBox.width,
                manifest.viewBox.height,
              );
              const mobilePosition = placementToPercent(
                mobile,
                manifest.viewBox.width,
                manifest.viewBox.height,
              );
              const style = {
                '--lo-world-label-x-desktop': desktopPosition.x,
                '--lo-world-label-y-desktop': desktopPosition.y,
                '--lo-world-label-x-tablet': tabletPosition.x,
                '--lo-world-label-y-tablet': tabletPosition.y,
                '--lo-world-label-x-mobile': mobilePosition.x,
                '--lo-world-label-y-mobile': mobilePosition.y,
              } as CSSProperties;

              const content = (
                <>
                  <span className="lo-island-label__title lo-island-label__title--full">
                    {fullLabel}
                  </span>
                  <span className="lo-island-label__title lo-island-label__title--compact">
                    {compactLabel}
                  </span>
                  <span className="lo-island-label__stage">
                    {region.state.status === 'locked'
                      ? 'Not active yet'
                      : region.stage.label}
                  </span>
                </>
              );

              return onRegionSelect && region.state.status !== 'locked' ? (
                <button
                  key={region.id}
                  type="button"
                  className="lo-island-label"
                  style={style}
                  data-region={region.id}
                  data-status={region.state.status}
                  onClick={() => onRegionSelect(region.id)}
                  aria-label={`${fullLabel}, ${region.stage.label}`}
                >
                  {content}
                </button>
              ) : (
                <div
                  key={region.id}
                  className="lo-island-label"
                  style={style}
                  data-region={region.id}
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
