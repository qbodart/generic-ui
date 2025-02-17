import { StructureDomainEvent } from '../../../structure-core/src/core/structure.domain-event';
export class ActiveFiltersSetEvent extends StructureDomainEvent {
    constructor(structureId, filters) {
        super(structureId, filters, 'ActiveFiltersSetEvent');
        this.filters = filters;
    }
    getFilters() {
        return this.filters;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2NvcmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRS9GLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxvQkFBb0I7SUFFOUQsWUFBWSxXQUF3QixFQUNoQixPQUF5QztRQUM1RCxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBRGxDLFlBQU8sR0FBUCxPQUFPLENBQWtDO0lBRTdELENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1vZGVsIH0gZnJvbSAnLi4vYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJzU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcnM6IFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyTW9kZWw+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIGZpbHRlcnMsICdBY3RpdmVGaWx0ZXJzU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldEZpbHRlcnMoKTogUmVhZG9ubHlBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJzO1xuXHR9XG5cbn1cbiJdfQ==