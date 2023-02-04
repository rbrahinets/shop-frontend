import {Injectable} from '@angular/core';

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
}
