import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {UserRoleDto} from './user-role.dto';
import {LoggedUserService} from "./logged-user.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private apiUrl = 'http://localhost:8080/user-role';

  constructor(
    private http: HttpClient
  ) {
  }

  getUsersRoles(): Observable<UserRoleDto[]> {
    return this.http.get<UserRoleDto[]>(this.apiUrl);
  }

  getRoleForUser(userId: number): Observable<UserRoleDto> {
    return this.http.get<UserRoleDto>(`${this.apiUrl}/${userId}`);
  }

  saveRoleForUser(user: User): Observable<UserRoleDto> {
    const userRole = new UserRoleDto();

    this.getUsersRoles().subscribe(
      (roleUsersRoles) => userRole.id = (roleUsersRoles.length as number) + 1
    );

    userRole.roleId = 2;
    userRole.userId = user.id;

    return this.http.post<UserRoleDto>(this.apiUrl, userRole, httpOptions);
  }

  setRoleForLoggedUser(userId: number) {
    this.getRoleForUser(userId)
      .subscribe(
        (userRole: UserRoleDto) =>
          LoggedUserService.setRoleOfUser(
            LoggedUserService.getRoleById(userRole.roleId)
          )
      )
  }
}
