import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
import { Button } from '../../../components/Button';
import type { WorldSceneState, WorldTransitionType } from '../../domain/types';
import { IslandRenderer } from './IslandRenderer';

const meta = {
  title: 'Visual World/Motion Sequences',
  parameters: { layout: 'centered' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const baseRegions: WorldSceneState['regions'] = {
  home: { id: 'home', stage: 2, status: 'growing' },
  independence: { id: 'independence', stage: 3, status: 'complete' },
  library: { id: 'library', stage: 2, status: 'growing' },
  goals: { id: 'goals', stage: 3, status: 'complete' },
  giving: { id: 'giving', stage: 2, status: 'growing' },
  money: { id: 'money', stage: 2, status: 'growing' },
  family: { id: 'family', stage: 2, status: 'growing' },
};

const targets: Record<WorldTransitionType, keyof typeof baseRegions> = {
  'stage-change': 'home',
  recovery: 'library',
  milestone: 'goals',
  graduation: 'independence',
};

export const SequenceLab: Story = {
  render: () => {
    const [type, setType] = useState<WorldTransitionType>('graduation');
    const [run, setRun] = useState(1);
    const state = useMemo<WorldSceneState>(() => ({
      themeId: 'island',
      profile: 'immersive',
      title: 'Motion sequence lab',
      regions: baseRegions,
      transition: {
        id: `${type}-${run}`,
        type,
        regionId: targets[type],
      },
      accents: type === 'recovery'
        ? [{ id: `accent-${run}`, type: 'recovery', regionId: 'library' }]
        : type === 'milestone'
          ? [{ id: `accent-${run}`, type: 'milestone', regionId: 'goals' }]
          : type === 'graduation'
            ? [{ id: `accent-${run}`, type: 'graduation', regionId: 'independence' }]
            : [],
    }), [type, run]);

    return (
      <div className="lo-world-motion-lab">
        <div className="lo-world-motion-lab__controls">
          <Button variant={type === 'stage-change' ? 'primary' : 'secondary'} onClick={() => setType('stage-change')}>Stage transition</Button>
          <Button variant={type === 'recovery' ? 'primary' : 'secondary'} onClick={() => setType('recovery')}>Recovery</Button>
          <Button variant={type === 'milestone' ? 'primary' : 'secondary'} onClick={() => setType('milestone')}>Milestone</Button>
          <Button variant={type === 'graduation' ? 'primary' : 'secondary'} onClick={() => setType('graduation')}>Graduation bridge</Button>
          <Button onClick={() => setRun((value) => value + 1)}>Replay</Button>
        </div>
        <IslandRenderer state={state} />
      </div>
    );
  },
};

export const ReducedMotionSequences: Story = {
  globals: { motion: 'reduced' },
  render: () => (
    <div style={{ width: 'min(900px, 94vw)' }}>
      <IslandRenderer
        state={{
          themeId: 'island',
          profile: 'immersive',
          title: 'Reduced motion keeps the final state without the sequence',
          regions: baseRegions,
          transition: {
            id: 'graduation-reduced',
            type: 'graduation',
            regionId: 'independence',
          },
          accents: [{ id: 'graduation', type: 'graduation', regionId: 'independence' }],
        }}
      />
    </div>
  ),
};
