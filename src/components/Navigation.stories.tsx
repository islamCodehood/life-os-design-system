import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomNavigation } from './BottomNavigation';
import { SideNavigation } from './SideNavigation';
const meta = { title:'Components/Navigation', parameters:{layout:'centered'} } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const ExplorerBottom: Story = { render: () => <BottomNavigation activeId="today" items={[{id:'today',label:'Today',icon:'⌂'},{id:'journey',label:'Journey',icon:'⌁'},{id:'money',label:'Money',icon:'¤'},{id:'family',label:'Family',icon:'○'}]}/>, globals:{experience:'explorer'} };
export const BuilderBottom: Story = { render: () => <BottomNavigation activeId="goals" items={[{id:'today',label:'Today',icon:'⌂'},{id:'journey',label:'Journey',icon:'⌁'},{id:'goals',label:'Goals',icon:'◎'},{id:'money',label:'Money',icon:'¤'},{id:'family',label:'Family',icon:'○'}]}/> };
export const ParentSide: Story = { render: () => <SideNavigation activeId="home" items={[{id:'home',label:'Home'},{id:'children',label:'Children'},{id:'family',label:'Family'},{id:'review',label:'Review'},{id:'settings',label:'Settings'}]}/>, globals:{experience:'parent'} };
