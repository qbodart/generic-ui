/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesModule } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../../../core/infrastructure/in-memory/in-memory.structure.providers';
import { StructureCommandDispatcher } from '../../../core/api/structure.command-dispatcher';
import { StructureReadModelRootConverter } from '../domain-read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { StructureCreatedEventHandler } from '../../../core/domain/create-structure/structure-created.event-handler';
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
    StructureCommandDispatcher
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQ04saUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsTUFBTSxzRUFBc0UsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7SUFHL0csZ0JBQWdCLG9CQUNsQixpQ0FBaUMsQ0FDcEM7O0lBRUssYUFBYSxvQkFDZiw4QkFBOEIsQ0FDakM7O0FBRUQsTUFBTSxLQUFPLHdCQUF3QixHQUFvQixFQUFFOztBQUUzRCxNQUFNLEtBQU8sNEJBQTRCLG9CQUVyQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsNEJBQTRCLENBQUMsQ0FDeEU7O0FBRUQsTUFBTSxLQUFPLGtCQUFrQixvQkFDM0IsMEJBQTBCLEVBRTFCLGdCQUFnQixFQUNoQixhQUFhO0lBRWhCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFFL0Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUUxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHtcblx0aW5NZW1vcnlTdHJ1Y3R1cmVDb21tYW5kUHJvdmlkZXJzLFxuXHRpbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyxcblx0aW5NZW1vcnlTdHJ1Y3R1cmVSZWFkUHJvdmlkZXJzXG59IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlcic7XG5cblxuY29uc3QgY29tbWFuZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlTdHJ1Y3R1cmVDb21tYW5kUHJvdmlkZXJzXG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnNcbl07XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcnM6IEFycmF5PFByb3ZpZGVyPiA9IFtdO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlRG9tYWluRXZlbnRIYW5kbGVycyA9IFtcblxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlQ3JlYXRlZEV2ZW50SGFuZGxlcilcbl07XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzLFxuXG5cdC4uLmNvbW1hbmRQcm92aWRlcnMsXG5cdC4uLnJlYWRQcm92aWRlcnMsXG5cblx0U3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSxcblx0U3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlcixcblxuXHRTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyXG5cbl07XG4iXX0=