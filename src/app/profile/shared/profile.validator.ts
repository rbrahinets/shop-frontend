import {Injectable} from '@angular/core';
import {ProfileDto} from './profile.dto';
import {FirstNameValidator} from '../../shared/validators/first-name.validator';
import {LastNameValidator} from '../../shared/validators/last-name.validator';

@Injectable({
  providedIn: 'root'
})
export class ProfileValidator {
  constructor(
    private firstNameValidator: FirstNameValidator,
    private lastNameValidator: LastNameValidator
  ) {
  }

  validate(profileDto: ProfileDto): boolean {
    return this.firstNameValidator.validate(profileDto.firstName)
      && this.lastNameValidator.validate(profileDto.lastName);
  }
}
