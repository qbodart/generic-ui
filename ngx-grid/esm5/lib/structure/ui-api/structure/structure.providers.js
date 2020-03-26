/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOMAIN_EVENT_HANDLERS, HermesModule } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../../infrastructure/in-memory/structure/in-memory.structure.providers';
import { SetVerticalScrollEnabledCommandHandler } from '../../domain/structure/command/vertical-formation/set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetScrollPositionCommandHandler } from '../../domain/structure/command/vertical-formation/scroll-position/set-scroll-position.command-handler';
import { InitFieldsCommandHandler } from '../../domain/structure/command/field/init/init-fields.command-handler';
import { ToggleSortCommandHandler } from '../../domain/structure/command/sort/toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from '../../domain/structure/command/sort/set-config/set-sorting.command-handler';
import { StructureSetConfigFilterCommandHandler } from '../../domain/structure/command/filter/config/structure.set-config-filter.command-handler';
import { StructureSetConfigSearchingCommandHandler } from '../../domain/structure/command/search/config/structure.set-config-searching.command-handler';
import { StructureSetConfigQuickFilterCommandHandler } from '../../domain/structure/command/filter/quick/structure.set-config-quick-filter.command-handler';
import { StructureToggleFilterCommandHandler } from '../../domain/structure/command/filter/toggle/structure.toggle-filter.command-handler';
import { StructureSetAggregationEnabledCommandHandler } from '../../domain/structure/command/aggregation/set/structure.set-aggregation-enabled.command-handler';
import { VerticalFormationFactory } from '../../domain/structure/command/vertical-formation/vertical-formation.factory';
import { FieldCollectionFactory } from '../../domain/structure/command/field/field-collection.factory';
import { FilterManagerFactory } from '../../domain/structure/command/filter/filter.manager-factory';
import { FieldIdGenerator } from '../../domain/structure/command/field/field-id.generator';
import { StructureFilterCommandService } from './filter/structure.filter.command.service';
import { FieldFactory } from '../../domain/structure/command/field/data-type/field.factory';
import { aggregationProviders } from '../../domain/structure/command/aggregation/aggregation.providers';
import { StructureConfigFilterSetEventHandler } from '../../domain/structure/read/filter/structure.config-filter-set.event-handler';
import { StructureConfigSearchingSetEventHandler } from '../../domain/structure/read/searching/enabled/structure.config-searching-set.event-handler';
import { StructureConfigQuickFilterSetEventHandler } from '../../domain/structure/read/filter/structure.config-quick-filter-set.event-handler';
import { StructureFieldsInitedEventHandler } from './field/structure.fields-inited.event-handler';
import { VerticalFormationConverter } from '../../domain/structure/read/vertical-formation/vertical-formation.converter';
import { StructureFilterReadModelRepository } from './filter/structure.filter.read-model.repository';
import { StructureFilterRepository } from '../../domain/structure/read/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../domain/structure/read/filter/structure.quick-filter.repository';
import { StructureSearchingRepository } from '../../domain/structure/read/searching/enabled/structure.searching.repository';
import { StructureSearchReadModelRepository } from './search/structure-search.read-model.repository';
import { StructureFieldUiArchive } from './field/structure.field.ui-archive';
import { StructureFieldUiConverter } from './field/structure.field.ui-converter';
import { StructureFieldUiRepository } from './field/structure.field.ui-repository';
import { StructureAggregationCommandService } from './aggregation/structure.aggregation.command-service';
import { StructureAggregationUiEventsRepository } from './aggregation/structure.aggregation.ui-events-repository';
import { StructureCommandService } from './structure-command.service';
import { StructureConverter } from '../../domain/structure/structure.converter';
import { StructureAggregateFactory } from '../../domain/structure/command/structure.aggregate-factory';
import { StructureReadModelService } from './structure-read-model.service';
import { pagingProviders } from '../paging/paging.providers';
import { schemaProviders } from '../schema/schema.providers';
import { formationProviders } from '../formation/formation.providers';
import { sourceProviders } from '../source/source.providers';
import { StructureSetSearchPhraseCommandHandler } from '../../domain/structure/command/search/set-phrase/structure.set-search-phrase.command-handler';
import { SearchManagerFactory } from '../../domain/structure/command/search/search.manager-factory';
import { SetSortOrderCommandHandler } from '../../domain/structure/command/sort/order/set-sort-order.command-handler';
import { VerticalFormationRepository } from '../../domain/structure/read/vertical-formation/vertical-formation.repository';
import { SetRowHeightCommandHandler } from '../../domain/structure/command/vertical-formation/set-row-height/set-row-height.command-handler';
import { StructureSearchPhraseRepository } from '../../domain/structure/read/searching/phrase/structure.search-phrase.repository';
import { StructureSearchPhraseSetEventHandler } from '../../domain/structure/read/searching/phrase/structure.search-phrase-set.event-handler';
import { StructureSearchDispatcher } from '../../domain/structure/command/search/structure.search.dispatcher';
import { StructureSearchEventService } from './search/structure-search-event.service';
import { StructureSearchHighlightArchive } from '../../domain/structure/read/searching/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../domain/structure/read/searching/placeholder/structure.search-placeholder.archive';
/** @type {?} */
var commandProviders = tslib_1.__spread(inMemoryStructureCommandProviders, [
    VerticalFormationFactory,
    FieldCollectionFactory,
    FilterManagerFactory,
    SearchManagerFactory,
    FieldIdGenerator,
    StructureFilterCommandService,
    FieldFactory,
    StructureSearchDispatcher
], aggregationProviders);
/** @type {?} */
var readProviders = tslib_1.__spread([
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigSearchingSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigQuickFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureFieldsInitedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureSearchPhraseSetEventHandler,
        multi: true
    }
], inMemoryStructureReadProviders, [
    VerticalFormationConverter,
    VerticalFormationRepository,
    StructureFilterReadModelRepository,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSearchingRepository,
    StructureSearchReadModelRepository,
    StructureFieldUiArchive,
    StructureFieldUiConverter,
    StructureFieldUiRepository,
    StructureSearchPhraseRepository,
    StructureSearchHighlightArchive,
    StructureSearchPlaceholderArchive
]);
/** @type {?} */
export var structureCommandHandlers = tslib_1.__spread(HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(InitFieldsCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(ToggleSortCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetSortingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureSetConfigFilterCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureSetConfigSearchingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureSetConfigQuickFilterCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureToggleFilterCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureSetAggregationEnabledCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureSetSearchPhraseCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetSortOrderCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetRowHeightCommandHandler, 'StructureAggregate'));
/** @type {?} */
export var structureProviders = tslib_1.__spread(inMemoryStructureProviders, commandProviders, readProviders, [
    StructureSearchEventService,
    StructureAggregationCommandService,
    StructureAggregationUiEventsRepository,
    StructureAggregateFactory,
    StructureConverter,
    StructureReadModelService,
    StructureCommandService
], pagingProviders, schemaProviders, formationProviders, sourceProviders);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUNOLGlDQUFpQyxFQUNqQywwQkFBMEIsRUFDMUIsOEJBQThCLEVBQzlCLE1BQU0sd0VBQXdFLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMkdBQTJHLENBQUM7QUFDbkssT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUdBQXVHLENBQUM7QUFDeEosT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDakgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDdEgsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDbEosT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDeEosT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sK0ZBQStGLENBQUM7QUFDNUosT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDM0ksT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sa0dBQWtHLENBQUM7QUFDaEssT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDdkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDcEcs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QixDQUFDLEVBQ25GLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxzQ0FBc0MsRUFBRSxvQkFBb0IsQ0FBQyxFQUNqRyxZQUFZLENBQUMsc0JBQXNCLENBQUMseUNBQXlDLEVBQUUsb0JBQW9CLENBQUMsRUFDcEcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDJDQUEyQyxFQUFFLG9CQUFvQixDQUFDLEVBQ3RHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxtQ0FBbUMsRUFBRSxvQkFBb0IsQ0FBQyxFQUM5RixZQUFZLENBQUMsc0JBQXNCLENBQUMsNENBQTRDLEVBQUUsb0JBQW9CLENBQUMsRUFDdkcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLG9CQUFvQixDQUFDLEVBQ2pHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsRUFBRSxvQkFBb0IsQ0FBQyxFQUNyRixZQUFZLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLEVBQUUsb0JBQW9CLENBQUMsQ0FDeEY7O0FBRUQsTUFBTSxLQUFPLGtCQUFrQixvQkFDM0IsMEJBQTBCLEVBRTFCLGdCQUFnQixFQUNoQixhQUFhO0lBRWhCLDJCQUEyQjtJQUUzQixrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBRXRDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFFbEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtHQUVwQixlQUFlLEVBQ2YsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixlQUFlLENBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHtcblx0aW5NZW1vcnlTdHJ1Y3R1cmVDb21tYW5kUHJvdmlkZXJzLFxuXHRpbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyxcblx0aW5NZW1vcnlTdHJ1Y3R1cmVSZWFkUHJvdmlkZXJzXG59IGZyb20gJy4uLy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9zdHJ1Y3R1cmUvaW4tbWVtb3J5LnN0cnVjdHVyZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVTb3J0Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3NldC1jb25maWcvc2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ0ZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9jb25maWcvc3RydWN0dXJlLnNldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvY29uZmlnL3N0cnVjdHVyZS5zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvcXVpY2svc3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWx0ZXIvdG9nZ2xlL3N0cnVjdHVyZS50b2dnbGUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRBZ2dyZWdhdGlvbkVuYWJsZWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zZXQvc3RydWN0dXJlLnNldC1hZ2dyZWdhdGlvbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9maWx0ZXIubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IGFnZ3JlZ2F0aW9uUHJvdmlkZXJzIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvZmlsdGVyL3N0cnVjdHVyZS5jb25maWctZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvZW5hYmxlZC9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9maWx0ZXIvc3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9maWVsZC9zdHJ1Y3R1cmUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlYWQtbW9kZWwucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUucXVpY2stZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvZW5hYmxlZC9zdHJ1Y3R1cmUuc2VhcmNoaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VhcmNoL3N0cnVjdHVyZS1zZWFyY2gucmVhZC1tb2RlbC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlIH0gZnJvbSAnLi9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyIH0gZnJvbSAnLi9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5IH0gZnJvbSAnLi9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24uY29tbWFuZC1zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24udWktZXZlbnRzLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgcGFnaW5nUHJvdmlkZXJzIH0gZnJvbSAnLi4vcGFnaW5nL3BhZ2luZy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgc2NoZW1hUHJvdmlkZXJzIH0gZnJvbSAnLi4vc2NoZW1hL3NjaGVtYS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgZm9ybWF0aW9uUHJvdmlkZXJzIH0gZnJvbSAnLi4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5wcm92aWRlcnMnO1xuaW1wb3J0IHsgc291cmNlUHJvdmlkZXJzIH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL3NldC1waHJhc2Uvc3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZWFyY2hNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvc2VhcmNoLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L29yZGVyL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi9zZXQtcm93LWhlaWdodC9zZXQtcm93LWhlaWdodC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9waHJhc2Uvc3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zZWFyY2gvc3RydWN0dXJlLnNlYXJjaC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaEV2ZW50U2VydmljZSB9IGZyb20gJy4vc2VhcmNoL3N0cnVjdHVyZS1zZWFyY2gtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9oaWdobGlnaHQvc3RydWN0dXJlLnNlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuY29uc3QgY29tbWFuZFByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlTdHJ1Y3R1cmVDb21tYW5kUHJvdmlkZXJzLFxuXHRWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cdEZpZWxkQ29sbGVjdGlvbkZhY3RvcnksXG5cdEZpbHRlck1hbmFnZXJGYWN0b3J5LFxuXHRTZWFyY2hNYW5hZ2VyRmFjdG9yeSxcblx0RmllbGRJZEdlbmVyYXRvcixcblx0U3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UsXG5cdEZpZWxkRmFjdG9yeSxcblx0U3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlcixcblxuXHQuLi5hZ2dyZWdhdGlvblByb3ZpZGVyc1xuXTtcblxuY29uc3QgcmVhZFByb3ZpZGVycyA9IFtcblx0e1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlUmVhZFByb3ZpZGVycyxcblx0VmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIsXG5cdFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlRmlsdGVyUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVTZWFyY2hSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSxcblx0U3RydWN0dXJlRmllbGRVaUNvbnZlcnRlcixcblx0U3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZVxuXTtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdHVyZUNvbW1hbmRIYW5kbGVycyA9IFtcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlU29ydENvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNvcnRPcmRlckNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFJvd0hlaWdodENvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJylcbl07XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzLFxuXG5cdC4uLmNvbW1hbmRQcm92aWRlcnMsXG5cdC4uLnJlYWRQcm92aWRlcnMsXG5cblx0U3RydWN0dXJlU2VhcmNoRXZlbnRTZXJ2aWNlLFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5LFxuXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFN0cnVjdHVyZUNvbnZlcnRlcixcblxuXHRTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlLFxuXHRTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblxuXHQuLi5wYWdpbmdQcm92aWRlcnMsXG5cdC4uLnNjaGVtYVByb3ZpZGVycyxcblx0Li4uZm9ybWF0aW9uUHJvdmlkZXJzLFxuXHQuLi5zb3VyY2VQcm92aWRlcnNcbl07XG4iXX0=