import { Entity } from '@generic-ui/hermes';
import { ColumnId } from '../../api/column/column.id';
import { ColumnField } from './field/column-field';
import { ColumnConfig, HeaderTemplate } from '../../api/column/column.config';
import { ColumnAlign } from './column-align';
import { ViewEntity } from './view.entity';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
import { CellView } from './cell-view';
import { ColumnPresentation } from './presentation/column.presentation';
export declare abstract class AbstractColumnEntity extends Entity<ColumnId> {
    private columnField;
    private header?;
    private width?;
    protected align: ColumnAlign;
    private columnConfig;
    protected view: ViewEntity;
    protected presentation: ColumnPresentation;
    protected constructor(columnId: ColumnId, columnField: ColumnField, columnConfig: ColumnConfig, presentation: ColumnPresentation, header?: string | HeaderTemplate, align?: ColumnAlign, view?: ViewEntity, width?: number);
    getPresentation(): ColumnPresentation;
    getColumnConfig(): ColumnConfig;
    getField(): ColumnField;
    getHeader(): string | HeaderTemplate;
    getDataType(): DataType;
    getCellView(): CellView;
    getTemplateFunction(): any;
    getFormatterFunction(): any;
    setView(view: ViewEntity): void;
    setHeader(header: string | HeaderTemplate): void;
    getView(): ViewEntity;
    getAlign(): ColumnAlign;
    setWidth(width: number): void;
    getWidth(): number;
    isSortingEnabled(): boolean;
    isCellEditingEnabled(): boolean;
    private setInitialAlign;
}
//# sourceMappingURL=abstract-column.entity.d.ts.map