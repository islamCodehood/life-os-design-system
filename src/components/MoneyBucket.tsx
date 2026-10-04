import type { ReactNode } from 'react';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';

export type MoneyBucketKind = 'give' | 'save' | 'spend';
export interface MoneyBucketProps { kind: MoneyBucketKind; amount: string; percentage?: number; icon?: ReactNode }
const labels: Record<MoneyBucketKind, string> = { give: 'Give', save: 'Save', spend: 'Spend' };

export function MoneyBucket({ kind, amount, percentage, icon }: MoneyBucketProps) {
  return (
    <Card className="lo-money-bucket" data-kind={kind}>
      {icon && <div className="lo-money-bucket__icon" aria-hidden="true">{icon}</div>}
      <div className="lo-money-bucket__label">{labels[kind]}</div>
      <div className="lo-money-bucket__amount">{amount}</div>
      {percentage !== undefined && <ProgressBar value={percentage} valueLabel={`${percentage}%`} tone={kind} />}
    </Card>
  );
}
