///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { AppTab, AppTabPane } from './components/AppTab';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, AppTab, AppTabPane,
        wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, 
        wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
})

export class AppCmp {
    protected dataSvc: DataSvc;
    cvPaging: wijmo.collections.CollectionView;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.cvPaging = new wijmo.collections.CollectionView(this.dataSvc.getFirstData(100));
        this.cvPaging.pageSize = 10;
        this.loadData();        
    }

    loadData () {
        setInterval(() => {
            this.cvPaging = new wijmo.collections.CollectionView(this.dataSvc.getSecondData(100));
            this.cvPaging.pageSize = 10;
        }, 3000);
    }

    getAmountColor(amount: number) {
        if (amount < 500) return 'darkred';
        if (amount < 2500) return 'black';
        return 'darkgreen';
    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);