/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
var SetCompositionContainerWidthCommandHandler = /** @class */ (function () {
    function SetCompositionContainerWidthCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        this.compositionAggregateRepository = compositionAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
        this.compositionEventConverter = compositionEventConverter;
    }
    /**
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetCompositionContainerWidthCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.publishAggregateEvents((/** @type {?} */ (aggregate.getEvents())));
    };
    /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.handleAggregate = /**
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var width = command.getWidth();
        composition.setContainerWidth(width);
    };
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.publishAggregateEvents = /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    function (aggregateEvents) {
        /** @type {?} */
        var domainEvents = this.compositionEventConverter.convert(aggregateEvents);
        this.domainEventPublisher.publish(domainEvents);
    };
    SetCompositionContainerWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionContainerWidthCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return SetCompositionContainerWidthCommandHandler;
}());
export { SetCompositionContainerWidthCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetCompositionContainerWidthCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionEventConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Msb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUloRztJQUdDLG9EQUE2Qiw4QkFBOEQsRUFDOUUsb0JBQTBDLEVBQzVDLHlCQUFvRDtRQUZsQyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDO1FBQzlFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUMvRCxDQUFDOzs7O0lBRUQsK0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxtQ0FBbUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCx3RUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQStCLEVBQUUsT0FBNEM7UUFDaEcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG1CQUFBLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBeUIsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELG9FQUFlOzs7OztJQUFmLFVBQWdCLFdBQWlDLEVBQUUsT0FBNEM7O1lBRXhGLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBRWhDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFTywyRUFBc0I7Ozs7O0lBQTlCLFVBQStCLGVBQXNDOztZQUU5RCxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFFNUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkE1QkQsVUFBVTs7OztnQkFORiw4QkFBOEI7Z0JBRkUsb0JBQW9CO2dCQUdwRCx5QkFBeUI7O0lBbUNsQyxpREFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLDBDQUEwQzs7Ozs7O0lBRTFDLG9GQUErRTs7Ozs7SUFDeEYsMEVBQW9EOzs7OztJQUNwRCwrRUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBDb21tYW5kSGFuZGxlciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24tZXZlbnQuY29udmVydGVyJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcm90ZWN0ZWQgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXI6IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlLmdldEV2ZW50cygpIGFzIEFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pik7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgd2lkdGggPSBjb21tYW5kLmdldFdpZHRoKCk7XG5cblx0XHRjb21wb3NpdGlvbi5zZXRDb250YWluZXJXaWR0aCh3aWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRvbWFpbkV2ZW50cyA9IHRoaXMuY29tcG9zaXRpb25FdmVudENvbnZlcnRlci5jb252ZXJ0KGFnZ3JlZ2F0ZUV2ZW50cyk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnRzKTtcblx0fVxuXG59XG4iXX0=