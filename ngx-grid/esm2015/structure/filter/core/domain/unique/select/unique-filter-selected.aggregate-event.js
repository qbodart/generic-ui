import { UniqueFilterSelectedEvent } from './unique-filter-selected.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export class UniqueFilterSelectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'UniqueFilterSelectedAggregateEvent');
    }
    toDomainEvent() {
        return new UniqueFilterSelectedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3NlbGVjdC91bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUcvRixNQUFNLE9BQU8sa0NBQW1DLFNBQVEsdUJBQXVCO0lBRTlFLFlBQVksV0FBd0I7UUFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLHlCQUF5QixDQUNuQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3JCLENBQUM7SUFDSCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuL3VuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyU2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1VuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==