import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../users/shared/user.service';
import {User} from '../users/shared/user.model';

@Component({
  selector: 'shop-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        const id = (users.length as number) + 1;

        const newUser: User = {
          id: id,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          password: this.password
        };

        this.userService.saveUser(newUser).subscribe();
      }
    );

    this.router.navigate(['/sign-in']).then();
  }
}
