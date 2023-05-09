import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {AdminNumberAddComponent} from './admin-number-add/admin-number-add.component';
import {AdminNumberDeleteComponent} from './admin-number-delete/admin-number-delete.component';
import {roleSuperadminGuard} from '../shared/guards/role-superadmin.guard';

const adminPanelRoutes: Routes = [
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [roleSuperadminGuard]},
  {path: 'admin-panel/add-admin-number', component: AdminNumberAddComponent, canActivate: [roleSuperadminGuard]},
  {path: 'admin-panel/delete-admin-number', component: AdminNumberDeleteComponent, canActivate: [roleSuperadminGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      adminPanelRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {
}
