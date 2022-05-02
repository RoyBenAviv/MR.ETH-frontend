import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact
  @Output() transferCoins = new EventEmitter<number>()

  amount: number

  constructor() { }

  ngOnInit(): void {}

  onTransferCoins(): void {
    this.transferCoins.emit(this.amount)
  }

}
