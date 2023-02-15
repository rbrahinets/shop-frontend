import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category.model';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/categories/';

  constructor(
    private http: HttpClient
  ) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(
      this.apiUrl,
      category,
      Http.getHttpOptions()
    );
  }

  deleteCategory(category: Category): void {
    this.http.delete<Category>(
      `${this.apiUrl}/${category.id}`
    ).subscribe();
  }
}
