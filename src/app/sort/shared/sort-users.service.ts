import {Injectable} from '@angular/core';
import {User} from '../../users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class SortUsersService {
  sortByFirstNameAsc(users: User[]): User[] {
    return users.sort(
      (
        category1: User,
        category2: User
      ) => {
        if (category1.firstName > category2.firstName) {
          return 1;
        } else if (category1.firstName < category2.firstName) {
          return -1;
        }

        return 0;
      }
    );
  }

  sortByFirstNameDesc(users: User[]): User[] {
    return this.sortByFirstNameAsc(users).reverse();
  }

  sortByLastNameAsc(users: User[]): User[] {
    return users.sort(
      (
        category1: User,
        category2: User
      ) => {
        if (category1.lastName > category2.lastName) {
          return 1;
        } else if (category1.lastName < category2.lastName) {
          return -1;
        }

        return 0;
      }
    );
  }

  sortByLastNameDesc(users: User[]): User[] {
    return this.sortByLastNameAsc(users).reverse();
  }
}
