/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from '../../feature/structure-fabric.imports';
import { PagingFeatureModule } from '../../../paging/feature/paging.feature-module';
import { StructureInfoPanelModule } from '../../feature/panel/info/structure.info-panel.module';
import { StructureComponent } from '../../feature/structure.component';
import { StructureHeaderComponent } from '../../feature/header/structure-header.component';
import { StructureHeaderColumnsComponent } from '../../feature/header/column/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from '../../feature/header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from '../../feature/header/filters/structure.header-filter.component';
import { StructureContentComponent } from '../../feature/content/structure-content.component';
import { StructureRowComponent } from '../../feature/content/row/structure-row.component';
import { StructureCellComponent } from '../../feature/content/cell/structure.cell.component';
import { StructureContainerComponent } from '../../feature/content/structure-container.component';
import { StructureQuickFiltersComponent } from '../../feature/header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from '../../feature/blueprint/structure.blueprint.component';
import { StructureColumnConfigComponent } from '../../feature/header/menu/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from './structure-tokens';
import { StructureDefinition } from '../../feature/structure-definition';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { StructureIdGenerator } from '../../feature/structure-id.generator';
import { structureCommandHandlers, structureDomainEventHandlers, structureProviders } from './structure.providers';
import { LoggerModule } from '../../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../../../source/core/domain/core/item/item.entity-factory';
import { StructureTopPanelModule } from '../../feature/panel/top/structure.top-panel.module';
import { StructureColumnMenuModule } from '../../feature/header/menu/structure.column-menu.module';
import { StructureSummariesPanelModule } from '../../feature/panel/summaries/structure.summaries-panel.module';
import { StructureColumnManagerModule } from '../../feature/column-manager/structure.column-manager.module';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { InMemoryStructureAggregateRepository } from '../../../core/infrastructure/in-memory/domain/in-memory.structure-aggregate.repository';
import { CreateStructureCommandHandler } from '../../../core/domain/create-structure/create-structure-command-handler.service';
import { StructureCellEditComponent } from '../../feature/content/cell/edit/structure.cell-edit.component';
import { StructureThemeConverter } from '../../feature/schema/structure.theme.converter';
import { StructureCellEditBooleanComponent } from '../../feature/content/cell/boolean/structure.cell-edit-boolean.component';
import { StructureRowDetailViewComponent } from '../../feature/row-detail/view/structure.row-detail-view.component';
import { StructureTitlePanelComponent } from '../../feature/panel/title-panel/structure.title-panel.component';
import { StructureFooterPanelComponent } from '../../feature/panel/footer-panel/structure.footer-panel.component';
import { PagingDomainModule } from '../../../paging/core/domain/paging.domain-module';
import { EmptySourceFeatureModule } from '../../../empty-source/feature/empty-source.feature-module';
import { SortingDomainModule } from '../../../sorting/core/domain/sorting.domain-module';
import { SortingFeatureModule } from '../../../sorting/feature/sorting.feature-module';
import { FieldFeatureModule } from '../../../field/feature/field.feature-module';
import { FieldDomainModule } from '../../../field/core/domain/field.domain-module';
import { SearchFeatureModule } from '../../../search/feature/search.feature-module';
import { SearchApiModule } from '../../../search/core/api/search.api-module';
import { SearchDomainModule } from '../../../search/core/domain/search.domain-module';
import { StructureThemeGateway } from '../../feature/gateway/schema/structure-theme.gateway';
import { SchemaManagerModule } from '../../../../schema/feature/manager/schema-manager.module';
import { FilterDomainModule } from '../../../filter/core/domain/filter.domain-module';
import { FilterApiModule } from '../../../filter/core/api/filter.api-module';
import { SourceDomainModule } from '../../../source/core/domain/source.domain-module';
import { SourceApiModule } from '../../../source/core/api/source.api-module';
import { SelectAllComponent } from '../../feature/header/column/select-all/select-all.component';
import { structureKey } from '../../../core/api/structre.api';
import { SummariesDomainModule } from '../../../summaries/core/domain/summaries.domain-module';
import { SummariesFeatureModule } from '../../../summaries/feature/summaries.feature-module';
import { VerticalFormationFeatureModule } from '../../../vertical-formation/feature/vertical-formation.feature-module';
import { VerticalFormationDomainModule } from '../../../vertical-formation/core/domain/vertical-formation.domain-module';
import { SchemaFeatureModule } from '../../../../schema/feature/schema.feature-module';
import { CompositionFeatureModule } from '../../../../composition/feature/composition.feature-module';
import { TranslationFeatureModule } from '../../../../l10n/feature/translation.feature-module';
import { StructureHeaderGroupsComponent } from '../../feature/header/group/structure-header-groups.component';
/**
 * @return {?}
 */
