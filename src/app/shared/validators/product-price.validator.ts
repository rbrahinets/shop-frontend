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
      alert('You haven\'t entered a price of product');
      return false;
    } else if (ProductPriceValidator.isInvalidProductPrice(productPrice)) {
      alert('You have entered a short price of product');
      return false;
    }

    return true;
  }

  private static isInvalidProductPrice(productPrice: number): boolean {
    return productPrice <= 0;
  }
}
