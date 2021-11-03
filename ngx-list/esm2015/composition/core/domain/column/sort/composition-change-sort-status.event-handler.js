import { Injectable } from '@angular/core';
import { SortToggledEvent } from '../../../../../structure/sorting/core/domain/toggle/sort-toggled.event';
import { ColumnFieldId } from '../field/column-field.id';
import { ChangeSortParams } from './change-sort.params';
import { SortOrderSetEvent } from '../../../../../structure/sorting/core/domain/order/sort-order-set.event';
import * as i0 from "@angular/core";
import * as i1 from "../../composition.dispatcher";
export class CompositionChangeSortStatusEventHandler {
    constructor(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    forEvents() {
        return [
            SortToggledEvent,
            SortOrderSetEvent
        ];
    }
    handle(event) {
        if (event.ofMessageType('SortToggledEvent')) {
            const compositionId = event.getCompositionId(), dirs = event.getDirections();
            const params = dirs.map((dir) => {
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            });
            this.compositionDispatcher.changeSort(compositionId, params);
        }
        if (event.ofMessageType('SortOrderSetEvent')) {
            const compositionId = event.getCompositionId(), dirs = event.getDirections();
            const params = dirs.map((dir) => {
                const columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            });
            this.compositionDispatcher.changeSort(compositionId, params);
        }
    }
}
CompositionChangeSortStatusEventHandler.ɵfac = function CompositionChangeSortStatusEventHandler_Factory(t) { return new (t || CompositionChangeSortStatusEventHandler)(i0.ɵɵinject(i1.CompositionDispatcher)); };
CompositionChangeSortStatusEventHandler.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CompositionChangeSortStatusEventHandler, factory: CompositionChangeSortStatusEventHandler.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompositionChangeSortStatusEventHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.CompositionDispatcher }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFHMUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDOzs7QUFNNUcsTUFBTSxPQUFPLHVDQUF1QztJQUVuRCxZQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU87WUFDTixnQkFBZ0I7WUFDaEIsaUJBQWlCO1NBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQTJDO1FBRWpELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBRTVDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUM3QyxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRTlCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFFcEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUU3RCxPQUFPLElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFFN0MsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQzdDLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUVwQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBRTdELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0Q7SUFDRixDQUFDOzs4SEEzQ1csdUNBQXVDOzZGQUF2Qyx1Q0FBdUMsV0FBdkMsdUNBQXVDO3VGQUF2Qyx1Q0FBdUM7Y0FEbkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlLCBNdWx0aURvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNvcnRUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi90b2dnbGUvc29ydC10b2dnbGVkLmV2ZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENoYW5nZVNvcnRQYXJhbXMgfSBmcm9tICcuL2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBTb3J0T3JkZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2NvcmUvZG9tYWluL29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5leHBvcnQgdHlwZSBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudFR5cGUgPSBTb3J0VG9nZ2xlZEV2ZW50IHwgU29ydE9yZGVyU2V0RXZlbnQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxDb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudFR5cGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25EaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRmb3JFdmVudHMoKTogQXJyYXk8RG9tYWluRXZlbnRUeXBlPENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50VHlwZT4+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U29ydFRvZ2dsZWRFdmVudCxcblx0XHRcdFNvcnRPcmRlclNldEV2ZW50XG5cdFx0XTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRUeXBlKTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU29ydFRvZ2dsZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IGNvbXBvc2l0aW9uSWQgPSBldmVudC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRcdGRpcnMgPSBldmVudC5nZXREaXJlY3Rpb25zKCk7XG5cblx0XHRcdGNvbnN0IHBhcmFtcyA9IGRpcnMubWFwKChkaXI6IGFueSkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBuZXcgQ29sdW1uRmllbGRJZChkaXIuZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENoYW5nZVNvcnRQYXJhbXMoY29sdW1uRmllbGRJZCwgZGlyLmRpcmVjdGlvbik7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuY2hhbmdlU29ydChjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTb3J0T3JkZXJTZXRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IGNvbXBvc2l0aW9uSWQgPSBldmVudC5nZXRDb21wb3NpdGlvbklkKCksXG5cdFx0XHRcdGRpcnMgPSBldmVudC5nZXREaXJlY3Rpb25zKCk7XG5cblx0XHRcdGNvbnN0IHBhcmFtcyA9IGRpcnMubWFwKChkaXI6IGFueSkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBuZXcgQ29sdW1uRmllbGRJZChkaXIuZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENoYW5nZVNvcnRQYXJhbXMoY29sdW1uRmllbGRJZCwgZGlyLmRpcmVjdGlvbik7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuY2hhbmdlU29ydChjb21wb3NpdGlvbklkLCBwYXJhbXMpO1xuXHRcdH1cblx0fVxuXG5cbn1cbiJdfQ==