import { StructureId } from '../../../../../core/api/structure.id';
import { StructureCommand } from '../../../../../core/domain/structure.command';
export declare class UnselectAllRowsCommand extends StructureCommand {
    constructor(structureId: StructureId);
}
