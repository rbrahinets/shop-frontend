import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '../shared/navigation.service';
import {LoggedUserService} from '../users/shared/logged-user.service';
import {WalletService} from '../wallet/shared/wallet.service';

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
    private navigation: NavigationService,
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
    this.logged = LoggedUserService.isUserLogged();
    this.userRole = LoggedUserService.getRoleOfUser();
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
    WalletService.setWalletId('0');
    this.logged = !this.logged;
    this.navigation.goToEndpoint('/');
  }
}
