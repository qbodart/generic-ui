import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Geometry } from './geometry';
import * as i0 from "@angular/core";
export class GeometryService {
    constructor() {
        this.geometryResults$ = new Subject();
    }
    watchGeometry() {
        return this.geometryResults$.asObservable();
    }
    changeGeometry(container, menu, windowSize) {
        const geometry = new Geometry(container, menu, windowSize);
        this.geometryResults$.next(geometry);
    }
}
GeometryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GeometryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GeometryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GeometryService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GeometryService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9uYXZpZ2F0aW9uL2Ryb3Bkb3duL2dlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBR3RDLE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBR1MscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztLQWFuRDtJQVhBLGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsY0FBYyxDQUFDLFNBQXFCLEVBQUUsSUFBZ0IsRUFBRSxVQUFrQjtRQUV6RSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7NEdBZFcsZUFBZTtnSEFBZixlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgZ2VvbWV0cnlSZXN1bHRzJCA9IG5ldyBTdWJqZWN0PEdlb21ldHJ5PigpO1xuXG5cdHdhdGNoR2VvbWV0cnkoKTogT2JzZXJ2YWJsZTxHZW9tZXRyeT4ge1xuXHRcdHJldHVybiB0aGlzLmdlb21ldHJ5UmVzdWx0cyQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRjaGFuZ2VHZW9tZXRyeShjb250YWluZXI6IEVsZW1lbnRSZWYsIG1lbnU6IEVsZW1lbnRSZWYsIHdpbmRvd1NpemU6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZ2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoY29udGFpbmVyLCBtZW51LCB3aW5kb3dTaXplKTtcblxuXHRcdHRoaXMuZ2VvbWV0cnlSZXN1bHRzJC5uZXh0KGdlb21ldHJ5KTtcblxuXHR9XG59XG4iXX0=