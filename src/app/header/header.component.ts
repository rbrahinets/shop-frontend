import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {UserRoleService} from '../users/shared/user-role.service';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Shop';
  logged: boolean;
  userRole: string;

  constructor(
    private router: Router,
    private userRoleService: UserRoleService
  ) {
  }

  ngOnInit(): void {
    let userId: number = Number(Cookie.get('userId'));
    this.logged = userId > 0;

    if (userId > 0) {
      this.userRoleService.getRoleForUser(userId).subscribe(
        (userRole) => {
          this.userRole = userRole.roleId === 1 ? 'ROLE_ADMIN' : 'ROLE_USER';
          Cookie.set('userRole', this.userRole);
        }
      );
    }
  }

  onToggleLogOut(): void {
    Cookie.set('userId', '0');
    Cookie.set('userRole', '');
    this.logged = !this.logged;
    this.router.navigate(['/'])
      .then(() => window.location.reload());
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
