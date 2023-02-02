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

    if (login === 'admin') {
      return true;
    }

    if (login.includes('@')) {
      if (!this.validateEmail(login)) {
        return this.isInvalidLogin();
      }
    } else if (login.includes('+')) {
      if (!this.validatePhone(login)) {
        return this.isInvalidLogin();
      }
    } else {
      return this.isInvalidLogin();
    }

    return true;
  }

  private static isInvalidLogin(): boolean {
    alert('You have entered an invalid login');
    return false;
  }

  private static validateEmail(email: string) {
    return !(
      email.startsWith('@')
      || !email.endsWith('.com')
      || email.endsWith('@.com')
    );
  }

  private static validatePhone(phone: string) {
    return !(
      !phone.startsWith('+')
      || phone.length < 12
    );
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
