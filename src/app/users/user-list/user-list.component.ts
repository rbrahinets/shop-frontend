import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'shop-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.setUsers();
  }

  private setUsers(): void {
    this.userService.getUsers().subscribe(
      (users: User[]) => this.users = users
    );
  }
}
