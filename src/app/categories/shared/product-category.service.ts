import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductCategoryDto} from './product-category.dto';
import {Product} from '../../products/shared/product.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private apiUrl = 'http://localhost:8080/api/product-category';

  constructor(
    private http: HttpClient
  ) {
  }

  findAllProductsInCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl + '/' + categoryId}`);
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
      this.apiUrl,
      productCategory,
      Http.getHttpOptions()
    );
  }
}
