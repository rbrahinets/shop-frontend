import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripePaymentService {
  private apiUrl: string = 'http://localhost:8080/checkout/';

  constructor(
    private http: HttpClient
  ) {
  }

  makePayment(stripeToken: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, {token: stripeToken});
  }
}
