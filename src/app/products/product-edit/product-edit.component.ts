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
  private productImage: any;
  private imageFile: File;
  private products: Product[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private productsCategoryService: ProductCategoryService,
    private navigation: NavigationService,
    private validator: ProductValidator
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.setProducts();
    this.setCategories();
  }

  onChangeFile(event): void {
    this.imageFile = event.target.files[0];
  }

  onUpdate(): void {
    if (!this.isValidProductData()) {
      return;
    }

    this.updateProductData();
  }

  onCancel(): void {
    this.navigation.goToEndpoint(`/products/${this.navigation.getCurrentPathId()}`);
  }

  private setProducts(): void {
    this.productService.findAll().subscribe(
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
        this.productInStock = product.inStock ? 'Так' : 'Ні';
        this.productImage = product.image;
        this.setCategoryForProduct(product);
      }
    }
  }

  private setCategoryForProduct(product: Product): void {
    this.productsCategoryService
      .findCategoryForProduct(product)
      .subscribe(
        (category: Category) => this.productCategory = category.name
      );
  }

  private setCategories(): void {
    this.categoryService.findAll().subscribe(
      (categories: Category[]) => this.categories = categories
    );
  }

  private isValidProductData(): boolean {
    return this.validator.validate(
      new ProductDto(
        this.productName,
        this.productDescribe,
        this.productPrice,
        this.product.barcode,
        this.productCategory
      ),
      this.products
    );
  }

  private updateProductData(): void {
    this.product.name = this.productName;
    this.product.describe = this.productDescribe;
    this.product.price = this.productPrice;
    this.product.inStock = this.productInStock === 'Так';

    if (this.imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.imageFile);
      reader.onload = () => {
        this.product.image = reader.result.toString().split(',')[1];
        this.productService.update(this.product).subscribe(
          (product: Product) => this.updateCategoryForProduct(product, this.getCategory()
          )
        );
      };
    } else {
      this.product.image = this.productImage;
      this.productService.update(this.product).subscribe(
        (product: Product) => this.updateCategoryForProduct(product, this.getCategory()
        )
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

  private updateCategoryForProduct(
    product: Product,
    category: Category
  ): void {
    const productCategory = new ProductCategoryDto();
    productCategory.productBarcode = product.barcode;
    productCategory.categoryName = category.name;

    this.productsCategoryService.updateCategoryForProduct(
      productCategory
    ).subscribe(
      () => this.navigation.goToEndpoint(`/products/${this.navigation.getCurrentPathId()}`, true)
    );
  }
}
