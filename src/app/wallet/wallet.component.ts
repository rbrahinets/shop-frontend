import {Component, OnInit} from '@angular/core';
import {Wallet} from './shared/wallet.model';
import {WalletService} from "./shared/wallet.service";
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'shop-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet = new Wallet();

  constructor(
    private walletService: WalletService
  ) {
  }

  ngOnInit(): void {
    const userId: number = Number(Cookie.get('userId'));

    this.walletService.getWallets().subscribe(
      (wallets) => {
        let walletId: number = 0;

        for (const wallet of wallets) {
          if (wallet.userId === userId) {
            walletId = wallet.id;
          }
        }

        this.walletService.getWallet(walletId).subscribe(
          (wallet) => {
            this.wallet = wallet;
          }
        );
      }
    );
  }
}
