import { AggregateStore } from '../../../domain/command/store/aggregate.store';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { CoreContainer } from '../../../api/core.container';
export class InMemoryAggregateStore extends AggregateStore {
    constructor(inMemoryStore) {
        super();
        this.inMemoryStore = inMemoryStore;
        this.aggregateStoreRegister = CoreContainer.resolve(AggregateStoreRegister);
        this.aggregateStoreRegister.register(this);
    }
    save(arg) {
        if (Array.isArray(arg)) {
            arg.forEach((aggregate) => {
                this.inMemoryStore.set(aggregate);
            });
        }
        else {
            const aggregate = arg;
            this.inMemoryStore.set(aggregate);
        }
    }
    findById(aggregateId) {
        const optAggregate = this.inMemoryStore.get(aggregateId);
        optAggregate.ifPresent((a) => a.clearEvents());
        return optAggregate;
    }
    remove(aggregateId) {
        this.inMemoryStore.delete(aggregateId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmFnZ3JlZ2F0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21tYW5kL2luLW1lbW9yeS5hZ2dyZWdhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBS2hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU1RCxNQUFNLE9BQWdCLHNCQUEwRSxTQUFRLGNBQW9CO0lBSTNILFlBQXVDLGFBQWtDO1FBQ3hFLEtBQUssRUFBRSxDQUFDO1FBRDhCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUZ4RCwyQkFBc0IsR0FBMkIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBSS9HLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUlELElBQUksQ0FBQyxHQUFpQjtRQUVyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVksRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztTQUNIO2FBQU07WUFDTixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFFdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQWM7UUFFdEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekQsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFL0MsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFjO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL3N0b3JlL2FnZ3JlZ2F0ZS5zdG9yZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdG9yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29yZS5jb250YWluZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIFQgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+PiBleHRlbmRzIEFnZ3JlZ2F0ZVN0b3JlPEksIFQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoQWdncmVnYXRlU3RvcmVSZWdpc3Rlcik7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxJLCBUPikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLnJlZ2lzdGVyKHRoaXMpO1xuXHR9XG5cblx0c2F2ZShhZ2dyZWdhdGU6IFQpOiB2b2lkO1xuXHRzYXZlKGFnZ3JlZ2F0ZXM6IEFycmF5PFQ+KTogdm9pZDtcblx0c2F2ZShhcmc6IFQgfCBBcnJheTxUPik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0YXJnLmZvckVhY2goKGFnZ3JlZ2F0ZTogVCkgPT4ge1xuXHRcdFx0XHR0aGlzLmluTWVtb3J5U3RvcmUuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gYXJnO1xuXG5cdFx0XHR0aGlzLmluTWVtb3J5U3RvcmUuc2V0KGFnZ3JlZ2F0ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZmluZEJ5SWQoYWdncmVnYXRlSWQ6IEkpOiBPcHRpb25hbDxUPiB7XG5cblx0XHRjb25zdCBvcHRBZ2dyZWdhdGUgPSB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdG9wdEFnZ3JlZ2F0ZS5pZlByZXNlbnQoKGEpID0+IGEuY2xlYXJFdmVudHMoKSk7XG5cblx0XHRyZXR1cm4gb3B0QWdncmVnYXRlO1xuXHR9XG5cblx0cmVtb3ZlKGFnZ3JlZ2F0ZUlkOiBJKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVN0b3JlLmRlbGV0ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxufVxuIl19