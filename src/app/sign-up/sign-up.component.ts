import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../users/shared/user.service';
import {User} from '../users/shared/user.model';
import {UserRoleService} from '../users/shared/user-role.service';
import {Cart} from '../cart/shared/cart.model';
import {CartService} from '../cart/shared/cart.service';
import {WalletService} from '../wallet/shared/wallet.service';
import {Wallet} from '../wallet/shared/wallet.model';
import {NavigationService} from '../shared/navigation.service';
import {SignUpDto} from './sign-up.dto';
import {SignUpValidator} from './sign-up.validator';

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
    private userService: UserService,
    private userRoleService: UserRoleService,
    private cartService: CartService,
    private walletService: WalletService,
    private router: Router,
    private navigation: NavigationService
  ) {
    this.navigation = new NavigationService(this.router);
  }

  ngOnInit(): void {
  }

  onSignUp(): void {
    if (!this.isValidCredential()) {
      return;
    }

    this.userService.getUsers().subscribe(
      (users) => {
        const newUser: User = {
          id: (users.length as number) + 1,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          password: this.password
        };

        this.addNewUser(newUser);
        this.addRoleForNewUser(newUser);
        this.addCartForNewUser(newUser);

        const wallet = new Wallet();

        this.walletService.getWallets().subscribe(
          (wallets) => wallet.id = (wallets.length as number) + 1
        );

        wallet.amountOfMoney = 0;
        wallet.number = '';
        wallet.userId = newUser.id;

        this.walletService.saveWallet(wallet).subscribe();
      }
    );

    this.router.navigate(['/sign-in']).then();
  }

  onClickSignIn(endpoint: string) {
    this.navigation.goToEndpoint(endpoint);
  }

  private isValidCredential(): boolean {
    return SignUpValidator.validate(
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

  private addNewUser(user: User): void {
    this.userService.saveUser(user).subscribe();
  }

  private addRoleForNewUser(user: User): void {
    this.userRoleService.saveRoleForUser(user).subscribe();
  }

  private addCartForNewUser(user: User): void {
    const cart = new Cart();
    this.cartService.getCarts().subscribe(
      (carts) => cart.id = (carts.length as number) + 1
    );
    cart.totalCost = 0;
    cart.userId = user.id;
    this.cartService.saveCart(cart).subscribe();
  }
}
