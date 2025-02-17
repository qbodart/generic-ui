export class ColumnField {
    constructor(fieldId, accessor, dataType, searchAccessor) {
        this.fieldId = fieldId;
        this.accessor = accessor;
        this.dataType = dataType;
        this.searchAccessor = searchAccessor;
    }
    getId() {
        return this.fieldId;
    }
    getValue(entity) {
        return this.accessor(entity);
    }
    getAccessor() {
        return this.accessor;
    }
    getSearchAccessor() {
        return this.searchAccessor;
    }
    getDataType() {
        return this.dataType;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLE9BQU8sV0FBVztJQVV2QixZQUFZLE9BQXNCLEVBQy9CLFFBQTZCLEVBQzdCLFFBQWtCLEVBQ2xCLGNBQW1DO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbkZpZWxkSWQgfSBmcm9tICcuL2NvbHVtbi1maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEFjY2Vzc29yIH0gZnJvbSAnLi9jb2x1bW4tZmllbGQtYWNjZXNzb3InO1xuXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL3NyYy9kb21haW4vaXRlbS9pdGVtLmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkZpZWxkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IENvbHVtbkZpZWxkSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3NvcjogQ29sdW1uRmllbGRBY2Nlc3NvcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaEFjY2Vzc29yOiBDb2x1bW5GaWVsZEFjY2Vzc29yO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YVR5cGU6IERhdGFUeXBlO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkSWQ6IENvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdGFjY2Vzc29yOiBDb2x1bW5GaWVsZEFjY2Vzc29yLFxuXHRcdFx0XHRkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdHNlYXJjaEFjY2Vzc29yOiBDb2x1bW5GaWVsZEFjY2Vzc29yKSB7XG5cdFx0dGhpcy5maWVsZElkID0gZmllbGRJZDtcblx0XHR0aGlzLmFjY2Vzc29yID0gYWNjZXNzb3I7XG5cdFx0dGhpcy5kYXRhVHlwZSA9IGRhdGFUeXBlO1xuXHRcdHRoaXMuc2VhcmNoQWNjZXNzb3IgPSBzZWFyY2hBY2Nlc3Nvcjtcblx0fVxuXG5cdGdldElkKCk6IENvbHVtbkZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IEl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yKGVudGl0eSk7XG5cdH1cblxuXHRnZXRBY2Nlc3NvcigpOiBDb2x1bW5GaWVsZEFjY2Vzc29yIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvcjtcblx0fVxuXG5cdGdldFNlYXJjaEFjY2Vzc29yKCk6IENvbHVtbkZpZWxkQWNjZXNzb3Ige1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEFjY2Vzc29yO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmRhdGFUeXBlO1xuXHR9XG5cbn1cbiJdfQ==