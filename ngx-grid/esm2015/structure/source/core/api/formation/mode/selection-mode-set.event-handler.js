import { Injectable } from '@angular/core';
import { SelectionModeSetEvent } from '../../../domain/formation/mode/selection-mode-set.event';
import * as i0 from "@angular/core";
import * as i1 from "./row-selection-mode.repository";
export class SelectionModeSetEventHandler {
    constructor(rowSelectionModeRepository) {
        this.rowSelectionModeRepository = rowSelectionModeRepository;
    }
    forEvent() {
        return SelectionModeSetEvent;
    }
    handle(modeSetEvent) {
        if (modeSetEvent.ofMessageType('SelectionModeSetEvent')) {
            this.rowSelectionModeRepository.next(modeSetEvent.getAggregateId(), modeSetEvent.getMode());
        }
    }
}
SelectionModeSetEventHandler.ɵfac = function SelectionModeSetEventHandler_Factory(t) { return new (t || SelectionModeSetEventHandler)(i0.ɵɵinject(i1.RowSelectionModeRepository)); };
SelectionModeSetEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SelectionModeSetEventHandler, factory: SelectionModeSetEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectionModeSetEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.RowSelectionModeRepository }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL21vZGUvc2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7O0FBSWhHLE1BQU0sT0FBTyw0QkFBNEI7SUFFeEMsWUFBNkIsMEJBQXNEO1FBQXRELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFDbkYsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBbUM7UUFFekMsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDNUY7SUFDRixDQUFDOzt3R0FkVyw0QkFBNEI7a0ZBQTVCLDRCQUE0QixXQUE1Qiw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFNlbGVjdGlvbk1vZGVTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnk6IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2VsZWN0aW9uTW9kZVNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFNlbGVjdGlvbk1vZGVTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShtb2RlU2V0RXZlbnQ6IFNlbGVjdGlvbk1vZGVTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKG1vZGVTZXRFdmVudC5vZk1lc3NhZ2VUeXBlKCdTZWxlY3Rpb25Nb2RlU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeS5uZXh0KG1vZGVTZXRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBtb2RlU2V0RXZlbnQuZ2V0TW9kZSgpKTtcblx0XHR9XG5cdH1cblxufVxuIl19