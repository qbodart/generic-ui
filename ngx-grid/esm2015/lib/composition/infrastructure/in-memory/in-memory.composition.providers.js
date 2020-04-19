/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InMemoryCompositionAggregateStore } from './domain/in-memory.composition.aggregate-store';
import { CompositionAggregateRepository } from '../../domain/composition.aggregate-repository';
import { InMemoryCompositionAggregateRepository } from './domain/in-memory.composition.aggregate-repository';
import { InMemoryCompositionReadStore } from './feature-api/in-memory.composition.read-store';
import { CompositionReadModelRootRepository } from '../../feature-api/read/composition.read-model-root-repository';
import { InMemoryCompositionRepository } from './feature-api/in-memory.composition.repository';
import { InMemoryCompositionStore } from './in-memory.composition.store';
/** @type {?} */
export const inMemoryCompositionCommandProviders = [
    InMemoryCompositionAggregateStore,
    {
        provide: CompositionAggregateRepository,
        useClass: InMemoryCompositionAggregateRepository
    }
];
/** @type {?} */
export const inMemoryCompositionReadModelProviders = [
    InMemoryCompositionReadStore,
    {
        provide: CompositionReadModelRootRepository,
        useClass: InMemoryCompositionRepository
    }
];
/** @type {?} */
export const inMemoryCompositionProviders = [
    InMemoryCompositionStore
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFekUsTUFBTSxPQUFPLG1DQUFtQyxHQUFHO0lBQ2xELGlDQUFpQztJQUNqQztRQUNDLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsUUFBUSxFQUFFLHNDQUFzQztLQUNoRDtDQUNEOztBQUVELE1BQU0sT0FBTyxxQ0FBcUMsR0FBRztJQUNwRCw0QkFBNEI7SUFDNUI7UUFDQyxPQUFPLEVBQUUsa0NBQWtDO1FBQzNDLFFBQVEsRUFBRSw2QkFBNkI7S0FDdkM7Q0FDRDs7QUFFRCxNQUFNLE9BQU8sNEJBQTRCLEdBQUc7SUFDM0Msd0JBQXdCO0NBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9kb21haW4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL2RvbWFpbi9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSB9IGZyb20gJy4vZmVhdHVyZS1hcGkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuL2ZlYXR1cmUtYXBpL2luLW1lbW9yeS5jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnN0b3JlJztcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5Q29tcG9zaXRpb25Db21tYW5kUHJvdmlkZXJzID0gW1xuXHRJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUsXG5cdHtcblx0XHRwcm92aWRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0dXNlQ2xhc3M6IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5XG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCBpbk1lbW9yeUNvbXBvc2l0aW9uUmVhZE1vZGVsUHJvdmlkZXJzID0gW1xuXHRJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlLFxuXHR7XG5cdFx0cHJvdmlkZTogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSxcblx0XHR1c2VDbGFzczogSW5NZW1vcnlDb21wb3NpdGlvblJlcG9zaXRvcnlcblx0fVxuXTtcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMgPSBbXG5cdEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZVxuXTtcbiJdfQ==