/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SUMMARIES_CALCULATORS } from './calculation/summaries.calculators.token';
import { BooleanSummariesCalculator } from './calculation/boolean/boolean-summaries.calculator';
import { DateSummariesCalculator } from './calculation/date/date-summaries.calculator';
import { NumberSummariesCalculator } from './calculation/number/number-summaries.calculator';
import { StringSummariesCalculator } from './calculation/string/string-summaries.calculator';
import { UnknownSummariesCalculator } from './calculation/unknown/unknown-summaries.calculator';
import { SummariesManagerFactory } from './summaries.manager.factory';
/**
 * @param {?} clazz
 * @return {?}
 */
export function provideSummariesCalculator(clazz) {
    return {
        provide: SUMMARIES_CALCULATORS,
        useClass: clazz,
        multi: true
    };
}
/** @type {?} */
export const summariesProviders = [
    provideSummariesCalculator(BooleanSummariesCalculator),
    provideSummariesCalculator(DateSummariesCalculator),
    provideSummariesCalculator(NumberSummariesCalculator),
    provideSummariesCalculator(StringSummariesCalculator),
    provideSummariesCalculator(UnknownSummariesCalculator),
    SummariesManagerFactory
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFHdEUsTUFBTSxVQUFVLDBCQUEwQixDQUFDLEtBQWdCO0lBQzFELE9BQU87UUFDTixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsS0FBSyxFQUFFLElBQUk7S0FDWCxDQUFDO0FBQ0gsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sa0JBQWtCLEdBQUc7SUFDakMsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7SUFDdEQsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7SUFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7SUFDckQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7SUFDckQsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7SUFFdEQsdUJBQXVCO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNVTU1BUklFU19DQUxDVUxBVE9SUyB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3JzLnRva2VuJztcbmltcG9ydCB7IEJvb2xlYW5TdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgRGF0ZVN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2RhdGUvZGF0ZS1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBOdW1iZXJTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9udW1iZXIvbnVtYmVyLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN0cmluZ1N1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3N0cmluZy9zdHJpbmctc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgVW5rbm93blN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3Vua25vd24vdW5rbm93bi1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vc3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKGNsYXp6OiBUeXBlPGFueT4pOiBQcm92aWRlciB7XG5cdHJldHVybiB7XG5cdFx0cHJvdmlkZTogU1VNTUFSSUVTX0NBTENVTEFUT1JTLFxuXHRcdHVzZUNsYXNzOiBjbGF6eixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9O1xufVxuXG5leHBvcnQgY29uc3Qgc3VtbWFyaWVzUHJvdmlkZXJzID0gW1xuXHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihCb29sZWFuU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKERhdGVTdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoTnVtYmVyU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKFN0cmluZ1N1bW1hcmllc0NhbGN1bGF0b3IpLFxuXHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cblx0U3VtbWFyaWVzTWFuYWdlckZhY3Rvcnlcbl07XG4iXX0=