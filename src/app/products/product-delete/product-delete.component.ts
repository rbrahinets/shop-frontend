import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Product} from '../shared/product.model';
@Component({
  selector: 'shop-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  private products: Product[];

  constructor(
    private productService: ProductService
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
}
