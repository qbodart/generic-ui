import { ReadModelRootId } from '@generic-ui/hermes';
import { CompositionId } from './composition.id';
export class CompositionReadModelRootId extends ReadModelRootId {
    constructor(id) {
        super(id);
    }
    toAggregateId() {
        return new CompositionId(this.toString());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsZUFBZTtJQUU5RCxZQUFZLEVBQVU7UUFDckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmlkJztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG5cdFx0c3VwZXIoaWQpO1xuXHR9XG5cblx0dG9BZ2dyZWdhdGVJZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uSWQodGhpcy50b1N0cmluZygpKTtcblx0fVxufVxuIl19