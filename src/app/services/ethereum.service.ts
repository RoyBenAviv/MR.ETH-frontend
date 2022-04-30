import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class EthereumService {
    constructor(private http: HttpClient) { }


    public getRates(): Observable<any> {
        return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,SOL,SHIB,DOGE,BNB,ADA,XRP&tsyms=USD')
        .pipe(
            map(res => res )
        )
    }
    public getMarketPrice() {
        return this.http.get<{Data: any}>('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=2000')
        .pipe(
            map(res => res.Data.Data)
        )
    }

    public getBTCMarketPrice() {
        return this.http.get<{Data: any}>('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=2000')
        .pipe(
            map(res => res.Data.Data)
        )
    }
    public getMarketCap() {
        return this.http.get('https://api.nomics.com/v1/currencies/ticker?key=8f30705ab9d2eadc7bdcffcafa40448c75acbcea&ids=ETH&convert=USD&platform-currency=ETH&per-page=1&page=1')
        .pipe(
            map(res => res[0].market_cap)
        )
    }


}