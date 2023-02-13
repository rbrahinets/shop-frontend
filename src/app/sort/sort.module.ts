import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortProductsComponent} from './sort-products/sort-products.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SortProductsComponent],
  providers: [],
  exports: [SortProductsComponent]
})
export class SortModule {
}
