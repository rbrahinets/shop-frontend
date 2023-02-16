import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {SortModule} from '../sort/sort.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductListItemComponent} from './product-list-item/product-list-item.component';
import {ProductComponent} from './product/product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductService} from './shared/product.service';
import {CategoryService} from '../categories/shared/category.service';
import {ProductsCategoryService} from '../categories/shared/products-category.service';
import {CartService} from '../cart/shared/cart.service';
import {ProductsCartService} from '../cart/shared/products-cart.service';
import {LoggedUserService} from '../users/shared/logged-user.service';
import {NavigationService} from '../shared/navigation.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
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
    CategoryService,
    ProductsCategoryService,
    CartService,
    ProductsCartService,
    LoggedUserService,
    NavigationService
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
