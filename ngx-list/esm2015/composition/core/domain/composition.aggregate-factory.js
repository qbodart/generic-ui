import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { CompositionAggregate } from './composition.aggregate';
import * as i0 from "@angular/core";
import * as i1 from "./column/column-entity.factory";
import * as i2 from "./group/composition.group.factory";
export class CompositionAggregateFactory extends AggregateFactory {
    constructor(columnFactory, groupFactory) {
        super();
        this.columnFactory = columnFactory;
        this.groupFactory = groupFactory;
    }
    create(id) {
        return new CompositionAggregate(id, this.columnFactory, this.groupFactory);
    }
}
CompositionAggregateFactory.ɵfac = function CompositionAggregateFactory_Factory(t) { return new (t || CompositionAggregateFactory)(i0.ɵɵinject(i1.ColumnEntityFactory), i0.ɵɵinject(i2.CompositionGroupFactory)); };
CompositionAggregateFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CompositionAggregateFactory, factory: CompositionAggregateFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompositionAggregateFactory, [{
        type: Injectable
    }], function () { return [{ type: i1.ColumnEntityFactory }, { type: i2.CompositionGroupFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFNL0QsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFxRDtJQUVyRyxZQUE2QixhQUFrQyxFQUMzQyxZQUFxQztRQUN4RCxLQUFLLEVBQUUsQ0FBQztRQUZvQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDM0MsaUJBQVksR0FBWixZQUFZLENBQXlCO0lBRXpELENBQUM7SUFFRCxNQUFNLENBQUMsRUFBaUI7UUFDdkIsT0FBTyxJQUFJLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOztzR0FUVywyQkFBMkI7aUZBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUR2QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cEZhY3RvcnkgfSBmcm9tICcuL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLmZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PENvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyb3VwRmFjdG9yeTogQ29tcG9zaXRpb25Hcm91cEZhY3RvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKGlkOiBDb21wb3NpdGlvbklkKTogQ29tcG9zaXRpb25BZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25BZ2dyZWdhdGUoaWQsIHRoaXMuY29sdW1uRmFjdG9yeSwgdGhpcy5ncm91cEZhY3RvcnkpO1xuXHR9XG59XG4iXX0=