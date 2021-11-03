import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesCommandInvoker } from '../api/summaries.command-invoker';
import { SummariesConfig } from '../api/summaries-config';
import { StructureSummariesPanelConfigConverter } from './config/structure.summaries-panel.config-converter';
import { StructureSummariesConfigArchive } from './config/structure.summaries-config.archive';
import * as i0 from "@angular/core";
export declare class SummariesDomainCommandInvoker extends SummariesCommandInvoker {
    private readonly commandDispatcher;
    private readonly configConverter;
    private readonly structureSummariesConfigArchive;
    constructor(commandDispatcher: CommandDispatcher, configConverter: StructureSummariesPanelConfigConverter, structureSummariesConfigArchive: StructureSummariesConfigArchive);
    setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
    setConfig(config: SummariesConfig, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SummariesDomainCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SummariesDomainCommandInvoker>;
}
//# sourceMappingURL=summaries.domain-command-invoker.d.ts.map