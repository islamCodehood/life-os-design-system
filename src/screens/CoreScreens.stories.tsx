import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Avatar } from '../components/Avatar';
import { BottomNavigation } from '../components/BottomNavigation';
import { Card } from '../components/Card';
import { GoalCard } from '../components/GoalCard';
import { SideNavigation } from '../components/SideNavigation';
import { ParentAttentionFeed } from '../patterns/compound/ParentAttentionFeed';
import { StoryTimeline } from '../patterns/compound/StoryTimeline';
import { TodayResponsibilityGroup } from '../patterns/compound/TodayResponsibilityGroup';
import { WorldOverview } from '../patterns/compound/WorldOverview';

const meta = {
  title: 'Screens/Core',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const explorerNav = [
  { id: 'today', label: 'Today', icon: '☀' },
  { id: 'journey', label: 'Journey', icon: '⌁' },
  { id: 'money', label: 'Money', icon: '¤' },
  { id: 'family', label: 'Family', icon: '⌂' },
];

const builderNav = [
  { id: 'today', label: 'Today', icon: '☀' },
  { id: 'journey', label: 'Journey', icon: '⌁' },
  { id: 'goals', label: 'Goals', icon: '◎' },
  { id: 'money', label: 'Money', icon: '¤' },
  { id: 'family', label: 'Family', icon: '⌂' },
];

export const ExplorerToday: Story = {
  parameters: { globals: { experience: 'explorer' } },
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
  parameters: { globals: { experience: 'builder' } },
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
  parameters: { globals: { experience: 'explorer' } },
  render: () => (
    <div className="lo-screen-stage">
      <main className="lo-mobile-screen lo-mobile-screen--wide" data-screen="journey">
        <header className="lo-mobile-screen__hero">
          <div>
            <h1>My Journey</h1>
            <p>How I’m growing — not how much I use the app.</p>
          </div>
        </header>

        <WorldOverview
          title="My World"
          regions={[
            { id: 'path', title: 'Independence Path', state: 'growing', stateLabel: 'Growing', progress: 72, progressLabel: 'Path growth', visual: '🌉', description: 'Growing independence appears here.' },
            { id: 'goals', title: 'Goal Observatory', state: 'available', progress: 55, progressTone: 'goal', visual: '🔭', description: 'Personal goals and milestones.' },
          ]}
        />

        <StoryTimeline
          title="Latest growth"
          entries={[
            { id: 'recovery', kind: 'recovery', kindLabel: 'Recovery', title: 'You came back to reading', description: 'Missed once, then completed at the next opportunity.', occurredLabel: 'Today', visual: '🌱' },
            { id: 'graduated', kind: 'graduation', kindLabel: 'I manage this myself', title: 'Brush teeth', description: 'This no longer needs daily active tracking.', occurredLabel: 'Recently', visual: '✓' },
          ]}
        />

        <div className="lo-mobile-screen__nav"><BottomNavigation items={explorerNav} activeId="journey" /></div>
      </main>
    </div>
  ),
};

export const ParentHome: Story = {
  parameters: { globals: { experience: 'parent' } },
  render: () => (
    <div className="lo-parent-screen">
      <aside className="lo-parent-screen__sidebar">
        <SideNavigation
          activeId="home"
          brand={<><div>Life OS</div><small>Parent mode</small></>}
          items={[
            { id: 'home', label: 'Home' },
            { id: 'children', label: 'Children' },
            { id: 'family', label: 'Family' },
            { id: 'review', label: 'Review' },
            { id: 'settings', label: 'Settings' },
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
              <button type="button">View child →</button>
            </Card>
            <Card className="lo-child-summary">
              <div className="lo-child-summary__head"><Avatar name="Eyad" /><strong>Eyad</strong></div>
              <h3>Recovered at the next opportunity</h3>
              <p>Today: 3 of 4 resolved</p>
              <p>Morning routine: mostly independent</p>
              <button type="button">View child →</button>
            </Card>
          </div>
        </section>

        <WorldOverview
          variant="family"
          title="What we are building together"
          description="Shared progress without contribution ranking."
          regions={[
            { id: 'books', title: 'Book Donation Project', state: 'growing', stateLabel: '14 of 20 books', progress: 70, progressLabel: 'Family goal', visual: '📚', description: 'Everyone can contribute differently.' },
            { id: 'garden', title: 'Family Garden', state: 'available', visual: '🌿', description: 'Meaningful shared moments appear here.' },
          ]}
        />
      </main>
    </div>
  ),
};
