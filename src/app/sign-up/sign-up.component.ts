import {Component, OnInit} from '@angular/core';
import * as bcrypt from 'bcryptjs';
import {User} from '../users/shared/user.model';
import {NavigationService} from '../shared/navigation.service';
import {SignUpValidator} from './shared/sign-up.validator';
import {SignUpDto} from './shared/sign-up.dto';
import {UserService} from '../users/shared/user.service';
import {AdminService} from '../users/shared/admin.service';
import {AdminNumberDto} from '../users/shared/admin-number.dto';
import {UserRoleService} from '../users/shared/user-role.service';
import {CartService} from '../cart/shared/cart.service';

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
    private userRoleService: UserRoleService,
    private cartService: CartService
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

  onClickSignIn(endpoint: string) {
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
    this.userService.findAll().subscribe(
      (users: User[]) => {
        const user = new User();
        user.id = users[users.length - 1].id + 1;
        user.firstName = this.firstName;
        user.lastName = this.lastName;
        user.email = this.email;
        user.phone = this.phone;
        user.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
        user.adminNumber = this.isAdmin ? this.adminNumber : "";

        this.addNewUser(user);
        this.addRoleForNewUser(user, this.isAdmin);

        if (!this.isAdmin) {
          this.addCartForNewUser(user);
        }

        this.navigation.goToEndpoint('/sign-in');
      }
    );
  }

  private addNewUser(user: User): void {
    this.userService.save(user).subscribe();
  }

  private addRoleForNewUser(
    user: User,
    isAdmin: boolean
  ): void {
    this.userRoleService.saveRoleForUser(
      user,
      isAdmin
    ).subscribe();
  }

  private addCartForNewUser(user: User): void {
    this.cartService.saveCartForUser(user);
  }
}
