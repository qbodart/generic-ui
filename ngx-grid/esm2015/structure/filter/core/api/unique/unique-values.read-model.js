export class UniqueValuesReadModel {
    constructor(map) {
        this.map = new Map();
        this.allSelected = new Map();
        this.allDisabled = new Map();
        this.map = map;
        this.calculateSelection();
    }
    getValues(fieldId) {
        return this.map.get(fieldId.toString());
    }
    areAllSelected(fieldId) {
        return this.allSelected.get(fieldId.toString());
    }
    areAllDisabled(fieldId) {
        return this.allDisabled.get(fieldId.toString());
    }
    isSelectAllChecked(fieldId) {
        return this.areAllSelected(fieldId);
    }
    isIndeterminate(fieldId) {
        return !(this.areAllSelected(fieldId) || this.areAllDisabled(fieldId));
    }
    calculateSelection() {
        for (const key of Array.from(this.map.keys())) {
            const values = this.map.get(key);
            this.allSelected.set(key, !values.some((r) => !r.isEnabled()));
            this.allDisabled.set(key, !values.some((r) => r.isEnabled()));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLHFCQUFxQjtJQVFqQyxZQUFZLEdBQTZDO1FBTnhDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBdUMsQ0FBQztRQUVyRCxnQkFBVyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUUvRCxnQkFBVyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUcvRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxTQUFTLENBQUMsT0FBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFnQjtRQUM5QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxPQUFnQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFnQjtRQUMvQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU8sa0JBQWtCO1FBRXpCLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7WUFFOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ25CLEdBQUcsRUFDSCxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQ25DLENBQUM7WUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDbkIsR0FBRyxFQUNILENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQ2xDLENBQUM7U0FDRjtJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLnJlYWQtbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZVJlYWRNb2RlbD4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogTWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFsbERpc2FibGVkOiBNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKG1hcDogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+Pikge1xuXHRcdHRoaXMubWFwID0gbWFwO1xuXHRcdHRoaXMuY2FsY3VsYXRlU2VsZWN0aW9uKCk7XG5cdH1cblxuXHRnZXRWYWx1ZXMoZmllbGRJZDogRmllbGRJZCk6IEFycmF5PFVuaXF1ZVZhbHVlUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0YXJlQWxsU2VsZWN0ZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0YXJlQWxsRGlzYWJsZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbERpc2FibGVkLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0aXNTZWxlY3RBbGxDaGVja2VkKGZpZWxkSWQ6IEZpZWxkSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hcmVBbGxTZWxlY3RlZChmaWVsZElkKTtcblx0fVxuXG5cdGlzSW5kZXRlcm1pbmF0ZShmaWVsZElkOiBGaWVsZElkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5hcmVBbGxTZWxlY3RlZChmaWVsZElkKSB8fCB0aGlzLmFyZUFsbERpc2FibGVkKGZpZWxkSWQpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU2VsZWN0aW9uKCk6IHZvaWQge1xuXG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLm1hcC5rZXlzKCkpKSB7XG5cblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMubWFwLmdldChrZXkpO1xuXG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkLnNldChcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHQhdmFsdWVzLnNvbWUoKHIpID0+ICFyLmlzRW5hYmxlZCgpKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5hbGxEaXNhYmxlZC5zZXQoXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0IXZhbHVlcy5zb21lKChyKSA9PiByLmlzRW5hYmxlZCgpKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==