import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class SetConfigFilterCommand extends StructureCommand {
    constructor(structureId, filterConfig) {
        super(structureId, 'SetConfigFilterCommand');
        this.filterConfig = filterConfig;
    }
    getConfig() {
        return this.filterConfig;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9jb3JlL2NvbmZpZy9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRXpGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxnQkFBZ0I7SUFFM0QsWUFBWSxXQUF3QixFQUNoQixZQUEwQjtRQUM3QyxLQUFLLENBQUMsV0FBVyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFEMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFFOUMsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2NvbmZpZy9maWx0ZXIuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBTZXRDb25maWdGaWx0ZXJDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbmZpZzogRmlsdGVyQ29uZmlnKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRDb25maWdGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb25maWcoKTogRmlsdGVyQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJDb25maWc7XG5cdH1cblxufVxuIl19