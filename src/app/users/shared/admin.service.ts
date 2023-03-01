import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminNumberDto} from './admin-number.dto';
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

  getAdminNumbers(): Observable<AdminNumberDto[]> {
    return this.http.get<AdminNumberDto[]>(this.apiUrl);
  }

  getAdminNumber(id: number): Observable<AdminNumberDto> {
    return this.http.get<AdminNumberDto>(`${this.apiUrl + id}`);
  }

  saveAdminNumber(adminNumber: AdminNumberDto): Observable<AdminNumberDto> {
    return this.http.post<AdminNumberDto>(
      this.apiUrl,
      adminNumber,
      Http.getHttpOptions()
    );
  }

  updateAdminNumber(adminNumber: AdminNumberDto): Observable<AdminNumberDto> {
    return this.http.put<AdminNumberDto>(
      `${this.apiUrl + adminNumber.id}`,
      adminNumber,
      Http.getHttpOptions()
    );
  }

  deleteAdminNumber(adminNumber: AdminNumberDto): void {
    this.http.delete<AdminNumberDto>(
      `${this.apiUrl + adminNumber.id}`
    ).subscribe();
  }
}
