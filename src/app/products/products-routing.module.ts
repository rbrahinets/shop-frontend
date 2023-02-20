import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {RoleAdminGuard} from '../shared/guards/role-admin.guard';

const productsRoutes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/add', component: ProductAddComponent, canActivate: [RoleAdminGuard]},
  {path: 'products/delete', component: ProductDeleteComponent, canActivate: [RoleAdminGuard]},
  {path: 'products/:id', component: ProductComponent},
  {path: 'products/:id/edit', component: ProductEditComponent, canActivate: [RoleAdminGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      productsRoutes,
      {enableTracing: true}
    )
  ]
})
export class ProductsRoutingModule {
}
