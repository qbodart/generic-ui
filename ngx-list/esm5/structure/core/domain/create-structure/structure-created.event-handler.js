/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureSummariesRepository } from '../../../summaries/core/api/enabled/structure.summaries.repository';
import { StructureCreatedEvent } from './structure-created.event';
var StructureCreatedEventHandler = /** @class */ (function () {
    function StructureCreatedEventHandler(structureSummariesRepository) {
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @return {?}
     */
    StructureCreatedEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return StructureCreatedEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StructureCreatedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            /** @type {?} */
            var structureId = event.getAggregateId();
            this.structureSummariesRepository.init(structureId);
        }
    };
    StructureCreatedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCreatedEventHandler.ctorParameters = function () { return [
        { type: StructureSummariesRepository }
    ]; };
    return StructureCreatedEventHandler;
}());
export { StructureCreatedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCreatedEventHandler.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlsRTtJQUdDLHNDQUFvQiw0QkFBMEQ7UUFBMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUM5RSxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxLQUE0QjtRQUVsQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTs7Z0JBRTNDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFcEQ7SUFFRixDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFMRiw0QkFBNEI7O0lBMkJyQyxtQ0FBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLDRCQUE0Qjs7Ozs7O0lBRTVCLG9FQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvYXBpL2VuYWJsZWQvc3RydWN0dXJlLnN1bW1hcmllcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ3JlYXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeS5pbml0KHN0cnVjdHVyZUlkKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==