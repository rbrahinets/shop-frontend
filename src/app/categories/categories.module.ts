import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductsModule} from '../products/products.module';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryListItemComponent} from './category-list-item/category-list-item.component';
import {CategoryComponent} from './category/category.component';
import {CategoryService} from './shared/category.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryComponent
  ],
  exports: [
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryComponent
  ],
  providers: [CategoryService]
})
export class CategoriesModule {
}
