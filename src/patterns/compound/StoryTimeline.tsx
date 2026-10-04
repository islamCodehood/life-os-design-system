import type { ReactNode } from 'react';
import { Card } from '../../components/Card';
import { MomentCard } from '../MomentCard';

export type StoryTimelineEntryKind = 'moment' | 'recovery' | 'milestone' | 'graduation';

export interface StoryTimelineEntry {
  id: string;
  kind: StoryTimelineEntryKind;
  title: string;
  description: ReactNode;
  occurredLabel: string;
  valueTags?: string[];
  authorName?: string;
  visual?: ReactNode;
  kindLabel?: string;
}

export interface StoryTimelineProps {
  title?: string;
  entries: StoryTimelineEntry[];
  emptyState?: ReactNode;
}

/**
 * A narrative timeline, not a score feed.
 * Recovery and graduation can appear as meaningful events without generating currency.
 */
export function StoryTimeline({
  title = 'My Story',
  entries,
  emptyState = 'Meaningful moments will appear here over time.',
}: StoryTimelineProps) {
  return (
    <section className="lo-compound lo-story-timeline">
      <h2>{title}</h2>
      <div className="lo-story-timeline__rail">
        {entries.length === 0 && <div className="lo-story-timeline__empty">{emptyState}</div>}
        {entries.map((entry) => (
          <div key={entry.id} className="lo-story-timeline__entry" data-kind={entry.kind}>
            <span className="lo-story-timeline__dot" aria-hidden="true" />
            {entry.kind === 'moment' ? (
              <MomentCard
                title={entry.title}
                description={entry.description}
                occurredLabel={entry.occurredLabel}
                valueTags={entry.valueTags}
                authorName={entry.authorName}
                visual={entry.visual}
              />
            ) : (
              <Card className="lo-story-timeline__event">
                <div className="lo-story-timeline__meta">
                  <span>{entry.kindLabel ?? entry.kind}</span>
                  <span>{entry.occurredLabel}</span>
                </div>
                <h3>{entry.title}</h3>
                <div className="lo-story-timeline__description">{entry.description}</div>
                {entry.visual && <div className="lo-story-timeline__visual" aria-hidden="true">{entry.visual}</div>}
              </Card>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
