import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ProductsModule} from '../products/products.module';
import {SortModule} from '../sort/sort.module';
import {MainComponent} from './main.component';
import {ProductService} from '../products/shared/product.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsModule,
    SortModule
  ],
  declarations: [MainComponent],
  providers: [ProductService],
  exports: [MainComponent]
})
export class MainModule {
}
