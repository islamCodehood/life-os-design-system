import type { ReactNode } from 'react';
import { AttentionCard, type AttentionCardProps } from '../../components/AttentionCard';

export interface ParentAttentionItem extends AttentionCardProps {
  id: string;
}

export interface ParentAttentionFeedProps {
  title?: string;
  description?: ReactNode;
  items: ParentAttentionItem[];
  emptyTitle?: string;
  emptyDescription?: ReactNode;
}

/**
 * Parent attention is a decision queue, not an alarm feed.
 * Tone comes from the caller so ordinary review items are not automatically warning-colored.
 */
export function ParentAttentionFeed({
  title = 'Needs your attention',
  description,
  items,
  emptyTitle = 'Nothing needs your attention',
  emptyDescription = 'There are no parent decisions waiting right now.',
}: ParentAttentionFeedProps) {
  return (
    <section className="lo-compound lo-attention-feed">
      <header className="lo-attention-feed__header">
        <h2>{title}</h2>
        {description && <div className="lo-attention-feed__description">{description}</div>}
      </header>

      {items.length > 0 ? (
        <div className="lo-attention-feed__grid">
          {items.map(({ id, ...item }) => <AttentionCard key={id} {...item} />)}
        </div>
      ) : (
        <div className="lo-attention-feed__empty">
          <strong>{emptyTitle}</strong>
          <span>{emptyDescription}</span>
        </div>
      )}
    </section>
  );
}
