import type { ReactNode } from 'react';
import { Card } from './Card';

export type AttentionTone = 'default' | 'growth' | 'warning' | 'danger';
export interface AttentionCardProps { eyebrow: string; title: string; description?: ReactNode; actionLabel?: string; onAction?: () => void; tone?: AttentionTone }

export function AttentionCard({ eyebrow, title, description, actionLabel, onAction, tone = 'default' }: AttentionCardProps) {
  return (
    <Card className="lo-attention-card" data-tone={tone}>
      <div className="lo-attention-card__eyebrow">{eyebrow}</div>
      <div className="lo-attention-card__title">{title}</div>
      {description && <div className="lo-attention-card__body">{description}</div>}
      {actionLabel && <button className="lo-attention-card__action" type="button" onClick={onAction}>{actionLabel} →</button>}
    </Card>
  );
}
