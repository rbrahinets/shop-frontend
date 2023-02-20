import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart.component';
import {RoleUserGuard} from '../shared/guards/role-user.guard';

const cartRoutes: Routes = [
  {path: 'cart', canActivate: [RoleUserGuard], component: CartComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      cartRoutes,
      {enableTracing: true}
    )
  ]
})
export class CartRoutingModule {
}
