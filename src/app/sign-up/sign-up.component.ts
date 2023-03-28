import {Component, OnInit} from '@angular/core';
import {User} from '../users/shared/user.model';
import {NavigationService} from '../shared/navigation.service';
import {SignUpValidator} from './shared/sign-up.validator';
import {SignUpDto} from './shared/sign-up.dto';
import {UserService} from '../users/shared/user.service';
import {AdminService} from '../users/shared/admin.service';
import {SignUpService} from './shared/sign-up.service';
import {AdminNumberDto} from '../users/shared/admin-number.dto';

@Component({
  selector: 'shop-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  isAdmin: boolean;
  adminNumber: string;
  private users: User[];
  private adminNumbers: AdminNumberDto[];

  constructor(
    private navigation: NavigationService,
    private validator: SignUpValidator,
    private userService: UserService,
    private adminService: AdminService,
    private signUpService: SignUpService
  ) {
    this.isAdmin = false;
  }

  ngOnInit(): void {
    this.setUsers();
    this.setAdminNumbers();
  }

  onSignUp(): void {
    if (!this.isValidCredential()) {
      return;
    }

    this.signUp();
  }

  onClickSignIn(endpoint: string): void {
    this.navigation.goToEndpoint(endpoint);
  }

  onChangeIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }

  private setUsers(): void {
    this.userService.findAll().subscribe(
      (users: User[]) => this.users = users
    );
  }

  private setAdminNumbers(): void {
    this.adminService.findAll().subscribe(
      (adminNumbers: AdminNumberDto[]) => this.adminNumbers = adminNumbers
    );
  }

  private isValidCredential(): boolean {
    return this.validator.validate(
      new SignUpDto(
        this.firstName,
        this.lastName,
        this.email,
        this.phone,
        this.password,
        this.confirmPassword,
        this.adminNumber
      ),
      this.users,
      this.adminNumbers,
      this.isAdmin
    );
  }

  private signUp(): void {
    this.signUpService.signUp(this.getSignUpDto()).subscribe();
    this.navigation.goToEndpoint('/sign-in');
  }

  private getSignUpDto(): SignUpDto {
    const signUpDto = new SignUpDto();
    signUpDto.firstName = this.firstName;
    signUpDto.lastName = this.lastName;
    signUpDto.email = this.email;
    signUpDto.phone = this.phone;
    signUpDto.password = this.password;
    signUpDto.confirmPassword = this.confirmPassword;
    signUpDto.adminNumber = this.isAdmin ? this.adminNumber : '';
    return signUpDto;
  }
}
