import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '../shared/navigation.service';
import {UserService} from '../users/shared/user.service';
import {UserRoleService} from '../users/shared/user-role.service';
import {User} from '../users/shared/user.model';
import {SignInDto} from './sign-in.dto';
import {SignInValidator} from './sign-in.validator';

@Component({
  selector: 'shop-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login: string;
  password: string;

  constructor(
    private router: Router,
    private navigation: NavigationService,
    private userService: UserService,
    private userRoleService: UserRoleService
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
  }

  onSignIn(): void {
    if (!this.isValidCredential()) {
      return;
    }

    this.signIn();
  }

  onClickSignUp(endpoint: string): void {
    this.navigation.goToEndpoint(endpoint);
  }

  private isValidCredential(): boolean {
    return SignInValidator.validate(
      new SignInDto(
        this.login,
        this.password
      )
    );
  }

  private signIn(): void {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        if (!this.findUserByCredential(users)) {
          alert('You have entered an incorrect login or password');
          return;
        }

        UserService.setCurrentUserId(String(this.findUserByCredential(users).id));
        this.userRoleService.setRoleForCurrentUser(this.findUserByCredential(users).id);
        this.navigation.goToEndpoint('/', true);
      }
    );
  }

  private findUserByCredential(users: User[]): User {
    for (const user of users) {
      if (
        (this.login === user.email || this.login === user.phone)
        && this.password === user.password
      ) {
        return user;
      }
    }
  }
}
