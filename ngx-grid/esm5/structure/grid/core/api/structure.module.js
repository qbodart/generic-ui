/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var imports = tslib_1.__spread([
    CommonModule,
    ReactiveFormsModule,
    TranslationFeatureModule,
    HermesModule,
    HermesModule.defineAggregate(structureKey, StructureAggregateFactory, InMemoryStructureAggregateRepository, CreateStructureCommandHandler, tslib_1.__spread(PagingDomainModule.commandHandlers(), SortingDomainModule.commandHandlers(), FieldDomainModule.commandHandlers(), SearchDomainModule.commandHandlers(), FilterDomainModule.commandHandlers(), SourceDomainModule.commandHandlers(), SummariesDomainModule.commandHandlers(), VerticalFormationDomainModule.commandHandlers(), structureCommandHandlers), tslib_1.__spread(structureDomainEventHandlers, SearchDomainModule.domainEventHandlers(), FilterDomainModule.domainEventHandlers(), SourceDomainModule.domainEventHandlers(), SummariesDomainModule.domainEventHandlers(), FieldDomainModule.domainEventHandlers(), VerticalFormationDomainModule.domainEventHandlers()))
], fabricImports, [
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
]);
/** @type {?} */
var declarations = [
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
var entryComponents = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
];
/** @type {?} */
var providers = tslib_1.__spread([
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
    StructureIdGenerator
], structureProviders);
/** @type {?} */
var exportDeclarations = tslib_1.__spread([
    FabricModule,
    StructureComponent,
    StructureThemeGateway,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent
], fabricImports, [
    PagingFeatureModule
]);
var StructureModule = /** @class */ (function () {
    function StructureModule(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    StructureModule.withConfig = /**
     * @param {?=} structureConfig
     * @return {?}
     */
    function (structureConfig) {
        if (structureConfig === void 0) { structureConfig = {
            cssClassName: '',
            hermesModuleConfig: { loggers: false }
        }; }
        return {
            ngModule: StructureModule,
            providers: tslib_1.__spread([
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers }
            ], providers)
        };
    };
    StructureModule.exportDeclarations = tslib_1.__spread(exportDeclarations);
    StructureModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    exports: exportDeclarations,
                    entryComponents: entryComponents
                },] }
    ];
    /** @nocollapse */
    StructureModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return StructureModule;
}());
export { StructureModule };
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQXVCLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8s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QTtpQkFDZjs7OztnREF1QmEsTUFBTSxTQUFDLFdBQVc7O0lBTWhDLHNCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E1QlksZUFBZTs7O0lBRTNCLG1DQUFvRDs7Ozs7SUFvQnhDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IENPTU1BTkRfTE9HR0VSX0VOQUJMRUQsIEVWRU5UX0xPR0dFUl9FTkFCTEVELCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgUGFnaW5nRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvY29sdW1uL3N0cnVjdHVyZS1oZWFkZXItY29sdW1ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL2ZpbHRlcnMvc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvcm93L3N0cnVjdHVyZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9zdHJ1Y3R1cmUuY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb250ZW50L3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL3F1aWNrLWZpbHRlcnMvc3RydWN0dXJlLnF1aWNrLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSB9IGZyb20gJy4vc3RydWN0dXJlLXRva2Vucyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcnMsIHN0cnVjdHVyZURvbWFpbkV2ZW50SGFuZGxlcnMsIHN0cnVjdHVyZVByb3ZpZGVycyB9IGZyb20gJy4vc3RydWN0dXJlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGVDb25maWcgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS1tb2R1bGUtY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eUZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5LWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3BhbmVsL3RvcC9zdHJ1Y3R1cmUudG9wLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZVN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vY3JlYXRlLXN0cnVjdHVyZS9jcmVhdGUtc3RydWN0dXJlLWNvbW1hbmQtaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb250ZW50L2NlbGwvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2NoZW1hL3N0cnVjdHVyZS50aGVtZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9jb250ZW50L2NlbGwvYm9vbGVhbi9zdHJ1Y3R1cmUuY2VsbC1lZGl0LWJvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3Jvdy1kZXRhaWwvdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9wYW5lbC90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9wYW5lbC9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5nRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2VtcHR5LXNvdXJjZS9mZWF0dXJlL2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3J0aW5nRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc29ydGluZy9jb3JlL2RvbWFpbi9zb3J0aW5nLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL2ZlYXR1cmUvc29ydGluZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9mZWF0dXJlL2ZpZWxkLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZpZWxkRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2ZlYXR1cmUvc2VhcmNoLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEFwaU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlVGhlbWVHYXRld2F5IH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9nYXRld2F5L3NjaGVtYS9zdHJ1Y3R1cmUtdGhlbWUuZ2F0ZXdheSc7XG5pbXBvcnQgeyBTY2hlbWFNYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL2ZpbHRlci5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlckFwaU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTb3VyY2VEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNlbGVjdEFsbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50JztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHJlLmFwaSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9mZWF0dXJlL3N1bW1hcmllcy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vZmVhdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Eb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZW1hRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL3NjaGVtYS5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlL2NvbXBvc2l0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJHcm91cHNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mZWF0dXJlL2hlYWRlci9ncm91cC9zdHJ1Y3R1cmUtaGVhZGVyLWdyb3Vwcy5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVEZWZpbml0aW9uKCkge1xuXHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xufVxuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRDb21tb25Nb2R1bGUsXG5cdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSxcblx0SGVybWVzTW9kdWxlLFxuXHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdHN0cnVjdHVyZUtleSxcblx0XHRTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kSGFuZGxlcixcblx0XHRbXG5cdFx0XHQuLi5QYWdpbmdEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5Tb3J0aW5nRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0Li4uRmllbGREb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5TZWFyY2hEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5GaWx0ZXJEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5Tb3VyY2VEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5TdW1tYXJpZXNEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKCksXG5cdFx0XHQuLi5WZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKSxcblx0XHRcdC4uLnN0cnVjdHVyZUNvbW1hbmRIYW5kbGVyc1xuXHRcdF0sIFtcblx0XHRcdC4uLnN0cnVjdHVyZURvbWFpbkV2ZW50SGFuZGxlcnMsXG5cdFx0XHQuLi5TZWFyY2hEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpLFxuXHRcdFx0Li4uRmlsdGVyRG9tYWluTW9kdWxlLmRvbWFpbkV2ZW50SGFuZGxlcnMoKSxcblx0XHRcdC4uLlNvdXJjZURvbWFpbk1vZHVsZS5kb21haW5FdmVudEhhbmRsZXJzKCksXG5cdFx0XHQuLi5TdW1tYXJpZXNEb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpLFxuXHRcdFx0Li4uRmllbGREb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpLFxuXHRcdFx0Li4uVmVydGljYWxGb3JtYXRpb25Eb21haW5Nb2R1bGUuZG9tYWluRXZlbnRIYW5kbGVycygpXG5cdFx0XVxuXHQpLFxuXHQvLyAud2l0aENvbmZpZyh7XG5cdC8vIFx0bG9nZ2VyczogZmFsc2Vcblx0Ly8gfSksXG5cdC4uLmZhYnJpY0ltcG9ydHMsXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0U29ydGluZ0ZlYXR1cmVNb2R1bGUsXG5cdEZpZWxkRmVhdHVyZU1vZHVsZSxcblx0U2VhcmNoRmVhdHVyZU1vZHVsZSxcblx0U2VhcmNoQXBpTW9kdWxlLFxuXHRGaWx0ZXJBcGlNb2R1bGUsXG5cdFNvdXJjZUFwaU1vZHVsZSxcblx0U3VtbWFyaWVzRmVhdHVyZU1vZHVsZSxcblx0VmVydGljYWxGb3JtYXRpb25GZWF0dXJlTW9kdWxlLFxuXG5cdFNjaGVtYUZlYXR1cmVNb2R1bGUsXG5cblx0U3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlVG9wUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUsXG5cdFNjaGVtYU1hbmFnZXJNb2R1bGUsXG5cblx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXG5cdENvbXBvc2l0aW9uRmVhdHVyZU1vZHVsZSxcblxuXHRMb2dnZXJNb2R1bGVcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckNvbHVtbnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50LFxuXHRTZWxlY3RBbGxDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCxcblx0U3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCxcblx0U3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQsXG5cdFN0cnVjdHVyZVRoZW1lR2F0ZXdheVxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0e1xuXHRcdHByb3ZpZGU6IFNUUlVDVFVSRV9DU1NfQ0xBU1NfTkFNRSxcblx0XHR1c2VWYWx1ZTogJ3N0cnVjdHVyZSdcblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IFN0cnVjdHVyZURlZmluaXRpb24sXG5cdFx0dXNlRmFjdG9yeTogY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvblxuXHR9LFxuXHRJdGVtRW50aXR5RmFjdG9yeSxcblx0U3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIsXG5cblx0U291cmNlV2FyZWhvdXNlLFxuXG5cdFN0cnVjdHVyZUlkR2VuZXJhdG9yLFxuXG5cdC4uLnN0cnVjdHVyZVByb3ZpZGVyc1xuXG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEZhYnJpY01vZHVsZSxcblx0U3RydWN0dXJlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVUaGVtZUdhdGV3YXksXG5cdFN0cnVjdHVyZUhlYWRlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGVudENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250YWluZXJDb21wb25lbnQsXG5cblx0Li4uZmFicmljSW1wb3J0cyxcblx0UGFnaW5nRmVhdHVyZU1vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0cyxcblx0ZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBbLi4uZXhwb3J0RGVjbGFyYXRpb25zXTtcblxuXHRzdGF0aWMgd2l0aENvbmZpZyhzdHJ1Y3R1cmVDb25maWc6IFN0cnVjdHVyZU1vZHVsZUNvbmZpZyA9IHtcblx0XHRjc3NDbGFzc05hbWU6ICcnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzogeyBsb2dnZXJzOiBmYWxzZSB9XG5cdH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFN0cnVjdHVyZU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU1RSVUNUVVJFX0NTU19DTEFTU19OQU1FLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuY3NzQ2xhc3NOYW1lXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgdXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5oZXJtZXNNb2R1bGVDb25maWcubG9nZ2VycyB9LFxuXHRcdFx0XHR7IHByb3ZpZGU6IEVWRU5UX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdC4uLnByb3ZpZGVyc1xuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbJ2hlcm1lc0FwaSddLmxvZ2dlcnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuIl19