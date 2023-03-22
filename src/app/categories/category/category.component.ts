import {Component, OnInit} from '@angular/core';
import {Product} from '../../products/shared/product.model';
import {ProductsCategoryService} from '../shared/products-category.service';
import {ProductService} from '../../products/shared/product.service';
import {NavigationService} from '../../shared/navigation.service';
import {ProductsCategoryDto} from '../shared/products-category.dto';
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
    private productsCategoryService: ProductsCategoryService,
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
    this.productsCategoryService.getProductsCategory()
      .subscribe(
        (productsCategory: ProductsCategoryDto[]) =>
          this.setProductsFromCategory(
            this.navigation.getCurrentPathId(),
            productsCategory
          )
      );
  }

  private setProductsFromCategory(
    categoryId: number,
    productsCategory: ProductsCategoryDto[]
  ) {
    for (const pc of productsCategory) {
      if (pc.categoryId === categoryId) {
        this.productService.findById(pc.productId)
          .then(
            (product: Product) => this.products.push(product)
          );
      }
    }
  }
}
