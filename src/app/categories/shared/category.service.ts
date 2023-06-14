import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';
import {Category} from './category.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/api/v1/categories';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl + '/' + id}`);
  }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>(
      this.apiUrl,
      category,
      Http.getHttpOptions(this.cookieService)
    );
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${this.apiUrl + '/' + category.id}`,
      category,
      Http.getHttpOptions(this.cookieService)
    );
  }

  delete(category: Category): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl + '/' + category.name}`
    );
  }
}
