import {inject} from '@angular/core';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {NavigationService} from '../navigation.service';

export const roleAdminGuard = (): boolean => {
  const navigation: NavigationService = inject(NavigationService);
  const authorized: boolean = LoggedUserService.getUserId() > 0;
  const roleAdmin: boolean = LoggedUserService.getRoleOfUser() === 'ROLE_ADMIN';

  if (!authorized) {
    navigation.goToEndpoint('/sign-in');
    return false;
  } else if (!roleAdmin) {
    navigation.goToEndpoint('/page-not-found');
    return false;
  }

  return true;
};
