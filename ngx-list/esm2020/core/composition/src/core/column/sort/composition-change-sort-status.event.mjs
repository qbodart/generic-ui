import { CompositionDomainEvent } from '../../composition.domain-event';
export class CompositionChangeSortStatusEvent extends CompositionDomainEvent {
    constructor(aggregateId, activeColumns) {
        super(aggregateId, activeColumns, 'CompositionChangeSortStatusEvent');
        this.activeColumns = activeColumns;
    }
    getCompositionId() {
        return this.getAggregateId();
    }
    getActiveColumns() {
        return this.activeColumns;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd4RSxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsc0JBQXNCO0lBRTNFLFlBQVksV0FBMEIsRUFDbEIsYUFBd0M7UUFDM0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztRQURuRCxrQkFBYSxHQUFiLGFBQWEsQ0FBMkI7SUFFNUQsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50IGV4dGVuZHMgQ29tcG9zaXRpb25Eb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBhY3RpdmVDb2x1bW5zLCAnQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWdncmVnYXRlSWQoKTtcblx0fVxuXG5cdGdldEFjdGl2ZUNvbHVtbnMoKTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlQ29sdW1ucztcblx0fVxuXG59XG4iXX0=