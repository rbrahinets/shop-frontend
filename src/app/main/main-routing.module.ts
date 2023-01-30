import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';

const mainRoutes: Routes = [
  {path: '', component: MainComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      mainRoutes,
      {enableTracing: true}
    )
  ]
})
export class MainRoutingModule {
}
