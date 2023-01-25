import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from './cart.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/carts';

  constructor(
    private http: HttpClient
  ) {
  }

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl);
  }

  getCart(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${id}`);
  }

  saveCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, cart, httpOptions);
  }

  updateCart(cart: Cart): Observable<Cart> {
    const url = `${this.apiUrl}/${cart.id}`;
    return this.http.put<Cart>(url, cart, httpOptions);
  }
}
