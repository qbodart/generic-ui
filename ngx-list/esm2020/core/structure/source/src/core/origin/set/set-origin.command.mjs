import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export class SetOriginCommand extends StructureCommand {
    constructor(structureId, items = []) {
        super(structureId, 'SetOriginCommand');
        this.items = items;
    }
    getItems() {
        return this.items;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9yaWdpbi5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2NvcmUvb3JpZ2luL3NldC9zZXQtb3JpZ2luLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFNUYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUVyRCxZQUFZLFdBQXdCLEVBQ2hCLFFBQW9CLEVBQUU7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRHBCLFVBQUssR0FBTCxLQUFLLENBQWlCO0lBRTFDLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBTZXRPcmlnaW5Db21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGl0ZW1zOiBBcnJheTxhbnk+ID0gW10pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldE9yaWdpbkNvbW1hbmQnKTtcblx0fVxuXG5cdGdldEl0ZW1zKCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiB0aGlzLml0ZW1zO1xuXHR9XG5cbn1cbiJdfQ==