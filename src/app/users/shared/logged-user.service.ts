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

  static getRoleOfUser(): string {
    return Cookie.get('userRole');
  }

  static setRoleOfUser(role: string): void {
    Cookie.set('userRole', role);
  }

  static getRoleById(id: number): string {
    return id === 1 ? 'ROLE_ADMIN' : 'ROLE_USER';
  }
}
