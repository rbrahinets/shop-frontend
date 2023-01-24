import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/carts';

  constructor(
    private http: HttpClient
  ) {
  }

  getCart(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${id}`);
  }
}
