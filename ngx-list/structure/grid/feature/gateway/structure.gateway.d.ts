import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { ColumnConfig, MultiColumnConfig } from '../../../../composition/core/api/column/column.config';
import { PagingConfig } from '../../../paging/core/api/paging-config';
import { SchemaTheme } from '../../../../schema/core/api/schema-theme';
import { SchemaRowColoring } from '../../../../schema/core/api/schema-row-coloring';
import { SortingConfig } from '../../../sorting/core/api/sorting-config';
import { FilterConfig } from '../../../filter/core/api/filter-config';
import { QuickFiltersConfig } from '../../../filter/core/api/quick-filters.config';
import { SearchConfig } from '../../../search/core/api/search-config';
import { SummariesConfig } from '../../../summaries/core/api/summaries-config';
import { EditemItemValues } from '../../../source/core/api/event/editem-item.values';
import { StructureId } from '../../../core/api/structure.id';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { StructureCommandDispatcher } from '../../../core/api/structure.command-dispatcher';
import { PagingCommandInvoker } from '../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../paging/core/api/paging.event-repository';
import { SourceCommandInvoker } from '../../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../../source/core/api/event/source-event.service';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionEventRepository } from '../../../../composition/core/api/composition.event-repository';
import { FormationEventRepository } from '../../../source/core/api/formation/formation.event-repository';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureInfoPanelArchive } from '../panel/info/structure.info-panel.archive';
import { StructureSummariesConfigService } from '../panel/summaries/structure.summaries-config.service';
import { StructureCellEditStore } from '../edit/structure.cell-edit.store';
import { ColumnMenuConfig } from '../../core/api/column-menu-config';
import { StructureColumnMenuConfigArchive } from '../header/menu/config/structure.column-menu-config.archive';
import { PagingDisplayModeArchive } from '../../../paging/feature/mode/paging-display-mode.archive';
import { RowSelectEnabledRepository } from '../../../source/core/api/formation/set-enabled/row-select-enabled.repository';
import { SearchEventRepository } from '../../../search/core/api/search.event-repository';
import { SchemaCommandInvoker } from '../../../../schema/core/api/schema.command-invoker';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { StructureHeaderTopEnabledArchive } from '../header/structure-header-top-enabled.archive';
import { SchemaEventRepository } from '../../../../schema/core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../schema/core/domain-read/schema.read-model-root-id';
import { RowColoring } from '../../../../schema/core/api/row-coloring';
import { RowDetailConfig } from '../row-detail/row-detail.config';
import { StructureRowDetailConfigArchive } from '../row-detail/structure.row-detail.config-archive';
import { TitlePanelConfig } from '../panel/title-panel/title-panel.config';
import { FooterPanelConfig } from '../panel/footer-panel/footer-panel.config';
import { StructureTitlePanelConfigArchive } from '../panel/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../panel/footer-panel/structure.footer-panel.config-archive';
import { InfoPanelConfig } from '../panel/info/info-panel.config';
import { StructureInfoPanelConfigService } from '../panel/info/structure.info-panel-config.service';
import { SortingCommandInvoker } from '../../../sorting/core/api/sorting.command-invoker';
import { SearchCommandInvoker } from '../../../search/core/api/search.command-invoker';
import { FieldCommandInvoker } from '../../../field/core/api/field.command-invoker';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { ColumnFieldFactory } from '../../../../composition/core/domain/column/field/colum-field.factory';
import { RowSelection } from '../../../source/core/api/row-selection';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { FormationCommandInvoker } from '../../../source/core/api/formation/formation.command-invoker';
import { SelectedRow } from '../../../source/core/api/formation/selected-row';
import { GuiLocalization, GuiRowClass, GuiRowStyle } from '../../../../gui/grid/core/api/gui.grid.public-api';
import { TranslationService } from '../../../../l10n/core/api/translation.service';
import { SchemaRowClassArchive } from '../../../../schema/core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../../../../schema/core/api/styling/schema.row-style.archive';
/** @internal */
export declare abstract class StructureGateway extends SmartComponent implements OnChanges, OnInit {
    protected readonly changeDetectorRef: ChangeDetectorRef;
    protected readonly domainEventBus: DomainEventBus;
    protected readonly commandDispatcher: CommandDispatcher;
    structureId: StructureId;
    protected compositionId: CompositionId;
    protected schemaId: SchemaReadModelRootId;
    protected structureCommandService: StructureCommandDispatcher;
    protected structurePagingCommandDispatcher: PagingCommandInvoker;
    protected pagingEventRepository: PagingEventRepository;
    protected sortingCommandDispatcher: SortingCommandInvoker;
    protected searchCommandDispatcher: SearchCommandInvoker;
    protected fieldCommandDispatcher: FieldCommandInvoker;
    protected sourceCommandService: SourceCommandInvoker;
    protected sourceEventService: SourceEventService;
    protected schemaCommandDispatcher: SchemaCommandInvoker;
    protected compositionCommandDispatcher: CompositionCommandInvoker;
    protected compositionEventService: CompositionEventRepository;
    protected formationEventService: FormationEventRepository;
    protected structureEditModeArchive: StructureEditModeArchive;
    protected structureCellEditArchive: StructureCellEditArchive;
    protected structureInfoPanelEnabledArchive: StructureInfoPanelArchive;
    protected structureInfoPanelConfigService: StructureInfoPanelConfigService;
    protected structureSummariesConfigService: StructureSummariesConfigService;
    protected structureCellEditStore: StructureCellEditStore;
    protected columnFieldFactory: ColumnFieldFactory;
    protected structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive;
    protected structurePagingDisplayModeArchive: PagingDisplayModeArchive;
    protected rowSelectEnabledArchive: RowSelectEnabledRepository;
    protected rowSelectionTypeArchive: RowSelectionTypeArchive;
    protected schemaRowClassArchive: SchemaRowClassArchive;
    protected schemaRowStyleArchive: SchemaRowStyleArchive;
    protected formationCommandDispatcher: FormationCommandInvoker;
    protected searchEventRepository: SearchEventRepository;
    protected structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive;
    protected structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive;
    protected structureDetailViewConfigArchive: StructureRowDetailConfigArchive;
    protected structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive;
    protected structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive;
    protected schemaEventRepository: SchemaEventRepository;
    protected translationService: TranslationService;
    /***********************
     * INPUTS
     ***********************/
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    maxHeight: number;
    width: number;
    rowHeight: number;
    autoResizeWidth: boolean;
    source: Array<any>;
    columns: Array<ColumnConfig | MultiColumnConfig>;
    paging: boolean | PagingConfig;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    theme: SchemaTheme;
    rowColoring: RowColoring;
    rowSelection: RowSelection;
    rowStyle: GuiRowStyle;
    rowClass: GuiRowClass;
    loading: boolean;
    virtualScroll: boolean;
    sorting: boolean | SortingConfig;
    filtering: boolean | FilterConfig;
    quickFilters: boolean | QuickFiltersConfig;
    searching: boolean | SearchConfig;
    editMode: boolean;
    cellEditing: boolean;
    infoPanel: boolean | InfoPanelConfig;
    summaries: SummariesConfig;
    columnMenu: ColumnMenuConfig;
    rowDetail: RowDetailConfig;
    titlePanel: TitlePanelConfig;
    footerPanel: FooterPanelConfig;
    localization: GuiLocalization;
    /***********************
     * OUTPUTS
     ***********************/
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    itemsSelected: EventEmitter<any>;
    selectedRows: EventEmitter<Array<SelectedRow>>;
    columnsChanged: EventEmitter<void>;
    containerWidthChanged: EventEmitter<number>;
    sourceEdited: EventEmitter<EditemItemValues>;
    cellEditEntered: EventEmitter<void>;
    cellEditCanceled: EventEmitter<void>;
    cellEditSubmitted: EventEmitter<void>;
    searchPhraseChanged: EventEmitter<string>;
    themeChanged: EventEmitter<SchemaTheme>;
    horizontalGridChanged: EventEmitter<boolean>;
    verticalGridChanged: EventEmitter<boolean>;
    rowColoringChanged: EventEmitter<SchemaRowColoring>;
    structureColumnInputHandler: StructureColumnInputHandler;
    private changeAfterInit;
    protected constructor(changeDetectorRef: ChangeDetectorRef, domainEventBus: DomainEventBus, commandDispatcher: CommandDispatcher, structureId: StructureId, compositionId: CompositionId, schemaId: SchemaReadModelRootId, structureCommandService: StructureCommandDispatcher, structurePagingCommandDispatcher: PagingCommandInvoker, pagingEventRepository: PagingEventRepository, sortingCommandDispatcher: SortingCommandInvoker, searchCommandDispatcher: SearchCommandInvoker, fieldCommandDispatcher: FieldCommandInvoker, sourceCommandService: SourceCommandInvoker, sourceEventService: SourceEventService, schemaCommandDispatcher: SchemaCommandInvoker, compositionCommandDispatcher: CompositionCommandInvoker, compositionEventService: CompositionEventRepository, formationEventService: FormationEventRepository, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelEnabledArchive: StructureInfoPanelArchive, structureInfoPanelConfigService: StructureInfoPanelConfigService, structureSummariesConfigService: StructureSummariesConfigService, structureCellEditStore: StructureCellEditStore, columnFieldFactory: ColumnFieldFactory, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, structurePagingDisplayModeArchive: PagingDisplayModeArchive, rowSelectEnabledArchive: RowSelectEnabledRepository, rowSelectionTypeArchive: RowSelectionTypeArchive, schemaRowClassArchive: SchemaRowClassArchive, schemaRowStyleArchive: SchemaRowStyleArchive, formationCommandDispatcher: FormationCommandInvoker, searchEventRepository: SearchEventRepository, structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, structureDetailViewConfigArchive: StructureRowDetailConfigArchive, structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, schemaEventRepository: SchemaEventRepository, translationService: TranslationService);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
    onPageChange(page: number): void;
    private connectSchemaEvents;
    private isInitialized;
    private isNotInitialized;
    private componentInitialized;
}
