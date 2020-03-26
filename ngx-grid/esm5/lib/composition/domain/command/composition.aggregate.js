/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Aggregate, AggregateId, RootAggregate } from '@generic-ui/hermes';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { CompositionContainerWidthCalculator } from './width/composition-container-width.calculator';
import { CompositionWidthSetAggregateEvent } from './width/set-width/composition-width-set.aggregate-event';
import { CompositionContainerWidthSetAggregateEvent } from './width/set-container-width/composition-container-width-set.aggregate-event';
import { CompositionResizeWidthSetAggregateEvent } from './width/resize-width/composition-resize-width-set.aggregate-event';
import { CompositionColumnSetEnabledAggregateEvent } from './column/set-enabled/composition.column-set-enabled.aggregate-event';
import { ActiveColumnContainer } from './column/active/active-column.container';
import { ActiveColumnEntityConverter } from './column/active/active-column.entity-converter';
import { CompositionColumnMovedLeftAggregateEvent } from './column/move/left/composition.column-moved-left.aggregate-event';
import { CompositionColumnMovedRightAggregateEvent } from './column/move/right/composition.column-moved-right.aggregate-event';
import { ColumnsSetAggregateEvent } from './column/set-columns/columns-set.aggregate-event';
var CompositionAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionAggregate, _super);
    function CompositionAggregate(id, columnFactory, columnsParams, width, resizeWidth) {
        if (columnsParams === void 0) { columnsParams = []; }
        var _this = _super.call(this, id, 'CompositionAggregate') || this;
        _this.allColumns = [];
        _this.resizeWidthEnabled = true;
        _this.activeColumnEntityConverter = new ActiveColumnEntityConverter();
        /** @type {?} */
        var columnConfigs = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        _this.baseParams = columnsParams;
        _this.baseColumns = columnConfigs;
        _this.columnFactory = columnFactory;
        _this.width = width;
        _this.allColumns = _this.columnFactory.create(columnsParams);
        /** @type {?} */
        var activeColumns = _this.activeColumnEntityConverter.convertMany(_this.getEnabledColumns());
        _this.activeColumnContainer = new ActiveColumnContainer(_this.getId(), activeColumns, width, columnConfigs);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            _this.resizeWidthEnabled = resizeWidth;
        }
        return _this;
    }
    // REMOVE
    // REMOVE
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getColumns = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.allColumns;
    };
    // REMOVE
    // REMOVE
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getActiveColumns = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.activeColumnContainer.getColumns();
    };
    // make private
    // make private
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getWidth = 
    // make private
    /**
     * @return {?}
     */
    function () {
        if (this.resizeWidthEnabled) {
            return this.containerInDOMWidth;
        }
        else {
            return this.width;
        }
    };
    // REMOVE
    // REMOVE
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.isResizeEnabled = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return this.resizeWidthEnabled;
    };
    // REMOVE
    // REMOVE
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.isReady = 
    // REMOVE
    /**
     * @return {?}
     */
    function () {
        return !!this.getWidth() && this.getActiveColumns().length > 0;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    CompositionAggregate.prototype.setColumns = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        this.allColumns = this.columnFactory.create(params);
        /** @type {?} */
        var columnConfigs = params.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        /** @type {?} */
        var activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, columnConfigs);
        this.addEvent(new ColumnsSetAggregateEvent(this.getId()));
    };
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    CompositionAggregate.prototype.setContainerWidth = /**
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        this.setContainerWidthWithEvent(containerWidth);
        this.recalculateColumns();
    };
    /**
     * @param {?} width
     * @return {?}
     */
    CompositionAggregate.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.setWidthWithEvent(width);
        this.setResizeWidthWithEvent(false);
        this.recalculateColumns();
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    CompositionAggregate.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.setResizeWidthWithEvent(enabled);
    };
    /**
     * @param {?} sortParams
     * @return {?}
     */
    CompositionAggregate.prototype.changeSort = /**
     * @param {?} sortParams
     * @return {?}
     */
    function (sortParams) {
        this.addEvent(this.activeColumnContainer.changeSort(sortParams));
    };
    // DELEGATE
    // DELEGATE
    /**
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    CompositionAggregate.prototype.enableColumn = 
    // DELEGATE
    /**
     * @param {?} columnId
     * @param {?} enabled
     * @return {?}
     */
    function (columnId, enabled) {
        /** @type {?} */
        var enabledIndex = -1;
        this.allColumns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            if (column.getColumnId().getId() === columnId.getId()) {
                /** @type {?} */
                var prevState = column.isEnabled();
                column.setEnabled(enabled);
                if (prevState !== enabled) {
                    enabledIndex = index;
                }
            }
        }));
        if (enabledIndex > 0) {
            if (enabled) {
                // convert
                /** @type {?} */
                var columnToAdd = this.activeColumnEntityConverter.convert(this.allColumns[enabledIndex]);
                this.activeColumnContainer.addColumn(columnToAdd, enabledIndex);
            }
            else {
                this.activeColumnContainer.removeColumn(enabledIndex);
            }
        }
        this.recalculateColumns();
        this.addEvent(new CompositionColumnSetEnabledAggregateEvent(this.getId(), this.getActiveColumns()));
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    CompositionAggregate.prototype.moveLeft = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        /** @type {?} */
        var columnIndex = this.findColumnIndex(columnId);
        /** @type {?} */
        var nextLeft;
        /** @type {?} */
        var nextLeftIndex = -1;
        for (var i = columnIndex - 1; i >= 0; i -= 1) {
            /** @type {?} */
            var leftColumn = this.allColumns[i];
            if (leftColumn.isEnabled()) {
                nextLeft = leftColumn;
                nextLeftIndex = i;
                break;
            }
        }
        if (nextLeft && nextLeftIndex >= 0 && columnIndex >= 0) {
            /** @type {?} */
            var column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextLeft;
            this.allColumns[nextLeftIndex] = column;
        }
        this.activeColumnContainer.moveLeft(columnId);
        this.addEvent(new CompositionColumnMovedLeftAggregateEvent(this.getId(), this.getActiveColumns()));
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    CompositionAggregate.prototype.moveRight = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        /** @type {?} */
        var columnIndex = this.findColumnIndex(columnId);
        /** @type {?} */
        var nextRight;
        /** @type {?} */
        var nextRightIndex = -1;
        for (var i = columnIndex + 1; i < this.allColumns.length; i += 1) {
            /** @type {?} */
            var rightColumn = this.allColumns[i];
            if (rightColumn.isEnabled()) {
                nextRight = rightColumn;
                nextRightIndex = i;
                break;
            }
        }
        if (nextRight && nextRightIndex >= 0 && columnIndex >= 0) {
            /** @type {?} */
            var column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextRight;
            this.allColumns[nextRightIndex] = column;
        }
        this.activeColumnContainer.moveRight(columnId);
        this.addEvent(new CompositionColumnMovedRightAggregateEvent(this.getId(), this.getActiveColumns()));
    };
    /**
     * @private
     * @return {?}
     */
    CompositionAggregate.prototype.recalculateColumns = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, activeColumns.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.getColumnConfig(); })));
    };
    // TODO Refactor
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    CompositionAggregate.prototype.setWidthWithEvent = 
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        /** @type {?} */
        var calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        /** @type {?} */
        var minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > width) {
            this.width = minWidth;
        }
        else {
            this.width = width;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionWidthSetAggregateEvent(this.getId()));
    };
    // TODO Refactor
    // TODO Refactor
    /**
     * @private
     * @param {?} containerWidth
     * @return {?}
     */
    CompositionAggregate.prototype.setContainerWidthWithEvent = 
    // TODO Refactor
    /**
     * @private
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        /** @type {?} */
        var calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        /** @type {?} */
        var minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > containerWidth) {
            this.containerInDOMWidth = minWidth;
        }
        else {
            this.containerInDOMWidth = containerWidth;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionContainerWidthSetAggregateEvent(this.getId(), containerWidth));
    };
    /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    CompositionAggregate.prototype.setResizeWidthWithEvent = /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.resizeWidthEnabled = enabled;
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    };
    // REMOVE -> move to allColumnsContainer
    // REMOVE -> move to allColumnsContainer
    /**
     * @private
     * @return {?}
     */
    CompositionAggregate.prototype.getEnabledColumns = 
    // REMOVE -> move to allColumnsContainer
    /**
     * @private
     * @return {?}
     */
    function () {
        return this.allColumns.filter((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.isEnabled(); }));
    };
    /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    CompositionAggregate.prototype.findColumnIndex = /**
     * @private
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        return this.allColumns.findIndex((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.getColumnId().equals(columnId); }));
    };
    /**
     * @private
     * @return {?}
     */
    CompositionAggregate.prototype.getMinColumnWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return this.activeColumnContainer.getMinColumnWidth();
    };
    CompositionAggregate.ctorParameters = function () { return [
        { type: AggregateId },
        { type: ColumnEntityFactory },
        { type: Array },
        { type: Number },
        { type: Boolean }
    ]; };
    CompositionAggregate = tslib_1.__decorate([
        RootAggregate,
        tslib_1.__metadata("design:paramtypes", [AggregateId,
            ColumnEntityFactory,
            Array, Number, Boolean])
    ], CompositionAggregate);
    return CompositionAggregate;
}(Aggregate));
export { CompositionAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.allColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.baseColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.baseParams;
    /**
     * Value taken from user config [width]
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.containerInDOMWidth;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.resizeWidthEnabled;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnFactory;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.activeColumnContainer;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.activeColumnEntityConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDNUcsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekksT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDaEksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0YsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDNUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDL0gsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0lBSWxELGdEQUFTO0lBdUJsRCw4QkFBWSxFQUFlLEVBQ3hCLGFBQWtDLEVBQ2xDLGFBQXVDLEVBQ3ZDLEtBQWMsRUFDZCxXQUFxQjtRQUZyQiw4QkFBQSxFQUFBLGtCQUF1QztRQUYxQyxZQUtDLGtCQUFNLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxTQXFCakM7UUEvQ08sZ0JB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QUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN2RCxDQUFDOztnQkF0UWUsV0FBVztnQkFDVCxtQkFBbUI7Z0JBQ25CLEtBQUs7Ozs7SUF6Qlgsb0JBQW9CO1FBRGhDLGFBQWE7aURBd0JHLFdBQVc7WUFDVCxtQkFBbUI7WUFDbkIsS0FBSztPQXpCWCxvQkFBb0IsQ0E4UmhDO0lBQUQsMkJBQUM7Q0FBQSxDQTlSeUMsU0FBUyxHQThSbEQ7U0E5Ulksb0JBQW9COzs7Ozs7SUFFaEMsMENBQTZDOzs7OztJQUU3QywyQ0FBa0Q7Ozs7O0lBRWxELDBDQUFpRDs7Ozs7O0lBS2pELHFDQUFzQjs7Ozs7SUFFdEIsbURBQW9DOzs7OztJQUVwQyxrREFBMkM7Ozs7O0lBRTNDLDZDQUFvRDs7Ozs7SUFFcEQscURBQThEOzs7OztJQUU5RCwyREFBOEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGUsIEFnZ3JlZ2F0ZUlkLCBSb290QWdncmVnYXRlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBDaGFuZ2VTb3J0UGFyYW1zIH0gZnJvbSAnLi9jb2x1bW4vc29ydC9jaGFuZ2Utc29ydC5wYXJhbXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL3dpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jYWxjdWxhdG9yJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL2NvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvcmVzaXplLXdpZHRoL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbHVtbklkIH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5Db250YWluZXIgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5jb250YWluZXInO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1ucy1zZXQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5AUm9vdEFnZ3JlZ2F0ZVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIGFsbENvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJhc2VDb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYmFzZVBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPjtcblxuXHQvKipcblx0ICogVmFsdWUgdGFrZW4gZnJvbSB1c2VyIGNvbmZpZyBbd2lkdGhdXG5cdCAqL1xuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBjb250YWluZXJJbkRPTVdpZHRoOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByZXNpemVXaWR0aEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmFjdG9yeTogQ29sdW1uRW50aXR5RmFjdG9yeTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUNvbHVtbkNvbnRhaW5lcjogQWN0aXZlQ29sdW1uQ29udGFpbmVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyOiBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIgPSBuZXcgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyKCk7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5LFxuXHRcdFx0XHRjb2x1bW5zUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+ID0gW10sXG5cdFx0XHRcdHdpZHRoPzogbnVtYmVyLFxuXHRcdFx0XHRyZXNpemVXaWR0aD86IGJvb2xlYW4pIHtcblx0XHRzdXBlcihpZCwgJ0NvbXBvc2l0aW9uQWdncmVnYXRlJyk7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gY29sdW1uc1BhcmFtcy5tYXAoKHBhcmFtKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHR0aGlzLmJhc2VQYXJhbXMgPSBjb2x1bW5zUGFyYW1zO1xuXHRcdHRoaXMuYmFzZUNvbHVtbnMgPSBjb2x1bW5Db25maWdzO1xuXG5cdFx0dGhpcy5jb2x1bW5GYWN0b3J5ID0gY29sdW1uRmFjdG9yeTtcblxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUoY29sdW1uc1BhcmFtcyk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyID0gbmV3IEFjdGl2ZUNvbHVtbkNvbnRhaW5lcih0aGlzLmdldElkKCksIGFjdGl2ZUNvbHVtbnMsIHdpZHRoLCBjb2x1bW5Db25maWdzKTtcblxuXHRcdGlmIChyZXNpemVXaWR0aCAhPT0gdW5kZWZpbmVkICYmIHJlc2l6ZVdpZHRoICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IHJlc2l6ZVdpZHRoO1xuXHRcdH1cblxuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucztcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5zKCk7XG5cdH1cblxuXHQvLyBtYWtlIHByaXZhdGVcblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblxuXHRcdGlmICh0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySW5ET01XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGlzUmVzaXplRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aEVuYWJsZWQ7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLmdldFdpZHRoKCkgJiYgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkubGVuZ3RoID4gMDtcblx0fVxuXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cblx0XHR0aGlzLmFsbENvbHVtbnMgPSB0aGlzLmNvbHVtbkZhY3RvcnkuY3JlYXRlKHBhcmFtcyk7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gcGFyYW1zLm1hcCgocGFyYW06IENvbHVtblBhcmFtcykgPT4gcGFyYW0uZ2V0Q29sdW1uKCkpO1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRDb2x1bW5zKGFjdGl2ZUNvbHVtbnMsIGNvbHVtbkNvbmZpZ3MpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuXHR9XG5cblx0c2V0Q29udGFpbmVyV2lkdGgoY29udGFpbmVyV2lkdGg6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0dGhpcy5zZXRDb250YWluZXJXaWR0aFdpdGhFdmVudChjb250YWluZXJXaWR0aCk7XG5cblx0XHR0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc2V0V2lkdGhXaXRoRXZlbnQod2lkdGgpO1xuXG5cdFx0dGhpcy5zZXRSZXNpemVXaWR0aFdpdGhFdmVudChmYWxzZSk7XG5cblx0XHR0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuXHR9XG5cblx0c2V0UmVzaXplV2lkdGgoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZW5hYmxlZCk7XG5cdH1cblxuXHRjaGFuZ2VTb3J0KHNvcnRQYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmNoYW5nZVNvcnQoc29ydFBhcmFtcylcblx0XHQpO1xuXHR9XG5cblx0Ly8gREVMRUdBVEVcblx0ZW5hYmxlQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0bGV0IGVuYWJsZWRJbmRleCA9IC0xO1xuXG5cdFx0dGhpcy5hbGxDb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRpZiAoY29sdW1uLmdldENvbHVtbklkKCkuZ2V0SWQoKSA9PT0gY29sdW1uSWQuZ2V0SWQoKSkge1xuXG5cdFx0XHRcdGNvbnN0IHByZXZTdGF0ZSA9IGNvbHVtbi5pc0VuYWJsZWQoKTtcblxuXHRcdFx0XHRjb2x1bW4uc2V0RW5hYmxlZChlbmFibGVkKTtcblxuXHRcdFx0XHRpZiAocHJldlN0YXRlICE9PSBlbmFibGVkKSB7XG5cdFx0XHRcdFx0ZW5hYmxlZEluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChlbmFibGVkSW5kZXggPiAwKSB7XG5cblx0XHRcdGlmIChlbmFibGVkKSB7XG5cblx0XHRcdFx0Ly8gY29udmVydFxuXHRcdFx0XHRjb25zdCBjb2x1bW5Ub0FkZCA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnQodGhpcy5hbGxDb2x1bW5zW2VuYWJsZWRJbmRleF0pO1xuXG5cdFx0XHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLmFkZENvbHVtbihjb2x1bW5Ub0FkZCwgZW5hYmxlZEluZGV4KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLnJlbW92ZUNvbHVtbihlbmFibGVkSW5kZXgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkpXG5cdFx0KTtcblx0fVxuXG5cdG1vdmVMZWZ0KGNvbHVtbklkOiBDb2x1bW5JZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChjb2x1bW5JZCk7XG5cblx0XHRsZXQgbmV4dExlZnQsXG5cdFx0XHRuZXh0TGVmdEluZGV4ID0gLTE7XG5cblx0XHRmb3IgKGxldCBpID0gY29sdW1uSW5kZXggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuXG5cdFx0XHRjb25zdCBsZWZ0Q29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAobGVmdENvbHVtbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRcdG5leHRMZWZ0ID0gbGVmdENvbHVtbjtcblx0XHRcdFx0bmV4dExlZnRJbmRleCA9IGk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChuZXh0TGVmdCAmJiBuZXh0TGVmdEluZGV4ID49IDAgJiYgY29sdW1uSW5kZXggPj0gMCkge1xuXG5cdFx0XHRsZXQgY29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XTtcblxuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XSA9IG5leHRMZWZ0O1xuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW25leHRMZWZ0SW5kZXhdID0gY29sdW1uO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLm1vdmVMZWZ0KGNvbHVtbklkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpKVxuXHRcdCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoY29sdW1uSWQ6IENvbHVtbklkKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb2x1bW5JbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGNvbHVtbklkKTtcblxuXHRcdGxldCBuZXh0UmlnaHQsXG5cdFx0XHRuZXh0UmlnaHRJbmRleCA9IC0xO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGNvbHVtbkluZGV4ICsgMTsgaSA8IHRoaXMuYWxsQ29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCByaWdodENvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tpXTtcblxuXHRcdFx0aWYgKHJpZ2h0Q29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdFx0bmV4dFJpZ2h0ID0gcmlnaHRDb2x1bW47XG5cdFx0XHRcdG5leHRSaWdodEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG5leHRSaWdodCAmJiBuZXh0UmlnaHRJbmRleCA+PSAwICYmIGNvbHVtbkluZGV4ID49IDApIHtcblxuXHRcdFx0bGV0IGNvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF07XG5cblx0XHRcdHRoaXMuYWxsQ29sdW1uc1tjb2x1bW5JbmRleF0gPSBuZXh0UmlnaHQ7XG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbbmV4dFJpZ2h0SW5kZXhdID0gY29sdW1uO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLm1vdmVSaWdodChjb2x1bW5JZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRSaWdodEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb2x1bW5zKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRDb2x1bW5zKGFjdGl2ZUNvbHVtbnMsIGFjdGl2ZUNvbHVtbnMubWFwKGMgPT4gYy5nZXRDb2x1bW5Db25maWcoKSkpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldFdpZHRoV2l0aEV2ZW50KHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5nZXRNaW5Db2x1bW5XaWR0aCgpKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5XaWR0aHMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiB3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFRPRE8gUmVmYWN0b3Jcblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aFdpdGhFdmVudChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuZ2V0TWluQ29sdW1uV2lkdGgoKSk7XG5cblx0XHRjb25zdCBtaW5XaWR0aCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1uV2lkdGhzKCkpO1xuXG5cdFx0aWYgKG1pbldpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcblx0XHRcdHRoaXMuY29udGFpbmVySW5ET01XaWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckluRE9NV2lkdGggPSBjb250YWluZXJXaWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29udGFpbmVyV2lkdGgpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMucmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFJFTU9WRSAtPiBtb3ZlIHRvIGFsbENvbHVtbnNDb250YWluZXJcblx0cHJpdmF0ZSBnZXRFbmFibGVkQ29sdW1ucygpOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmZpbHRlcihjID0+IGMuaXNFbmFibGVkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kQ29sdW1uSW5kZXgoY29sdW1uSWQ6IENvbHVtbklkKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmZpbmRJbmRleCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IGNvbHVtbi5nZXRDb2x1bW5JZCgpLmVxdWFscyhjb2x1bW5JZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRNaW5Db2x1bW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRNaW5Db2x1bW5XaWR0aCgpO1xuXHR9XG59XG4iXX0=