import {Component, OnInit} from '@angular/core';
import {Product} from '../products/shared/product.model';
import {ProductService} from '../products/shared/product.service';
import {Random} from '../shared/random';

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
    this.setRandomProducts();
  }

  private setRandomProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.addProductsToArray(products);
      }
    );
  }

  private addProductsToArray(products: Product[]): void {
    const idsOfProducts: number[] = MainComponent.getIdsOfProducts(products);

    for (let i = 0; i < MainComponent.getCountOfProducts(); i++) {
      this.products.push(products[idsOfProducts[i]]);
    }
  }

  private static getIdsOfProducts(products: Product[]): number[] {
    return Random.getRandomIds(
      MainComponent.getCountOfProducts(),
      products.length
    );
  }

  private static getCountOfProducts(): number {
    return 5;
  }
}
