import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {UserRoleService} from '../shared/user-role.service';
import {LoggedUserService} from '../shared/logged-user.service';
import {NavigationService} from '../../shared/navigation.service';
import {UserRoleDto} from '../shared/user-role.dto';

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
    private userRoleService: UserRoleService,
    private navigation: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.setUser();
  }

  private setUser(): void {
    this.userService.findById(
      this.navigation.getCurrentPathId()
    ).then(
      (user: User) => {
        this.user = user;
        this.setRole();
      }
    );
  }

  private setRole(): void {
    this.userRoleService.getRoleForUser(this.user.id).subscribe(
      (userRoleDto: UserRoleDto) => {
        if (LoggedUserService.getRoleById(userRoleDto.roleId) === 'ROLE_ADMIN') {
          this.role = 'Admin';
        } else if (LoggedUserService.getRoleById(userRoleDto.roleId) === 'ROLE_USER') {
          this.role = 'User';
        }
      }
    );
  }
}
