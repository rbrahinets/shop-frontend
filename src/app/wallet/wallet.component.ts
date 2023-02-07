import {Component, OnInit} from '@angular/core';
import {Wallet} from './shared/wallet.model';
import {WalletService} from './shared/wallet.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

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
    this.setWalletForUser();
  }

  private setWalletForUser(): void {
    this.walletService.getWallets().subscribe(
      (wallets: Wallet[]) => {
        this.walletService.getWallet(
          WalletComponent.getWalletIdForCurrentUser(wallets)
        ).subscribe(
          (wallet: Wallet) => this.wallet = wallet
        );
      }
    );
  }

  private static getWalletIdForCurrentUser(wallets: Wallet[]): number {
    for (const wallet of wallets) {
      if (wallet.userId === LoggedUserService.getUserId()) {
        return wallet.id;
      }
    }

    return 0;
  }
}
