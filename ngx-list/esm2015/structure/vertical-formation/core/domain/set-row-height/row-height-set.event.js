import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class RowHeightSetEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'RowHeightSetEvent');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWhlaWdodC1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2V0LXJvdy1oZWlnaHQvcm93LWhlaWdodC1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEYsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG9CQUFvQjtJQUUxRCxZQUFZLFdBQXdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFJvd0hlaWdodFNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBudWxsLCAnUm93SGVpZ2h0U2V0RXZlbnQnKTtcblx0fVxufVxuIl19