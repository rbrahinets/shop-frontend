import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsModule} from '../products/products.module';
import {MainComponent} from './main.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {
}
