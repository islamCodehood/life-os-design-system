import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/Card';
import { ChildAvatar } from '../components/ChildAvatar';
import { GoalCard } from '../components/GoalCard';
import { ChildScreenTemplate } from '../layouts/ChildScreenTemplate';
import { ParentScreenTemplate } from '../layouts/ParentScreenTemplate';
import { WalletOverview } from '../patterns/compound/WalletOverview';
import type { WorldSceneState } from '../visual-world/domain/types';
import { IslandRenderer } from '../visual-world/themes/island/IslandRenderer';
import { childNavigation, parentBrand, parentNavigation, ScreenHeading } from '../screens/shared';

const meta = {
  title: 'Contracts/Responsive Screens',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const familyState: WorldSceneState = {
  themeId: 'island',
  profile: 'balanced',
  regions: {
    family: { id: 'family', stage: 3, status: 'complete' },
    giving: { id: 'giving', stage: 2, status: 'growing' },
    library: { id: 'library', stage: 2, status: 'growing', label: 'Book Project', compactLabel: 'Books' },
  },
};

export const Mobile390: Story = {
  parameters: { viewport: { defaultViewport: 'mobile390' } },
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="My Money" subtitle="What do I want my money to do?" trailing={<ChildAvatar name="Malika" hair="long" top="lavender" size="sm" />} />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <WalletOverview
        balance="120 EGP"
        allocations={{
          give: { amount: '20 EGP', percentage: 17 },
          save: { amount: '70 EGP', percentage: 58 },
          spend: { amount: '30 EGP', percentage: 25 },
        }}
        savingGoal={{ title: 'Saving for a new game', current: 800, target: 1000, valueLabel: '800 / 1000 EGP' }}
      />
    </ChildScreenTemplate>
  ),
};

export const Tablet768: Story = {
  parameters: { viewport: { defaultViewport: 'tablet768' } },
  render: () => (
    <ChildScreenTemplate
      width="wide"
      header={<ScreenHeading title="Family World" subtitle="Shared progress without ranking children." />}
      navigation={childNavigation}
      activeNavigationId="family"
    >
      <IslandRenderer state={familyState} />
      <div className="lo-screen-grid">
        <GoalCard title="Book Donation Project" why="Share books we have finished" current={14} target={20} valueLabel="14 / 20 books" />
        <Card className="lo-parent-signal-card"><span>Latest shared moment</span><strong>Everyone helped prepare dinner</strong><p>No contribution percentages are shown.</p></Card>
      </div>
    </ChildScreenTemplate>
  ),
};

export const Desktop1024: Story = {
  parameters: { viewport: { defaultViewport: 'desktop1024' } },
  render: () => (
    <ParentScreenTemplate
      brand={parentBrand}
      navigation={parentNavigation}
      activeNavigationId="children"
      header={<ScreenHeading title="Malika" subtitle="Where does she need support—and where should I step back?" />}
    >
      <div className="lo-screen-grid lo-screen-grid--3">
        <Card className="lo-parent-signal-card"><span>What changed</span><strong>Fewer reminders</strong><p>Comparable completion with less prompting.</p></Card>
        <Card className="lo-parent-signal-card"><span>Current focus</span><strong>Reading goal</strong><p>2½ / 4 books.</p></Card>
        <Card className="lo-parent-signal-card"><span>Money</span><strong>Saving steadily</strong><p>800 / 1000 EGP.</p></Card>
      </div>
    </ParentScreenTemplate>
  ),
};

export const Desktop1440: Story = {
  parameters: { viewport: { defaultViewport: 'desktop1440' } },
  render: () => (
    <ParentScreenTemplate
      brand={parentBrand}
      navigation={parentNavigation}
      activeNavigationId="children"
      header={<ScreenHeading title="Malika · Insights" subtitle="Patterns and evidence—not a child score." />}
    >
      <div className="lo-screen-grid lo-screen-grid--3">
        <Card className="lo-insight-card"><span className="lo-insight-card__label">External reminders</span><strong>5 → 2</strong><p>Lower in comparable recent weeks.</p></Card>
        <Card className="lo-insight-card"><span className="lo-insight-card__label">Recovery</span><strong>2 of 2</strong><p>Returned at the next opportunity.</p></Card>
        <Card className="lo-insight-card"><span className="lo-insight-card__label">Self-started</span><strong>7 recent</strong><p>Recorded as child-initiated.</p></Card>
      </div>
      <IslandRenderer
        state={{
          themeId: 'island',
          profile: 'focused',
          regions: {
            independence: { id: 'independence', stage: 2, status: 'growing' },
            library: { id: 'library', stage: 3, status: 'complete' },
            goals: { id: 'goals', stage: 2, status: 'growing' },
          },
        }}
      />
    </ParentScreenTemplate>
  ),
};
