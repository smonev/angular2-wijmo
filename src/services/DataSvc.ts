'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    getData(count: number): wijmo.collections.ObservableArray {
            var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
                data = new wijmo.collections.ObservableArray();
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
    }

    getFirstData(count: number): wijmo.collections.ObservableArray {
            var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
                data = new wijmo.collections.ObservableArray();
            for (var i = 0; i < count; i++) {
                data.push({
                    id: i,
                    country: countries[i % countries.length],
                    active: i % ((Math.random() * 10000) % 3) == 0
                });
            }
            return data;
    }

    getSecondData(count: number): wijmo.collections.ObservableArray {
            var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
                data = new wijmo.collections.ObservableArray();
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
    }

}
