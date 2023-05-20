import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {saveAs} from 'file-saver';
import {ReportDto} from './report.dto';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:8080/api/v1/report';

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

  saveReportAsFile(response: Blob, filename: string): Observable<string> {
    saveAs(response, filename);
    return of(filename);
  }
}
