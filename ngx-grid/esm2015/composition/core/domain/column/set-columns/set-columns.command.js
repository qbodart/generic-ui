import { CompositionCommand } from '../../composition.command';
export class SetColumnsCommand extends CompositionCommand {
    constructor(compositionId, columns) {
        super(compositionId, 'SetColumnsCommand');
        this.compositionId = compositionId;
        this.columns = columns;
    }
    getParams() {
        return this.columns;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHL0QsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGtCQUFrQjtJQUV4RCxZQUFxQixhQUE0QixFQUM3QixPQUE0QjtRQUMvQyxLQUFLLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFGdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFFaEQsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5cbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29sdW1uc0NvbW1hbmQgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdTZXRDb2x1bW5zQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UGFyYW1zKCk6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxufVxuIl19