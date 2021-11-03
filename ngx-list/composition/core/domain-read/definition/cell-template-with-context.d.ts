import { TemplateRef } from '@angular/core';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/field/core/domain/field/field.id';
import { SortOrder } from '../../domain/column/sort/sort-order';
import { ColumnAlign } from '../../domain/column/column-align';
import { ColumnDefinitionId } from '../../api/column/column-definition-id';
export declare class CellTemplateWithContext {
    viewTemplate: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    context: CellContext;
    width: number;
    private readonly fieldId;
    private readonly columnDefinitionId;
    private readonly sortStatus;
    private readonly enabled;
    private readonly sortable;
    private readonly align;
    constructor(viewTemplate: TemplateRef<any>, editTemplate: TemplateRef<any>, context: CellContext, width: number, fieldId: FieldId, columnDefinitionId: ColumnDefinitionId, sortStatus: SortOrder, enabled: boolean, sortable: boolean, align: ColumnAlign);
    getColumnDefinitionId(): ColumnDefinitionId;
    getFieldId(): FieldId;
    getSortStatus(): SortOrder;
    isSortEnabled(): boolean;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoSort(): boolean;
    isEnabled(): boolean;
    isAlignLeft(): boolean;
    isAlignCenter(): boolean;
    isAlignRight(): boolean;
}
//# sourceMappingURL=cell-template-with-context.d.ts.map