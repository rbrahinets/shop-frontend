import {Component, OnInit} from '@angular/core';
import {User} from '../users/shared/user.model';
import {UserService} from '../users/shared/user.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';

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
    let userId: number = Number(Cookie.get('userId'));

    this.userService.getUserById(userId).subscribe(
      (user) => this.user = user
    );
  }
}
