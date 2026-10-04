import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/Card';
import { ChildAvatar } from '../components/ChildAvatar';
import { GoalCard } from '../components/GoalCard';
import { WalletOverview } from '../patterns/compound/WalletOverview';
import { IslandRenderer } from '../visual-world/themes/island/IslandRenderer';

const meta = {
  title: 'Screens/Responsive Matrix',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const widths = [390, 768, 1024, 1440];

export const ChildExperienceMatrix: Story = {
  render: () => (
    <div className="lo-responsive-matrix">
      {widths.map((width) => (
        <section key={width} className="lo-responsive-case">
          <strong>{width}px</strong>
          <div className="lo-responsive-case__viewport" style={{ width }}>
            <div className="lo-responsive-demo">
              <header><div><h1>My Journey</h1><p>What matters now, and how am I growing?</p></div><ChildAvatar name="Malika" size="sm" topTone="lavender" /></header>
              <IslandRenderer state={{
                themeId: 'island',
                profile: width < 600 ? 'immersive' : 'balanced',
                regions: {
                  home: { id: 'home', stage: 2, status: 'growing' },
                  independence: { id: 'independence', stage: 2, status: 'growing' },
                  library: { id: 'library', stage: 3, status: 'complete' },
                  goals: { id: 'goals', stage: 2, status: 'growing' },
                  family: { id: 'family', stage: 2, status: 'growing' },
                },
              }} />
              <div className="lo-responsive-demo__grid">
                <GoalCard title="Finish 4 books" why="I want to get better at reading" current={2.5} target={4} valueLabel="2½ / 4" />
                <WalletOverview balance="1,240 EGP" allocations={{ give: { amount: '120 EGP' }, save: { amount: '820 EGP' }, spend: { amount: '300 EGP' } }} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  ),
};

export const ParentDensityMatrix: Story = {
  render: () => (
    <div className="lo-responsive-matrix">
      {[768, 1024, 1440].map((width) => (
        <section key={width} className="lo-responsive-case">
          <strong>{width}px</strong>
          <div className="lo-responsive-case__viewport" style={{ width }}>
            <div className="lo-parent-responsive-demo">
              <h1>Malika — what changed</h1>
              <div className="lo-parent-metric-grid">
                <Card><span>Today</span><strong>4 of 5 resolved</strong></Card>
                <Card><span>Reminders</span><strong>Fewer this week</strong></Card>
                <Card><span>Recovery</span><strong>Next opportunity</strong></Card>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  ),
};
