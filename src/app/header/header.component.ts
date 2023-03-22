import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../shared/navigation.service';
import {LoggedUserService} from '../users/shared/logged-user.service';
import {User} from '../users/shared/user.model';
import {UserService} from '../users/shared/user.service';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean;
  userRole: string;
  isSuperadmin: boolean;

  constructor(
    private userService: UserService,
    private navigation: NavigationService
  ) {
    this.logged = LoggedUserService.isUserLogged();
    this.userRole = LoggedUserService.getRoleOfUser();
  }

  ngOnInit(): void {
    this.setIsSuperadmin();
  }

  hasRoute(route: string): boolean {
    return this.navigation.isEqualsRoutes(route);
  }

  onClickButton(endpoint: string): void {
    if (endpoint === '/sign-out') {
      this.onSignOut();
      return;
    }

    this.navigation.goToEndpoint(endpoint);
  }

  private setIsSuperadmin(): void {
    if (!LoggedUserService.getUserId()) {
      return;
    }

    this.userService.findById(
      LoggedUserService.getUserId()
    ).then(
      (user: User) => this.isSuperadmin = user.adminNumber === '13012002'
    );
  }

  private onSignOut(): void {
    LoggedUserService.setUserId('0');
    LoggedUserService.setRoleOfUser('');
    this.logged = !this.logged;
    this.navigation.goToEndpoint('/');
  }
}
