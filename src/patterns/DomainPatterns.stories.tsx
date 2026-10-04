import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { GraduationMilestone } from './GraduationMilestone';
import { JobCard } from './JobCard';
import { MomentCard } from './MomentCard';
import { MoneyAllocation, type MoneyAllocationValues } from './MoneyAllocation';
import { ResponsibilityCard } from './ResponsibilityCard';
import { WorldRegion } from './WorldRegion';

const meta = {
  title: 'Patterns/Domain',
  parameters: { layout: 'centered' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
const Phone = ({ children }: React.PropsWithChildren) => <div style={{ width: 390, display: 'grid', gap: 16 }}>{children}</div>;

export const Responsibility: Story = {
  render: () => {
    const [done, setDone] = useState(false);
    return (
      <Phone>
        <ResponsibilityCard
          title="Make my bed"
          why="Take care of my own space"
          scheduleLabel="Before school"
          meta={done ? 'Done independently' : 'Morning responsibility'}
          status={done ? 'completed' : 'pending'}
          onToggle={() => setDone(!done)}
        />
      </Phone>
    );
  },
};

export const PaidJob: Story = {
  render: () => (
    <Phone>
      <JobCard
        title="Wash the car"
        description="Dad needs help cleaning the car."
        paymentLabel="100 EGP"
        dueLabel="Saturday afternoon"
        criteria={['Outside washed', 'Wheels cleaned', 'Dry afterward']}
        primaryAction={{ label: 'Accept job' }}
        secondaryAction={{ label: 'Maybe later' }}
        visual="🚗"
      />
      <JobCard
        title="Organize the books"
        description="You finished the agreed work."
        paymentLabel="50 EGP"
        state="submitted"
        criteria={['Books sorted', 'Shelf left tidy']}
      />
    </Phone>
  ),
};

export const Moment: Story = {
  render: () => (
    <Phone>
      <MomentCard
        title="A thoughtful moment"
        description="Malika noticed her brother was frustrated and offered to help without being asked."
        valueTags={['Family', 'Kindness', 'Initiative']}
        occurredLabel="Today"
        authorName="Dad"
        visual={<div style={{ fontSize: 42 }}>🌿</div>}
      />
    </Phone>
  ),
};

export const Graduation: Story = {
  render: () => (
    <div style={{ width: 430, display: 'grid', gap: 24 }}>
      <GraduationMilestone
        mode="suggestion"
        title="Morning bag preparation may be ready"
        message="The system has enough recent evidence to suggest less active tracking. You decide whether to graduate it."
        evidence={[
          { label: 'Recent opportunities', value: '20' },
          { label: 'Independent', value: '18' },
          { label: 'External reminders', value: '2' },
        ]}
        primaryAction={{ label: 'Graduate responsibility' }}
        secondaryAction={{ label: 'Not yet' }}
      />
      <GraduationMilestone
        mode="celebration"
        title="You manage this yourself now"
        message="Prepare school bag is moving out of your daily missions because you no longer need the system to remind you."
        visual={<div style={{ fontSize: 72 }}>🌉</div>}
        primaryAction={{ label: 'Continue' }}
      />
    </div>
  ),
};

export const Allocation: Story = {
  render: () => {
    const [values, setValues] = useState<MoneyAllocationValues>({ give: 1000, save: 4000, spend: 5000 });
    return (
      <div style={{ width: 620 }}>
        <MoneyAllocation
          totalMinor={10000}
          values={values}
          currency="EGP"
          stepMinor={500}
          icons={{ give: '♡', save: '●', spend: '□' }}
          onChange={(kind, nextMinor) => setValues((current) => ({ ...current, [kind]: nextMinor }))}
        />
      </div>
    );
  },
};

export const VisualWorldRegions: Story = {
  render: () => (
    <div style={{ width: 760, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
      <WorldRegion title="Independence Path" state="growing" progress={72} progressLabel="Path growth" visual="🌉" description="A visual reflection of growing independence." actionLabel="Open journey" />
      <WorldRegion title="Giving Garden" state="available" progress={45} visual="🌱" description="Shared family giving and contribution are represented here without ranking children." />
      <WorldRegion title="Goal Observatory" state="complete" progress={100} progressTone="goal" visual="🔭" description="A permanent milestone for meaningful goal progress." />
      <WorldRegion title="Future Region" state="locked" visual="☁" description="Locked presentation is semantic only; domain rules decide when it becomes available." />
    </div>
  ),
};

export const ArabicRtl: Story = {
  parameters: { globals: { locale: 'ar', experience: 'builder' } },
  render: () => (
    <div dir="rtl" lang="ar" style={{ width: 420, display: 'grid', gap: 16 }}>
      <ResponsibilityCard
        title="ترتيب السرير"
        why="أعتني بمكاني بنفسي"
        whyLabel="لماذا"
        scheduleLabel="قبل المدرسة"
        meta="مسؤولية صباحية"
      />
      <JobCard
        title="غسل السيارة"
        description="عمل إضافي مدفوع منفصل عن المسؤوليات العادية."
        paymentLabel="١٠٠ ج.م"
        criteria={['غسل السيارة من الخارج', 'تنظيف العجلات', 'تجفيف السيارة']}
        dueLabel="السبت بعد الظهر"
        labels={{
          finishedMeans: 'يُعد العمل منتهيًا عندما',
          payment: 'الأجر',
          due: 'الموعد',
          states: { offered: 'عرض عمل' },
        }}
        primaryAction={{ label: 'قبول العمل' }}
      />
      <MomentCard
        title="لحظة جميلة"
        description="ساعدت مليكة أخاها من تلقاء نفسها."
        occurredLabel="اليوم"
        valueTags={['الأسرة', 'اللطف', 'المبادرة']}
        tagsAriaLabel="معاني اللحظة"
      />
      <GraduationMilestone
        mode="celebration"
        eyebrow="خطوة جديدة"
        title="أنت تدير هذا بنفسك الآن"
        message="لن تظهر هذه المسؤولية ضمن المهام اليومية لأنك لم تعد تحتاج إلى التذكير بها."
        primaryAction={{ label: 'متابعة' }}
      />
    </div>
  ),
};
