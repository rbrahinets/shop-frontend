import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDescribeValidator {
  validate(productDescribe: string): boolean {
    return ProductDescribeValidator.validateProductDescribe(
      productDescribe
    );
  }

  private static validateProductDescribe(productDescribe: string): boolean {
    if (!productDescribe) {
      alert('You haven\'t entered a describe of product');
      return false;
    } else if (ProductDescribeValidator.isInvalidProductDescribe(productDescribe)) {
      alert('You have entered a short describe of product');
      return false;
    }

    return true;
  }

  private static isInvalidProductDescribe(productDescribe: string): boolean {
    return productDescribe.length < 5;
  }
}
