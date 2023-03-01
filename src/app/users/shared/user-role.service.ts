import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {UserRoleDto} from './user-role.dto';
import {LoggedUserService} from "./logged-user.service";
import {Http} from '../../shared/http';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private apiUrl: string = 'http://localhost:8080/user-role/';

  constructor(
    private http: HttpClient
  ) {
  }

  getUsersRoles(): Observable<UserRoleDto[]> {
    return this.http.get<UserRoleDto[]>(this.apiUrl);
  }

  getRoleForUser(userId: number): Observable<UserRoleDto> {
    return this.http.get<UserRoleDto>(`${this.apiUrl + userId}`);
  }

  saveRoleForUser(
    user: User,
    isAdmin: boolean
  ): Observable<UserRoleDto> {
    const userRole = new UserRoleDto();

    this.getUsersRoles().subscribe(
      (roleUsersRoles: UserRoleDto[]) =>
        userRole.id = (roleUsersRoles.length as number) + 1
    );

    userRole.roleId = isAdmin ? 1 : 2;
    userRole.userId = user.id;

    return this.http.post<UserRoleDto>(
      this.apiUrl,
      userRole,
      Http.getHttpOptions()
    );
  }

  setRoleForLoggedUser(userId: number): void {
    this.getRoleForUser(userId)
      .subscribe(
        (userRole: UserRoleDto) =>
          LoggedUserService.setRoleOfUser(
            LoggedUserService.getRoleById(userRole.roleId)
          )
      )
  }
}
