import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryComponent} from './category/category.component';
import {CategoryAddComponent} from './category-add/category-add.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {roleAdminGuard} from '../shared/guards/role-admin.guard';

const categoriesRoutes: Routes = [
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/add', component: CategoryAddComponent, canActivate: [roleAdminGuard]},
  {path: 'categories/delete', component: CategoryDeleteComponent, canActivate: [roleAdminGuard]},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'categories/:id/edit', component: CategoryEditComponent, canActivate: [roleAdminGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      categoriesRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}
