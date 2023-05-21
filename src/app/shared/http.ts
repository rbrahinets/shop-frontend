import {HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ng2-cookies';

export class Http {
  static getHttpOptions(cookieService: CookieService): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': cookieService.get('XSRF-TOKEN')
      })
    };
  }
}
