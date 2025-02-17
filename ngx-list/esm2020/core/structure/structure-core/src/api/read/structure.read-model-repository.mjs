import { CoreContainer, DomainEventBus, Reactive } from '@generic-ui/hermes';
export class StructureReadModelRepository extends Reactive {
    constructor() {
        super();
        this.domainEventBus = CoreContainer.resolve(DomainEventBus);
        this.domainEventBus
            .ofEvents(this.forEvents())
            .pipe(this.hermesTakeUntil())
            .subscribe((event) => {
            try {
                this.subs(event);
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBZSxjQUFjLEVBQW9CLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTTVHLE1BQU0sT0FBZ0IsNEJBQTZCLFNBQVEsUUFBUTtJQUlsRTtRQUNDLEtBQUssRUFBRSxDQUFDO1FBSFEsbUJBQWMsR0FBbUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUt2RixJQUFJLENBQUMsY0FBYzthQUNqQixRQUFRLENBQ1IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFO1lBRTlDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLHNDQUFzQztnQkFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQVVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzLCBIZXJtZXNPYnNlcnZhYmxlLCBSZWFjdGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudEJ1cyk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudHMoXG5cdFx0XHRcdHRoaXMuZm9yRXZlbnRzKClcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLnN1YnMoZXZlbnQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdGFic3RyYWN0IGdldFN0cnVjdHVyZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290O1xuXG5cdGFic3RyYWN0IG9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlUmVhZE1vZGVsUm9vdD47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IGZvckV2ZW50cygpOiBBcnJheTx0eXBlb2YgRG9tYWluRXZlbnQ+O1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBzdWJzKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pOiB2b2lkO1xuXG59XG4iXX0=