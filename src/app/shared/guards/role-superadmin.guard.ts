import {inject} from '@angular/core';
import {UserService} from '../../users/shared/user.service';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {NavigationService} from '../navigation.service';
import {User} from '../../users/shared/user.model';

let isSuperadmin: boolean;

export const roleSuperadminGuard = (): boolean => {
  const navigation: NavigationService = inject(NavigationService);
  setIsSuperadmin();

  const authorized: boolean = LoggedUserService.getUserId() > 0;

  if (!authorized) {
    navigation.goToEndpoint('/sign-in');
    return false;
  } else if (!isSuperadmin) {
    navigation.goToEndpoint('/page-not-found');
    return false;
  }

  return true;
};

const setIsSuperadmin = (): void => {
  const userService: UserService = inject(UserService);
  if (!LoggedUserService.getUserId()) {
    return;
  }

  userService.findById(
    LoggedUserService.getUserId()
  ).then(
    (user: User): boolean => isSuperadmin = user.adminNumber === '13012002'
  );
};
