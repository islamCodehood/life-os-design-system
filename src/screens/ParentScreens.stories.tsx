import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ChildAvatar } from '../components/ChildAvatar';
import { ProgressBar } from '../components/ProgressBar';
import { ParentScreenTemplate } from '../layouts/ParentScreenTemplate';
import { GraduationEvidencePanel } from '../patterns/compound/GraduationEvidencePanel';
import type { WorldSceneState } from '../visual-world/domain/types';
import { IslandRenderer } from '../visual-world/themes/island/IslandRenderer';
import { parentBrand, parentNavigation, ScreenHeading } from './shared';

const meta = {
  title: 'Screens/Parent',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop1024' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const childWorld: WorldSceneState = {
  themeId: 'island',
  profile: 'focused',
  regions: {
    independence: { id: 'independence', stage: 2, status: 'growing' },
    library: { id: 'library', stage: 3, status: 'complete' },
    goals: { id: 'goals', stage: 2, status: 'growing' },
  },
};

export const ChildOverview: Story = {
  render: () => (
    <ParentScreenTemplate
      brand={parentBrand}
      navigation={parentNavigation}
      activeNavigationId="children"
      header={<ScreenHeading title="Malika" subtitle="Where does she need support—and where should I step back?" trailing={<ChildAvatar name="Malika" skinTone="tan" hair="long" top="lavender" accessory="headband" size="md" />} />}
    >
      <div className="lo-screen-grid lo-screen-grid--3">
        <Card className="lo-parent-signal-card">
          <span>What changed</span>
          <strong>Fewer reminders this week</strong>
          <p>Responsibility completion stayed similar while external reminders decreased.</p>
        </Card>
        <Card className="lo-parent-signal-card">
          <span>Current focus</span>
          <strong>Reading goal</strong>
          <p>2½ of 4 books. The “why” is still visible to her.</p>
        </Card>
        <Card className="lo-parent-signal-card">
          <span>Money</span>
          <strong>Saving steadily</strong>
          <p>800 / 1000 EGP toward the current saving goal.</p>
        </Card>
      </div>

      <section className="lo-screen-grid">
        <Card>
          <h3 className="lo-card-heading">Current journey</h3>
          <IslandRenderer state={childWorld} ariaLabel="Focused parent view of Malika’s world" />
        </Card>
        <Card className="lo-parent-support-card">
          <h3>Support opportunities</h3>
          <div className="lo-screen-note">Chess practice needed two reminders on the last three opportunities.</div>
          <div className="lo-screen-note" data-tone="success">School bag may be ready for less active tracking.</div>
          <Button variant="secondary">Open responsibilities</Button>
        </Card>
      </section>
    </ParentScreenTemplate>
  ),
};

export const Insights: Story = {
  render: () => (
    <ParentScreenTemplate
      brand={parentBrand}
      navigation={parentNavigation}
      activeNavigationId="children"
      header={<ScreenHeading title="Malika · Insights" subtitle="Patterns to help you understand—not a score of the child." />}
    >
      <div className="lo-screen-grid lo-screen-grid--3">
        <Card className="lo-insight-card">
          <span className="lo-insight-card__label">External reminders</span>
          <strong>5 → 2</strong>
          <p>Lower over the last two comparable weeks.</p>
        </Card>
        <Card className="lo-insight-card">
          <span className="lo-insight-card__label">Recovery</span>
          <strong>2 of 2</strong>
          <p>Returned at the next opportunity after confirmed misses.</p>
        </Card>
        <Card className="lo-insight-card">
          <span className="lo-insight-card__label">Self-started</span>
          <strong>7 recent</strong>
          <p>Recorded as child-initiated, not app-initiated.</p>
        </Card>
      </div>

      <Card className="lo-insight-detail">
        <div className="lo-screen-heading">
          <div className="lo-screen-heading__copy">
            <h2>Morning routine</h2>
            <p>Four weeks of recent evidence</p>
          </div>
          <strong>Mostly independent</strong>
        </div>
        <ProgressBar value={18} max={20} label="Known independent opportunities" valueLabel="18 / 20" />
        <div className="lo-screen-note">
          This is evidence about this routine—not a general independence or character score.
        </div>
      </Card>

      <GraduationEvidencePanel
        title="School bag may be ready"
        message="Enough evidence exists to suggest graduation from active daily tracking."
        evidence={[
          { label: 'Observation period', value: '4 weeks' },
          { label: 'Opportunities', value: '20' },
          { label: 'Independent', value: '18' },
          { label: 'External reminders', value: '2' },
        ]}
        primaryAction={{ label: 'Review suggestion' }}
      />
    </ParentScreenTemplate>
  ),
};

export const InsightsLowData: Story = {
  render: () => (
    <ParentScreenTemplate
      brand={parentBrand}
      navigation={parentNavigation}
      activeNavigationId="children"
      header={<ScreenHeading title="Eyad · Insights" subtitle="Recent tracking has been light." />}
    >
      <Card className="lo-insufficient-data">
        <div aria-hidden="true">🌤️</div>
        <div>
          <h2>Not enough recent information</h2>
          <p>Only 3 of the last 8 opportunities have reliable completion and reminder context.</p>
        </div>
      </Card>
      <div className="lo-screen-note">
        We do not display 0%, regression, or a negative trend when evidence is missing.
      </div>
      <Button variant="secondary">View recent records</Button>
    </ParentScreenTemplate>
  ),
};
