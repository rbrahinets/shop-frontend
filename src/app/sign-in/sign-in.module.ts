import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {SignInComponent} from './sign-in.component';
import {NavigationService} from '../shared/navigation.service';
import {UserService} from '../users/shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    HttpClientModule
  ],
  declarations: [SignInComponent],
  exports: [SignInComponent],
  providers: [
    NavigationService,
    UserService
  ]
})
export class SignInModule {
}
