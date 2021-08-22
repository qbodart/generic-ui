/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SetColumnsCommandHandler } from './column/set-columns/set-columns.command-handler';
import { compositionKey } from './composition.key';
import { SetCompositionWidthCommandHandler } from './width/set-width/set-composition-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from './width/resize-width/set-composition-resize-width.command-handler';
import { SetCompositionContainerWidthCommandHandler } from './width/set-container-width/set-composition-container-width.command-handler';
import { CompositionSetColumnEnabledCommandHandler } from './column/set-enabled/composition.set-column-enabled.command-handler';
import { CompositionChangeSortStatusCommandHandler } from './column/sort/composition-change-sort-status.command-handler';
import { CompositionMoveLeftColumnCommandHandler } from './column/move/left/composition.move-left-column.command-handler';
import { CompositionMoveRightColumnCommandHandler } from './column/move/right/composition.move-right-column.command-handler';
import { CompositionChangeSortStatusEventHandler } from './column/sort/composition-change-sort-status.event-handler';
import { inMemoryCompositionCommandProviders } from '../infrastructure/in-memory/in-memory.composition.providers';
import { CompositionDispatcher } from './composition.dispatcher';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { ColumnPresentationConverter } from './column/presentation/column.presentation.converter';
import { CompositionEventConverter } from './composition.event-converter';
import { ColumnFieldFactory } from './column/field/colum-field.factory';
import { CompositionGroupFactory } from './group/composition.group.factory';
import { SetGroupsCommandHandler } from './group/set-groups/set-groups.command-handler';
var CompositionDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionDomainModule, _super);
    function CompositionDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    CompositionDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(SetColumnsCommandHandler, compositionKey), HermesModule.registerCommandHandler(SetCompositionWidthCommandHandler, compositionKey), HermesModule.registerCommandHandler(SetCompositionResizeWidthCommandHandler, compositionKey), HermesModule.registerCommandHandler(SetCompositionContainerWidthCommandHandler, compositionKey), HermesModule.registerCommandHandler(CompositionSetColumnEnabledCommandHandler, compositionKey), HermesModule.registerCommandHandler(CompositionChangeSortStatusCommandHandler, compositionKey), HermesModule.registerCommandHandler(CompositionMoveLeftColumnCommandHandler, compositionKey), HermesModule.registerCommandHandler(CompositionMoveRightColumnCommandHandler, compositionKey), HermesModule.registerCommandHandler(SetGroupsCommandHandler, compositionKey));
    };
    /**
     * @return {?}
     */
    CompositionDomainModule.domainEventHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerMultiDomainEventHandler(CompositionChangeSortStatusEventHandler));
    };
    CompositionDomainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: tslib_1.__spread(inMemoryCompositionCommandProviders, [
                        CompositionDispatcher,
                        ColumnEntityFactory,
                        ColumnPresentationConverter,
                        CompositionEventConverter,
                        ColumnFieldFactory,
                        CompositionGroupFactory
                    ]),
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    CompositionDomainModule.ctorParameters = function () { return []; };
    return CompositionDomainModule;
}(DomainModule));
export { CompositionDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzVILE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pILE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzFILE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzdILE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3JILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXhGO0lBZ0I2QyxtREFBWTtJQUV4RDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLHVDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsY0FBYyxDQUFDLEVBQzdFLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxpQ0FBaUMsRUFBRSxjQUFjLENBQUMsRUFDdEYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHVDQUF1QyxFQUFFLGNBQWMsQ0FBQyxFQUM1RixZQUFZLENBQUMsc0JBQXNCLENBQUMsMENBQTBDLEVBQUUsY0FBYyxDQUFDLEVBQy9GLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx5Q0FBeUMsRUFBRSxjQUFjLENBQUMsRUFDOUYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHlDQUF5QyxFQUFFLGNBQWMsQ0FBQyxFQUM5RixZQUFZLENBQUMsc0JBQXNCLENBQUMsdUNBQXVDLEVBQUUsY0FBYyxDQUFDLEVBQzVGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx3Q0FBd0MsRUFBRSxjQUFjLENBQUMsRUFDN0YsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixFQUFFLGNBQWMsQ0FBQyxFQUM5RTtJQUNILENBQUM7Ozs7SUFFTSwyQ0FBbUI7OztJQUExQjtRQUNDLHdCQUNJLFlBQVksQ0FBQywrQkFBK0IsQ0FBQyx1Q0FBdUMsQ0FBQyxFQUN2RjtJQUNILENBQUM7O2dCQXhDRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxtQkFDTCxtQ0FBbUM7d0JBQ3RDLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQix1QkFBdUI7c0JBQ3ZCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7OztJQTJCRCw4QkFBQztDQUFBLEFBMUNELENBZ0I2QyxZQUFZLEdBMEJ4RDtTQTFCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0Q29sdW1uc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvc2V0LWNvbHVtbnMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IGNvbXBvc2l0aW9uS2V5IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5rZXknO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3dpZHRoL3Jlc2l6ZS13aWR0aC9zZXQtY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvc2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW92ZUxlZnRDb2x1bW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5tb3ZlLWxlZnQtY29sdW1uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb2x1bW4vbW92ZS9yaWdodC9jb21wb3NpdGlvbi5tb3ZlLXJpZ2h0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBpbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwRmFjdG9yeSB9IGZyb20gJy4vZ3JvdXAvY29tcG9zaXRpb24uZ3JvdXAuZmFjdG9yeSc7XG5pbXBvcnQgeyBTZXRHcm91cHNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vZ3JvdXAvc2V0LWdyb3Vwcy9zZXQtZ3JvdXBzLmNvbW1hbmQtaGFuZGxlcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uaW5NZW1vcnlDb21wb3NpdGlvbkNvbW1hbmRQcm92aWRlcnMsXG5cdFx0Q29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRcdENvbHVtbkVudGl0eUZhY3RvcnksXG5cdFx0Q29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyLFxuXHRcdENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIsXG5cdFx0Q29sdW1uRmllbGRGYWN0b3J5LFxuXHRcdENvbXBvc2l0aW9uR3JvdXBGYWN0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb2x1bW5zQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ29tcG9zaXRpb25Nb3ZlTGVmdENvbHVtbkNvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRHcm91cHNDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBkb21haW5FdmVudEhhbmRsZXJzKCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3Rlck11bHRpRG9tYWluRXZlbnRIYW5kbGVyKENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50SGFuZGxlcilcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==