import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReportDto} from './report.dto';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:8080/api/report';

  constructor(
    private http: HttpClient
  ) {
  }

  downloadReport(reportDto: ReportDto): Observable<Blob> {
    return this.http.post<Blob>(
      `${this.apiUrl}/download`,
      reportDto,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        responseType: 'blob' as 'json'
      }
    );
  }
}
