import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChildAvatar } from './ChildAvatar';

const meta = {
  title: 'Components/Child Avatar',
  component: ChildAvatar,
  args: { name: 'Malika', size: 'lg' },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ChildAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonalizationRange: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', gap: 24 }}>
      <ChildAvatar name="Eyad" skinTone="medium" hair="short" topTone="sky" size="lg" />
      <ChildAvatar name="Malika" skinTone="light" hair="waves" topTone="lavender" accessory="glasses" size="lg" />
      <ChildAvatar name="Child" skinTone="deep" hair="curly" topTone="clay" accessory="cap" size="lg" />
    </div>
  ),
};
