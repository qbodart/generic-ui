import { PagesizeChangedEvent } from '../change-pagesize/pagesize-changed.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export class PagesizeChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId) {
        super(structureId, 'PagesizeChangedAggregateEvent');
    }
    toDomainEvent() {
        return new PagesizeChangedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnZXNpemUvcGFnZXNpemUtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHNUYsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHVCQUF1QjtJQUV6RSxZQUFZLFdBQXdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsK0JBQStCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vY2hhbmdlLXBhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdQYWdlc2l6ZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgUGFnZXNpemVDaGFuZ2VkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=