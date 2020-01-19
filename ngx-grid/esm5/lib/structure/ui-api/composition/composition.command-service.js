/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionDispatcher } from '../../domain/composition/command/composition.dispatcher';
import { globalCompositionId } from '../../domain/composition/global-composition-id';
var CompositionCommandService = /** @class */ (function () {
    function CompositionCommandService(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.init = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.init(compositionId);
    };
    /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setColumns = /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    function (params, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setColumns(compositionId, params);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setWidth(compositionId, width);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setContainerWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    };
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    function (enabled, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.enableColumn = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setColumnEnabled(compositionId, columnId, true);
    };
    /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.disableColumn = /**
     * @param {?} columnId
     * @param {?=} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setColumnEnabled(compositionId, columnId, false);
    };
    CompositionCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionCommandService.ctorParameters = function () { return [
        { type: CompositionDispatcher }
    ]; };
    return CompositionCommandService;
}());
export { CompositionCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandService.prototype.compositionDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFNckY7SUFHQyxtQ0FBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7Ozs7SUFFRCx3Q0FBSTs7OztJQUFKLFVBQUssYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDdEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFRCw4Q0FBVTs7Ozs7SUFBVixVQUFXLE1BQTJCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDekYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsNENBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDekUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQscURBQWlCOzs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCxrREFBYzs7Ozs7SUFBZCxVQUFlLE9BQWdCLEVBQUUsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsZ0RBQVk7Ozs7O0lBQVosVUFBYSxRQUFrQixFQUFFLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ2xGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7OztJQUVELGlEQUFhOzs7OztJQUFiLFVBQWMsUUFBa0IsRUFBRSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNuRixJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RSxDQUFDOztnQkFoQ0QsVUFBVTs7OztnQkFSRixxQkFBcUI7O0lBMEM5QixnQ0FBQztDQUFBLEFBbENELElBa0NDO1NBakNZLHlCQUF5Qjs7Ozs7O0lBRXpCLDBEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IGdsb2JhbENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vZ2xvYmFsLWNvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL2NvbHVtbi5pZCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db21tYW5kU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0aW5pdChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLmluaXQoY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5zKGNvbXBvc2l0aW9uSWQsIHBhcmFtcyk7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25EaXNwYXRjaGVyLnNldFdpZHRoKGNvbXBvc2l0aW9uSWQsIHdpZHRoKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKHdpZHRoOiBudW1iZXIsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZCwgd2lkdGgpO1xuXHR9XG5cblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbiwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRSZXNpemVXaWR0aChjb21wb3NpdGlvbklkLCBlbmFibGVkKTtcblx0fVxuXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkRpc3BhdGNoZXIuc2V0Q29sdW1uRW5hYmxlZChjb21wb3NpdGlvbklkLCBjb2x1bW5JZCwgdHJ1ZSk7XG5cdH1cblxuXHRkaXNhYmxlQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uRGlzcGF0Y2hlci5zZXRDb2x1bW5FbmFibGVkKGNvbXBvc2l0aW9uSWQsIGNvbHVtbklkLCBmYWxzZSk7XG5cdH1cblxufVxuIl19