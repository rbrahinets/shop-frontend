import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {NavigationService} from '../../shared/navigation.service';

@Component({
  selector: 'shop-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User();

  constructor(
    private userService: UserService,
    private navigation: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.setUser();
  }

  private setUser(): void {
    this.userService.getUser(
      this.navigation.getCurrentPathId()
    ).then(
      (user: User) => this.user = user
    );
  }
}
