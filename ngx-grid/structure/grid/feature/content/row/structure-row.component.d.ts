import { ChangeDetectorRef, ElementRef, OnChanges, OnInit } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
import { FormationWarehouse } from '../../../../source/core/api/formation/formation.warehouse';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { GuiRowClass, GuiRowStyle } from '../../../../../gui/grid/core/api/gui.grid.public-api';
import { CssClassModifier } from '../../../../common/css-class/css-class.modifier';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { CellEditorManager } from '../../../core/domain/edit/cell-editor.manager';
export declare class StructureRowComponent extends SmartComponent implements OnChanges, OnInit {
    private readonly changeDetectorRef;
    private readonly elRef;
    private readonly structureId;
    private readonly formationWarehouse;
    private readonly formationCommandDispatcher;
    private readonly cssClassModifier;
    entity: ItemEntity;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: CellEditorManager;
    searchPhrase: string;
    index: number;
    rowStyle: GuiRowStyle;
    rowClass: GuiRowClass;
    detailsEnabled: boolean;
    checkboxSelection: boolean;
    selectedItem: boolean;
    private row;
    private readonly styleModifier;
    private readonly classModifier;
    constructor(changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, structureId: StructureId, formationWarehouse: FormationWarehouse, formationCommandDispatcher: FormationCommandInvoker, cssClassModifier: CssClassModifier);
    ngOnChanges(changes: NgChanges<StructureRowComponent>): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    trackByFn(): number;
    selectRow(): void;
    checkSelectedItem(): void;
    protected getSelectorName(): string;
    private calculateRowStyle;
    private updateRowStyle;
    private removeRowStyles;
    private renderRowStyles;
    private updateRowClass;
    private calculateRowClass;
}
