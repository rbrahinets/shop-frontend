import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WalletComponent} from './wallet.component';

const walletRoutes: Routes = [
  {path: 'wallet', component: WalletComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      walletRoutes,
      {enableTracing: true}
    )
  ]
})
export class WalletRoutingModule {
}
