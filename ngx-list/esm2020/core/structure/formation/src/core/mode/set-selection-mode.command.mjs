import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class SetSelectionModeCommand extends StructureCommand {
    constructor(structureId, mode) {
        super(structureId, 'SetSelectionModeCommand');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvY29yZS9tb2RlL3NldC1zZWxlY3Rpb24tbW9kZS5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRXpGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7SUFFNUQsWUFBWSxXQUF3QixFQUNoQixJQUFzQjtRQUN6QyxLQUFLLENBQUMsV0FBVyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFEM0IsU0FBSSxHQUFKLElBQUksQ0FBa0I7SUFFMUMsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogUm93U2VsZWN0aW9uTW9kZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmQnKTtcblx0fVxuXG5cdGdldE1vZGUoKTogUm93U2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZTtcblx0fVxuXG59XG4iXX0=