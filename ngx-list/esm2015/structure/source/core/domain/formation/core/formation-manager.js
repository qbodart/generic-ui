/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RowSelectToggleType } from './row-select-toggle-type';
import { RowSelectionMode } from '../../../api/row-selection';
export class FormationManager {
    /**
     * @param {?} selectedRows
     */
    constructor(selectedRows) {
        this.enabled = true;
        this.mode = RowSelectionMode.SINGLE;
        this.selectedRows = selectedRows;
    }
    /**
     * @return {?}
     */
    isAllSelected() {
        return this.allSelected;
    }
    /**
     * @return {?}
     */
    isAllUnselected() {
        return this.allUnselected;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setSelection(enabled) {
        this.enabled = enabled;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this.mode = mode;
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        return Array.from(this.selectedRows);
    }
    /**
     * @param {?} allItemIds
     * @return {?}
     */
    selectAll(allItemIds) {
        this.selectedRows = new Set(allItemIds);
        this.allSelected = true;
        this.allUnselected = false;
    }
    /**
     * @return {?}
     */
    unselectAll() {
        this.selectedRows.clear();
        this.allSelected = false;
        this.allUnselected = true;
    }
    /**
     * @param {?} itemId
     * @param {?} type
     * @param {?} allItemIds
     * @return {?}
     */
    toggleRow(itemId, type, allItemIds) {
        if (!this.enabled) {
            return;
        }
        if (type === RowSelectToggleType.ADD && this.mode === RowSelectionMode.SINGLE) {
            type = RowSelectToggleType.NONE;
        }
        switch (type) {
            case RowSelectToggleType.NONE:
                if (this.selectedRows.has(itemId)) {
                    this.selectedRows.delete(itemId);
                }
                else {
                    this.selectedRows.clear();
                    this.selectedRows.add(itemId);
                }
                break;
            case RowSelectToggleType.ADD:
                if (this.selectedRows.has(itemId)) {
                    this.selectedRows.delete(itemId);
                }
                else {
                    this.selectedRows.add(itemId);
                }
                break;
            case RowSelectToggleType.RANGE:
                break;
        }
        this.calculateAllSelected(allItemIds);
        this.calculateAllUnselected();
    }
    /**
     * @param {?} allItemIds
     * @return {?}
     */
    calculateAllSelected(allItemIds) {
        if (allItemIds.length !== this.selectedRows.size) {
            this.allSelected = false;
        }
        else {
            /** @type {?} */
            let rows = Array.from(this.selectedRows);
            /** @type {?} */
            let equal = true;
            rows.sort();
            allItemIds.sort();
            for (let i = 0; i < rows.length; i += 1) {
                if (rows[i] !== allItemIds[i]) {
                    equal = false;
                    break;
                }
            }
            this.allSelected = equal;
        }
    }
    /**
     * @return {?}
     */
    calculateAllUnselected() {
        this.allUnselected = this.selectedRows.size === 0;
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    unselectRow(itemId) {
        if (this.selectedRows.has(itemId)) {
            this.selectedRows.delete(itemId);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.selectedRows;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    FormationManager.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL2NvcmUvZm9ybWF0aW9uLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFZNUIsWUFBWSxZQUF5QjtRQVY3QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFNBQUksR0FBcUIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBU3hELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQXNCO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxVQUF5QjtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxDQUFTLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxh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bUNBQWdDOzs7OztJQUVoQyxnQ0FBeUQ7Ozs7O0lBRXpELHdDQUFrQzs7Ozs7SUFFbEMsdUNBQTZCOzs7OztJQUU3Qix5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi8uLi9hcGkvcm93LXNlbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25NYW5hZ2VyIHtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgbW9kZTogUm93U2VsZWN0aW9uTW9kZSA9IFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFO1xuXG5cdHByaXZhdGUgc2VsZWN0ZWRSb3dzOiBTZXQ8c3RyaW5nPjtcblxuXHRwcml2YXRlIGFsbFNlbGVjdGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgYWxsVW5zZWxlY3RlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihzZWxlY3RlZFJvd3M6IFNldDxzdHJpbmc+KSB7XG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MgPSBzZWxlY3RlZFJvd3M7XG5cdH1cblxuXHRpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkO1xuXHR9XG5cblx0aXNBbGxVbnNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFVuc2VsZWN0ZWQ7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRNb2RlKG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpOiB2b2lkIHtcblx0XHR0aGlzLm1vZGUgPSBtb2RlO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRSb3dzKTtcblx0fVxuXG5cdHNlbGVjdEFsbChhbGxJdGVtSWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MgPSBuZXcgU2V0PHN0cmluZz4oYWxsSXRlbUlkcyk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IHRydWU7XG5cdFx0dGhpcy5hbGxVbnNlbGVjdGVkID0gZmFsc2U7XG5cdH1cblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmFsbFVuc2VsZWN0ZWQgPSB0cnVlO1xuXHR9XG5cblx0dG9nZ2xlUm93KGl0ZW1JZDogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlLCBhbGxJdGVtSWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlID09PSBSb3dTZWxlY3RUb2dnbGVUeXBlLkFERCAmJiB0aGlzLm1vZGUgPT09IFJvd1NlbGVjdGlvbk1vZGUuU0lOR0xFKSB7XG5cdFx0XHR0eXBlID0gUm93U2VsZWN0VG9nZ2xlVHlwZS5OT05FO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSBSb3dTZWxlY3RUb2dnbGVUeXBlLk5PTkU6XG5cblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmhhcyhpdGVtSWQpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuZGVsZXRlKGl0ZW1JZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5hZGQoaXRlbUlkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFJvd1NlbGVjdFRvZ2dsZVR5cGUuQUREOlxuXG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUm93cy5oYXMoaXRlbUlkKSkge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmRlbGV0ZShpdGVtSWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmFkZChpdGVtSWQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgUm93U2VsZWN0VG9nZ2xlVHlwZS5SQU5HRTpcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKGFsbEl0ZW1JZHMpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQWxsVW5zZWxlY3RlZCgpO1xuXHR9XG5cblx0Y2FsY3VsYXRlQWxsU2VsZWN0ZWQoYWxsSXRlbUlkczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXHRcdGlmIChhbGxJdGVtSWRzLmxlbmd0aCAhPT0gdGhpcy5zZWxlY3RlZFJvd3Muc2l6ZSkge1xuXHRcdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGxldCByb3dzID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkUm93cyksXG5cdFx0XHRcdGVxdWFsID0gdHJ1ZTtcblxuXHRcdFx0cm93cy5zb3J0KCk7XG5cdFx0XHRhbGxJdGVtSWRzLnNvcnQoKTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmIChyb3dzW2ldICE9PSBhbGxJdGVtSWRzW2ldKSB7XG5cdFx0XHRcdFx0ZXF1YWwgPSBmYWxzZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkID0gZXF1YWw7XG5cdFx0fVxuXHR9XG5cblx0Y2FsY3VsYXRlQWxsVW5zZWxlY3RlZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFsbFVuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkUm93cy5zaXplID09PSAwO1xuXHR9XG5cblx0dW5zZWxlY3RSb3coaXRlbUlkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZFJvd3MuaGFzKGl0ZW1JZCkpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmRlbGV0ZShpdGVtSWQpO1xuXHRcdH1cblx0fVxufVxuIl19