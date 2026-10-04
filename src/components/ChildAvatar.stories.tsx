import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChildAvatar } from './ChildAvatar';

const meta = {
  title: 'Components/Child Avatar',
  component: ChildAvatar,
  args: { name: 'Malika' },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ChildAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonalOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', flexWrap: 'wrap', gap: 24 }}>
      <ChildAvatar name="Eyad" skinTone="medium" hair="short" top="sky" size="lg" />
      <ChildAvatar name="Malika" skinTone="tan" hair="long" top="lavender" accessory="headband" size="lg" />
      <ChildAvatar name="Sam" skinTone="deep" hair="coily" top="clay" accessory="glasses" size="lg" />
      <ChildAvatar name="Noor" skinTone="light" hair="curly" top="sage" accessory="cap" size="lg" />
    </div>
  ),
};
