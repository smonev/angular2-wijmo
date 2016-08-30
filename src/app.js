///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
var wjDetail = require('wijmo/wijmo.angular2.grid.detail');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        this.dataSvc = dataSvc;
        this.cvPaging = new wijmo.collections.CollectionView(this.dataSvc.getFirstData(100));
        this.cvPaging.pageSize = 10;
        this.loadData();
    }
    AppCmp.prototype.loadData = function () {
        var _this = this;
        setTimeout(function () {
            _this.cvPaging = new wijmo.collections.CollectionView(_this.dataSvc.getSecondData(100));
            _this.cvPaging.pageSize = 10;
        }, 3000);
    };
    AppCmp.prototype.ngAfterViewInit = function () {
        if (this.flex1) {
            this._initDetailProvider(this.flex1);
        }
    };
    AppCmp.prototype._initDetailProvider = function (grid) {
        var _this = this;
        var dp = new wijmo.grid.detail.FlexGridDetailProvider(this.flex1);
        dp.maxHeight = 250;
        // create and host detail cells
        dp.createDetailCell = function (row) {
            var cell = document.createElement('div');
            var detailGrid = new wijmo.grid.FlexGrid(cell);
            detailGrid.itemsSource = _this.getDetails(row.dataItem.id, 5);
            detailGrid.headersVisibility = wijmo.grid.HeadersVisibility.Column;
            return cell;
        };
        // remove details from items with odd CategoryID
        dp.rowHasDetail = function (row) {
            return row.dataItem.id % 3 == 0;
        };
    };
    AppCmp.prototype.getAmountColor = function (amount) {
        if (amount < 500)
            return 'darkred';
        if (amount < 2500)
            return 'black';
        return 'darkgreen';
    };
    AppCmp.prototype.getDetails = function (id, count) {
        var cities = 'New York,Los Angeles,Chicago,Houston,Philadelphia,Phoenix'.split(','), data = new wijmo.collections.ObservableArray();
        for (var i = 0; i < 5; i++) {
            data.push({
                id: i,
                city: cities[i % cities.length],
                population: Math.random() * 10000
            });
        }
        return data;
    };
    __decorate([
        core_1.ViewChild('flex1'), 
        __metadata('design:type', wijmo.grid.FlexGrid)
    ], AppCmp.prototype, "flex1", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES,
                wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, wjDetail.WjFlexGridDetail,
                wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjDetail.WjFlexGridDetail, wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn,
                wjNg2Grid.WjFlexGridCellTemplate, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)), 
        __metadata('design:paramtypes', [DataSvc_1.DataSvc])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(AppCmp, [
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map