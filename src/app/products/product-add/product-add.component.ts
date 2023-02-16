import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../shared/product.service';
import {CategoryService} from '../../categories/shared/category.service';
import {ProductsCategoryService} from '../../categories/shared/products-category.service';
import {NavigationService} from '../../shared/navigation.service';
import {Product} from '../shared/product.model';
import {Category} from '../../categories/shared/category.model';
import {ProductValidator} from '../shared/product.validator';
import {ProductDto} from '../shared/product.dto';
import {ProductsCategoryDto} from '../../categories/shared/products-category.dto';

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
    private productsCategoryService: ProductsCategoryService,
    private router: Router,
    private navigation: NavigationService,
    private validator: ProductValidator
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
    this.setCategories();
    this.setProducts();
  }

  onAdd(): void {
    if (!this.isValidProductData()) {
      return;
    }

    this.addProduct();
    this.navigation.goToEndpoint('/products', true);
  }

  onCancel(): void {
    this.navigation.goToEndpoint('/products');
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
        this.productBarcode,
        this.productCategory
      ),
      this.products,
      true
    );
  }

  private addProduct(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        const newProduct = new Product();
        newProduct.id = products.length + 1;
        newProduct.name = this.productName;
        newProduct.describe = this.productDescribe;
        newProduct.price = this.productPrice;
        newProduct.barcode = this.productBarcode;
        newProduct.inStock = true;
        newProduct.image = '/assets/images/empty.jpg';

        this.addProductToCategory(
          newProduct,
          this.getCategory()
        );

        this.productService.saveProduct(newProduct).subscribe();
      }
    );
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
    this.productsCategoryService.getProductsCategory()
      .subscribe(
        (productsCategories: ProductsCategoryDto[]) => {
          const productCategory = new ProductsCategoryDto();
          productCategory.id = productsCategories.length + 1;
          productCategory.productId = product.id;
          productCategory.categoryId = category.id;

          this.productsCategoryService.saveProductToCategory(
            productCategory
          ).subscribe();
        }
      );
  }
}
