import { ElementRef, EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { PureComponent } from '../../../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
export declare class StructureColumnConfigColumnHideComponent extends PureComponent {
    column: CellTemplateWithContext;
    columnHidden: EventEmitter<void>;
    constructor(elRef: ElementRef);
    hideColumn(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigColumnHideComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigColumnHideComponent, "div[gui-structure-column-config-column-hide]", never, { "column": "column"; }, { "columnHidden": "columnHidden"; }, never, never>;
}
//# sourceMappingURL=structure.column-config-column-hide.component.d.ts.map