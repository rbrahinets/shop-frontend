import {Component, Input, OnInit} from '@angular/core';
import {StripePaymentService} from './shared/stripe-payment.service';

@Component({
  selector: 'shop-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css'],
})
export class StripePaymentComponent implements OnInit {
  @Input() amount: number;
  private readonly apiStripe: string;
  paymentHandler: any = null;
  success: boolean = false;
  failure: boolean = false;

  constructor(
    private stripePaymentService: StripePaymentService
  ) {
    this.apiStripe =
      'pk_test_51Ky9GZJJZbUgSylKfMPkZiHPFEa6cDmnFXdtl5SbjiICrfXMDeqacEtdM1h8dEZBgajRtzz1QO15RailQi5scFO200kzNquIrL';
  }

  ngOnInit(): void {
    this.invokeStripe();
  }

  invokeStripe() {
    if (window.document.getElementById('stripe-script')) {
      return;
    }

    this.displayPaymentWindow();
  }

  makePayment(): void {
    const paymentHandler = this.getPaymentHandler(this.getPaymentStripe());

    paymentHandler.open({
      name: 'Pay',
      description: 'Pay with Stripe',
      amount: this.amount * 100,
    });

  }

  private displayPaymentWindow(): void {
    window.document.body.appendChild(this.getScriptForPayment());
  }

  private getScriptForPayment() {
    const script = window.document.createElement('script');

    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (window as any).StripeCheckout.configure({
        key: this.apiStripe,
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
        },
      });
    };

    return script;
  }

  private getPaymentStripe() {
    return (stripeToken: any) => {
      this.stripePaymentService.makePayment(stripeToken)
        .subscribe(
          (data: any) => {
            if (data.data === 'success') {
              this.success = true;
            } else {
              this.failure = true;
            }
          }
        );
    };
  }

  private getPaymentHandler(
    paymentStripe: (stripeToken: any) => void
  ) {
    return (window as any).StripeCheckout.configure(
      {
        key: this.apiStripe,
        locale: 'auto',
        token: function (stripeToken: any) {
          paymentStripe(stripeToken);
        },
      }
    );
  }
}
