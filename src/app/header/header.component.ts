import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {UserRoleService} from '../users/shared/user-role.service';
import {NavigationService} from '../shared/navigation.service';
import {UserService} from '../users/shared/user.service';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean;
  userRole: string;

  constructor(
    private router: Router,
    private userRoleService: UserRoleService,
    private navigation: NavigationService,
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
    this.logged = UserService.getCurrentUserId() > 0;

    if (this.logged) {
      this.userRoleService.getRoleForUser(
        UserService.getCurrentUserId()
      ).subscribe(
        (userRole) => {
          this.userRole = userRole.roleId === 1 ? 'ROLE_ADMIN' : 'ROLE_USER';
          Cookie.set('userRole', this.userRole);
        }
      );
    }
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  onClickButton(endpoint: string): void {
    if (endpoint === '/sign-out') {
      this.onSignOut();
      return;
    }
    this.navigation.goToEndpoint(endpoint);
  }

  private onSignOut() {
    Cookie.set('userId', '0');
    Cookie.set('userRole', '');
    this.logged = !this.logged;
    this.navigation.goToEndpoint('/');
  }
}
