import {Component, OnInit} from '@angular/core';
import {Product} from '../products/shared/product.model';
import {ProductService} from '../products/shared/product.service';
import {RandomProductService} from '../products/shared/random-product.service';

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
    this.productService.findAll().subscribe(
      (products: Product[]) =>
        this.products = RandomProductService.getRandomProducts(products, 10)
    );
  }
}
