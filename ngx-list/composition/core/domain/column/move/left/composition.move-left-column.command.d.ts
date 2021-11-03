import { CompositionId } from '../../../../api/composition.id';
import { ColumnId } from '../../../../api/column/column.id';
import { CompositionCommand } from '../../../composition.command';
export declare class CompositionMoveLeftColumnCommand extends CompositionCommand {
    readonly compositionId: CompositionId;
    private readonly columnId;
    constructor(compositionId: CompositionId, columnId: ColumnId);
    getColumnId(): ColumnId;
}
//# sourceMappingURL=composition.move-left-column.command.d.ts.map