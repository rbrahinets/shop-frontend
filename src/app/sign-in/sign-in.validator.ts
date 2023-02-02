import {SignInDto} from './sign-in.dto';

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

    return true;
  }

  private static validatePassword(password: string): boolean {
    if (!password) {
      alert('You haven\'t entered a password');
      return false;
    }

    return true;
  }
}
