import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products/';

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  findById(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.apiUrl + id}`).toPromise();
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.apiUrl,
      product,
      Http.getHttpOptions()
    );
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.apiUrl + product.id}`,
      product,
      Http.getHttpOptions()
    );
  }

  delete(product: Product): void {
    this.http.delete<Product>(
      `${this.apiUrl + product.id}`
    ).subscribe();
  }
}
