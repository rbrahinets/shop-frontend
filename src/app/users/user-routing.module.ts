import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {RoleSuperadminGuard} from '../shared/guards/role-superadmin.guard';

const usersRoutes: Routes = [
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
