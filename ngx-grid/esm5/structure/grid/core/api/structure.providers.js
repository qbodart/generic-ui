/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesModule } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../../../core/infrastructure/in-memory/in-memory.structure.providers';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { StructureCreatedEventHandler } from '../../../core/domain/create-structure/structure-created.event-handler';
import { StructureDomainCommandInvoker } from '../../../core/domain/structure.domain-command-invoker';
/** @type {?} */
var commandProviders = tslib_1.__spread(inMemoryStructureCommandProviders);
/** @type {?} */
var readProviders = tslib_1.__spread(inMemoryStructureReadProviders);
/** @type {?} */
export var structureCommandHandlers = [];
/** @type {?} */
export var structureDomainEventHandlers = tslib_1.__spread(HermesModule.registerDomainEventHandler(StructureCreatedEventHandler));
/** @type {?} */
export var structureProviders = tslib_1.__spread(inMemoryStructureProviders, commandProviders, readProviders, [
    StructureAggregateFactory,
    StructureReadModelRootConverter,
    StructureWarehouse,
    {
        provide: StructureCommandInvoker,
        useClass: StructureDomainCommandInvoker
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQ04saUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsTUFBTSxzRUFBc0UsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNySCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7SUFHaEcsZ0JBQWdCLG9CQUNsQixpQ0FBaUMsQ0FDcEM7O0lBRUssYUFBYSxvQkFDZiw4QkFBOEIsQ0FDakM7O0FBRUQsTUFBTSxLQUFPLHdCQUF3QixHQUFvQixFQUFFOztBQUUzRCxNQUFNLEtBQU8sNEJBQTRCLG9CQUVyQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsNEJBQTRCLENBQUMsQ0FDeEU7O0FBRUQsTUFBTSxLQUFPLGtCQUFrQixvQkFDM0IsMEJBQTBCLEVBRTFCLGdCQUFnQixFQUNoQixhQUFhO0lBRWhCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFFL0Isa0JBQWtCO0lBQ2xCO1FBQ0MsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxRQUFRLEVBQUUsNkJBQTZCO0tBQ3ZDO0VBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7XG5cdGluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyxcblx0aW5NZW1vcnlTdHJ1Y3R1cmVQcm92aWRlcnMsXG5cdGluTWVtb3J5U3RydWN0dXJlUmVhZFByb3ZpZGVyc1xufSBmcm9tICcuLi8uLi8uLi9jb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc3RydWN0dXJlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4vcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4vc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1jb21tYW5kLWludm9rZXInO1xuXG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVyc1xuXTtcblxuY29uc3QgcmVhZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlTdHJ1Y3R1cmVSZWFkUHJvdmlkZXJzXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj4gPSBbXTtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdHVyZURvbWFpbkV2ZW50SGFuZGxlcnMgPSBbXG5cblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFN0cnVjdHVyZUNyZWF0ZWRFdmVudEhhbmRsZXIpXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyxcblxuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIsXG5cblx0U3RydWN0dXJlV2FyZWhvdXNlLFxuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZURvbWFpbkNvbW1hbmRJbnZva2VyXG5cdH1cblxuXTtcbiJdfQ==