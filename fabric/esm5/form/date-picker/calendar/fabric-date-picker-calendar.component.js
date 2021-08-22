/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FabricDatePickerService } from '../fabric-date-picker.service';
import { FabricDatePickerWeeks } from './weeks/fabric-date-picker.weeks';
import { FabricDatePickerYears } from './years/fabric-date-picker.years';
import { FabricReactive } from '../../../common/fabric-reactive';
import { FabricCalendarView } from '../models/fabric-calendar-view';
import { FabricDatePickerCalendarViewService } from './fabric-date-picker-calendar-view.service';
import { FabricDatePickerCalendarService } from './fabric-date-picker-calendar.service';
import { FabricDatePickerYearsService } from './years/fabric-date-picker-years.service';
import { FabricDatePickerCompositionService } from '../fabric-date-picker-composition.service';
import { FabricDatePickerComposition } from '../models/fabric-date-picker-composition';
var FabricDatePickerCalendarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricDatePickerCalendarComponent, _super);
    function FabricDatePickerCalendarComponent(datePickerService, datePickerFormatService, datePickerWeeks, datePickerYears, datePickerYearsService, calendarService, calendarViewService, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.datePickerService = datePickerService;
        _this.datePickerFormatService = datePickerFormatService;
        _this.datePickerWeeks = datePickerWeeks;
        _this.datePickerYears = datePickerYears;
        _this.datePickerYearsService = datePickerYearsService;
        _this.calendarService = calendarService;
        _this.calendarViewService = calendarViewService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.FabricDatePickerComposition = FabricDatePickerComposition;
        _this.FabricCalendarView = FabricCalendarView;
        _this.fabricCalendarView = FabricCalendarView.DAYS;
        return _this;
    }
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.datePickerFormatService
            .onComposition()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} datePickerComposition
         * @return {?}
         */
        function (datePickerComposition) {
            _this.datePickerComposition = datePickerComposition;
        }));
        this.calendarService
            .onActiveMonth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            _this.activeMonth = month;
            _this.calculateDatePickerData();
            _this.changeDetectorRef.detectChanges();
        }));
        this.calendarService
            .onActiveYear()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            _this.activeYear = year;
            _this.calculateDatePickerData();
            _this.changeDetectorRef.detectChanges();
        }));
        this.datePickerService
            .observeSelectedDate()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            _this.selectedDate = date;
            _this.activeYear = date.getFullYear();
            _this.activeMonth = date.getMonth();
        }));
        this.datePickerYearsService
            .onYears()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} years
         * @return {?}
         */
        function (years) {
            _this.years = years;
            _this.changeDetectorRef.detectChanges();
        }));
        this.calendarViewService
            .onActiveView()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} fabricCalendarView
         * @return {?}
         */
        function (fabricCalendarView) {
            _this.fabricCalendarView = fabricCalendarView;
            _this.changeDetectorRef.detectChanges();
        }));
        this.calculateDatePickerData();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.getCalendarView = /**
     * @return {?}
     */
    function () {
        if (event) {
            event.stopPropagation();
        }
        return this.fabricCalendarView;
    };
    /**
     * @param {?} activeComposition
     * @param {?} checkedComposition
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isVisible = /**
     * @param {?} activeComposition
     * @param {?} checkedComposition
     * @return {?}
     */
    function (activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    };
    /**
     * @private
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.calculateDatePickerData = /**
     * @private
     * @return {?}
     */
    function () {
        this.weeks = this.datePickerWeeks.getDaysInMonths(this.activeYear, this.activeMonth);
        this.years = this.datePickerYears.getYears(this.activeYear);
    };
    FabricDatePickerCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker-toggle',
                    template: "<ng-container *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.DATE_PICKER)\">\n\n\t<gui-date-picker-view-panel [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t[activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t[fabricCalendarView]=\"fabricCalendarView\"\n\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t[years]=\"years\">\n\t</gui-date-picker-view-panel>\n\n\t<ng-container [ngSwitch]=\"getCalendarView()\">\n\n\t\t<gui-date-picker-days-view *ngSwitchCase=\"FabricCalendarView.DAYS\"\n\t\t\t\t\t\t\t\t   [activeMonth]=\"activeMonth\"\n\t\t\t\t\t\t\t\t   [selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t   [weeks]=\"weeks\">\n\t\t</gui-date-picker-days-view>\n\n\t\t<gui-date-picker-months-view *ngSwitchCase=\"FabricCalendarView.MONTHS\"\n\t\t\t\t\t\t\t\t\t [activeYear]=\"activeYear\"\n\t\t\t\t\t\t\t\t\t [selectedDate]=\"selectedDate\">\n\t\t</gui-date-picker-months-view>\n\n\n\t\t<gui-date-picker-years-view *ngSwitchCase=\"FabricCalendarView.YEARS\"\n\t\t\t\t\t\t\t\t\t[selectedDate]=\"selectedDate\"\n\t\t\t\t\t\t\t\t\t[years]=\"years\">\n\t\t</gui-date-picker-years-view>\n\n\t</ng-container>\n\n</ng-container>\n\n<gui-time-picker *ngIf=\"isVisible(datePickerComposition, FabricDatePickerComposition.TIME_PICKER)\"\n\t\t\t\t [datePickerComposition]=\"datePickerComposition\"\n\t\t\t\t [selectedDate]=\"selectedDate\"></gui-time-picker>\n",
                    host: {
                        '[class.gui-date-picker-calendar]': 'true'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-box-border{box-sizing:border-box}.gui-bg-transparent{background-color:transparent}@use 'common/variables';.gui-border{border-width:1px}.gui-border-0{border-width:0}.gui-border-b{border-bottom-width:1px}.gui-border-t{border-top-width:1px}.gui-border-solid{border-style:solid}.gui-border-b-solid{border-bottom-style:solid}.gui-border-t-solid{border-top-style:solid}.gui-border-none{border-style:none}.gui-rounded{border-radius:4px}.gui-cursor-pointer{cursor:pointer}.gui-block{display:block}.gui-inline-block{display:inline-block}.gui-inline{display:inline}.gui-flex{display:-ms-flexbox;display:flex}.gui-hidden{display:none}.gui-display-grid{display:-ms-grid;display:grid}@use 'common/variables';.gui-flex-row{-ms-flex-direction:row;flex-direction:row}.gui-flex-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.gui-flex-col{-ms-flex-direction:column;flex-direction:column}.gui-flex-col-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.gui-justify-start{-ms-flex-pack:start;justify-content:flex-start}.gui-justify-end{-ms-flex-pack:end;justify-content:flex-end}.gui-justify-center{-ms-flex-pack:center;justify-content:center}.gui-justify-between{-ms-flex-pack:justify;justify-content:space-between}.gui-justify-around{-ms-flex-pack:distribute;justify-content:space-around}.gui-justify-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.gui-items-start{-ms-flex-align:start;align-items:flex-start}.gui-items-end{-ms-flex-align:end;align-items:flex-end}.gui-items-center{-ms-flex-align:center;align-items:center}.gui-items-between{-ms-flex-align:space-between;align-items:space-between}.gui-items-around{-ms-flex-align:space-around;align-items:space-around}.gui-items-evenly{-ms-flex-align:space-evenly;align-items:space-evenly}.gui-flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.gui-flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.gui-flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}@use 'common/variables';.gui-grid-cols-1{-ms-grid-columns:(minmax(0,1fr))[1];grid-template-columns:repeat(1,minmax(0,1fr))}.gui-grid-cols-2{-ms-grid-columns:(minmax(0,1fr))[2];grid-template-columns:repeat(2,minmax(0,1fr))}.gui-grid-cols-3{-ms-grid-columns:(minmax(0,1fr))[3];grid-template-columns:repeat(3,minmax(0,1fr))}.gui-grid-cols-4{-ms-grid-columns:(minmax(0,1fr))[4];grid-template-columns:repeat(4,minmax(0,1fr))}.gui-grid-cols-5{-ms-grid-columns:(minmax(0,1fr))[5];grid-template-columns:repeat(5,minmax(0,1fr))}.gui-grid-cols-6{-ms-grid-columns:(minmax(0,1fr))[6];grid-template-columns:repeat(6,minmax(0,1fr))}.gui-grid-cols-7{-ms-grid-columns:(minmax(0,1fr))[7];grid-template-columns:repeat(7,minmax(0,1fr))}.gui-grid-cols-8{-ms-grid-columns:(minmax(0,1fr))[8];grid-template-columns:repeat(8,minmax(0,1fr))}.gui-grid-cols-9{-ms-grid-columns:(minmax(0,1fr))[9];grid-template-columns:repeat(9,minmax(0,1fr))}.gui-grid-rows-1{-ms-grid-rows:(minmax(0,1fr))[1];grid-template-rows:repeat(1,minmax(0,1fr))}.gui-grid-rows-2{-ms-grid-rows:(minmax(0,1fr))[2];grid-template-rows:repeat(2,minmax(0,1fr))}.gui-grid-rows-3{-ms-grid-rows:(minmax(0,1fr))[3];grid-template-rows:repeat(3,minmax(0,1fr))}.gui-grid-rows-4{-ms-grid-rows:(minmax(0,1fr))[4];grid-template-rows:repeat(4,minmax(0,1fr))}.gui-grid-rows-5{-ms-grid-rows:(minmax(0,1fr))[5];grid-template-rows:repeat(5,minmax(0,1fr))}.gui-grid-rows-6{-ms-grid-rows:(minmax(0,1fr))[6];grid-template-rows:repeat(6,minmax(0,1fr))}.gui-grid-rows-7{-ms-grid-rows:(minmax(0,1fr))[7];grid-template-rows:repeat(7,minmax(0,1fr))}.gui-grid-rows-8{-ms-grid-rows:(minmax(0,1fr))[8];grid-template-rows:repeat(8,minmax(0,1fr))}.gui-grid-rows-9{-ms-grid-rows:(minmax(0,1fr))[9];grid-template-rows:repeat(9,minmax(0,1fr))}.gui-grid-rows-gap-0{grid-row-gap:0}.gui-grid-rows-gap-1{grid-row-gap:1px}.gui-grid-rows-gap-2{grid-row-gap:2px}.gui-grid-rows-gap-3{grid-row-gap:3px}.gui-grid-rows-gap-4{grid-row-gap:4px}.gui-grid-rows-gap-5{grid-row-gap:6px}.gui-grid-rows-gap-6{grid-row-gap:8px}.gui-grid-rows-gap-7{grid-row-gap:10px}.gui-grid-rows-gap-8{grid-row-gap:12px}.gui-grid-rows-gap-23{grid-row-gap:42px}.gui-grid-cols-gap-0{grid-column-gap:0}.gui-grid-cols-gap-1{grid-column-gap:1px}.gui-grid-cols-gap-2{grid-column-gap:2px}.gui-grid-cols-gap-3{grid-column-gap:3px}.gui-grid-cols-gap-4{grid-column-gap:4px}.gui-grid-cols-gap-5{grid-column-gap:6px}.gui-grid-cols-gap-6{grid-column-gap:8px}.gui-grid-cols-gap-7{grid-column-gap:10px}.gui-grid-cols-gap-8{grid-column-gap:12px}.gui-grid-cols-gap-23{grid-column-gap:42px}.gui-h-full{height:100%}.gui-list-none{list-style-type:none}@use 'common/variables';.gui-m-0{margin:0}.gui-mx-0{margin-left:0;margin-right:0}.gui-my-0{margin-bottom:0;margin-top:0}.gui-m-1{margin:1px}.gui-mx-1{margin-left:1px;margin-right:1px}.gui-my-1{margin-bottom:1px;margin-top:1px}.gui-m-2{margin:2px}.gui-mx-2{margin-left:2px;margin-right:2px}.gui-my-2{margin-bottom:2px;margin-top:2px}.gui-m-3{margin:3px}.gui-mx-3{margin-left:3px;margin-right:3px}.gui-my-3{margin-bottom:3px;margin-top:3px}.gui-m-4{margin:4px}.gui-mx-4{margin-left:4px;margin-right:4px}.gui-my-4{margin-bottom:4px;margin-top:4px}.gui-m-5{margin:6px}.gui-mx-5{margin-left:6px;margin-right:6px}.gui-my-5{margin-bottom:6px;margin-top:6px}.gui-m-6{margin:8px}.gui-mx-6{margin-left:8px;margin-right:8px}.gui-my-6{margin-bottom:8px;margin-top:8px}.gui-m-7{margin:10px}.gui-mx-7{margin-left:10px;margin-right:10px}.gui-my-7{margin-bottom:10px;margin-top:10px}.gui-m-8{margin:12px}.gui-mx-8{margin-left:12px;margin-right:12px}.gui-my-8{margin-bottom:12px;margin-top:12px}.gui-m-23{margin:42px}.gui-mx-23{margin-left:42px;margin-right:42px}.gui-my-23{margin-bottom:42px;margin-top:42px}.gui-mb-4{margin-bottom:4px}.gui-mb-6{margin-bottom:8px}.gui-mb-8{margin-bottom:12px}.gui-mb-10{margin-bottom:16px}.gui-mb-18{margin-bottom:32px}.gui-mr-0{margin-right:0}.gui-mr-5{margin-right:6px}.gui-mr-auto{margin-right:auto}.gui-ml-auto{margin-left:auto}.gui-mt-4{margin-top:4px}.gui-mt-6{margin-top:8px}.gui-mt-10{margin-top:16px}.gui-mt-14{margin-top:24px}.gui-overflow-hidden{overflow:hidden}.gui-overflow-y-scroll{overflow-y:scroll}.gui-overflow-x-hidden{overflow-x:hidden}.gui-overflow-auto{overflow:auto}@use 'common/variables';.gui-p-0{padding:0}.gui-px-0{padding-left:0;padding-right:0}.gui-py-0{padding-bottom:0;padding-top:0}.gui-p-1{padding:1px}.gui-px-1{padding-left:1px;padding-right:1px}.gui-py-1{padding-bottom:1px;padding-top:1px}.gui-p-2{padding:2px}.gui-px-2{padding-left:2px;padding-right:2px}.gui-py-2{padding-bottom:2px;padding-top:2px}.gui-p-3{padding:3px}.gui-px-3{padding-left:3px;padding-right:3px}.gui-py-3{padding-bottom:3px;padding-top:3px}.gui-p-4{padding:4px}.gui-px-4{padding-left:4px;padding-right:4px}.gui-py-4{padding-bottom:4px;padding-top:4px}.gui-p-5{padding:6px}.gui-px-5{padding-left:6px;padding-right:6px}.gui-py-5{padding-bottom:6px;padding-top:6px}.gui-p-6{padding:8px}.gui-px-6{padding-left:8px;padding-right:8px}.gui-py-6{padding-bottom:8px;padding-top:8px}.gui-p-7{padding:10px}.gui-px-7{padding-left:10px;padding-right:10px}.gui-py-7{padding-bottom:10px;padding-top:10px}.gui-p-8{padding:12px}.gui-px-8{padding-left:12px;padding-right:12px}.gui-py-8{padding-bottom:12px;padding-top:12px}.gui-p-23{padding:42px}.gui-px-23{padding-left:42px;padding-right:42px}.gui-py-23{padding-bottom:42px;padding-top:42px}.gui-pr-10{padding-right:16px}.gui-pl-9{padding-right:10px}.gui-pb-6{padding-bottom:8px}.gui-pl-21{padding-left:38px}.gui-pt-4{padding-top:4px}.gui-pt-6{padding-top:8px}.gui-pt-10{padding-top:16px}.gui-pt-14{padding-top:24px}.gui-static{position:static}.gui-fixed{position:fixed}.gui-relative{position:relative}.gui-absolute{position:absolute}.gui-text-xxs{font-size:11px}.gui-text-xs{font-size:12px}.gui-text-sm{font-size:13px}.gui-text-base{font-size:14px}.gui-text-lg{font-size:16px}.gui-text-xl{font-size:18px}.gui-text-2xl{font-size:20px}.gui-text-3xl{font-size:22px}.gui-leading-4{line-height:16px}.gui-leading-6{line-height:24px}.gui-font-thin{font-weight:100}.gui-font-extralight{font-weight:200}.gui-font-light{font-weight:300}.gui-font-normal{font-weight:400}.gui-font-medium{font-weight:500}.gui-font-semibold{font-weight:600}.gui-font-bold{font-weight:700}.gui-font-extrabold{font-weight:800}.gui-font-black{font-weight:900}.gui-italic{font-style:italic}.gui-not-italic{font-style:normal}.gui-whitespace-nowrap{white-space:nowrap}.gui-overflow-ellipsis{text-overflow:ellipsis}.gui-no-underline{text-decoration:none}.gui-w-full{width:100%}.gui-w-96{width:384px}.gui-w-3\\/5{width:60%}.gui-date-picker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;font-family:Roboto,'Helvetica Neue',sans-serif;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 12px;width:268px}.gui-date-picker-header{font-size:13px;font-weight:400;text-align:center;border-top:1px solid #999}.gui-date-picker-cell{border-radius:4px;padding:2px 4px;position:relative;text-align:center;font-size:13px;z-index:0;border:1px solid transparent}.gui-date-picker-cell::before{border:1px solid #999;border-radius:50%;box-sizing:border-box;content:\"\";display:none;height:36px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:36px;z-index:-1}.gui-date-picker-cell::after{background:0 0;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:32px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:32px;z-index:-1}.gui-date-picker-cell:hover::after{background:#e6e6e6}.gui-date-picker-day{color:#333;cursor:pointer;opacity:.2}.gui-date-picker-day.gui-date-picker-selected-month{opacity:1}.gui-date-picker-month,.gui-date-picker-year{cursor:pointer}.gui-date-picker-year{font-size:13px}.gui-date-picker-day.gui-date-picker-current-day::before,.gui-date-picker-month.gui-date-picker-current-month::before,.gui-date-picker-year.gui-date-picker-current-year::before{display:block}.gui-date-picker-day.gui-date-picker-selected-day{pointer-events:none}.gui-date-picker-day.gui-date-picker-selected-day,.gui-date-picker-month.gui-date-picker-selected-month,.gui-date-picker-year.gui-date-picker-selected-year{color:#fff}.gui-date-picker-day.gui-date-picker-selected-day::after,.gui-date-picker-month.gui-date-picker-selected-month::after,.gui-date-picker-year.gui-date-picker-selected-year::after{background:#2185d0}.gui-date-picker-arrows{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:32px}.gui-date-picker-view-padding{padding:0 8px}.gui-date-picker-view-border-top{border-top:1px solid #999}gui-time-picker{border-top:1px solid #999;margin:6px 0 0;padding:12px 0 2.66667px}gui-time-picker form{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}gui-time-picker.only-time-picker{border-top:none}.gui-time-picker-button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-right:8px}.gui-time-picker-button-wrapper .gui-button{font-size:12px}.gui-time-picker-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 8px;position:relative}.gui-time-picker-item input{box-sizing:border-box;max-width:24px;text-align:center}.gui-time-picker-item input::-webkit-inner-spin-button,.gui-time-picker-item input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.gui-time-picker-item input[type=number]{-moz-appearance:textfield}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(1){margin-bottom:2px}.gui-time-picker-item .gui-date-picker-arrow:nth-of-type(2){margin-top:6px}.gui-date-picker-view-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:16px 18px}.gui-date-picker-view-panel .gui-date-picker-view-panel-date{cursor:pointer;font-size:14px;font-weight:700;margin:0;pointer-events:auto}.gui-date-picker-arrow{position:relative;z-index:0}.gui-date-picker-arrow:hover::after{background:#e6e6e6;border-radius:50%;box-sizing:border-box;content:\"\";display:block;height:24px;left:50%;position:absolute;top:50%;-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:24px;z-index:-1}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerCalendarComponent.ctorParameters = function () { return [
        { type: FabricDatePickerService },
        { type: FabricDatePickerCompositionService },
        { type: FabricDatePickerWeeks },
        { type: FabricDatePickerYears },
        { type: FabricDatePickerYearsService },
        { type: FabricDatePickerCalendarService },
        { type: FabricDatePickerCalendarViewService },
        { type: ChangeDetectorRef }
    ]; };
    return FabricDatePickerCalendarComponent;
}(FabricReactive));
export { FabricDatePickerCalendarComponent };
if (false) {
    /**
     * Cells representing days in weeks of the active month.
     * @type {?}
     */
    FabricDatePickerCalendarComponent.prototype.weeks;
    /**
     * Year cells displayed in years view.
     * @type {?}
     */
    FabricDatePickerCalendarComponent.prototype.years;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedDate;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.activeMonth;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.activeYear;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.datePickerComposition;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.FabricDatePickerComposition;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.FabricCalendarView;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.fabricCalendarView;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerFormatService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerWeeks;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerYears;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerYearsService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.calendarService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.calendarViewService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3ZGO0lBWXVELDZEQUFjO0lBc0JwRSwyQ0FBNkIsaUJBQTBDLEVBQ25ELHVCQUEyRCxFQUMzRCxlQUFzQyxFQUN0QyxlQUFzQyxFQUN0QyxzQkFBb0QsRUFDcEQsZUFBZ0QsRUFDaEQsbUJBQXdELEVBQ3hELGlCQUFvQztRQVB4RCxZQVFDLGlCQUFPLFNBQ1A7UUFUNEIsdUJBQWlCLEdB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QUEyRDs7Ozs7SUFDcEUsb0VBQTRFOzs7OztJQUM1RSw0REFBdUQ7Ozs7O0lBQ3ZELDREQUF1RDs7Ozs7SUFDdkQsbUVBQXFFOzs7OztJQUNyRSw0REFBaUU7Ozs7O0lBQ2pFLGdFQUF5RTs7Ozs7SUFDekUsOERBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcldlZWtzIH0gZnJvbSAnLi93ZWVrcy9mYWJyaWMtZGF0ZS1waWNrZXIud2Vla3MnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzIH0gZnJvbSAnLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMnO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZmFicmljLXJlYWN0aXZlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlIH0gZnJvbSAnLi95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLXRvZ2dsZScsXG5cdHRlbXBsYXRlVXJsOiAnZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktZGF0ZS1waWNrZXItY2FsZW5kYXJdJzogJ3RydWUnXG5cdH0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuXHQvKiogQ2VsbHMgcmVwcmVzZW50aW5nIGRheXMgaW4gd2Vla3Mgb2YgdGhlIGFjdGl2ZSBtb250aC4gKi9cblx0d2Vla3M6IEFycmF5PEFycmF5PERhdGU+PjtcblxuXHQvKiogWWVhciBjZWxscyBkaXNwbGF5ZWQgaW4geWVhcnMgdmlldy4gKi9cblx0eWVhcnM6IEFycmF5PEFycmF5PG51bWJlcj4+O1xuXG5cdHNlbGVjdGVkRGF0ZTogRGF0ZTtcblxuXHRhY3RpdmVNb250aDogbnVtYmVyO1xuXG5cdGFjdGl2ZVllYXI6IG51bWJlcjtcblxuXHRkYXRlUGlja2VyQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24gPSBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb247XG5cblx0RmFicmljQ2FsZW5kYXJWaWV3ID0gRmFicmljQ2FsZW5kYXJWaWV3O1xuXG5cdGZhYnJpY0NhbGVuZGFyVmlldzogRmFicmljQ2FsZW5kYXJWaWV3ID0gRmFicmljQ2FsZW5kYXJWaWV3LkRBWVM7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlckZvcm1hdFNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlcldlZWtzOiBGYWJyaWNEYXRlUGlja2VyV2Vla3MsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclllYXJzOiBGYWJyaWNEYXRlUGlja2VyWWVhcnMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0ZVBpY2tlclllYXJzU2VydmljZTogRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjYWxlbmRhclNlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJWaWV3U2VydmljZTogRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZGF0ZVBpY2tlckZvcm1hdFNlcnZpY2Vcblx0XHRcdC5vbkNvbXBvc2l0aW9uKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChkYXRlUGlja2VyQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiA9IGRhdGVQaWNrZXJDb21wb3NpdGlvbjtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxlbmRhclNlcnZpY2Vcblx0XHRcdC5vbkFjdGl2ZU1vbnRoKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChtb250aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlTW9udGggPSBtb250aDtcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVEYXRlUGlja2VyRGF0YSgpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxlbmRhclNlcnZpY2Vcblx0XHRcdC5vbkFjdGl2ZVllYXIoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHllYXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZVllYXIgPSB5ZWFyO1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlXG5cdFx0XHQub2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZGF0ZTogRGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XG5cdFx0XHRcdHRoaXMuYWN0aXZlWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0dGhpcy5hY3RpdmVNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5kYXRlUGlja2VyWWVhcnNTZXJ2aWNlXG5cdFx0XHQub25ZZWFycygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoeWVhcnM6IEFycmF5PEFycmF5PG51bWJlcj4+KSA9PiB7XG5cdFx0XHRcdHRoaXMueWVhcnMgPSB5ZWFycztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZVxuXHRcdFx0Lm9uQWN0aXZlVmlldygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoZmFicmljQ2FsZW5kYXJWaWV3OiBGYWJyaWNDYWxlbmRhclZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy5mYWJyaWNDYWxlbmRhclZpZXcgPSBmYWJyaWNDYWxlbmRhclZpZXc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk7XG5cdH1cblxuXHRnZXRDYWxlbmRhclZpZXcoKTogRmFicmljQ2FsZW5kYXJWaWV3IHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmZhYnJpY0NhbGVuZGFyVmlldztcblx0fVxuXG5cdGlzVmlzaWJsZShhY3RpdmVDb21wb3NpdGlvbjogRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLCBjaGVja2VkQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIShhY3RpdmVDb21wb3NpdGlvbiAmIGNoZWNrZWRDb21wb3NpdGlvbik7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZURhdGVQaWNrZXJEYXRhKCk6IHZvaWQge1xuXHRcdHRoaXMud2Vla3MgPSB0aGlzLmRhdGVQaWNrZXJXZWVrcy5nZXREYXlzSW5Nb250aHModGhpcy5hY3RpdmVZZWFyLCB0aGlzLmFjdGl2ZU1vbnRoKTtcblx0XHR0aGlzLnllYXJzID0gdGhpcy5kYXRlUGlja2VyWWVhcnMuZ2V0WWVhcnModGhpcy5hY3RpdmVZZWFyKTtcblx0fVxufVxuIl19