import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';

const profileRoutes: Routes = [
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      profileRoutes,
      {enableTracing: true}
    )
  ]
})
export class ProfileRoutingModule {
}
