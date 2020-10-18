/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SourceSetLoadingCommandHandler } from './loading/source-set-loading.command-handler';
import { SetOriginCommandHandler } from './origin/set-origin/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from './origin/edit/structure.edit-source-item.command-handler';
import { SourceDispatcher } from './source.dispatcher';
import { SourceManagerFactory } from './core/source.manager-factory';
import { StructureOriginChangedEventHandler } from '../api/origin/structure.origin-changed.event-handler';
import { StructurePreparedItemsEventHandler } from '../api/prepared/structure.prepared-items.event-handler';
import { SourceDomainEventPublisher } from './source.domain-event.publisher';
import { SetEnabledSelectionCommandHandler } from './formation/set-enabled/set-enabled-selection.command-handler';
import { ToggleSelectedRowCommandHandler } from './formation/toggle/toggle-selected-row.command-handler';
import { FormationDispatcher } from './formation/formation.dispatcher';
import { FormationManagerFactory } from './formation/core/formation.manager-factory';
import { SelectedRowChangedEventHandler } from '../api/formation/row-selected/selected-row-changed.event-handler';
import { SetSelectionModeCommandHandler } from './formation/mode/set-selection-mode.command-handler';
import { SelectAllRowsCommandHandler } from './formation/select-all/select-all-rows.command-handler';
import { UnselectAllRowsCommandHandler } from './formation/unselect-all/unselect-all-rows.command-handler';
import { SelectionModeSetEventHandler } from '../api/formation/mode/selection-mode-set.event-handler';
import { DeleteOriginItemCommandHandler } from './origin/delete/delete-origin-item.command-handler';
import { structureKey } from '../../../core/api/structre.api';
export class SourceDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SourceSetLoadingCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(SetOriginCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(StructureEditSourceItemCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(SetEnabledSelectionCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(SetSelectionModeCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(SelectAllRowsCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(UnselectAllRowsCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(DeleteOriginItemCommandHandler, structureKey),
            ...HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, structureKey)
        ];
    }
    /**
     * @return {?}
     */
    static domainEventHandlers() {
        return [
            ...HermesModule.registerDomainEventHandler(StructureOriginChangedEventHandler),
            ...HermesModule.registerDomainEventHandler(SelectedRowChangedEventHandler),
            ...HermesModule.registerDomainEventHandler(SelectionModeSetEventHandler),
            ...HermesModule.registerDomainEventHandler(StructurePreparedItemsEventHandler)
        ];
    }
}
SourceDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    SourceDispatcher,
                    SourceManagerFactory,
                    SourceDomainEventPublisher,
                    FormationDispatcher,
                    FormationManagerFactory
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SourceDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDNUcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDbEgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDekcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDckYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDbEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDM0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBa0I5RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsWUFBWTtJQUVuRDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxlQUFlO1FBQ3JCLE9BQU87WUFDTixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsRUFBRSxZQUFZLENBQUM7WUFDcEYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDO1lBQzdFLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksQ0FBQztZQUMzRixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxpQ0FBaUMsRUFBRSxZQUFZLENBQUM7WUFDdkYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDO1lBQ3BGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixFQUFFLFlBQVksQ0FBQztZQUNqRixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw2QkFBNkIsRUFBRSxZQUFZLENBQUM7WUFDbkYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDO1lBQ3BGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixFQUFFLFlBQVksQ0FBQztTQUNyRixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLGtDQUFrQyxDQUFDO1lBQzlFLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDhCQUE4QixDQUFDO1lBQzFFLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDO1lBQ3hFLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLGtDQUFrQyxDQUFDO1NBQzlFLENBQUM7SUFDSCxDQUFDOzs7WUExQ0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUUxQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2xvYWRpbmcvc291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRPcmlnaW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL3NldC1vcmlnaW4vc2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9jb3JlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2FwaS9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlciB9IGZyb20gJy4uL2FwaS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4vc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2V0LWVuYWJsZWQtc2VsZWN0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9mb3JtYXRpb24vdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25NYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vZm9ybWF0aW9uL2NvcmUvZm9ybWF0aW9uLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9hcGkvZm9ybWF0aW9uL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vZm9ybWF0aW9uL21vZGUvc2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwtcm93cy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVW5zZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9hcGkvZm9ybWF0aW9uL21vZGUvc2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9vcmlnaW4vZGVsZXRlL2RlbGV0ZS1vcmlnaW4taXRlbS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgc3RydWN0dXJlS2V5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0cmUuYXBpJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0U291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0U291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIsXG5cblx0XHRGb3JtYXRpb25EaXNwYXRjaGVyLFxuXHRcdEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZURvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldE9yaWdpbkNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNlbGVjdGlvbk1vZGVDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNlbGVjdEFsbFJvd3NDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRFdmVudEhhbmRsZXIpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2VsZWN0aW9uTW9kZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlcilcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==