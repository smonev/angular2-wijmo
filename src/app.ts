///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode, ViewChild, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjDetail from 'wijmo/wijmo.angular2.grid.detail';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, 
        wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, wjDetail.WjFlexGridDetail, 
        wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjDetail.WjFlexGridDetail, wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn,
        wjNg2Grid.WjFlexGridCellTemplate, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
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
        setTimeout(() => {
            this.cvPaging = new wijmo.collections.CollectionView(this.dataSvc.getSecondData(100));
            this.cvPaging.pageSize = 10;
        }, 3000);
    }

    getAmountColor(amount: number) {
        if (amount < 500) return 'darkred';
        if (amount < 2500) return 'black';
        return 'darkgreen';
    }

    getDetails(id: number, count: number): wijmo.collections.ObservableArray {
            var cities = 'New York,Los Angeles,Chicago,Houston,Philadelphia,Phoenix'.split(','),
                data = new wijmo.collections.ObservableArray();
            for (var i = 0; i < 5; i++) {
                data.push({
                    id: i,
                    city: cities[i % cities.length],
                    // population: Math.random() * 10000,
                    population: 100 * i
                });
            }
            return data;
    }
   
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);