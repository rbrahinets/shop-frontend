import {Component, OnInit} from '@angular/core';
import {Cart} from './shared/cart.model';
import {CartService} from './shared/cart.service';
import {Product} from '../products/shared/product.model';
import {ProductsCartsService} from './shared/products-carts.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = new Cart();
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productsCartsService: ProductsCartsService
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
            )
          }
        );
      }
    );
  }
}
