import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CartComponent} from './cart.component';
import {CartService} from './shared/cart.service';
import {ProductsCartsService} from './shared/products-carts.service';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [CartComponent],
  exports: [CartComponent],
  providers: [
    CartService,
    ProductsCartsService
  ]
})
export class CartModule {
}
