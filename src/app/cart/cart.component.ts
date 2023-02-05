import {Component, OnInit} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {Cart} from './shared/cart.model';
import {Product} from '../products/shared/product.model';
import {CartService} from './shared/cart.service';
import {ProductsCartsService} from './shared/products-carts.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@Component({
  selector: 'shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = new Cart();
  products: Product[] = [];
  faTimes = faTimes;

  constructor(
    private cartService: CartService,
    private productsCartsService: ProductsCartsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.setCart();
  }

  private setCart(): void {
    this.cartService.getCarts().subscribe(
      (carts: Cart[]) => this.cartService.getCart(
          CartComponent.getCartId(carts)
        ).subscribe(
          (cart: Cart) => {
            this.cart = cart;
            this.productsCartsService
              .getProductsFromCart(cart.id).subscribe(
              (products: Product[]) => this.products = products
            );
          }
        )
    );
  }

  private static getCartId(carts: Cart[]): number {
    for (const cart of carts) {
      if (cart.userId === LoggedUserService.getUserId()) {
        return cart.id;
      }
    }

    return 0;
  }

  deleteProductFromCart(product: Product) {
    this.productsCartsService
      .deleteProductFromCart(product, this.cart);
    this.cart.totalCost -= product.price;
    this.cartService.updateCart(this.cart)
      .subscribe();
    this.router.navigate(['/cart'])
      .then(() => window.location.reload());
  }
}
