import {Component, OnInit} from '@angular/core';
import {Product} from '../../products/shared/product.model';
import {ProductsCategoryService} from '../shared/products-category.service';
import {ProductService} from '../../products/shared/product.service';
import {CategoryService} from '../shared/category.service';
import {ProductsCategoryDto} from '../shared/products-category.dto';

@Component({
  selector: 'shop-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsCategoryService: ProductsCategoryService,
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
    this.setProducts();
  }

  private setProducts(): void {
    this.productsCategoryService.getProductsCategory()
      .subscribe(
        (productsCategory: ProductsCategoryDto[]) =>
          this.setProductsFromCategory(
            this.categoryService.getCurrentCategoryId(),
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
        this.productService.getProduct(pc.productId)
          .subscribe(
            (product: Product) => this.products.push(product)
          );
      }
    }
  }
}
