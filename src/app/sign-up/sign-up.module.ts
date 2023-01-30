import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {SignUpComponent} from './sign-up.component';
import {UserService} from '../users/shared/user.service';
import {UserRoleService} from '../users/shared/user-role.service';
import {CartService} from '../cart/shared/cart.service';
import {WalletService} from '../wallet/shared/wallet.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    HttpClientModule
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
  providers: [
    UserService,
    UserRoleService,
    CartService,
    WalletService
  ]
})
export class SignUpModule {
}
