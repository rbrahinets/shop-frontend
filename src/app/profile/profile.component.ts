import {Component, OnInit} from '@angular/core';
import {User} from '../users/shared/user.model';
import {UserService} from '../users/shared/user.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@Component({
  selector: 'shop-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User();

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserById(
      LoggedUserService.getUserId()
    ).subscribe(
      (user) => this.user = user
    );
  }
}
