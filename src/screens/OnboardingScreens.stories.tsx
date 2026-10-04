import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { LockKeyhole, Plus } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Checkbox } from '../components/Checkbox';
import { ChildAvatar } from '../components/ChildAvatar';
import { Icon } from '../components/Icon';
import { SelectField } from '../components/SelectField';
import { TextField } from '../components/TextField';
import { FlowScreenTemplate } from '../layouts/FlowScreenTemplate';

const meta = {
  title: 'Screens/Onboarding',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile390' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileSwitcher: Story = {
  render: () => (
    <FlowScreenTemplate
      eyebrow="Who is using Life OS?"
      title="Choose a profile"
      description="Child profiles are easy to enter. Parent mode always requires an unlock."
    >
      <button type="button" className="lo-profile-choice">
        <ChildAvatar name="Malika" skinTone="tan" hair="long" top="lavender" accessory="headband" size="md" />
        <span><strong>Malika</strong><small>Builder</small></span>
      </button>
      <button type="button" className="lo-profile-choice">
        <ChildAvatar name="Eyad" hair="short" top="sky" size="md" />
        <span><strong>Eyad</strong><small>Explorer</small></span>
      </button>
      <button type="button" className="lo-profile-choice lo-profile-choice--parent">
        <span className="lo-profile-choice__icon"><Icon icon={LockKeyhole} size="lg" /></span>
        <span><strong>Parent</strong><small>Unlock required</small></span>
      </button>
    </FlowScreenTemplate>
  ),
};

const steps = [
  {
    title: 'Welcome to your family Life OS',
    description: 'A calm system for responsibilities, growth, goals, money, memories and increasing independence.',
    visual: '🏝️',
  },
  {
    title: 'Add your first child',
    description: 'Age chooses recommended defaults. It does not decide capability.',
    visual: '👋',
  },
  {
    title: 'Recommended experience',
    description: 'You can change visualization later without changing the underlying rules.',
    visual: '✨',
  },
  {
    title: 'Start with a few responsibilities',
    description: 'Keep the first week small. Normal responsibilities are not paid.',
    visual: '🌱',
  },
  {
    title: 'Money basics',
    description: 'Money is for real economic value. Give → Save → Spend is the default presentation order.',
    visual: '💰',
  },
  {
    title: 'Weekly family review',
    description: 'About 15 minutes. A conversation, never a streak or performance score.',
    visual: '☕',
  },
  {
    title: 'Ready',
    description: 'The goal is for children to need less of the system over time.',
    visual: '🌉',
  },
];

export const InteractiveOnboarding: Story = {
  render: () => {
    const [step, setStep] = useState(0);
    const current = steps[step];
    return (
      <FlowScreenTemplate
        eyebrow="Family setup"
        title={current.title}
        description={current.description}
        progressLabel={`${step + 1} of ${steps.length}`}
        visual={current.visual}
        actions={
          <>
            {step > 0 && <Button variant="secondary" onClick={() => setStep((value) => value - 1)}>Back</Button>}
            <Button onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))}>
              {step === steps.length - 1 ? 'Finish setup' : 'Continue'}
            </Button>
          </>
        }
      >
        {step === 0 && <TextField label="Family name" defaultValue="Sayed Family" />}
        {step === 1 && (
          <div className="lo-screen-stack">
            <TextField label="Child name" defaultValue="Malika" />
            <SelectField
              label="Age"
              defaultValue="11"
              options={Array.from({ length: 12 }, (_, index) => ({
                value: String(index + 6),
                label: String(index + 6),
              }))}
            />
          </div>
        )}
        {step === 2 && (
          <div className="lo-onboarding-options">
            <Card variant="selected"><strong>Balanced · recommended</strong><span>World + clear tasks + moderate detail</span></Card>
            <Card><strong>Immersive</strong><span>More visual storytelling</span></Card>
            <Card><strong>Focused</strong><span>Quieter presentation</span></Card>
          </div>
        )}
        {step === 3 && (
          <div className="lo-screen-stack">
            <Checkbox label="Make my bed" defaultChecked />
            <Checkbox label="Prepare school bag" defaultChecked />
            <Checkbox label="Reading" defaultChecked />
            <button type="button" className="lo-add-inline"><Icon icon={Plus} size="sm" /> Add another</button>
          </div>
        )}
        {step === 4 && (
          <div className="lo-onboarding-options">
            <Card variant="selected"><strong>Money enabled</strong><span>Jobs, gifts, allowance and Give / Save / Spend</span></Card>
            <Card><strong>Start without money</strong><span>You can enable it later</span></Card>
          </div>
        )}
        {step === 5 && <Checkbox label="Show a weekly review reminder" defaultChecked />}
        {step === 6 && (
          <div className="lo-screen-note" data-tone="success">
            Recommended defaults are set. You can change them later, and reset to recommendations at any time.
          </div>
        )}
      </FlowScreenTemplate>
    );
  },
};

export const OnboardingAllSteps: Story = {
  parameters: { viewport: { defaultViewport: 'desktop1440' } },
  render: () => (
    <div className="lo-onboarding-matrix">
      {steps.map((step, index) => (
        <Card className="lo-onboarding-step-card" key={step.title}>
          <span>{index + 1}</span>
          <div aria-hidden="true">{step.visual}</div>
          <strong>{step.title}</strong>
          <p>{step.description}</p>
        </Card>
      ))}
    </div>
  ),
};
