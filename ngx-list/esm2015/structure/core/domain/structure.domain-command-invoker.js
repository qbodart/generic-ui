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
import { CellEditorManager } from '../../grid/core/domain/edit/cell-editor.manager';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
import * as i2 from "../../filter/core/api/filter.command-invoker";
import * as i3 from "../../source/core/domain/source.dispatcher";
import * as i4 from "../../grid/feature/edit/structure.cell-edit.archive";
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
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
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
StructureDomainCommandInvoker.ɵfac = function StructureDomainCommandInvoker_Factory(t) { return new (t || StructureDomainCommandInvoker)(i0.ɵɵinject(i1.CommandDispatcher), i0.ɵɵinject(i2.FilterCommandInvoker), i0.ɵɵinject(i3.SourceDispatcher), i0.ɵɵinject(i4.StructureCellEditArchive)); };
StructureDomainCommandInvoker.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructureDomainCommandInvoker, factory: StructureDomainCommandInvoker.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureDomainCommandInvoker, [{
        type: Injectable
    }], function () { return [{ type: i1.CommandDispatcher }, { type: i2.FilterCommandInvoker }, { type: i3.SourceDispatcher }, { type: i4.StructureCellEditArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUN2SSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUM5SCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUc1SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUNqSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUNuSSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQztBQUNsSixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7Ozs7QUFHcEYsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHVCQUF1QjtJQUV6RSxZQUE2QixpQkFBb0MsRUFDN0MsNkJBQW1ELEVBQ25ELGdCQUFrQyxFQUNsQyx3QkFBa0Q7UUFDckUsS0FBSyxFQUFFLENBQUM7UUFKb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQXNCO1FBQ25ELHFCQUFn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N0IsNkJBQTZCLFdBQTdCLDZCQUE2Qjt1RkFBN0IsNkJBQTZCO2NBRHpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS5jb21tYW5kJztcbmltcG9ydCB7IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Njcm9sbC1iYXIvc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3F1aWNrL3NldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC9zZXQtcm93LWhlaWdodC5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmQgfSBmcm9tICcuLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgQ2VsbEVkaXRDb25maWcgfSBmcm9tICcuLi8uLi9ncmlkL2NvcmUvYXBpL2VkaXQvY2VsbC1lZGl0LmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi8uLi9ncmlkL2ZlYXR1cmUvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgQ2VsbEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi9ncmlkL2NvcmUvZG9tYWluL2VkaXQvY2VsbC1lZGl0b3IubWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEb21haW5Db21tYW5kSW52b2tlciBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZChzdHJ1Y3R1cmVJZCkpO1xuXHR9XG5cblx0ZW5hYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCB0cnVlKSk7XG5cdH1cblxuXHRkaXNhYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCBmYWxzZSkpO1xuXHR9XG5cblx0c2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCAwKSk7XG5cdH1cblxuXHRzY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTY3JvbGxCYXJQb3NpdGlvbkNvbW1hbmQoc3RydWN0dXJlSWQsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSk7XG5cdH1cblxuXHRzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgaW5kZXgpKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNjcm9sbFBvc2l0aW9uQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcG9zaXRpb24pKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLnNldEZpbHRlcmluZ0VuYWJsZWQoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodENvbW1hbmQoc3RydWN0dXJlSWQsICtyb3dIZWlnaHQpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgK2hlaWdodCkpO1xuXHR9XG5cblx0c2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZChzdHJ1Y3R1cmVJZCwgdGhlbWUpKTtcblx0fVxuXG5cdHNldENlbGxFZGl0KGNlbGxFZGl0OiBDZWxsRWRpdENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUubmV4dChzdHJ1Y3R1cmVJZCwgbmV3IENlbGxFZGl0b3JNYW5hZ2VyKGNlbGxFZGl0KSk7XG5cdH1cblxufVxuIl19