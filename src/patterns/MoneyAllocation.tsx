import { useId, type ReactNode } from 'react';
import { Button } from '../components/Button';
import { MoneyBucket, type MoneyBucketKind } from '../components/MoneyBucket';

export interface MoneyAllocationValues {
  give: number;
  save: number;
  spend: number;
}

export interface MoneyAllocationLabels {
  available: string;
  fullyAllocated: string;
  left: string;
  over: string;
  note: string;
  confirm: string;
  decrease: (kind: MoneyBucketKind) => string;
  increase: (kind: MoneyBucketKind) => string;
  controls: (kind: MoneyBucketKind) => string;
}

export interface MoneyAllocationProps {
  totalMinor: number;
  values: MoneyAllocationValues;
  currency: string;
  locale?: string;
  minorUnitScale?: number;
  stepMinor?: number;
  icons?: Partial<Record<MoneyBucketKind, ReactNode>>;
  onChange?: (kind: MoneyBucketKind, nextMinor: number) => void;
  onConfirm?: () => void;
  labels?: Partial<MoneyAllocationLabels>;
  disabled?: boolean;
}

const kinds: MoneyBucketKind[] = ['give', 'save', 'spend'];
const defaultLabels: MoneyAllocationLabels = {
  available: 'Available to allocate',
  fullyAllocated: 'Fully allocated',
  left: 'left',
  over: 'over',
  note: 'Give → Save → Spend is the canonical order. Allocation changes presentation only until the application accepts the command.',
  confirm: 'Confirm allocation',
  decrease: (kind) => `Decrease ${kind}`,
  increase: (kind) => `Increase ${kind}`,
  controls: (kind) => `${kind} allocation controls`,
};

function safeMinor(value: number) {
  return Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
}

export function MoneyAllocation({
  totalMinor,
  values,
  currency,
  locale = 'en',
  minorUnitScale = 100,
  stepMinor = 100,
  icons,
  onChange,
  onConfirm,
  labels,
  disabled = false,
}: MoneyAllocationProps) {
  const titleId = useId();
  const text = { ...defaultLabels, ...labels };
  const total = safeMinor(totalMinor);
  const scale = minorUnitScale > 0 ? minorUnitScale : 100;
  const step = Math.max(1, safeMinor(stepMinor));
  const normalized = {
    give: safeMinor(values.give),
    save: safeMinor(values.save),
    spend: safeMinor(values.spend),
  };
  const allocated = normalized.give + normalized.save + normalized.spend;
  const remaining = total - allocated;
  const isBalanced = remaining === 0;
  const format = (minor: number) => new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(minor / scale);

  const update = (kind: MoneyBucketKind, delta: number) => {
    if (!onChange || disabled) return;
    onChange(kind, safeMinor(normalized[kind] + delta));
  };

  return (
    <section className="lo-pattern lo-money-allocation" aria-labelledby={titleId}>
      <div className="lo-money-allocation__header">
        <div>
          <div className="lo-money-allocation__eyebrow">{text.available}</div>
          <h2 id={titleId}>{format(total)}</h2>
        </div>
        <div className="lo-money-allocation__remaining" data-balanced={isBalanced} aria-live="polite">
          {isBalanced ? text.fullyAllocated : `${format(Math.abs(remaining))} ${remaining > 0 ? text.left : text.over}`}
        </div>
      </div>

      <div className="lo-money-allocation__grid">
        {kinds.map((kind) => {
          const value = normalized[kind];
          const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
          return (
            <div className="lo-money-allocation__bucket" key={kind}>
              <MoneyBucket kind={kind} amount={format(value)} percentage={percentage} icon={icons?.[kind]} />
              <div className="lo-money-allocation__stepper" aria-label={text.controls(kind)}>
                <button type="button" onClick={() => update(kind, -step)} disabled={disabled || value <= 0} aria-label={text.decrease(kind)}>−</button>
                <span>{format(value)}</span>
                <button type="button" onClick={() => update(kind, step)} disabled={disabled} aria-label={text.increase(kind)}>+</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="lo-money-allocation__note">{text.note}</div>
      <Button fullWidth onClick={onConfirm} disabled={disabled || !isBalanced}>{text.confirm}</Button>
    </section>
  );
}
