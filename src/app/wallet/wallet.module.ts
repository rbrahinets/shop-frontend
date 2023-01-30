import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './wallet.component';
import {WalletService} from './shared/wallet.service';

@NgModule({
  imports: [CommonModule],
  declarations: [WalletComponent],
  exports: [WalletComponent],
  providers: [WalletService]
})
export class WalletModule {
}
