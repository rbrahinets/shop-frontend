import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from '../button/button.module';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {LoggedUserService} from './shared/logged-user.service';
import {UserService} from './shared/user.service';
import {UserRoleService} from './shared/user-role.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [
    UserDeleteComponent
  ],
  providers: [
    LoggedUserService,
    UserService,
    UserRoleService,
  ],
  exports: [
    UserDeleteComponent
  ],
})
export class UsersModule {
}
