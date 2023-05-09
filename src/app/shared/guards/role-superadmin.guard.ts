import {inject} from '@angular/core';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {UserService} from '../../users/shared/user.service';
import {NavigationService} from '../navigation.service';
import {User} from '../../users/shared/user.model';

export const roleSuperadminGuard = (): boolean => {
  const userService: UserService = inject(UserService);
  const navigation: NavigationService = inject(NavigationService);

  const authorized: boolean = LoggedUserService.getUserId() > 0;

  if (!authorized) {
    navigation.goToEndpoint('/sign-in');
    return false;
  }

  userService.findById(
    LoggedUserService.getUserId()
  ).subscribe(
    (user: User): boolean => {
      if (!(user.adminNumber === '13012002')) {
        navigation.goToEndpoint('/page-not-found');
        return false;
      }
    }
  );

  return true;
};
