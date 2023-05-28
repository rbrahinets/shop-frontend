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
      alert('Ви не ввели пароль');
      return false;
    } else if (password.length < 4) {
      alert('Ви ввели закороткий пароль');
      return false;
    }

    return true;
  }
}
