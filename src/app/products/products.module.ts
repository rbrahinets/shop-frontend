import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ng2-cookies';
import {ButtonModule} from '../button/button.module';
import {SortModule} from '../sort/sort.module';
import {ImageModule} from '../image/image.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductListItemComponent} from './product-list-item/product-list-item.component';
import {ProductComponent} from './product/product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductService} from './shared/product.service';
import {CategoryService} from '../categories/shared/category.service';
import {ProductCategoryService} from '../categories/shared/product-category.service';
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
    SortModule,
    ImageModule
  ],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  providers: [
    CookieService,
    ProductService,
    CategoryService,
    ProductCategoryService,
    CartService,
    ProductsCartService,
    LoggedUserService,
    NavigationService
  ],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ]
})
export class ProductsModule {
}
