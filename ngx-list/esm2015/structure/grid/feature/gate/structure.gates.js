import { StructureSearchingGate } from './searching/structure-searching.gate';
import { StructureColumnHeaderGate } from './column/header/structure-column-header.gate';
import { StructurePagingGate } from './paging/structure-paging.gate';
import { StructureSelectionGate } from './source/structure-selection.gate';
import { StructureL10nGate } from './l10n/structure-l10n.gate';
import { StructurePanelGate } from './panel/structure-panel.gate';
import { StructureRowDetailGate } from './row/detail/structure-row-detail.gate';
import { StructureColumnMenuGate } from './column/menu/structure-column-menu.gate';
import { StructureSummariesGate } from '../../../summaries/feature/gate/structure-summaries.gate';
import { StructureInfoPanelGate } from './panel/info/structure-info-panel.gate';
import { StructureRowClassGate } from './row/class/structure-row-class.gate';
import { StructureRowColoringGate } from './row/coloring/structure-row-coloring.gate';
import { StructureRowStyleGate } from './row/style/structure-row-style.gate';
import { ThemeGridGate } from '../../../../schema/feature/gate/grid/theme-grid.gate';
import { SourceLoadingGate } from './source/source-loading.gate';
import { VerticalFormationGate } from '../../../vertical-formation/feature/gate/vertical-formation.gate';
import { StructureSortingGate } from '../../../sorting/feature/gate/structure-sorting.gate';
import { StructureFilterGate } from '../../../filter/feature/gate/structure-filter.gate';
import { StructureQuickFiltersGate } from '../../../filter/feature/gate/structure-quick-filters.gate';
export const structureGates = [
    StructureColumnHeaderGate,
    StructurePagingGate,
    StructureSearchingGate,
    // StructureSourceGate,
    StructureSelectionGate,
    StructureL10nGate,
    StructurePanelGate,
    StructureRowDetailGate,
    StructureColumnMenuGate,
    StructureSummariesGate,
    StructureInfoPanelGate,
    StructureRowClassGate,
    StructureRowStyleGate,
    StructureRowColoringGate,
    ThemeGridGate,
    StructureSortingGate,
    SourceLoadingGate,
    StructureFilterGate,
    StructureQuickFiltersGate,
    VerticalFormationGate
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvc3RydWN0dXJlLmdhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN6RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUV0RyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUc7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHFCQUFxQjtDQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoaW5nR2F0ZSB9IGZyb20gJy4vc2VhcmNoaW5nL3N0cnVjdHVyZS1zZWFyY2hpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5IZWFkZXJHYXRlIH0gZnJvbSAnLi9jb2x1bW4vaGVhZGVyL3N0cnVjdHVyZS1jb2x1bW4taGVhZGVyLmdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nR2F0ZSB9IGZyb20gJy4vcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWxlY3Rpb25HYXRlIH0gZnJvbSAnLi9zb3VyY2Uvc3RydWN0dXJlLXNlbGVjdGlvbi5nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUwxMG5HYXRlIH0gZnJvbSAnLi9sMTBuL3N0cnVjdHVyZS1sMTBuLmdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFuZWxHYXRlIH0gZnJvbSAnLi9wYW5lbC9zdHJ1Y3R1cmUtcGFuZWwuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxHYXRlIH0gZnJvbSAnLi9yb3cvZGV0YWlsL3N0cnVjdHVyZS1yb3ctZGV0YWlsLmdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUdhdGUgfSBmcm9tICcuL2NvbHVtbi9tZW51L3N0cnVjdHVyZS1jb2x1bW4tbWVudS5nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0dhdGUgfSBmcm9tICcuLi8uLi8uLi9zdW1tYXJpZXMvZmVhdHVyZS9nYXRlL3N0cnVjdHVyZS1zdW1tYXJpZXMuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxHYXRlIH0gZnJvbSAnLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS1pbmZvLXBhbmVsLmdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93Q2xhc3NHYXRlIH0gZnJvbSAnLi9yb3cvY2xhc3Mvc3RydWN0dXJlLXJvdy1jbGFzcy5nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0NvbG9yaW5nR2F0ZSB9IGZyb20gJy4vcm93L2NvbG9yaW5nL3N0cnVjdHVyZS1yb3ctY29sb3JpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dTdHlsZUdhdGUgfSBmcm9tICcuL3Jvdy9zdHlsZS9zdHJ1Y3R1cmUtcm93LXN0eWxlLmdhdGUnO1xuaW1wb3J0IHsgVGhlbWVHcmlkR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL2dhdGUvZ3JpZC90aGVtZS1ncmlkLmdhdGUnO1xuaW1wb3J0IHsgU291cmNlTG9hZGluZ0dhdGUgfSBmcm9tICcuL3NvdXJjZS9zb3VyY2UtbG9hZGluZy5nYXRlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uR2F0ZSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9mZWF0dXJlL2dhdGUvdmVydGljYWwtZm9ybWF0aW9uLmdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGluZ0dhdGUgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUtc29ydGluZy5nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckdhdGUgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvZmVhdHVyZS9nYXRlL3N0cnVjdHVyZS1maWx0ZXIuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNHYXRlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUtcXVpY2stZmlsdGVycy5nYXRlJztcblxuZXhwb3J0IGNvbnN0IHN0cnVjdHVyZUdhdGVzID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5IZWFkZXJHYXRlLFxuXHRTdHJ1Y3R1cmVQYWdpbmdHYXRlLFxuXHRTdHJ1Y3R1cmVTZWFyY2hpbmdHYXRlLFxuXHQvLyBTdHJ1Y3R1cmVTb3VyY2VHYXRlLFxuXHRTdHJ1Y3R1cmVTZWxlY3Rpb25HYXRlLFxuXHRTdHJ1Y3R1cmVMMTBuR2F0ZSxcblx0U3RydWN0dXJlUGFuZWxHYXRlLFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxHYXRlLFxuXHRTdHJ1Y3R1cmVDb2x1bW5NZW51R2F0ZSxcblx0U3RydWN0dXJlU3VtbWFyaWVzR2F0ZSxcblx0U3RydWN0dXJlSW5mb1BhbmVsR2F0ZSxcblx0U3RydWN0dXJlUm93Q2xhc3NHYXRlLFxuXHRTdHJ1Y3R1cmVSb3dTdHlsZUdhdGUsXG5cdFN0cnVjdHVyZVJvd0NvbG9yaW5nR2F0ZSxcblx0VGhlbWVHcmlkR2F0ZSxcblx0U3RydWN0dXJlU29ydGluZ0dhdGUsXG5cdFNvdXJjZUxvYWRpbmdHYXRlLFxuXHRTdHJ1Y3R1cmVGaWx0ZXJHYXRlLFxuXHRTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNHYXRlLFxuXHRWZXJ0aWNhbEZvcm1hdGlvbkdhdGVcbl07XG4iXX0=