import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '../shared/navigation.service';
import {SignUpValidator} from './shared/sign-up.validator';
import {SignUpDto} from './shared/sign-up.dto';
import {UserService} from '../users/shared/user.service';
import {UserRoleService} from '../users/shared/user-role.service';
import {CartService} from '../cart/shared/cart.service';
import {WalletService} from '../wallet/shared/wallet.service';
import {User} from '../users/shared/user.model';

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

  constructor(
    private router: Router,
    private navigation: NavigationService,
    private validator: SignUpValidator,
    private userService: UserService,
    private userRoleService: UserRoleService,
    private cartService: CartService,
    private walletService: WalletService
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
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

  private isValidCredential(): boolean {
    return this.validator.validate(
      new SignUpDto(
        this.firstName,
        this.lastName,
        this.email,
        this.phone,
        this.password,
        this.confirmPassword
      )
    );
  }

  private signUp() {
    this.userService.getUsers().subscribe(
      (users) => {
        const user = new User();
        user.id = (users.length as number) + 1;
        user.firstName = this.firstName;
        user.lastName = this.lastName;
        user.email = this.email;
        user.phone = this.phone;
        user.password = this.password;

        this.addNewUser(user);
        this.addRoleForNewUser(user);
        this.addCartForNewUser(user);
        this.addWalletForNewUser(user);

        this.navigation.goToEndpoint('/sign-in');
      }
    );
  }

  private addNewUser(user: User): void {
    this.userService.saveUser(user).subscribe();
  }

  private addRoleForNewUser(user: User): void {
    this.userRoleService.saveRoleForUser(user).subscribe();
  }

  private addCartForNewUser(user: User): void {
    this.cartService.saveCartForUser(user);
  }

  private addWalletForNewUser(user: User): void {
    this.walletService.saveWalletForUser(user);
  }
}
