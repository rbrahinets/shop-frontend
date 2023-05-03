import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {CartComponent} from './cart.component';
import {ButtonModule} from '../button/button.module';
import {CartService} from './shared/cart.service';
import {ProductsCartService} from './shared/products-cart.service';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    ButtonModule
  ],
  declarations: [CartComponent],
  providers: [
    CartService,
    ProductsCartService
  ],
  exports: [CartComponent]
})
export class CartModule {
}
