/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InMemoryCompositionAggregateStore } from './domain/in-memory.composition.aggregate-store';
import { CompositionAggregateRepository } from '../../domain/composition.aggregate-repository';
import { InMemoryCompositionAggregateRepository } from './domain/in-memory.composition.aggregate-repository';
import { InMemoryCompositionReadStore } from './api/in-memory.composition.read-store';
import { CompositionReadModelRootRepository } from '../../domain-read/composition.read-model-root-repository';
import { InMemoryCompositionRepository } from './api/in-memory.composition.repository';
import { InMemoryCompositionStore } from './in-memory.composition.store';
/** @type {?} */
export var inMemoryCompositionCommandProviders = [
    InMemoryCompositionAggregateStore,
    {
        provide: CompositionAggregateRepository,
        useClass: InMemoryCompositionAggregateRepository
    }
];
/** @type {?} */
export var inMemoryCompositionReadModelProviders = [
    InMemoryCompositionReadStore,
    {
        provide: CompositionReadModelRootRepository,
        useClass: InMemoryCompositionRepository
    }
];
/** @type {?} */
export var inMemoryCompositionProviders = [
    InMemoryCompositionStore
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDOUcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRXpFLE1BQU0sS0FBTyxtQ0FBbUMsR0FBRztJQUNsRCxpQ0FBaUM7SUFDakM7UUFDQyxPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLFFBQVEsRUFBRSxzQ0FBc0M7S0FDaEQ7Q0FDRDs7QUFFRCxNQUFNLEtBQU8scUNBQXFDLEdBQUc7SUFDcEQsNEJBQTRCO0lBQzVCO1FBQ0MsT0FBTyxFQUFFLGtDQUFrQztRQUMzQyxRQUFRLEVBQUUsNkJBQTZCO0tBQ3ZDO0NBQ0Q7O0FBRUQsTUFBTSxLQUFPLDRCQUE0QixHQUFHO0lBQzNDLHdCQUF3QjtDQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vZG9tYWluL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9kb21haW4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgfSBmcm9tICcuL2FwaS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuL2FwaS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBpbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlLFxuXHR7XG5cdFx0cHJvdmlkZTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdHVzZUNsYXNzOiBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeVxuXHR9XG5dO1xuXG5leHBvcnQgY29uc3QgaW5NZW1vcnlDb21wb3NpdGlvblJlYWRNb2RlbFByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSxcblx0e1xuXHRcdHByb3ZpZGU6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnksXG5cdFx0dXNlQ2xhc3M6IEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCBpbk1lbW9yeUNvbXBvc2l0aW9uUHJvdmlkZXJzID0gW1xuXHRJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmVcbl07XG4iXX0=