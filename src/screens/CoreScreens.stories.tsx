import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  ArrowRight,
  Compass,
  Heart,
  Home,
  MessageCircle,
  Settings,
  Sun,
  Target,
  Users,
  Wallet,
} from 'lucide-react';
import { Avatar } from '../components/Avatar';
import { BottomNavigation } from '../components/BottomNavigation';
import { Card } from '../components/Card';
import { GoalCard } from '../components/GoalCard';
import { Icon } from '../components/Icon';
import { SideNavigation } from '../components/SideNavigation';
import { ParentAttentionFeed } from '../patterns/compound/ParentAttentionFeed';
import { StoryTimeline } from '../patterns/compound/StoryTimeline';
import { TodayResponsibilityGroup } from '../patterns/compound/TodayResponsibilityGroup';
import { IslandRenderer } from '../visual-world/themes/island/IslandRenderer';
import type { WorldSceneState } from '../visual-world/domain/types';

const meta = {
  title: 'Screens/Core',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const explorerNav = [
  { id: 'today', label: 'Today', icon: <Icon icon={Sun} size="lg" /> },
  { id: 'journey', label: 'Journey', icon: <Icon icon={Compass} size="lg" /> },
  { id: 'money', label: 'Money', icon: <Icon icon={Wallet} size="lg" /> },
  { id: 'family', label: 'Family', icon: <Icon icon={Users} size="lg" /> },
];

const builderNav = [
  { id: 'today', label: 'Today', icon: <Icon icon={Sun} size="lg" /> },
  { id: 'journey', label: 'Journey', icon: <Icon icon={Compass} size="lg" /> },
  { id: 'goals', label: 'Goals', icon: <Icon icon={Target} size="lg" /> },
  { id: 'money', label: 'Money', icon: <Icon icon={Wallet} size="lg" /> },
  { id: 'family', label: 'Family', icon: <Icon icon={Users} size="lg" /> },
];

const journeyWorld: WorldSceneState = {
  themeId: 'island',
  profile: 'immersive',
  title: 'My World',
  regions: {
    home: { id: 'home', stage: 2, status: 'growing' },
    independence: { id: 'independence', stage: 2, status: 'growing' },
    library: { id: 'library', stage: 2, status: 'growing' },
    goals: { id: 'goals', stage: 1, status: 'available' },
    giving: { id: 'giving', stage: 1, status: 'available' },
    money: { id: 'money', stage: 1, status: 'available' },
    family: { id: 'family', stage: 2, status: 'growing' },
  },
  accents: [
    { id: 'reading-recovery', type: 'recovery', regionId: 'library' },
  ],
};

const familyWorld: WorldSceneState = {
  themeId: 'island',
  profile: 'balanced',
  title: 'What we are building together',
  regions: {
    family: { id: 'family', stage: 3, status: 'complete', label: 'Family Garden' },
    giving: { id: 'giving', stage: 2, status: 'growing', label: 'Giving Garden' },
    library: { id: 'library', stage: 2, status: 'growing', label: 'Book Project' },
  },
  accents: [
    { id: 'family-contribution', type: 'family-contribution', regionId: 'family' },
  ],
};

export const ExplorerToday: Story = {
  globals: { experience: 'explorer' },
  render: () => (
    <div className="lo-screen-stage">
      <main className="lo-mobile-screen" data-screen="explorer-today">
        <header className="lo-mobile-screen__hero">
          <div>
            <h1>Good morning, Eyad</h1>
            <p>1 of 4 done today</p>
          </div>
          <Avatar name="Eyad" size="lg" />
        </header>

        <Card className="lo-world-teaser" variant="selected">
          <span className="lo-world-teaser__visual" aria-hidden="true">🏝️</span>
          <div>
            <strong>Island update</strong>
            <span>Your path is nearly ready.</span>
          </div>
        </Card>

        <TodayResponsibilityGroup
          title="Morning"
          items={[
            { id: 'bed', title: 'Make my bed', scheduleLabel: 'Before school' },
            { id: 'teeth', title: 'Brush teeth', status: 'completed', meta: 'Done independently' },
            { id: 'bag', title: 'Prepare school bag' },
          ]}
        />

        <TodayResponsibilityGroup
          title="Growth"
          items={[{ id: 'chess', title: 'Chess practice', meta: '15 minutes' }]}
          footer={<span>That’s all for now. The rest can wait.</span>}
        />

        <div className="lo-mobile-screen__nav"><BottomNavigation items={explorerNav} activeId="today" /></div>
      </main>
    </div>
  ),
};

export const BuilderToday: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <div className="lo-screen-stage">
      <main className="lo-mobile-screen" data-screen="builder-today">
        <header className="lo-mobile-screen__hero">
          <div>
            <h1>Hi, Malika</h1>
            <p>One done • two active • no reminders yet</p>
          </div>
          <Avatar name="Malika" size="lg" />
        </header>

        <TodayResponsibilityGroup
          title="Today"
          items={[
            { id: 'homework', title: 'School homework', status: 'completed', meta: 'Finished before reminder' },
            { id: 'reading', title: 'Reading', meta: '20 minutes' },
            { id: 'chess', title: 'Chess training', meta: 'Skill: Chess' },
          ]}
        />

        <GoalCard
          title="Finish 4 books this month"
          why="I want to get better at reading"
          current={2.5}
          target={4}
          valueLabel="2½ of 4 books"
        />

        <Card className="lo-next-focus" variant="selected">
          <span>Next focus</span>
          <strong>Reading • 20 minutes</strong>
        </Card>

        <div className="lo-mobile-screen__nav"><BottomNavigation items={builderNav} activeId="today" /></div>
      </main>
    </div>
  ),
};

