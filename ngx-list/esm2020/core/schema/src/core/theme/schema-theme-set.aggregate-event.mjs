import { SchemaThemeSetEvent } from './schema-theme-set.event';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
export class SchemaThemeSetAggregateEvent extends SchemaAggregateEvent {
    constructor(schemaId, theme) {
        super(schemaId, 'SchemaThemeSetAggregateEvent');
        this.theme = theme;
    }
    toDomainEvent() {
        return new SchemaThemeSetEvent(this.getAggregateId(), this.theme);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc2NoZW1hL3NyYy9jb3JlL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxvQkFBb0I7SUFFckUsWUFBWSxRQUFrQixFQUNWLEtBQWtCO1FBQ3JDLEtBQUssQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUQ3QixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBRXRDLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4vc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL3NjaGVtYS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFNjaGVtYUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdGhlbWU6IFNjaGVtYVRoZW1lKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFUaGVtZVNldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFUaGVtZVNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy50aGVtZSk7XG5cdH1cbn1cbiJdfQ==