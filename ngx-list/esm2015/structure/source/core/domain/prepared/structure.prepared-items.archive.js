import { Injectable } from '@angular/core';
import { AggregateArchive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class StructurePreparedItemsArchive extends AggregateArchive {
    constructor() {
        super(StructurePreparedItemsArchive.default);
    }
    /**
     * @deprecated
     */
    getPreparedItems(structureId) {
        return this.get(structureId).getValueOrNullOrThrowError();
    }
}
StructurePreparedItemsArchive.default = [];
StructurePreparedItemsArchive.ɵfac = function StructurePreparedItemsArchive_Factory(t) { return new (t || StructurePreparedItemsArchive)(); };
StructurePreparedItemsArchive.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructurePreparedItemsArchive, factory: StructurePreparedItemsArchive.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructurePreparedItemsArchive, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFJdEQsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGdCQUFpRDtJQUluRztRQUNDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0IsQ0FBQyxXQUF3QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUMzRCxDQUFDOztBQVhlLHFDQUFPLEdBQW9DLEVBQUUsQ0FBQzswR0FGbEQsNkJBQTZCO21GQUE3Qiw2QkFBNkIsV0FBN0IsNkJBQTZCO3VGQUE3Qiw2QkFBNkI7Y0FEekMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSBleHRlbmRzIEFnZ3JlZ2F0ZUFyY2hpdmU8UmVhZG9ubHlBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj4ge1xuXG5cdHN0YXRpYyByZWFkb25seSBkZWZhdWx0OiBSZWFkb25seUFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUuZGVmYXVsdCk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldFByZXBhcmVkSXRlbXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KHN0cnVjdHVyZUlkKS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpO1xuXHR9XG5cbn1cbiJdfQ==