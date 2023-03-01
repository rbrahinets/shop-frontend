import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {RoleSuperadminGuard} from '../shared/guards/role-superadmin.guard';

const usersRoutes: Routes = [
  {path: 'users', component: UserListComponent, canActivate: [RoleSuperadminGuard]},
  {path: 'users/delete-user', component: UserDeleteComponent, canActivate: [RoleSuperadminGuard]},
  {path: 'users/:id', component: UserComponent, canActivate: [RoleSuperadminGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      usersRoutes,
      {enableTracing: true}
    )
  ]
})
export class UserRoutingModule {
}
