import {SignInDto} from './sign-in.dto';
import {EmailValidator} from '../validators/email.validator';
import {PhoneValidator} from '../validators/phone.validator';

export class SignInValidator {
  static validate(credential: SignInDto): boolean {
    return SignInValidator.validateLogin(credential.login)
      && SignInValidator.validatePassword(credential.password);
  }

  private static validateLogin(login: string): boolean {
    if (!login) {
      alert('You haven\'t entered a login');
      return false;
    }

    if (login === 'admin') {
      return true;
    }

    return !SignInValidator.isInvalidLogin(login);
  }

  private static isInvalidLogin(login: string): boolean {
    if (login.includes('@')) {
      return !EmailValidator.validate(login);
    } else if (login.includes('+')) {
      return !PhoneValidator.validate(login);
    }

    alert('You have entered an invalid login');
    return true;
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
}
