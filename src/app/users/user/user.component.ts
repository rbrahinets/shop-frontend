import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {UserRoleService} from '../shared/user-role.service';
import {NavigationService} from '../../shared/navigation.service';
import {RoleDto} from '../shared/role.dto';

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
    this.userRoleService.findRoleForUser(this.user.id).subscribe(
      (roleDto: RoleDto) => {
        if (roleDto.name === 'ROLE_ADMIN') {
          this.role = 'Admin';
        } else if (roleDto.name === 'ROLE_USER') {
          this.role = 'User';
        }
      }
    );
  }
}
