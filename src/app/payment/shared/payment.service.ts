import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';
import {PaymentRequestDto} from './payment-request.dto';
import {PaymentResponseDto} from './payment-response.dto';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8080/api/v1/payment';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  payment(paymentData: PaymentRequestDto): Observable<PaymentResponseDto> {
    return this.http.post<PaymentResponseDto>(
      this.apiUrl,
      paymentData,
      Http.getHttpOptions(this.cookieService)
    );
  }
}
