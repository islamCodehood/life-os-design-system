import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { Chip } from './Chip';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { SelectField } from './SelectField';
import { TextArea } from './TextArea';
import { TextField } from './TextField';
import { Toggle } from './Toggle';

const meta = { title: 'Components/Controls', parameters: { layout: 'centered' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = { render: () => <div style={{display:'flex',flexWrap:'wrap',gap:12}}><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="quiet">Quiet</Button><Button variant="destructive">Destructive</Button><Button disabled>Disabled</Button></div> };
export const ButtonSizes: Story = { render: () => <div style={{display:'flex',alignItems:'center',gap:12}}><Button size="sm">Small</Button><Button>Medium</Button><Button size="lg">Large / Explorer</Button></div> };
export const IconOnly: Story = { render: () => <IconButton label="Open settings" icon={<Icon icon={Settings} size="lg" />}/> };
export const Fields: Story = { render: () => <div style={{width:360,display:'grid',gap:20}}><TextField label="Title" defaultValue="Make my bed" hint="Keep it short and concrete."/><TextArea label="Why does this matter?" defaultValue="Take care of my own space."/><SelectField label="Schedule" defaultValue="daily" options={[{value:'daily',label:'Daily'},{value:'weekdays',label:'School days'},{value:'weekly',label:'Weekly'}]}/></div> };
export const Switches: Story = { render: () => { const [checked,setChecked]=useState(true); return <div style={{display:'grid',gap:16}}><Toggle checked={checked} onCheckedChange={setChecked} label="Gentle reminder"/><Checkbox label="School days only" defaultChecked/></div>; } };
export const Chips: Story = { render: () => <div style={{display:'flex',gap:8}}><Chip selected>Morning</Chip><Chip>School days</Chip><Chip>7:30 AM</Chip></div> };
export const Avatars: Story = { render: () => <div style={{display:'flex',alignItems:'center',gap:12}}><Avatar name="Eyad Sayed" size="sm"/><Avatar name="Malika Sayed"/><Avatar name="Parent" size="lg"/></div> };
