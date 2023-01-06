import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Link} from "./link.model";

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private apiUrl = 'http://localhost:8080/links';

  constructor(
    private http: HttpClient
  ) {
  }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.apiUrl);
  }
}
