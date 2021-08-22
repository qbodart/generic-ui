/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRepository } from '@generic-ui/hermes';
/**
 * @abstract
 */
var /**
 * @abstract
 */
StructureAggregateRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregateRepository, _super);
    function StructureAggregateRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StructureAggregateRepository;
}(AggregateRepository));
/**
 * @abstract
 */
export { StructureAggregateRepository };
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureAggregateRepository.prototype.findById = function (aggregateId) { };
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    StructureAggregateRepository.prototype.save = function (aggregate) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFZLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLbkU7Ozs7SUFBMkQsd0RBQW9EO0lBQS9HOztJQU1BLENBQUM7SUFBRCxtQ0FBQztBQUFELENBQUMsQUFORCxDQUEyRCxtQkFBbUIsR0FNN0U7Ozs7Ozs7Ozs7O0lBSkEsNkVBQTBFOzs7Ozs7SUFFMUUsdUVBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSwgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuL3N0cnVjdHVyZS5pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgQWdncmVnYXRlUmVwb3NpdG9yeTxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0YWJzdHJhY3QgZmluZEJ5SWQoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkKTogT3B0aW9uYWw8U3RydWN0dXJlQWdncmVnYXRlPjtcblxuXHRhYnN0cmFjdCBzYXZlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogdm9pZDtcblxufVxuIl19