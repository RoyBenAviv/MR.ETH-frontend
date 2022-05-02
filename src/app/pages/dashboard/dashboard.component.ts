import { Component, OnInit } from '@angular/core';
import { EthereumService } from 'src/app/services/ethereum.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cryptoInfo: any
  ethBCData: any
  constructor(private ethereumService: EthereumService) { }

  ngOnInit(): void {
    this.getCryptoInformation()
    this.getETHBlockChainData()
  }

  getCryptoInformation(): void {
    this.ethereumService.getCryptoInformation().subscribe(information => {
      this.cryptoInfo = information
    })
  }

  getETHBlockChainData(): void {
    this.ethereumService.getETHBlockChainData().subscribe(data => {
      this.ethBCData = data[0]
    })
  }

}
