/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewModeRepository } from './list-view.mode.repository';
import { ListViewModeSetEvent } from '../../domain/mode/list-view-mode-set.event';
export class ListViewModeSetEventHandler {
    /**
     * @param {?} listViewModeRepository
     */
    constructor(listViewModeRepository) {
        this.listViewModeRepository = listViewModeRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ListViewModeSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ListViewModeSetEvent')) {
            this.listViewModeRepository.setMode(event.getTheme(), event.getAggregateId());
        }
    }
}
ListViewModeSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewModeSetEventHandler.ctorParameters = () => [
    { type: ListViewModeRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetEventHandler.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvYXBpL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFJbEYsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUV2QyxZQUFvQixzQkFBOEM7UUFBOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUNsRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sb0JBQW9CLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDOUU7SUFFRixDQUFDOzs7WUFoQkQsVUFBVTs7OztZQUxGLHNCQUFzQjs7Ozs7OztJQVFsQiw2REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4vbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxMaXN0Vmlld0lkLCBMaXN0Vmlld01vZGVTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPExpc3RWaWV3TW9kZVNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIExpc3RWaWV3TW9kZVNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBMaXN0Vmlld01vZGVTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0xpc3RWaWV3TW9kZVNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5zZXRNb2RlKGV2ZW50LmdldFRoZW1lKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==