import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';
import {ProductCategoryDto} from './product-category.dto';
import {Product} from '../../products/shared/product.model';
import {Category} from './category.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private apiUrl = 'http://localhost:8080/api/v1/product-category';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  findAllProductsInCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl + '/' + categoryId}`);
  }

  findCategoryForProduct(product: Product): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl + '/category/' + product.barcode}`);
  }

  saveProductToCategory(
    productCategory: ProductCategoryDto
  ): Observable<ProductCategoryDto> {
    return this.http.post<ProductCategoryDto>(
      this.apiUrl,
      productCategory,
      Http.getHttpOptions(this.cookieService)
    );
  }

  updateCategoryForProduct(
    productCategory: ProductCategoryDto
  ): Observable<ProductCategoryDto> {
    return this.http.put<ProductCategoryDto>(
      this.apiUrl,
      productCategory,
      Http.getHttpOptions(this.cookieService)
    );
  }
}
