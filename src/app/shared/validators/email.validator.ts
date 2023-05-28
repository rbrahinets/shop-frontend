import {Injectable} from '@angular/core';
import {User} from '../../users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmailValidator {
  validate(
    email: string,
    users?: User[],
    isDelete: boolean = false
  ): boolean {
    return EmailValidator.validateEmail(email, users, isDelete);
  }

  private static validateEmail(
    email: string,
    users: User[],
    isDelete: boolean
  ): boolean {
    if (!email) {
      alert('Ви не ввели електронну адресу');
      return false;
    } else if (EmailValidator.isInvalidEmail(email)) {
      alert('Ви ввели неправильну електронну адресу');
      return false;
    } else if (EmailValidator.isUsedEmail(email, users) && !isDelete) {
      alert('Ви ввели вже використовувану електронну адресу');
      return false;
    } else if (!EmailValidator.isUsedEmail(email, users) && isDelete) {
      alert('Ви ввели неіснуючу електронну адресу');
      return false;
    }

    return true;
  }

  private static isInvalidEmail(email: string): boolean {
    return !email.includes('@')
      || email.startsWith('@')
      || !email.endsWith('.com')
      || email.endsWith('@.com');
  }

  private static isUsedEmail(
    email: string,
    users: User[]
  ) {
    if (!users) {
      return false;
    }

    for (const user of users) {
      if (user.email === email) {
        return true;
      }
    }

    return false;
  }
}
