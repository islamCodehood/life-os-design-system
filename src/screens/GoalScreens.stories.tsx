import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Chip } from '../components/Chip';
import { ChildAvatar } from '../components/ChildAvatar';
import { EmptyState } from '../components/EmptyState';
import { GoalCard } from '../components/GoalCard';
import { SelectField } from '../components/SelectField';
import { TextArea } from '../components/TextArea';
import { TextField } from '../components/TextField';
import { ChildScreenTemplate } from '../layouts/ChildScreenTemplate';
import { FlowScreenTemplate } from '../layouts/FlowScreenTemplate';
import { childNavigation, ScreenHeading } from './shared';

const meta = {
  title: 'Screens/Goals',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile390' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const GoalHome: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Goals" subtitle="What am I working toward?" trailing={<ChildAvatar name="Malika" hair="long" top="lavender" accessory="headband" size="sm" />} />}
      navigation={childNavigation}
      activeNavigationId="goals"
    >
      <GoalCard
        title="Finish 4 books this month"
        why="I want to get better at reading"
        current={2.5}
        target={4}
        valueLabel="2½ of 4 books"
      />
      <GoalCard
        title="Reach chess puzzle set 8"
        why="I want to see tactics faster"
        current={6}
        target={8}
        valueLabel="Set 6 of 8"
      />
      <Button variant="secondary">Create a goal</Button>
    </ChildScreenTemplate>
  ),
};

export const GoalCreation: Story = {
  render: () => (
    <FlowScreenTemplate
      eyebrow="New goal"
      title="What do you want to do?"
      description="Start with meaning before dates and numbers."
      progressLabel="1 of 2"
      actions={<><Button variant="secondary">Cancel</Button><Button>Continue</Button></>}
    >
      <TextField label="My goal" defaultValue="Finish 4 books this month" />
      <TextArea
        label="Why does it matter?"
        defaultValue="I want to get better at reading."
        hint="This stays visible on the goal later."
      />
      <div className="lo-screen-chip-row">
        <Chip selected>Growth</Chip>
        <Chip>Project</Chip>
        <Chip>Saving</Chip>
        <Chip>Family</Chip>
      </div>
      <SelectField
        label="Target"
        defaultValue="4-books"
        options={[
          { value: '4-books', label: '4 books' },
          { value: 'custom', label: 'Choose another target' },
        ]}
      />
    </FlowScreenTemplate>
  ),
};

export const GoalDetails: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Reading goal" subtitle="Your plan can change without erasing the journey." />}
      navigation={childNavigation}
      activeNavigationId="goals"
    >
      <GoalCard
        title="Finish 4 books this month"
        why="I want to get better at reading"
        current={2.5}
        target={4}
        valueLabel="2½ of 4 books"
      />
      <Card className="lo-goal-detail-card">
        <span>Next step</span>
        <strong>Finish the last 5 chapters of The Wild Robot</strong>
      </Card>
      <section className="lo-screen-section">
        <header><h2>Journey</h2></header>
        <div className="lo-screen-stack">
          <div className="lo-screen-note" data-tone="success">Book 2 finished • last week</div>
          <div className="lo-screen-note">Goal revised from 3 books to 4 • two weeks ago</div>
        </div>
      </section>
    </ChildScreenTemplate>
  ),
};

export const CompletedGoal: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Goal complete" subtitle="The progress stays part of your story." />}
      navigation={childNavigation}
      activeNavigationId="goals"
    >
      <GoalCard
        title="Finish 4 books this month"
        why="I wanted to get better at reading"
        current={4}
        target={4}
        valueLabel="4 of 4 books"
      />
      <Card variant="selected" className="lo-goal-celebration">
        <div aria-hidden="true">✨</div>
        <strong>You reached the goal.</strong>
        <span>What helped you keep going?</span>
      </Card>
    </ChildScreenTemplate>
  ),
};

export const TargetDatePassed: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="The target date passed" subtitle="That does not make the goal a failure." />}
      navigation={childNavigation}
      activeNavigationId="goals"
    >
      <GoalCard
        title="Finish 4 books"
        why="I want to get better at reading"
        current={3}
        target={4}
        valueLabel="3 of 4 books"
      />
      <Card className="lo-neutral-decision-card">
        <strong>What should happen next?</strong>
        <div className="lo-screen-chip-row">
          <Button size="sm">Continue</Button>
          <Button size="sm" variant="secondary">Extend date</Button>
          <Button size="sm" variant="secondary">Revise goal</Button>
          <Button size="sm" variant="quiet">Close + reflect</Button>
        </div>
      </Card>
    </ChildScreenTemplate>
  ),
};

export const RevisedGoal: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Goal updated" subtitle="Revision history keeps the journey honest." />}
      navigation={childNavigation}
      activeNavigationId="goals"
    >
      <GoalCard
        title="Finish 4 books this month"
        why="I want to get better at reading"
        current={2.5}
        target={4}
        valueLabel="2½ of 4 books"
      />
      <div className="lo-screen-note">
        Revised from 3 books to 4 after choosing a shorter fourth book. Earlier progress is unchanged.
      </div>
    </ChildScreenTemplate>
  ),
};

export const EmptyGoals: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Goals" subtitle="You do not need a goal all the time." />}
      navigation={childNavigation}
      activeNavigationId="goals"
    >
      <EmptyState
        visual="🔭"
        title="Nothing you are working toward here yet"
        description="When something matters to you, you can turn it into a goal."
        actionLabel="Create a goal"
      />
    </ChildScreenTemplate>
  ),
};
