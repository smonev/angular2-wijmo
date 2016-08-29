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
var common_1 = require('@angular/common');
// Tab component
var AppTab = (function () {
    function AppTab() {
    }
    // selects the specified pane
    AppTab.prototype.select = function (pane) {
        for (var _i = 0, _a = this.panes.toArray(); _i < _a.length; _i++) {
            var pane_1 = _a[_i];
            pane_1.selected = false;
        }
        pane.selected = true;
    };
    AppTab.prototype.ngAfterContentInit = function () {
        // selects first pane after load
        if (this.panes.length) {
            this.select(this.panes.first);
        }
    };
    __decorate([
        core_1.ContentChildren(core_1.forwardRef(function () { return AppTabPane; })), 
        __metadata('design:type', core_1.QueryList)
    ], AppTab.prototype, "panes", void 0);
    AppTab = __decorate([
        core_1.Component({
            selector: 'app-tab',
            template: "\n        <ul class=\"nav nav-tabs\"> \n            <li *ngFor=\"let pane of panes\" [ngClass]=\"{active:pane.selected}\"> \n                <a [href]=\"''\" (click)=\"select(pane)\" onclick=\"return false;\">{{pane.title}}</a>\n            </li> \n        </ul> \n        <div class=\"tab-content\"><ng-content></ng-content></div> \n    ",
            directives: [common_1.CORE_DIRECTIVES, core_1.forwardRef(function () { return AppTabPane; })],
            host: { '[class.tabbable]': 'true' }
        }), 
        __metadata('design:paramtypes', [])
    ], AppTab);
    return AppTab;
}());
exports.AppTab = AppTab;
// Tab Pane component
var AppTabPane = (function () {
    function AppTabPane() {
        this.title = '';
        this.selected = false;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppTabPane.prototype, "title", void 0);
    __decorate([
        core_1.HostBinding('class.active'), 
        __metadata('design:type', Object)
    ], AppTabPane.prototype, "selected", void 0);
    AppTabPane = __decorate([
        core_1.Component({
            selector: 'app-tab-pane',
            template: "<ng-content></ng-content>",
            directives: [common_1.CORE_DIRECTIVES],
            host: { '[class.tab-pane]': 'true' }
        }), 
        __metadata('design:paramtypes', [])
    ], AppTabPane);
    return AppTabPane;
}());
exports.AppTabPane = AppTabPane;
//# sourceMappingURL=AppTab.js.map