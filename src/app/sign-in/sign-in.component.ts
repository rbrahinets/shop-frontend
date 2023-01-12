import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../users/shared/user.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';
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
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.isValidDataForSignIn()) {
      return;
    }

    this.userService.getUsers().subscribe(
      (users) => {
        let user: User;

        for (const u of users) {
          if (
            (this.login === u.email || this.login === u.phone)
            && this.password === u.password
          ) {
            user = u;
            break;
          }
        }

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

  private isValidDataForSignIn(): boolean {
    if (!this.login) {
      alert('You haven\'t entered a login');
      return false;
    }

    if (!this.password) {
      alert('You haven\'t entered a password');
      return false;
    }

    return true;
  }
}
