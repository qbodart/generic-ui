/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregationCalculator } from '../aggregation.calculator';
import { NumberAggregatedValues } from './number-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { AggregationType } from '../../aggregation.type';
export class NumberAggregationCalculator extends AggregationCalculator {
    constructor() {
        super();
        this.sum = new Map();
        this.min = new Map();
        this.max = new Map();
        this.average = new Map();
        this.median = new Map();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.NUMBER;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
        /** @type {?} */
        const key = field.getKey();
        this.sum.set(key, 0);
        this.min.set(key, Number.MAX_SAFE_INTEGER);
        this.max.set(key, 0);
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
        /** @type {?} */
        const key = field.getKey();
        if (field.isAggregation(AggregationType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isAggregation(AggregationType.MEDIAN)) {
            this.median.set(key, field.getValue(items[Math.floor(items.length / 2)]));
        }
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
        /** @type {?} */
        const numberValue = +value;
        /** @type {?} */
        const key = field.getKey();
        /** @type {?} */
        const sumForField = this.sum.get(key);
        /** @type {?} */
        const minForField = this.min.get(key);
        /** @type {?} */
        const maxForField = this.max.get(key);
        if (field.isAggregation(AggregationType.SUM) || field.isAggregation(AggregationType.AVERAGE)) {
            this.sum.set(key, sumForField + numberValue);
        }
        if (field.isAggregation(AggregationType.MIN)) {
            if (minForField > numberValue) {
                this.min.set(key, numberValue);
            }
        }
        if (field.isAggregation(AggregationType.MAX)) {
            if (maxForField < numberValue) {
                this.max.set(key, numberValue);
            }
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        /** @type {?} */
        const key = field.getKey();
        /** @type {?} */
        const sum = field.isAggregation(AggregationType.SUM) ? this.sum.get(key) : undefined;
        /** @type {?} */
        const min = field.isAggregation(AggregationType.MIN) ? this.min.get(key) : undefined;
        /** @type {?} */
        const max = field.isAggregation(AggregationType.MAX) ? this.max.get(key) : undefined;
        /** @type {?} */
        const average = field.isAggregation(AggregationType.AVERAGE) ? this.average.get(key) : undefined;
        /** @type {?} */
        const median = field.isAggregation(AggregationType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberAggregatedValues(sum, min, max, average, median);
    }
}
NumberAggregationCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NumberAggregationCalculator.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.sum;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.min;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.max;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.average;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.median;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWFnZ3JlZ2F0aW9uLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItYWdncmVnYXRpb24uY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBS3pELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxxQkFBcUQ7SUFRckc7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQVBRLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNwQyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFJcEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFvQjs7Y0FFckIsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFFMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENB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QUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOztjQUM5RSxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOztjQUMxRixNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBRXhGLE9BQU8sSUFBSSxzQkFBc0IsQ0FDaEMsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsT0FBTyxFQUNQLE1BQU0sQ0FDTixDQUFDO0lBQ0gsQ0FBQzs7O1lBakZELFVBQVU7Ozs7Ozs7OztJQUdWLDBDQUFpRDs7Ozs7SUFDakQsMENBQWlEOzs7OztJQUNqRCwwQ0FBaUQ7Ozs7O0lBQ2pELDhDQUFxRDs7Ozs7SUFDckQsNkNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25DYWxjdWxhdG9yIH0gZnJvbSAnLi4vYWdncmVnYXRpb24uY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJBZ2dyZWdhdGVkVmFsdWVzIH0gZnJvbSAnLi9udW1iZXItYWdncmVnYXRlZC52YWx1ZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uVHlwZSB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOdW1iZXJBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgZXh0ZW5kcyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3I8bnVtYmVyLCBOdW1iZXJBZ2dyZWdhdGVkVmFsdWVzPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdW0gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1pbiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWF4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBhdmVyYWdlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtZWRpYW4gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLk5VTUJFUjtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkPG51bWJlcj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0dGhpcy5zdW0uc2V0KGtleSwgMCk7XG5cdFx0dGhpcy5taW4uc2V0KGtleSwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuXHRcdHRoaXMubWF4LnNldChrZXksIDApO1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQ8bnVtYmVyPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdGlmIChmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFKSkge1xuXHRcdFx0dGhpcy5hdmVyYWdlLnNldChrZXksIHRoaXMuc3VtLmdldChrZXkpIC8gaXRlbXMubGVuZ3RoKTtcblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUVESUFOKSkge1xuXHRcdFx0dGhpcy5tZWRpYW4uc2V0KGtleSwgZmllbGQuZ2V0VmFsdWUoaXRlbXNbTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKV0pKTtcblx0XHR9XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkPG51bWJlcj4sIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IG51bWJlclZhbHVlID0gK3ZhbHVlLFxuXHRcdFx0a2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHRzdW1Gb3JGaWVsZCA9IHRoaXMuc3VtLmdldChrZXkpLFxuXHRcdFx0bWluRm9yRmllbGQgPSB0aGlzLm1pbi5nZXQoa2V5KSxcblx0XHRcdG1heEZvckZpZWxkID0gdGhpcy5tYXguZ2V0KGtleSk7XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuU1VNKSB8fCBmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFKSkge1xuXHRcdFx0dGhpcy5zdW0uc2V0KGtleSwgc3VtRm9yRmllbGQgKyBudW1iZXJWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLk1JTikpIHtcblx0XHRcdGlmIChtaW5Gb3JGaWVsZCA+IG51bWJlclZhbHVlKSB7XG5cdFx0XHRcdHRoaXMubWluLnNldChrZXksIG51bWJlclZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNBZ2dyZWdhdGlvbihBZ2dyZWdhdGlvblR5cGUuTUFYKSkge1xuXHRcdFx0aWYgKG1heEZvckZpZWxkIDwgbnVtYmVyVmFsdWUpIHtcblx0XHRcdFx0dGhpcy5tYXguc2V0KGtleSwgbnVtYmVyVmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZDxudW1iZXI+KTogTnVtYmVyQWdncmVnYXRlZFZhbHVlcyB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHN1bSA9IGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLlNVTSkgPyB0aGlzLnN1bS5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdG1pbiA9IGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLk1JTikgPyB0aGlzLm1pbi5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdG1heCA9IGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLk1BWCkgPyB0aGlzLm1heC5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdGF2ZXJhZ2UgPSBmaWVsZC5pc0FnZ3JlZ2F0aW9uKEFnZ3JlZ2F0aW9uVHlwZS5BVkVSQUdFKSA/IHRoaXMuYXZlcmFnZS5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdG1lZGlhbiA9IGZpZWxkLmlzQWdncmVnYXRpb24oQWdncmVnYXRpb25UeXBlLk1FRElBTikgPyB0aGlzLm1lZGlhbi5nZXQoa2V5KSA6IHVuZGVmaW5lZDtcblxuXHRcdHJldHVybiBuZXcgTnVtYmVyQWdncmVnYXRlZFZhbHVlcyhcblx0XHRcdHN1bSxcblx0XHRcdG1pbixcblx0XHRcdG1heCxcblx0XHRcdGF2ZXJhZ2UsXG5cdFx0XHRtZWRpYW5cblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==