import {HttpHeaders} from '@angular/common/http';

export class Http {
  static getHttpOptions(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
