import {Component, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";

@Component({
  selector: 'shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  click(id: number): void {
    alert(`Go to products/${id}`);
  }
}
