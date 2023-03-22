import {Component, OnInit} from '@angular/core';
import {User} from '../users/shared/user.model';
import {UserService} from '../users/shared/user.service';
import {NavigationService} from '../shared/navigation.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@Component({
  selector: 'shop-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User();

  constructor(
    private userService: UserService,
    private navigation: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.setProfileOfUser();
  }

  onEdit(): void {
    this.navigation.goToEndpoint('/profile/edit');
  }

  private setProfileOfUser(): void {
    this.userService.findById(
      LoggedUserService.getUserId()
    ).then(
      (user: User) => this.user = user
    );
  }
}
