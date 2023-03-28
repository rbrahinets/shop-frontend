import {Component, OnInit} from '@angular/core';
import {Product} from '../../products/shared/product.model';
import {ProductCategoryService} from '../shared/product-category.service';
import {ProductService} from '../../products/shared/product.service';
import {NavigationService} from '../../shared/navigation.service';
import {ProductCategoryDto} from '../shared/product-category.dto';
import {LoggedUserService} from "../../users/shared/logged-user.service";

@Component({
  selector: 'shop-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  userRole: string;
  products: Product[] = [];

  constructor(
    private productsCategoryService: ProductCategoryService,
    private productService: ProductService,
    private navigation: NavigationService
  ) {
    this.userRole = LoggedUserService.getRoleOfUser();
  }

  ngOnInit(): void {
    this.setProducts();
  }

  onEdit(): void {
    this.navigation.goToEndpoint(`/categories/${this.navigation.getCurrentPathId()}/edit`);
  }

  private setProducts(): void {
    this.productsCategoryService.getProductsFromCategories()
      .subscribe(
        (productsFromCategories: ProductCategoryDto[]) =>
          this.setProductsFromCategory(
            this.navigation.getCurrentPathId(),
            productsFromCategories
          )
      );
  }

  private setProductsFromCategory(
    categoryId: number,
    productsFromCategories: ProductCategoryDto[]
  ) {
    for (const pc of productsFromCategories) {
      if (pc.categoryId === categoryId) {
        this.productService.findById(pc.productId)
          .then(
            (product: Product) => this.products.push(product)
          );
      }
    }
  }
}
