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
      alert('Ви не ввели номер адміна');
      return false;
    } else if (AdminNumberValidator.isInvalidAdminNumber(adminNumber)) {
      alert('Ви ввели неправильний номер адміна');
      return false;
    } else if (
      !AdminNumberValidator.isExistingAdminNumber(
        adminNumber,
        adminNumbers
      ) && !isAdd
    ) {
      alert('Ви ввели неіснуючий номер адміна');
      return false;
    } else if (
      AdminNumberValidator.isExistingAdminNumber(
        adminNumber,
        adminNumbers
      ) && isAdd
    ) {
      alert('Ви ввели існуючий номер адміна');
      return false;
    } else if (
      AdminNumberValidator.isUsedAdminNumber(
        adminNumber,
        users
      )
    ) {
      alert('Ви ввели вже використовуваний номер адміна');
      return false;
    }

    return true;
  }

  private static isInvalidAdminNumber(adminNumber: string): boolean {
    return adminNumber.length !== 8;
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
