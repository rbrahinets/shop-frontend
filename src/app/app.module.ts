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
import {LinkListComponent} from './links/link-list/link-list.component';
import {LinkComponent} from './links/link/link.component';
import {ProductListComponent} from './products/products-list/product-list.component';
import {ProductComponent} from './products/product/product.component';
import {CategoryComponent} from './categories/category/category.component';
import {CategoryListComponent} from './categories/category-list/category-list.component';
import {ProfileComponent} from './profiles/profile/profile.component';
import {LogInComponent} from './log-in/log-in.component';
import {RegistrationComponent} from './registration/registration.component';

const shopRoutes: Routes = [
  {path: '', component: LinkListComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LogInComponent},
  {path: 'registration', component: RegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    LinkListComponent,
    LinkComponent,
    ProductListComponent,
    ProductComponent,
    CategoryComponent,
    CategoryListComponent,
    ProfileComponent,
    LogInComponent,
    RegistrationComponent,
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
