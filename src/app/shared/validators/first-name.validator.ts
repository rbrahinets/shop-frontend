import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstNameValidator {
  validate(firstName: string): boolean {
    return FirstNameValidator.validateFirstName(firstName);
  }

  private static validateFirstName(firstName: string): boolean {
    if (!firstName) {
      alert('You haven\'t entered a first name');
      return false;
    } else if (FirstNameValidator.isInvalidFirstName(firstName)) {
      alert('You have entered a short first name');
      return false;
    }

    return true;
  }

  private static isInvalidFirstName(firstName: string): boolean {
    return firstName.length < 2;
  }
}
