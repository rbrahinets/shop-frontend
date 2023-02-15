import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryComponent} from './category/category.component';
import {CategoryAddComponent} from './category-add/category-add.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {RoleAdminGuard} from '../shared/role-admin-guard';

const categoriesRoutes: Routes = [
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/add', component: CategoryAddComponent, canActivate: [RoleAdminGuard]},
  {path: 'categories/delete', component: CategoryDeleteComponent, canActivate: [RoleAdminGuard]},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'categories/:id/edit', component: CategoryEditComponent, canActivate: [RoleAdminGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      categoriesRoutes,
      {enableTracing: true}
    )
  ]
})
export class CategoriesRoutingModule {
}
