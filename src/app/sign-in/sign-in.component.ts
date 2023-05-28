import {Component, OnInit} from '@angular/core';
import * as bcrypt from 'bcryptjs';
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
    private navigation: NavigationService,
    private validator: SignInValidator,
    private userService: UserService,
    private userRoleService: UserRoleService
  ) {
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
    this.userService.findAll().subscribe(
      (users: User[]) => {
        if (!this.findUserByCredential(users)) {
          alert('Неправельний логін або пароль');
          return;
        }

        SignInComponent.setIdForUser(this.findUserByCredential(users));
        this.setRoleForUser(this.findUserByCredential(users));

        this.navigation.goToEndpoint('/', true);
      }
    );
  }

  private static setIdForUser(user: User) {
    LoggedUserService.setUserId(String(user.id));
  }

  private setRoleForUser(user: User) {
    this.userRoleService.setRoleForLoggedUser(user.id);
  }

  private findUserByCredential(users: User[]): User {
    for (const user of users) {
      if (
        (this.login === user.email || this.login === user.phone)
        && this.isMatchedPasswords(user.password)
      ) {
        return user;
      }
    }
  }

  private isMatchedPasswords(password: string) {
    return bcrypt.compareSync(this.password, password);
  }
}
