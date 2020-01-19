/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryAggregateStore, AggregateStoreRegister } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
var InMemoryCompositionAggregateStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionAggregateStore, _super);
    function InMemoryCompositionAggregateStore(inMemoryCompositionStore, aggregateStoreRegister) {
        return _super.call(this, inMemoryCompositionStore, aggregateStoreRegister) || this;
    }
    InMemoryCompositionAggregateStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionAggregateStore.ctorParameters = function () { return [
        { type: InMemoryCompositionStore },
        { type: AggregateStoreRegister }
    ]; };
    return InMemoryCompositionAggregateStore;
}(InMemoryAggregateStore));
export { InMemoryCompositionAggregateStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvY29tcG9zaXRpb24vY29tbWFuZC9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQU1qRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUcxRTtJQUN1RCw2REFBNEM7SUFFbEcsMkNBQVksd0JBQWtELEVBQzNELHNCQUE4QztlQUNoRCxrQkFBTSx3QkFBd0IsRUFBRSxzQkFBc0IsQ0FBQztJQUN4RCxDQUFDOztnQkFORCxVQUFVOzs7O2dCQUhGLHdCQUF3QjtnQkFOQSxzQkFBc0I7O0lBNEJ2RCx3Q0FBQztDQUFBLEFBbkJELENBQ3VELHNCQUFzQixHQWtCNUU7U0FsQlksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlLCBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLCBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuY29tcG9zaXRpb24uc3RvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUsXG5cdFx0XHRcdGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcihpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUsIGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpO1xuXHR9XG5cblx0Ly8gQE92ZXJyaWRlXG5cdC8vIGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogQ29tcG9zaXRpb25BZ2dyZWdhdGUge1xuXHQvLyBcdGxldCBjb21wb3NpdGlvbiA9IHN1cGVyLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXHQvL1xuXHQvLyBcdGlmIChjb21wb3NpdGlvbikge1xuXHQvLyBcdFx0cmV0dXJuIGNvbXBvc2l0aW9uLmNsb25lKCk7XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHJldHVybiBudWxsO1xuXHQvLyBcdH1cblx0Ly9cblx0Ly8gfVxufVxuIl19