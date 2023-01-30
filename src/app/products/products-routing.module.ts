import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';

const productRoutes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      productRoutes,
      {enableTracing: true}
    )
  ]
})
export class ProductsRoutingModule {
}
