import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export class SelectionEnabledSetEvent extends StructureDomainEvent {
    constructor(aggregateId, enabled) {
        super(aggregateId, enabled, 'SelectionEnabledSetEvent');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWVuYWJsZWQtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZXQtZW5hYmxlZC9zZWxlY3Rpb24tZW5hYmxlZC1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFekYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLG9CQUFvQjtJQUVqRSxZQUFZLFdBQXdCLEVBQ2hCLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFEckMsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUVwQyxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uRW5hYmxlZFNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIGVuYWJsZWQsICdTZWxlY3Rpb25FbmFibGVkU2V0RXZlbnQnKTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cbn1cbiJdfQ==