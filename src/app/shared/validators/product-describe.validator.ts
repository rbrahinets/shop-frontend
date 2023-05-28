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
      alert('Ви не ввели опис товару');
      return false;
    } else if (ProductDescribeValidator.isInvalidProductDescribe(productDescribe)) {
      alert('Ви ввели закороткий опис товару');
      return false;
    }

    return true;
  }

  private static isInvalidProductDescribe(productDescribe: string): boolean {
    return productDescribe.length < 5;
  }
}
