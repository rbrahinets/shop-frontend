import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StripePaymentComponent} from './stripe-payment.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [StripePaymentComponent],
  providers: [],
  exports: [StripePaymentComponent]
})
export class StripePaymentModule {
}
