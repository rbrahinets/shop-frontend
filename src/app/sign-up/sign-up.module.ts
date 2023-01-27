import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from '../button/button.module';
import {SignUpComponent} from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent]
})
export class SignUpModule {
}
