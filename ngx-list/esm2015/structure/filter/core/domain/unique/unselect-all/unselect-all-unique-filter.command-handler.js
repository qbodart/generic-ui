import { Injectable } from '@angular/core';
import { UnselectAllUniqueFilterCommand } from './unselect-all-unique-filter.command';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class UnselectAllUniqueFilterCommandHandler {
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    forCommand() {
        return UnselectAllUniqueFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId();
        structure.unselectAllUniqueFilter(fieldId);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
UnselectAllUniqueFilterCommandHandler.ɵfac = function UnselectAllUniqueFilterCommandHandler_Factory(t) { return new (t || UnselectAllUniqueFilterCommandHandler)(i0.ɵɵinject(i1.DomainEventPublisher)); };
UnselectAllUniqueFilterCommandHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UnselectAllUniqueFilterCommandHandler, factory: UnselectAllUniqueFilterCommandHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnselectAllUniqueFilterCommandHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventPublisher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQU10RixNQUFNLE9BQU8scUNBQXFDO0lBRWpELFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQTZCLEVBQUUsT0FBdUM7UUFFNUUsTUFBTSxPQUFPLEdBQVksT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTlDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBdUM7UUFDN0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7OzBIQWxCVyxxQ0FBcUM7MkZBQXJDLHFDQUFxQyxXQUFyQyxxQ0FBcUM7dUZBQXJDLHFDQUFxQztjQURqRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi91bnNlbGVjdC1hbGwtdW5pcXVlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8VW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkOiBGaWVsZElkID0gY29tbWFuZC5nZXRGaWVsZElkKCk7XG5cblx0XHRzdHJ1Y3R1cmUudW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIoZmllbGRJZCk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19