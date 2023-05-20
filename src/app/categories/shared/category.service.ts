import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/api/v1/categories';

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>(
      this.apiUrl,
      category,
      Http.getHttpOptions()
    );
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${this.apiUrl + '/' + category.id}`,
      category,
      Http.getHttpOptions()
    );
  }

  delete(category: Category): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl + '/' + category.name}`
    );
  }
}
