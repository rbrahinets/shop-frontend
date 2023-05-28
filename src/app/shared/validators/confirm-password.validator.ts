import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmPasswordValidator {
  validate(
    password: string,
    confirmPassword: string
  ): boolean {
    return ConfirmPasswordValidator
      .validateConfirmPassword(
        password,
        confirmPassword
      );
  }

  private static validateConfirmPassword(
    password: string,
    confirmPassword: string
  ): boolean {
    if (
      !confirmPassword
      || password !== confirmPassword
    ) {
      alert('Ваші паролі різні');
      return false;
    }

    return true;
  }
}
