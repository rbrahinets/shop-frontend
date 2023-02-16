import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../shared/product.service';
import {CategoryService} from '../../categories/shared/category.service';
import {NavigationService} from '../../shared/navigation.service';
import {Product} from '../shared/product.model';
import {Category} from '../../categories/shared/category.model';

@Component({
  selector: 'shop-category-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productName: string;
  productDescribe: string;
  productPrice: number;
  productInStock: string;
  productCategory: string;
  categories: Category[];
  private products: Product[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private navigation: NavigationService
  ) {
    this.navigation = new NavigationService(this.router);
    this.product = new Product();
  }

  ngOnInit(): void {
    this.setProducts();
    this.setCategories();
  }

  private setProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.setCurrentProduct(products);
      }
    );
  }

  private setCurrentProduct(products: Product[]): void {
    for (const product of products) {
      if (product.id === this.navigation.getCurrentPathId()) {
        this.product = product;
        this.productName = product.name;
        this.productDescribe = product.describe;
        this.productPrice = product.price;
        this.productInStock = product.inStock ? 'Yes' : 'No';
      }
    }
  }

  private setCategories(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }
}
