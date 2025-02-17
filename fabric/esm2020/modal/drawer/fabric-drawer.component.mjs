import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-drawer.service";
import * as i2 from "../../themes/fabric-modal-theme.service";
import * as i3 from "../../common/icons/close-icon/fabric-close-icon.component";
export class FabricDrawerComponent extends FabricThemedComponent {
    constructor(componentFactoryResolver, changeDetectorRef, elRef, dialogService, themeModalService, renderer) {
        super(elRef, renderer, themeModalService);
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.elRef = elRef;
        this.dialogService = dialogService;
        this.width = '400px';
        this.closeOnClickOutside = false;
        this.visible = false;
        this.isFixed = false;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.createNestedComponent();
        timer(50)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.visible = true;
            this.changeDetectorRef.detectChanges();
        });
    }
    closeDrawer() {
        this.dialogService.close();
    }
    clickOutside(event) {
        if (this.closeOnClickOutside) {
            if (this.isContainerClicked(event)) {
                this.closeDrawer();
            }
        }
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    isContainerClicked(event) {
        const dialogContentRef = this.elRef.nativeElement.querySelector('.gui-drawer-content');
        if (dialogContentRef) {
            return !dialogContentRef.contains(event.target);
        }
        return false;
    }
    createNestedComponent() {
        if (this.container) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dialogNestedComponent);
            this.container.createComponent(componentFactory);
            this.changeDetectorRef.detectChanges();
        }
    }
}
FabricDrawerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDrawerComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.FabricDrawerService }, { token: i2.FabricModalThemeService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: FabricDrawerComponent, selector: "ng-component", viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }], usesInheritance: true, ngImport: i0, template: "<div (document:click)=\"clickOutside($event)\"\n\t [class.gui-drawer-fixed]=\"isFixed\"\n\t [class.gui-drawer-visible]=\"visible\"\n\t [style.max-width]=\"width\"\n\t class=\"gui-drawer-wrapper\">\n\t<div\n\t\tclass=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n", styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;width:auto;position:absolute;padding-left:50px;right:0;top:0;overflow:hidden;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;height:100%;position:relative;margin-left:auto;-ms-transform:translateX(100%);transform:translate(100%);transition:all .3s ease-in-out}.gui-drawer-wrapper.gui-drawer-visible .gui-drawer-content{-ms-transform:translateX(0);transform:translate(0);box-shadow:-6px 0 16px -8px #00000014,-9px 0 28px #0000000d,-12px 0 48px 16px #00000008}.gui-drawer-wrapper.gui-drawer-fixed{position:fixed;height:100vh}\n", ".gui-dark .gui-drawer-wrapper .gui-drawer-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"], dependencies: [{ kind: "component", type: i3.FabricCloseIconComponent, selector: "gui-close-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDrawerComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div (document:click)=\"clickOutside($event)\"\n\t [class.gui-drawer-fixed]=\"isFixed\"\n\t [class.gui-drawer-visible]=\"visible\"\n\t [style.max-width]=\"width\"\n\t class=\"gui-drawer-wrapper\">\n\t<div\n\t\tclass=\"gui-drawer-content\">\n\t\t<gui-close-icon (click)=\"closeDrawer()\"></gui-close-icon>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n", styles: [".gui-drawer-wrapper{display:-ms-flexbox;display:flex;font-family:Arial;height:100%;width:auto;position:absolute;padding-left:50px;right:0;top:0;overflow:hidden;z-index:1000}.gui-drawer-wrapper .gui-drawer-content{background-color:#fff;height:100%;position:relative;margin-left:auto;-ms-transform:translateX(100%);transform:translate(100%);transition:all .3s ease-in-out}.gui-drawer-wrapper.gui-drawer-visible .gui-drawer-content{-ms-transform:translateX(0);transform:translate(0);box-shadow:-6px 0 16px -8px #00000014,-9px 0 28px #0000000d,-12px 0 48px 16px #00000008}.gui-drawer-wrapper.gui-drawer-fixed{position:fixed;height:100vh}\n", ".gui-dark .gui-drawer-wrapper .gui-drawer-content{background:#424242;box-shadow:0 1px 2px #424242;color:#bdbdbd}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FabricDrawerService }, { type: i2.FabricModalThemeService }, { type: i0.Renderer2 }]; }, propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2RyYXdlci9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFFdkIsU0FBUyxFQUtULFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVczQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEscUJBQXFCO0lBZS9ELFlBQTZCLHdCQUFrRCxFQUMzRCxpQkFBb0MsRUFDcEMsS0FBaUIsRUFDakIsYUFBa0MsRUFDbkQsaUJBQTBDLEVBQzFDLFFBQW1CO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFOZCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQzNELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFidEQsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUV4Qix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFJckMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixZQUFPLEdBQVksS0FBSyxDQUFDO0lBU3pCLENBQUM7SUFFRCxlQUFlO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLEtBQUssQ0FBQyxFQUFFLENBQUM7YUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25CO1NBQ0Q7SUFDRixDQUFDO0lBRUQsYUFBYTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU8sa0JBQWtCLENBQUMsS0FBVTtRQUNwQyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXZGLElBQUksZ0JBQWdCLEVBQUU7WUFDckIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTyxxQkFBcUI7UUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBRTNHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQzs7a0hBdEVXLHFCQUFxQjtzR0FBckIscUJBQXFCLHVJQUVELGdCQUFnQixvREMvQmpELGtYQVdBOzJGRGtCYSxxQkFBcUI7a0JBVGpDLFNBQVM7c0NBTVEsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTt3UUFLNUIsU0FBUztzQkFEakIsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdEVsZW1lbnRSZWYsXG5cdFJlbmRlcmVyMixcblx0VHlwZSxcblx0Vmlld0NoaWxkLFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9mYWJyaWMubmVzdGVkLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRyYXdlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1RoZW1lZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtdGhlbWVkLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3RoZW1lcy9mYWJyaWMtbW9kYWwtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLWRyYXdlci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcmF3ZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNUaGVtZWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0cmVhZG9ubHkgY29udGFpbmVyPzogVmlld0NvbnRhaW5lclJlZjtcblxuXHR3aWR0aDogc3RyaW5nID0gJzQwMHB4JztcblxuXHRjbG9zZU9uQ2xpY2tPdXRzaWRlOiBib29sZWFuID0gZmFsc2U7XG5cblx0ZGlhbG9nTmVzdGVkQ29tcG9uZW50ITogVHlwZTxGYWJyaWNOZXN0ZWREaWFsb2dDb21wb25lbnQ+O1xuXG5cdHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRpc0ZpeGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nU2VydmljZTogRmFicmljRHJhd2VyU2VydmljZSxcblx0XHRcdFx0dGhlbWVNb2RhbFNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZU1vZGFsU2VydmljZSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHR0aGlzLmNyZWF0ZU5lc3RlZENvbXBvbmVudCgpO1xuXG5cdFx0dGltZXIoNTApXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbG9zZURyYXdlcigpOiB2b2lkIHtcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGNsaWNrT3V0c2lkZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNDb250YWluZXJDbGlja2VkKGV2ZW50KSkge1xuXHRcdFx0XHR0aGlzLmNsb3NlRHJhd2VyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgaXNDb250YWluZXJDbGlja2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcblx0XHRjb25zdCBkaWFsb2dDb250ZW50UmVmID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWktZHJhd2VyLWNvbnRlbnQnKTtcblxuXHRcdGlmIChkaWFsb2dDb250ZW50UmVmKSB7XG5cdFx0XHRyZXR1cm4gIWRpYWxvZ0NvbnRlbnRSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU5lc3RlZENvbXBvbmVudCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jb250YWluZXIpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmRpYWxvZ05lc3RlZENvbXBvbmVudCk7XG5cblx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG59XG4iLCI8ZGl2IChkb2N1bWVudDpjbGljayk9XCJjbGlja091dHNpZGUoJGV2ZW50KVwiXG5cdCBbY2xhc3MuZ3VpLWRyYXdlci1maXhlZF09XCJpc0ZpeGVkXCJcblx0IFtjbGFzcy5ndWktZHJhd2VyLXZpc2libGVdPVwidmlzaWJsZVwiXG5cdCBbc3R5bGUubWF4LXdpZHRoXT1cIndpZHRoXCJcblx0IGNsYXNzPVwiZ3VpLWRyYXdlci13cmFwcGVyXCI+XG5cdDxkaXZcblx0XHRjbGFzcz1cImd1aS1kcmF3ZXItY29udGVudFwiPlxuXHRcdDxndWktY2xvc2UtaWNvbiAoY2xpY2spPVwiY2xvc2VEcmF3ZXIoKVwiPjwvZ3VpLWNsb3NlLWljb24+XG5cdFx0PG5nLXRlbXBsYXRlICNjb250YWluZXI+PC9uZy10ZW1wbGF0ZT5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==