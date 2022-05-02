import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    public getMarketPrice(): Observable<Array<any>> {
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
    public getCryptoInformation() {
        return this.http.get<{DISPLAY: any}>('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SOL,SHIB,DOGE,BNB,ADA,XRP&tsyms=USD')
        .pipe(
            map(res => res.DISPLAY)
        )
    }

    public getVolumeData(): Observable<Array<any>> {
        return this.http.get<{Data: Array<any>}>('https://min-api.cryptocompare.com/data/exchange/histoday?e=Coinbase&tsym=ETH&limit=120')
        .pipe(
            map(res => res.Data )
        )
    }

    public getETHBlockChainData() {
        return this.http.get<{Data: any}>('https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=ETH&limit=1&api_key=4e4ecb4f9c91a17549fcdc015f82f3386c3471605d91ef811a2e8ddb5f6d3cc4')
        .pipe(
            map(res => res.Data.Data)
        )
    }
}