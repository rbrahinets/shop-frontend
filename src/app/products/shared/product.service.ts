import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/products/';

  constructor(
    private http: HttpClient
  ) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.apiUrl + id}`).toPromise();
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.apiUrl,
      product,
      Http.getHttpOptions()
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.apiUrl + product.id}`,
      product,
      Http.getHttpOptions()
    );
  }

  deleteProduct(product: Product): void {
    this.http.delete<Product>(
      `${this.apiUrl + product.id}`
    ).subscribe();
  }
}
