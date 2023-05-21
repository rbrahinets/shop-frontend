import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';
import {SignUpDto} from './sign-up.dto';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl = 'http://localhost:8080/api/v1/sign-up';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  signUp(signUpDto: SignUpDto): Observable<SignUpDto> {
    return this.http.post<SignUpDto>(
      this.apiUrl,
      signUpDto,
      Http.getHttpOptions(this.cookieService)
    );
  }
}
