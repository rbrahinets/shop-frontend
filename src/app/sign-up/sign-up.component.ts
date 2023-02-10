import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as bcrypt from 'bcryptjs';
import {User} from '../users/shared/user.model';
import {NavigationService} from '../shared/navigation.service';
import {SignUpValidator} from './shared/sign-up.validator';
import {SignUpDto} from './shared/sign-up.dto';
import {UserService} from '../users/shared/user.service';
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

  constructor(
    private router: Router,
    private navigation: NavigationService,
    private validator: SignUpValidator,
    private userService: UserService,
    private userRoleService: UserRoleService,
    private cartService: CartService
  ) {
    this.navigation = new NavigationService(this.router);
    this.isAdmin = false;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users: User[]) => this.users = users
    );
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
      this.isAdmin
    );
  }

  private signUp() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        const user = new User();
        user.id = (users.length as number) + 1;
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
    this.userService.saveUser(user).subscribe();
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
