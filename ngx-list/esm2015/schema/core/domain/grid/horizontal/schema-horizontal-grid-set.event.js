import { SchemaDomainEvent } from '../../schema.domain-event';
export class SchemaHorizontalGridSetEvent extends SchemaDomainEvent {
    constructor(schemaId, horizontalGrid) {
        super(schemaId, horizontalGrid, 'SchemaHorizontalGridSetEvent');
        this.horizontalGrid = horizontalGrid;
    }
    getHorizontalGrid() {
        return this.horizontalGrid;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9jb3JlL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHOUQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGlCQUFpQjtJQUVsRSxZQUFZLFFBQWtCLEVBQ1YsY0FBdUI7UUFDMUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUQ3QyxtQkFBYyxHQUFkLGNBQWMsQ0FBUztJQUUzQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL3NjaGVtYS5kb21haW4tZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50IGV4dGVuZHMgU2NoZW1hRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBTY2hlbWFJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBob3Jpem9udGFsR3JpZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCBob3Jpem9udGFsR3JpZCwgJ1NjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldEhvcml6b250YWxHcmlkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhvcml6b250YWxHcmlkO1xuXHR9XG59XG4iXX0=