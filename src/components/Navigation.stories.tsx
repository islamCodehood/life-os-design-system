import type { Meta, StoryObj } from '@storybook/react-vite';
import { Compass, Heart, Home, MessageCircle, Settings, Sun, Target, Users, Wallet } from 'lucide-react';
import { BottomNavigation } from './BottomNavigation';
import { Icon } from './Icon';
import { SideNavigation } from './SideNavigation';

const meta = { title: 'Components/Navigation', parameters: { layout: 'centered' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const ExplorerBottom: Story = {
  render: () => (
    <BottomNavigation
      activeId="today"
      items={[
        { id: 'today', label: 'Today', icon: <Icon icon={Sun} size="lg" /> },
        { id: 'journey', label: 'Journey', icon: <Icon icon={Compass} size="lg" /> },
        { id: 'money', label: 'Money', icon: <Icon icon={Wallet} size="lg" /> },
        { id: 'family', label: 'Family', icon: <Icon icon={Users} size="lg" /> },
      ]}
    />
  ),
  globals: { experience: 'explorer' },
};

export const BuilderBottom: Story = {
  render: () => (
    <BottomNavigation
      activeId="goals"
      items={[
        { id: 'today', label: 'Today', icon: <Icon icon={Sun} size="lg" /> },
        { id: 'journey', label: 'Journey', icon: <Icon icon={Compass} size="lg" /> },
        { id: 'goals', label: 'Goals', icon: <Icon icon={Target} size="lg" /> },
        { id: 'money', label: 'Money', icon: <Icon icon={Wallet} size="lg" /> },
        { id: 'family', label: 'Family', icon: <Icon icon={Users} size="lg" /> },
      ]}
    />
  ),
};

export const ParentSide: Story = {
  render: () => (
    <SideNavigation
      activeId="home"
      items={[
        { id: 'home', label: 'Home', icon: <Icon icon={Home} size="md" /> },
        { id: 'children', label: 'Children', icon: <Icon icon={Users} size="md" /> },
        { id: 'family', label: 'Family', icon: <Icon icon={Heart} size="md" /> },
        { id: 'review', label: 'Review', icon: <Icon icon={MessageCircle} size="md" /> },
        { id: 'settings', label: 'Settings', icon: <Icon icon={Settings} size="md" /> },
      ]}
    />
  ),
  globals: { experience: 'parent' },
};
