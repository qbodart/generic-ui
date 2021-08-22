/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
/**
 * @abstract
 */
var CompositionEventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionEventRepository, _super);
    function CompositionEventRepository(domainEventBus) {
        return _super.call(this, domainEventBus) || this;
    }
    CompositionEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return CompositionEventRepository;
}(EventRepository));
export { CompositionEventRepository };
if (false) {
    /**
     * @abstract
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onColumnsChanged = function (compositionId) { };
    /**
     * @abstract
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onContainerWidthChanged = function (compositionId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU9yRTtJQUN5RCxzREFBMEQ7SUFFbEgsb0NBQXNCLGNBQThCO2VBQ25ELGtCQUFNLGNBQWMsQ0FBQztJQUN0QixDQUFDOztnQkFMRCxVQUFVOzs7O2dCQVBGLGNBQWM7O0lBa0J2QixpQ0FBQztDQUFBLEFBWEQsQ0FDeUQsZUFBZSxHQVV2RTtTQVZxQiwwQkFBMEI7Ozs7Ozs7SUFNL0MscUZBQThHOzs7Ozs7SUFFOUcsNEZBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkLCBDb21wb3NpdGlvbklkPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdGFic3RyYWN0IG9uQ29sdW1uc0NoYW5nZWQoY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudD47XG5cblx0YWJzdHJhY3Qgb25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG59XG4iXX0=