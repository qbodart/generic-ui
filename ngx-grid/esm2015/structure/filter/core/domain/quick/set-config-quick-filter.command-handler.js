import { Injectable } from '@angular/core';
import { SetConfigQuickFilterCommand } from './set-config-quick-filter.command';
import { ConfigQuickFilterSetEvent } from './config-quick-filter-set.event';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/domain/structure-aggregate.repository";
import * as i2 from "@generic-ui/hermes";
export class SetConfigQuickFilterCommandHandler {
    constructor(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    forCommand() {
        return SetConfigQuickFilterCommand;
    }
    handle(aggregate, command) {
        const quickFiltersConfig = command.getConfig();
        aggregate.setQuickFiltersConfig(quickFiltersConfig);
    }
    publish(aggregate, command) {
        const structureId = command.getAggregateId(), quickFiltersConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigQuickFilterSetEvent(structureId, quickFiltersConfig.enabled));
    }
}
SetConfigQuickFilterCommandHandler.ɵfac = function SetConfigQuickFilterCommandHandler_Factory(t) { return new (t || SetConfigQuickFilterCommandHandler)(i0.ɵɵinject(i1.StructureAggregateRepository), i0.ɵɵinject(i2.DomainEventPublisher)); };
SetConfigQuickFilterCommandHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SetConfigQuickFilterCommandHandler, factory: SetConfigQuickFilterCommandHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SetConfigQuickFilterCommandHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.StructureAggregateRepository }, { type: i2.DomainEventPublisher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3F1aWNrL3NldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBTzVFLE1BQU0sT0FBTyxrQ0FBa0M7SUFFOUMsWUFBNkIsNEJBQTBELEVBQzVFLG9CQUEwQztRQUR4QixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBQzVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDckQsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUFvQztRQUV6RSxNQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUUvQyxTQUFTLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBb0M7UUFFMUUsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUMzQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNHLENBQUM7O29IQXZCVyxrQ0FBa0M7d0ZBQWxDLGtDQUFrQyxXQUFsQyxrQ0FBa0M7dUZBQWxDLGtDQUFrQztjQUQ5QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuL2NvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHF1aWNrRmlsdGVyc0NvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHRhZ2dyZWdhdGUuc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKHF1aWNrRmlsdGVyc0NvbmZpZyk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0cXVpY2tGaWx0ZXJzQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudChzdHJ1Y3R1cmVJZCwgcXVpY2tGaWx0ZXJzQ29uZmlnLmVuYWJsZWQpKTtcblx0fVxuXG59XG4iXX0=