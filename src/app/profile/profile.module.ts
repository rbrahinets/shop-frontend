import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {ProfileComponent} from './profile.component';
import {UserService} from '../users/shared/user.service';
import {NavigationService} from '../shared/navigation.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule
  ],
  declarations: [ProfileComponent],
  providers: [
    UserService,
    NavigationService,
    LoggedUserService
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
