import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';
import {User} from './user.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/users';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl + '/' + id}`);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(
      `${this.apiUrl + '/' + user.id}`,
      user,
      Http.getHttpOptions(this.cookieService)
    );
  }

  delete(user: User): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl + '/' + user.id}`
    );
  }
}
