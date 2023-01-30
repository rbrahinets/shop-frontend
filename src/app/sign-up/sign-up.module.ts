import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {SignUpComponent} from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    HttpClientModule
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent]
})
export class SignUpModule {
}
