import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  downloadReport(reportDto: ReportDto): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/download`,
      reportDto,
      {responseType: 'blob'}
    );
  }
}
