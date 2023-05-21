import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ng2-cookies';
import {ButtonModule} from '../button/button.module';
import {SignUpComponent} from './sign-up.component';
import {NavigationService} from '../shared/navigation.service';
import {UserService} from '../users/shared/user.service';
import {AdminService} from '../users/shared/admin.service';
import {UserRoleService} from '../users/shared/user-role.service';
import {CartService} from '../cart/shared/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ButtonModule
  ],
  declarations: [SignUpComponent],
  providers: [
    CookieService,
    NavigationService,
    UserService,
    AdminService,
    UserRoleService,
    CartService,
  ],
  exports: [SignUpComponent]
})
export class SignUpModule {
}
