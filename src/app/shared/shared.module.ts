import {NgModule} from '@angular/core';
import {LoggedUserService} from '../users/shared/logged-user.service';
import {NavigationService} from './navigation.service';

@NgModule({
  providers: [
    LoggedUserService,
    NavigationService
  ],
})
export class SharedModule {
}
