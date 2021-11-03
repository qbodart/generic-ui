import { AfterViewInit, ChangeDetectorRef, ElementRef, QueryList, Renderer2 } from '@angular/core';
import { Direction } from '../../common/icons/arrow-icon/direction';
import { FabricReactive } from '../../common/fabric-reactive';
import { GuiTabItem } from './fabric-tab-item';
import * as i0 from "@angular/core";
export declare class FabricTabComponent extends FabricReactive implements AfterViewInit {
    private renderer;
    private changeDetectorRef;
    private platformId;
    tabRef: ElementRef;
    tabItemRef: ElementRef;
    tabMenuList: QueryList<ElementRef>;
    menu: Array<string | GuiTabItem>;
    active: string;
    scrollActive: boolean;
    Direction: typeof Direction;
    private listPosition;
    private menuListWidth;
    private readonly scrollAmount;
    private readonly ACTIVE_TAB_CLASS_NAME;
    constructor(renderer: Renderer2, changeDetectorRef: ChangeDetectorRef, platformId: any);
    ngAfterViewInit(): void;
    toggleTab(tab: string): void;
    isSvg(item: string | GuiTabItem): boolean;
    getTabName(item: string | GuiTabItem): string;
    scrollTabList(scrollRightClicked: boolean): void;
    private setActive;
    private removeActive;
    private addClass;
    private removeClass;
    private checkIfMenuFitsOnResize;
    private calculateMenuWidth;
    private showMenuArrows;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricTabComponent, "gui-tab", never, { "menu": "menu"; "active": "active"; "scrollActive": "scrollActive"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=tab.component.d.ts.map