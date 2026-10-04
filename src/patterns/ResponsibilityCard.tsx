import type { ReactNode } from 'react';
import { TaskCard, type SyncState, type TaskStatus } from '../components/TaskCard';

export interface ResponsibilityCardProps {
  title: string;
  why?: ReactNode;
  whyLabel?: string;
  scheduleLabel?: string;
  status?: TaskStatus;
  syncState?: SyncState;
  meta?: ReactNode;
  onToggle?: () => void;
}

/**
 * Domain pattern for ordinary personal/family responsibility tracking.
 * Deliberately has no money or XP props: paid work belongs to JobCard.
 */
export function ResponsibilityCard({
  title,
  why,
  whyLabel = 'Why',
  scheduleLabel,
  status = 'pending',
  syncState = 'synced',
  meta,
  onToggle,
}: ResponsibilityCardProps) {
  return (
    <article className="lo-pattern lo-responsibility-card">
      <TaskCard
        title={title}
        meta={meta}
        status={status}
        syncState={syncState}
        onToggle={onToggle}
      />
      {(why || scheduleLabel) && (
        <div className="lo-responsibility-card__context">
          {why && (
            <p className="lo-responsibility-card__why">
              <strong>{whyLabel}</strong>
              <span>{why}</span>
            </p>
          )}
          {scheduleLabel && <span className="lo-responsibility-card__schedule">{scheduleLabel}</span>}
        </div>
      )}
    </article>
  );
}
