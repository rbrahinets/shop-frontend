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
import {ProductListComponent} from './products/products-list/product-list.component';
import {ProductComponent} from './products/product/product.component';
import {SelectedProductComponent} from './products/selected-product/selected-product.component';
import {CategoryComponent} from './categories/category/category.component';
import {CategoryListComponent} from './categories/category-list/category-list.component';
import {ProfileComponent} from './profiles/profile/profile.component';
import {LogInComponent} from './log-in/log-in.component';
import {RegistrationComponent} from './registration/registration.component';
import {MainComponent} from './main/main.component';

const shopRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: SelectedProductComponent},
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
    ProductListComponent,
    ProductComponent,
    SelectedProductComponent,
    CategoryComponent,
    CategoryListComponent,
    ProfileComponent,
    LogInComponent,
    RegistrationComponent,
    MainComponent,
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
