import { Component, OnInit } from '@angular/core';
import { EthereumService } from 'src/app/services/ethereum.service';

@Component({
  selector: 'compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.scss'],
})
export class CompareChartComponent implements OnInit {
  constructor(private ethereumService: EthereumService) {}

  data: Array<any> = [];
  ethMP: Array<object> = []
  btcMP: Array<object> = []

  ngOnInit(): void {
    this.getETHMarketPrice()
    this.getBTCMarketPrice()

  }

  getETHMarketPrice() {
    this.ethereumService.getMarketPrice().subscribe((ethMP) => {
      this.ethMP = ethMP.map((data) => {
        return {
          time: new Date(data.time * 1000),
          open: data.open,
          high: data.high,
          low: data.low,
          close: data.close,
          // Adj Close: data.close,
          volume: data.volumefrom,
        };
      });
    });
  }

  getBTCMarketPrice() {
    this.ethereumService.getBTCMarketPrice().subscribe((btcMP) => {
      this.btcMP = btcMP.map((data) => {
        return {
          time: new Date(data.time * 1000),
          open: data.open,
          high: data.high,
          low: data.low,
          close: data.close,
          // Adj Close: data.close,
          volume: data.volumefrom,
        };
      });
    });
  }
}
