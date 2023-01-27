import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './sign-up.component';

const signUpRoutes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      signUpRoutes,
      {enableTracing: true}
    )
  ]
})
export class SignUpRoutingModule {
}
