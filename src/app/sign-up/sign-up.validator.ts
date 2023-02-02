import {SignUpDto} from './sign-up.dto';

export class SignUpValidator {
  static validate(credential: SignUpDto): boolean {
    return SignUpValidator.validateFirstName(credential.firstName)
      && SignUpValidator.validateLastName(credential.lastName)
      && SignUpValidator.validateEmail(credential.email)
      && SignUpValidator.validatePhone(credential.phone);
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

    return true;
  }

  private static validatePhone(phone: string): boolean {
    if (!phone) {
      alert('You haven\'t entered a phone');
      return false;
    }

    return true;
  }
}
