import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../users/shared/user.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {User} from '../users/shared/user.model';
import {NavigationService} from '../shared/navigation.service';
import {SignInValidator} from './sign-in.validator';
import {SignInDto} from './sign-in.dto';

@Component({
  selector: 'shop-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login: string;
  password: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private navigation: NavigationService
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
  }

  onSignIn(): void {
    if (!this.isValidCredential()) {
      return;
    }

    this.userService.getUsers().subscribe(
      (users: User[]) => {
        let user: User = this.findUserByCredential(users);

        if (!user) {
          alert('You have entered an incorrect login or password');
          return;
        }

        Cookie.set('userId', String(user.id));
        this.router.navigate(['/'])
          .then(() => window.location.reload());
      }
    );
  }

  onClickSignUp(endpoint: string) {
    this.navigation.goToEndpoint(endpoint);
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

  private isValidCredential(): boolean {
    const credential = new SignInDto(
      this.login,
      this.password
    );

    return SignInValidator.validate(credential);
  }
}
