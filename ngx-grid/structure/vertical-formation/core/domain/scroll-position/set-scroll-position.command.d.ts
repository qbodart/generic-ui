import { StructureId } from '../../../../core/domain/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetScrollPositionCommand extends StructureCommand {
    private readonly position;
    constructor(structureId: StructureId, position: number);
    getPosition(): number;
}
