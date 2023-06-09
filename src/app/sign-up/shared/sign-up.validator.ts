import {Injectable} from '@angular/core';
import {SignUpDto} from './sign-up.dto';
import {FirstNameValidator} from '../../shared/validators/first-name.validator';
import {LastNameValidator} from '../../shared/validators/last-name.validator';
import {EmailValidator} from '../../shared/validators/email.validator';
import {PhoneValidator} from '../../shared/validators/phone.validator';
import {PasswordValidator} from '../../shared/validators/password.validator';
import {ConfirmPasswordValidator} from '../../shared/validators/confirm-password.validator';
import {AdminNumberValidator} from '../../shared/validators/admin-number.validator';
import {User} from '../../users/shared/user.model';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';

@Injectable({
  providedIn: 'root'
})
export class SignUpValidator {
  constructor(
    private firstNameValidator: FirstNameValidator,
    private lastNameValidator: LastNameValidator,
    private emailValidator: EmailValidator,
    private phoneValidator: PhoneValidator,
    private passwordValidator: PasswordValidator,
    private confirmPasswordValidator: ConfirmPasswordValidator,
    private adminNumberValidator: AdminNumberValidator
  ) {
  }

  validate(
    credential: SignUpDto,
    users: User[],
    adminNumbers: AdminNumberDto[],
    isAdmin: boolean
  ): boolean {
    return this.firstNameValidator.validate(credential.firstName)
      && this.lastNameValidator.validate(credential.lastName)
      && this.emailValidator.validate(
        credential.email,
        users
      )
      && this.phoneValidator.validate(
        credential.phone,
        users
      )
      && this.passwordValidator.validate(credential.password)
      && this.confirmPasswordValidator.validate(
        credential.password,
        credential.confirmPassword,
      )
      && (
        isAdmin
          ? this.adminNumberValidator.validate(
            credential.adminNumber,
            adminNumbers,
            users
          )
          : true
      );
  }
}
