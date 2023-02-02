import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {CartComponent} from './cart.component';
import {CartService} from './shared/cart.service';
import {ProductsCartsService} from './shared/products-carts.service';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
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
