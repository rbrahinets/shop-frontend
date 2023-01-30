import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {HeaderComponent} from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
