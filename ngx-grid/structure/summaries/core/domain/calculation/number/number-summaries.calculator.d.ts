import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/core/domain/field/field';
import * as i0 from "@angular/core";
export declare class NumberSummariesCalculator extends SummariesCalculator<number, NumberSummarizedValues> {
    private readonly sum;
    private readonly min;
    private readonly max;
    private readonly average;
    private readonly median;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: number): void;
    generateAggregatedValues(field: Field): NumberSummarizedValues;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberSummariesCalculator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NumberSummariesCalculator>;
}
//# sourceMappingURL=number-summaries.calculator.d.ts.map