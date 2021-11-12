import { CommandDispatcher } from '@generic-ui/hermes';
import { FilterCommandInvoker } from '../../filter/core/api/filter.command-invoker';
import { SourceDispatcher } from '../../source/core/domain/source.dispatcher';
import { CreateStructureCommand } from './create-structure/create-structure.command';
import { SetVerticalScrollEnabledCommand } from '../../vertical-formation/core/domain/set-enabled/set-vertical-scroll-enabled.command';
import { SetScrollBarPositionCommand } from '../../vertical-formation/core/domain/scroll-bar/set-scroll-bar-position.command';
import { SetScrollPositionCommand } from '../../vertical-formation/core/domain/scroll-position/set-scroll-position.command';
import { SetConfigQuickFilterCommand } from '../../filter/core/domain/quick/set-config-quick-filter.command';
import { SetRowHeightCommand } from '../../vertical-formation/core/domain/set-row-height/set-row-height.command';
import { StructureSetHeightCommand } from '../../vertical-formation/core/domain/container/set-height/structure-set-height.command';
import { SetRowHeightBasedOnThemeCommand } from '../../vertical-formation/core/domain/set-row-height-theme/set-row-height-based-on-theme.command';
import { StructureCommandInvoker } from '../api/structure.command-invoker';
import { Injectable } from '@angular/core';
import { StructureCellEditArchive } from '../../grid/feature/edit/structure.cell-edit.archive';
import { CellEditorManager } from '../../grid/core/domain/edit/cell-editor.manager';
export class StructureDomainCommandInvoker extends StructureCommandInvoker {
    constructor(commandDispatcher, structureFilterCommandService, sourceDispatcher, structureCellEditArchive) {
        super();
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
        this.structureCellEditArchive = structureCellEditArchive;
    }
    create(structureId) {
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    }
    enableVirtualScroll(structureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    }
    disableVirtualScroll(structureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    }
    scrollToTop(structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, 0));
    }
    scrollToBottom(structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, Number.MAX_SAFE_INTEGER));
    }
    scrollToIndex(index, structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, index));
    }
    setScrollPosition(position, structureId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    }
    setOrigin(items, structureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    setFilterConfig(config, structureId) {
        this.structureFilterCommandService.setConfig(config, structureId);
    }
    setQuickFiltersConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigQuickFilterCommand(structureId, config));
    }
    setRowHeight(rowHeight, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    }
    setContainerHeight(height, structureId) {
        this.commandDispatcher.dispatch(new StructureSetHeightCommand(structureId, +height));
    }
    setRowHeightBasedOnTheme(theme, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightBasedOnThemeCommand(structureId, theme));
    }
    setCellEdit(cellEdit, structureId) {
        this.structureCellEditArchive.next(structureId, new CellEditorManager(cellEdit));
    }
}
StructureDomainCommandInvoker.decorators = [
    { type: Injectable }
];
StructureDomainCommandInvoker.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: FilterCommandInvoker },
    { type: SourceDispatcher },
    { type: StructureCellEditArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUN2SSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUM5SCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUc1SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUNqSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUNuSSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQztBQUNsSixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBR3BGLE1BQU0sT0FB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Q0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUF3QixFQUFFLFdBQXdCO1FBQzdELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7WUFoRUQsVUFBVTs7O1lBckJGLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBZ0JoQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS5jb21tYW5kJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Njcm9sbC1iYXIvc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvcXVpY2stZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi9xdWljay9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL2NvbnRhaW5lci9zZXQtaGVpZ2h0L3N0cnVjdHVyZS1zZXQtaGVpZ2h0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZCB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC10aGVtZS9zZXQtcm93LWhlaWdodC1iYXNlZC1vbi10aGVtZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IENlbGxFZGl0Q29uZmlnIH0gZnJvbSAnLi4vLi4vZ3JpZC9jb3JlL2FwaS9lZGl0L2NlbGwtZWRpdC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vZ3JpZC9mZWF0dXJlL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IENlbGxFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vZ3JpZC9jb3JlL2RvbWFpbi9lZGl0L2NlbGwtZWRpdG9yLm1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdGVuYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdHJ1ZSkpO1xuXHR9XG5cblx0ZGlzYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmFsc2UpKTtcblx0fVxuXG5cdHNjcm9sbFRvVG9wKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgMCkpO1xuXHR9XG5cblx0c2Nyb2xsVG9Cb3R0b20oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikpO1xuXHR9XG5cblx0c2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY3JvbGxCYXJQb3NpdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIGluZGV4KSk7XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIHBvc2l0aW9uKSk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5zZXRDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodENvbW1hbmQoc3RydWN0dXJlSWQsICtyb3dIZWlnaHQpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgK2hlaWdodCkpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdGhlbWUpKTtcblx0fVxuXG5cdHNldENlbGxFZGl0KGNlbGxFZGl0OiBDZWxsRWRpdENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUubmV4dChzdHJ1Y3R1cmVJZCwgbmV3IENlbGxFZGl0b3JNYW5hZ2VyKGNlbGxFZGl0KSk7XG5cdH1cblxufVxuIl19