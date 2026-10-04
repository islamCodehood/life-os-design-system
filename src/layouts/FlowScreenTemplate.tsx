import type { ReactNode } from 'react';

export interface FlowScreenTemplateProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  progressLabel?: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
}

export function FlowScreenTemplate({
  eyebrow,
  title,
  description,
  progressLabel,
  children,
  actions,
  visual,
}: FlowScreenTemplateProps) {
  return (
    <div className="lo-template-stage">
      <main className="lo-flow-template">
        {visual && <div className="lo-flow-template__visual" aria-hidden="true">{visual}</div>}
        <header className="lo-flow-template__header">
          <div>
            {eyebrow && <div className="lo-flow-template__eyebrow">{eyebrow}</div>}
            <h1>{title}</h1>
            {description && <div className="lo-flow-template__description">{description}</div>}
          </div>
          {progressLabel && <div className="lo-flow-template__progress">{progressLabel}</div>}
        </header>
        <div className="lo-flow-template__content">{children}</div>
        {actions && <footer className="lo-flow-template__actions">{actions}</footer>}
      </main>
    </div>
  );
}
