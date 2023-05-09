import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {roleSuperadminGuard} from '../shared/guards/role-superadmin.guard';

const usersRoutes: Routes = [
  {path: 'users', component: UserListComponent, canActivate: [roleSuperadminGuard]},
  {path: 'users/delete-user', component: UserDeleteComponent, canActivate: [roleSuperadminGuard]},
  {path: 'users/:id', component: UserComponent, canActivate: [roleSuperadminGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      usersRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
