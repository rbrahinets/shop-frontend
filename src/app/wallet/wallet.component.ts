import {Component, OnInit} from '@angular/core';
import {Wallet} from './shared/wallet.model';
import {WalletService} from './shared/wallet.service';
import {LoggedUserService} from "../users/shared/logged-user.service";

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
    this.walletService.getWallets().subscribe(
      (wallets) => {
        let walletId: number = 0;

        for (const wallet of wallets) {
          if (wallet.userId === LoggedUserService.getUserId()) {
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
