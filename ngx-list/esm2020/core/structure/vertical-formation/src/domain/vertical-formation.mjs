var VerticalFormation_1;
import { __decorate } from "tslib";
import { DomainObject } from '@generic-ui/hermes';
import { VerticalRange } from './vertical-range';
import { VerticalFormationContainerHeight } from './container/vertical-formation.container-height';
import { ScrollBarPositionSetAggregateEvent } from '../core/scroll-bar/scroll-bar-position-set.aggregate-event';
let VerticalFormation = VerticalFormation_1 = class VerticalFormation {
    constructor(structureId, enabled = false, viewportHeight = 0, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        this.structureId = structureId;
        this.enabled = enabled;
        this.rowHeight = VerticalFormation_1.ROW_HEIGHT;
        this.hiddenItemsTop = VerticalFormation_1.HIDDEN_ITEMS_TOP;
        this.hiddenItemsBottom = VerticalFormation_1.HIDDEN_ITEMS_BOTTOM;
        this.container = new VerticalFormationContainerHeight();
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.container.setContainerHeight(viewportHeight);
        this.scrollPosition = scrollPosition;
        if (Number.isInteger(rowHeight)) {
            this.rowHeight = rowHeight;
        }
        if (Number.isInteger(hiddenItemsTop)) {
            this.hiddenItemsTop = hiddenItemsTop;
        }
        if (Number.isInteger(hiddenItemsBottom)) {
            this.hiddenItemsBottom = hiddenItemsBottom;
        }
        this.calculateRange();
    }
    isEnabled() {
        return this.enabled &&
            this.container.getHeight() > 0 &&
            this.sourceSize > 0;
    }
    getViewPortHeight() {
        return this.container.getVisibleContainerHeight();
    }
    getSourceHeight() {
        return this.container.getSourceHeight();
    }
    getRowHeight() {
        return this.rowHeight;
    }
    getRange() {
        return this.range;
    }
    getTopMargin() {
        return this.range.getStart() * this.rowHeight;
    }
    calculateRange() {
        if (this.calcFullHeight() <= this.container.getHeight()) {
            this.range = new VerticalRange(0, this.sourceSize, 0);
            return;
        }
        const itemsInViewport = Math.ceil(this.container.getHeight() / this.rowHeight), viewportPositionIndex = Math.floor(this.scrollPosition / this.rowHeight);
        let end = (viewportPositionIndex + itemsInViewport + this.hiddenItemsBottom);
        let topMargin = viewportPositionIndex;
        if (topMargin + itemsInViewport >= this.sourceSize) {
            topMargin = this.sourceSize - itemsInViewport;
        }
        let start = Math.max(viewportPositionIndex - this.hiddenItemsTop, 0);
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        // end - itemsInViewport;
        this.range = new VerticalRange(start, end, topMargin);
        return {
            start,
            end,
            topMargin
        };
    }
    setEnabled(enabled) {
        this.enabled = enabled;
        // TODO dispatch aggregate event
        if (this.enabled && !this.container.isContainerHeightProperForVirtualScroll()) {
            this.logger.warn('Height needs to be specified in order for virtual scroll to work.');
        }
        this.calculateRange();
    }
    setSourceSize(sourceSize = 0) {
        this.sourceSize = sourceSize;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    }
    setTopHiddenItemsCount(count) {
        this.hiddenItemsTop = count;
        this.calculateRange();
    }
    setBottomHiddenItemsCount(count) {
        this.hiddenItemsBottom = count;
        this.calculateRange();
    }
    setScrollPosition(scrollPosition) {
        this.scrollPosition = scrollPosition;
        this.calculateRange();
    }
    scrollToIndex(index) {
        if (index >= this.sourceSize) {
            index = this.sourceSize;
        }
        if (index < -1) {
            index = 0;
        }
        const position = index * this.rowHeight;
        return new ScrollBarPositionSetAggregateEvent(this.structureId, position);
    }
    setViewportHeight(height) {
        this.container.setContainerHeight(height);
        this.calculateRange();
    }
    setRowHeight(rowHeight) {
        this.rowHeight = rowHeight;
        this.container.setSourceSize(this.sourceSize * this.rowHeight);
        this.calculateRange();
    }
    setLogger(logger) {
        this.logger = logger;
    }
    // TODO REMOVE
    calcFullHeight() {
        return this.sourceSize * this.rowHeight;
    }
};
VerticalFormation.ROW_HEIGHT = 42;
VerticalFormation.HIDDEN_ITEMS_TOP = 5;
VerticalFormation.HIDDEN_ITEMS_BOTTOM = 2;
VerticalFormation = VerticalFormation_1 = __decorate([
    DomainObject
], VerticalFormation);
export { VerticalFormation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBS25HLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBSXpHLElBQU0saUJBQWlCLHlCQUF2QixNQUFNLGlCQUFpQjtJQXlCN0IsWUFBb0IsV0FBd0IsRUFDakMsVUFBbUIsS0FBSyxFQUNoQyxpQkFBeUIsQ0FBQyxFQUMxQixhQUFxQixDQUFDLEVBQ3RCLGlCQUF5QixDQUFDLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjtRQVBULGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBakIzQixjQUFTLEdBQVcsbUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBRWpELG1CQUFjLEdBQVcsbUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7UUFFNUQsc0JBQWlCLEdBQVcsbUJBQWlCLENBQUMsbUJBQW1CLENBQUM7UUFFbEUsY0FBUyxHQUFxQyxJQUFJLGdDQUFnQyxFQUFFLENBQUM7UUFrQjVGLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUks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Q0FBQyxTQUFTLENBQUM7UUFFeEMsT0FBTyxJQUFJLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUFpQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxjQUFjO0lBQ2QsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3pDLENBQUM7O0FBckxlLDRCQUFVLEdBQUcsRUFBRSxDQUFDO0FBRWhCLGtDQUFnQixHQUFHLENBQUMsQ0FBQztBQUVyQixxQ0FBbUIsR0FBRyxDQUFDLENBQUM7QUFONUIsaUJBQWlCO0lBRDdCLFlBQVk7R0FDQSxpQkFBaUIsQ0F5TDdCO1NBekxZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbk9iamVjdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFZlcnRpY2FsUmFuZ2UgfSBmcm9tICcuL3ZlcnRpY2FsLXJhbmdlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udGFpbmVySGVpZ2h0IH0gZnJvbSAnLi9jb250YWluZXIvdmVydGljYWwtZm9ybWF0aW9uLmNvbnRhaW5lci1oZWlnaHQnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9zcmMvY2RrL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjcm9sbEJhclBvc2l0aW9uU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5ARG9tYWluT2JqZWN0XG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb24ge1xuXG5cdHN0YXRpYyByZWFkb25seSBST1dfSEVJR0hUID0gNDI7XG5cblx0c3RhdGljIHJlYWRvbmx5IEhJRERFTl9JVEVNU19UT1AgPSA1O1xuXG5cdHN0YXRpYyByZWFkb25seSBISURERU5fSVRFTVNfQk9UVE9NID0gMjtcblxuXG5cdHByaXZhdGUgcm93SGVpZ2h0OiBudW1iZXIgPSBWZXJ0aWNhbEZvcm1hdGlvbi5ST1dfSEVJR0hUO1xuXG5cdHByaXZhdGUgaGlkZGVuSXRlbXNUb3A6IG51bWJlciA9IFZlcnRpY2FsRm9ybWF0aW9uLkhJRERFTl9JVEVNU19UT1A7XG5cblx0cHJpdmF0ZSBoaWRkZW5JdGVtc0JvdHRvbTogbnVtYmVyID0gVmVydGljYWxGb3JtYXRpb24uSElEREVOX0lURU1TX0JPVFRPTTtcblxuXHRwcml2YXRlIGNvbnRhaW5lcjogVmVydGljYWxGb3JtYXRpb25Db250YWluZXJIZWlnaHQgPSBuZXcgVmVydGljYWxGb3JtYXRpb25Db250YWluZXJIZWlnaHQoKTtcblxuXHRwcml2YXRlIHNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByYW5nZTogVmVydGljYWxSYW5nZTtcblxuXHRwcml2YXRlIHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0dmlld3BvcnRIZWlnaHQ6IG51bWJlciA9IDAsXG5cdFx0XHRcdHNvdXJjZVNpemU6IG51bWJlciA9IDAsXG5cdFx0XHRcdHNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSAwLFxuXHRcdFx0XHRyb3dIZWlnaHQ/OiBudW1iZXIsXG5cdFx0XHRcdGhpZGRlbkl0ZW1zVG9wPzogbnVtYmVyLFxuXHRcdFx0XHRoaWRkZW5JdGVtc0JvdHRvbT86IG51bWJlcikge1xuXHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodCk7XG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q29udGFpbmVySGVpZ2h0KHZpZXdwb3J0SGVpZ2h0KTtcblxuXHRcdHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKHJvd0hlaWdodCkpIHtcblx0XHRcdHRoaXMucm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xuXHRcdH1cblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhpZGRlbkl0ZW1zVG9wKSkge1xuXHRcdFx0dGhpcy5oaWRkZW5JdGVtc1RvcCA9IGhpZGRlbkl0ZW1zVG9wO1xuXHRcdH1cblxuXHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhpZGRlbkl0ZW1zQm90dG9tKSkge1xuXHRcdFx0dGhpcy5oaWRkZW5JdGVtc0JvdHRvbSA9IGhpZGRlbkl0ZW1zQm90dG9tO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICYmXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5nZXRIZWlnaHQoKSA+IDAgJiZcblx0XHRcdHRoaXMuc291cmNlU2l6ZSA+IDA7XG5cdH1cblxuXHRnZXRWaWV3UG9ydEhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRWaXNpYmxlQ29udGFpbmVySGVpZ2h0KCk7XG5cdH1cblxuXHRnZXRTb3VyY2VIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0U291cmNlSGVpZ2h0KCk7XG5cdH1cblxuXHRnZXRSb3dIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxuXHRnZXRSYW5nZSgpOiBWZXJ0aWNhbFJhbmdlIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5nZTtcblx0fVxuXG5cdGdldFRvcE1hcmdpbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJhbmdlLmdldFN0YXJ0KCkgKiB0aGlzLnJvd0hlaWdodDtcblx0fVxuXG5cdGNhbGN1bGF0ZVJhbmdlKCk6IGFueSB7XG5cblx0XHRpZiAodGhpcy5jYWxjRnVsbEhlaWdodCgpIDw9IHRoaXMuY29udGFpbmVyLmdldEhlaWdodCgpKSB7XG5cdFx0XHR0aGlzLnJhbmdlID0gbmV3IFZlcnRpY2FsUmFuZ2UoMCwgdGhpcy5zb3VyY2VTaXplLCAwKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpdGVtc0luVmlld3BvcnQgPSBNYXRoLmNlaWwodGhpcy5jb250YWluZXIuZ2V0SGVpZ2h0KCkgLyB0aGlzLnJvd0hlaWdodCksXG5cdFx0XHR2aWV3cG9ydFBvc2l0aW9uSW5kZXggPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsUG9zaXRpb24gLyB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHRsZXQgZW5kID0gKHZpZXdwb3J0UG9zaXRpb25JbmRleCArIGl0ZW1zSW5WaWV3cG9ydCArIHRoaXMuaGlkZGVuSXRlbXNCb3R0b20pO1xuXG5cdFx0bGV0IHRvcE1hcmdpbiA9IHZpZXdwb3J0UG9zaXRpb25JbmRleDtcblxuXHRcdGlmICh0b3BNYXJnaW4gKyBpdGVtc0luVmlld3BvcnQgPj0gdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHR0b3BNYXJnaW4gPSB0aGlzLnNvdXJjZVNpemUgLSBpdGVtc0luVmlld3BvcnQ7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gTWF0aC5tYXgodmlld3BvcnRQb3NpdGlvbkluZGV4IC0gdGhpcy5oaWRkZW5JdGVtc1RvcCwgMCk7XG5cblx0XHRpZiAoZW5kID4gdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRlbmQgPSB0aGlzLnNvdXJjZVNpemU7XG5cdFx0XHRzdGFydCA9IGVuZCAtIGl0ZW1zSW5WaWV3cG9ydDtcblx0XHR9XG5cblx0XHQvLyBlbmQgLSBpdGVtc0luVmlld3BvcnQ7XG5cblx0XHR0aGlzLnJhbmdlID0gbmV3IFZlcnRpY2FsUmFuZ2Uoc3RhcnQsIGVuZCwgdG9wTWFyZ2luKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGFydCxcblx0XHRcdGVuZCxcblx0XHRcdHRvcE1hcmdpblxuXHRcdH07XG5cdH1cblxuXHRzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXG5cdFx0Ly8gVE9ETyBkaXNwYXRjaCBhZ2dyZWdhdGUgZXZlbnRcblx0XHRpZiAodGhpcy5lbmFibGVkICYmICF0aGlzLmNvbnRhaW5lci5pc0NvbnRhaW5lckhlaWdodFByb3BlckZvclZpcnR1YWxTY3JvbGwoKSkge1xuXHRcdFx0dGhpcy5sb2dnZXIud2FybignSGVpZ2h0IG5lZWRzIHRvIGJlIHNwZWNpZmllZCBpbiBvcmRlciBmb3IgdmlydHVhbCBzY3JvbGwgdG8gd29yay4nKTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRTb3VyY2VTaXplKHNvdXJjZVNpemU6IG51bWJlciA9IDApOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXG5cdFx0dGhpcy5jb250YWluZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZVNpemUgKiB0aGlzLnJvd0hlaWdodCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRUb3BIaWRkZW5JdGVtc0NvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbkl0ZW1zVG9wID0gY291bnQ7XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2V0Qm90dG9tSGlkZGVuSXRlbXNDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5oaWRkZW5JdGVtc0JvdHRvbSA9IGNvdW50O1xuXHRcdHRoaXMuY2FsY3VsYXRlUmFuZ2UoKTtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG5cdFx0dGhpcy5jYWxjdWxhdGVSYW5nZSgpO1xuXHR9XG5cblx0c2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyKTogU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdFx0aWYgKGluZGV4ID49IHRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0aW5kZXggPSB0aGlzLnNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKGluZGV4IDwgLTEpIHtcblx0XHRcdGluZGV4ID0gMDtcblx0XHR9XG5cblx0XHRjb25zdCBwb3NpdGlvbiA9IGluZGV4ICogdGhpcy5yb3dIZWlnaHQ7XG5cblx0XHRyZXR1cm4gbmV3IFNjcm9sbEJhclBvc2l0aW9uU2V0QWdncmVnYXRlRXZlbnQodGhpcy5zdHJ1Y3R1cmVJZCwgcG9zaXRpb24pO1xuXHR9XG5cblx0c2V0Vmlld3BvcnRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDb250YWluZXJIZWlnaHQoaGVpZ2h0KTtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJvd0hlaWdodCA9IHJvd0hlaWdodDtcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0KTtcblx0XHR0aGlzLmNhbGN1bGF0ZVJhbmdlKCk7XG5cdH1cblxuXHRzZXRMb2dnZXIobG9nZ2VyOiBMb2dnZXIpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcblx0fVxuXG5cdC8vIFRPRE8gUkVNT1ZFXG5cdGNhbGNGdWxsSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZSAqIHRoaXMucm93SGVpZ2h0O1xuXHR9XG5cbn1cbiJdfQ==