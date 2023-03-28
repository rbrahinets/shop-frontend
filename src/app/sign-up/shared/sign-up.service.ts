import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SignUpDto} from './sign-up.dto';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl = 'http://localhost:8080/api/sign-up/';

  constructor(
    private http: HttpClient
  ) {
  }

  signUp(signUpDto: SignUpDto): Observable<SignUpDto> {
    console.log('SignUpService::signUp');
    console.log(signUpDto);

    return this.http.post<SignUpDto>(
      this.apiUrl,
      signUpDto,
      Http.getHttpOptions()
    );
  }
}
