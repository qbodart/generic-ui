import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { SummariesType } from '../../summaries.type';
import * as i0 from "@angular/core";
export class NumberSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
        this.sum = new Map();
        this.min = new Map();
        this.max = new Map();
        this.average = new Map();
        this.median = new Map();
    }
    forDataType(dataType) {
        return dataType === DataType.NUMBER;
    }
    prepare(field) {
        const key = field.getKey();
        this.sum.set(key, 0);
        this.min.set(key, Number.MAX_SAFE_INTEGER);
        this.max.set(key, 0);
    }
    postCalculate(field, items) {
        const key = field.getKey();
        if (field.isSummaries(SummariesType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isSummaries(SummariesType.MEDIAN)) {
            this.median.set(key, field.getValue(items[Math.floor(items.length / 2)]));
        }
    }
    aggregate(field, value) {
        const numberValue = +value, key = field.getKey(), sumForField = this.sum.get(key), minForField = this.min.get(key), maxForField = this.max.get(key);
        if (field.isSummaries(SummariesType.SUM) || field.isSummaries(SummariesType.AVERAGE)) {
            this.sum.set(key, sumForField + numberValue);
        }
        if (field.isSummaries(SummariesType.MIN)) {
            if (minForField > numberValue) {
                this.min.set(key, numberValue);
            }
        }
        if (field.isSummaries(SummariesType.MAX)) {
            if (maxForField < numberValue) {
                this.max.set(key, numberValue);
            }
        }
    }
    generateAggregatedValues(field) {
        const key = field.getKey(), sum = field.isSummaries(SummariesType.SUM) ? this.sum.get(key) : undefined, min = field.isSummaries(SummariesType.MIN) ? this.min.get(key) : undefined, max = field.isSummaries(SummariesType.MAX) ? this.max.get(key) : undefined, average = field.isSummaries(SummariesType.AVERAGE) ? this.average.get(key) : undefined, median = field.isSummaries(SummariesType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberSummarizedValues(sum, min, max, average, median);
    }
}
NumberSummariesCalculator.ɵfac = function NumberSummariesCalculator_Factory(t) { return new (t || NumberSummariesCalculator)(); };
NumberSummariesCalculator.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NumberSummariesCalculator, factory: NumberSummariesCalculator.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberSummariesCalculator, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU1yRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsbUJBQW1EO0lBUWpHO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFQUSxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDaEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ2hDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNoQyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBSXBELENBQUM7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVk7UUFFbkIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBWSxFQUFFLEtBQThCO1FBRXpELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUU7SUFDRixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVksRUFBRSxLQUFhO1FBRXBDLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxFQUN6QixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQy9CLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDL0IsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekMsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFO2dCQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDL0I7U0FDRDtRQUVELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekMsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFO2dCQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDL0I7U0FDRDtJQUVGLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFZO1FBRXBDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFDekIsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUMxRSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQzFFLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDMUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUN0RixNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFckYsT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxPQUFPLEVBQ1AsTUFBTSxDQUNOLENBQUM7SUFDSCxDQUFDOztrR0FoRlcseUJBQXlCOytFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FEckMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IE51bWJlclN1bW1hcml6ZWRWYWx1ZXMgfSBmcm9tICcuL251bWJlci1zdW1tYXJpemVkLnZhbHVlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE51bWJlclN1bW1hcmllc0NhbGN1bGF0b3IgZXh0ZW5kcyBTdW1tYXJpZXNDYWxjdWxhdG9yPG51bWJlciwgTnVtYmVyU3VtbWFyaXplZFZhbHVlcz4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3VtID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBtaW4gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IG1heCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgYXZlcmFnZSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgbWVkaWFuID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5OVU1CRVI7XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHR0aGlzLnN1bS5zZXQoa2V5LCAwKTtcblx0XHR0aGlzLm1pbi5zZXQoa2V5LCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG5cdFx0dGhpcy5tYXguc2V0KGtleSwgMCk7XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZCwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkFWRVJBR0UpKSB7XG5cdFx0XHR0aGlzLmF2ZXJhZ2Uuc2V0KGtleSwgdGhpcy5zdW0uZ2V0KGtleSkgLyBpdGVtcy5sZW5ndGgpO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1FRElBTikpIHtcblx0XHRcdHRoaXMubWVkaWFuLnNldChrZXksIGZpZWxkLmdldFZhbHVlKGl0ZW1zW01hdGguZmxvb3IoaXRlbXMubGVuZ3RoIC8gMildKSk7XG5cdFx0fVxuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgbnVtYmVyVmFsdWUgPSArdmFsdWUsXG5cdFx0XHRrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHN1bUZvckZpZWxkID0gdGhpcy5zdW0uZ2V0KGtleSksXG5cdFx0XHRtaW5Gb3JGaWVsZCA9IHRoaXMubWluLmdldChrZXkpLFxuXHRcdFx0bWF4Rm9yRmllbGQgPSB0aGlzLm1heC5nZXQoa2V5KTtcblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLlNVTSkgfHwgZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5BVkVSQUdFKSkge1xuXHRcdFx0dGhpcy5zdW0uc2V0KGtleSwgc3VtRm9yRmllbGQgKyBudW1iZXJWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUlOKSkge1xuXHRcdFx0aWYgKG1pbkZvckZpZWxkID4gbnVtYmVyVmFsdWUpIHtcblx0XHRcdFx0dGhpcy5taW4uc2V0KGtleSwgbnVtYmVyVmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1BWCkpIHtcblx0XHRcdGlmIChtYXhGb3JGaWVsZCA8IG51bWJlclZhbHVlKSB7XG5cdFx0XHRcdHRoaXMubWF4LnNldChrZXksIG51bWJlclZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBOdW1iZXJTdW1tYXJpemVkVmFsdWVzIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpLFxuXHRcdFx0c3VtID0gZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5TVU0pID8gdGhpcy5zdW0uZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtaW4gPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1JTikgPyB0aGlzLm1pbi5nZXQoa2V5KSA6IHVuZGVmaW5lZCxcblx0XHRcdG1heCA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuTUFYKSA/IHRoaXMubWF4LmdldChrZXkpIDogdW5kZWZpbmVkLFxuXHRcdFx0YXZlcmFnZSA9IGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQVZFUkFHRSkgPyB0aGlzLmF2ZXJhZ2UuZ2V0KGtleSkgOiB1bmRlZmluZWQsXG5cdFx0XHRtZWRpYW4gPSBmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLk1FRElBTikgPyB0aGlzLm1lZGlhbi5nZXQoa2V5KSA6IHVuZGVmaW5lZDtcblxuXHRcdHJldHVybiBuZXcgTnVtYmVyU3VtbWFyaXplZFZhbHVlcyhcblx0XHRcdHN1bSxcblx0XHRcdG1pbixcblx0XHRcdG1heCxcblx0XHRcdGF2ZXJhZ2UsXG5cdFx0XHRtZWRpYW5cblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==