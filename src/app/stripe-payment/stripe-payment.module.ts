import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StripePaymentComponent} from './stripe-payment.component';
import {StripePaymentService} from './shared/stripe-payment.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [StripePaymentComponent],
  providers: [StripePaymentService],
  exports: [StripePaymentComponent]
})
export class StripePaymentModule {
}
