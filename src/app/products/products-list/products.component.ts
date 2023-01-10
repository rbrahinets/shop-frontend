import {Component, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
