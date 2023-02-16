import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {NavigationService} from '../../shared/navigation.service';

@Component({
  selector: 'shop-product-list-item-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private navigation: NavigationService
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
    this.setProducts();
  }

  onAddNewProduct(): void {
    this.navigation.goToEndpoint('/products/add');
  }

  private setProducts() {
    this.productService.getProducts().subscribe(
      (products: Product[]) => this.products = products
    );
  }
}
