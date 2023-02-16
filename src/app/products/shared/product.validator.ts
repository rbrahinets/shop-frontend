import {Injectable} from '@angular/core';
import {ProductNameValidator} from '../../shared/validators/product-name.validator';
import {ProductDescribeValidator} from '../../shared/validators/product-describe.validator';
import {ProductPriceValidator} from '../../shared/validators/product-price.validator';
import {ProductBarcodeValidator} from '../../shared/validators/product-barcode.validator';
import {ProductCategoryValidator} from '../../shared/validators/product-category.validator';
import {ProductDto} from './product.dto';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductValidator {
  constructor(
    private productNameValidator: ProductNameValidator,
    private productDescribeValidator: ProductDescribeValidator,
    private productPriceValidator: ProductPriceValidator,
    private productBarcodeValidator: ProductBarcodeValidator,
    private productCategoryValidator: ProductCategoryValidator,
  ) {
  }

  validate(
    product: ProductDto,
    products: Product[],
    isDelete: boolean = false
  ): boolean {
    return this.productNameValidator.validate(product.name)
      && this.productDescribeValidator.validate(product.describe)
      && this.productPriceValidator.validate(product.price)
      && this.productBarcodeValidator.validate(
        product.barcode,
        products,
        isDelete
      )
      && this.productCategoryValidator.validate(product.category);
  }
}
