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
}
