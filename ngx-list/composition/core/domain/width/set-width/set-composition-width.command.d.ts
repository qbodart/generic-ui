import { StructureId } from '../../../../../structure/core/api/structure.id';
import { CompositionCommand } from '../../composition.command';
export declare class SetCompositionWidthCommand extends CompositionCommand {
    private readonly structureId;
    private readonly width;
    constructor(structureId: StructureId, width: number);
    getWidth(): number;
}
//# sourceMappingURL=set-composition-width.command.d.ts.map