import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import {
  ArrowLeft,
  BriefcaseBusiness,
  Check,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PiggyBank,
  Plus,
  Settings,
  Sparkles,
  Sun,
  Target,
  Users,
  Wallet,
} from 'lucide-react';
import { Avatar } from '../components/Avatar';
import { BottomNavigation } from '../components/BottomNavigation';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ChildAvatar } from '../components/ChildAvatar';
import { Chip } from '../components/Chip';
import { GoalCard } from '../components/GoalCard';
import { Icon } from '../components/Icon';
import { ProgressBar } from '../components/ProgressBar';
import { SelectField } from '../components/SelectField';
import { SideNavigation } from '../components/SideNavigation';
import { TextArea } from '../components/TextArea';
import { TextField } from '../components/TextField';
import { GraduationMilestone } from '../patterns/GraduationMilestone';
import { JobCard } from '../patterns/JobCard';
import { MoneyAllocation, type MoneyAllocationValues } from '../patterns/MoneyAllocation';
import { GraduationEvidencePanel } from '../patterns/compound/GraduationEvidencePanel';
import { JobWorkflow } from '../patterns/compound/JobWorkflow';
import { StoryTimeline } from '../patterns/compound/StoryTimeline';
import { WalletOverview } from '../patterns/compound/WalletOverview';
import { WeeklyReviewFlow } from '../patterns/compound/WeeklyReviewFlow';
import { IslandRenderer } from '../visual-world/themes/island/IslandRenderer';
import type { WorldSceneState } from '../visual-world/domain/types';

const meta = {
  title: 'Screens/Product',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const nav = [
  { id: 'today', label: 'Today', icon: <Icon icon={Sun} size="lg" /> },
  { id: 'journey', label: 'Journey', icon: <Icon icon={Compass} size="lg" /> },
  { id: 'goals', label: 'Goals', icon: <Icon icon={Target} size="lg" /> },
  { id: 'money', label: 'Money', icon: <Icon icon={Wallet} size="lg" /> },
  { id: 'family', label: 'Family', icon: <Icon icon={Users} size="lg" /> },
];

const familyWorld: WorldSceneState = {
  themeId: 'island',
  profile: 'balanced',
  regions: {
    family: { id: 'family', stage: 3, status: 'complete' },
    giving: { id: 'giving', stage: 2, status: 'growing' },
    library: { id: 'library', stage: 2, status: 'growing', label: 'Book Project', compactLabel: 'Books' },
  },
  accents: [{ id: 'family', type: 'family-contribution', regionId: 'family' }],
};

function MobileScreen({
  title,
  subtitle,
  active,
  children,
  avatar,
  width = 390,
}: React.PropsWithChildren<{
  title: string;
  subtitle?: string;
  active?: string;
  avatar?: React.ReactNode;
  width?: number;
}>) {
  return (
    <div className="lo-screen-stage">
      <main className="lo-mobile-screen lo-product-mobile" style={{ maxWidth: width }}>
        <header className="lo-product-header">
          <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
          {avatar}
        </header>
        {children}
        {active && <div className="lo-mobile-screen__nav"><BottomNavigation items={nav} activeId={active} /></div>}
      </main>
    </div>
  );
}

function ParentShell({ title, subtitle, children, active = 'children' }: React.PropsWithChildren<{ title: string; subtitle?: string; active?: string }>) {
  return (
    <div className="lo-parent-screen">
      <aside className="lo-parent-screen__sidebar">
        <SideNavigation
          activeId={active}
          brand={<><div>Life OS</div><small>Parent mode</small></>}
          items={[
            { id: 'home', label: 'Home', icon: <Icon icon={Home} /> },
            { id: 'children', label: 'Children', icon: <Icon icon={Users} /> },
            { id: 'family', label: 'Family', icon: <Icon icon={Heart} /> },
            { id: 'review', label: 'Review', icon: <Icon icon={MessageCircle} /> },
            { id: 'settings', label: 'Settings', icon: <Icon icon={Settings} /> },
          ]}
        />
      </aside>
      <main className="lo-parent-screen__content">
        <header className="lo-parent-screen__hero">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </header>
        {children}
      </main>
    </div>
  );
}

export const MoneyHome: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <MobileScreen title="My Money" subtitle="What do I want my money to do?" active="money" avatar={<ChildAvatar name="Malika" size="sm" topTone="lavender" />}>
      <WalletOverview
        balance="1,240 EGP"
        allocations={{
          give: { amount: '120 EGP', percentage: 10 },
          save: { amount: '820 EGP', percentage: 66 },
          spend: { amount: '300 EGP', percentage: 24 },
        }}
        savingGoal={{ title: 'New bicycle', current: 820, target: 1600, valueLabel: '820 / 1,600 EGP' }}
        actionLabel="Allocate new income"
      />
      <Card className="lo-product-callout" variant="soft">
        <span aria-hidden="true">💡</span>
        <div><strong>Money is a tool.</strong><p>You choose what to give, save, and spend.</p></div>
      </Card>
    </MobileScreen>
  ),
};

