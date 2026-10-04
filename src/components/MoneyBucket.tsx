import type { ReactNode } from 'react';
import { Heart, PiggyBank, ShoppingBag } from 'lucide-react';
import { Card } from './Card';
import { Icon } from './Icon';
import { ProgressBar } from './ProgressBar';

export type MoneyBucketKind = 'give' | 'save' | 'spend';

export interface MoneyBucketProps {
  kind: MoneyBucketKind;
  amount: string;
  percentage?: number;
  icon?: ReactNode;
}

const labels: Record<MoneyBucketKind, string> = {
  give: 'Give',
  save: 'Save',
  spend: 'Spend',
};

const defaultIcons = {
  give: Heart,
  save: PiggyBank,
  spend: ShoppingBag,
} as const;

export function MoneyBucket({ kind, amount, percentage, icon }: MoneyBucketProps) {
  return (
    <Card className="lo-money-bucket" data-kind={kind}>
      <div className="lo-money-bucket__icon" aria-hidden="true">
        {icon ?? <Icon icon={defaultIcons[kind]} size="lg" />}
      </div>
      <div className="lo-money-bucket__label">{labels[kind]}</div>
      <div className="lo-money-bucket__amount">{amount}</div>
      {percentage !== undefined && <ProgressBar value={percentage} valueLabel={`${percentage}%`} tone={kind} />}
    </Card>
  );
}
