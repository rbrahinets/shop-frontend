import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {CartComponent} from './cart.component';
import {CartService} from './shared/cart.service';
import {ProductsCartsService} from './shared/products-carts.service';
import {StripePaymentModule} from '../stripe-payment/stripe-payment.module';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        HttpClientModule,
        StripePaymentModule
    ],
  declarations: [CartComponent],
  providers: [
    CartService,
    ProductsCartsService
  ],
  exports: [CartComponent]
})
export class CartModule {
}
