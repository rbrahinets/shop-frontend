import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart.component';

const cartRoutes: Routes = [
  {path: 'cart', component: CartComponent},
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