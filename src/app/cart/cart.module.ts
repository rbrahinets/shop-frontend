import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ng2-cookies';
import {CartComponent} from './cart.component';
import {PaymentModule} from '../payment/payment.module';
import {ButtonModule} from '../button/button.module';
import {CartService} from './shared/cart.service';
import {ProductsCartService} from './shared/products-cart.service';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    PaymentModule,
    ButtonModule
  ],
  declarations: [CartComponent],
  providers: [
    CookieService,
    CartService,
    ProductsCartService
  ],
  exports: [CartComponent]
})
export class CartModule {
}
