import { StructureCommand } from '../../../../../core/domain/structure.command';
export class UnselectAllUniqueFilterCommand extends StructureCommand {
    constructor(structureId, fieldId) {
        super(structureId, 'UnselectAllUniqueFilterCommand');
        this.fieldId = fieldId;
    }
    getFieldId() {
        return this.fieldId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvdW5zZWxlY3QtYWxsL3Vuc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHaEYsTUFBTSxPQUFPLDhCQUErQixTQUFRLGdCQUFnQjtJQUVuRSxZQUFZLFdBQXdCLEVBQ2hCLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRXBDLENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxufVxuIl19