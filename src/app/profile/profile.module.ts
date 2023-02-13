import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {ProfileComponent} from './profile.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {UserService} from '../users/shared/user.service';
import {NavigationService} from '../shared/navigation.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule
  ],
  declarations: [
    ProfileComponent,
    ProfileEditComponent
  ],
  providers: [
    UserService,
    NavigationService,
    LoggedUserService
  ],
  exports: [
    ProfileComponent,
    ProfileEditComponent
  ]
})
export class ProfileModule {
}
