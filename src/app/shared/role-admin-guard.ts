import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoggedUserService} from '../users/shared/logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAdminGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const authorized = LoggedUserService.getUserId() > 0;
    const roleAdmin = LoggedUserService.getRoleOfUser() === 'ROLE_ADMIN';

    if (!authorized) {
      this.router.navigate(['/sign-in']).then();
      return false;
    } else if (!roleAdmin) {
      this.router.navigate(['/page-not-found']).then();
      return false;
    }

    return true;
  }
}
