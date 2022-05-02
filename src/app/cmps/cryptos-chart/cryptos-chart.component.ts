import { Component, OnInit } from '@angular/core';
import { EthereumService } from 'src/app/services/ethereum.service';

@Component({
  selector: 'cryptos-chart',
  templateUrl: './cryptos-chart.component.html',
  styleUrls: ['./cryptos-chart.component.scss'],
})
export class CryptosChartComponent implements OnInit {
  cryptoInfo: Array<object>;
  cryptoChartInformation: Array<any> = [];
  symbols: Array<string> = [];

  constructor(private ethereumService: EthereumService) {}

  getCryptoInformation(): void {
    this.ethereumService.getCryptoInformation().subscribe((info) => {
      this.cryptoInfo = info;
      for (const currency in this.cryptoInfo) {
        const usd = this.cryptoInfo[currency];
        this.symbols.push(currency);
        for (const info in usd) {
          this.cryptoChartInformation.push(usd[info]);
        }
      }
      this.cryptoChartInformation = this.cryptoChartInformation.map(
        (info, idx) => {
          return {
            Value: +info.PRICE.slice(1).trim().replaceAll(',', ''),
            Label: this.symbols[idx],
          };
        }
      );
    });
  }

  ngOnInit(): void {
    this.getCryptoInformation();
  }
}
