import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortCategoriesComponent} from './sort-categories/sort-categories.component';
import {SortProductsComponent} from './sort-products/sort-products.component';
import {SortUsersComponent} from './sort-users/sort-users.component';
import {SortCategoriesService} from './shared/sort-categories.service';
import {SortProductsService} from './shared/sort-products.service';
import {SortUsersService} from './shared/sort-users.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SortCategoriesComponent,
    SortProductsComponent,
    SortUsersComponent
  ],
  providers: [
    SortCategoriesService,
    SortProductsService,
    SortUsersService
  ],
  exports: [
    SortProductsComponent,
    SortCategoriesComponent,
    SortUsersComponent
  ]
})
export class SortModule {
}
