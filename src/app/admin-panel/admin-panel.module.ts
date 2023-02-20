import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ProductsModule} from '../products/products.module';
import {SortModule} from '../sort/sort.module';
import {ButtonModule} from '../button/button.module';
import {AdminPanelComponent} from './admin-panel.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {AdminPanelService} from './shared/admin-panel.service';
import {UserService} from '../users/shared/user.service';
import {LoggedUserService} from '../users/shared/logged-user.service';
import {NavigationService} from '../shared/navigation.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule,
    FormsModule,
    SortModule,
    ButtonModule
  ],
  declarations: [
    AdminPanelComponent,
    UserDeleteComponent,
  ],
  providers: [
    AdminPanelService,
    UserService,
    LoggedUserService,
    NavigationService
  ],
  exports: [
    AdminPanelComponent,
    UserDeleteComponent,
  ]
})
export class AdminPanelModule {
}
