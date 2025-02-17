import { CompositionCommand } from '../../composition.command';
export class CompositionChangeSortStatusCommand extends CompositionCommand {
    constructor(compositionId, sortParams) {
        super(compositionId, 'CompositionChangeSortStatusCommand');
        this.compositionId = compositionId;
        this.sortParams = sortParams;
    }
    getCompositionId() {
        return this.compositionId;
    }
    getSortParams() {
        return this.sortParams;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUvY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHL0QsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGtCQUFrQjtJQUV6RSxZQUFxQixhQUE0QixFQUM3QixVQUFtQztRQUN0RCxLQUFLLENBQUMsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7UUFGdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7SUFFdkQsQ0FBQztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9zb3J0L2NoYW5nZS1zb3J0LnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzQ29tbWFuZCBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0UGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb21wb3NpdGlvbklkKCk6IENvbXBvc2l0aW9uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uSWQ7XG5cdH1cblxuXHRnZXRTb3J0UGFyYW1zKCk6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+IHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0UGFyYW1zO1xuXHR9XG5cbn1cbiJdfQ==