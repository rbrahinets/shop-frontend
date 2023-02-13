import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortProductsComponent} from './sort-products/sort-products.component';
import {SortProductsService} from './shared/sort-products.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SortProductsComponent],
  providers: [SortProductsService],
  exports: [SortProductsComponent]
})
export class SortModule {
}
