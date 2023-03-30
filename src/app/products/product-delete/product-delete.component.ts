import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {ProductCategoryService} from '../../categories/shared/product-category.service';
import {NavigationService} from '../../shared/navigation.service';
import {Product} from '../shared/product.model';
import {ProductBarcodeValidator} from '../../shared/validators/product-barcode.validator';
import {ProductCategoryDto} from '../../categories/shared/product-category.dto';

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
    private productsCategoryService: ProductCategoryService,
    private navigation: NavigationService,
    private validator: ProductBarcodeValidator
  ) {
  }

  ngOnInit(): void {
    this.setProducts();
  }

  onDelete(): void {
    if (!this.isValidProductBarcode()) {
      return;
    }

    this.deleteProduct();
  }

  onCancel(): void {
    this.navigation.goToEndpoint('/products');
  }

  private setProducts(): void {
    this.productService.findAll().subscribe(
      (products: Product[]) => this.products = products
    );
  }

  private isValidProductBarcode(): boolean {
    return this.validator.validate(
      this.productBarcode,
      this.products
    );
  }

  private deleteProduct(): void {
    for (const product of this.products) {
      if (product.barcode === this.productBarcode) {
        this.productService.delete(product);
        break;
      }
    }

    this.navigation.goToEndpoint('/products', true);
  }
}
