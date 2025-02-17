import { Entity } from '@generic-ui/hermes';
export class ItemEntity extends Entity {
    constructor(id, sourceItem, position, version = 0) {
        super(id);
        this.sourceItem = sourceItem;
        this.position = position;
        this.version = version;
    }
    getSourceItem() {
        return this.sourceItem;
    }
    getVersion() {
        return this.version;
    }
    getPosition() {
        return this.position;
    }
    bumpVersion() {
        this.version += 1;
    }
    setPosition(position) {
        this.position = position;
    }
    clone() {
        const rawData = { ...this.sourceItem };
        return new ItemEntity(this.getId(), rawData, this.version);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvZG9tYWluL2l0ZW0vaXRlbS5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzVDLE1BQU0sT0FBTyxVQUFXLFNBQVEsTUFBb0I7SUFRbkQsWUFBWSxFQUFnQixFQUN6QixVQUFlLEVBQ2YsUUFBZ0IsRUFDaEIsVUFBa0IsQ0FBQztRQUNyQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUs7UUFFSixNQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXZDLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSXRlbUVudGl0eUlkIH0gZnJvbSAnLi9pdGVtLmVudGl0eS1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEl0ZW1FbnRpdHkgZXh0ZW5kcyBFbnRpdHk8SXRlbUVudGl0eUlkPiB7XG5cblx0c291cmNlSXRlbTogYW55OyAvLyB0T0RPXG5cblx0cHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBJdGVtRW50aXR5SWQsXG5cdFx0XHRcdHNvdXJjZUl0ZW06IGFueSxcblx0XHRcdFx0cG9zaXRpb246IG51bWJlcixcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHN1cGVyKGlkKTtcblx0XHR0aGlzLnNvdXJjZUl0ZW0gPSBzb3VyY2VJdGVtO1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHR9XG5cblx0Z2V0U291cmNlSXRlbSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZUl0ZW07XG5cdH1cblxuXHRnZXRWZXJzaW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cblxuXHRidW1wVmVyc2lvbigpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnNpb24gKz0gMTtcblx0fVxuXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdH1cblxuXHRjbG9uZSgpOiBJdGVtRW50aXR5IHtcblxuXHRcdGNvbnN0IHJhd0RhdGEgPSB7IC4uLnRoaXMuc291cmNlSXRlbSB9O1xuXG5cdFx0cmV0dXJuIG5ldyBJdGVtRW50aXR5KHRoaXMuZ2V0SWQoKSwgcmF3RGF0YSwgdGhpcy52ZXJzaW9uKTtcblx0fVxuXG59XG4iXX0=