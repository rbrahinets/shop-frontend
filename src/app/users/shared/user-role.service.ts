import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleDto} from './role.dto';
import {LoggedUserService} from './logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private apiUrl = 'http://localhost:8080/api/user-role';

  constructor(
    private http: HttpClient
  ) {
  }

  findRoleForUser(userId: number): Observable<RoleDto> {
    return this.http.get<RoleDto>(`${this.apiUrl + '/' + userId}`);
  }

  setRoleForLoggedUser(userId: number): void {
    this.findRoleForUser(userId)
      .subscribe(
        (roleDto: RoleDto) => LoggedUserService.setRoleOfUser(roleDto.name)
      );
  }
}
