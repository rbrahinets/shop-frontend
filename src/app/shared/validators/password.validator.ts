import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidator {
  validate(password: string): boolean {
    return PasswordValidator.validatePassword(password);
  }

  private static validatePassword(password: string): boolean {
    if (!password) {
      alert('You haven\'t entered a password');
      return false;
    } else if (password.length < 4) {
      alert('You enter a short password');
      return false;
    }

    return true;
  }
}
