import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {CategoryService} from '../../categories/shared/category.service';
import {Product} from '../shared/product.model';
import {Category} from '../../categories/shared/category.model';
import {ProductValidator} from '../shared/product.validator';
import {ProductDto} from '../shared/product.dto';

@Component({
  selector: 'shop-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productName: string;
  productDescribe: string;
  productPrice: number;
  productBarcode: string;
  productCategory: string;
  categories: Category[];
  private products: Product[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private validator: ProductValidator
  ) {
  }

  ngOnInit(): void {
    this.setCategories();
    this.setProducts();
  }

  private setCategories(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }

  private setProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => this.products = products
    );
  }

  private isValidProductData(): boolean {
    return this.validator.validate(
      new ProductDto(
        this.productName,
        this.productDescribe,
        this.productPrice,
        this.productBarcode
      ),
      this.products
    );
  }
}
