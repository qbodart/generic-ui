import { QuickFiltersConfig } from '../../api/quick-filters.config';
import { StructureId } from '../../../../core/domain/structure.id';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetConfigQuickFilterCommand extends StructureCommand {
    private readonly quickFiltersConfig;
    constructor(structureId: StructureId, quickFiltersConfig: QuickFiltersConfig);
    getConfig(): QuickFiltersConfig;
}
