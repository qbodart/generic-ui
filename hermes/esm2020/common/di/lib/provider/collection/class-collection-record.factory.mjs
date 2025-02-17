import { Dependency } from '../dependency';
import { CollectionRecordFactory } from './collection-record.factory';
export class ClassCollectionRecordFactory extends CollectionRecordFactory {
    constructor() {
        super(...arguments);
        this.providers = [];
    }
    getDeps() {
        return this.providers
            .map((provider) => {
            return (provider.services || [])
                .map((service) => {
                return new Dependency(service);
            });
        });
    }
    create(setOfDeps) {
        return setOfDeps
            .map((deps, index) => {
            return new this.providers[index](...deps);
        });
    }
    addProvider(provider) {
        this.providers.push(provider);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtY29sbGVjdGlvbi1yZWNvcmQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vZGkvbGliL3Byb3ZpZGVyL2NvbGxlY3Rpb24vY2xhc3MtY29sbGVjdGlvbi1yZWNvcmQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSx1QkFBdUI7SUFBekU7O1FBRWtCLGNBQVMsR0FBeUIsRUFBRSxDQUFDO0lBeUJ2RCxDQUFDO0lBdkJBLE9BQU87UUFFTixPQUFPLElBQUksQ0FBQyxTQUFTO2FBQ2YsR0FBRyxDQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sQ0FBRSxRQUFnQixDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7aUJBQ3ZDLEdBQUcsQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO2dCQUNyQixPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQTRCO1FBRWxDLE9BQU8sU0FBUzthQUNkLEdBQUcsQ0FBQyxDQUFDLElBQWdCLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxJQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBdUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xhc3NQcm92aWRlciB9IGZyb20gJy4uL2NsYXNzL2NsYXNzLXByb3ZpZGVyJztcbmltcG9ydCB7IERlcGVuZGVuY3kgfSBmcm9tICcuLi9kZXBlbmRlbmN5JztcbmltcG9ydCB7IENvbGxlY3Rpb25SZWNvcmRGYWN0b3J5IH0gZnJvbSAnLi9jb2xsZWN0aW9uLXJlY29yZC5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIENsYXNzQ29sbGVjdGlvblJlY29yZEZhY3RvcnkgZXh0ZW5kcyBDb2xsZWN0aW9uUmVjb3JkRmFjdG9yeSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwcm92aWRlcnM6IEFycmF5PENsYXNzUHJvdmlkZXI+ID0gW107XG5cblx0Z2V0RGVwcygpOiBBcnJheTxBcnJheTxEZXBlbmRlbmN5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMucHJvdmlkZXJzXG5cdFx0XHRcdCAgIC5tYXAoKHByb3ZpZGVyOiBDbGFzc1Byb3ZpZGVyKSA9PiB7XG5cdFx0XHRcdFx0ICAgcmV0dXJuICgocHJvdmlkZXIgYXMgYW55KS5zZXJ2aWNlcyB8fCBbXSlcblx0XHRcdFx0XHRcdCAgIC5tYXAoKHNlcnZpY2U6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHQgICByZXR1cm4gbmV3IERlcGVuZGVuY3koc2VydmljZSk7XG5cdFx0XHRcdFx0XHQgICB9KTtcblx0XHRcdFx0ICAgfSk7XG5cdH1cblxuXHRjcmVhdGUoc2V0T2ZEZXBzOiBBcnJheTxBcnJheTxhbnk+Pik6IGFueSB7XG5cblx0XHRyZXR1cm4gc2V0T2ZEZXBzXG5cdFx0XHQubWFwKChkZXBzOiBBcnJheTxhbnk+LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3ICh0aGlzLnByb3ZpZGVyc1tpbmRleF0gYXMgYW55KSguLi5kZXBzKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0YWRkUHJvdmlkZXIocHJvdmlkZXI6IENsYXNzUHJvdmlkZXIpIHtcblx0XHR0aGlzLnByb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcblx0fVxuXG59XG4iXX0=