import {Injectable} from '@angular/core';
import {AdminNumbersDto} from '../../users/shared/admin-numbers.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminNumberValidator {
  validate(
    adminNumber: string,
    adminNumbers: AdminNumbersDto[],
    isDelete: boolean = false
  ): boolean {
    return AdminNumberValidator.validateAdminNumber(
      adminNumber,
      adminNumbers,
      isDelete
    );
  }

  private static validateAdminNumber(
    adminNumber: string,
    adminNumbers: AdminNumbersDto[],
    isDelete: boolean
  ): boolean {
    if (!adminNumber) {
      alert('You haven\'t entered a number of admin');
      return false;
    } else if (AdminNumberValidator.isInvalidAdminNumber(adminNumber)) {
      alert('You have entered an invalid number of admin');
      return false;
    } else if (
      AdminNumberValidator.isExistingAdminNumber(
        adminNumber,
        adminNumbers
      )
      && !isDelete
    ) {
      alert('You have entered an existing number of admin');
      return false;
    } else if (
      !AdminNumberValidator.isExistingAdminNumber(
        adminNumber,
        adminNumbers
      )
      && isDelete
    ) {
      alert('You have entered a non-existing number of admin');
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
