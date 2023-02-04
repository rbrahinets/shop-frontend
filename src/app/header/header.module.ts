import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from '../button/button.module';
import {HeaderComponent} from './header.component';
import {NavigationService} from '../shared/navigation.service';
import {LoggedUserService} from '../users/shared/logged-user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ButtonModule
  ],
  declarations: [HeaderComponent],
  providers: [
    NavigationService,
    LoggedUserService
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
