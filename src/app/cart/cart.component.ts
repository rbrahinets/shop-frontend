import {Component, OnInit} from '@angular/core';
import {Cart} from './shared/cart.model';
import {CartService} from './shared/cart.service';
import {Product} from '../products/shared/product.model';
import {ProductsCartsService} from './shared/products-carts.service';

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
    const id: number = 1;
    this.cartService.getCart(id).subscribe(
      (cart) => {
        this.cart = cart;
        this.productsCartsService.getProductsFromCart(cart.id).subscribe(
          (products) => this.products = products
        )
      }
    );
  }
}
