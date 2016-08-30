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

export class AppCmp implements AfterViewInit {
    protected dataSvc: DataSvc;
    cvPaging: wijmo.collections.CollectionView;
    @ViewChild('flex1') flex1: wijmo.grid.FlexGrid;

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

    ngAfterViewInit() {
        if (this.flex1) {
            this._initDetailProvider(this.flex1);
        }
    }

    private _initDetailProvider(grid: wijmo.grid.FlexGrid) {
        var dp = new wijmo.grid.detail.FlexGridDetailProvider(this.flex1);
        dp.maxHeight = 250;
        // create and host detail cells
        dp.createDetailCell = (row) => {
            var cell = document.createElement('div');
            var detailGrid = new wijmo.grid.FlexGrid(cell);
            detailGrid.itemsSource = this.getDetails(row.dataItem.id, 5);
            detailGrid.headersVisibility = wijmo.grid.HeadersVisibility.Column;
            return cell;
        }
        // remove details from items with odd CategoryID
        dp.rowHasDetail = function (row) {
            return row.dataItem.id % 3 == 0;
        }
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
                    population: Math.random() * 10000
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