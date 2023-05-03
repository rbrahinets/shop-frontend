import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PaymentComponent} from './payment.component';
import {PaymentService} from './shared/payment.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PaymentComponent],
  providers: [PaymentService],
  exports: [PaymentComponent]
})
export class PaymentModule {
}
