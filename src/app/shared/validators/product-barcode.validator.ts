import {Injectable} from '@angular/core';
import {Product} from '../../products/shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductBarcodeValidator {
  validate(
    productBarcode: string,
    products: Product[],
    isAdd: boolean = false
  ): boolean {
    return ProductBarcodeValidator.validateProductBarcode(
      productBarcode,
      products,
      isAdd
    );
  }

  private static validateProductBarcode(
    productBarcode: string,
    products: Product[],
    isAdd: boolean = false
  ): boolean {
    if (!productBarcode) {
      alert('Ви не ввели штрих-код товару');
      return false;
    } else if (ProductBarcodeValidator.isInvalidProductBarcode(productBarcode)) {
      alert('Ви ввели закороткий штрих-код товару');
      return false;
    } else if (
      ProductBarcodeValidator.isExistingProductBarcode(
        productBarcode,
        products
      )
      && isAdd
    ) {
      alert('Ви ввели існуючий штрих-код товару');
      return false;
    } else if (
      !ProductBarcodeValidator.isExistingProductBarcode(
        productBarcode,
        products
      )
      && !isAdd
    ) {
      alert('Ви ввели неіснуючий штрих-код товару');
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
