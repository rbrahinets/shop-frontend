import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {StripePaymentComponent} from './stripe-payment.component';
import {StripePaymentService} from './shared/stripe-payment.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule
  ],
  declarations: [StripePaymentComponent],
  providers: [StripePaymentService],
  exports: [StripePaymentComponent]
})
export class StripePaymentModule {
}
