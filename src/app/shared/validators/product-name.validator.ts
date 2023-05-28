import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductNameValidator {
  validate(productName: string): boolean {
    return ProductNameValidator.validateProductName(
      productName
    );
  }

  private static validateProductName(productName: string): boolean {
    if (!productName) {
      alert('Ви не ввели назву товару');
      return false;
    } else if (ProductNameValidator.isInvalidProductName(productName)) {
      alert('Ви ввели закоротку назву товару');
      return false;
    }

    return true;
  }

  private static isInvalidProductName(productName: string): boolean {
    return productName.length < 2;
  }
}
