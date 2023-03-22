import {HttpHeaders} from '@angular/common/http';

export class Http {
  static getHttpOptions(): object {
    const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': csrfToken
      })
    };
  }
}
