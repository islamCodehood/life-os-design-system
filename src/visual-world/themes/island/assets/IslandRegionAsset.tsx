import type { WorldRegionId } from '../../../domain/types';
import type { IslandRegionAssetProps } from './types';
import { FamilyAsset } from './FamilyAsset';
import { GivingAsset } from './GivingAsset';
import { GoalsAsset } from './GoalsAsset';
import { HomeAsset } from './HomeAsset';
import { IndependenceAsset } from './IndependenceAsset';
import { LibraryAsset } from './LibraryAsset';
import { MoneyAsset } from './MoneyAsset';

export function IslandRegionAsset({
  regionId,
  ...props
}: IslandRegionAssetProps & { regionId: WorldRegionId }) {
  switch (regionId) {
    case 'home':
      return <HomeAsset {...props} />;
    case 'independence':
      return <IndependenceAsset {...props} />;
    case 'library':
      return <LibraryAsset {...props} />;
    case 'goals':
      return <GoalsAsset {...props} />;
    case 'giving':
      return <GivingAsset {...props} />;
    case 'money':
      return <MoneyAsset {...props} />;
    case 'family':
      return <FamilyAsset {...props} />;
  }
}
