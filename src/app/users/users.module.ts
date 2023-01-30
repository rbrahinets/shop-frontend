import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from "./shared/user.service";
import {UserRoleService} from "./shared/user-role.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [
    UserService,
    UserRoleService,
  ],
})
export class UsersModule {
}
