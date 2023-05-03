import {Component, Input, OnInit} from '@angular/core';
import {PaymentService} from './shared/payment.service';
import {CartService} from '../cart/shared/cart.service';
import {ProductsCartService} from '../cart/shared/products-cart.service';
import {PaymentRequest} from './shared/payment-request.dto';
import {PaymentResponse} from './shared/payment-response.dto';
import {PaymentValidator} from './shared/payment.validator';
import {Cart} from '../cart/shared/cart.model';
import {NavigationService} from '../shared/navigation.service';

@Component({
  selector: 'shop-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() amount: number;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  private paymentRequest: PaymentRequest;

  constructor(
    private paymentService: PaymentService,
    private cartService: CartService,
    private productsCartsService: ProductsCartService,
    private navigation: NavigationService,
    private validator: PaymentValidator,
  ) {
  }

  ngOnInit(): void {
  }

  onPay(): void {
    this.paymentRequest = new PaymentRequest(
      this.amount,
      this.cardNumber,
      this.cardExpiry,
      this.cardCvc
    );

    if (!this.isValidData()) {
      return;
    }

    this.payment();
  }

  private isValidData(): boolean {
    return this.validator.validate(
      this.paymentRequest
    );
  }

  private payment(): void {
    this.paymentService.payment(this.paymentRequest).subscribe(
      (response: PaymentResponse) => {
        alert(response.responseMessage);
        console.log(response.responseMessage);
        this.resetCart();
      }
    );
  }

  private resetCart(): void {
    this.cartService.findAll().subscribe(
      (carts: Cart[]) => {
        const cart: Cart = CartService.getCartForCurrentUser(carts);
        cart.totalCost = 0;
        this.productsCartsService.deleteProductsFromCurrentCart();
        this.cartService.update(cart).subscribe(
          () => this.navigation.goToEndpoint('/cart', true)
        );
      }
    );
  }
}
