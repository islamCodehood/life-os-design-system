import type { ReactNode } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ProgressBar, type ProgressTone } from '../components/ProgressBar';

export type WorldRegionState = 'locked' | 'available' | 'growing' | 'complete';

export interface WorldRegionProps {
  title: string;
  description?: ReactNode;
  state?: WorldRegionState;
  stateLabel?: string;
  visual?: ReactNode;
  progress?: number;
  progressLabel?: string;
  progressTone?: ProgressTone;
  actionLabel?: string;
  onAction?: () => void;
}

/** Semantic Visual World region. It renders supplied state; it never derives domain progress. */
export function WorldRegion({
  title,
  description,
  state = 'available',
  stateLabel,
  visual,
  progress,
  progressLabel,
  progressTone = 'family',
  actionLabel,
  onAction,
}: WorldRegionProps) {
  const isLocked = state === 'locked';
  return (
    <Card className="lo-pattern lo-world-region" data-state={state}>
      <div className="lo-world-region__visual" aria-hidden="true">
        {visual ?? <span className="lo-world-region__placeholder" />}
      </div>
      <div className="lo-world-region__content">
        <div className="lo-world-region__state">{stateLabel ?? state.replace('-', ' ')}</div>
        <h3>{title}</h3>
        {description && <div className="lo-world-region__description">{description}</div>}
        {progress !== undefined && !isLocked && (
          <ProgressBar value={progress} label={progressLabel} tone={progressTone} />
        )}
        {actionLabel && !isLocked && <Button variant="quiet" onClick={onAction}>{actionLabel}</Button>}
      </div>
    </Card>
  );
}
