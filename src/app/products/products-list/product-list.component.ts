import {Component, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products) => this.products = products
    );
  }

  click(id: number): void {
    alert(`Go to products/${id}`);
  }
}
