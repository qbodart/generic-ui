import { ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { Structure } from '../../domain/structure/read/structure';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../domain/structure-id';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
import { PagingReadModelService } from '../../ui-api/paging/paging-read-model.service';
import { StructureInfoPanelEnabledArchive } from '../panel/info/structure.info-panel-enabled.archive';
import { StructureAggregationArchive } from '../panel/aggregation/structure.aggregation.archive';
import { StructureFilterReadModelRepository } from '../../ui-api/structure/filter/structure.filter.read-model.repository';
import { StructureSearchReadModelRepository } from '../../ui-api/structure/search/structure-search.read-model.repository';
export declare class StructureBlueprintComponent extends SmartComponent {
    private changeDetectorRef;
    private structureDefinition;
    private structureId;
    private structureQueryService;
    private pagingQueryService;
    private structureInfoPanelEnabledArchive;
    private structureAggregationArchive;
    private structureFilterReadModelRepository;
    private structureSearchReadModelRepository;
    private className;
    structure: Structure;
    searchEnabled: boolean;
    topAggregationPanelEnabled: boolean;
    bottomAggregationPanelEnabled: boolean;
    quickFiltersEnabled: boolean;
    infoPanelEnabled: boolean;
    readonly contentCssClass: string;
    readonly headerCssClass: string;
    private pagingReadModel;
    constructor(changeDetectorRef: ChangeDetectorRef, structureDefinition: StructureDefinition, structureId: StructureId, structureQueryService: StructureReadModelService, pagingQueryService: PagingReadModelService, structureInfoPanelEnabledArchive: StructureInfoPanelEnabledArchive, structureAggregationArchive: StructureAggregationArchive, structureFilterReadModelRepository: StructureFilterReadModelRepository, structureSearchReadModelRepository: StructureSearchReadModelRepository, className: string);
    ngOnInit(): void;
    getHeaderTopClasses(): string;
    getHeaderBottomClasses(): string;
    isColumnHeaderTopEnabled(): boolean;
    isColumnHeaderBottomEnabled(): boolean;
    isPagingTopEnabled(): boolean;
    isPagingBottomEnabled(): boolean;
    isSourceEmpty(): boolean;
}
