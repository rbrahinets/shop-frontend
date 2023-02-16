import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {ProductsCategoryService} from '../../categories/shared/products-category.service';
import {Product} from '../shared/product.model';
import {ProductBarcodeValidator} from '../../shared/validators/product-barcode.validator';
import {ProductsCategoryDto} from '../../categories/shared/products-category.dto';

@Component({
  selector: 'shop-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productBarcode: string;
  private products: Product[];

  constructor(
    private productService: ProductService,
    private productsCategoryService: ProductsCategoryService,
    private validator: ProductBarcodeValidator
  ) {
  }

  ngOnInit(): void {
    this.setProducts();
  }

  private setProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => this.products = products
    );
  }

  private isValidProductBarcode(): boolean {
    return this.validator.validate(
      this.productBarcode,
      this.products,
      true
    );
  }

  private deleteProductFromCategory(product: Product) {
    this.productsCategoryService.getProductsCategory().subscribe(
      (productsCategories: ProductsCategoryDto[]) => {
        for (const productsCategory of productsCategories) {
          if (productsCategory.productId === product.id) {
            this.productsCategoryService.deleteProductFromCategory(
              productsCategory
            );
          }
        }
      }
    );
  }
}
