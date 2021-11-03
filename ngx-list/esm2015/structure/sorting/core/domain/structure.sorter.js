export class StructureSorter {
    constructor(id, field, direction = true) {
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    getId() {
        return this.sorterId;
    }
    getRank() {
        return this.rank;
    }
    getField() {
        return this.field;
    }
    hasDirection() {
        return this.direction;
    }
    changeDirection() {
        this.direction = !this.direction;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    sort(entities) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((entityOne, entityTwo) => {
            return this.field.sort(entityOne, entityTwo, this.direction);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvcnRpbmcvY29yZS9kb21haW4vc3RydWN0dXJlLnNvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLE9BQU8sZUFBZTtJQVkzQixZQUFZLEVBQVksRUFDckIsS0FBWSxFQUNaLFlBQXFCLElBQUk7UUFOcEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQU94QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxZQUFZLENBQUMsU0FBa0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksQ0FBQyxRQUFpQztRQUVyQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBMkIsRUFBRSxTQUEyQixFQUFFLEVBQUU7WUFDakYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRlcklkIH0gZnJvbSAnLi4vYXBpL3NvcnRlci5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTb3J0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc29ydGVySWQ6IFNvcnRlcklkO1xuXG5cdHByaXZhdGUgY29sdW1uSWQ6IHN0cmluZztcblxuXHRwcml2YXRlIGZpZWxkOiBGaWVsZDtcblxuXHRwcml2YXRlIHJhbms6IG51bWJlciA9IDE7XG5cblx0cHJpdmF0ZSBkaXJlY3Rpb246IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaWQ6IFNvcnRlcklkLFxuXHRcdFx0XHRmaWVsZDogRmllbGQsXG5cdFx0XHRcdGRpcmVjdGlvbjogYm9vbGVhbiA9IHRydWUpIHtcblx0XHR0aGlzLnNvcnRlcklkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0Z2V0SWQoKTogU29ydGVySWQge1xuXHRcdHJldHVybiB0aGlzLnNvcnRlcklkO1xuXHR9XG5cblx0Z2V0UmFuaygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJhbms7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBGaWVsZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQ7XG5cdH1cblxuXHRoYXNEaXJlY3Rpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9uO1xuXHR9XG5cblx0Y2hhbmdlRGlyZWN0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gIXRoaXMuZGlyZWN0aW9uO1xuXHR9XG5cblx0c2V0RGlyZWN0aW9uKGRpcmVjdGlvbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0c29ydChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0aWVzLnNvcnQoKGVudGl0eU9uZTogT3JpZ2luSXRlbUVudGl0eSwgZW50aXR5VHdvOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5zb3J0KGVudGl0eU9uZSwgZW50aXR5VHdvLCB0aGlzLmRpcmVjdGlvbik7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19