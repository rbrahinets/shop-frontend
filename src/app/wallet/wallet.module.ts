import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {WalletComponent} from './wallet.component';
import {WalletService} from './shared/wallet.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [WalletComponent],
  providers: [
    WalletService,
    LoggedUserService
  ],
  exports: [WalletComponent]
})
export class WalletModule {
}
