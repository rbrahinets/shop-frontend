import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Product} from '../shared/product.model';
import {ProductBarcodeValidator} from '../../shared/validators/product-barcode.validator';

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
}
