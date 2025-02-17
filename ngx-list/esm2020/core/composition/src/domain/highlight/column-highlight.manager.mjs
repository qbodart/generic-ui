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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vaGlnaGxpZ2h0L2NvbHVtbi1oaWdobGlnaHQubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBRVMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLHVCQUFrQixHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsNEJBQTRCO0lBaUJsRixDQUFDO0lBZkEsYUFBYSxDQUFDLFFBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFrQjtRQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uaWQnO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uSGlnaGxpZ2h0TWFuYWdlciB7XG5cblx0cHJpdmF0ZSBlbmFibGVkID0gdHJ1ZTtcblxuXHRwcml2YXRlIGhpZ2hsaWdodGVkQ29sdW1uczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7IC8vIHNob3VsZCBiZSBzZXQgb2YgQ29sdW1uSWRcblxuXHRpc0hpZ2hsaWdodGVkKGNvbHVtbklkOiBDb2x1bW5JZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhpZ2hsaWdodGVkQ29sdW1ucy5oYXMoY29sdW1uSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHR0b2dnbGUoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaGlnaGxpZ2h0ZWRDb2x1bW5zLmhhcyhjb2x1bW5JZC50b1N0cmluZygpKSkge1xuXHRcdFx0dGhpcy5oaWdobGlnaHRlZENvbHVtbnMuZGVsZXRlKGNvbHVtbklkLnRvU3RyaW5nKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZ2hsaWdodGVkQ29sdW1ucy5hZGQoY29sdW1uSWQudG9TdHJpbmcoKSk7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlKGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXHRcdHRoaXMuaGlnaGxpZ2h0ZWRDb2x1bW5zLmRlbGV0ZShjb2x1bW5JZC50b1N0cmluZygpKTtcblx0fVxufVxuIl19