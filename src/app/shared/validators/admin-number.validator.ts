import {Injectable} from '@angular/core';
import {AdminNumberDto} from '../../users/shared/admin-number.dto';
import {User} from '../../users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminNumberValidator {
  validate(
    adminNumber: string,
    adminNumbers: AdminNumberDto[],
    users: User[],
    isAdd: boolean = false
  ): boolean {
    return AdminNumberValidator.validateAdminNumber(
      adminNumber,
      adminNumbers,
      users,
      isAdd
    );
  }

  private static validateAdminNumber(
    adminNumber: string,
    adminNumbers: AdminNumberDto[],
    users: User[],
    isAdd: boolean
  ): boolean {
    if (!adminNumber) {
      alert('You haven\'t entered a number of admin');
      return false;
    } else if (AdminNumberValidator.isInvalidAdminNumber(adminNumber)) {
      alert('You have entered an invalid number of admin');
      return false;
    } else if (
      !AdminNumberValidator.isExistingAdminNumber(
        adminNumber,
        adminNumbers
      ) && !isAdd
    ) {
      alert('You have entered a non-existing number of admin');
      return false;
    } else if (
      AdminNumberValidator.isExistingAdminNumber(
        adminNumber,
        adminNumbers
      ) && isAdd
    ) {
      alert('You have entered an existing number of admin');
      return false;
    } else if (
      AdminNumberValidator.isUsedAdminNumber(
        adminNumber,
        users
      )
    ) {
      alert('You have entered a used number of admin');
      return false;
    }

    return true;
  }

  private static isInvalidAdminNumber(adminNumber: string): boolean {
    return adminNumber.length < 3
  }

  private static isExistingAdminNumber(
    adminNumber: string,
    adminNumbers: AdminNumberDto[]
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

  private static isUsedAdminNumber(
    adminNumber: string,
    users: User[]
  ): boolean {
    if (!users){
      return false;
    }

    for (const user of users) {
      if (user.adminNumber === adminNumber) {
        return true;
      }
    }

    return false;
  }
}
