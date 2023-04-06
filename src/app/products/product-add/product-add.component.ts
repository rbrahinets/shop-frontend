import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {CategoryService} from '../../categories/shared/category.service';
import {ProductCategoryService} from '../../categories/shared/product-category.service';
import {NavigationService} from '../../shared/navigation.service';
import {Product} from '../shared/product.model';
import {Category} from '../../categories/shared/category.model';
import {ProductValidator} from '../shared/product.validator';
import {ProductDto} from '../shared/product.dto';
import {ProductCategoryDto} from '../../categories/shared/product-category.dto';

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
  private productImage: File;
  private products: Product[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private productsCategoryService: ProductCategoryService,
    private navigation: NavigationService,
    private validator: ProductValidator
  ) {
  }

  ngOnInit(): void {
    this.setCategories();
    this.setProducts();
  }

  onChangeFile(event): void {
    this.productImage = event.target.files[0];
  }

  onAdd(): void {
    if (!this.isValidProductData()) {
      return;
    }

    this.addProduct();
  }

  onCancel(): void {
    this.navigation.goToEndpoint('/products');
  }

  private setCategories(): void {
    this.categoryService.findAll().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }

  private setProducts(): void {
    this.productService.findAll().subscribe(
      (products: Product[]) => this.products = products
    );
  }

  private isValidProductData(): boolean {
    return this.validator.validate(
      new ProductDto(
        this.productName,
        this.productDescribe,
        this.productPrice,
        this.productBarcode,
        this.productCategory
      ),
      this.products,
      true
    );
  }

  private addProduct(): void {
    const newProduct = new Product();
    newProduct.name = this.productName;
    newProduct.describe = this.productDescribe;
    newProduct.price = this.productPrice;
    newProduct.barcode = this.productBarcode;
    newProduct.inStock = true;

    if (this.productImage) {
      const reader = new FileReader();
      reader.readAsDataURL(this.productImage);
      reader.onload = () => {
        newProduct.image = reader.result.toString().split(',')[1];
        this.productService.save(newProduct).subscribe(
          (product: Product) => this.addProductToCategory(product, this.getCategory())
        );
      };
    } else {
      newProduct.image = [];
      this.productService.save(newProduct).subscribe(
        (product: Product) => this.addProductToCategory(product, this.getCategory())
      );
    }
  }

  private getCategory(): Category {
    for (const category of this.categories) {
      if (category.name === this.productCategory) {
        return category;
      }
    }

    return undefined;
  }

  private addProductToCategory(
    product: Product,
    category: Category
  ): void {
    const productCategory = new ProductCategoryDto();
    productCategory.productBarcode = product.barcode;
    productCategory.categoryName = category.name;

    this.productsCategoryService.saveProductToCategory(
      productCategory
    ).subscribe(
      () => this.navigation.goToEndpoint('/products', true)
    );
  }
}
