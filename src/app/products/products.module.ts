import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductListItemComponent} from './product-list-item/product-list-item.component';
import {ProductComponent} from './product/product.component';
import {ProductService} from './shared/product.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent
  ],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent
  ],
  providers: [ProductService]
})
export class ProductsModule {
}
