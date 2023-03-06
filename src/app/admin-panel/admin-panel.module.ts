import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ProductsModule} from '../products/products.module';
import {SortModule} from '../sort/sort.module';
import {ButtonModule} from '../button/button.module';
import {AdminPanelComponent} from './admin-panel.component';
import {AdminNumberAddComponent} from './admin-number-add/admin-number-add.component';
import {AdminNumberDeleteComponent} from './admin-number-delete/admin-number-delete.component';
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
    AdminNumberAddComponent,
    AdminNumberDeleteComponent
  ],
  providers: [
    LoggedUserService,
    NavigationService
  ],
  exports: [
    AdminPanelComponent,
    AdminNumberAddComponent,
    AdminNumberDeleteComponent
  ]
})
export class AdminPanelModule {
}
