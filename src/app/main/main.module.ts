import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ProductsModule} from '../products/products.module';
import {MainComponent} from './main.component';
import {ProductService} from '../products/shared/product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    HttpClientModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [ProductService]
})
export class MainModule {
}
