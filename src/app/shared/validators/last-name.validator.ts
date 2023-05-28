import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LastNameValidator {
  validate(lastName: string): boolean {
    return LastNameValidator.validateLastName(lastName);
  }

  private static validateLastName(lastName: string): boolean {
    if (!lastName) {
      alert('Ви не ввели прізвище');
      return false;
    } else if (LastNameValidator.isInvalidLastName(lastName)) {
      alert('Ви ввели закоротке прізвище');
      return false;
    }

    return true;
  }

  private static isInvalidLastName(lastName: string): boolean {
    return lastName.length < 2;
  }
}
