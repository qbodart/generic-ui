import { AggregateId } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../api/schema.read-model-root-id';
export class SchemaId extends AggregateId {
    constructor(id) {
        super(id);
    }
    toReadModelRootId() {
        return new SchemaReadModelRootId(this.getId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zY2hlbWEvY29yZS9kb21haW4vc2NoZW1hLmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUd6RSxNQUFNLE9BQU8sUUFBUyxTQUFRLFdBQVc7SUFFeEMsWUFBWSxFQUFVO1FBQ3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFJZCBleHRlbmRzIEFnZ3JlZ2F0ZUlkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG5cdFx0c3VwZXIoaWQpO1xuXHR9XG5cblx0dG9SZWFkTW9kZWxSb290SWQoKTogU2NoZW1hUmVhZE1vZGVsUm9vdElkIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCh0aGlzLmdldElkKCkpO1xuXHR9XG59XG4iXX0=