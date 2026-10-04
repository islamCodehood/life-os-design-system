import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../components/Button';
import { ChildAvatar } from '../components/ChildAvatar';
import { ChildScreenTemplate } from '../layouts/ChildScreenTemplate';
import { FlowScreenTemplate } from '../layouts/FlowScreenTemplate';
import { GraduationMilestone } from '../patterns/GraduationMilestone';
import { GraduationEvidencePanel } from '../patterns/compound/GraduationEvidencePanel';
import { StoryTimeline } from '../patterns/compound/StoryTimeline';
import { WeeklyReviewFlow } from '../patterns/compound/WeeklyReviewFlow';
import type { WorldSceneState } from '../visual-world/domain/types';
import { IslandRenderer } from '../visual-world/themes/island/IslandRenderer';
import { childNavigation, explorerNavigation, ScreenHeading } from './shared';

const meta = {
  title: 'Screens/Family Story Review',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile390' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const familyWorld: WorldSceneState = {
  themeId: 'island',
  profile: 'balanced',
  title: 'What we build together',
  regions: {
    family: { id: 'family', stage: 3, status: 'complete', label: 'Family Garden', compactLabel: 'Family' },
    giving: { id: 'giving', stage: 2, status: 'growing', label: 'Giving Garden', compactLabel: 'Giving' },
    library: { id: 'library', stage: 2, status: 'growing', label: 'Book Project', compactLabel: 'Books' },
  },
  accents: [
    { id: 'family', type: 'family-contribution', regionId: 'family' },
    { id: 'kind', type: 'kindness', regionId: 'giving' },
  ],
};

export const FamilyWorld: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Family" subtitle="What are we building together?" trailing={<ChildAvatar name="Eyad" top="sky" size="sm" />} />}
      navigation={explorerNavigation}
      activeNavigationId="family"
      width="wide"
    >
      <IslandRenderer
        state={familyWorld}
        ariaLabel="Family world with shared garden, giving garden and book project"
      />
      <div className="lo-screen-note">
        Everyone can contribute differently. There are no contribution rankings.
      </div>
    </ChildScreenTemplate>
  ),
};

export const StoryAndMoments: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="My Story" subtitle="Meaningful things that happened—not a score." />}
      navigation={childNavigation}
      activeNavigationId="journey"
    >
      <StoryTimeline
        entries={[
          {
            id: 'moment',
            kind: 'moment',
            title: 'A thoughtful moment',
            description: 'Helped a sibling with a difficult puzzle without being asked.',
            occurredLabel: 'Today',
            authorName: 'Dad',
            valueTags: ['Family', 'Kindness', 'Initiative'],
            visual: '💛',
          },
          {
            id: 'recovery',
            kind: 'recovery',
            title: 'You came back',
            description: 'Reading was completed at the next opportunity.',
            occurredLabel: 'Yesterday',
            visual: '🌱',
          },
          {
            id: 'graduation',
            kind: 'graduation',
            title: 'You manage this yourself now',
            description: 'Brush teeth moved out of daily active tracking.',
            occurredLabel: 'Last week',
            visual: '🌉',
          },
        ]}
      />
    </ChildScreenTemplate>
  ),
};

export const WeeklyReview: Story = {
  render: () => {
    const prompts = [
      { id: 'proud', prompt: 'What are you proud of?', hint: 'A small thing is enough.' },
      { id: 'hard', prompt: 'What felt difficult?' },
      { id: 'focus', prompt: 'What should we focus on next week?' },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [response, setResponse] = useState('');
    return (
      <FlowScreenTemplate
        eyebrow="Weekly Review"
        title="Our Week"
        description="About 15 minutes together. This is a conversation, not a performance review."
        progressLabel="Family ritual"
        visual="☕"
      >
        <WeeklyReviewFlow
          prompts={prompts}
          activeIndex={activeIndex}
          response={response}
          onResponseChange={setResponse}
          onPrevious={() => setActiveIndex((value) => Math.max(0, value - 1))}
          onNext={() => {
            setActiveIndex((value) => Math.min(prompts.length - 1, value + 1));
            setResponse('');
          }}
          onFinish={() => undefined}
          onSkip={() => undefined}
        />
      </FlowScreenTemplate>
    );
  },
};

export const GraduationChild: Story = {
  render: () => (
    <FlowScreenTemplate
      eyebrow="A big step"
      title="You manage this yourself now"
      description="Prepare school bag is leaving your daily missions because you no longer need active tracking."
      visual="🌉"
      actions={<Button>Continue to my journey</Button>}
    >
      <GraduationMilestone
        mode="celebration"
        title="Prepare school bag"
        message="The progress stays in your story. The daily mission goes away."
      />
      <div className="lo-screen-note">
        Your Independence Path has changed permanently. This is not XP or a level-up.
      </div>
    </FlowScreenTemplate>
  ),
};

export const GraduationParentDecision: Story = {
  parameters: { viewport: { defaultViewport: 'tablet768' } },
  render: () => (
    <FlowScreenTemplate
      eyebrow="Parent decision"
      title="Morning bag preparation may be ready"
      description="The system is suggesting less active tracking. You still decide."
    >
      <GraduationEvidencePanel
        title="Recent evidence supports a graduation suggestion"
        message="Eyad has usually prepared the bag without external reminders over the recent observation period."
        evidence={[
          { label: 'Recent opportunities', value: '20' },
          { label: 'Independent', value: '18' },
          { label: 'External reminders', value: '2' },
          { label: 'Data coverage', value: 'Strong' },
        ]}
        coverageTitle="Enough recent information"
        coverageDescription="Recent opportunities have reliable outcome and reminder context."
        primaryAction={{ label: 'Graduate responsibility' }}
        secondaryAction={{ label: 'Not yet' }}
      />
    </FlowScreenTemplate>
  ),
};
