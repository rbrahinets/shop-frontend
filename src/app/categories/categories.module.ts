import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CookieService} from 'ng2-cookies';
import {ProductsModule} from '../products/products.module';
import {SortModule} from '../sort/sort.module';
import {ButtonModule} from '../button/button.module';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryListItemComponent} from './category-list-item/category-list-item.component';
import {CategoryComponent} from './category/category.component';
import {CategoryAddComponent} from './category-add/category-add.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {CategoryService} from './shared/category.service';
import {ProductCategoryService} from './shared/product-category.service';
import {ProductService} from '../products/shared/product.service';
import {LoggedUserService} from '../users/shared/logged-user.service';
import {NavigationService} from '../shared/navigation.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule,
    FormsModule,
    SortModule,
    ButtonModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDeleteComponent
  ],
  providers: [
    CookieService,
    CategoryService,
    ProductCategoryService,
    ProductService,
    LoggedUserService,
    NavigationService
  ],
  exports: [
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDeleteComponent
  ]
})
export class CategoriesModule {
}
