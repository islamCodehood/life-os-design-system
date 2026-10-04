import type { ReactNode } from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { TextArea } from '../../components/TextArea';

export interface WeeklyReviewPrompt {
  id: string;
  prompt: string;
  hint?: ReactNode;
}

export interface WeeklyReviewFlowLabels {
  step: (current: number, total: number) => string;
  previous: string;
  next: string;
  finish: string;
  skip: string;
}

export interface WeeklyReviewFlowProps {
  title?: string;
  description?: ReactNode;
  prompts: WeeklyReviewPrompt[];
  activeIndex: number;
  response: string;
  onResponseChange?: (value: string) => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
  onSkip?: () => void;
  labels?: Partial<WeeklyReviewFlowLabels>;
}

const defaultLabels: WeeklyReviewFlowLabels = {
  step: (current, total) => `Question ${current} of ${total}`,
  previous: 'Previous',
  next: 'Next',
  finish: 'Finish review',
  skip: 'Skip this week',
};

/** Controlled family-conversation flow. Skipping is neutral and has no child-performance effect. */
export function WeeklyReviewFlow({
  title = 'Our Week',
  description = 'A short family conversation, not another score.',
  prompts,
  activeIndex,
  response,
  onResponseChange,
  onPrevious,
  onNext,
  onFinish,
  onSkip,
  labels,
}: WeeklyReviewFlowProps) {
  const text = { ...defaultLabels, ...labels };
  const safeIndex = Math.min(Math.max(activeIndex, 0), Math.max(prompts.length - 1, 0));
  const current = prompts[safeIndex];
  const isLast = safeIndex === prompts.length - 1;

  return (
    <section className="lo-compound lo-weekly-review">
      <header className="lo-weekly-review__header">
        <h2>{title}</h2>
        {description && <div>{description}</div>}
      </header>

      {current ? (
        <Card className="lo-weekly-review__card">
          <div className="lo-weekly-review__step">{text.step(safeIndex + 1, prompts.length)}</div>
          <TextArea
            label={current.prompt}
            hint={current.hint}
            value={response}
            onChange={(event) => onResponseChange?.(event.currentTarget.value)}
          />
          <div className="lo-weekly-review__actions">
            <Button variant="secondary" onClick={onPrevious} disabled={safeIndex === 0}>{text.previous}</Button>
            <Button onClick={isLast ? onFinish : onNext}>{isLast ? text.finish : text.next}</Button>
          </div>
        </Card>
      ) : (
        <Card variant="soft">No review prompts are configured.</Card>
      )}

      {onSkip && <Button variant="quiet" onClick={onSkip}>{text.skip}</Button>}
    </section>
  );
}
