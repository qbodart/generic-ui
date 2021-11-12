import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Injector, ViewChild, ViewEncapsulation } from '@angular/core';
import { StructureCommandInvoker } from '../../../../../core/api/structure.command-invoker';
import { CellTemplateWithContext } from '../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../../../composition/core/api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './structure.column-menu-config.archive';
import { FilterWarehouse } from '../../../../../filter/core/api/filter.warehouse';
import { StructureId } from '../../../../../core/api/structure.id';
import { TranslationFacade } from '../../../../../../l10n/core/api/translation.facade';
import { hermesSwitchMap } from '@generic-ui/hermes';
import { CompositionId } from '../../../../../../composition/core/api/composition.id';
import { CompositionCommandInvoker } from '../../../../../../composition/core/api/composition.command-invoker';
import { StructureColumnConfigService } from '../structure.column-config.service';
export class StructureColumnConfigComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, structureCommandService, compositionReadModelService, filterWarehouse, translationFacade, structureColumnMenuConfigArchive, compositionId, compositionCommandInvoker, injector, column) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.filterWarehouse = filterWarehouse;
        this.translationFacade = translationFacade;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.compositionId = compositionId;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.injector = injector;
        this.column = column;
        this.uniqueValues = [];
        this.structureColumnConfigService = this.injector.get(StructureColumnConfigService);
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onUniqueValues(this.structureId), (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.column.getFieldId());
        });
        this.subscribe(this.structureColumnMenuConfigArchive
            .on()
            .pipe(hermesSwitchMap((config) => {
            this.config = config;
            return this.translationFacade.onTranslation();
        })), (translation) => {
            this.setTabTitles(translation);
            this.dropdownTextTranslation = translation.headerMenuMainTabColumnSort;
        });
    }
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
    hideColumn() {
        this.compositionCommandInvoker.disableColumn(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    moveLeft() {
        this.compositionCommandInvoker.moveLeft(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    moveRight() {
        this.compositionCommandInvoker.moveRight(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    highlightColumn() {
        this.compositionCommandInvoker.highlightColumn(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    }
    getSelectorName() {
        return 'gui-column-config';
    }
    setTabTitles(translation) {
        this.config.setMainMenu(translation.headerMenuMainTab);
        this.config.setFilterMenu(translation.headerMenuFilterTab);
        this.config.setColumnsMenu(translation.headerMenuColumnsTab);
    }
}
StructureColumnConfigComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-column-config]',
                template: "<div *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-tab\">\n\n\t<gui-tab [active]=\"config.getActiveMenu()\" [menu]=\"config.getMenus()\">\n\n\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getMainMenu()\" class=\"gui-tab-item-dropdown\">\n\n\t\t\t\t<div *ngIf=\"column.isSortEnabled()\" [column]=\"column\"\n\t\t\t\t\t [dropdownTextTranslation]=\"dropdownTextTranslation\"\n\t\t\t\t\t gui-structure-column-config-sort>\n\t\t\t\t</div>\n\n\t\t\t\t<div (columnHidden)=\"hideColumn()\"\n\t\t\t\t\t [column]=\"column\"\n\t\t\t\t\t gui-structure-column-config-column-hide>\n\t\t\t\t</div>\n\n\t\t\t\t<div (click)=\"highlightColumn()\"\n\t\t\t\t\t class=\"gui-header-menu-item\">\n\t\t\t\t\t{{'headerMenuMainTabHighlightColumn' | guiTranslate}}\n\t\t\t\t</div>\n\n\t\t\t\t<div (movedLeft)=\"moveLeft()\"\n\t\t\t\t\t (movedRight)=\"moveRight()\"\n\t\t\t\t\t [column]=\"column\"\n\t\t\t\t\t gui-structure-column-config-column-move>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>-->\n\n\t\t\t\t<div [fieldId]=\"column.getFieldId()\"\n\t\t\t\t\t gui-unique-value-list>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t<div gui-structure-menu-column-manager>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t</gui-tab>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureColumnConfigComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: StructureCommandInvoker },
    { type: CompositionWarehouse },
    { type: FilterWarehouse },
    { type: TranslationFacade },
    { type: StructureColumnMenuConfigArchive },
    { type: CompositionId },
    { type: CompositionCommandInvoker },
    { type: Injector },
    { type: CellTemplateWithContext, decorators: [{ type: Inject, args: ['column',] }] }
];
StructureColumnConfigComponent.propDecorators = {
    headerSortMenu: [{ type: ViewChild, args: ['headerSortMenu', { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUosT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDL0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRXBHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFdkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQVNsRixN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LENBQUM7SUFDM0MsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUVPLFlBQVksQ0FBQyxXQUF3QjtRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUFoR0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHdvREFBdUQ7Z0JBQ3ZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBekJpQyxpQkFBaUI7WUFBYSxVQUFVO1lBVWpFLFdBQVc7WUFSWCx1QkFBdUI7WUFHdkIsb0JBQW9CO1lBSXBCLGVBQWU7WUFHZixpQkFBaUI7WUFMakIsZ0NBQWdDO1lBUWhDLGFBQWE7WUFDYix5QkFBeUI7WUFoQmtELFFBQVE7WUFHbkYsdUJBQXVCLHVCQWlEM0IsTUFBTSxTQUFDLFFBQVE7Ozs2QkF4QmxCLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RvciwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktY29sdW1uLWNvbmZpZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnaGVhZGVyU29ydE1lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0aGVhZGVyU29ydE1lbnU6IEVsZW1lbnRSZWY7XG5cblx0Y29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdGhpZGVDb2x1bW5UaXRsZTogc3RyaW5nO1xuXG5cdGRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvbkZhY2FkZTogVHJhbnNsYXRpb25GYWNhZGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoJ2NvbHVtbicpIHB1YmxpYyByZWFkb25seSBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25VbmlxdWVWYWx1ZXModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQodW5pcXVlVmFsdWVzUmVhZE1vZGVsOiBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy51bmlxdWVWYWx1ZXMgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuZ2V0VmFsdWVzKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0XHQub24oKVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRoZXJtZXNTd2l0Y2hNYXAoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy50cmFuc2xhdGlvbkZhY2FkZS5vblRyYW5zbGF0aW9uKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy5zZXRUYWJUaXRsZXModHJhbnNsYXRpb24pO1xuXHRcdFx0XHR0aGlzLmRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0O1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG5cblx0aGlkZUNvbHVtbigpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuZGlzYWJsZUNvbHVtbih0aGlzLmNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0bW92ZUxlZnQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLm1vdmVMZWZ0KHRoaXMuY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0bW92ZVJpZ2h0KCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5tb3ZlUmlnaHQodGhpcy5jb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRoaWdobGlnaHRDb2x1bW4oKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLmhpZ2hsaWdodENvbHVtbih0aGlzLmNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jb2x1bW4tY29uZmlnJztcblx0fVxuXG5cdHByaXZhdGUgc2V0VGFiVGl0bGVzKHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuY29uZmlnLnNldE1haW5NZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVNYWluVGFiKTtcblx0XHR0aGlzLmNvbmZpZy5zZXRGaWx0ZXJNZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVGaWx0ZXJUYWIpO1xuXHRcdHRoaXMuY29uZmlnLnNldENvbHVtbnNNZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVDb2x1bW5zVGFiKTtcblx0fVxufVxuIl19