export const AllocateIncome: Story = {
  globals: { experience: 'builder' },
  render: () => {
    const [values, setValues] = useState<MoneyAllocationValues>({ give: 1000, save: 5000, spend: 4000 });
    return (
      <MobileScreen title="Allocate 100 EGP" subtitle="What do you want this money to do?">
        <MoneyAllocation
          totalMinor={10000}
          values={values}
          currency="EGP"
          stepMinor={500}
          onChange={(kind, nextMinor) => setValues((current) => ({ ...current, [kind]: nextMinor }))}
        />
      </MobileScreen>
    );
  },
};

export const JobsList: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <MobileScreen title="Jobs" subtitle="Extra work with agreed pay — separate from normal responsibilities." active="money">
      <div className="lo-product-stack">
        <JobCard title="Wash the car" description="Dad needs help cleaning the car." paymentLabel="100 EGP" dueLabel="Saturday afternoon" state="offered" visual="🚗" primaryAction={{ label: 'View job' }} />
        <JobCard title="Sort old books" description="Prepare a donation box." paymentLabel="60 EGP" state="in-progress" visual="📚" primaryAction={{ label: 'Continue' }} />
        <JobCard title="Water rooftop plants" paymentLabel="40 EGP" state="credited" visual="🌿" />
      </div>
    </MobileScreen>
  ),
};

export const JobDetailsOffer: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <MobileScreen title="Job offer" subtitle="Know the agreement before you accept.">
      <JobCard
        title="Wash the car"
        description="This is extra work, not one of your normal family responsibilities."
        paymentLabel="100 EGP"
        dueLabel="Saturday afternoon"
        criteria={['Outside washed', 'Wheels cleaned', 'Dry afterward']}
        visual="🚗"
        primaryAction={{ label: 'Accept job' }}
        secondaryAction={{ label: 'Maybe later' }}
      />
    </MobileScreen>
  ),
};

export const JobSubmitted: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <MobileScreen title="Job submitted" subtitle="You’re done for now.">
      <JobWorkflow
        job={{
          title: 'Wash the car',
          description: 'Waiting for parent review. This delay does not affect you.',
          paymentLabel: '100 EGP',
          state: 'submitted',
          criteria: ['Outside washed', 'Wheels cleaned', 'Dry afterward'],
        }}
        history={[
          { id: 'offer', label: 'Offered', state: 'complete' },
          { id: 'accept', label: 'Accepted', state: 'complete' },
          { id: 'submit', label: 'Submitted', detail: 'Waiting for review', state: 'current' },
          { id: 'approve', label: 'Approved', state: 'future' },
          { id: 'credit', label: 'Credited', state: 'future' },
        ]}
      />
    </MobileScreen>
  ),
};

