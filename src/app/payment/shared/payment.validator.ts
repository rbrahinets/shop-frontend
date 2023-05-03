import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentValidator {
  constructor() {
  }

  private static validateAmount(amount: number): boolean {
    if (!amount || amount < 0) {
      alert('An amount is invalid');
      return false;
    }

    return true;
  }

  private static validateCardNumber(cardNumber: string): boolean {
    if (!cardNumber) {
      alert('You haven\'t entered an number');
      return false;
    } else if (!PaymentValidator.isValidCardNumber(cardNumber)) {
      alert('You have entered an invalid number');
      return false;
    }

    return true;
  }

  private static isValidCardNumber(cardNumber: string): boolean {
    const strippedCardNumber = cardNumber.replace(/\s/g, '');

    if (!/^\d+$/.test(strippedCardNumber)) {
      return false;
    }

    if (strippedCardNumber.length !== 16) {
      return false;
    }

    let sum = 0;
    let double = false;

    for (let i = strippedCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(strippedCardNumber.charAt(i), 10);

      if (double) {
        digit *= 2;

        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      double = !double;
    }

    return sum % 10 === 0;
  }
}