export function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
/** @type {?} */
const imports = [
    CommonModule,
    ReactiveFormsModule,
    TranslationFeatureModule,
    HermesModule,
    HermesModule.defineAggregate(structureKey, StructureAggregateFactory, InMemoryStructureAggregateRepository, CreateStructureCommandHandler, [
        ...PagingDomainModule.commandHandlers(),
        ...SortingDomainModule.commandHandlers(),
        ...FieldDomainModule.commandHandlers(),
        ...SearchDomainModule.commandHandlers(),
        ...FilterDomainModule.commandHandlers(),
        ...SourceDomainModule.commandHandlers(),
        ...SummariesDomainModule.commandHandlers(),
        ...VerticalFormationDomainModule.commandHandlers(),
        ...structureCommandHandlers
    ], [
        ...structureDomainEventHandlers,
        ...SearchDomainModule.domainEventHandlers(),
        ...FilterDomainModule.domainEventHandlers(),
        ...SourceDomainModule.domainEventHandlers(),
        ...SummariesDomainModule.domainEventHandlers(),
        ...FieldDomainModule.domainEventHandlers(),
        ...VerticalFormationDomainModule.domainEventHandlers()
    ]),
    // .withConfig({
    // 	loggers: false
    // }),
    ...fabricImports,
    PagingFeatureModule,
    SortingFeatureModule,
    FieldFeatureModule,
    SearchFeatureModule,
    SearchApiModule,
    FilterApiModule,
    SourceApiModule,
    SummariesFeatureModule,
    VerticalFormationFeatureModule,
    SchemaFeatureModule,
    StructureInfoPanelModule,
    StructureSummariesPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    SchemaManagerModule,
    EmptySourceFeatureModule,
    CompositionFeatureModule,
    LoggerModule
];
/** @type {?} */
const declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderGroupsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    SelectAllComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureCellEditComponent,
    StructureCellEditBooleanComponent,
    StructureContainerComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureRowDetailViewComponent,
    StructureTitlePanelComponent,
    StructureFooterPanelComponent,
    StructureThemeGateway
];
/** @type {?} */
const entryComponents = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
];
/** @type {?} */
const providers = [
    {
        provide: STRUCTURE_CSS_CLASS_NAME,
        useValue: 'structure'
    },
    {
        provide: StructureDefinition,
        useFactory: createStructureDefinition
    },
    ItemEntityFactory,
    StructureThemeConverter,
    SourceWarehouse,
    StructureIdGenerator,
    ...structureProviders
];
/** @type {?} */
const exportDeclarations = [
    FabricModule,
    StructureComponent,
    StructureThemeGateway,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    ...fabricImports,
    PagingFeatureModule
];
export class StructureModule {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    static withConfig(structureConfig = {
        cssClassName: '',
        hermesModuleConfig: { loggers: false }
    }) {
        return {
            ngModule: StructureModule,
            providers: [
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                ...providers
            ]
        };
    }
}
StructureModule.exportDeclarations = [...exportDeclarations];
StructureModule.decorators = [
    { type: NgModule, args: [{
                imports,
                declarations,
                exports: exportDeclarations,
                entryComponents
            },] }
];
/** @nocollapse */
StructureModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDaEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDakgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDbEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDaEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxF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QUFDLE9BQU8sRUFBRTtnQkFDdkYsR0FBRyxTQUFTO2FBQ1o7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7QUFsQk0sa0NBQWtCLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUM7O1lBUnBELFFBQVEsU0FBQztnQkFDVCxPQUFPO2dCQUNQLFlBQVk7Z0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsZUFBZTthQUNmOzs7OzRDQXVCYSxNQUFNLFNBQUMsV0FBVzs7OztJQXBCL0IsbUNBQW9EOzs7OztJQW9CeEMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9jb2x1bW4vc3RydWN0dXJlLWhlYWRlci1jb2x1bW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29udGVudC9yb3cvc3RydWN0dXJlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29udGVudC9jZWxsL3N0cnVjdHVyZS5jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvc3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvcXVpY2stZmlsdGVycy9zdHJ1Y3R1cmUucXVpY2stZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9ibHVlcHJpbnQvc3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtdG9rZW5zJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IHN0cnVjdHVyZUNvbW1hbmRIYW5kbGVycywgc3RydWN0dXJlRG9tYWluRXZlbnRIYW5kbGVycywgc3RydWN0dXJlUHJvdmlkZXJzIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlLW1vZHVsZS1jb25maWcnO1xuaW1wb3J0IHsgTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5RmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHktZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tbWVudS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9jcmVhdGUtc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUtY29tbWFuZC1oYW5kbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9ib29sZWFuL3N0cnVjdHVyZS5jZWxsLWVkaXQtYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZW1wdHktc291cmNlL2ZlYXR1cmUvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL2NvcmUvZG9tYWluL3NvcnRpbmcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NvcnRpbmcvZmVhdHVyZS9zb3J0aW5nLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpZWxkRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2ZlYXR1cmUvZmllbGQuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGREb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvZmVhdHVyZS9zZWFyY2guZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaERvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2RvbWFpbi9zZWFyY2guZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUdhdGV3YXkgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2dhdGV3YXkvc2NoZW1hL3N0cnVjdHVyZS10aGVtZS5nYXRld2F5JztcbmltcG9ydCB7IFNjaGVtYU1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3NjaGVtYS1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvY29yZS9kb21haW4vZmlsdGVyLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9zb3VyY2UuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3VyY2VBcGlNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvY29sdW1uL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgc3RydWN0dXJlS2V5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0cmUuYXBpJztcbmltcG9ydCB7IFN1bW1hcmllc0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL2ZlYXR1cmUvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9mZWF0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTY2hlbWFGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUvc2NoZW1hLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2ZlYXR1cmUvY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL2dyb3VwL3N0cnVjdHVyZS1oZWFkZXItZ3JvdXBzLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb24oKSB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG59XG5cbmNvbnN0IGltcG9ydHMgPSBbXG5cdENvbW1vbk1vZHVsZSxcblx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUsXG5cdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0c3RydWN0dXJlS2V5LFxuXHRcdFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0SW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdENyZWF0ZVN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyLFxuXHRcdFtcblx0XHRcdC4uLlBhZ2luZ0RvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNvcnRpbmdEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWVsZERvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNlYXJjaERvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLkZpbHRlckRvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlNvdXJjZURvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlN1bW1hcmllc0RvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLlZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0Li4uc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzXG5cdFx0XSwgW1xuXHRcdFx0Li4uc3RydWN0dXJlRG9tYWluRXZlbnRIYW5kbGVycyxcblx0XHRcdC4uLlNlYXJjaERvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWx0ZXJEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpLFxuXHRcdFx0Li4uU291cmNlRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKSxcblx0XHRcdC4uLlN1bW1hcmllc0RvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWVsZERvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHQuLi5WZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKClcblx0XHRdXG5cdCksXG5cdC8vIC53aXRoQ29uZmlnKHtcblx0Ly8gXHRsb2dnZXJzOiBmYWxzZVxuXHQvLyB9KSxcblx0Li4uZmFicmljSW1wb3J0cyxcblxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlLFxuXHRTb3J0aW5nRmVhdHVyZU1vZHVsZSxcblx0RmllbGRGZWF0dXJlTW9kdWxlLFxuXHRTZWFyY2hGZWF0dXJlTW9kdWxlLFxuXHRTZWFyY2hBcGlNb2R1bGUsXG5cdEZpbHRlckFwaU1vZHVsZSxcblx0U291cmNlQXBpTW9kdWxlLFxuXHRTdW1tYXJpZXNGZWF0dXJlTW9kdWxlLFxuXHRWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUsXG5cblx0U2NoZW1hRmVhdHVyZU1vZHVsZSxcblxuXHRTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSxcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0U2NoZW1hTWFuYWdlck1vZHVsZSxcblxuXHRFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUsXG5cblx0Q29tcG9zaXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdExvZ2dlck1vZHVsZVxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29sdW1uc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyR3JvdXBzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQsXG5cdFNlbGVjdEFsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDZWxsRWRpdENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlQmx1ZXByaW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCxcblx0U3RydWN0dXJlVGhlbWVHYXRld2F5XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCxcblx0U3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdHVzZVZhbHVlOiAnc3RydWN0dXJlJ1xuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHR1c2VGYWN0b3J5OiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uXG5cdH0sXG5cdEl0ZW1FbnRpdHlGYWN0b3J5LFxuXHRTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlcixcblxuXHRTb3VyY2VXYXJlaG91c2UsXG5cblx0U3RydWN0dXJlSWRHZW5lcmF0b3IsXG5cblx0Li4uc3RydWN0dXJlUHJvdmlkZXJzXG5cbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0RmFicmljTW9kdWxlLFxuXHRTdHJ1Y3R1cmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZVRoZW1lR2F0ZXdheSxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblxuXHQuLi5mYWJyaWNJbXBvcnRzLFxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKHN0cnVjdHVyZUNvbmZpZzogU3RydWN0dXJlTW9kdWxlQ29uZmlnID0ge1xuXHRcdGNzc0NsYXNzTmFtZTogJycsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7IGxvZ2dlcnM6IGZhbHNlIH1cblx0fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogU3RydWN0dXJlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5jc3NDbGFzc05hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0Li4ucHJvdmlkZXJzXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHdpbmRvd1snaGVybWVzQXBpJ10ubG9nZ2VycyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=