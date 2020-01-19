import { Aggregate, AggregateEvent } from '@generic-ui/hermes';
import { PagingAggregate } from '../../paging/command/paging.aggregate';
import { SourceManager } from '../../source/command/source.manager';
import { VerticalFormation } from './vertical-formation/vertical-formation';
import { AggregationManager } from './aggregation/aggregation.manager';
import { SorterCollection } from './sort/sorter.collection';
import { FilterManager } from './filter/filter.manager';
import { FieldCollection } from './field/field.collection';
import { FormationAggregate } from '../../formation/command/formation-aggregate';
import { SchemaAggregate } from '../../schema/command/schema-aggregate';
import { StructureId } from '../../structure-id';
import { StructureEditSourceItemParams } from '../../source/command/origin/edit/structure.edit-source-item.params';
import { PagingConfig } from '../../paging/paging-config';
import { OriginItemEntity } from '../../source/command/origin/origin-item-entity';
import { ColumnConfig } from '../../composition/column.config';
import { Field } from './field/data-type/field';
import { SortingConfig } from '../../../ui-api/structure/sorting-config';
import { FieldId } from './field/data-type/field.id';
import { StructureSorter } from './sort/structure.sorter';
import { FilterConfig } from '../../../ui-api/structure/filter/filter-config';
import { QuickFiltersConfig } from '../../../ui-api/structure/filter/quick-filters.config';
import { SearchConfig } from '../../../ui-api/structure/search/search-config';
import { SearchManager } from './search/search.manager';
import { SortStatus } from '../../composition/command/column/sort/sort-status';
export declare class StructureAggregate extends Aggregate {
    private formationAggregate;
    private schema;
    private pagingAggregate;
    private sourceManager;
    private sorterCollection;
    private filterManager;
    private searchManager;
    private verticalFormation;
    private fieldCollection;
    private aggregationManager;
    constructor(structureId: StructureId, pagingAggregate: PagingAggregate, formationAggregate: FormationAggregate, sourceManager: SourceManager, verticalFormation: VerticalFormation, aggregationManager: AggregationManager, sorterCollection: SorterCollection, filterCollection: FilterManager, searchManager: SearchManager, fieldCollection: FieldCollection, schema: SchemaAggregate);
    getVerticalFormation(): VerticalFormation;
    setAggregationEnabled(enabled: boolean): ReadonlyArray<AggregateEvent>;
    setOrigin(items: Array<any>): ReadonlyArray<AggregateEvent>;
    editItem(editParams: StructureEditSourceItemParams): ReadonlyArray<AggregateEvent>;
    setHeight(height: number): void;
    setFormation(formation: FormationAggregate): void;
    setScrollPosition(position: number): void;
    getFormation(): FormationAggregate;
    setSchema(schema: SchemaAggregate): void;
    getSchema(): SchemaAggregate;
    getPaging(): PagingAggregate;
    changePaging(config: PagingConfig): void;
    setPaging(paging: PagingAggregate): void;
    nextPage(): void;
    prevPage(): void;
    changePageSize(pageSize: number): ReadonlyArray<AggregateEvent>;
    getEntities(): Array<OriginItemEntity>;
    getSource(): SourceManager;
    createFields(columns: Array<ColumnConfig>): Array<Field>;
    setSortingConfig(config: SortingConfig): void;
    toggleSort(fieldId: FieldId): Array<StructureSorter>;
    setSortOrder(fieldId: FieldId, sortOrder: SortStatus): Array<StructureSorter>;
    setFilterConfig(config: FilterConfig): void;
    setSearchingConfig(config: SearchConfig): void;
    setQuickFiltersConfig(config: QuickFiltersConfig): void;
    toggleFilter(fieldId: FieldId, externalFilterId: string, filterValue: string): Array<AggregateEvent>;
    addSearchPhrase(phrase: string): Array<AggregateEvent>;
    removeSearchPhrase(): Array<AggregateEvent>;
    private calculateSource;
    private calculateSourceBasedOnVirtualScroll;
}
