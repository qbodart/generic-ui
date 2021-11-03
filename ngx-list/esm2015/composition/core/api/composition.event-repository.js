import { Injectable } from '@angular/core';
import { EventRepository } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export class CompositionEventRepository extends EventRepository {
    constructor(domainEventBus) {
        super(domainEventBus);
    }
}
CompositionEventRepository.ɵfac = function CompositionEventRepository_Factory(t) { return new (t || CompositionEventRepository)(i0.ɵɵinject(i1.DomainEventBus)); };
CompositionEventRepository.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CompositionEventRepository, factory: CompositionEventRepository.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompositionEventRepository, [{
        type: Injectable
    }], function () { return [{ type: i1.DomainEventBus }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBa0IsZUFBZSxFQUFvQixNQUFNLG9CQUFvQixDQUFDOzs7QUFRdkYsTUFBTSxPQUFnQiwwQkFBMkIsU0FBUSxlQUEwRDtJQUVsSCxZQUFzQixjQUE4QjtRQUNuRCxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7b0dBSm9CLDBCQUEwQjtnRkFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBRC9DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzLCBFdmVudFJlcG9zaXRvcnksIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvY29tcG9zaXRpb24uY29sdW1ucy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkLCBDb21wb3NpdGlvbklkPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdGFic3RyYWN0IG9uQ29sdW1uc0NoYW5nZWQoY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudD47XG5cblx0YWJzdHJhY3Qgb25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZD86IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG59XG4iXX0=