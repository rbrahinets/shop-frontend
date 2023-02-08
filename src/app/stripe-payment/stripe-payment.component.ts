import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css'],
})
export class StripePaymentComponent implements OnInit {
  @Input() amount: number;
  private readonly apiStripe: string;
  paymentHandler: any = null;

  constructor() {
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
}
