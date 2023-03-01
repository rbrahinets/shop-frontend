import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminNumbersDto} from './admin-numbers.dto';
import {Http} from '../../shared/http';

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

  saveAdminNumber(adminNumber: AdminNumbersDto): Observable<AdminNumbersDto> {
    return this.http.post<AdminNumbersDto>(
      this.apiUrl,
      adminNumber,
      Http.getHttpOptions()
    );
  }

  updateAdminNumber(adminNumber: AdminNumbersDto): Observable<AdminNumbersDto> {
    return this.http.put<AdminNumbersDto>(
      `${this.apiUrl + adminNumber.id}`,
      adminNumber,
      Http.getHttpOptions()
    );
  }
}
