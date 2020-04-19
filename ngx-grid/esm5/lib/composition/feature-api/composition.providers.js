/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOMAIN_EVENT_HANDLERS } from '@generic-ui/hermes';
import { inMemoryCompositionCommandProviders, inMemoryCompositionProviders, inMemoryCompositionReadModelProviders } from '../infrastructure/in-memory/in-memory.composition.providers';
import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { ColumnEntityFactory } from '../domain/column/column-entity.factory';
import { CompositionEventConverter } from '../domain/composition.event-converter';
import { ColumnFieldFactory } from '../domain/column/field/colum-field.factory';
import { CompositionEventRepository } from './composition.event-repository';
import { CompositionWarehouse } from './composition.warehouse';
import { CompositionCommandDispatcher } from './composition.command-dispatcher';
import { CompositionReadModelRootConverter } from './read/composition.read-model-root-converter';
import { EditTemplateRepository } from './read/edit/edit-template.repository';
import { EditTemplateFactory } from './read/edit/edit-template.factory';
import { ViewTemplateFactory } from './read/view/view-template.factory';
import { ViewTemplateRepository } from './read/view/view-template.repository';
import { ColumnDefinitionFactory } from './read/definition/column-definition.factory';
import { CompositionChangeSortStatusEventHandler } from '../domain/column/sort/composition-change-sort-status.event-handler';
import { CompositionFieldsInitedEventHandler } from '../domain/column/set-columns/composition-fields-inited.event-handler';
import { ColumnPresentationConverter } from '../domain/column/presentation/column.presentation.converter';
/** @type {?} */
var commandProviders = tslib_1.__spread(inMemoryCompositionCommandProviders, [
    CompositionDispatcher,
    ColumnEntityFactory,
    ColumnPresentationConverter,
    CompositionEventConverter,
    ColumnFieldFactory
]);
/** @type {?} */
var readProviders = tslib_1.__spread(inMemoryCompositionReadModelProviders, [
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionFieldsInitedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionChangeSortStatusEventHandler,
        multi: true
    },
    ColumnDefinitionFactory,
    ViewTemplateRepository,
    ViewTemplateFactory,
    EditTemplateFactory,
    EditTemplateRepository
]);
/** @type {?} */
export var compositionProviders = tslib_1.__spread(inMemoryCompositionProviders, commandProviders, readProviders, [
    CompositionReadModelRootConverter,
    CompositionCommandDispatcher,
    CompositionWarehouse,
    CompositionEventRepository
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvY29tcG9zaXRpb24ucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUNOLG1DQUFtQyxFQUNuQyw0QkFBNEIsRUFDNUIscUNBQXFDLEVBQ3JDLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7O0lBR3BHLGdCQUFnQixvQkFDbEIsbUNBQW1DO0lBQ3RDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDbEI7O0lBRUssYUFBYSxvQkFDZixxQ0FBcUM7SUFDeEM7UUFDQyxPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSxtQ0FBbUM7UUFDN0MsS0FBSyxFQUFFLElBQUk7S0FDWCxFQUFFO1FBQ0YsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsdUNBQXVDO1FBQ2pELEtBQUssRUFBRSxJQUFJO0tBQ1g7SUFDRCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3RCOztBQUVELE1BQU0sS0FBTyxvQkFBb0Isb0JBQzdCLDRCQUE0QixFQUM1QixnQkFBZ0IsRUFDaEIsYUFBYTtJQUVoQixpQ0FBaUM7SUFFakMsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwwQkFBMEI7RUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET01BSU5fRVZFTlRfSEFORExFUlMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHtcblx0aW5NZW1vcnlDb21wb3NpdGlvbkNvbW1hbmRQcm92aWRlcnMsXG5cdGluTWVtb3J5Q29tcG9zaXRpb25Qcm92aWRlcnMsXG5cdGluTWVtb3J5Q29tcG9zaXRpb25SZWFkTW9kZWxQcm92aWRlcnNcbn0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5jb21wb3NpdGlvbi5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4vY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIgfSBmcm9tICcuL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25GaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLWZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uLmNvbnZlcnRlcic7XG5cblxuY29uc3QgY29tbWFuZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlDb21wb3NpdGlvbkNvbW1hbmRQcm92aWRlcnMsXG5cdENvbXBvc2l0aW9uRGlzcGF0Y2hlcixcblx0Q29sdW1uRW50aXR5RmFjdG9yeSxcblx0Q29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyLFxuXHRDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyLFxuXHRDb2x1bW5GaWVsZEZhY3Rvcnlcbl07XG5cbmNvbnN0IHJlYWRQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5Q29tcG9zaXRpb25SZWFkTW9kZWxQcm92aWRlcnMsXG5cdHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IENvbXBvc2l0aW9uRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHRDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSxcblx0Vmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0Vmlld1RlbXBsYXRlRmFjdG9yeSxcblx0RWRpdFRlbXBsYXRlRmFjdG9yeSxcblx0RWRpdFRlbXBsYXRlUmVwb3NpdG9yeVxuXTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvc2l0aW9uUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeUNvbXBvc2l0aW9uUHJvdmlkZXJzLFxuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlcixcblxuXHRDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRDb21wb3NpdGlvbldhcmVob3VzZSxcblx0Q29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnlcbl07XG4iXX0=