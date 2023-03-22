import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {LoggedUserService} from '../../users/shared/logged-user.service';
import {NavigationService} from '../../shared/navigation.service';

@Component({
  selector: 'shop-product-list-item-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isAdmin: boolean;

  constructor(
    private productService: ProductService,
    private navigation: NavigationService
  ) {
    this.isAdmin = LoggedUserService.getRoleOfUser() === 'ROLE_ADMIN';
  }

  ngOnInit(): void {
    this.setProducts();
  }

  onAddNewProduct(): void {
    this.navigation.goToEndpoint('/products/add');
  }

  onDeleteProduct(): void {
    this.navigation.goToEndpoint('/products/delete');
  }

  private setProducts() {
    this.productService.findAll().subscribe(
      (products: Product[]) => this.products = products
    );
  }
}
