import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { CoreContainer } from '../../../api/core.container';
export class PersistAggregateStore extends AggregateStore {
    constructor(stateStore) {
        super();
        this.stateStore = stateStore;
        this.aggregateStoreRegister = CoreContainer.resolve(AggregateStoreRegister);
        this.aggregateStoreRegister.register(this);
    }
    save(aggregate) {
        this.saveValue(aggregate);
    }
    findById(aggregateId) {
        return this.getValue(aggregateId);
    }
    saveValue(aggregate) {
        const anemia = this.toAnemia(aggregate);
        this.stateStore.set(anemia);
    }
    getValue(aggregateId) {
        const optAnemia = this.stateStore.get(aggregateId);
        return optAnemia.map(this.fromAnemia);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0L2NvbW1hbmQvcGVyc2lzdC1hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBTWhHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc1RCxNQUFNLE9BQWdCLHFCQUNyQixTQUFRLGNBQW9CO0lBSTVCLFlBQXVDLFVBQXFDO1FBQzNFLEtBQUssRUFBRSxDQUFDO1FBRDhCLGVBQVUsR0FBVixVQUFVLENBQTJCO1FBRjNELDJCQUFzQixHQUEyQixhQUFhLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFJL0csSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBTUQsSUFBSSxDQUFDLFNBQVk7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxTQUFTLENBQUMsU0FBWTtRQUU3QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxRQUFRLENBQUMsV0FBYztRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuaW1wb3J0IHsgUGVyc2lzdEFuZW1pYSB9IGZyb20gJy4uL3BlcnNpc3QtYW5lbWlhJztcbmltcG9ydCB7IFBlcnNpc3RTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vcGVyc2lzdC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb3JlLmNvbnRhaW5lcic7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNpc3RBZ2dyZWdhdGVTdG9yZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEQgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBBIGV4dGVuZHMgUGVyc2lzdEFuZW1pYTxSZWFkTW9kZWxSb290SWQ+PlxuXHRleHRlbmRzIEFnZ3JlZ2F0ZVN0b3JlPEksIEQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoQWdncmVnYXRlU3RvcmVSZWdpc3Rlcik7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RhdGVTdG9yZTogUGVyc2lzdFN0YXRlU3RvcmU8YW55LCBBPikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLnJlZ2lzdGVyKHRoaXMpO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9BbmVtaWEoYWdncmVnYXRlOiBEKTogQTtcblxuXHRhYnN0cmFjdCBmcm9tQW5lbWlhKGFuZW1pYTogQSk6IEQ7XG5cblx0c2F2ZShhZ2dyZWdhdGU6IEQpOiB2b2lkIHtcblx0XHR0aGlzLnNhdmVWYWx1ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0ZmluZEJ5SWQoYWdncmVnYXRlSWQ6IEkpOiBPcHRpb25hbDxEPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlVmFsdWUoYWdncmVnYXRlOiBEKTogdm9pZCB7XG5cblx0XHRjb25zdCBhbmVtaWEgPSB0aGlzLnRvQW5lbWlhKGFnZ3JlZ2F0ZSk7XG5cblx0XHR0aGlzLnN0YXRlU3RvcmUuc2V0KGFuZW1pYSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBJKTogT3B0aW9uYWw8RD4ge1xuXHRcdGNvbnN0IG9wdEFuZW1pYSA9IHRoaXMuc3RhdGVTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0cmV0dXJuIG9wdEFuZW1pYS5tYXAodGhpcy5mcm9tQW5lbWlhKTtcblx0fVxuXG59XG4iXX0=