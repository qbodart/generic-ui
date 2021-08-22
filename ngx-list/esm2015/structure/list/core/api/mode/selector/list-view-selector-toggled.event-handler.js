/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewSelectorRepository } from './list-view.selector.repository';
import { ListViewSelectorToggledEvent } from '../../../domain/mode/selector/list-view-selector-toggled.event';
export class ListViewSelectorToggledEventHandler {
    /**
     * @param {?} listViewSelectorRepository
     */
    constructor(listViewSelectorRepository) {
        this.listViewSelectorRepository = listViewSelectorRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ListViewSelectorToggledEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ListViewSelectorToggledEvent')) {
            this.listViewSelectorRepository.setMode(event.isEnabled(), event.getAggregateId());
        }
    }
}
ListViewSelectorToggledEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewSelectorToggledEventHandler.ctorParameters = () => [
    { type: ListViewSelectorRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledEventHandler.prototype.listViewSelectorRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzdFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBSTlHLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7SUFFL0MsWUFBb0IsMEJBQXNEO1FBQXRELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFDMUUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLDRCQUE0QixDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQW1DO1FBRXpDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7O1lBZkQsVUFBVTs7OztZQU5GLDBCQUEwQjs7Ozs7OztJQVN0Qix5RUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkgfSBmcm9tICcuL2xpc3Qtdmlldy5zZWxlY3Rvci5yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8TGlzdFZpZXdJZCwgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnk6IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8TGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudD4ge1xuXHRcdHJldHVybiBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5LnNldE1vZGUoZXZlbnQuaXNFbmFibGVkKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=