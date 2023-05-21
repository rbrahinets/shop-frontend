import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CookieService} from 'ng2-cookies';
import {ButtonModule} from '../button/button.module';
import {SortModule} from '../sort/sort.module';
import {UserListComponent} from './user-list/user-list.component';
import {UserListItemComponent} from './user-list-item/user-list-item.component';
import {UserComponent} from './user/user.component';
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
    ButtonModule,
    SortModule
  ],
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserComponent,
    UserDeleteComponent
  ],
  providers: [
    CookieService,
    LoggedUserService,
    UserService,
    UserRoleService,
  ],
  exports: [
    UserListComponent,
    UserListItemComponent,
    UserComponent,
    UserDeleteComponent
  ],
})
export class UsersModule {
}
