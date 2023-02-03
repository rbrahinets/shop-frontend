import {SignUpDto} from './sign-up.dto';
import {EmailValidator} from '../validators/email.validator';
import {PhoneValidator} from '../validators/phone.validator';
import {PasswordValidator} from '../validators/password.validator';
import {ConfirmPasswordValidator} from '../validators/confirm-password.validator';

export class SignUpValidator {
  static validate(credential: SignUpDto): boolean {
    return SignUpValidator.validateFirstName(credential.firstName)
      && SignUpValidator.validateLastName(credential.lastName)
      && EmailValidator.validate(credential.email)
      && PhoneValidator.validate(credential.phone)
      && PasswordValidator.validate(credential.password)
      && ConfirmPasswordValidator.validate(
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
}
