import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortCategoriesComponent} from './sort-categories/sort-categories.component';
import {SortProductsComponent} from './sort-products/sort-products.component';
import {SortUsersComponent} from './sort-users/sort-users.component';
import {SortProductsService} from './shared/sort-products.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SortCategoriesComponent,
    SortProductsComponent,
    SortUsersComponent
  ],
  providers: [SortProductsService],
  exports: [
    SortProductsComponent,
    SortCategoriesComponent,
    SortUsersComponent
  ]
})
export class SortModule {
}
