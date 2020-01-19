/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { COMMAND_HANDLERS, DOMAIN_EVENT_HANDLERS } from '@generic-ui/hermes';
import { inMemoryCompositionCommandProviders, inMemoryCompositionProviders, inMemoryCompositionQueryProviders } from '../../infrastructure/in-memory/composition/in-memory.composition.providers';
import { CompositionAggregateFactory } from '../../domain/composition/command/composition.aggregate-factory';
import { CompositionDispatcher } from '../../domain/composition/command/composition.dispatcher';
import { InitCompositionCommandHandler } from '../../domain/composition/command/init/init-composition.command-handler';
import { SetColumnsCommandHandler } from '../../domain/composition/command/column/set-columns/set-columns.command-handler';
import { SetCompositionWidthCommandHandler } from '../../domain/composition/command/width/set-width/set-composition-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from '../../domain/composition/command/width/resize-width/set-composition-resize-width.command-handler';
import { SetCompositionContainerWidthCommandHandler } from '../../domain/composition/command/width/set-container-width/set-composition-container-width.command-handler';
import { CompositionChangeSortStatusCommandHandler } from '../../domain/composition/command/column/sort/composition-change-sort-status.command-handler';
import { ColumnEntityFactory } from '../../domain/composition/command/column/column-entity.factory';
import { CompositionEventConverter } from '../../domain/composition/command/composition-event.converter';
import { ColumnFieldFactory } from '../../domain/composition/command/column/field/colum-field.factory';
import { CompositionEventService } from './composition.event-service';
import { CompositionReadModelService } from './composition-read-model.service';
import { CompositionCommandService } from './composition.command-service';
import { CompositionConverter } from '../../domain/composition/composition.converter';
import { EditTemplateRepository } from '../../domain/composition/read/edit/edit-template.repository';
import { EditTemplateFactory } from '../../domain/composition/read/edit/edit-template.factory';
import { ViewTemplateFactory } from '../../domain/composition/read/view/view-template.factory';
import { ViewTemplateRepository } from '../../domain/composition/read/view/view-template.repository';
import { ColumnDefinitionFactory } from '../../domain/composition/read/definition/column-definition.factory';
import { CompositionChangeSortStatusEventHandler } from '../../domain/composition/command/column/sort/composition-change-sort-status.event-handler';
import { CompositionFieldsInitedEventHandler } from '../../domain/composition/command/column/set-columns/composition-fields-inited.event-handler';
import { CompositionSetColumnEnabledCommandHandler } from '../../domain/composition/command/column/set-enabled/composition.set-column-enabled.command-handler';
/** @type {?} */
const commandProviders = [
    ...inMemoryCompositionCommandProviders,
    CompositionDispatcher,
    CompositionAggregateFactory,
    {
        provide: COMMAND_HANDLERS,
        useClass: InitCompositionCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: SetColumnsCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionResizeWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionContainerWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: CompositionSetColumnEnabledCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: CompositionChangeSortStatusCommandHandler,
        multi: true
    },
    ColumnEntityFactory,
    CompositionEventConverter,
    ColumnFieldFactory
];
/** @type {?} */
const readProviders = [
    ...inMemoryCompositionQueryProviders,
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
];
/** @type {?} */
export const compositionProviders = [
    ...inMemoryCompositionProviders,
    ...commandProviders,
    ...readProviders,
    CompositionConverter,
    CompositionCommandService,
    CompositionReadModelService,
    CompositionEventService
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFDTixtQ0FBbUMsRUFDbkMsNEJBQTRCLEVBQzVCLGlDQUFpQyxFQUNqQyxNQUFNLDRFQUE0RSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQzNILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBQzNJLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGtHQUFrRyxDQUFDO0FBQzNKLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLDRHQUE0RyxDQUFDO0FBQ3hLLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDZGQUE2RixDQUFDO0FBQ3hKLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ3BKLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZGQUE2RixDQUFDO0FBQ2xKLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLG9HQUFvRyxDQUFDOztNQUd6SixnQkFBZ0IsR0FBRztJQUN4QixHQUFHLG1DQUFtQztJQUN0QyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCO1FBQ0MsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLEtBQUssRUFBRSxJQUFJO0tBQ1g7SUFDRDtRQUNDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxLQUFLLEVBQUUsSUFBSTtLQUNYLEVBQUU7UUFDRixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxpQ0FBaUM7UUFDM0MsS0FBSyxFQUFFLElBQUk7S0FDWCxFQUFFO1FBQ0YsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsdUNBQXVDO1FBQ2pELEtBQUssRUFBRSxJQUFJO0tBQ1gsRUFBRTtRQUNGLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLDBDQUEwQztRQUNwRCxLQUFLLEVBQUUsSUFBSTtLQUNYLEVBQUU7UUFDRixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSx5Q0FBeUM7UUFDbkQsS0FBSyxFQUFFLElBQUk7S0FDWCxFQUFFO1FBQ0YsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUseUNBQXlDO1FBQ25ELEtBQUssRUFBRSxJQUFJO0tBQ1g7SUFDRCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtDQUNsQjs7TUFFSyxhQUFhLEdBQUc7SUFDckIsR0FBRyxpQ0FBaUM7SUFDcEM7UUFDQyxPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSxtQ0FBbUM7UUFDN0MsS0FBSyxFQUFFLElBQUk7S0FDWCxFQUFFO1FBQ0YsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsdUNBQXVDO1FBQ2pELEtBQUssRUFBRSxJQUFJO0tBQ1g7SUFDRCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0NBQ3RCOztBQUVELE1BQU0sT0FBTyxvQkFBb0IsR0FBRztJQUNuQyxHQUFHLDRCQUE0QjtJQUMvQixHQUFHLGdCQUFnQjtJQUNuQixHQUFHLGFBQWE7SUFFaEIsb0JBQW9CO0lBRXBCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUywgRE9NQUlOX0VWRU5UX0hBTkRMRVJTIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7XG5cdGluTWVtb3J5Q29tcG9zaXRpb25Db21tYW5kUHJvdmlkZXJzLFxuXHRpbk1lbW9yeUNvbXBvc2l0aW9uUHJvdmlkZXJzLFxuXHRpbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlQcm92aWRlcnNcbn0gZnJvbSAnLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbXBvc2l0aW9uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBJbml0Q29tcG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2luaXQvaW5pdC1jb21wb3NpdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29sdW1uc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9zZXQtY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLWV2ZW50LmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnQtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5jb21tYW5kLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tcG9zaXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zZXQtY29sdW1ucy9jb21wb3NpdGlvbi1maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5cblxuY29uc3QgY29tbWFuZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlDb21wb3NpdGlvbkNvbW1hbmRQcm92aWRlcnMsXG5cdENvbXBvc2l0aW9uRGlzcGF0Y2hlcixcblx0Q29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogSW5pdENvbXBvc2l0aW9uQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFNldENvbHVtbnNDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sXG5cdENvbHVtbkVudGl0eUZhY3RvcnksXG5cdENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIsXG5cdENvbHVtbkZpZWxkRmFjdG9yeVxuXTtcblxuY29uc3QgcmVhZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5UHJvdmlkZXJzLFxuXHR7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBDb21wb3NpdGlvbkZpZWxkc0luaXRlZEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSxcblx0Q29sdW1uRGVmaW5pdGlvbkZhY3RvcnksXG5cdFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFZpZXdUZW1wbGF0ZUZhY3RvcnksXG5cdEVkaXRUZW1wbGF0ZUZhY3RvcnksXG5cdEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnlcbl07XG5cbmV4cG9ydCBjb25zdCBjb21wb3NpdGlvblByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlDb21wb3NpdGlvblByb3ZpZGVycyxcblx0Li4uY29tbWFuZFByb3ZpZGVycyxcblx0Li4ucmVhZFByb3ZpZGVycyxcblxuXHRDb21wb3NpdGlvbkNvbnZlcnRlcixcblxuXHRDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UsXG5cdENvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5dO1xuIl19