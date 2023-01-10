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
import {LinkComponent} from './links/link/link.component';
import {ProductsComponent} from './products/products-list/products.component';

const shopRoutes: Routes = [
  {path: '', component: LinksComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    LinksComponent,
    LinkComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(shopRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule {
}
