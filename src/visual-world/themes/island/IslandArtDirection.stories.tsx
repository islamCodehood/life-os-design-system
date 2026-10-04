import type { Meta, StoryObj } from '@storybook/react-vite';
import type { WorldRegionId, WorldSceneState } from '../../domain/types';
import { IslandRenderer } from './IslandRenderer';

const meta = {
  title: 'Visual World/Art Direction',
  parameters: { layout: 'centered' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const matureRegions: WorldSceneState['regions'] = {
  home: { id: 'home', stage: 3, status: 'complete' },
  independence: { id: 'independence', stage: 3, status: 'complete' },
  library: { id: 'library', stage: 3, status: 'complete' },
  goals: { id: 'goals', stage: 3, status: 'complete' },
  giving: { id: 'giving', stage: 3, status: 'complete' },
  money: { id: 'money', stage: 3, status: 'complete' },
  family: { id: 'family', stage: 3, status: 'complete' },
};

export const FinalComposition: Story = {
  render: () => (
    <div style={{ width: 'min(1080px, 94vw)' }}>
      <IslandRenderer
        state={{
          themeId: 'island',
          profile: 'immersive',
          title: 'Growing Island — authored SVG art direction',
          regions: matureRegions,
          accents: [
            { id: 'recovery', type: 'recovery', regionId: 'library' },
            { id: 'milestone', type: 'milestone', regionId: 'goals' },
            { id: 'family', type: 'family-contribution', regionId: 'family' },
          ],
        }}
      />
    </div>
  ),
};

export const RegionAssetGallery: Story = {
  render: () => {
    const regions: WorldRegionId[] = [
      'home',
      'independence',
      'library',
      'goals',
      'giving',
      'money',
      'family',
    ];

    return (
      <div className="lo-world-art-gallery">
        {regions.map((regionId) => (
          <div className="lo-world-art-card" key={regionId}>
            <IslandRenderer
              state={{
                themeId: 'island',
                profile: 'immersive',
                regions: {
                  [regionId]: {
                    id: regionId,
                    stage: 3,
                    status: 'complete',
                  },
                },
              }}
              ariaLabel={`${regionId} authored region asset`}
            />
          </div>
        ))}
      </div>
    );
  },
};

export const ClearMobileLabels: Story = {
  render: () => (
    <div style={{ width: 390 }}>
      <IslandRenderer
        state={{
          themeId: 'island',
          profile: 'immersive',
          title: '390px label-legibility check',
          regions: matureRegions,
        }}
      />
    </div>
  ),
};
