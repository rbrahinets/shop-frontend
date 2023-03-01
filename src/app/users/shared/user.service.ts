import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'http://localhost:8080/users/';

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Promise<User> {
    return this.http.get<User>(`${this.apiUrl + id}`).toPromise();
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.apiUrl,
      user,
      Http.getHttpOptions()
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(
      `${this.apiUrl + user.id}`,
      user,
      Http.getHttpOptions()
    );
  }

  deleteUser(user: User): void {
    this.http.delete<User>(
      `${this.apiUrl + user.id}`
    ).subscribe();
  }
}
