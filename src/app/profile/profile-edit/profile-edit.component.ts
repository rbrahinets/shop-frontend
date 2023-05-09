import {Component, OnInit} from '@angular/core';
import {User} from '../../users/shared/user.model';
import {NavigationService} from '../../shared/navigation.service';
import {ProfileValidator} from '../shared/profile.validator';
import {ProfileDto} from '../shared/profile.dto';
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
    private navigation: NavigationService,
    private validator: ProfileValidator,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.setDefaultProfileData();
  }

  onUpdate(): void {
    if (!this.isValidData()) {
      return;
    }

    this.updateProfileData();
  }

  onCancel(): void {
    this.navigation.goToEndpoint('/profile');
  }

  private setDefaultProfileData(): void {
    this.userService.findById(
      LoggedUserService.getUserId()
    ).then(
      (user: User) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
      }
    );
  }

  private isValidData(): boolean {
    return this.validator.validate(
      new ProfileDto(
        this.firstName,
        this.lastName
      )
    );
  }

  private updateProfileData(): void {
    this.userService.findById(
      LoggedUserService.getUserId()
    ).then(
      (user: User) => {
        user.firstName = this.firstName;
        user.lastName = this.lastName;

        this.userService.update(user).subscribe(
          () => this.navigation.goToEndpoint('/profile', true)
        );
      }
    );
  }
}
