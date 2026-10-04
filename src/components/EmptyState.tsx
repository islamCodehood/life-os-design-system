import type { ReactNode } from 'react';
import { Button } from './Button';

export interface EmptyStateProps {
  visual?: ReactNode;
  title: string;
  description?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

/** Neutral empty state. Empty does not mean failed or behind. */
export function EmptyState({
  visual,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <section className="lo-empty-state">
      {visual && <div className="lo-empty-state__visual" aria-hidden="true">{visual}</div>}
      <div className="lo-empty-state__copy">
        <h3>{title}</h3>
        {description && <div>{description}</div>}
      </div>
      {actionLabel && <Button variant="secondary" onClick={onAction}>{actionLabel}</Button>}
    </section>
  );
}
