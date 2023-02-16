import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ButtonModule} from '../button/button.module';
import {HttpClientModule} from '@angular/common/http';
import {SortModule} from '../sort/sort.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductListItemComponent} from './product-list-item/product-list-item.component';
import {ProductComponent} from './product/product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductService} from './shared/product.service';
import {CartService} from '../cart/shared/cart.service';
import {ProductsCartService} from '../cart/shared/products-cart.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    HttpClientModule,
    SortModule
  ],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent,
    ProductAddComponent
  ],
  providers: [
    ProductService,
    CartService,
    ProductsCartService,
    LoggedUserService
  ],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent,
    ProductAddComponent
  ]
})
export class ProductsModule {
}
