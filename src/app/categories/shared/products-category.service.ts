import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsCategoryDto} from './products-category.dto';
import {Product} from '../../products/shared/product.model';
import {Category} from './category.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsCategoryService {
  private apiUrl = 'http://localhost:8080/products-category/';

  constructor(
    private http: HttpClient
  ) {
  }

  getProductsCategory(): Observable<ProductsCategoryDto[]> {
    return this.http.get<ProductsCategoryDto[]>(this.apiUrl);
  }

  saveProductToCategory(
    product: Product,
    category: Category
  ): Observable<ProductsCategoryDto> {
    const productsCategory = new ProductsCategoryDto();
    productsCategory.productId = product.id;
    productsCategory.categoryId = category.id;

    return this.http.post<ProductsCategoryDto>(
      this.apiUrl,
      productsCategory,
      Http.getHttpOptions()
    );
  }
}
