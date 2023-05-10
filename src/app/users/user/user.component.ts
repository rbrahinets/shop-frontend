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
    this.userService.findAll().subscribe(
      (users: User[]) => {
        if (!this.isCorrectUserId(users)) {
          return;
        }

        this.userService.findById(
          this.navigation.getCurrentPathId()
        ).subscribe(
          (user: User) => {
            this.user = user;
            this.setRole();
          }
        );
      }
    );
  }

  private isCorrectUserId(users: User[]): boolean {
    if (!this.navigation.getCurrentPathId() || !this.isUserExisted(users)) {
      this.navigation.goToEndpoint('/page-not-found');
      return false;
    }

    return true;
  }

  private isUserExisted(users: User[]): boolean {
    for (const user of users) {
      if (user.id === this.navigation.getCurrentPathId()) {
        return true;
      }
    }

    return false;
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
