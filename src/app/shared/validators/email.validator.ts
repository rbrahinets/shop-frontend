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
      alert('You haven\'t entered an email');
      return false;
    } else if (EmailValidator.isInvalidEmail(email)) {
      alert('You have entered an invalid email');
      return false;
    } else if (EmailValidator.isUsedEmail(email, users) && !isDelete) {
      alert('You have entered an used email');
      return false;
    } else if (!EmailValidator.isUsedEmail(email, users) && isDelete) {
      alert('You have entered a non-existed email');
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
