import type { ReactNode } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export type JobVisualState =
  | 'offered'
  | 'accepted'
  | 'in-progress'
  | 'submitted'
  | 'needs-revision'
  | 'approved'
  | 'awaiting-credit'
  | 'credited'
  | 'cancelled';

export interface JobCardAction {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface JobCardLabels {
  finishedMeans: string;
  payment: string;
  due: string;
  states: Record<JobVisualState, string>;
}

export interface JobCardProps {
  title: string;
  description?: ReactNode;
  paymentLabel: string;
  criteria?: string[];
  dueLabel?: string;
  state?: JobVisualState;
  visual?: ReactNode;
  primaryAction?: JobCardAction;
  secondaryAction?: JobCardAction;
  labels?: Partial<Omit<JobCardLabels, 'states'>> & { states?: Partial<Record<JobVisualState, string>> };
}

const defaultLabels: JobCardLabels = {
  finishedMeans: 'Finished means',
  payment: 'Payment',
  due: 'Due',
  states: {
    offered: 'Offered',
    accepted: 'Accepted',
    'in-progress': 'In progress',
    submitted: 'Waiting for review',
    'needs-revision': 'Needs revision',
    approved: 'Approved',
    'awaiting-credit': 'Awaiting credit',
    credited: 'Credited',
    cancelled: 'Cancelled',
  },
};

/** Presentation of paid extra work. It never credits money itself. */
export function JobCard({
  title,
  description,
  paymentLabel,
  criteria = [],
  dueLabel,
  state = 'offered',
  visual,
  primaryAction,
  secondaryAction,
  labels,
}: JobCardProps) {
  const text = {
    ...defaultLabels,
    ...labels,
    states: { ...defaultLabels.states, ...labels?.states },
  };

  return (
    <Card className="lo-pattern lo-job-card" data-state={state}>
      <div className="lo-job-card__header">
        {visual && <div className="lo-job-card__visual" aria-hidden="true">{visual}</div>}
        <div className="lo-job-card__heading">
          <div className="lo-job-card__state">{text.states[state]}</div>
          <h3>{title}</h3>
          {description && <div className="lo-job-card__description">{description}</div>}
        </div>
      </div>

      {criteria.length > 0 && (
        <div className="lo-job-card__criteria">
          <div className="lo-job-card__eyebrow">{text.finishedMeans}</div>
          <ul>{criteria.map((criterion) => <li key={criterion}>{criterion}</li>)}</ul>
        </div>
      )}

      <div className="lo-job-card__terms">
        <div>
          <span className="lo-job-card__eyebrow">{text.payment}</span>
          <strong>{paymentLabel}</strong>
        </div>
        {dueLabel && (
          <div>
            <span className="lo-job-card__eyebrow">{text.due}</span>
            <span>{dueLabel}</span>
          </div>
        )}
      </div>

      {(primaryAction || secondaryAction) && (
        <div className="lo-job-card__actions">
          {secondaryAction && (
            <Button
              variant="secondary"
              onClick={secondaryAction.onClick}
              disabled={secondaryAction.disabled}
            >
              {secondaryAction.label}
            </Button>
          )}
          {primaryAction && (
            <Button onClick={primaryAction.onClick} disabled={primaryAction.disabled}>
              {primaryAction.label}
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}
