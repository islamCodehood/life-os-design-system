import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { GraduationMilestone } from '../patterns/GraduationMilestone';
import { MoneyAllocation, type MoneyAllocationValues } from '../patterns/MoneyAllocation';
import { ResponsibilityCard } from '../patterns/ResponsibilityCard';
import { GraduationEvidencePanel } from '../patterns/compound/GraduationEvidencePanel';
import { JobWorkflow } from '../patterns/compound/JobWorkflow';
import { StoryTimeline } from '../patterns/compound/StoryTimeline';
import { TodayResponsibilityGroup } from '../patterns/compound/TodayResponsibilityGroup';

const meta = {
  title: 'States/Interaction Matrix',
  parameters: { layout: 'centered' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Surface = ({ title, description, children }: React.PropsWithChildren<{ title: string; description: string }>) => (
  <section className="lo-state-matrix">
    <header className="lo-state-matrix__intro">
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
    <div className="lo-state-surface">{children}</div>
  </section>
);

export const OfflineCompletion: Story = {
  render: () => (
    <Surface
      title="Offline completion"
      description="The action is safely recorded locally. Offline is subtle context, not an error modal."
    >
      <ResponsibilityCard
        title="Read for 20 minutes"
        why="Build my reading habit"
        status="completed"
        syncState="offline"
        meta="Done at 7:42 PM"
      />
      <div className="lo-state-note">Canonical progress/XP remains server-authoritative until sync is accepted.</div>
    </Surface>
  ),
};

export const UnresolvedData: Story = {
  render: () => (
    <Surface
      title="Unresolved / unknown"
      description="Absence of reliable data is not treated as failure."
    >
      <ResponsibilityCard
        title="Prepare school bag"
        status="unresolved"
        meta="Waiting for an update"
      />
      <div className="lo-state-note">This occurrence is Awaiting Resolution — not Missed.</div>
    </Surface>
  ),
};

export const Recovery: Story = {
  render: () => (
    <Surface
      title="Recovery"
      description="Recovery is acknowledged gently without bonus XP, currency, or shame."
    >
      <StoryTimeline
        title="Latest growth"
        entries={[
          {
            id: 'recovery',
            kind: 'recovery',
            kindLabel: 'Recovery',
            title: 'You came back',
            description: 'Reading was completed at the next opportunity.',
            occurredLabel: 'Today',
            visual: '🌱',
          },
        ]}
      />
    </Surface>
  ),
};

export const JobAwaitingReview: Story = {
  render: () => (
    <Surface
      title="Job awaiting parent review"
      description="The child sees a neutral waiting state. Approved and credited remain separate."
    >
      <JobWorkflow
        job={{
          title: 'Wash the car',
          description: 'The agreed extra work is submitted.',
          paymentLabel: '100 EGP',
          state: 'submitted',
          criteria: ['Outside washed', 'Wheels cleaned', 'Dry afterward'],
        }}
        history={[
          { id: 'offered', label: 'Offered', state: 'complete' },
          { id: 'accepted', label: 'Accepted', state: 'complete' },
          { id: 'submitted', label: 'Submitted', detail: 'Waiting for parent review — nothing else is required from you.', state: 'current' },
          { id: 'approved', label: 'Approved', state: 'future' },
          { id: 'credit', label: 'Credited', state: 'future' },
        ]}
      />
    </Surface>
  ),
};

export const MoneyAllocationValidation: Story = {
  render: () => {
    const [values, setValues] = useState<MoneyAllocationValues>({
      give: 1000,
      save: 8000,
      spend: 4000,
    });

    return (
      <Surface
        title="Money allocation validation"
        description="Over-allocation is visible and confirmation remains unavailable until the allocation balances."
      >
        <MoneyAllocation
          totalMinor={12000}
          values={values}
          currency="EGP"
          stepMinor={500}
          onChange={(kind, nextMinor) => setValues((current) => ({ ...current, [kind]: nextMinor }))}
        />
      </Surface>
    );
  },
};

export const LowDataCoverage: Story = {
  render: () => (
    <Surface
      title="Low data coverage"
      description="The parent sees uncertainty, not a low score or regression judgment."
    >
      <GraduationEvidencePanel
        title="Morning routine needs more observation"
        message="There is not enough recent information to make a graduation suggestion yet."
        evidence={[
          { label: 'Recent opportunities', value: '5' },
          { label: 'Known outcomes', value: '3' },
          { label: 'Unknown / excused', value: '2' },
        ]}
        coverageTitle="Not enough recent information"
        coverageDescription="Tracking has been light. This says nothing negative about independence."
        secondaryAction={{ label: 'Keep observing' }}
      />
    </Surface>
  ),
};

export const ReducedMotion: Story = {
  globals: { motion: 'reduced' },
  render: () => (
    <Surface
      title="Reduced motion"
      description="Meaning and hierarchy remain; motion becomes near-instant and non-essential."
    >
      <GraduationMilestone
        mode="celebration"
        title="You manage this yourself now"
        message="The milestone still feels important without requiring animated movement."
        visual={<div style={{ fontSize: 72 }}>🌉</div>}
      />
      <Card>
        <ProgressBar value={72} label="Independence Path" tone="milestone" />
      </Card>
    </Surface>
  ),
};

export const RtlArabic: Story = {
  globals: { locale: 'ar', experience: 'builder' },
  render: () => (
    <div className="lo-state-matrix" dir="rtl" lang="ar">
      <header className="lo-state-matrix__intro">
        <h2>الواجهة العربية</h2>
        <p>المحاذاة والترتيب يتبعان اتجاه اللغة، بينما تبقى المعاني والسلوك كما هي.</p>
      </header>
      <div className="lo-state-surface">
        <TodayResponsibilityGroup
          title="اليوم"
          summary="واحدة من ثلاث تمت"
          items={[
            { id: 'bed', title: 'ترتيب السرير', why: 'أعتني بمكاني بنفسي', whyLabel: 'لماذا', scheduleLabel: 'قبل المدرسة' },
            { id: 'reading', title: 'القراءة لمدة ٢٠ دقيقة', status: 'completed', meta: 'تمت بدون تذكير' },
            { id: 'bag', title: 'تحضير حقيبة المدرسة', status: 'unresolved', meta: 'في انتظار تحديث' },
          ]}
        />
      </div>
    </div>
  ),
};

export const AgeDensityVariants: Story = {
  render: () => {
    const samples = [
      { id: 'explorer', label: 'Explorer', age: '6–8' },
      { id: 'builder', label: 'Builder', age: '9–12' },
      { id: 'navigator', label: 'Navigator', age: '13–15' },
      { id: 'launch', label: 'Launch', age: '16–17' },
    ] as const;

    return (
      <section className="lo-state-matrix">
        <header className="lo-state-matrix__intro">
          <h2>Age-density variants</h2>
          <p>Same domain truth, progressively quieter and denser presentation.</p>
        </header>
        <div className="lo-density-grid">
          {samples.map((sample) => (
            <div key={sample.id} className="lo-density-sample" data-experience={sample.id}>
              <div className="lo-density-sample__label"><strong>{sample.label}</strong><span>{sample.age}</span></div>
              <ResponsibilityCard
                title="Prepare school bag"
                why="Be ready for tomorrow"
                scheduleLabel="Evening"
                meta="Personal responsibility"
              />
            </div>
          ))}
        </div>
      </section>
    );
  },
};
