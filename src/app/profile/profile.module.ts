import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
