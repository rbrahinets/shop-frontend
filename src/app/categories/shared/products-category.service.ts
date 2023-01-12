import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsCategoryDto} from './products-category.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsCategoryService {
  private apiUrl = 'http://localhost:8080/products-category';

  constructor(
    private http: HttpClient
  ) {
  }

  getProductsCategory(): Observable<ProductsCategoryDto[]> {
    return this.http.get<ProductsCategoryDto[]>(this.apiUrl);
  }
}
