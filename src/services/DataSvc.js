'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Common data service
var DataSvc = (function () {
    function DataSvc() {
    }
    DataSvc.prototype.getData = function (count) {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = new wijmo.collections.ObservableArray();
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                country: countries[i % countries.length],
                date: new Date(2014, i % 12, i % 28),
                amount: Math.random() * 10000,
                active: i % 4 == 0
            });
        }
        return data;
    };
    DataSvc.prototype.getFirstData = function (count) {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = new wijmo.collections.ObservableArray();
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                country: countries[i % countries.length],
                active: i % ((Math.random() * 10000) % 3) == 0
            });
        }
        return data;
    };
    DataSvc.prototype.getSecondData = function (count) {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = new wijmo.collections.ObservableArray();
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                country: countries[i % countries.length],
                date: new Date(2014, i % 12, i % 28),
                amount: Math.random() * 10000,
                active: i % 4 == 0
            });
        }
        return data;
    };
    DataSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map