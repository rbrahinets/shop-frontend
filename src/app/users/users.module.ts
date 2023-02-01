import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './shared/user.service';
import {UserRoleService} from './shared/user-role.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: [
    UserService,
    UserRoleService,
  ],
})
export class UsersModule {
}