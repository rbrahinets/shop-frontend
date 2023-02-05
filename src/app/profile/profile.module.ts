import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from './profile.component';
import {UserService} from '../users/shared/user.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ProfileComponent],
  providers: [
    UserService,
    LoggedUserService
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
