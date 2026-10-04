import type { ReactNode } from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { MoneyBucket } from '../../components/MoneyBucket';
import { ProgressBar } from '../../components/ProgressBar';

export interface WalletAllocationDisplay {
  give: { amount: string; percentage?: number; icon?: ReactNode };
  save: { amount: string; percentage?: number; icon?: ReactNode };
  spend: { amount: string; percentage?: number; icon?: ReactNode };
}

export interface WalletSavingGoal {
  title: string;
  current: number;
  target: number;
  valueLabel?: string;
}

export interface WalletOverviewProps {
  title?: string;
  balanceLabel?: string;
  balance: string;
  allocations: WalletAllocationDisplay;
  savingGoal?: WalletSavingGoal;
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * Displays recognized child-owned money. Values are supplied by the wallet domain;
 * this pattern never calculates or mutates the ledger.
 */
export function WalletOverview({
  title = 'My Money',
  balanceLabel = 'I have',
  balance,
  allocations,
  savingGoal,
  actionLabel,
  onAction,
}: WalletOverviewProps) {
  return (
    <section className="lo-compound lo-wallet-overview">
      <header className="lo-wallet-overview__header">
        <div>
          <div className="lo-wallet-overview__eyebrow">{balanceLabel}</div>
          <h2>{balance}</h2>
        </div>
        <div className="lo-wallet-overview__title">{title}</div>
      </header>

      <div className="lo-wallet-overview__buckets">
        <MoneyBucket kind="give" {...allocations.give} />
        <MoneyBucket kind="save" {...allocations.save} />
        <MoneyBucket kind="spend" {...allocations.spend} />
      </div>

      {savingGoal && (
        <Card className="lo-wallet-overview__goal">
          <strong>{savingGoal.title}</strong>
          <ProgressBar
            value={savingGoal.current}
            max={savingGoal.target}
            tone="save"
            valueLabel={savingGoal.valueLabel ?? `${savingGoal.current} of ${savingGoal.target}`}
          />
        </Card>
      )}

      {actionLabel && <Button variant="secondary" onClick={onAction}>{actionLabel}</Button>}
    </section>
  );
}
