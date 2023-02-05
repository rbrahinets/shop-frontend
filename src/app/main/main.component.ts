import {Component, OnInit} from '@angular/core';
import {Product} from "../products/shared/product.model";
import {ProductService} from "../products/shared/product.service";

@Component({
  selector: 'shop-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        const ids: number[] = this.getRandomIds(
          MainComponent.getCountOfProducts(),
          products.length
        );

        for (let i = 0; i < MainComponent.getCountOfProducts(); i++) {
          this.products.push(products[ids[i]]);
        }
      }
    );
  }

  private static getCountOfProducts() {
    return 5;
  }

  private getRandomIds(
    quantity: number,
    max: number
  ): number[] {
    let range: number[] = [];
    for (let i = 0; i < 50; i++) {
      range.push(i);
    }

    return Array(quantity)
      .fill(undefined)
      .map(() => {
        const id = range[Math.floor(max * Math.random())];
        max--;

        const index = range.indexOf(id, 0);
        if (index > -1) {
          range.splice(index, 1);
        }

        return id;
      });
  }
}
