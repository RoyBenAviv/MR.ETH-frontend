import { Component, Input, OnInit } from '@angular/core';
import { EthereumService } from 'src/app/services/ethereum.service';
@Component({
  selector: 'mp-chart',
  templateUrl: './mp-chart.component.html',
  styleUrls: ['./mp-chart.component.scss']
})
export class MpChartComponent implements OnInit {

  ethMP: Array<object> = []

  constructor(private ethereumService: EthereumService) { }

  ngOnInit(): void {
    this.getMarketPrice()
  }
  @Input() cmp: string
  getMarketPrice() {
    this.ethereumService.getMarketPrice().subscribe(ethMP => {
      this.ethMP = ethMP.map(data => {
        return {
          time: new Date(data.time * 1000),
          open: data.open,
          high: data.high,
          low: data.low,
          close: data.close,
          // Adj Close: data.close,
          volume: data.volumefrom
        }
      })
    })
  }
};