import {Component, OnInit} from '@angular/core';
import {Wallet} from './shared/wallet.model';
import {WalletService} from './shared/wallet.service';

@Component({
  selector: 'shop-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet = new Wallet();
  isConnectedToWallet: boolean;

  constructor(
    private walletService: WalletService
  ) {
    this.isConnectedToWallet = WalletService.isConnectedToWallet();
  }

  ngOnInit(): void {
    this.connectToWallet();
  }

  onConnectToWallet(): void {
    this.walletService.saveWalletForCurrentUser();
    this.connectToWallet();
  }

  private connectToWallet(): void {
    this.walletService.getWallets().subscribe(
      (wallets: Wallet[]) => {
        if (!WalletService.getWalletForCurrentUser(wallets)) {
          return;
        }

        this.wallet = WalletService.getWalletForCurrentUser(wallets);
        WalletService.setWalletId(String(this.wallet.id));
        this.isConnectedToWallet = WalletService.isConnectedToWallet();
      }
    );
  }
}
