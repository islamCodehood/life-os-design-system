import { useId, type ReactNode } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export type GraduationMode = 'suggestion' | 'celebration' | 'monitoring';

export interface GraduationEvidenceItem {
  label: string;
  value: ReactNode;
}

export interface GraduationMilestoneProps {
  mode: GraduationMode;
  title: string;
  message: ReactNode;
  visual?: ReactNode;
  evidence?: GraduationEvidenceItem[];
  eyebrow?: string;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
}

/**
 * Renders graduation evidence/celebration after the domain decides what is valid.
 * This component never decides readiness or changes graduation state.
 */
export function GraduationMilestone({
  mode,
  title,
  message,
  visual,
  evidence = [],
  eyebrow,
  primaryAction,
  secondaryAction,
}: GraduationMilestoneProps) {
  const titleId = useId();
  const defaultEyebrow = mode === 'suggestion'
    ? 'Graduation suggestion'
    : mode === 'monitoring'
      ? 'Independent responsibility'
      : 'Milestone';

  return (
    <section className="lo-pattern lo-graduation" data-mode={mode} aria-labelledby={titleId}>
      {visual && <div className="lo-graduation__visual" aria-hidden="true">{visual}</div>}
      <Card className="lo-graduation__card" variant={mode === 'celebration' ? 'selected' : 'default'}>
        <div className="lo-graduation__eyebrow">{eyebrow ?? defaultEyebrow}</div>
        <h2 id={titleId}>{title}</h2>
        <div className="lo-graduation__message">{message}</div>

        {evidence.length > 0 && (
          <dl className="lo-graduation__evidence">
            {evidence.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {(primaryAction || secondaryAction) && (
          <div className="lo-graduation__actions">
            {secondaryAction && <Button variant="secondary" onClick={secondaryAction.onClick}>{secondaryAction.label}</Button>}
            {primaryAction && <Button onClick={primaryAction.onClick}>{primaryAction.label}</Button>}
          </div>
        )}
      </Card>
    </section>
  );
}
