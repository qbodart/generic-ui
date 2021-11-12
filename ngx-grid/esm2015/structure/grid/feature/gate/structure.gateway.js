import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { PagingCommandInvoker } from '../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../paging/core/api/paging.event-repository';
import { SourceCommandInvoker } from '../../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../../source/core/api/event/source-event.service';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionEventRepository } from '../../../../composition/core/api/composition.event-repository';
import { FormationEventRepository } from '../../../source/core/api/formation/formation.event-repository';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../edit/structure.cell-edit.store';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { RowSelectEnabledRepository } from '../../../source/core/api/formation/set-enabled/row-select-enabled.repository';
import { SearchEventRepository } from '../../../search/core/api/search.event-repository';
import { SchemaCommandInvoker } from '../../../../schema/core/api/schema.command-invoker';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { SchemaEventRepository } from '../../../../schema/core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../schema/core/api/schema.read-model-root-id';
import { StructureInfoPanelConfigService } from '../../core/api/panel/info/structure.info-panel-config.service';
import { SortingCommandInvoker } from '../../../sorting/core/api/sorting.command-invoker';
import { SearchCommandInvoker } from '../../../search/core/api/search.command-invoker';
import { FieldCommandInvoker } from '../../../field/core/api/field.command-invoker';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { ColumnFieldFactory } from '../../../../composition/core/domain/column/field/colum-field.factory';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { FormationCommandInvoker } from '../../../source/core/api/formation/formation.command-invoker';
import { TranslationFacade } from '../../../../l10n/core/api/translation.facade';
import { SchemaRowClassArchive } from '../../../../schema/core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../../../../schema/core/api/styling/schema.row-style.archive';
import { StructureInitialValuesReadyArchive } from '../../../core/api/structure.initial-values-ready.archive';
import { ColumnAutoConfigurator } from '../../../../composition/core/api/column/auto/column-auto.configurator';
import { ifChanged } from '../../../../common/cdk/component/check.input';
/** @internal */
export class StructureGateway extends SmartComponent {
    constructor(changeDetectorRef, elementRef, domainEventBus, commandDispatcher, columnAutoConfigurator, structureId, compositionId, schemaId, structureCommandInvoker, structurePagingCommandDispatcher, pagingEventRepository, sortingCommandDispatcher, searchCommandDispatcher, fieldCommandDispatcher, sourceCommandService, sourceEventService, schemaCommandInvoker, compositionCommandDispatcher, compositionEventRepository, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelConfigService, structureCellEditStore, columnFieldFactory, rowSelectEnabledArchive, rowSelectionTypeArchive, schemaRowClassArchive, schemaRowStyleArchive, formationCommandDispatcher, searchEventRepository, structureHeaderBottomEnabledArchive, schemaEventRepository, translationService, structureInitialValuesReadyArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
        this.columnAutoConfigurator = columnAutoConfigurator;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.schemaId = schemaId;
        this.structureCommandInvoker = structureCommandInvoker;
        this.structurePagingCommandDispatcher = structurePagingCommandDispatcher;
        this.pagingEventRepository = pagingEventRepository;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.fieldCommandDispatcher = fieldCommandDispatcher;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.compositionCommandDispatcher = compositionCommandDispatcher;
        this.compositionEventRepository = compositionEventRepository;
        this.formationEventService = formationEventService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureInfoPanelConfigService = structureInfoPanelConfigService;
        this.structureCellEditStore = structureCellEditStore;
        this.columnFieldFactory = columnFieldFactory;
        this.rowSelectEnabledArchive = rowSelectEnabledArchive;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.searchEventRepository = searchEventRepository;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.schemaEventRepository = schemaEventRepository;
        this.translationService = translationService;
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        // DOESNT WORK WITH GATE
        this.source = [];
        /** *********************
         * OUTPUTS
         ***********************/
        this.themeChanged = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        this.changeAfterInit = false;
        this.structureColumnInputHandler = new StructureColumnInputHandler(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, columnAutoConfigurator, compositionCommandDispatcher);
        this.translationService.setDefaultTranslation();
    }
    ngOnChanges(changes) {
        ifChanged(changes.editMode, () => {
            this.structureEditModeArchive.next(this.editMode);
        });
        ifChanged(changes.cellEditing, () => {
            let editingConfig;
            if (typeof this.cellEditing === 'boolean') {
                editingConfig = {
                    enabled: this.cellEditing
                };
            }
            else {
                editingConfig = this.cellEditing;
            }
            this.structureCommandInvoker.setCellEdit(editingConfig, this.structureId);
        });
        ifChanged(changes.width, (width) => {
            this.compositionCommandDispatcher.setWidth(width, this.compositionId);
        });
        ifChanged(changes.theme, () => {
            this.schemaCommandInvoker.setTheme(this.theme, this.schemaId, this.structureId);
        });
        ifChanged(changes.rowHeight, () => {
            this.structureCommandInvoker.setRowHeight(this.rowHeight, this.structureId);
        });
        ifChanged(changes.autoResizeWidth, () => {
            this.compositionCommandDispatcher.setResizeWidth(this.autoResizeWidth, this.compositionId);
        });
        /**
         * Columns
         */
        this.structureColumnInputHandler.handle(changes);
        ifChanged(changes.maxHeight, () => {
            this.structureCommandInvoker.setContainerHeight(this.maxHeight, this.structureId);
        });
        /**
         * Setting source should be last step
         */
        ifChanged(changes.source, () => {
            this.sourceCommandService.setOrigin(this.source, this.structureId);
        });
    }
    ngOnInit() {
        this.compositionEventRepository
            .onColumnsChanged(this.compositionId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe(() => {
            this.columnsChanged.emit();
        });
        this.compositionEventRepository
            .onContainerWidthChanged(this.compositionId.toReadModelRootId())
            .pipe(this.takeUntil())
            .subscribe((containerWidth) => {
            this.containerWidthChanged.emit(containerWidth);
        });
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .subscribe((values) => {
            this.sourceEdited.emit(values);
        });
        this.structureCellEditStore
            .on()
            .pipe(this.takeUntil())
            .subscribe((state) => {
            switch (state) {
                case StructureCellEditState.ENTER:
                    this.cellEditEntered.emit();
                    break;
                case StructureCellEditState.SUBMIT:
                    this.cellEditSubmitted.emit();
                    break;
                case StructureCellEditState.CANCEL:
                    this.cellEditCanceled.emit();
                    break;
                default:
                    break;
            }
        });
        this.subscribeAndEmit(this.schemaEventRepository.onThemeChanged(this.schemaId), this.themeChanged);
        this.componentInitialized();
    }
    componentInitialized() {
        this.changeAfterInit = true;
    }
}
StructureGateway.decorators = [
    { type: Directive }
];
StructureGateway.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: DomainEventBus },
    { type: CommandDispatcher },
    { type: ColumnAutoConfigurator },
    { type: StructureId },
    { type: CompositionId },
    { type: SchemaReadModelRootId },
    { type: StructureCommandInvoker },
    { type: PagingCommandInvoker },
    { type: PagingEventRepository },
    { type: SortingCommandInvoker },
    { type: SearchCommandInvoker },
    { type: FieldCommandInvoker },
    { type: SourceCommandInvoker },
    { type: SourceEventService },
    { type: SchemaCommandInvoker },
    { type: CompositionCommandInvoker },
    { type: CompositionEventRepository },
    { type: FormationEventRepository },
    { type: StructureEditModeArchive },
    { type: StructureCellEditArchive },
    { type: StructureInfoPanelConfigService },
    { type: StructureCellEditStore },
    { type: ColumnFieldFactory },
    { type: RowSelectEnabledRepository },
    { type: RowSelectionTypeArchive },
    { type: SchemaRowClassArchive },
    { type: SchemaRowStyleArchive },
    { type: FormationCommandInvoker },
    { type: SearchEventRepository },
    { type: StructureHeaderBottomEnabledArchive },
    { type: SchemaEventRepository },
    { type: TranslationFacade },
    { type: StructureInitialValuesReadyArchive }
];
StructureGateway.propDecorators = {
    maxHeight: [{ type: Input }],
    width: [{ type: Input }],
    rowHeight: [{ type: Input }],
    autoResizeWidth: [{ type: Input }],
    source: [{ type: Input }],
    columns: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    theme: [{ type: Input }],
    themeChanged: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDekcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDM0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0s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WUFFckIsbUNBQW1DO1lBQ25DLHFCQUFxQjtZQVdyQixpQkFBaUI7WUFLakIsa0NBQWtDOzs7d0JBZXpDLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLOzhCQUdMLEtBQUs7cUJBS0wsS0FBSztzQkFLTCxLQUFLO3VCQVNMLEtBQUs7MEJBR0wsS0FBSztvQkFHTCxLQUFLOzJCQVFMLE1BQU07NkJBR04sTUFBTTtvQ0FHTixNQUFNOzJCQUdOLE1BQU07OEJBR04sTUFBTTsrQkFHTixNQUFNO2dDQUdOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRlbUl0ZW1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZXZlbnQvZWRpdGVtLWl0ZW0udmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5lZGl0LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RhdGUnO1xuaW1wb3J0IHsgUm93U2VsZWN0RW5hYmxlZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NldC1lbmFibGVkL3Jvdy1zZWxlY3QtZW5hYmxlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB9IGZyb20gJy4vY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dTdHlsZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBDZWxsRWRpdENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2VkaXQvY2VsbC1lZGl0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29sdW1uL2F1dG8vY29sdW1uLWF1dG8uY29uZmlndXJhdG9yJztcbmltcG9ydCB7IGlmQ2hhbmdlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2NoZWNrLmlucHV0JztcblxuXG4vKiogQGludGVybmFsICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqICoqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBJTlBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cblx0Ly8gRE9FU05UIFdPUksgV0lUSCBHQVRFXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cblx0Ly8gRE9FU05UIFdPUksgV0lUSCBHQVRFXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZyB8IE11bHRpQ29sdW1uQ29uZmlnPjtcblxuXHQvLyBASW5wdXQoKVxuXHQvLyBmaWx0ZXJpbmc6IGJvb2xlYW4gfCBGaWx0ZXJDb25maWc7XG5cblx0Ly8gQElucHV0KClcblx0Ly8gcXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuIHwgQ2VsbEVkaXRDb25maWc7XG5cblx0QElucHV0KClcblx0dGhlbWU6IFNjaGVtYVRoZW1lO1xuXG5cblx0LyoqICoqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBPVVRQVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRAT3V0cHV0KClcblx0dGhlbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2NoZW1hVGhlbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZW1JdGVtVmFsdWVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRzdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXI6IFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlcjtcblxuXHRwcml2YXRlIGNoYW5nZUFmdGVySW5pdCA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJvdGVjdGVkIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQXV0b0NvbmZpZ3VyYXRvcjogQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcixcblx0XHRwdWJsaWMgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgcGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIGZpZWxkQ29tbWFuZERpc3BhdGNoZXI6IEZpZWxkQ29tbWFuZEludm9rZXIsXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnk6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBjb2x1bW5GaWVsZEZhY3Rvcnk6IENvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRwcm90ZWN0ZWQgcm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFJvd1NlbGVjdEVuYWJsZWRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYVJvd0NsYXNzQXJjaGl2ZTogU2NoZW1hUm93Q2xhc3NBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFSb3dTdHlsZUFyY2hpdmU6IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdHByb3RlY3RlZCBzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzY2hlbWFFdmVudFJlcG9zaXRvcnk6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZTogU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZVxuXHQpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciA9IG5ldyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIoc3RydWN0dXJlSWQsXG5cdFx0XHRjb21wb3NpdGlvbklkLCBjb21tYW5kRGlzcGF0Y2hlciwgZG9tYWluRXZlbnRCdXMsIGNvbHVtbkZpZWxkRmFjdG9yeSxcblx0XHRcdGNvbHVtbkF1dG9Db25maWd1cmF0b3IsIGNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIpO1xuXG5cdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlR2F0ZXdheT4pIHtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLmVkaXRNb2RlLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZS5uZXh0KHRoaXMuZWRpdE1vZGUpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuY2VsbEVkaXRpbmcsICgpID0+IHtcblxuXHRcdFx0bGV0IGVkaXRpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5jZWxsRWRpdGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGVkaXRpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5jZWxsRWRpdGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWRpdGluZ0NvbmZpZyA9IHRoaXMuY2VsbEVkaXRpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2V0Q2VsbEVkaXQoZWRpdGluZ0NvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy53aWR0aCwgKHdpZHRoKSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0V2lkdGgod2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSk7XG5cblx0XHRpZkNoYW5nZWQoY2hhbmdlcy50aGVtZSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGlzLnRoZW1lLCB0aGlzLnNjaGVtYUlkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9KTtcblxuXHRcdGlmQ2hhbmdlZChjaGFuZ2VzLnJvd0hlaWdodCwgKCkgPT4ge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRSb3dIZWlnaHQodGhpcy5yb3dIZWlnaHQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0pO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0UmVzaXplV2lkdGgodGhpcy5hdXRvUmVzaXplV2lkdGgsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSk7XG5cblx0XHQvKipcblx0XHQgKiBDb2x1bW5zXG5cdFx0ICovXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIuaGFuZGxlKGNoYW5nZXMpO1xuXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMubWF4SGVpZ2h0LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNldENvbnRhaW5lckhlaWdodCh0aGlzLm1heEhlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSk7XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWZDaGFuZ2VkKGNoYW5nZXMuc291cmNlLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLnNvdXJjZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkLnRvUmVhZE1vZGVsUm9vdElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZC50b1JlYWRNb2RlbFJvb3RJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uVGhlbWVDaGFuZ2VkKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy50aGVtZUNoYW5nZWRcblx0XHQpO1xuXG5cdFx0dGhpcy5jb21wb25lbnRJbml0aWFsaXplZCgpO1xuXHR9XG5cblxuXHRwcml2YXRlIGNvbXBvbmVudEluaXRpYWxpemVkKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlQWZ0ZXJJbml0ID0gdHJ1ZTtcblx0fVxuXG59XG4iXX0=