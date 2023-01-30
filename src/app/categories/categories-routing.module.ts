import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryComponent} from './category/category.component';

const categoriesRoutes: Routes = [
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id', component: CategoryComponent},
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
