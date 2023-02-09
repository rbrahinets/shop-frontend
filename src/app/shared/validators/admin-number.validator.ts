import {Injectable} from '@angular/core';

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
}
