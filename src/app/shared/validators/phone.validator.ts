import {Injectable} from '@angular/core';
import {User} from '../../users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneValidator {
  validate(
    phone: string,
    users?: User[]
  ): boolean {
    return PhoneValidator.validatePhone(phone, users);
  }

  private static validatePhone(
    phone: string,
    users: User[]
  ): boolean {
    if (!phone) {
      alert('Ви не ввели номер телефону');
      return false;
    } else if (PhoneValidator.isInvalidPhone(phone)) {
      alert('Ви ввели неправельний номер телефону');
      return false;
    } else if (!PhoneValidator.isUniquePhone(phone, users)) {
      alert('Ви ввели вже використовуваний номер телефону');
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
