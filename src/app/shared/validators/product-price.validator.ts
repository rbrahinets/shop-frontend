import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceValidator {
  validate(productPrice: number): boolean {
    return ProductPriceValidator.validateProductPrice(
      productPrice
    );
  }

  private static validateProductPrice(productPrice: number): boolean {
    if (!productPrice) {
      alert('Ви не ввели неправильну ціну товару');
      return false;
    } else if (ProductPriceValidator.isInvalidProductPrice(productPrice)) {
      alert('Ви ввели неправильну ціну товару');
      return false;
    }

    return true;
  }

  private static isInvalidProductPrice(productPrice: number): boolean {
    return productPrice <= 0;
  }
}
