import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ButtonComponent} from './button/button.component';
import {FooterComponent} from './footer/footer.component';
import {LinksComponent} from './links/link-list/links.component';
import {LinkComponent} from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    LinksComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule {
}
