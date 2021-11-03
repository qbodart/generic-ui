import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { StructureCommandInvoker } from '../../../../../core/api/structure.command-invoker';
import { CellTemplateWithContext } from '../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../../../composition/core/api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './structure.column-menu-config.archive';
import { StructureColumnMenuConfig } from './structure.column-menu-config';
import { FilterWarehouse } from '../../../../../filter/core/api/filter.warehouse';
import { StructureId } from '../../../../../core/api/structure.id';
import { TranslationFacade } from '../../../../../../l10n/core/api/translation.facade';
import { CompositionId } from '../../../../../../composition/core/api/composition.id';
import { CompositionCommandInvoker } from '../../../../../../composition/core/api/composition.command-invoker';
import * as i0 from "@angular/core";
export declare class StructureColumnConfigComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureCommandService;
    private readonly compositionReadModelService;
    private readonly filterWarehouse;
    private readonly translationFacade;
    private readonly structureColumnMenuConfigArchive;
    private readonly compositionId;
    private readonly compositionCommandInvoker;
    private readonly injector;
    readonly column: CellTemplateWithContext;
    headerSortMenu: ElementRef;
    config: StructureColumnMenuConfig;
    uniqueValues: Array<any>;
    hideColumnTitle: string;
    dropdownTextTranslation: string;
    private readonly structureColumnConfigService;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, structureCommandService: StructureCommandInvoker, compositionReadModelService: CompositionWarehouse, filterWarehouse: FilterWarehouse, translationFacade: TranslationFacade, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, compositionId: CompositionId, compositionCommandInvoker: CompositionCommandInvoker, injector: Injector, column: CellTemplateWithContext);
    ngOnInit(): void;
    isEnabled(): boolean;
    hideColumn(): void;
    moveLeft(): void;
    moveRight(): void;
    highlightColumn(): void;
    private setTabTitles;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigComponent, "div[gui-column-config]", never, {}, {}, never, never>;
}
//# sourceMappingURL=structure.column-config.component.d.ts.map