import {Component, Input, OnInit} from '@angular/core';
import {PaymentRequest} from './shared/payment-request.dto';
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
  }

  private isValidData(): boolean {
    return this.validator.validate(
      this.paymentRequest
    );
  }
}
