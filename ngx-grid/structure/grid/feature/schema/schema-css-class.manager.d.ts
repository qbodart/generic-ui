import { ElementRef } from '@angular/core';
import { SchemaWarehouse } from '../../../../schema/core/api/schema.warehouse';
import { SchemaReadModelRootId } from '../../../../schema/core/api/schema.read-model-root-id';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class SchemaCssClassManager extends Reactive {
    private readonly schemaReadModelRepository;
    private static readonly VERTICAL_GRID_CLASS_NAME;
    private static readonly HORIZONTAL_GRID_CLASS_NAME;
    private static readonly THEME_FABRIC_CLASS_NAME;
    private static readonly THEME_MATERIAL_CLASS_NAME;
    private static readonly THEME_LIGHT_CLASS_NAME;
    private static readonly THEME_DARK_CLASS_NAME;
    private static readonly THEME_GENERIC_CLASS_NAME;
    private static readonly ROW_COLORING_ODD;
    private static readonly ROW_COLORING_EVEN;
    private readonly classModifier;
    private cssClass;
    private cssHostRef;
    constructor(schemaReadModelRepository: SchemaWarehouse);
    init(elementRef: ElementRef, schemaReadModelRootId: SchemaReadModelRootId): void;
    private updateState;
    private renderCssClasses;
    private toggleCssClass;
    private removeThemeCssClasses;
    private resolveThemeClassName;
    private resolveRowColoringClassName;
    private removeRowColoringClasses;
    private addClass;
    private removeClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaCssClassManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaCssClassManager>;
}
//# sourceMappingURL=schema-css-class.manager.d.ts.map