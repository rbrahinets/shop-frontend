import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../products/shared/product.model';
import {ProductsCategoryService} from '../shared/products-category.service';
import {ProductService} from '../../products/shared/product.service';
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
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.setProductsForCategory();
  }

  private setProductsForCategory() {
    let path: string[] = (<string>this.router.url).split('/');
    const categoryId: number = +path[path.length - 1];

    this.productsCategoryService.getProductsCategory()
      .subscribe(
        (productsCategory: ProductsCategoryDto[]) =>
          this.setProductsFromCategory(
            categoryId,
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
            (product) => this.products.push(product)
          );
      }
    }
  }
}
