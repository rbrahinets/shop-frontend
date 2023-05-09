import {inject} from '@angular/core';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {NavigationService} from '../navigation.service';

export const roleUserGuard = (): boolean => {
  const navigation: NavigationService = inject(NavigationService);
  const authorized: boolean = LoggedUserService.getUserId() > 0;
  const roleUser: boolean = LoggedUserService.getRoleOfUser() === 'ROLE_USER';

  if (!authorized) {
    navigation.goToEndpoint('/sign-in');
    return false;
  } else if (!roleUser) {
    navigation.goToEndpoint('/page-not-found');
    return false;
  }
};
