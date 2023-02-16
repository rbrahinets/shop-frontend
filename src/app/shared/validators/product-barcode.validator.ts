import {Injectable} from '@angular/core';
import {Product} from '../../products/shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductBarcodeValidator {
  validate(
    productBarcode: string,
    products: Product[],
    isDelete: boolean = false
  ): boolean {
    return ProductBarcodeValidator.validateProductBarcode(
      productBarcode,
      products,
      isDelete
    );
  }

  private static validateProductBarcode(
    productBarcode: string,
    products: Product[],
    isDelete: boolean = false
  ): boolean {
    if (!productBarcode) {
      alert('You haven\'t entered a barcode of product');
      return false;
    } else if (ProductBarcodeValidator.isInvalidProductBarcode(productBarcode)) {
      alert('You have entered a short barcode of product');
      return false;
    } else if (
      ProductBarcodeValidator.isExistingProductBarcode(
        productBarcode,
        products
      )
      && !isDelete
    ) {
      alert('You have entered an existing barcode of product');
      return false;
    } else if (
      !ProductBarcodeValidator.isExistingProductBarcode(
        productBarcode,
        products
      )
      && isDelete
    ) {
      alert('You have entered a non-existent barcode of product');
      return false;
    }

    return true;
  }

  private static isInvalidProductBarcode(productBarcode: string): boolean {
    return productBarcode.length < 12;
  }

  private static isExistingProductBarcode(
    productBarcode: string,
    products: Product[]
  ): boolean {
    if (!products) {
      return false;
    }

    for (const product of products) {
      if (product.barcode === productBarcode) {
        return true;
      }
    }

    return false;
  }
}
