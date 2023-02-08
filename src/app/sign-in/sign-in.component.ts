import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '../shared/navigation.service';
import {SignInValidator} from './shared/sign-in.validator';
import {SignInDto} from './shared/sign-in.dto';
import {LoggedUserService} from '../users/shared/logged-user.service';
import {UserService} from '../users/shared/user.service';
import {UserRoleService} from '../users/shared/user-role.service';
import {User} from '../users/shared/user.model';

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
    private validator: SignInValidator,
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
    return this.validator.validate(
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

        this.setIdForUser(users);
        this.setRoleForUser(users);

        this.navigation.goToEndpoint('/', true);
      }
    );
  }

  private setIdForUser(users: User[]) {
    LoggedUserService.setUserId(
      String(this.findUserByCredential(users).id)
    );
  }

  private setRoleForUser(users: User[]) {
    this.userRoleService.setRoleForLoggedUser(
      this.findUserByCredential(users).id
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
