import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { GraduationEvidencePanel } from './GraduationEvidencePanel';
import { JobWorkflow } from './JobWorkflow';
import { ParentAttentionFeed } from './ParentAttentionFeed';
import { StoryTimeline } from './StoryTimeline';
import { TodayResponsibilityGroup } from './TodayResponsibilityGroup';
import { WalletOverview } from './WalletOverview';
import { WeeklyReviewFlow } from './WeeklyReviewFlow';
import { WorldOverview } from './WorldOverview';

const meta = {
  title: 'Patterns/Compound',
  parameters: { layout: 'centered' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
const Phone = ({ children }: React.PropsWithChildren) => <div style={{ width: 390 }}>{children}</div>;

export const TodayGroup: Story = {
  render: () => (
    <Phone>
      <TodayResponsibilityGroup
        title="Morning"
        eyebrow="Today"
        summary="1 of 3 done"
        items={[
          { id: 'bed', title: 'Make my bed', why: 'Take care of my own space', scheduleLabel: 'Before school' },
          { id: 'teeth', title: 'Brush teeth', status: 'completed', meta: 'Done independently' },
          { id: 'bag', title: 'Prepare school bag', status: 'pending' },
        ]}
      />
    </Phone>
  ),
};

export const AttentionFeed: Story = {
  render: () => (
    <div style={{ width: 960 }}>
      <ParentAttentionFeed
        description="Decisions waiting for a parent — not an alarm feed."
        items={[
          { id: 'job', eyebrow: 'Job review', title: 'Eyad submitted: Wash the car', actionLabel: 'Review' },
          { id: 'grad', eyebrow: 'Graduation suggestion', title: 'Morning bag preparation may be ready', tone: 'growth', actionLabel: 'See evidence' },
          { id: 'review', eyebrow: 'Weekly Review', title: 'Ready when the family is', actionLabel: 'Open' },
        ]}
      />
    </div>
  ),
};

export const JobProgress: Story = {
  render: () => (
    <div style={{ width: 430 }}>
      <JobWorkflow
        job={{
          title: 'Wash the car',
          description: 'Dad needs help cleaning the car.',
          paymentLabel: '100 EGP',
          state: 'submitted',
          criteria: ['Outside washed', 'Wheels cleaned', 'Dry afterward'],
        }}
        history={[
          { id: 'offered', label: 'Offered', state: 'complete' },
          { id: 'accepted', label: 'Accepted', state: 'complete' },
          { id: 'submitted', label: 'Submitted for review', detail: 'Waiting for Dad — this delay does not affect you.', state: 'current' },
          { id: 'approved', label: 'Approved', state: 'future' },
          { id: 'credited', label: 'Credited', state: 'future' },
        ]}
      />
    </div>
  ),
};

export const Wallet: Story = {
  render: () => (
    <div style={{ width: 620 }}>
      <WalletOverview
        balance="120 EGP"
        allocations={{
          give: { amount: '20 EGP', percentage: 17, icon: '♡' },
          save: { amount: '70 EGP', percentage: 58, icon: '●' },
          spend: { amount: '30 EGP', percentage: 25, icon: '□' },
        }}
        savingGoal={{ title: 'Saving for a new game', current: 800, target: 1000, valueLabel: '800 / 1000 EGP' }}
        actionLabel="Allocate new income"
      />
    </div>
  ),
};

export const Story: Story = {
  render: () => (
    <div style={{ width: 430 }}>
      <StoryTimeline
        entries={[
          { id: 'r1', kind: 'recovery', kindLabel: 'Recovery', title: 'You came back', description: 'Reading was completed at the next opportunity.', occurredLabel: 'Today', visual: '🌱' },
          { id: 'm1', kind: 'moment', title: 'A thoughtful moment', description: 'Helped a sibling without being asked.', occurredLabel: 'Yesterday', valueTags: ['Family', 'Kindness'] },
          { id: 'g1', kind: 'graduation', kindLabel: 'Graduation', title: 'You manage this yourself now', description: 'Brush teeth moved out of active daily tracking.', occurredLabel: 'Last week', visual: '🌉' },
        ]}
      />
    </div>
  ),
};

export const GraduationEvidence: Story = {
  render: () => (
    <div style={{ width: 520 }}>
      <GraduationEvidencePanel
        title="Morning bag preparation may be ready"
        message="Recent evidence suggests Eyad may no longer need active daily tracking. You decide."
        evidence={[
          { label: 'Recent opportunities', value: '20' },
          { label: 'Independent', value: '18' },
          { label: 'External reminders', value: '2' },
        ]}
        coverageTitle="Recent information is strong"
        coverageDescription="Most recent opportunities have reliable completion/reminder context."
        primaryAction={{ label: 'Graduate responsibility' }}
        secondaryAction={{ label: 'Not yet' }}
      />
    </div>
  ),
};

export const World: Story = {
  render: () => (
    <div style={{ width: 880 }}>
      <WorldOverview
        title="My Journey"
        description="The world reflects meaningful growth; it does not award currency for ordinary responsibilities."
        regions={[
          { id: 'path', title: 'Independence Path', state: 'growing', stateLabel: 'Growing', progress: 72, progressLabel: 'Path growth', visual: '🌉', description: 'Growing independence appears here.' },
          { id: 'goals', title: 'Goal Observatory', state: 'available', progress: 55, progressTone: 'goal', visual: '🔭', description: 'Personal goals and milestones.' },
        ]}
      />
    </div>
  ),
};

export const WeeklyReview: Story = {
  render: () => {
    const [index, setIndex] = useState(0);
    const [response, setResponse] = useState('');
    const prompts = [
      { id: 'proud', prompt: 'What are you proud of?', hint: 'A small thing is enough.' },
      { id: 'hard', prompt: 'What was difficult?' },
      { id: 'focus', prompt: 'What should we focus on next week?' },
    ];
    return (
      <Phone>
        <WeeklyReviewFlow
          prompts={prompts}
          activeIndex={index}
          response={response}
          onResponseChange={setResponse}
          onPrevious={() => setIndex((value) => Math.max(0, value - 1))}
          onNext={() => { setIndex((value) => Math.min(prompts.length - 1, value + 1)); setResponse(''); }}
          onFinish={() => undefined}
          onSkip={() => undefined}
        />
      </Phone>
    );
  },
};
