import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortCategoriesComponent} from './sort-categories/sort-categories.component';
import {SortProductsComponent} from './sort-products/sort-products.component';
import {SortProductsService} from './shared/sort-products.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SortCategoriesComponent,
    SortProductsComponent
  ],
  providers: [SortProductsService],
  exports: [
    SortProductsComponent,
    SortCategoriesComponent
  ]
})
export class SortModule {
}
