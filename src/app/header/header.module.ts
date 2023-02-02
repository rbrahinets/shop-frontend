import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {HeaderComponent} from './header.component';
import {NavigationService} from '../shared/navigation.service';
import {UserService} from '../users/shared/user.service';
import {UserRoleService} from '../users/shared/user-role.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ButtonModule
  ],
  declarations: [HeaderComponent],
  providers: [
    NavigationService,
    UserService,
    UserRoleService
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