export const GoalsHome: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <MobileScreen title="Goals" subtitle="What am I working toward?" active="goals">
      <div className="lo-product-stack">
        <GoalCard title="Finish 4 books this month" why="I want to get better at reading" current={2.5} target={4} valueLabel="2½ of 4 books" />
        <GoalCard title="Reach chess puzzle 1200" why="I want to see tactics faster" current={1060} target={1200} valueLabel="1060 / 1200" />
      </div>
      <Button leadingIcon={<Icon icon={Plus} size="sm" />} fullWidth>Create a goal</Button>
    </MobileScreen>
  ),
};

export const GoalCreation: Story = {
  globals: { experience: 'builder' },
  render: () => {
    const [step, setStep] = useState(0);
    const prompts = [
      { title: 'What do you want to do?', body: <TextField label="My goal" defaultValue="Finish 4 books this month" /> },
      { title: 'Why does it matter?', body: <TextArea label="My reason" defaultValue="I want to get better at reading." hint="The reason comes before targets and dates." /> },
      { title: 'How will you know?', body: <><TextField label="Target" defaultValue="4 books" /><TextField label="Target date" type="date" /></> },
    ];
    return (
      <MobileScreen title="Create a goal" subtitle={`Step ${step + 1} of 3`}>
        <Card className="lo-goal-create">
          <h2>{prompts[step].title}</h2>
          <div className="lo-product-form">{prompts[step].body}</div>
          <div className="lo-product-actions">
            <Button variant="secondary" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>Back</Button>
            <Button onClick={() => setStep((s) => Math.min(2, s + 1))}>{step === 2 ? 'Create goal' : 'Continue'}</Button>
          </div>
        </Card>
      </MobileScreen>
    );
  },
};

export const GoalDetails: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <MobileScreen title="Reading goal" subtitle="A target date is a planning aid, not a pass/fail deadline.">
      <GoalCard title="Finish 4 books this month" why="I want to get better at reading" current={2.5} target={4} valueLabel="2½ of 4 books" />
      <Card className="lo-goal-detail">
        <h2>Journey</h2>
        <ProgressBar value={2.5} max={4} tone="goal" valueLabel="2½ / 4" />
        <div className="lo-goal-milestones"><span>✓ Book 1</span><span>✓ Book 2</span><span>◐ Book 3</span><span>○ Book 4</span></div>
      </Card>
      <Card variant="soft"><strong>Target date passed?</strong><p>Extend, revise, continue, or close and reflect. The goal is not labelled “failed.”</p></Card>
    </MobileScreen>
  ),
};

export const FamilyWorld: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <MobileScreen title="Our Family" subtitle="What are we building together?" active="family" width={430}>
      <IslandRenderer state={familyWorld} ariaLabel="Family World" />
      <Card className="lo-family-goal">
        <div><strong>Book donation project</strong><span>14 of 20 books</span></div>
        <ProgressBar value={14} max={20} tone="family" />
        <p>Shared progress only. No contribution percentages per child.</p>
      </Card>
    </MobileScreen>
  ),
};

export const WeeklyReview: Story = {
  globals: { experience: 'builder' },
  render: () => {
    const [index, setIndex] = useState(0);
    const [response, setResponse] = useState('');
    const prompts = [
      { id: 'proud', prompt: 'What are you proud of?', hint: 'A small thing is enough.' },
      { id: 'hard', prompt: 'What felt difficult?' },
      { id: 'next', prompt: 'What should we focus on next week?' },
    ];
    return (
      <MobileScreen title="Our Week" subtitle="Around 15 minutes together.">
        <WeeklyReviewFlow
          prompts={prompts}
          activeIndex={index}
          response={response}
          onResponseChange={setResponse}
          onPrevious={() => setIndex((x) => Math.max(0, x - 1))}
          onNext={() => { setIndex((x) => Math.min(2, x + 1)); setResponse(''); }}
          onFinish={() => undefined}
          onSkip={() => undefined}
        />
      </MobileScreen>
    );
  },
};

