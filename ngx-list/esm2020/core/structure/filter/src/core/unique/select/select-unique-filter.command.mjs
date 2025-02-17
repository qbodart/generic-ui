import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export class SelectUniqueFilterCommand extends StructureCommand {
    constructor(structureId, fieldId, uniqueValueId) {
        super(structureId, 'SelectUniqueFilterCommand');
        this.fieldId = fieldId;
        this.uniqueValueId = uniqueValueId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getUniqueValueId() {
        return this.uniqueValueId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9jb3JlL3VuaXF1ZS9zZWxlY3Qvc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUc1RixNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCO0lBRTlELFlBQVksV0FBd0IsRUFDaEIsT0FBZ0IsRUFDaEIsYUFBNEI7UUFDL0MsS0FBSyxDQUFDLFdBQVcsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBRjdCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFaEQsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvc3JjL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9jb3JlL3N0cnVjdHVyZS5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQnKTtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG5cdGdldFVuaXF1ZVZhbHVlSWQoKTogVW5pcXVlVmFsdWVJZCB7XG5cdFx0cmV0dXJuIHRoaXMudW5pcXVlVmFsdWVJZDtcblx0fVxuXG59XG4iXX0=