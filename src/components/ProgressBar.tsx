import type { CSSProperties } from 'react';

export type ProgressTone = 'default' | 'learning' | 'goal' | 'family' | 'milestone' | 'give' | 'save' | 'spend';
export interface ProgressBarProps { value: number; max?: number; label?: string; valueLabel?: string; tone?: ProgressTone }

export function ProgressBar({ value, max = 100, label, valueLabel, tone = 'default' }: ProgressBarProps) {
  const safeMax = max <= 0 ? 1 : max;
  const percent = Math.max(0, Math.min(100, (value / safeMax) * 100));
  return (
    <div className="lo-progress" data-tone={tone}>
      {(label || valueLabel) && <div className="lo-progress__meta"><span>{label}</span><span>{valueLabel ?? `${Math.round(percent)}%`}</span></div>}
      <div className="lo-progress__track" role="progressbar" aria-label={label ?? 'Progress'} aria-valuemin={0} aria-valuemax={max} aria-valuenow={Math.min(max, Math.max(0, value))}>
        <div className="lo-progress__fill" style={{ '--lo-progress-value': `${percent}%` } as CSSProperties} />
      </div>
    </div>
  );
}
