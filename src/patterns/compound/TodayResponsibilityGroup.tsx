import type { ReactNode } from 'react';
import { ResponsibilityCard, type ResponsibilityCardProps } from '../ResponsibilityCard';

export interface TodayResponsibilityItem extends ResponsibilityCardProps {
  id: string;
}

export interface TodayResponsibilityGroupProps {
  title: string;
  eyebrow?: string;
  summary?: ReactNode;
  items: TodayResponsibilityItem[];
  emptyState?: ReactNode;
  footer?: ReactNode;
}

/**
 * Groups responsibility instances for a time/context section such as Morning or Growth.
 * It renders the states supplied by the application and never converts absence of data into failure.
 */
export function TodayResponsibilityGroup({
  title,
  eyebrow,
  summary,
  items,
  emptyState = 'Nothing here right now.',
  footer,
}: TodayResponsibilityGroupProps) {
  return (
    <section className="lo-compound lo-today-group" aria-label={title}>
      <header className="lo-today-group__header">
        <div>
          {eyebrow && <div className="lo-today-group__eyebrow">{eyebrow}</div>}
          <h2>{title}</h2>
        </div>
        {summary && <div className="lo-today-group__summary">{summary}</div>}
      </header>

      <div className="lo-today-group__items">
        {items.length > 0
          ? items.map(({ id, ...item }) => <ResponsibilityCard key={id} {...item} />)
          : <div className="lo-today-group__empty">{emptyState}</div>}
      </div>

      {footer && <footer className="lo-today-group__footer">{footer}</footer>}
    </section>
  );
}
