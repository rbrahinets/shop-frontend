import {SignUpDto} from './sign-up.dto';
import {FirstNameValidator} from '../validators/first-name.validator';
import {LastNameValidator} from '../validators/last-name.validator';
import {EmailValidator} from '../validators/email.validator';
import {PhoneValidator} from '../validators/phone.validator';
import {PasswordValidator} from '../validators/password.validator';
import {ConfirmPasswordValidator} from '../validators/confirm-password.validator';

export class SignUpValidator {
  static validate(credential: SignUpDto): boolean {
    return FirstNameValidator.validate(credential.firstName)
      && LastNameValidator.validate(credential.lastName)
      && EmailValidator.validate(credential.email)
      && PhoneValidator.validate(credential.phone)
      && PasswordValidator.validate(credential.password)
      && ConfirmPasswordValidator.validate(
        credential.password,
        credential.confirmPassword,
      );
  }
}
