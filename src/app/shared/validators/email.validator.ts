import {Injectable} from '@angular/core';
import {User} from '../../users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmailValidator {
  validate(
    email: string,
    users?: User[]
  ): boolean {
    return EmailValidator.validateEmail(email, users);
  }

  private static validateEmail(
    email: string,
    users: User[]
  ): boolean {
    if (!email) {
      alert('You haven\'t entered an email');
      return false;
    } else if (EmailValidator.isInvalidEmail(email)) {
      alert('You have entered an invalid email');
      return false;
    } else if (!EmailValidator.isUniqueEmail(email, users)) {
      alert('You have entered an used email');
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

  private static isUniqueEmail(
    email: string,
    users: User[]
  ) {
    if (!users) {
      return true;
    }

    for (const user of users) {
      if (user.email === email) {
        return false;
      }
    }

    return true;
  }
}
