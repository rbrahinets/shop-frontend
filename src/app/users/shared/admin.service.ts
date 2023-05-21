import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';
import {AdminNumberDto} from './admin-number.dto';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/v1/admins-numbers';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  findAll(): Observable<AdminNumberDto[]> {
    return this.http.get<AdminNumberDto[]>(this.apiUrl);
  }

  findById(id: number): Observable<AdminNumberDto> {
    return this.http.get<AdminNumberDto>(`${this.apiUrl + '/' + id}`);
  }

  save(adminNumber: AdminNumberDto): Observable<AdminNumberDto> {
    return this.http.post<AdminNumberDto>(
      this.apiUrl,
      adminNumber,
      Http.getHttpOptions(this.cookieService)
    );
  }

  update(adminNumber: AdminNumberDto): Observable<AdminNumberDto> {
    return this.http.put<AdminNumberDto>(
      `${this.apiUrl + '/' + adminNumber.id}`,
      adminNumber,
      Http.getHttpOptions(this.cookieService)
    );
  }

  delete(adminNumber: AdminNumberDto): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl + '/' + adminNumber.number}`
    );
  }
}
