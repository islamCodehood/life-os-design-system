import type { ReactNode } from 'react';
import {
  Compass,
  Heart,
  Home,
  MessageCircle,
  Settings,
  Sun,
  Target,
  Users,
  Wallet,
} from 'lucide-react';
import type { BottomNavigationItem } from '../components/BottomNavigation';
import type { SideNavigationItem } from '../components/SideNavigation';
import { Icon } from '../components/Icon';

export const childNavigation: BottomNavigationItem[] = [
  { id: 'today', label: 'Today', icon: <Icon icon={Sun} size="lg" /> },
  { id: 'journey', label: 'Journey', icon: <Icon icon={Compass} size="lg" /> },
  { id: 'goals', label: 'Goals', icon: <Icon icon={Target} size="lg" /> },
  { id: 'money', label: 'Money', icon: <Icon icon={Wallet} size="lg" /> },
  { id: 'family', label: 'Family', icon: <Icon icon={Users} size="lg" /> },
];

export const explorerNavigation: BottomNavigationItem[] = childNavigation.filter(
  (item) => item.id !== 'goals',
);

export const parentNavigation: SideNavigationItem[] = [
  { id: 'home', label: 'Home', icon: <Icon icon={Home} size="md" /> },
  { id: 'children', label: 'Children', icon: <Icon icon={Users} size="md" /> },
  { id: 'family', label: 'Family', icon: <Icon icon={Heart} size="md" /> },
  { id: 'review', label: 'Review', icon: <Icon icon={MessageCircle} size="md" /> },
  { id: 'settings', label: 'Settings', icon: <Icon icon={Settings} size="md" /> },
];

export const parentBrand = (
  <>
    <div>Life OS</div>
    <small>Parent mode</small>
  </>
);

export function ScreenHeading({
  title,
  subtitle,
  trailing,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  trailing?: ReactNode;
}) {
  return (
    <div className="lo-screen-heading">
      <div className="lo-screen-heading__copy">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {trailing}
    </div>
  );
}
