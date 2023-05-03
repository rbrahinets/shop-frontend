import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaymentRequest} from './payment-request.dto';
import {PaymentResponse} from './payment-response.dto';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8080/api/payment';

  constructor(
    private http: HttpClient
  ) {
  }

  payment(paymentData: PaymentRequest): Observable<PaymentResponse> {
    return this.http.post<PaymentResponse>(
      this.apiUrl,
      paymentData,
      Http.getHttpOptions()
    );
  }
}
