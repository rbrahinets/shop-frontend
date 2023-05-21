import {NgModule} from '@angular/core';
import {CookieService} from 'ng2-cookies';
import {LoggedUserService} from '../users/shared/logged-user.service';
import {NavigationService} from './navigation.service';

@NgModule({
  providers: [
    CookieService,
    LoggedUserService,
    NavigationService
  ],
})
export class SharedModule {
}
