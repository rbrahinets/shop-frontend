import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';

const profileRoutes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/edit', component: ProfileEditComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      profileRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
