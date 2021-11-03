import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import * as i0 from "@angular/core";
export class FabricInlineDialogModule {
}
FabricInlineDialogModule.ɵfac = function FabricInlineDialogModule_Factory(t) { return new (t || FabricInlineDialogModule)(); };
FabricInlineDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricInlineDialogModule });
FabricInlineDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FabricInlineDialogService,
        InlineDialogGeometryService
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricInlineDialogModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    FabricInlineDialogComponent
                ],
                providers: [
                    FabricInlineDialogService,
                    InlineDialogGeometryService
                ],
                entryComponents: [
                    FabricInlineDialogComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricInlineDialogModule, { declarations: [FabricInlineDialogComponent], imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQWtCdEYsTUFBTSxPQUFPLHdCQUF3Qjs7Z0dBQXhCLHdCQUF3QjswRUFBeEIsd0JBQXdCOytFQVJ6QjtRQUNWLHlCQUF5QjtRQUN6QiwyQkFBMkI7S0FDM0IsWUFUUTtZQUNSLFlBQVk7U0FDWjt1RkFZVyx3QkFBd0I7Y0FmcEMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYiwyQkFBMkI7aUJBQzNCO2dCQUNELFNBQVMsRUFBRTtvQkFDVix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtpQkFDM0I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQiwyQkFBMkI7aUJBQzNCO2FBQ0Q7O3dGQUNZLHdCQUF3QixtQkFWbkMsMkJBQTJCLGFBSDNCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UsXG5cdFx0SW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0lubGluZURpYWxvZ01vZHVsZSB7XG59XG4iXX0=