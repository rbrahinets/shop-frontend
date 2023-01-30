import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {SignInComponent} from './sign-in.component';
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
  providers: [UserService]
})
export class SignInModule {
}
