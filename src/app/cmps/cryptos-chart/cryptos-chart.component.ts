import { Component, Input, OnInit } from '@angular/core';
import { EthereumService } from 'src/app/services/ethereum.service';

@Component({
  selector: 'cryptos-chart',
  templateUrl: './cryptos-chart.component.html',
  styleUrls: ['./cryptos-chart.component.scss'],
})
export class CryptosChartComponent implements OnInit {
  
  cryptoInfo: any;
  cryptoChartInformation: Array<any> = []
  symbols: Array<string> = []
  constructor(private ethereumService: EthereumService) {}
data = [
    { Value: 37, Label: "Cooling", Summary: "Cooling 37%" },
    { Value: 25, Label: "Residential", Summary: "Residential 25%"  },
    { Value: 12, Label: "Heating", Summary: "Heating 12%" },
    { Value: 11, Label: "Lighting", Summary: "Lighting 11%" },
    { Value: 18, Label: "Other", Summary: "Other 18%" }
];

  getCryptoInformation(): void {
    this.ethereumService.getCryptoInformation().subscribe(info => {
      this.cryptoInfo = info
          console.log('this.cryptoInfo',this.cryptoInfo);
    for (const currency in this.cryptoInfo) {
      const usd = this.cryptoInfo[currency]
      this.symbols.push(currency)
      for(const info in usd) {
          this.cryptoChartInformation.push(usd[info])
      }

    }
    console.log('this.cryptoChartInformation',this.cryptoChartInformation);
    this.cryptoChartInformation = this.cryptoChartInformation.map((info,idx) => {
      return {
        Value: +info.PRICE.slice(1).trim().replaceAll(',', ''),
        Label: this.symbols[idx],
      }
    })
    console.log('this.cryptoChartInformation',this.cryptoChartInformation);
  })
  }

  ngOnInit(): void {
    this.getCryptoInformation()


  }
}
