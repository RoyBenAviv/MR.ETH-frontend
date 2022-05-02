import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { EthereumService } from 'src/app/services/ethereum.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact
  @Output() transferCoins = new EventEmitter<number>()

  amount: number
  ethMP: number

  constructor(private ethereumService: EthereumService) { }

  ngOnInit(): void {
    this.getRates();
  }
  onTransferCoins() {
    this.transferCoins.emit(this.amount)
  }
  getRates(): void {
    this.ethereumService.getRates().subscribe((coins) => {
      this.ethMP = coins.ETH.USD * this.amount
    })
  }
  

}
