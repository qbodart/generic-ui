import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2NvcmUvdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUV6RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCO0lBRTdELFlBQVksV0FBd0IsRUFDaEIsV0FBbUIsRUFDbkIsSUFBeUI7UUFDNUMsS0FBSyxDQUFDLFdBQVcsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBRjVCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQXFCO0lBRTdDLENBQUM7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi8uLi9kb21haW4vcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93OiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvdygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBSb3dTZWxlY3RUb2dnbGVUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cbn1cbiJdfQ==