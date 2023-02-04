import {Injectable} from '@angular/core';
import {SignInDto} from './sign-in.dto';
import {EmailValidator} from '../../shared/validators/email.validator';
import {PhoneValidator} from '../../shared/validators/phone.validator';
import {PasswordValidator} from '../../shared/validators/password.validator';

@Injectable({
  providedIn: 'root'
})
export class SignInValidator {
  constructor(
    private emailValidator: EmailValidator,
    private phoneValidator: PhoneValidator,
    private passwordValidator: PasswordValidator
  ) {
  }

  validate(credential: SignInDto): boolean {
    return this.validateLogin(credential.login)
      && this.passwordValidator.validate(credential.password);
  }

  private validateLogin(login: string): boolean {
    if (!login) {
      alert('You haven\'t entered a login');
      return false;
    } else if (login === 'admin') {
      return true;
    }

    return !this.isInvalidLogin(login);
  }

  private isInvalidLogin(login: string): boolean {
    if (login.includes('@')) {
      return !this.emailValidator.validate(login);
    } else if (login.includes('+')) {
      return !this.phoneValidator.validate(login);
    }

    alert('You have entered an invalid login');
    return true;
  }
}
