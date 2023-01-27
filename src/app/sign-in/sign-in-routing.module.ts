import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in.component';

const signInRoutes: Routes = [
  {path: 'sign-in', component: SignInComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      signInRoutes,
      {enableTracing: true}
    )
  ]
})
export class SignInRoutingModule {
}
