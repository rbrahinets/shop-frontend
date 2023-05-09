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
  ],
  exports: [RouterModule]
})
export class SignUpRoutingModule {
}
