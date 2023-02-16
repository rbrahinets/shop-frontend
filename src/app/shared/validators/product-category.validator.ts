import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryValidator {
  validate(productCategory: string): boolean {
    return ProductCategoryValidator.validateProductCategory(
      productCategory
    );
  }

  private static validateProductCategory(productCategory: string): boolean {
    if (!productCategory) {
      alert('You haven\'t select a category of product');
      return false;
    }

    return true;
  }
}
