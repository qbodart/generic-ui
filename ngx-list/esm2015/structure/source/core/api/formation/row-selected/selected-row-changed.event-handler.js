import { Injectable } from '@angular/core';
import { SelectedRowChangedEvent } from '../../../domain/formation/selected-row-changed.event';
import { RowSelectedReadModel } from '../row-selected.read-model';
import * as i0 from "@angular/core";
import * as i1 from "./row-selected.repository";
export class SelectedRowChangedEventHandler {
    constructor(rowSelectedRepository) {
        this.rowSelectedRepository = rowSelectedRepository;
    }
    forEvent() {
        return SelectedRowChangedEvent;
    }
    handle(rowChangedEvent) {
        if (rowChangedEvent.ofMessageType('SelectedRowChangedEvent')) {
            const rowSelectedRead = new RowSelectedReadModel(rowChangedEvent.getSelectedRows(), rowChangedEvent.isAllSelected(), rowChangedEvent.isAllUnselected());
            this.rowSelectedRepository.next(rowChangedEvent.getAggregateId(), rowSelectedRead);
        }
    }
}
SelectedRowChangedEventHandler.ɵfac = function SelectedRowChangedEventHandler_Factory(t) { return new (t || SelectedRowChangedEventHandler)(i0.ɵɵinject(i1.RowSelectedRepository)); };
SelectedRowChangedEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SelectedRowChangedEventHandler, factory: SelectedRowChangedEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectedRowChangedEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.RowSelectedRepository }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUcvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBSWxFLE1BQU0sT0FBTyw4QkFBOEI7SUFFMUMsWUFBNkIscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDekUsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsZUFBd0M7UUFFOUMsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFFN0QsTUFBTSxlQUFlLEdBQUcsSUFBSSxvQkFBb0IsQ0FDL0MsZUFBZSxDQUFDLGVBQWUsRUFBRSxFQUNqQyxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQy9CLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FDakMsQ0FBQztZQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7NEdBckJXLDhCQUE4QjtvRkFBOUIsOEJBQThCLFdBQTlCLDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBRDFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuLi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGVkUmVwb3NpdG9yeTogUm93U2VsZWN0ZWRSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ+IHtcblx0XHRyZXR1cm4gU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUocm93Q2hhbmdlZEV2ZW50OiBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKHJvd0NoYW5nZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHJvd1NlbGVjdGVkUmVhZCA9IG5ldyBSb3dTZWxlY3RlZFJlYWRNb2RlbChcblx0XHRcdFx0cm93Q2hhbmdlZEV2ZW50LmdldFNlbGVjdGVkUm93cygpLFxuXHRcdFx0XHRyb3dDaGFuZ2VkRXZlbnQuaXNBbGxTZWxlY3RlZCgpLFxuXHRcdFx0XHRyb3dDaGFuZ2VkRXZlbnQuaXNBbGxVbnNlbGVjdGVkKClcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMucm93U2VsZWN0ZWRSZXBvc2l0b3J5Lm5leHQocm93Q2hhbmdlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHJvd1NlbGVjdGVkUmVhZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==