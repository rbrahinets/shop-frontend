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
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductListItemComponent} from './products/product-list-item/product-list-item.component';
import {ProductComponent} from './products/product/product.component';
import {CategoryListComponent} from './categories/category-list/category-list.component';
import {CategoryListItemComponent} from './categories/category-list-item/category-list-item.component';
import {CategoryComponent} from './categories/category/category.component';
import {ProfileComponent} from './profile/profile.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {MainComponent} from './main/main.component';
import {CartComponent} from './cart/cart.component';

const shopRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    CartComponent,
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
