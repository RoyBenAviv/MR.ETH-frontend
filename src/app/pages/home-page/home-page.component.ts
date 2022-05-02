import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { EthereumService } from 'src/app/services/ethereum.service';
import { Coin } from 'src/app/models/coin.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService,private ethereumService: EthereumService) {}
  subscription: Subscription
  coins: Array<Coin>;
  user: User;
  width: string = '746px';
  height: string = '370px';

  ngOnInit(): void {
    this.getRates();
    this.subscription = this.userService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
}

  getMoves(): any[] {
    return this.user.moves.slice(0, 3);
  }

  getRates(): void {
    this.ethereumService.getRates().subscribe((coins) => {
      this.coins = [
        {
          price: coins.ETH.USD,
          symbol: 'eth' 
        },
        {
          price: coins.BTC.USD,
          symbol: 'btc'
        },
        {
          price: coins.SOL.USD,
          symbol: 'sol'
        },
        {
          price: coins.XRP.USD,
          symbol: 'xrp'
        },
        {
          price: coins.DOGE.USD,
          symbol: 'doge'
        },
        {
          price: coins.ADA.USD,
          symbol: 'ada'
        },
        {
          price: coins.BNB.USD,
          symbol: 'bnb'
        },
        {
          price: coins.SHIB.USD,
          symbol: 'shib'
        },


      ];
    });
  }
}
