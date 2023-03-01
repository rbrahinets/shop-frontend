import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {NavigationService} from '../navigation.service';

@Injectable({
  providedIn: 'root'
})
export class RoleUserGuard implements CanActivate {
  constructor(
    private navigation: NavigationService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const authorized = LoggedUserService.getUserId() > 0;
    const roleUser = LoggedUserService.getRoleOfUser() === 'ROLE_USER';

    if (!authorized) {
      this.navigation.goToEndpoint('/sign-in');
      return false;
    } else if (!roleUser) {
      this.navigation.goToEndpoint('/page-not-found');
      return false;
    }

    return true;
  }
}
