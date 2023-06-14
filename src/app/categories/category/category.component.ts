import {Component, OnInit} from '@angular/core';
import {Category} from '../shared/category.model';
import {Product} from '../../products/shared/product.model';
import {CategoryService} from '../shared/category.service';
import {ProductCategoryService} from '../shared/product-category.service';
import {ProductService} from '../../products/shared/product.service';
import {NavigationService} from '../../shared/navigation.service';
import {LoggedUserService} from '../../users/shared/logged-user.service';

@Component({
  selector: 'shop-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  userRole: string;
  categoryName: string;
  products: Product[] = [];

  constructor(
    private categoryService: CategoryService,
    private productsCategoryService: ProductCategoryService,
    private productService: ProductService,
    private navigation: NavigationService
  ) {
    this.userRole = LoggedUserService.getRoleOfUser();
  }

  ngOnInit(): void {
    this.categoryService.findById(
      this.navigation.getCurrentPathId()
    )
      .subscribe(
        (category) => this.categoryName = category.name
      );
    this.setProducts();
  }

  onEdit(): void {
    this.navigation.goToEndpoint(`/categories/${this.navigation.getCurrentPathId()}/edit`);
  }

  private setProducts(): void {
    this.categoryService.findAll().subscribe(
      (categories: Category[]) => {
        if (!this.isCorrectCategoryId(categories)) {
          return;
        }

        this.productsCategoryService.findAllProductsInCategory(
          this.navigation.getCurrentPathId()
        )
          .subscribe(
            (products: Product[]) => this.products = products
          );
      }
    );
  }

  private isCorrectCategoryId(categories: Category[]): boolean {
    if (!this.navigation.getCurrentPathId() || !this.isCategoryExisted(categories)) {
      this.navigation.goToEndpoint('/page-not-found');
      return false;
    }

    return true;
  }

  private isCategoryExisted(categories: Category[]): boolean {
    for (const category of categories) {
      if (category.id === this.navigation.getCurrentPathId()) {
        return true;
      }
    }

    return false;
  }
}
