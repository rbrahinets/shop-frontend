import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {AdminNumberAddComponent} from './admin-number-add/admin-number-add.component';
import {AdminNumberDeleteComponent} from './admin-number-delete/admin-number-delete.component';
import {RoleSuperadminGuard} from '../shared/guards/role-superadmin.guard';

const adminPanelRoutes: Routes = [
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [RoleSuperadminGuard]},
  {path: 'admin-panel/delete-user', component: UserDeleteComponent, canActivate: [RoleSuperadminGuard]},
  {path: 'admin-panel/add-admin-number', component: AdminNumberAddComponent, canActivate: [RoleSuperadminGuard]},
  {path: 'admin-panel/delete-admin-number', component: AdminNumberDeleteComponent, canActivate: [RoleSuperadminGuard]},
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
