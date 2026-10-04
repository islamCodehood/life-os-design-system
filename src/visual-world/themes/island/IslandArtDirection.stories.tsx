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
          title: '390px collision-safe label check',
          regions: matureRegions,
        }}
      />
    </div>
  ),
};

export const ResponsiveLabelMatrix: Story = {
  render: () => (
    <div className="lo-world-label-test-grid">
      {[320, 390, 480, 768].map((width) => (
        <div className="lo-world-label-test-case" key={width}>
          <strong>{width}px Island container</strong>
          <div style={{ width }}>
            <IslandRenderer
              state={{
                themeId: 'island',
                profile: 'immersive',
                regions: matureRegions,
              }}
              ariaLabel={`Island responsive labels at ${width} pixels`}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const LocalizedCompactLabels: Story = {
  parameters: { globals: { locale: 'ar', experience: 'builder' } },
  render: () => (
    <div style={{ width: 390 }} dir="rtl" lang="ar">
      <IslandRenderer
        state={{
          themeId: 'island',
          profile: 'immersive',
          title: 'اختبار التسميات المختصرة',
          regions: {
            home: { id: 'home', stage: 3, status: 'complete', label: 'المنزل', compactLabel: 'المنزل' },
            independence: { id: 'independence', stage: 3, status: 'complete', label: 'طريق الاستقلال', compactLabel: 'الاستقلال' },
            library: { id: 'library', stage: 3, status: 'complete', label: 'مكتبة التعلّم', compactLabel: 'التعلّم' },
            goals: { id: 'goals', stage: 3, status: 'complete', label: 'مرصد الأهداف', compactLabel: 'الأهداف' },
            giving: { id: 'giving', stage: 3, status: 'complete', label: 'حديقة العطاء', compactLabel: 'العطاء' },
            money: { id: 'money', stage: 3, status: 'complete', label: 'ميناء المال', compactLabel: 'المال' },
            family: { id: 'family', stage: 3, status: 'complete', label: 'حديقة الأسرة', compactLabel: 'الأسرة' },
          },
        }}
      />
    </div>
  ),
};
