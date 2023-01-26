import {Component, OnInit} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {Cart} from './shared/cart.model';
import {CartService} from './shared/cart.service';
import {Product} from '../products/shared/product.model';
import {ProductsCartsService} from './shared/products-carts.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Router} from "@angular/router";

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
    const userId: number = Number(Cookie.get('userId'));

    this.cartService.getCarts().subscribe(
      (carts) => {
        let cartId: number = 0;

        for (const cart of carts) {
          if (cart.userId === userId) {
            cartId = cart.id;
          }
        }

        this.cartService.getCart(cartId).subscribe(
          (cart) => {
            this.cart = cart;
            this.productsCartsService.getProductsFromCart(cart.id).subscribe(
              (products) => this.products = products
            );
          }
        );
      }
    );
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
