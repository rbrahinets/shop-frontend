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
      alert('Ви не ввели ім\'я');
      return false;
    } else if (FirstNameValidator.isInvalidFirstName(firstName)) {
      alert('Ви ввели закоротке ім\'я');
      return false;
    }

    return true;
  }

  private static isInvalidFirstName(firstName: string): boolean {
    return firstName.length < 2;
  }
}
