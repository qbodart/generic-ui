import { Injectable } from '@angular/core';
import { UnselectUniqueFilterCommand } from './unselect-unique-filter.command';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class UnselectUniqueFilterCommandHandler {
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    forCommand() {
        return UnselectUniqueFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId(), uniqueValueId = command.getUniqueValueId();
        structure.unselectUniqueFilter(fieldId, uniqueValueId);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
UnselectUniqueFilterCommandHandler.ɵfac = function UnselectUniqueFilterCommandHandler_Factory(t) { return new (t || UnselectUniqueFilterCommandHandler)(i0.ɵɵinject(i1.DomainEventPublisher)); };
UnselectUniqueFilterCommandHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UnselectUniqueFilterCommandHandler, factory: UnselectUniqueFilterCommandHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnselectUniqueFilterCommandHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventPublisher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3Vuc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQU0vRSxNQUFNLE9BQU8sa0NBQWtDO0lBRTlDLFlBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQTZCLEVBQUUsT0FBb0M7UUFFekUsTUFBTSxPQUFPLEdBQVksT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUM1QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFNUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBb0M7UUFDMUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7O29IQW5CVyxrQ0FBa0M7d0ZBQWxDLGtDQUFrQyxXQUFsQyxrQ0FBa0M7dUZBQWxDLGtDQUFrQztjQUQ5QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi91bnNlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSBjb21tYW5kLmdldEZpZWxkSWQoKSxcblx0XHRcdHVuaXF1ZVZhbHVlSWQgPSBjb21tYW5kLmdldFVuaXF1ZVZhbHVlSWQoKTtcblxuXHRcdHN0cnVjdHVyZS51bnNlbGVjdFVuaXF1ZUZpbHRlcihmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFVuc2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=