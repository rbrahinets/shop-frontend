import {SignUpDto} from './sign-up.dto';
import {EmailValidator} from '../validators/email.validator';

export class SignUpValidator {
  static validate(credential: SignUpDto): boolean {
    return SignUpValidator.validateFirstName(credential.firstName)
      && SignUpValidator.validateLastName(credential.lastName)
      && EmailValidator.validate(credential.email)
      && SignUpValidator.validatePhone(credential.phone)
      && SignUpValidator.validatePassword(credential.password)
      && SignUpValidator.validateConfirmPassword(
        credential.password,
        credential.confirmPassword,
      );
  }

  private static validateFirstName(firstName: string): boolean {
    if (!firstName) {
      alert('You haven\'t entered a first name');
      return false;
    }

    return true;
  }

  private static validateLastName(lastName: string): boolean {
    if (!lastName) {
      alert('You haven\'t entered a last name');
      return false;
    }

    return true;
  }

  private static validatePhone(phone: string): boolean {
    if (!phone) {
      alert('You haven\'t entered a phone');
      return false;
    }

    if (this.isInvalidPhone(phone)) {
      alert('You have entered an invalid phone');
      return false;
    }

    return true;
  }

  private static isInvalidPhone(phone: string) {
    return !phone.startsWith('+')
      || phone.length < 12;
  }

  private static validatePassword(password: string): boolean {
    if (!password) {
      alert('You haven\'t entered a password');
      return false;
    }

    if (password.length < 4) {
      alert('You enter a short password');
      return false;
    }

    return true;
  }

  private static validateConfirmPassword(
    password: string,
    confirmPassword: string
  ): boolean {
    if (
      !confirmPassword
      || password !== confirmPassword
    ) {
      alert('Your passwords are different');
      return false;
    }

    return true;
  }
}
