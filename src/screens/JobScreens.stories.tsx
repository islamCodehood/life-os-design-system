import type { Meta, StoryObj } from '@storybook/react-vite';
import { BriefcaseBusiness } from 'lucide-react';
import { Card } from '../components/Card';
import { ChildAvatar } from '../components/ChildAvatar';
import { EmptyState } from '../components/EmptyState';
import { Icon } from '../components/Icon';
import { ChildScreenTemplate } from '../layouts/ChildScreenTemplate';
import { JobCard } from '../patterns/JobCard';
import { JobWorkflow } from '../patterns/compound/JobWorkflow';
import { childNavigation, ScreenHeading } from './shared';

const meta = {
  title: 'Screens/Jobs',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile390' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const JobList: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Jobs" subtitle="Optional extra work with an agreed payment." trailing={<ChildAvatar name="Eyad" top="sky" size="sm" />} />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <section className="lo-screen-section">
        <header><h2>Available</h2><p>1 offer</p></header>
        <JobCard
          title="Wash the car"
          description="Dad needs help cleaning the car."
          paymentLabel="100 EGP"
          dueLabel="Saturday afternoon"
          criteria={['Outside washed', 'Wheels cleaned', 'Dry afterward']}
          visual="🚗"
          primaryAction={{ label: 'View offer' }}
        />
      </section>
      <section className="lo-screen-section">
        <header><h2>In progress</h2></header>
        <JobCard
          title="Organize the books"
          description="Sort the family bookshelf."
          paymentLabel="50 EGP"
          dueLabel="Sunday"
          state="in-progress"
          visual="📚"
          primaryAction={{ label: 'Open job' }}
        />
      </section>
    </ChildScreenTemplate>
  ),
};

export const JobOfferDetails: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Job offer" subtitle="Know the work and payment before you accept." />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <JobWorkflow
        job={{
          title: 'Wash the car',
          description: 'This is optional extra work—not a normal family responsibility.',
          paymentLabel: '100 EGP',
          dueLabel: 'Saturday afternoon',
          criteria: ['Outside washed', 'Wheels cleaned', 'Dry afterward'],
          state: 'offered',
          visual: '🚗',
          primaryAction: { label: 'Accept job' },
          secondaryAction: { label: 'Maybe later' },
        }}
        history={[
          { id: 'offer', label: 'Offer', detail: 'Terms are visible before accepting.', state: 'current' },
          { id: 'work', label: 'Do the agreed work', state: 'future' },
          { id: 'review', label: 'Parent review', state: 'future' },
          { id: 'credit', label: 'Credit payment', state: 'future' },
        ]}
      />
    </ChildScreenTemplate>
  ),
};

export const SubmittedAwaitingReview: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Job submitted" subtitle="You have done your part." />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <JobWorkflow
        job={{
          title: 'Wash the car',
          description: 'Submitted for review. Waiting does not count against you.',
          paymentLabel: '100 EGP',
          state: 'submitted',
          criteria: ['Outside washed', 'Wheels cleaned', 'Dry afterward'],
          visual: '🚗',
        }}
        history={[
          { id: 'offer', label: 'Accepted', state: 'complete' },
          { id: 'work', label: 'Work completed', state: 'complete' },
          { id: 'submitted', label: 'Submitted', detail: 'Waiting for parent review.', state: 'current' },
          { id: 'approved', label: 'Approved', state: 'future' },
          { id: 'credited', label: 'Credited', state: 'future' },
        ]}
      />
      <div className="lo-screen-note">You do not need to keep checking. The parent will review it.</div>
    </ChildScreenTemplate>
  ),
};

export const NeedsRevision: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="One part needs another look" subtitle="Revision is part of the agreed work, not a punishment." />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <JobCard
        title="Organize the books"
        description="The bottom shelf still needs sorting."
        paymentLabel="50 EGP"
        dueLabel="Sunday"
        state="needs-revision"
        criteria={['Books grouped', 'Bottom shelf sorted', 'Shelf left tidy']}
        visual="📚"
        primaryAction={{ label: 'Continue job' }}
      />
    </ChildScreenTemplate>
  ),
};

export const AwaitingCredit: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Approved" subtitle="The agreed payment is now owed." />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <JobWorkflow
        job={{
          title: 'Wash the car',
          description: 'The job was approved. Payment has not been credited yet.',
          paymentLabel: '100 EGP',
          state: 'awaiting-credit',
          criteria: ['Outside washed', 'Wheels cleaned', 'Dry afterward'],
          visual: '🚗',
        }}
        history={[
          { id: 'work', label: 'Work completed', state: 'complete' },
          { id: 'approved', label: 'Approved', state: 'complete' },
          { id: 'credit', label: '100 EGP awaiting credit', detail: 'The agreed amount cannot silently change.', state: 'current' },
        ]}
      />
    </ChildScreenTemplate>
  ),
};

export const NoJobs: Story = {
  render: () => (
    <ChildScreenTemplate
      header={<ScreenHeading title="Jobs" subtitle="Optional extra work appears here." />}
      navigation={childNavigation}
      activeNavigationId="money"
    >
      <EmptyState
        visual={<Icon icon={BriefcaseBusiness} size="xl" />}
        title="No jobs right now"
        description="That is completely fine. Normal responsibilities still belong to everyday family life and are not paid jobs."
      />
    </ChildScreenTemplate>
  ),
};
