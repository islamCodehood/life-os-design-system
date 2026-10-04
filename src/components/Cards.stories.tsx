import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { AttentionCard } from './AttentionCard';
import { Card } from './Card';
import { GoalCard } from './GoalCard';
import { MoneyBucket } from './MoneyBucket';
import { TaskCard } from './TaskCard';

const meta = { title: 'Components/Cards', parameters: { layout: 'centered' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const Wrap = ({ children }: React.PropsWithChildren) => <div style={{width:380,display:'grid',gap:12}}>{children}</div>;

export const Standard: Story = { render: () => <Wrap><Card><strong>Standard card</strong><p style={{color:'var(--lo-text-secondary)'}}>Quiet functional surface with border-first hierarchy.</p></Card><Card variant="soft">Soft supporting surface</Card><Card variant="selected">Selected / highlighted surface</Card></Wrap> };
export const ResponsibilityStates: Story = { render: () => { const [done,setDone]=useState(false); return <Wrap><TaskCard title="Make my bed" meta="Before school" status={done?'completed':'pending'} onToggle={()=>setDone(!done)}/><TaskCard title="Prepare school bag" status="unresolved" meta="Waiting for an update"/><TaskCard title="Read for 20 minutes" status="completed" meta="Done independently" syncState="offline"/></Wrap>; } };
export const ParentAttention: Story = { render: () => <Wrap><AttentionCard eyebrow="Job review" title="Eyad submitted: Wash the car" actionLabel="Review"/><AttentionCard eyebrow="Graduation suggestion" title="Morning bag preparation may be ready" description="Recent evidence shows sustained independence with few reminders." actionLabel="See evidence" tone="growth"/><AttentionCard eyebrow="Data coverage" title="Not enough recent information" description="Tracking has been light. This is uncertainty, not declining independence."/></Wrap> };
export const Goal: Story = { render: () => <Wrap><GoalCard title="Finish 4 books this month" why="I want to get better at reading" current={2.5} target={4}/></Wrap> };
export const Money: Story = { render: () => <div style={{display:'flex',gap:12,flexWrap:'wrap'}}><MoneyBucket kind="give" amount="20 EGP" percentage={17} icon="♡"/><MoneyBucket kind="save" amount="70 EGP" percentage={58} icon="●"/><MoneyBucket kind="spend" amount="30 EGP" percentage={25} icon="□"/></div> };
