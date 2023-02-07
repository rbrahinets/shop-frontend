import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/categories';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCurrentCategoryId(): number {
    return +this.getCurrentPath()[this.getCurrentPath().length - 1];
  }

  private getCurrentPath(): string[] {
    return (this.router.url as string).split('/');
  }
}