export const GraduationCelebration: Story = {
  globals: { experience: 'explorer' },
  render: () => (
    <MobileScreen title="A big step" subtitle="Something is changing because you can manage it yourself now.">
      <GraduationMilestone
        mode="celebration"
        title="You manage this yourself now"
        message="Prepare school bag is leaving your daily missions because you no longer need the system to remind you."
        visual={<div className="lo-graduation-hero">🌉</div>}
        primaryAction={{ label: 'Continue my journey' }}
      />
      <p className="lo-product-footnote">Your history stays. The active tracking goes away.</p>
    </MobileScreen>
  ),
};

export const StoryMoments: Story = {
  globals: { experience: 'builder' },
  render: () => (
    <MobileScreen title="My Story" subtitle="Real moments worth remembering." active="journey">
      <StoryTimeline
        entries={[
          { id: 'm1', kind: 'moment', title: 'Helped without being asked', description: 'Malika noticed Eyad was stuck and offered to help.', occurredLabel: 'Today', valueTags: ['Family', 'Kindness'], visual: '💛' },
          { id: 'r1', kind: 'recovery', kindLabel: 'Recovery', title: 'You came back', description: 'Reading was completed at the next opportunity.', occurredLabel: 'Yesterday', visual: '🌱' },
          { id: 'g1', kind: 'graduation', kindLabel: 'I manage this myself', title: 'Brush teeth', description: 'Active daily tracking ended.', occurredLabel: 'Last week', visual: '🌉' },
        ]}
      />
    </MobileScreen>
  ),
};

export const ProfileSwitcher: Story = {
  render: () => {
    const [active, setActive] = useState<'malika' | 'eyad'>('malika');
    return (
      <div className="lo-profile-switcher-stage">
        <Card className="lo-profile-switcher">
          <div className="lo-profile-switcher__brand">Life OS</div>
          <h1>Who is using this device?</h1>
          <div className="lo-profile-switcher__profiles">
            <button type="button" data-active={active === 'malika'} onClick={() => setActive('malika')}>
              <ChildAvatar name="Malika" skinTone="light" hair="waves" topTone="lavender" size="lg" />
              <strong>Malika</strong><span>Builder</span>
            </button>
            <button type="button" data-active={active === 'eyad'} onClick={() => setActive('eyad')}>
              <ChildAvatar name="Eyad" skinTone="medium" hair="short" topTone="sky" size="lg" />
              <strong>Eyad</strong><span>Explorer</span>
            </button>
          </div>
          <Button variant="secondary" leadingIcon={<Icon icon={Settings} size="sm" />}>Parent unlock</Button>
          <p>Parent mode always requires guardian authentication.</p>
        </Card>
      </div>
    );
  },
};

export const ParentChildOverview: Story = {
  globals: { experience: 'parent' },
  render: () => (
    <ParentShell title="Malika" subtitle="Where does she need support — and where should you step back?">
      <section className="lo-parent-child-hero">
        <ChildAvatar name="Malika" skinTone="light" hair="waves" topTone="lavender" accessory="glasses" size="lg" />
        <div><strong>What changed</strong><h2>Fewer reminders this week</h2><p>Reading is consistent; morning preparation is increasingly independent.</p></div>
      </section>
      <div className="lo-parent-metric-grid">
        <Card><span>Today</span><strong>4 of 5 resolved</strong><small>1 awaiting resolution</small></Card>
        <Card><span>Reminders</span><strong>Fewer than last week</strong><small>Trend, not a score</small></Card>
        <Card><span>Recovery</span><strong>Next opportunity</strong><small>After the last confirmed miss</small></Card>
      </div>
      <GraduationEvidencePanel
        title="Morning bag preparation may be ready"
        message="Recent evidence suggests active tracking may no longer be needed."
        evidence={[{ label: 'Recent opportunities', value: '20' }, { label: 'Independent', value: '18' }, { label: 'External reminders', value: '2' }]}
        coverageTitle="Recent information is strong"
        coverageDescription="Enough recent opportunities have reliable completion and reminder context."
        primaryAction={{ label: 'Graduate' }}
        secondaryAction={{ label: 'Not yet' }}
      />
    </ParentShell>
  ),
};

