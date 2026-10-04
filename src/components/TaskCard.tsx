import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { Card } from './Card';
import { Icon } from './Icon';

export type TaskStatus = 'pending' | 'completed' | 'missed' | 'unresolved';
export type SyncState = 'synced' | 'pending' | 'offline';

export interface TaskCardProps {
  title: string;
  meta?: ReactNode;
  status?: TaskStatus;
  syncState?: SyncState;
  onToggle?: () => void;
}

const syncLabels: Record<SyncState, string> = {
  synced: '',
  pending: 'Syncing…',
  offline: 'Saved offline',
};

export function TaskCard({
  title,
  meta,
  status = 'pending',
  syncState = 'synced',
  onToggle,
}: TaskCardProps) {
  const completed = status === 'completed';

  return (
    <Card className="lo-task-card" data-status={status}>
      <button
        type="button"
        className="lo-task-card__control"
        aria-pressed={completed}
        aria-label={`${completed ? 'Mark incomplete' : 'Mark complete'}: ${title}`}
        onClick={onToggle}
      >
        {completed && <Icon icon={Check} size="md" />}
      </button>
      <div>
        <div className="lo-task-card__title">{title}</div>
        {meta && <div className="lo-task-card__meta">{meta}</div>}
      </div>
      {syncState !== 'synced' && <div className="lo-task-card__sync">{syncLabels[syncState]}</div>}
    </Card>
  );
}
