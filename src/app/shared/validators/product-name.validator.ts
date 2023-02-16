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
      alert('You haven\'t entered a name of product');
      return false;
    } else if (ProductNameValidator.isInvalidProductName(productName)) {
      alert('You have entered a short name of product');
      return false;
    }

    return true;
  }

  private static isInvalidProductName(productName: string): boolean {
    return productName.length < 2;
  }
}
