import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {RoleSuperadminGuard} from '../shared/guards/role-superadmin.guard';

const usersRoutes: Routes = [
  {path: 'users/delete-user', component: UserDeleteComponent, canActivate: [RoleSuperadminGuard]},
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
