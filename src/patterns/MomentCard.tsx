import type { ReactNode } from 'react';
import { Avatar } from '../components/Avatar';
import { Card } from '../components/Card';

export interface MomentCardProps {
  title?: string;
  description: ReactNode;
  valueTags?: string[];
  occurredLabel: string;
  authorName?: string;
  authorAvatarSrc?: string;
  visual?: ReactNode;
  tagsAriaLabel?: string;
}

/** A memory/story pattern. It intentionally exposes no score, XP or money props. */
export function MomentCard({
  title,
  description,
  valueTags = [],
  occurredLabel,
  authorName,
  authorAvatarSrc,
  visual,
  tagsAriaLabel = 'Moment themes',
}: MomentCardProps) {
  return (
    <Card className="lo-pattern lo-moment-card">
      {visual && <div className="lo-moment-card__visual" aria-hidden="true">{visual}</div>}
      <div className="lo-moment-card__content">
        <div className="lo-moment-card__meta">
          {authorName && <Avatar name={authorName} src={authorAvatarSrc} size="sm" />}
          <span>{occurredLabel}</span>
        </div>
        {title && <h3>{title}</h3>}
        <div className="lo-moment-card__description">{description}</div>
        {valueTags.length > 0 && (
          <div className="lo-moment-card__tags" aria-label={tagsAriaLabel}>
            {valueTags.map((tag) => <span key={tag} className="lo-moment-card__tag">{tag}</span>)}
          </div>
        )}
      </div>
    </Card>
  );
}
