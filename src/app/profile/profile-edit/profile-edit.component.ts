import {Component, OnInit} from '@angular/core';
import {User} from '../../users/shared/user.model';
import {UserService} from '../../users/shared/user.service';
import {LoggedUserService} from '../../users/shared/logged-user.service';

@Component({
  selector: 'shop-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.setDefaultProfileData();
  }

  private setDefaultProfileData(): void {
    this.userService.getUserById(
      LoggedUserService.getUserId()
    ).subscribe(
      (user: User) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
      }
    );
  }
}
