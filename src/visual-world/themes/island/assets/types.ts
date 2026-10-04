import type { WorldRegionStatus } from '../../../domain/types';
import type { WorldThemePalette } from '../../types';

export interface IslandRegionAssetProps {
  detail: 0 | 1 | 2 | 3;
  status: WorldRegionStatus;
  palette: WorldThemePalette;
}