export const Journey: Story = {
  globals: { experience: 'explorer' },
  render: () => (
    <div className="lo-screen-stage">
      <main className="lo-mobile-screen lo-mobile-screen--wide" data-screen="journey">
        <header className="lo-mobile-screen__hero">
          <div>
            <h1>My Journey</h1>
            <p>How I’m growing — not how much I use the app.</p>
          </div>
        </header>

        <IslandRenderer
          state={journeyWorld}
          ariaLabel="Eyad’s growing island with learning, goals, independence and family regions"
        />

        <StoryTimeline
          title="Latest growth"
          entries={[
            { id: 'recovery', kind: 'recovery', kindLabel: 'Recovery', title: 'You came back to reading', description: 'Missed once, then completed at the next opportunity.', occurredLabel: 'Today', visual: '🌱' },
            { id: 'graduated', kind: 'graduation', kindLabel: 'I manage this myself', title: 'Brush teeth', description: 'This no longer needs daily active tracking.', occurredLabel: 'Recently', visual: '🌉' },
          ]}
        />

        <div className="lo-mobile-screen__nav"><BottomNavigation items={explorerNav} activeId="journey" /></div>
      </main>
    </div>
  ),
};

export const ParentHome: Story = {
  globals: { experience: 'parent' },
  render: () => (
    <div className="lo-parent-screen">
      <aside className="lo-parent-screen__sidebar">
        <SideNavigation
          activeId="home"
          brand={<><div>Life OS</div><small>Parent mode</small></>}
          items={[
            { id: 'home', label: 'Home', icon: <Icon icon={Home} size="md" /> },
            { id: 'children', label: 'Children', icon: <Icon icon={Users} size="md" /> },
            { id: 'family', label: 'Family', icon: <Icon icon={Heart} size="md" /> },
            { id: 'review', label: 'Review', icon: <Icon icon={MessageCircle} size="md" /> },
            { id: 'settings', label: 'Settings', icon: <Icon icon={Settings} size="md" /> },
          ]}
        />
      </aside>

      <main className="lo-parent-screen__content">
        <header className="lo-parent-screen__hero">
          <h1>Good evening</h1>
          <p>3 things need your attention. Everything else can wait.</p>
        </header>

        <ParentAttentionFeed
          items={[
            { id: 'job', eyebrow: 'Job review', title: 'Eyad finished: Wash the car', actionLabel: 'Review' },
            { id: 'grad', eyebrow: 'Graduation', title: 'Morning bag preparation may be ready', actionLabel: 'See evidence', tone: 'growth' },
            { id: 'review', eyebrow: 'Weekly Review', title: 'Ready when the family is', actionLabel: 'Open' },
          ]}
        />

        <section className="lo-parent-children">
          <h2>Children — what changed</h2>
          <div className="lo-parent-children__grid">
            <Card className="lo-child-summary">
              <div className="lo-child-summary__head"><Avatar name="Malika" /><strong>Malika</strong></div>
              <h3>Fewer reminders this week</h3>
              <p>Today: 4 of 5 resolved</p>
              <p>Current focus: Reading goal</p>
              <button type="button">View child <Icon icon={ArrowRight} size="sm" mirrorInRtl /></button>
            </Card>
            <Card className="lo-child-summary">
              <div className="lo-child-summary__head"><Avatar name="Eyad" /><strong>Eyad</strong></div>
              <h3>Recovered at the next opportunity</h3>
              <p>Today: 3 of 4 resolved</p>
              <p>Morning routine: mostly independent</p>
              <button type="button">View child <Icon icon={ArrowRight} size="sm" mirrorInRtl /></button>
            </Card>
          </div>
        </section>

        <section className="lo-parent-family-world">
          <header>
            <h2>Family World</h2>
            <p>Shared progress without contribution ranking.</p>
          </header>
          <IslandRenderer
            state={familyWorld}
            ariaLabel="Family island showing the shared garden, giving garden and book project"
          />
        </section>
      </main>
    </div>
  ),
};
