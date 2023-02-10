import {Injectable} from '@angular/core';
import {User} from '../../users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneValidator {
  validate(phone: string): boolean {
    return PhoneValidator.validatePhone(phone);
  }

  private static validatePhone(phone: string): boolean {
    if (!phone) {
      alert('You haven\'t entered a phone');
      return false;
    } else if (PhoneValidator.isInvalidPhone(phone)) {
      alert('You have entered an invalid phone');
      return false;
    }

    return true;
  }

  private static isInvalidPhone(phone: string): boolean {
    return !phone.startsWith('+')
      || phone.length < 12;
  }

  private static isUniquePhone(
    phone: string,
    users: User[]
  ) {
    if (!users) {
      return true;
    }

    for (const user of users) {
      if (user.phone === phone) {
        return false;
      }
    }

    return true;
  }
}
