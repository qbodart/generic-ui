export class ColumnHighlightManager {
    constructor() {
        this.enabled = true;
        this.highlightedColumns = new Set(); // should be set of ColumnId
    }
    isHighlighted(columnId) {
        return this.highlightedColumns.has(columnId.toString());
    }
    toggle(columnId) {
        if (this.highlightedColumns.has(columnId.toString())) {
            this.highlightedColumns.delete(columnId.toString());
        }
        else {
            this.highlightedColumns.add(columnId.toString());
        }
    }
    remove(columnId) {
        this.highlightedColumns.delete(columnId.toString());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9oaWdobGlnaHQvY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFFUyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsdUJBQWtCLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyw0QkFBNEI7SUFpQmxGLENBQUM7SUFmQSxhQUFhLENBQUMsUUFBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxNQUFNLENBQUMsUUFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakQ7SUFDRixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQWtCO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5pZCc7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5IaWdobGlnaHRNYW5hZ2VyIHtcblxuXHRwcml2YXRlIGVuYWJsZWQgPSB0cnVlO1xuXG5cdHByaXZhdGUgaGlnaGxpZ2h0ZWRDb2x1bW5zOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTsgLy8gc2hvdWxkIGJlIHNldCBvZiBDb2x1bW5JZFxuXG5cdGlzSGlnaGxpZ2h0ZWQoY29sdW1uSWQ6IENvbHVtbklkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaGlnaGxpZ2h0ZWRDb2x1bW5zLmhhcyhjb2x1bW5JZC50b1N0cmluZygpKTtcblx0fVxuXG5cdHRvZ2dsZShjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5oaWdobGlnaHRlZENvbHVtbnMuaGFzKGNvbHVtbklkLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHR0aGlzLmhpZ2hsaWdodGVkQ29sdW1ucy5kZWxldGUoY29sdW1uSWQudG9TdHJpbmcoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGlnaGxpZ2h0ZWRDb2x1bW5zLmFkZChjb2x1bW5JZC50b1N0cmluZygpKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmUoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cdFx0dGhpcy5oaWdobGlnaHRlZENvbHVtbnMuZGVsZXRlKGNvbHVtbklkLnRvU3RyaW5nKCkpO1xuXHR9XG59XG4iXX0=