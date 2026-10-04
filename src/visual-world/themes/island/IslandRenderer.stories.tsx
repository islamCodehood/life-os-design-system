import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import type { WorldRegionId, WorldSceneState } from '../../domain/types';
import { IslandRenderer } from './IslandRenderer';

const meta = {
  title: 'Visual World/Island Renderer',
  component: IslandRenderer,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof IslandRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

const explorerState: WorldSceneState = {
  themeId: 'island',
  profile: 'immersive',
  title: 'Eyad’s Island',
  regions: {
    home: { id: 'home', stage: 2, status: 'growing' },
    independence: { id: 'independence', stage: 2, status: 'growing' },
    library: { id: 'library', stage: 1, status: 'available' },
    goals: { id: 'goals', stage: 1, status: 'available' },
    giving: { id: 'giving', stage: 2, status: 'growing' },
    money: { id: 'money', stage: 1, status: 'available' },
    family: { id: 'family', stage: 2, status: 'growing' },
  },
  accents: [
    { id: 'recover-reading', type: 'recovery', regionId: 'library' },
    { id: 'family-moment', type: 'family-contribution', regionId: 'family' },
  ],
};

export const ExplorerImmersive: Story = {
  args: { state: explorerState },
};

export const BuilderBalanced: Story = {
  args: {
    state: {
      ...explorerState,
      profile: 'balanced',
      title: 'Malika’s Island',
      regions: {
        ...explorerState.regions,
        goals: { id: 'goals', stage: 3, status: 'complete' },
        library: { id: 'library', stage: 3, status: 'complete' },
      },
      accents: [
        { id: 'goal', type: 'milestone', regionId: 'goals' },
        { id: 'kindness', type: 'kindness', regionId: 'giving' },
      ],
    },
  },
};

export const Focused: Story = {
  args: {
    state: {
      ...explorerState,
      profile: 'focused',
      title: 'My progress',
      accents: [],
    },
  },
};

export const FamilyWorld: Story = {
  args: {
    state: {
      themeId: 'island',
      profile: 'balanced',
      title: 'What we build together',
      regions: {
        family: { id: 'family', stage: 3, status: 'complete', label: 'Family Garden' },
        giving: { id: 'giving', stage: 3, status: 'complete', label: 'Giving Garden' },
        library: { id: 'library', stage: 2, status: 'growing', label: 'Book Project' },
      },
      accents: [
        { id: 'shared', type: 'family-contribution', regionId: 'family' },
        { id: 'give', type: 'kindness', regionId: 'giving' },
      ],
    },
  },
};

export const StageProgression: Story = {
  render: () => (
    <div className="lo-world-stage-grid">
      {[0, 1, 2, 3].map((stage) => (
        <div key={stage} className="lo-world-stage-sample">
          <strong>Independence stage {stage}</strong>
          <IslandRenderer
            state={{
              themeId: 'island',
              profile: 'focused',
              regions: {
                independence: {
                  id: 'independence',
                  stage,
                  status: stage === 0 ? 'locked' : stage === 3 ? 'complete' : 'growing',
                },
              },
            }}
            ariaLabel={`Independence Path stage ${stage}`}
          />
        </div>
      ))}
    </div>
  ),
};

export const InteractiveRegions: Story = {
  render: () => {
    const [selected, setSelected] = useState<WorldRegionId | null>(null);
    return (
      <div style={{ width: 'min(960px, 90vw)', display: 'grid', gap: 12 }}>
        <IslandRenderer state={explorerState} onRegionSelect={setSelected} />
        <div className="lo-state-note" aria-live="polite">
          {selected ? `Selected region: ${selected}` : 'Select a region in the island.'}
        </div>
      </div>
    );
  },
};

export const ReducedMotion: Story = {
  globals: { motion: 'reduced', experience: 'explorer' },
  args: {
    state: {
      ...explorerState,
      regions: {
        ...explorerState.regions,
        independence: { id: 'independence', stage: 3, status: 'complete' },
      },
      accents: [{ id: 'graduation', type: 'graduation', regionId: 'independence' }],
    },
  },
};
