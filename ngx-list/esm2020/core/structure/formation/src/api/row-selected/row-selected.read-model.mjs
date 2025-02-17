export class RowSelectedReadModel {
    constructor(itemIds, allSelected, allUnselected) {
        this.itemIds = itemIds;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    getAll() {
        return this.itemIds;
    }
    isSelected(id) {
        return this.itemIds.some((itemId) => itemId === id);
    }
    isAllSelected() {
        return this.allSelected;
    }
    isAllUnselected() {
        return this.allUnselected;
    }
    isIndeterminate() {
        return !(this.isAllSelected() || this.isAllUnselected());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGVkLnJlYWQtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sb0JBQW9CO0lBRWhDLFlBQTZCLE9BQXNCLEVBQy9CLFdBQW9CLEVBQ3BCLGFBQXNCO1FBRmIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBUztJQUMxQyxDQUFDO0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpdGVtSWRzOiBBcnJheTxzdHJpbmc+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsbFNlbGVjdGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFsbFVuc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtSWRzO1xuXHR9XG5cblx0aXNTZWxlY3RlZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXRlbUlkcy5zb21lKChpdGVtSWQ6IHN0cmluZykgPT4gaXRlbUlkID09PSBpZCk7XG5cdH1cblxuXHRpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkO1xuXHR9XG5cblx0aXNBbGxVbnNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFVuc2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0luZGV0ZXJtaW5hdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5pc0FsbFNlbGVjdGVkKCkgfHwgdGhpcy5pc0FsbFVuc2VsZWN0ZWQoKSk7XG5cdH1cblxufVxuIl19