import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users/';

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  findById(id: number): Promise<User> {
    return this.http.get<User>(`${this.apiUrl + id}`).toPromise();
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(
      `${this.apiUrl + user.id}`,
      user,
      Http.getHttpOptions()
    );
  }

  delete(user: User): void {
    this.http.delete<User>(
      `${this.apiUrl + user.id}`
    ).subscribe();
  }
}
