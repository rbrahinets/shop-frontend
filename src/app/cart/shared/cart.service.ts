import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';
import {Cart} from './cart.model';
import {Http} from '../../shared/http';
import {LoggedUserService} from '../../users/shared/logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/v1/carts';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
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
    return this.http.get<Cart>(`${this.apiUrl + '/' + id}`);
  }

  update(cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(
      `${this.apiUrl + '/' + cart.id}`,
      cart,
      Http.getHttpOptions(this.cookieService)
    );
  }
}
