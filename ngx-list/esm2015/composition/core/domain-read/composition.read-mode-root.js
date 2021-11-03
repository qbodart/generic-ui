import { ReadModelRoot } from '@generic-ui/hermes';
export class CompositionReadModeRoot extends ReadModelRoot {
    constructor(uid, ready, allColumns, activeColumns, width, resizeWidth) {
        super(uid);
        this.ready = ready;
        this.allColumns = allColumns;
        this.activeColumns = activeColumns;
        this.width = width;
        this.resizeWidth = resizeWidth;
    }
    getActiveColumns() {
        return this.activeColumns;
    }
    getAllColumns() {
        return this.allColumns;
    }
    getActiveHeaderColumns() {
        return this.getActiveColumns()
            .map((column, index) => column.toHeaderCellTemplateWithContext(index));
    }
    getHeaderColumns() {
        return this.getAllColumns()
            .map((column, index) => column.toHeaderCellTemplateWithContext(index));
    }
    getTemplateColumns() {
        return this.getActiveColumns()
            .map((column) => column.toContentCellTemplateWithAccessor());
    }
    getWidth() {
        return this.width;
    }
    getContainerWidth() {
        return +this.width - 2;
    }
    isReady() {
        return this.ready;
    }
    isResizeWidthEnabled() {
        return this.resizeWidth;
    }
    equals(composition) {
        return this.width === composition.width &&
            this.resizeWidth === composition.resizeWidth &&
            this.equalsByColumns(composition.allColumns);
    }
    equalsByColumns(columns) {
        return this.allColumns.length === columns.length;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBUW5ELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxhQUF5QztJQUVyRixZQUFZLEdBQStCLEVBQ3ZCLEtBQWMsRUFDZCxVQUFtQyxFQUNuQyxhQUFzQyxFQUN0QyxLQUFhLEVBQ2IsV0FBb0I7UUFDdkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBTFEsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVM7SUFFeEMsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQXNCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3hCLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFO2FBQ3JCLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3hCLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFvQztRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUs7WUFDdEMsSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsV0FBVztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQWdDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uUmVhZE1vZGVSb290IGV4dGVuZHMgUmVhZE1vZGVsUm9vdDxDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHVpZDogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVhZHk6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsQ29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZXNpemVXaWR0aDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHVpZCk7XG5cdH1cblxuXHRnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHR9XG5cblx0Z2V0QWxsQ29sdW1ucygpOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucztcblx0fVxuXG5cdGdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBY3RpdmVDb2x1bW5zKClcblx0XHRcdFx0ICAgLm1hcCgoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBjb2x1bW4udG9IZWFkZXJDZWxsVGVtcGxhdGVXaXRoQ29udGV4dChpbmRleCkpO1xuXHR9XG5cblx0Z2V0SGVhZGVyQ29sdW1ucygpOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4ge1xuXHRcdHJldHVybiB0aGlzLmdldEFsbENvbHVtbnMoKVxuXHRcdFx0XHQgICAubWFwKChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIGluZGV4OiBudW1iZXIpID0+IGNvbHVtbi50b0hlYWRlckNlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KGluZGV4KSk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZUNvbHVtbnMoKTogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpXG5cdFx0XHRcdCAgIC5tYXAoKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbikgPT4gY29sdW1uLnRvQ29udGVudENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcigpKTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRDb250YWluZXJXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiArdGhpcy53aWR0aCAtIDI7XG5cdH1cblxuXHRpc1JlYWR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnJlYWR5O1xuXHR9XG5cblx0aXNSZXNpemVXaWR0aEVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucmVzaXplV2lkdGg7XG5cdH1cblxuXHRlcXVhbHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGggPT09IGNvbXBvc2l0aW9uLndpZHRoICYmXG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoID09PSBjb21wb3NpdGlvbi5yZXNpemVXaWR0aCAmJlxuXHRcdFx0dGhpcy5lcXVhbHNCeUNvbHVtbnMoY29tcG9zaXRpb24uYWxsQ29sdW1ucyk7XG5cdH1cblxuXHRlcXVhbHNCeUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmxlbmd0aCA9PT0gY29sdW1ucy5sZW5ndGg7XG5cdH1cblxufVxuIl19