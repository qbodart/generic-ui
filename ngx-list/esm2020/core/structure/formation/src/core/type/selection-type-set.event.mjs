import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export class SelectionTypeSetEvent extends StructureDomainEvent {
    constructor(aggregateId, selectionType) {
        super(aggregateId, selectionType, 'SelectionTypeSetEvent');
        this.selectionType = selectionType;
    }
    getType() {
        return this.selectionType;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLXR5cGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2NvcmUvdHlwZS9zZWxlY3Rpb24tdHlwZS1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFbEcsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG9CQUFvQjtJQUU5RCxZQUFZLFdBQXdCLEVBQ2hCLGFBQStCO1FBQ2xELEtBQUssQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFEeEMsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBRW5ELENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvblR5cGVTZXRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0aW9uVHlwZTogUm93U2VsZWN0aW9uVHlwZSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBzZWxlY3Rpb25UeXBlLCAnU2VsZWN0aW9uVHlwZVNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRUeXBlKCk6IFJvd1NlbGVjdGlvblR5cGUge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGlvblR5cGU7XG5cdH1cblxufVxuIl19