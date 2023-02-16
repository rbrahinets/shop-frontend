import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
    private router: Router,
    private navigation: NavigationService
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
    this.setProfileOfUser();
  }

  onEdit(): void {
    this.navigation.goToEndpoint('/profile/edit');
  }

  private setProfileOfUser(): void {
    this.userService.getUserById(
      LoggedUserService.getUserId()
    ).subscribe(
      (user: User) => this.user = user
    );
  }
}
