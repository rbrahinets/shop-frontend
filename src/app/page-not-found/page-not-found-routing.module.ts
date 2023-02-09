import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';

const pageNotFoundRoutes: Routes = [
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      pageNotFoundRoutes,
      {enableTracing: true}
    )
  ]
})
export class PageNotFoundRoutingModule {
}
