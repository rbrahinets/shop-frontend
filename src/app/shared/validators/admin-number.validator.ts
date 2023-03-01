import {Injectable} from '@angular/core';
import {AdminNumbersDto} from '../../users/shared/admin-numbers.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminNumberValidator {
  validate(adminNumber: string): boolean {
    return AdminNumberValidator.validateAdminNumber(adminNumber);
  }

  private static validateAdminNumber(adminNumber: string): boolean {
    if (!adminNumber) {
      alert('You haven\'t entered a number of admin');
      return false;
    } else if (AdminNumberValidator.isInvalidAdminNumber(adminNumber)) {
      alert('You have entered an invalid number of admin');
      return false;
    }

    return true;
  }

  private static isInvalidAdminNumber(adminNumber: string): boolean {
    return adminNumber.length < 3
  }

  private static isExistingAdminNumber(
    adminNumber: string,
    adminNumbers: AdminNumbersDto[]
  ): boolean {
    if (!adminNumbers) {
      return false;
    }

    for (const number of adminNumbers) {
      if (number.number === adminNumber) {
        return true;
      }
    }

    return false;
  }
}
