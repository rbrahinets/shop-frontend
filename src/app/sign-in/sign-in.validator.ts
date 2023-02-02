import {SignInDto} from './sign-in.dto';

export class SignInValidator {
  static validate(credential: SignInDto): boolean {
    return SignInValidator.validateLogin(credential.login);
  }

  private static validateLogin(login: string): boolean {
    if (!login) {
      alert('You haven\'t entered a login');
      return false;
    }

    return true;
  }
}
