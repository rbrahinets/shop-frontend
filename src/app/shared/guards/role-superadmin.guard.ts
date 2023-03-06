import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../../users/shared/user.service';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {NavigationService} from '../navigation.service';
import {User} from '../../users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoleSuperadminGuard implements CanActivate {
  private isSuperadmin: boolean;

  constructor(
    private userService: UserService,
    private navigation: NavigationService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.setIsSuperadmin();

    const authorized = LoggedUserService.getUserId() > 0;

    if (!authorized) {
      this.navigation.goToEndpoint('/sign-in');
      return false;
    } else if (!this.isSuperadmin) {
      this.navigation.goToEndpoint('/page-not-found');
      return false;
    }

    return true;
  }

  private setIsSuperadmin(): void {
    if (!LoggedUserService.getUserId()) {
      return;
    }

    this.userService.getUser(
      LoggedUserService.getUserId()
    ).then(
      (user: User) => this.isSuperadmin = user.adminNumber === '123'
    );
  }
}
