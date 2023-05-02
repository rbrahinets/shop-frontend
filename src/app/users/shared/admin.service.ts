import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminNumberDto} from './admin-number.dto';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admins-numbers';

  constructor(
    private http: HttpClient
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
      Http.getHttpOptions()
    );
  }

  update(adminNumber: AdminNumberDto): Observable<AdminNumberDto> {
    return this.http.put<AdminNumberDto>(
      `${this.apiUrl + '/' + adminNumber.id}`,
      adminNumber,
      Http.getHttpOptions()
    );
  }

  delete(adminNumber: AdminNumberDto): void {
    this.http.delete<AdminNumberDto>(
      `${this.apiUrl + '/' + adminNumber.number}`
    ).subscribe();
  }
}
