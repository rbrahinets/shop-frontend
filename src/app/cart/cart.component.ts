import {Component, OnInit} from '@angular/core';
import {Cart} from './shared/cart.model';
import {CartService} from './shared/cart.service';

@Component({
  selector: 'shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = new Cart();

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    const id: number = 1;
    this.cartService.getCart(id).subscribe(
      (cart) => this.cart = cart
    );
  }
}
