import {SignUpDto} from './sign-up.dto';

export class SignUpValidator {
  static validate(credential: SignUpDto): boolean {
    return SignUpValidator.validateFirstName(credential.firstName)
      && SignUpValidator.validateLastName(credential.lastName)
      && SignUpValidator.validateEmail(credential.email)
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

  private static validateEmail(email: string): boolean {
    if (!email) {
      alert('You haven\'t entered an email');
      return false;
    }

    if (this.isInvalidEmail(email)) {
      alert('You have entered an invalid email');
      return false;
    }

    return true;
  }

  private static isInvalidEmail(email: string) {
    return email.startsWith('@')
      || !email.endsWith('.com')
      || email.endsWith('@.com');
  }

  private static validatePhone(phone: string): boolean {
    if (!phone) {
      alert('You haven\'t entered a phone');
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

  private static validateConfirmPassword(
    password: string,
    confirmPassword: string
  ): boolean {
    if (!confirmPassword) {
      alert('You haven\'t entered a confirm password');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Your passwords are different');
      return false;
    }

    return true;
  }
}
