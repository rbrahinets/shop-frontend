import {Component, Input, OnInit} from '@angular/core';
import {PaymentService} from './shared/payment.service';
import {CartService} from '../cart/shared/cart.service';
import {PaymentRequest} from './shared/payment-request.dto';
import {PaymentResponse} from './shared/payment-response.dto';
import {PaymentValidator} from './shared/payment.validator';

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
      }
    );
  }
}