export const ParentInsights: Story = {
  globals: { experience: 'parent' },
  render: () => (
    <ParentShell title="Insights" subtitle="Patterns to help you decide how to support — never a global child score.">
      <div className="lo-insight-grid">
        <Card className="lo-insight-card"><span>Morning routine</span><h2>Needs fewer reminders</h2><p>Over the last four weeks, more opportunities were completed before an external reminder.</p><ProgressBar value={18} max={20} label="Known independent opportunities" valueLabel="18 / 20" /></Card>
        <Card className="lo-insight-card"><span>Recovery</span><h2>Returns quickly after a miss</h2><p>The last two confirmed misses were followed by completion at the next opportunity.</p></Card>
        <Card className="lo-insight-card" data-coverage="low"><span>Homework planning</span><h2>Not enough recent information</h2><p>Tracking has been light. This is uncertainty, not 0% and not regression.</p></Card>
      </div>
    </ParentShell>
  ),
};

export const GraduationSuggestionParent: Story = {
  globals: { experience: 'parent' },
  render: () => (
    <ParentShell title="Graduation suggestion" subtitle="The system suggests. You decide.">
      <GraduationEvidencePanel
        title="Prepare school bag may be ready"
        message="Malika has handled this reliably with little external prompting. Graduating would remove active daily tracking while keeping history and periodic check-ins."
        evidence={[
          { label: 'Observation period', value: '4 weeks' },
          { label: 'Known opportunities', value: '20' },
          { label: 'Self-initiated', value: '18' },
          { label: 'External reminders', value: '2' },
        ]}
        coverageTitle="Sufficient recent evidence"
        coverageDescription="Coverage is high enough to make a suggestion. This is still a parent decision."
        primaryAction={{ label: 'Graduate responsibility' }}
        secondaryAction={{ label: 'Keep tracking' }}
      />
    </ParentShell>
  ),
};

export const Onboarding: Story = {
  globals: { experience: 'parent' },
  render: () => {
    const [step, setStep] = useState(1);
    const steps = [
      ['Welcome to Life OS', 'A family system for growing responsibility, skills, goals and independence.'],
      ['Your family', 'Create the family space and parent access.'],
      ['Add a child', 'Age selects recommended defaults — not capability.'],
      ['Recommended experience', 'Explorer and Builder defaults can be changed later.'],
      ['Starter activities', 'Start small: 2–4 meaningful activities are enough.'],
      ['Money basics', 'Jobs, allowance, Give / Save / Spend remain separate from ordinary responsibilities.'],
      ['Ready', 'You can adjust everything later. Recommended defaults remain available.'],
    ] as const;
    const current = steps[step - 1];
    return (
      <div className="lo-onboarding-stage">
        <main className="lo-onboarding">
          <div className="lo-onboarding__progress"><span>Step {step} of 7</span><ProgressBar value={step} max={7} /></div>
          <div className="lo-onboarding__visual" aria-hidden="true">{step === 1 ? '🏝️' : step === 3 ? '🌱' : step === 6 ? '💰' : '✨'}</div>
          <h1>{current[0]}</h1>
          <p>{current[1]}</p>
          {step === 3 && <div className="lo-product-form"><TextField label="Child name" defaultValue="Malika" /><SelectField label="Age" defaultValue="11" options={[{ value: '7', label: '7' }, { value: '11', label: '11' }, { value: '14', label: '14' }]} /></div>}
          {step === 4 && <div className="lo-onboarding__choices"><Card variant="selected"><strong>Builder</strong><p>Recommended for age 9–12. Balanced visual world and growing autonomy.</p></Card><Card><strong>Explorer</strong><p>Larger, more visual, more scaffolding.</p></Card></div>}
          <div className="lo-product-actions">
            <Button variant="secondary" disabled={step === 1} onClick={() => setStep((s) => Math.max(1, s - 1))}>Back</Button>
            <Button onClick={() => setStep((s) => Math.min(7, s + 1))}>{step === 7 ? 'Finish' : 'Continue'}</Button>
          </div>
        </main>
      </div>
    );
  },
};
