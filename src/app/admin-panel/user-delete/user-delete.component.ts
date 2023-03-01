import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../users/shared/user.service';
import {User} from '../../users/shared/user.model';
import {NavigationService} from '../../shared/navigation.service';
import {EmailValidator} from '../../shared/validators/email.validator';

@Component({
  selector: 'shop-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  email: string;
  private users: User[];

  constructor(
    private router: Router,
    private userService: UserService,
    private navigation: NavigationService,
    private validator: EmailValidator
  ) {
  }

  ngOnInit(): void {
    this.setUsers();
  }

  private setUsers(): void {
    this.userService.getUsers().subscribe(
      (users: User[]) => this.users = users
    );
  }

  private isValidUserEmail(): boolean {
    return this.validator.validate(
      this.email,
      this.users,
      true
    );
  }

  private deleteUser(): void {
    for (const user of this.users) {
      if (user.email === this.email) {
        this.userService.deleteUser(user);
        break;
      }
    }

    this.navigation.goToEndpoint('/users', true);
  }
}
