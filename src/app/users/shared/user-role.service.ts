import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {UserRoleDto} from './user-role.dto';
import {RoleDto} from './role.dto';
import {LoggedUserService} from './logged-user.service';
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private apiUrl = 'http://localhost:8080/api/user-role/';

  constructor(
    private http: HttpClient
  ) {
  }

  getUsersRoles(): Observable<UserRoleDto[]> {
    return this.http.get<UserRoleDto[]>(this.apiUrl);
  }

  getRoleForUser(userId: number): Observable<RoleDto> {
    return this.http.get<RoleDto>(`${this.apiUrl + userId}`);
  }

  setRoleForLoggedUser(userId: number): void {
    this.getRoleForUser(userId)
      .subscribe(
        (roleDto: RoleDto) => LoggedUserService.setRoleOfUser(roleDto.name)
      );
  }
}
