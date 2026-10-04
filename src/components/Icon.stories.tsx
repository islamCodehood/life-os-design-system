import type { Meta, StoryObj } from '@storybook/react-vite';
import { Compass, Home, Settings, Target, Users, Wallet } from 'lucide-react';
import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LibraryAndSizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <div style={{ display: 'flex', alignItems: 'end', gap: 20 }}>
        <Icon icon={Home} size="sm" label="Small home icon" />
        <Icon icon={Compass} size="md" label="Medium journey icon" />
        <Icon icon={Wallet} size="lg" label="Large money icon" />
        <Icon icon={Target} size="xl" label="Extra large goal icon" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Icon icon={Users} size="lg" />
        <Icon icon={Settings} size="lg" />
        <span style={{ color: 'var(--lo-text-secondary)' }}>
          Functional icons: Lucide. Expressive world/story moments may still use emojis.
        </span>
      </div>
    </div>
  ),
};
