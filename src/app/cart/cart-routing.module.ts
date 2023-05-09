import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart.component';
import {roleUserGuard} from '../shared/guards/role-user.guard';

const cartRoutes: Routes = [
  {path: 'cart', component: CartComponent, canActivate: [roleUserGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      cartRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
