import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from './cart.model';
import {User} from '../../users/shared/user.model';
import {Http} from '../../shared/http';
import {LoggedUserService} from '../../users/shared/logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/carts/';

  constructor(
    private http: HttpClient
  ) {
  }

  static getCartForCurrentUser(carts: Cart[]): Cart {
    for (const cart of carts) {
      if (cart.userId === LoggedUserService.getUserId()) {
        return cart;
      }
    }

    return undefined;
  }

  findAll(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl);
  }

  findById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl + id}`);
  }

  save(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(
      this.apiUrl,
      cart,
      Http.getHttpOptions()
    );
  }

  update(cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(
      `${this.apiUrl + cart.id}`,
      cart,
      Http.getHttpOptions()
    );
  }

  saveCartForUser(user: User): void {
    const cart = new Cart();
    cart.totalCost = 0;
    cart.userId = user.id;

    this.save(cart).subscribe();
  }
}
