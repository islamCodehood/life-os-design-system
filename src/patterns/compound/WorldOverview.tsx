import type { ReactNode } from 'react';
import { WorldRegion, type WorldRegionProps } from '../WorldRegion';

export interface WorldOverviewRegion extends WorldRegionProps {
  id: string;
}

export interface WorldOverviewProps {
  title: string;
  description?: ReactNode;
  regions: WorldOverviewRegion[];
  variant?: 'personal' | 'family';
  emptyState?: ReactNode;
}

/**
 * Composes semantic world regions. The Visual World remains downstream of domain truth.
 */
export function WorldOverview({
  title,
  description,
  regions,
  variant = 'personal',
  emptyState = 'Your world will grow as meaningful progress happens.',
}: WorldOverviewProps) {
  return (
    <section className="lo-compound lo-world-overview" data-variant={variant}>
      <header className="lo-world-overview__header">
        <div className="lo-world-overview__eyebrow">{variant === 'family' ? 'Family World' : 'Personal World'}</div>
        <h2>{title}</h2>
        {description && <div className="lo-world-overview__description">{description}</div>}
      </header>
      {regions.length > 0 ? (
        <div className="lo-world-overview__grid">
          {regions.map(({ id, ...region }) => <WorldRegion key={id} {...region} />)}
        </div>
      ) : (
        <div className="lo-world-overview__empty">{emptyState}</div>
      )}
    </section>
  );
}
