import { Injectable } from '@angular/core';
import { SetSortingCommand } from '../domain/set-config/set-sorting.command';
import { ToggleSortCommand } from '../domain/toggle/toggle-sort.command';
import { SetSortOrderCommand } from '../domain/order/set-sort-order.command';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class SortingCommandInvoker {
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    setSortingConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    }
    toggleSort(fieldId, compositionId, structureId) {
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    }
    setSortOrder(fieldId, sortOrder, compositionId, structureId) {
        this.commandDispatcher.dispatch(new SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder));
    }
}
SortingCommandInvoker.ɵfac = function SortingCommandInvoker_Factory(t) { return new (t || SortingCommandInvoker)(i0.ɵɵinject(i1.CommandDispatcher)); };
SortingCommandInvoker.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SortingCommandInvoker, factory: SortingCommandInvoker.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortingCommandInvoker, [{
        type: Injectable
    }], function () { return [{ type: i1.CommandDispatcher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7OztBQUk3RSxNQUFNLE9BQU8scUJBQXFCO0lBRWpDLFlBQTZCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ2pFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFxQixFQUFFLFdBQXdCO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWdCLEVBQUUsYUFBNEIsRUFBRSxXQUF3QjtRQUNsRixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxZQUFZLENBQUMsT0FBZ0IsRUFBRSxTQUFvQixFQUFFLGFBQTRCLEVBQUUsV0FBd0I7UUFDMUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDMUcsQ0FBQzs7MEZBZlcscUJBQXFCOzJFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4vc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vc2V0LWNvbmZpZy9zZXQtc29ydGluZy5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgVG9nZ2xlU29ydENvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vdG9nZ2xlL3RvZ2dsZS1zb3J0LmNvbW1hbmQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL29yZGVyL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3J0aW5nQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTb3J0aW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFRvZ2dsZVNvcnRDb21tYW5kKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBmaWVsZElkKSk7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNvcnRPcmRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIGZpZWxkSWQsIHNvcnRPcmRlcikpO1xuXHR9XG5cbn1cbiJdfQ==