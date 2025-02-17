import { Optional } from '../../../common/optional';
export class PersistStateStore {
    constructor() {
        this.state = new Map();
    }
    set(anemia) {
        this.state.set(anemia.getId(), anemia);
    }
    setMany(anemias) {
        anemias.forEach((anemia) => {
            this.set(anemia);
        });
    }
    get(aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    }
    getAll() {
        return Array.from(this.state.values());
    }
    clear() {
        this.state.clear();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1zdGF0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2luZnJhc3RydWN0dXJlL3BlcnNpc3QvcGVyc2lzdC1zdGF0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFLcEQsTUFBTSxPQUFnQixpQkFBaUI7SUFBdkM7UUFFa0IsVUFBSyxHQUFtQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBdUJwRCxDQUFDO0lBckJBLEdBQUcsQ0FBQyxNQUFTO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBaUI7UUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQVMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsR0FBRyxDQUFDLFdBQXdCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxNQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc2lzdEFuZW1pYSB9IGZyb20gJy4vcGVyc2lzdC1hbmVtaWEnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0U3RhdGVTdG9yZTxJIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkLCBBIGV4dGVuZHMgUGVyc2lzdEFuZW1pYTxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGU6IE1hcDxzdHJpbmcsIEE+ID0gbmV3IE1hcCgpO1xuXG5cdHNldChhbmVtaWE6IEEpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLnNldChhbmVtaWEuZ2V0SWQoKSwgYW5lbWlhKTtcblx0fVxuXG5cdHNldE1hbnkoYW5lbWlhczogQXJyYXk8QT4pOiB2b2lkIHtcblx0XHRhbmVtaWFzLmZvckVhY2goKGFuZW1pYTogQSkgPT4ge1xuXHRcdFx0dGhpcy5zZXQoYW5lbWlhKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxBPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuc3RhdGUuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxBPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zdGF0ZS52YWx1ZXMoKSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLmNsZWFyKCk7XG5cdH1cbn1cbiJdfQ==