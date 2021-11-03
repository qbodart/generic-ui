import { StructureCommand } from '../../../../../core/domain/structure.command';
export class ToggleSelectedRowCommand extends StructureCommand {
    constructor(structureId, selectedRow, type) {
        super(structureId, 'ToggleSelectedRowCommand');
        this.selectedRow = selectedRow;
        this.type = type;
    }
    getSelectedRow() {
        return this.selectedRow;
    }
    getType() {
        return this.type;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi90b2dnbGUvdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWhGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBZ0I7SUFFN0QsWUFBWSxXQUF3QixFQUNoQixXQUFtQixFQUNuQixJQUF5QjtRQUM1QyxLQUFLLENBQUMsV0FBVyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFGNUIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBcUI7SUFFN0MsQ0FBQztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93OiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvdygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBSb3dTZWxlY3RUb2dnbGVUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cbn1cbiJdfQ==