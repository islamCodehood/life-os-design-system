import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Clock3 } from 'lucide-react';
import { Card } from '../components/Card';
import { ChildAvatar } from '../components/ChildAvatar';
import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';
import { ChildScreenTemplate } from '../layouts/ChildScreenTemplate';
import { FlowScreenTemplate } from '../layouts/FlowScreenTemplate';
import { MoneyAllocation, type MoneyAllocationValues } from '../patterns/MoneyAllocation';
import { WalletOverview } from '../patterns/compound/WalletOverview';
import { childNavigation, ScreenHeading } from './shared';

const meta = {
  title: 'Screens/Money',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile390' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const allocations = {
  give: { amount: '20 EGP', percentage: 17 },
  save: { amount: '70 EGP', percentage: 58 },
  spend: { amount: '30 EGP', percentage: 25 },
};

export const MoneyHome: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="My Money" subtitle="What do I want my money to do?" trailing={<ChildAvatar name="Malika" hair="long" top="lavender" size="sm" />} />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <WalletOverview
        balance="120 EGP"
        allocations={allocations}
        savingGoal={{
          title: 'Saving for a new game',
          current: 800,
          target: 1000,
          valueLabel: '800 / 1000 EGP',
        }}
        actionLabel="Allocate new income"
      />

      <section className="lo-screen-section">
        <header><h2>Recent</h2></header>
        <div className="lo-screen-stack">
          <Card className="lo-ledger-row">
            <div><strong>Job income</strong><span>Wash the car</span></div>
            <strong>+100 EGP</strong>
          </Card>
          <Card className="lo-ledger-row">
            <div><strong>Save</strong><span>Game goal</span></div>
            <strong>40 EGP</strong>
          </Card>
        </div>
      </section>
    </ChildScreenTemplate>
  ),
};

export const AllocateIncome: Story = {
  render: () => {
    const [values, setValues] = useState<MoneyAllocationValues>({
      give: 1000,
      save: 4000,
      spend: 5000,
    });
    return (
      <FlowScreenTemplate
        eyebrow="New income"
        title="What do you want this money to do?"
        description="Choose how to use 100 EGP. There is no required percentage."
        progressLabel="Give → Save → Spend"
        visual="💰"
      >
        <MoneyAllocation
          totalMinor={10000}
          values={values}
          currency="EGP"
          stepMinor={500}
          onChange={(kind, nextMinor) => setValues((current) => ({
            ...current,
            [kind]: nextMinor,
          }))}
        />
      </FlowScreenTemplate>
    );
  },
};

export const NoMoneyYet: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="My Money" subtitle="Give, save and spend real money when you have some." />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <EmptyState
        visual="🌱"
        title="No money here yet"
        description="Allowance, gifts or approved paid jobs can appear here later. Normal responsibilities are never paid."
      />
    </ChildScreenTemplate>
  ),
};

export const OfflineAllocationPending: Story = {
  render: () => (
    <FlowScreenTemplate
      eyebrow="Saved offline"
      title="Your choice is safely recorded"
      description="The allocation will become canonical after the device reconnects and the command is accepted."
      visual={<Icon icon={Clock3} size="xl" />}
    >
      <div className="lo-screen-note" data-tone="warning">
        Waiting to sync. Your displayed wallet balance has not been changed yet.
      </div>
      <MoneyAllocation
        totalMinor={10000}
        values={{ give: 1000, save: 4000, spend: 5000 }}
        currency="EGP"
        disabled
      />
    </FlowScreenTemplate>
  ),
};

export const InvalidAllocation: Story = {
  render: () => (
    <FlowScreenTemplate
      eyebrow="Allocation"
      title="There is a little too much assigned"
      description="Nothing is lost. Adjust the buckets until they match the available amount."
    >
      <MoneyAllocation
        totalMinor={12000}
        values={{ give: 1000, save: 8000, spend: 4000 }}
        currency="EGP"
        stepMinor={500}
      />
    </FlowScreenTemplate>
  ),
};
