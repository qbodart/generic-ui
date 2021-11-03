import { ColumnFieldId } from '../../../../../../composition/core/domain/column/field/column-field.id';
export declare class StructureEditSourceItemParams {
    private readonly itemId;
    private readonly columnFieldId;
    private readonly value;
    constructor(itemId: string, columnFieldId: ColumnFieldId, // TODO Rethink
    value: any);
    getItemId(): string;
    getColumnFieldId(): ColumnFieldId;
    getValue(): any;
}
//# sourceMappingURL=structure.edit-source-item.params.d.ts.map