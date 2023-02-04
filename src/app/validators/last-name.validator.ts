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
      alert('You haven\'t entered a last name');
      return false;
    } else if (LastNameValidator.isInvalidLastName(lastName)) {
      alert('You have entered a short last name');
      return false;
    }

    return true;
  }

  private static isInvalidLastName(lastName: string): boolean {
    return lastName.length < 2;
  }
}
