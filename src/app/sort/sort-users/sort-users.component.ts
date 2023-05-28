import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../users/shared/user.model';
import {SortUsersService} from '../shared/sort-users.service';

@Component({
  selector: 'shop-users-sort',
  templateUrl: './sort-users.component.html',
  styleUrls: ['./sort-users.component.css']
})
export class SortUsersComponent implements OnInit {
  @Input() users: User[];
  sortTypes: string[];

  constructor(
    private sortUsersService: SortUsersService
  ) {
    this.sortTypes = ['Прізвище[А-Я]', 'Прізвище[Я-А]', 'Ім\'я[А-Я]', 'Ім\'я[Я-А]'];
  }

  ngOnInit(): void {
  }

  sortUsers(typeSort: string): void {
    if (typeSort === this.sortTypes[0]) {
      this.users = this.sortUsersService.sortByLastNameAsc(this.users);
    } else if (typeSort === this.sortTypes[1]) {
      this.users = this.sortUsersService.sortByLastNameDesc(this.users);
    } else if (typeSort === this.sortTypes[2]) {
      this.users = this.sortUsersService.sortByFirstNameAsc(this.users);
    } else if (typeSort === this.sortTypes[3]) {
      this.users = this.sortUsersService.sortByFirstNameDesc(this.users);
    }
  }
}
