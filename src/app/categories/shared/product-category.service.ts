import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductCategoryDto} from './product-category.dto';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private apiUrl = 'http://localhost:8080/api/product-category/';

  constructor(
    private http: HttpClient
  ) {
  }

  getProductsFromCategories(): Observable<ProductCategoryDto[]> {
    return this.http.get<ProductCategoryDto[]>(this.apiUrl);
  }

  saveProductToCategory(
    productCategory: ProductCategoryDto
  ): Observable<ProductCategoryDto> {
    return this.http.post<ProductCategoryDto>(
      this.apiUrl,
      productCategory,
      Http.getHttpOptions()
    );
  }

  updateCategoryForProduct(
    productCategory: ProductCategoryDto
  ): Observable<ProductCategoryDto> {
    return this.http.put<ProductCategoryDto>(
      `${this.apiUrl + productCategory.id}`,
      productCategory,
      Http.getHttpOptions()
    );
  }

  deleteProductFromCategory(
    productCategory: ProductCategoryDto
  ): void {
    this.http.delete<ProductCategoryDto>(
      `${this.apiUrl + productCategory.id}`
    ).subscribe();
  }
}
