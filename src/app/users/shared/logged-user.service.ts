import {Cookie} from 'ng2-cookies/ng2-cookies';

export class LoggedUserService {
  static getUserId(): number {
    return Number(Cookie.get('userId'));
  }

  static setUserId(id: string): void {
    Cookie.set('userId', id);
  }

  static isUserLogged(): boolean {
    return LoggedUserService.getUserId() > 0;
  }
}
