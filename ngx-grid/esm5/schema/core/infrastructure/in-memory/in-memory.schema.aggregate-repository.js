/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaAggregateRepository } from '../../domain/schema.aggregate-repository';
import { InMemorySchemaAggregateStore } from './in-memory.schema.aggregate-store';
var InMemorySchemaAggregateRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemorySchemaAggregateRepository, _super);
    function InMemorySchemaAggregateRepository(inMemorySchemaAggregateStore) {
        var _this = _super.call(this) || this;
        _this.inMemorySchemaAggregateStore = inMemorySchemaAggregateStore;
        return _this;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    InMemorySchemaAggregateRepository.prototype.findById = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.inMemorySchemaAggregateStore.findById(schemaId);
    };
    /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    InMemorySchemaAggregateRepository.prototype.save = /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    function (schemaAggregate) {
        this.inMemorySchemaAggregateStore.save(schemaAggregate);
    };
    InMemorySchemaAggregateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemorySchemaAggregateRepository.ctorParameters = function () { return [
        { type: InMemorySchemaAggregateStore }
    ]; };
    return InMemorySchemaAggregateRepository;
}(SchemaAggregateRepository));
export { InMemorySchemaAggregateRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaAggregateRepository.prototype.inMemorySchemaAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3JGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR2xGO0lBQ3VELDZEQUF5QjtJQUUvRSwyQ0FBb0IsNEJBQTBEO1FBQTlFLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUU5RSxDQUFDOzs7OztJQUVELG9EQUFROzs7O0lBQVIsVUFBUyxRQUFrQjtRQUMxQixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxnREFBSTs7OztJQUFKLFVBQUssZUFBZ0M7UUFDcEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkFiRCxVQUFVOzs7O2dCQUhGLDRCQUE0Qjs7SUFrQnJDLHdDQUFDO0NBQUEsQUFmRCxDQUN1RCx5QkFBeUIsR0FjL0U7U0FkWSxpQ0FBaUM7Ozs7OztJQUVqQyx5RUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXN0b3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlOiBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZpbmRCeUlkKHNjaGVtYUlkOiBTY2hlbWFJZCk6IE9wdGlvbmFsPFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUuZmluZEJ5SWQoc2NoZW1hSWQpO1xuXHR9XG5cblx0c2F2ZShzY2hlbWFBZ2dyZWdhdGU6IFNjaGVtYUFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZS5zYXZlKHNjaGVtYUFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19