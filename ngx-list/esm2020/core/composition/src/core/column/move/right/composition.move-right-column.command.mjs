import { CompositionCommand } from '../../../composition.command';
export class CompositionMoveRightColumnCommand extends CompositionCommand {
    constructor(compositionId, columnId) {
        super(compositionId, 'CompositionMoveRightColumnCommand');
        this.columnId = columnId;
    }
    getColumnId() {
        return this.columnId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9jb21wb3NpdGlvbi9zcmMvY29yZS9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5tb3ZlLXJpZ2h0LWNvbHVtbi5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWxFLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxrQkFBa0I7SUFFeEUsWUFBWSxhQUE0QixFQUNwQixRQUFrQjtRQUNyQyxLQUFLLENBQUMsYUFBYSxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFEdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUV0QyxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kIHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbklkOiBDb2x1bW5JZCkge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmQnKTtcblx0fVxuXG5cdGdldENvbHVtbklkKCk6IENvbHVtbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5JZDtcblx0fVxuXG59XG4iXX0=