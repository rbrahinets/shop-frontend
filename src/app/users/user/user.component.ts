import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {LoggedUserService} from '../shared/logged-user.service';
import {NavigationService} from '../../shared/navigation.service';

@Component({
  selector: 'shop-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User();
  role: string;

  constructor(
    private userService: UserService,
    private navigation: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.setUser();
    this.setRole();
  }

  private setUser(): void {
    this.userService.getUser(
      this.navigation.getCurrentPathId()
    ).then(
      (user: User) => this.user = user
    );
  }

  private setRole(): void {
    if (LoggedUserService.getRoleById(this.user.id) === 'ROLE_ADMIN') {
      this.role = 'Admin';
    } else if (LoggedUserService.getRoleById(this.user.id) === 'ROLE_USER') {
      this.role = 'User';
    }
  }
}
