import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from './profile.component';
import {UserService} from '../users/shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  providers: [UserService]
})
export class ProfileModule {
}
