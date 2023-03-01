import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminNumbersDto} from './admin-numbers.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl: string = 'http://localhost:8080/admin-numbers/';

  constructor(
    private http: HttpClient
  ) {
  }

  getAdminNumbers(): Observable<AdminNumbersDto[]> {
    return this.http.get<AdminNumbersDto[]>(this.apiUrl);
  }

  getAdminNumber(id: number): Observable<AdminNumbersDto> {
    return this.http.get<AdminNumbersDto>(`${this.apiUrl + id}`);
  }
}
