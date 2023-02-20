import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '../shared/navigation.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

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
    private navigation: NavigationService
  ) {
    this.logged = LoggedUserService.isUserLogged();
    this.userRole = LoggedUserService.getRoleOfUser();
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
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
    LoggedUserService.setUserId('0');
    LoggedUserService.setRoleOfUser('');
    this.logged = !this.logged;
    this.navigation.goToEndpoint('/');
  }
}
