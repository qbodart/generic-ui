import { OnChanges } from '@angular/core';
import { RowDetailConfig } from '../../../row-detail/row-detail.config';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { StructureRowDetailConfigArchive } from '../../../row-detail/structure.row-detail.config-archive';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureRowDetailGate extends Gate implements OnChanges {
    private readonly structureDetailViewConfigArchive;
    rowDetail: RowDetailConfig;
    constructor(structureDetailViewConfigArchive: StructureRowDetailConfigArchive);
    ngOnChanges(changes: NgChanges<StructureRowDetailGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowDetailGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureRowDetailGate, "gui-structure[rowDetail]", never, { "rowDetail": "rowDetail"; }, {}, never>;
}
//# sourceMappingURL=structure-row-detail.gate.d.ts.map