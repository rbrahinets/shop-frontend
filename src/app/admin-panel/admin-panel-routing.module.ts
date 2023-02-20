import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {RoleSuperadminGuard} from '../shared/role-superadmin.guard';

const adminPanelRoutes: Routes = [
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [RoleSuperadminGuard]},
  {path: 'admin-panel/delete-user', component: UserDeleteComponent, canActivate: [RoleSuperadminGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      adminPanelRoutes,
      {enableTracing: true}
    )
  ]
})
export class AdminPanelRoutingModule {
}
