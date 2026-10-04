import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './ProgressBar';
const meta = { title:'Components/Progress', component:ProgressBar, parameters:{layout:'centered'}, tags:['autodocs'] } satisfies Meta<typeof ProgressBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Goal: Story = { args:{value:2.5,max:4,label:'Reading goal',valueLabel:'2½ of 4 books',tone:'goal'} };
export const Learning: Story = { args:{value:65,label:'Chess mastery',tone:'learning'} };
export const Family: Story = { args:{value:14,max:20,label:'Book donation project',valueLabel:'14 of 20 books',tone:'family'} };
export const Milestone: Story = { args:{value:100,label:'Graduation evidence',valueLabel:'Ready to review',tone:'milestone'} };
