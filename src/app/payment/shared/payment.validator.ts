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


  private static validateCardExpiry(cardExpiry: string): boolean {
    if (!cardExpiry) {
      alert('You haven\'t entered an expiry');
      return false;
    } else if (!PaymentValidator.isValidCardExpiry(cardExpiry)) {
      alert('You have entered an invalid expiry');
      return false;
    }

    return true;
  }

  private static isValidCardExpiry(cardExpiry: string): boolean {
    if (cardExpiry.length !== 5) {
      return false;
    } else if (!cardExpiry.includes('/', 2)) {
      return false;
    }

    const partsOfExpiry: string[] = cardExpiry.split('/');

    if (partsOfExpiry.length !== 2) {
      return false;
    }

    const month: number = parseInt(partsOfExpiry[0], 10);
    const year: number = parseInt(partsOfExpiry[1], 10);
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear() % 100;

    if (isNaN(month) || isNaN(year)) {
      return false;
    } else if (month < 1 || month > 12) {
      return false;
    } else if (year < currentYear || (year === currentYear && month < currentDate.getMonth() + 1)) {
      return false;
    }

    return true;
  }
}
