import { Injectable } from '@angular/core';
import { InMemoryAggregateStore } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../in-memory.composition.store";
import * as i2 from "@generic-ui/hermes";
export class InMemoryCompositionAggregateStore extends InMemoryAggregateStore {
    constructor(inMemoryCompositionStore, aggregateStoreRegister) {
        super(inMemoryCompositionStore, aggregateStoreRegister);
    }
}
InMemoryCompositionAggregateStore.ɵfac = function InMemoryCompositionAggregateStore_Factory(t) { return new (t || InMemoryCompositionAggregateStore)(i0.ɵɵinject(i1.InMemoryCompositionStore), i0.ɵɵinject(i2.AggregateStoreRegister)); };
InMemoryCompositionAggregateStore.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InMemoryCompositionAggregateStore, factory: InMemoryCompositionAggregateStore.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InMemoryCompositionAggregateStore, [{
        type: Injectable
    }], function () { return [{ type: i1.InMemoryCompositionStore }, { type: i2.AggregateStoreRegister }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQTBCLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFTcEYsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLHNCQUEyRDtJQUVqSCxZQUFZLHdCQUFrRCxFQUMzRCxzQkFBOEM7UUFDaEQsS0FBSyxDQUFDLHdCQUF3QixFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7a0hBTFcsaUNBQWlDO3VGQUFqQyxpQ0FBaUMsV0FBakMsaUNBQWlDO3VGQUFqQyxpQ0FBaUM7Y0FEN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciwgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlIGV4dGVuZHMgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxDb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlLFxuXHRcdFx0XHRhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlLCBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKTtcblx0fVxuXG59XG4iXX0=